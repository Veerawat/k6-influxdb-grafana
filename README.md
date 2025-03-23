# 🚀 API Load Testing with k6 + Grafana + InfluxDB

A lightweight setup for running load tests on your APIs using [k6](https://k6.io) and visualizing metrics in real-time with [Grafana](https://grafana.com/) and [InfluxDB](https://www.influxdata.com/).

---


### 🔧 Install `k6` (via Homebrew on macOS)

```bash
brew install k6

For other platforms, see the official installation guide:
👉 https://grafana.com/docs/k6/latest/set-up/install-k6/
```

### 🚀 Getting Started

Start InfluxDB and Grafana with Docker Compose

```bash
docker-compose up -d
```

### Run Load Test with k6

```bash
K6_OUT=influxdb=http://localhost:8086/k6 k6 run load_test.js --verbose
```

### Access Grafana Dashboard

```bash
Visit:
👉 http://localhost:3000

Username: admin

Password: grafana
```

### Connect Grafana to InfluxDB
    1. Go to Configuration > Data Sources
    2. Click Add data source
    3. Choose InfluxDB
    4. Fill in the following:
        - URL: http://influxdb:8086
        - Database: k6
        - HTTP Method: GET
    5.Click Save & Test

### Import k6 Dashboard
    1.Go to Dashboard > Import Dashboard
    2.Enter Dashboard ID:13719
    3.Click Load
    4.Choose the InfluxDB data source you configured
