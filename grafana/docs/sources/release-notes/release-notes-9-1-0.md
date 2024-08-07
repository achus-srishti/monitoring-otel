---
aliases: []
hide_menu: true
labels:
  products:
    - cloud
    - enterprise
    - oss
title: Release notes for Grafana 9.1.0
---

<!-- Auto generated by update changelog github action -->

# Release notes for Grafana 9.1.0

### Features and enhancements

- **API:** Allow creating teams with a user defined identifier. [#48710](https://github.com/grafana/grafana/pull/48710), [@papagian](https://github.com/papagian)
- **Alerting:** Adds interval and For to alert rule details. [#53211](https://github.com/grafana/grafana/pull/53211), [@gillesdemey](https://github.com/gillesdemey)
- **Alerting:** Extend PUT rule-group route to write the entire rule group rather than top-level fields only. [#53078](https://github.com/grafana/grafana/pull/53078), [@alexweav](https://github.com/alexweav)
- **Alerting:** Use Adaptive Cards in Teams notifications. [#53532](https://github.com/grafana/grafana/pull/53532), [@grobinson-grafana](https://github.com/grobinson-grafana)
- **Azure Monitor:** Add Network Insights Dashboard. [#50362](https://github.com/grafana/grafana/pull/50362), [@Teddy-Lin](https://github.com/Teddy-Lin)
- **Chore:** Improve logging of unrecoverable errors. [#53664](https://github.com/grafana/grafana/pull/53664), [@sakjur](https://github.com/sakjur)
- **Correlations:** Add UpdateCorrelation HTTP API. [#52444](https://github.com/grafana/grafana/pull/52444), [@Elfo404](https://github.com/Elfo404)
- **Dashboard:** Reverted the changes of hiding multi-select and all variable in the datasource picker. [#53521](https://github.com/grafana/grafana/pull/53521), [@lpskdl](https://github.com/lpskdl)
- **Geomap:** Add alpha day/night layer. [#50201](https://github.com/grafana/grafana/pull/50201), [@ryantxu](https://github.com/ryantxu)
- **Geomap:** Add measuring tools. [#51608](https://github.com/grafana/grafana/pull/51608), [@drew08t](https://github.com/drew08t)
- **GrafanaUI:** Add success state to ClipboardButton. [#52069](https://github.com/grafana/grafana/pull/52069), [@evictorero](https://github.com/evictorero)
- **Heatmap:** Replace the heatmap panel with new implementation. [#50229](https://github.com/grafana/grafana/pull/50229), [@ryantxu](https://github.com/ryantxu)
- **KVStore:** Allow empty value in kv_store. [#53416](https://github.com/grafana/grafana/pull/53416), [@spinillos](https://github.com/spinillos)
- **Prometheus:** Promote Azure auth flag to configuration. [#53447](https://github.com/grafana/grafana/pull/53447), [@andresmgot](https://github.com/andresmgot)
- **Reports:** Save and update in reports should be transactional. (Enterprise)
- **Reports:** Set uid when we don't receive it in the query. (Enterprise)
- **Search:** Display only dashboards in General folder of Search Folder View. [#53607](https://github.com/grafana/grafana/pull/53607), [@lpskdl](https://github.com/lpskdl)
- **Status history/State timeline:** Support datalinks. [#50226](https://github.com/grafana/grafana/pull/50226), [@jloupdef](https://github.com/jloupdef)
- **Transform:** Add a limit transform. [#49291](https://github.com/grafana/grafana/pull/49291), [@josiahg](https://github.com/josiahg)
- **Transformations:** Add standard deviation and variance reducers. [#49753](https://github.com/grafana/grafana/pull/49753), [@selvavm](https://github.com/selvavm)

### Bug fixes

- **API:** Fix snapshot responses. [#52998](https://github.com/grafana/grafana/pull/52998), [@papagian](https://github.com/papagian)
- **Access Control:** Fix permission error during dashboard creation flow. [#53214](https://github.com/grafana/grafana/pull/53214), [@IevaVasiljeva](https://github.com/IevaVasiljeva)
- **Access Control:** Set permissions for Grafana's test data source. [#53247](https://github.com/grafana/grafana/pull/53247), [@IevaVasiljeva](https://github.com/IevaVasiljeva)
- **Alerting:** Fix migration failure. [#53253](https://github.com/grafana/grafana/pull/53253), [@papagian](https://github.com/papagian)
- **BarGauge:** Show empty bar when value, minValue and maxValue are all equal. [#53314](https://github.com/grafana/grafana/pull/53314), [@ashharrison90](https://github.com/ashharrison90)
- **Dashboard:** Fix color of bold and italics text in panel description tooltip. [#53380](https://github.com/grafana/grafana/pull/53380), [@joshhunt](https://github.com/joshhunt)
- **Loki:** Fix passing of query with defaults to code mode. [#53646](https://github.com/grafana/grafana/pull/53646), [@ivanahuckova](https://github.com/ivanahuckova)
- **Loki:** Fix producing correct log volume query for query with comments. [#53254](https://github.com/grafana/grafana/pull/53254), [@ivanahuckova](https://github.com/ivanahuckova)
- **Loki:** Fix showing of unusable labels field in detected fields. [#53319](https://github.com/grafana/grafana/pull/53319), [@ivanahuckova](https://github.com/ivanahuckova)
- **Reports:** Fix inconsistency reports. (Enterprise)
- **Tracing:** Fix OpenTelemetry Jaeger context propagation. [#53269](https://github.com/grafana/grafana/pull/53269), [@zhichli](https://github.com/zhichli)
- **Tracing:** Fix OpenTelemetry Jaeger context propagation (#53269). [#53724](https://github.com/grafana/grafana/pull/53724), [@idafurjes](https://github.com/idafurjes)
- **[9.1.x] Alerting:** AlertingProxy to elevate permissions for request forwarded to data proxy when RBAC enabled. [#53679](https://github.com/grafana/grafana/pull/53679), [@yuri-tceretian](https://github.com/yuri-tceretian)

### Breaking changes

Alert notifications to Microsoft Teams now use Adaptive Cards instead of Office 365 Connector Cards. Issue [#53532](https://github.com/grafana/grafana/issues/53532)

Starting at 9.1.0, existing heatmap panels will start using a new implementation. This can be disabled by setting the `useLegacyHeatmapPanel` feature flag to true. It can be tested on a single dashbobard by adding `?__feature.useLegacyHeatmapPanel=true` to any dashboard URL. Please report any [heatmap migration issues.](https://github.com/grafana/grafana/issues/new/choose). The most notable changes are:

- Significantly improved rendering performance
- When calculating heatmaps, the buckets are now placed on reasonable borders (1m, 5m, 30s etc)
- Round cells are no longer supported
  Issue [#50229](https://github.com/grafana/grafana/issues/50229)

### Plugin development fixes & changes

- **Plugins:** Only pass `rootUrls` field in request when not empty. [#53135](https://github.com/grafana/grafana/pull/53135), [@wbrowne](https://github.com/wbrowne)