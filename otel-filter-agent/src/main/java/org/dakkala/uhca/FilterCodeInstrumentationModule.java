package org.dakkala.uhca;

import com.google.auto.service.AutoService;
import io.opentelemetry.javaagent.extension.instrumentation.InstrumentationModule;
import io.opentelemetry.javaagent.extension.instrumentation.TypeInstrumentation;
import org.dakkala.uhca.backup.TimingInterceptor;

import java.util.Collections;
import java.util.List;
import java.util.logging.Logger;

@AutoService(InstrumentationModule.class)
public class FilterCodeInstrumentationModule extends InstrumentationModule {

        Logger log=Logger.getLogger(this.getClass().getName());

    public FilterCodeInstrumentationModule() {
        super("otel-extension", "otel-extension-1");
        log.info("Loading otel-extension agent.");
    }

    @Override
    public List<TypeInstrumentation> typeInstrumentations() {
        return Collections.singletonList(new FilterCodeInstrumentation());
    }

    @Override
    public int order() {
        return 1;
    }

    @Override
    public boolean isHelperClass(String className) {
        return className.startsWith(FilterCodeInstrumentation.class.getName()) || className.startsWith(TimingInterceptor.class.getName());
    }

    @Override
    public List<String> getAdditionalHelperClassNames() {
        return List.of("io.opentelemetry.javaagent.extension.instrumentation.TypeInstrumentation", FilterCodeInstrumentation.class.getName(), TimingInterceptor.class.getName());
    }
}