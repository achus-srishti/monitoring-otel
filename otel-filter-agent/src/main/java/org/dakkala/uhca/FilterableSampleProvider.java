package org.dakkala.uhca;

import com.google.auto.service.AutoService;
import io.opentelemetry.sdk.autoconfigure.spi.ConfigProperties;
import io.opentelemetry.sdk.autoconfigure.spi.traces.ConfigurableSamplerProvider;
import io.opentelemetry.sdk.trace.samplers.Sampler;

@AutoService(ConfigurableSamplerProvider.class)
public class FilterableSampleProvider implements ConfigurableSamplerProvider {
    @Override
    public Sampler createSampler(ConfigProperties configProperties) {
        return new FilterableSampler(configProperties);
    }


    // Create environment variable OTEL_TRACES_SAMPLER with this value for JVM to use this provider.
    @Override
    public String getName() {
        return "filter-sampler";
    }

}
