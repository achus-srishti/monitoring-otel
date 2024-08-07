"# monitoring-otel" 
jaeger-all-in-one --collector.otlp.grpc.host-port 9090  --collector.otlp.http.host-port 9092
prometheus.exe --config.file prometheus.yml --web.listen-address :9093
otelcol-contrib.exe --config otel.yaml
grafana.exe server
alertmanager.exe --cluster.listen-address=""   --web.listen-address=":9095"

intellij config
DD_LOGS_INJECTION=true;OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318;OTEL_INSTRUMENTATION_HTTP_CLIENT_CAPTURE_REQUEST_HEADERS=*;OTEL_INSTRUMENTATION_HTTP_CLIENT_CAPTURE_RESPONSE_HEADERS=*;OTEL_LOGS_EXPORTER=none;OTEL_METRICS_EXPORTER=none;OTEL_RESOURCE_ATTRIBUTES=application\=testapp1;OTEL_SERVICE_NAME=testapp1;OTEL_TRACES_EXPORTER=otlp

Add otel java agent to runtime -javaagent:opentelemetry-javaagent.jar