# Design Specification: Interactive Marketing KPI Dashboard

This document outlines the design, architecture, and styling specification for the interactive Marketing KPI Dashboard for `sunday_bake_marketing`.

## 1. Objectives & Requirements
- **Goal**: Create a premium, functional, and visually stunning interactive single-page dashboard.
- **Metrics to Track**: Impressions, Clicks, Conversions, CTR (Click-Through Rate), and CVR (Conversion Rate).
- **Timeline**: 3 years of performance data, grouped by month and channel (LinkedIn, Newsletter).
- **Interactivity**: Dynamic client-side filtering by **Channel** and **Year**, recalculating all metrics, trends, and charts in real-time.
- **Design Aesthetic**: Sleek developer dark-mode theme:
  - Background: Deep charcoal gray (`#0B0F19`)
  - Primary Accent: Electric Blue (`#0070f3` or `#3b82f6`)
  - Secondary Accent: Neon Cyan (`#00f2fe` or `#06b6d4`)
  - Status/Positive: Terminal Green (`#00ff87` or `#10b981`)
  - Typography: Modern typography (`Outfit` and `Inter` via Google Fonts).
- **Output**: Save as `outputs/kpi_dashboard.html`.

## 2. Layout Structure
The dashboard is structured as a single-page grid layout:
1. **Header**: Title, subtitle, and metadata block.
2. **Filters Panel**: Dropdowns for Channel and Year filtering.
3. **KPI Cards Grid**: 5 dynamic cards:
   - **Impressions**: Total volume.
   - **Clicks**: Total volume.
   - **CTR**: Calculated Click-Through Rate.
   - **Conversions**: Total volume.
   - **Conversion Rate (CVR)**: Calculated Conversion-to-Click Rate.
   Each card displays the current total/average, a trend sparkline (mini-graph), and comparison markers.
4. **Charts Section**:
   - **Main Chart**: Line/Area chart representing volume trends over time (Impressions, Clicks, Conversions).
   - **Performance Chart**: Comparison of CTR and Conversion Rate trends.
   - **Channel Share**: Donut chart representing click/conversion split between channels.
5. **Detailed Data Table**: Dynamic data table showing individual monthly rows, updating live with filtering.

## 3. Data Schema (Client-Side)
The raw dataset from `data/marketing_performance.csv` is embedded as a JSON array:
```javascript
const rawData = [
  { "year": "Year 1", "month": "January", "channel": "LinkedIn", "impressions": 25000, "clicks": 875, "conversions": 18, "ctr": 0.035, "cvr": 0.02 },
  // ... rest of the 18 data points
];
```

## 4. Interaction Flow & Logic
- **Filter Event Listeners**: Listening to `change` events on dropdowns.
- **State Management**:
  - `activeChannel`: "All", "LinkedIn", "Newsletter"
  - `activeYear`: "All", "Year 1", "Year 2", "Year 3"
- **Updates Lifecycle**:
  1. Filter raw data array based on active filters.
  2. Recalculate totals and averages:
     - `totalImpressions = sum(impressions)`
     - `totalClicks = sum(clicks)`
     - `totalConversions = sum(conversions)`
     - `overallCTR = totalClicks / totalImpressions`
     - `overallCVR = totalConversions / totalClicks`
  3. Update KPI Card text content.
  4. Update Sparklines.
  5. Update Main Chart, Performance Chart, and Donut Chart with filtered time series.
  6. Re-render Data Table rows.

## 5. Third-Party Libraries (CDN)
- **Charts**: `ApexCharts` (`https://cdn.jsdelivr.net/npm/apexcharts`) - selected for its stunning, modern, out-of-the-box dark mode themes and smooth transition animations.
- **Icons**: `Lucide Icons` (`https://unpkg.com/lucide@latest`) - clean vector icons for dev/tech style.
- **Fonts**: `Google Fonts` (`Outfit` for headers/labels, `Inter` for tables, `JetBrains Mono` for KPI numeric values).
