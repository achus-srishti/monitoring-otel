package org.dakkala.uhca;

import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.StatusCode;
import io.opentelemetry.api.trace.Tracer;
import io.opentelemetry.context.Scope;
import io.opentelemetry.javaagent.extension.instrumentation.TypeInstrumentation;
import io.opentelemetry.javaagent.extension.instrumentation.TypeTransformer;
import io.opentelemetry.javaagent.extension.matcher.AgentElementMatchers;
import net.bytebuddy.asm.Advice;
import net.bytebuddy.description.type.TypeDescription;
import net.bytebuddy.implementation.bytecode.assign.Assigner;
import net.bytebuddy.matcher.ElementMatcher;
import net.bytebuddy.matcher.ElementMatchers;

import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;
import java.util.stream.Collectors;

public class FilterCodeInstrumentation implements TypeInstrumentation  {

    Logger log=Logger.getLogger(this.getClass().getName());

    @Override
    /*
        filter.otel.classloader-helper: Pass in a class or package to identify the classloader.
        If not provided all classloaders will be considered.
     */
    public ElementMatcher<ClassLoader> classLoaderOptimization() {
        String classList=System.getenv("FILTER_OTEL_CLASSLOADER_HELPER");
        if(classList.isEmpty())
            classList=System.getProperty("filter.otel.classloader-helper");
        String[] classes= Optional.ofNullable(classList).orElse("").split(",");
        List<ElementMatcher> matchers=Arrays.stream(classes).filter(clazz->!clazz.isEmpty()).map(clazz->ElementMatchers.nameContains(clazz)).collect(Collectors.toList());
        if(matchers.size()>0) {
            return ElementMatchers.anyOf(matchers);
        } else {
            return TypeInstrumentation.super.classLoaderOptimization();
        }
    }

    @Override
     /*
        filter.otel.package_scan: Pass in a class or package to identify the package or class to scan.
     */
    public ElementMatcher<TypeDescription> typeMatcher() {
        String scanList=System.getenv("FILTER_OTEL_PACKAGE_SCAN");
        if(scanList.isEmpty())
            scanList=System.getProperty("filter.otel.package_scan");
        String[] packages=Optional.ofNullable(scanList).orElse("").split(",");
        List<ElementMatcher> matchers=Arrays.stream(packages).filter(pack->!pack.isEmpty()).map(pack->ElementMatchers.nameStartsWith(pack)).collect(Collectors.toList());
        if(matchers.size()>0) {
            matchers.add(ElementMatchers.not(ElementMatchers.nameStartsWith("java.")));
            return ElementMatchers.anyOf(matchers);
        } else {
            return ElementMatchers.any();
        }
    }

    @Override
    public void transform(TypeTransformer typeTransformer) {
        log.info("Initializing transformation ...");
        typeTransformer.applyAdviceToMethod(ElementMatchers.not(ElementMatchers.isConstructor()),this.getClass().getName() + "$CodeAdvice");
    }

    // The WordCountAdvice class contains the actual pieces of code (advices) that will be added to the instrumented methods.
    @SuppressWarnings("unused")
    public static class CodeAdvice {
        // This advice is added at the beginning of the instrumented method (OnMethodEnter).
        // It creates and starts a new span, and makes it active.
        @Advice.OnMethodEnter(suppress = Throwable.class)
        public static Scope onEnter(@Advice.Origin Method method, @Advice.Local("otelSpan") Span span,
                                    @Advice.AllArguments Object[] args) {

            Logger logger =Logger.getLogger(method.getDeclaringClass().getName());
            logger.fine("AM here, Method " + method.getName() + " of class " + method
                    .getDeclaringClass().getSimpleName() + " called");


            // Get a Tracer instance from OpenTelemetry.
            //Tracer tracer = GlobalOpenTelemetry.getTracer("io.opentelemetry.tomcat-10.0");
            Tracer tracer = GlobalOpenTelemetry.getTracer("instrumentation-scope-name", "instrumentation-scope-version");

            // Start a new span with the name "mySpan".
            span = tracer.spanBuilder(method.getDeclaringClass().getName()+"."+method.getName()).startSpan();
            StringBuilder argsBuilder=new StringBuilder("");
            for(Object o: args) {
                argsBuilder.append(o.toString()).append(", ");
            }
            span.setAttribute("arguments", argsBuilder.toString());

            // Make this new span the current active span.
            Scope scope = span.makeCurrent();

            // Return the Scope instance. This will be used in the exit advice to end the span's scope.
            return scope;
        }

        // This advice is added at the end of the instrumented method (OnMethodExit).
        // It first closes the span's scope, then checks if any exception was thrown during the method's execution.
        // If an exception was thrown, it sets the span's status to ERROR and ends the span.
        // If no exception was thrown, it sets a custom attribute "wordCount" on the span, and ends the span.
        @Advice.OnMethodExit(onThrowable = Throwable.class, suppress = Throwable.class)
        public static void onExit(@Advice.Thrown Throwable throwable,
                                  @Advice.Local("otelSpan") Span span,
                                  @Advice.Enter Scope scope,
                                  @Advice.Return(readOnly = true, typing = Assigner.Typing.DYNAMIC) Object object) {
            // Close the scope to end it.
            scope.close();

            // If an exception was thrown during the method's execution, set the span's status to ERROR.
            if (throwable != null) {
                span.setStatus(StatusCode.ERROR, "Exception thrown in method");
            } else {
                span.setAttribute("returns", object!=null?object.toString():"");
            }

            // End the span. This makes it ready to be exported to the configured exporter (e.g. Elastic).
            span.end();
        }
    }

}
