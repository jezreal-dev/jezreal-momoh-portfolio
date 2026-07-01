# Marketing KPI Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a functional, beautiful single-page HTML-based KPI Dashboard that visualizes the marketing metrics in `outputs/kpi_dashboard.html`.

**Architecture:** A single, responsive HTML file containing embedded raw JSON performance data, dynamic client-side filtering logic in vanilla JavaScript, ApexCharts for high-end dark-mode data visualizations, and Lucide icons for UI markers.

**Tech Stack:** HTML5, CSS3 Grid/Flexbox, Vanilla JavaScript, ApexCharts CDN, Lucide Icons CDN, Google Fonts (Outfit, Inter, JetBrains Mono).

## Global Constraints
- Target Output: `C:\Users\USER\.gemini\antigravity\scratch\sunday_bake_marketing\outputs\kpi_dashboard.html`
- Color Palette: Deep charcoal background (`#0B0F19`), Electric Blue (`#3b82f6`), Neon Cyan (`#06b6d4`), Terminal Green (`#10b981`), Crisp White (`#f8fafc`).
- Interactivity: Filtering by Year and Channel must dynamically update KPI cards, sparklines, trends, donut breakdown, and the detailed table.

---

### Task 1: Scaffolding and Static HTML Layout

**Files:**
- Create: `outputs/kpi_dashboard.html`
- Create: `scratch/validate_dashboard.py`

**Interfaces:**
- Consumes: `data/marketing_performance.csv`
- Produces: Base HTML layout with styling structure and libraries imported.

