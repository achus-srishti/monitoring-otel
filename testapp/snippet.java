public static OpenTelemetry buildOT() {
			final String exporter = System.getenv().getOrDefault("OTEL_EXPORTER_OTLP_ENDPOINT", "http://localhost:4317");
			final String resourceattr = System.getenv().getOrDefault("OTEL_RESOURCE_ATTRIBUTES", "service.name=msg-sender");
			Attributes attr = Attributes.builder()
					.put("namespace", "aws-otel")
					.put("service.name", resourceattr.split("service.name=")[1].split(",")[0])
					.build();

			Resource resource = Resource.getDefault().merge(
					Resource.create(attr));

			return OpenTelemetrySdk.builder()
					.setPropagators(ContextPropagators.create(
							TextMapPropagator.composite(
									B3Propagator.injectingMultiHeaders(),
									W3CTraceContextPropagator.getInstance())))
					.setTracerProvider(
							SdkTracerProvider.builder()
									.addSpanProcessor(
											BatchSpanProcessor.builder(OtlpGrpcSpanExporter.builder().setEndpoint(exporter).build()).build())
									//.setIdGenerator()
									.setResource(resource)
									.build())
					.buildAndRegisterGlobal();
		}

spring.application.name=kafka_otel_poc
logging.level.root=DEBUG
management.tracing.enabled=true
management.tracing.sampling.probability=1.0
management.otlp.tracing.endpoint=http://localhost:4318/v1/traces
management.endpoints.web.exposure.include=*

<dependency>
			<groupId>io.opentelemetry.instrumentation</groupId>
			<artifactId>opentelemetry-kafka-clients-2.6</artifactId>
			<version>2.5.0-alpha</version>
		</dependency>
		<dependency>
			<groupId>io.opentelemetry</groupId>
			<artifactId>opentelemetry-exporter-otlp</artifactId>
			<version>1.35.0</version>
		</dependency>
		<dependency>
			<groupId>io.opentelemetry</groupId>
			<artifactId>opentelemetry-sdk</artifactId>
			<version>1.35.0</version>
		</dependency>
		<!-- https://mvnrepository.com/artifact/io.opentelemetry/opentelemetry-extension-trace-propagators -->
		<!-- B3 propagator -->
		<dependency>
			<groupId>io.opentelemetry</groupId>
			<artifactId>opentelemetry-extension-trace-propagators</artifactId>
			<version>1.35.0</version>
		</dependency>
		<dependency>
			<groupId>io.micrometer</groupId>
			<artifactId>micrometer-registry-prometheus</artifactId>
		</dependency>
