package org.dakkala.uhca;

import io.opentelemetry.api.common.AttributeKey;
import io.opentelemetry.api.common.Attributes;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.SpanContext;
import io.opentelemetry.api.trace.SpanKind;
import io.opentelemetry.context.Context;
import io.opentelemetry.sdk.autoconfigure.spi.ConfigProperties;
import io.opentelemetry.sdk.trace.ReadableSpan;
import io.opentelemetry.sdk.trace.data.LinkData;
import io.opentelemetry.sdk.trace.samplers.Sampler;
import io.opentelemetry.sdk.trace.samplers.SamplingDecision;
import io.opentelemetry.sdk.trace.samplers.SamplingResult;

import java.util.List;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class FilterableSampler implements Sampler {

    Logger log=Logger.getLogger(FilterableSampler.class.getName());

    List<Pattern> urls;
    List<Pattern> names;

    /*
    filter.otel.urls: exclude the span generated from rest endpoints.
    filter.otel.names: exclude the span with name.
     */
    public FilterableSampler(ConfigProperties configProperties) {

        String url_list=configProperties.getString("filter.otel.urls", "");
        urls= Stream.of(url_list.split(",")).map(url-> Pattern.compile(url)).collect(Collectors.toList());
        log.fine(">>>>>>>>>>>>>>>>>   " + url_list);

        String name_list=configProperties.getString("filter.otel.names", "");
        names=Stream.of(name_list.split(",")).map(url-> Pattern.compile(url)).collect(Collectors.toList());
        log.fine(">>>>>>>>>>>>>>>>>   " + name_list);

    }

    @Override
    public SamplingResult shouldSample( Context parentContext,
                                        String traceId,
                                        String name,
                                        SpanKind spanKind,
                                        Attributes attributes,
                                        List<LinkData> parentLinks) {
        log.fine(">>>>>>>>>>>>>>>>>>   " + attributes.asMap().toString());
        log.fine("Kind: " + spanKind);
        if (spanKind == SpanKind.SERVER) {
            String httpRoute=attributes.get(AttributeKey.stringKey("url.path"));
            log.fine("HTTP ROUTE: " + httpRoute);
            log.fine("URLs: " + urls);
            if(httpRoute!=null) {
                boolean drop=false;
                for(Pattern pattern:urls) {
                    log.fine(">>>>>>>>>>>> Comparing: " + pattern.pattern() + " <--> " + httpRoute);
                    Matcher matcher=pattern.matcher(httpRoute);
                    if(matcher.matches()) {
                        log.fine(">>>>>>>>>>>>>" + matcher.group());
                        log.fine(">>>>>>>>>>>> matched: " + pattern.pattern() + " <--> " + httpRoute);
                        drop=true;
                        break;
                    }
                }
                if(drop==false) {
                    for (Pattern pattern : names) {
                        log.fine(">>>>>>>>>>>> Comparing: " + pattern.pattern() + " <--> " + httpRoute);
                        Matcher matcher = pattern.matcher(httpRoute);
                        if (matcher.matches()) {
                            log.fine(">>>>>>>>>>>>>" + matcher.group());
                            log.fine(">>>>>>>>>>>> matched: " + pattern.pattern() + " <--> " + httpRoute);
                            drop = true;
                            break;
                        }
                    }
                }
                if(drop) {
                    log.fine("Dropped (" + spanKind + ")" + ", " + name );
                    return SamplingResult.create(SamplingDecision.DROP, Attributes.empty());
                }
            }
            log.fine("Recording (" + spanKind + ")" + httpRoute + ", " + name );
            return SamplingResult.create(SamplingDecision.RECORD_AND_SAMPLE);
        } else {
            Span parentSpan=Span.fromContext(parentContext);
            if(parentSpan!=null) {
                SpanContext parentSpanContext=parentSpan.getSpanContext();

                if (parentSpanContext.isSampled()) {
                    log.fine("Recording (" + spanKind + ")" + ", " + name + ", parent is sampled" );
                    return SamplingResult.create(SamplingDecision.RECORD_AND_SAMPLE);
                } else {
                    StringBuilder parentDetails=new StringBuilder();
                    if (parentSpan instanceof ReadableSpan) {
                        ReadableSpan parentReadableSpan=null;
                        parentReadableSpan= (ReadableSpan) parentSpan;
                        parentDetails.append("Name: ").append(parentReadableSpan.getName()).append(",").append(parentReadableSpan.getAttributes().toBuilder());
                    }
                    log.fine("Dropped (" + spanKind + ")" + ", " + name + ", parent is not sampled, " +  parentDetails);
                    return SamplingResult.create(SamplingDecision.DROP, Attributes.empty());
                }
            } else {
                log.fine("Recording (" + spanKind + ")" + ", " + name + ", parent is empty and is default case" );
                return SamplingResult.create(SamplingDecision.RECORD_AND_SAMPLE);
            }
        }
    }

    @Override
    public String getDescription() {
        return "This sampler can filter out span based on urls.";
    }
}