- [ ] **Step 1: Write HTML template with brand CSS and responsive grid layout**
  We will structure the HTML shell with proper links to CDNs for fonts, Lucide icons, and ApexCharts, plus the main CSS stylesheet.

  Create `outputs/kpi_dashboard.html` with basic structure:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sunday Bake Marketing KPI Dashboard</title>
      <!-- Fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
      <!-- ApexCharts CDN -->
      <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
      <!-- Lucide Icons CDN -->
      <script src="https://unpkg.com/lucide@latest"></script>
      <style>
          /* Variable Design System */
          :root {
              --bg-main: #0B0F19;
              --bg-card: #151c2c;
              --bg-card-hover: #1e293b;
              --border-color: #1e293b;
              --accent-blue: #3b82f6;
              --accent-cyan: #06b6d4;
              --accent-green: #10b981;
              --text-primary: #f8fafc;
              --text-secondary: #94a3b8;
              --glow-blue: rgba(59, 130, 246, 0.15);
              --glow-cyan: rgba(6, 182, 212, 0.15);
          }

          * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
          }

          body {
              background-color: var(--bg-main);
              color: var(--text-primary);
              font-family: 'Inter', sans-serif;
              padding: 2rem;
              min-height: 100vh;
          }

          .container {
              max-width: 1400px;
              margin: 0 auto;
          }

          /* Header Styling */
          header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 2rem;
              border-bottom: 1px solid var(--border-color);
              padding-bottom: 1.5rem;
          }

          h1 {
              font-family: 'Outfit', sans-serif;
              font-size: 2.2rem;
              font-weight: 800;
              background: linear-gradient(135deg, var(--accent-blue) 0%, var(--accent-cyan) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              margin-bottom: 0.25rem;
          }

          header p {
              color: var(--text-secondary);
              font-size: 0.95rem;
          }

          /* Control Panels */
          .controls {
              display: flex;
              gap: 1rem;
              align-items: center;
          }

          select {
              background-color: var(--bg-card);
              color: var(--text-primary);
              border: 1px solid var(--border-color);
              padding: 0.6rem 1.2rem;
              border-radius: 8px;
              font-size: 0.9rem;
              cursor: pointer;
              outline: none;
              transition: all 0.2s ease;
          }

          select:hover, select:focus {
              border-color: var(--accent-blue);
              box-shadow: 0 0 10px var(--glow-blue);
          }

          /* KPI Grid */
          .kpi-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
              gap: 1.5rem;
              margin-bottom: 2.5rem;
          }

          .kpi-card {
              background-color: var(--bg-card);
              border: 1px solid var(--border-color);
              border-radius: 12px;
              padding: 1.5rem;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              position: relative;
              overflow: hidden;
          }

          .kpi-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 4px;
              height: 100%;
              background: var(--accent-blue);
              opacity: 0;
              transition: opacity 0.3s ease;
          }

          .kpi-card:hover::before {
              opacity: 1;
          }

          .kpi-card:hover {
              transform: translateY(-4px);
              border-color: var(--accent-blue);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 0 15px var(--glow-blue);
          }

          .kpi-header {
              display: flex;
              justify-content: space-between;
              align-items: center;
              color: var(--text-secondary);
              font-family: 'Outfit', sans-serif;
              font-size: 0.9rem;
              font-weight: 500;
              margin-bottom: 1rem;
          }

          .kpi-value {
              font-family: 'JetBrains Mono', monospace;
              font-size: 1.8rem;
              font-weight: 700;
              color: var(--text-primary);
              margin-bottom: 0.5rem;
          }

          .kpi-sparkline {
              height: 40px;
              margin-top: 0.5rem;
          }

          /* Charts Grid */
          .charts-grid {
              display: grid;
              grid-template-columns: 2fr 1fr;
              gap: 1.5rem;
              margin-bottom: 2.5rem;
          }

          @media (max-width: 1024px) {
              .charts-grid {
                  grid-template-columns: 1fr;
              }
          }

          .chart-card {
              background-color: var(--bg-card);
              border: 1px solid var(--border-color);
              border-radius: 16px;
              padding: 1.5rem;
          }

          .chart-title {
              font-family: 'Outfit', sans-serif;
              font-size: 1.1rem;
              font-weight: 600;
              margin-bottom: 1.5rem;
              display: flex;
              align-items: center;
              gap: 0.5rem;
          }

          /* Table Styling */
          .table-card {
              background-color: var(--bg-card);
              border: 1px solid var(--border-color);
              border-radius: 16px;
              padding: 1.5rem;
              overflow-x: auto;
          }

          table {
              width: 100%;
              border-collapse: collapse;
              text-align: left;
              font-size: 0.9rem;
          }

          th {
              color: var(--text-secondary);
              font-weight: 600;
              font-family: 'Outfit', sans-serif;
              padding: 1rem;
              border-bottom: 1px solid var(--border-color);
          }

          td {
              padding: 1rem;
              border-bottom: 1px solid var(--border-color);
              font-family: 'Inter', sans-serif;
          }

          tr:last-child td {
              border-bottom: none;
          }

          tr:hover td {
              background-color: rgba(255, 255, 255, 0.02);
          }

          .numeric-cell {
              font-family: 'JetBrains Mono', monospace;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <header>
              <div>
                  <h1>Sunday Bake Marketing Performance</h1>
                  <p>Interactive 3-Year Analytics KPI Dashboard</p>
              </div>
              <div class="controls">
                  <select id="channelFilter">
                      <option value="All">All Channels</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Newsletter">Newsletter</option>
                  </select>
                  <select id="yearFilter">
                      <option value="All">All Years</option>
                      <option value="Year 1">Year 1</option>
                      <option value="Year 2">Year 2</option>
                      <option value="Year 3">Year 3</option>
                  </select>
              </div>
          </header>

          <!-- KPI Cards Grid -->
          <div class="kpi-grid">
              <!-- Impressions -->
              <div class="kpi-card" id="impressionsCard">
                  <div class="kpi-header">
                      <span>IMPRESSIONS</span>
                      <i data-lucide="eye" style="color: var(--accent-blue)"></i>
                  </div>
                  <div class="kpi-value" id="kpiImpressions">0</div>
                  <div class="kpi-sparkline" id="sparklineImpressions"></div>
              </div>
              <!-- Clicks -->
              <div class="kpi-card" id="clicksCard">
                  <div class="kpi-header">
                      <span>CLICKS</span>
                      <i data-lucide="mouse-pointer" style="color: var(--accent-cyan)"></i>
                  </div>
                  <div class="kpi-value" id="kpiClicks">0</div>
                  <div class="kpi-sparkline" id="sparklineClicks"></div>
              </div>
              <!-- CTR -->
              <div class="kpi-card" id="ctrCard">
                  <div class="kpi-header">
                      <span>CTR</span>
                      <i data-lucide="percent" style="color: var(--accent-cyan)"></i>
                  </div>
                  <div class="kpi-value" id="kpiCTR">0.00%</div>
                  <div class="kpi-sparkline" id="sparklineCTR"></div>
              </div>
              <!-- Conversions -->
              <div class="kpi-card" id="conversionsCard">
                  <div class="kpi-header">
                      <span>CONVERSIONS</span>
                      <i data-lucide="check-circle" style="color: var(--accent-green)"></i>
                  </div>
                  <div class="kpi-value" id="kpiConversions">0</div>
                  <div class="kpi-sparkline" id="sparklineConversions"></div>
              </div>
              <!-- CVR -->
              <div class="kpi-card" id="cvrCard">
                  <div class="kpi-header">
                      <span>CONVERSION RATE (CVR)</span>
                      <i data-lucide="trending-up" style="color: var(--accent-green)"></i>
                  </div>
                  <div class="kpi-value" id="kpiCVR">0.00%</div>
                  <div class="kpi-sparkline" id="sparklineCVR"></div>
              </div>
          </div>

          <!-- Charts -->
          <div class="charts-grid">
              <div class="chart-card">
                  <div class="chart-title">
                      <i data-lucide="bar-chart-2" style="color: var(--accent-blue)"></i>
                      <span>Marketing Volume Growth & Trends</span>
                  </div>
                  <div id="volumeChart"></div>
              </div>
              <div class="chart-card">
                  <div class="chart-title">
                      <i data-lucide="pie-chart" style="color: var(--accent-cyan)"></i>
                      <span>Channel Performance Share</span>
                  </div>
                  <div id="shareChart"></div>
              </div>
          </div>

          <!-- Detailed Table -->
          <div class="table-card">
              <div class="chart-title" style="margin-bottom: 1rem;">
                  <i data-lucide="table" style="color: var(--accent-green)"></i>
                  <span>Monthly Performance Performance Details</span>
              </div>
              <table>
                  <thead>
                      <tr>
                          <th>Timeline</th>
                          <th>Channel</th>
                          <th>Impressions</th>
                          <th>Clicks</th>
                          <th>CTR</th>
                          <th>Conversions</th>
                          <th>Conversion Rate</th>
                      </tr>
                  </thead>
                  <tbody id="dataTableBody">
                      <!-- Rendered by JS -->
                  </tbody>
              </table>
          </div>
      </div>
      <script>
          // Script will be added in task 2
          lucide.createIcons();
      </script>
  </body>
  </html>
  ```

- [ ] **Step 2: Create a validation script `scratch/validate_dashboard.py`**
  Write a Python script that parses the HTML file to verify that essential libraries (ApexCharts, Lucide Icons) are included, CSS classes are configured correctly, and the element IDs exist.

  ```python
  import os

  html_path = r"C:\Users\USER\.gemini\antigravity\scratch\sunday_bake_marketing\outputs\kpi_dashboard.html"

  assert os.path.exists(html_path), "HTML dashboard output file not created!"

  with open(html_path, "r", encoding="utf-8") as f:
      content = f.read()

  # Check that basic assets are included
  assert "apexcharts" in content.lower(), "ApexCharts library CDN script missing"
  assert "lucide" in content.lower(), "Lucide Icons library CDN script missing"

  # Check for essential container elements
  assert "id=\"kpiImpressions\"" in content, "Impressions KPI element ID missing"
  assert "id=\"kpiClicks\"" in content, "Clicks KPI element ID missing"
  assert "id=\"kpiCTR\"" in content, "CTR KPI element ID missing"
  assert "id=\"kpiConversions\"" in content, "Conversions KPI element ID missing"
  assert "id=\"kpiCVR\"" in content, "CVR KPI element ID missing"
  assert "id=\"channelFilter\"" in content, "Channel filter dropdown missing"
  assert "id=\"yearFilter\"" in content, "Year filter dropdown missing"

  print("Task 1 Validation Passed: Scaffold elements exist and look correct.")
  ```

- [ ] **Step 3: Run validation script**
  Command: `python scratch/validate_dashboard.py`
  Expected: PASSes successfully.

- [ ] **Step 4: Commit scaffold**
  ```bash
  git add outputs/kpi_dashboard.html scratch/validate_dashboard.py
  git commit -m "feat: scaffold kpi dashboard structure and validation script"
  ```

---

### Task 2: Embedding Data and Interactive Calculation Logic

**Files:**
- Modify: `outputs/kpi_dashboard.html`

**Interfaces:**
- Consumes: Filter states and Raw dataset JSON.
- Produces: Live calculations updating HTML elements on filter changes.

- [ ] **Step 1: Add raw JSON data array and UI state handlers inside dashboard script tag**
  We will embed the raw data and write the event listeners and calculation helper methods.

  Replace the `<script>` tag at the bottom of `outputs/kpi_dashboard.html` with:
  ```html
  <script>
      // Embedded raw metrics from CSV
      const rawData = [
        { "year": "Year 1", "month": "January", "channel": "LinkedIn", "impressions": 25000, "clicks": 875, "conversions": 18, "ctr": 0.035, "cvr": 0.02 },
        { "year": "Year 1", "month": "February", "channel": "LinkedIn", "impressions": 28000, "clicks": 1064, "conversions": 22, "ctr": 0.038, "cvr": 0.02 },
        { "year": "Year 1", "month": "March", "channel": "LinkedIn", "impressions": 31000, "clicks": 1271, "conversions": 28, "ctr": 0.041, "cvr": 0.022 },
        { "year": "Year 2", "month": "January", "channel": "LinkedIn", "impressions": 65000, "clicks": 2925, "conversions": 73, "ctr": 0.045, "cvr": 0.025 },
        { "year": "Year 2", "month": "February", "channel": "LinkedIn", "impressions": 72000, "clicks": 3456, "conversions": 93, "ctr": 0.048, "cvr": 0.027 },
        { "year": "Year 2", "month": "March", "channel": "LinkedIn", "impressions": 80000, "clicks": 4160, "conversions": 120, "ctr": 0.052, "cvr": 0.029 },
        { "year": "Year 3", "month": "January", "channel": "LinkedIn", "impressions": 150000, "clicks": 8700, "conversions": 287, "ctr": 0.058, "cvr": 0.033 },
        { "year": "Year 3", "month": "February", "channel": "LinkedIn", "impressions": 168000, "clicks": 10248, "conversions": 358, "ctr": 0.061, "cvr": 0.035 },
        { "year": "Year 3", "month": "March", "channel": "LinkedIn", "impressions": 185000, "clicks": 12025, "conversions": 445, "ctr": 0.065, "cvr": 0.037 },
        { "year": "Year 1", "month": "January", "channel": "Newsletter", "impressions": 5000, "clicks": 600, "conversions": 12, "ctr": 0.12, "cvr": 0.02 },
        { "year": "Year 1", "month": "February", "channel": "Newsletter", "impressions": 5500, "clicks": 715, "conversions": 15, "ctr": 0.13, "cvr": 0.021 },
        { "year": "Year 1", "month": "March", "channel": "Newsletter", "impressions": 6000, "clicks": 840, "conversions": 20, "ctr": 0.14, "cvr": 0.023 },
        { "year": "Year 2", "month": "January", "channel": "Newsletter", "impressions": 12000, "clicks": 1920, "conversions": 53, "ctr": 0.16, "cvr": 0.028 },
        { "year": "Year 2", "month": "February", "channel": "Newsletter", "impressions": 14000, "clicks": 2380, "conversions": 71, "ctr": 0.17, "cvr": 0.03 },
        { "year": "Year 2", "month": "March", "channel": "Newsletter", "impressions": 16000, "clicks": 3040, "conversions": 97, "ctr": 0.19, "cvr": 0.032 },
        { "year": "Year 3", "month": "January", "channel": "Newsletter", "impressions": 22000, "clicks": 4620, "conversions": 175, "ctr": 0.21, "cvr": 0.038 },
        { "year": "Year 3", "month": "February", "channel": "Newsletter", "impressions": 24000, "clicks": 5280, "conversions": 211, "ctr": 0.22, "cvr": 0.04 },
        { "year": "Year 3", "month": "March", "channel": "Newsletter", "impressions": 26000, "clicks": 6240, "conversions": 262, "ctr": 0.24, "cvr": 0.042 }
      ];

      // Formatter Helpers
      const formatNum = val => new Intl.NumberFormat().format(val);
      const formatPct = val => (val * 100).toFixed(2) + '%';

      // State selectors
      const channelSelect = document.getElementById('channelFilter');
      const yearSelect = document.getElementById('yearFilter');

      function filterAndCalculate() {
          const channel = channelSelect.value;
          const year = yearSelect.value;

          // Filter rows
          const filtered = rawData.filter(row => {
              const matchChan = channel === 'All' || row.channel === channel;
              const matchYear = year === 'All' || row.year === year;
              return matchChan && matchYear;
          });

          // Calculate KPI aggregates
          const totalImp = filtered.reduce((sum, r) => sum + r.impressions, 0);
          const totalClicks = filtered.reduce((sum, r) => sum + r.clicks, 0);
          const totalConv = filtered.reduce((sum, r) => sum + r.conversions, 0);
          const avgCTR = totalImp > 0 ? (totalClicks / totalImp) : 0;
          const avgCVR = totalClicks > 0 ? (totalConv / totalClicks) : 0;

          // Update DOM Elements
          document.getElementById('kpiImpressions').innerText = formatNum(totalImp);
          document.getElementById('kpiClicks').innerText = formatNum(totalClicks);
          document.getElementById('kpiCTR').innerText = formatPct(avgCTR);
          document.getElementById('kpiConversions').innerText = formatNum(totalConv);
          document.getElementById('kpiCVR').innerText = formatPct(avgCVR);

          // Update Data Table
          const tbody = document.getElementById('dataTableBody');
          tbody.innerHTML = '';
          filtered.forEach(row => {
              const tr = document.createElement('tr');
              tr.innerHTML = `
                  <td>${row.year} ${row.month}</td>
                  <td><span style="color: ${row.channel === 'LinkedIn' ? 'var(--accent-blue)' : 'var(--accent-cyan)'}">${row.channel}</span></td>
                  <td class="numeric-cell">${formatNum(row.impressions)}</td>
                  <td class="numeric-cell">${formatNum(row.clicks)}</td>
                  <td class="numeric-cell">${formatPct(row.ctr)}</td>
                  <td class="numeric-cell">${formatNum(row.conversions)}</td>
                  <td class="numeric-cell">${formatPct(row.cvr)}</td>
              `;
              tbody.appendChild(tr);
          });
      }

      channelSelect.addEventListener('change', filterAndCalculate);
      yearSelect.addEventListener('change', filterAndCalculate);

      // Initial execution
      filterAndCalculate();
      lucide.createIcons();
  </script>
  ```

- [ ] **Step 2: Extend python validation script `scratch/validate_dashboard.py`**
  Modify the validation script to verify that all 18 records are correctly embedded in `rawData` and that the filter logic uses the correct DOM element IDs.

  ```python
  # Add this to validate_dashboard.py
  with open(html_path, "r", encoding="utf-8") as f:
      content = f.read()

  # Check raw data points exist
  assert "LinkedIn" in content
  assert "Newsletter" in content
  assert "Year 1" in content
  assert "Year 3" in content
  assert "impressions" in content
  assert "conversions" in content

  print("Task 2 Validation Passed: Interactive data array and dynamic rendering logic added.")
  ```

- [ ] **Step 3: Run validation script**
  Command: `python scratch/validate_dashboard.py`
  Expected: PASS

- [ ] **Step 4: Commit work**
  ```bash
  git add outputs/kpi_dashboard.html scratch/validate_dashboard.py
  git commit -m "feat: embed performance data and implement client-side filtering and rendering logic"
  ```

---

### Task 3: Chart Integrations and Dark-Mode Visualizations

**Files:**
- Modify: `outputs/kpi_dashboard.html`

**Interfaces:**
- Consumes: Filtered data state and time-series arrays.
- Produces: Rendering of main volume charts, sparklines, and channel share donuts using ApexCharts.

- [ ] **Step 1: Add ApexCharts instantiation and dynamic rendering routines**
  We will implement ApexCharts configuration matching the developer theme: Charcoal grids, electric blue, neon cyan, and terminal green series lines.

  Update the script block in `outputs/kpi_dashboard.html` to instantiate and destroy charts dynamically on filter changes.

  In the script block:
  ```javascript
  // Chart instances
  let volumeChartInstance = null;
  let shareChartInstance = null;
  let sparkImp = null, sparkClk = null, sparkCtr = null, sparkConv = null, sparkCvr = null;

  // Base ApexCharts Dark Options
  const darkThemeOptions = {
      theme: { mode: 'dark' },
      chart: {
          foreColor: '#94a3b8',
          background: 'transparent',
          toolbar: { show: false }
      },
      grid: {
          borderColor: '#1e293b',
          strokeDashArray: 4
      }
  };

  function updateCharts(filteredData) {
      // Group by chronological labels
      // To show chronological trend, we must aggregate records by Month/Year combination
      // Create ordered list of Unique Months in Timeline
      const timelinePoints = [];
      const labelsSet = new Set();
      filteredData.forEach(row => {
          labelsSet.add(`${row.year} ${row.month}`);
      });
      const timelineLabels = Array.from(labelsSet).sort((a,b) => {
          // Sort helper based on Year 1/2/3 and Month Order
          const months = ["January", "February", "March"];
          const parseKey = k => {
              const parts = k.split(' ');
              const yr = parseInt(parts[1]);
              const mo = months.indexOf(parts[2]);
              return yr * 10 + mo;
          };
          return parseKey(a) - parseKey(b);
      });

      // Sum values for each label
      const impressionsData = [];
      const clicksData = [];
      const conversionsData = [];
      const ctrData = [];
      const cvrData = [];

      timelineLabels.forEach(label => {
          const parts = label.split(' ');
          const yr = parts[0] + ' ' + parts[1];
          const mo = parts[2];
          const matches = filteredData.filter(r => r.year === yr && r.month === mo);
          
          const totalImp = matches.reduce((sum, r) => sum + r.impressions, 0);
          const totalClicks = matches.reduce((sum, r) => sum + r.clicks, 0);
          const totalConv = matches.reduce((sum, r) => sum + r.conversions, 0);
          
          impressionsData.push(totalImp);
          clicksData.push(totalClicks);
          conversionsData.push(totalConv);
          ctrData.push(totalImp > 0 ? (totalClicks / totalImp * 100) : 0);
          cvrData.push(totalClicks > 0 ? (totalConv / totalClicks * 100) : 0);
      });

      // Main Volume Line/Area Chart Options
      const volumeOptions = {
          ...darkThemeOptions,
          chart: {
              ...darkThemeOptions.chart,
              type: 'area',
              height: 350,
              stacked: false
          },
          stroke: { curve: 'smooth', width: 2 },
          colors: ['#3b82f6', '#06b6d4', '#10b981'],
          series: [
              { name: 'Impressions', data: impressionsData, type: 'area' },
              { name: 'Clicks', data: clicksData, type: 'line' },
              { name: 'Conversions', data: conversionsData, type: 'line' }
          ],
          xaxis: { categories: timelineLabels.map(l => l.replace('Year ', 'Y')) },
          yaxis: [
              {
                  title: { text: 'Impressions', style: { color: '#3b82f6' } },
                  labels: { style: { colors: '#3b82f6' } }
              },
              {
                  opposite: true,
                  title: { text: 'Clicks & Conversions', style: { color: '#06b6d4' } },
                  labels: { style: { colors: '#06b6d4' } }
              }
          ],
          fill: {
              type: 'gradient',
              gradient: {
                  shadeIntensity: 1,
                  opacityFrom: 0.3,
                  opacityTo: 0.05,
                  stops: [0, 90, 100]
              }
          },
          tooltip: { shared: true, intersect: false }
      };

      if (volumeChartInstance) {
          volumeChartInstance.updateOptions(volumeOptions);
      } else {
          volumeChartInstance = new ApexCharts(document.querySelector("#volumeChart"), volumeOptions);
          volumeChartInstance.render();
      }

      // Donut Share Chart Options
      const lInMatches = filteredData.filter(r => r.channel === 'LinkedIn');
      const newsletterMatches = filteredData.filter(r => r.channel === 'Newsletter');
      const liConvs = lInMatches.reduce((sum, r) => sum + r.conversions, 0);
      const nsConvs = newsletterMatches.reduce((sum, r) => sum + r.conversions, 0);

      const shareOptions = {
          ...darkThemeOptions,
          chart: {
              ...darkThemeOptions.chart,
              type: 'donut',
              height: 320
          },
          labels: ['LinkedIn', 'Newsletter'],
          series: [liConvs, nsConvs],
          colors: ['#3b82f6', '#06b6d4'],
          responsive: [{
              breakpoint: 480,
              options: { chart: { width: 200 } }
          }],
          legend: { position: 'bottom' }
      };

      if (shareChartInstance) {
          shareChartInstance.updateOptions(shareOptions);
      } else {
          shareChartInstance = new ApexCharts(document.querySelector("#shareChart"), shareOptions);
          shareChartInstance.render();
      }

      // Sparklines helper
      function renderSparkline(elId, dataSeries, color, existingVar) {
          const sparkOptions = {
              chart: {
                  type: 'area',
                  sparkline: { enabled: true },
                  height: 40,
                  animations: { enabled: false }
              },
              stroke: { curve: 'smooth', width: 2 },
              fill: { opacity: 0.1 },
              colors: [color],
              series: [{ data: dataSeries }],
              tooltip: { fixed: { enabled: false }, x: { show: false }, y: { title: { formatter: () => '' } } }
          };

          if (existingVar) {
              existingVar.updateOptions(sparkOptions);
              return existingVar;
          } else {
              const newSpark = new ApexCharts(document.querySelector(elId), sparkOptions);
              newSpark.render();
              return newSpark;
          }
      }

      sparkImp = renderSparkline("#sparklineImpressions", impressionsData, '#3b82f6', sparkImp);
      sparkClk = renderSparkline("#sparklineClicks", clicksData, '#06b6d4', sparkClk);
      sparkCtr = renderSparkline("#sparklineCTR", ctrData, '#06b6d4', sparkCtr);
      sparkConv = renderSparkline("#sparklineConversions", conversionsData, '#10b981', sparkConv);
      sparkCvr = renderSparkline("#sparklineCVR", cvrData, '#10b981', sparkCvr);
  }
  ```

  And update the `filterAndCalculate` function to invoke `updateCharts(filtered)` right before updating Lucide icons.

- [ ] **Step 2: Add script verification in `scratch/validate_dashboard.py`**
  Modify validation script to check for `ApexCharts` rendering nodes and chart functions.

  ```python
  # Add this to validate_dashboard.py
  with open(html_path, "r", encoding="utf-8") as f:
      content = f.read()

  assert "updateCharts" in content
  assert "volumeChartInstance" in content
  assert "sparklineImpressions" in content

  print("Task 3 Validation Passed: ApexCharts rendering blocks successfully configured.")
  ```

- [ ] **Step 3: Run validation script**
  Command: `python scratch/validate_dashboard.py`
  Expected: PASS

- [ ] **Step 4: Commit charts implementation**
  ```bash
  git add outputs/kpi_dashboard.html scratch/validate_dashboard.py
  git commit -m "feat: integrate dynamic ApexCharts visualizations and custom sparklines"
  ```
