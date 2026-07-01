import os
import sys

html_path = r"C:\Users\USER\.gemini\antigravity\scratch\sunday_bake_marketing\outputs\kpi_dashboard.html"

def validate_task1():
    print("Validating Task 1: Scaffolding and HTML elements...")
    if not os.path.exists(html_path):
        print(f"ERROR: {html_path} does not exist!")
        sys.exit(1)
        
    with open(html_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Check libraries
    assert "apexcharts" in content.lower(), "ApexCharts library CDN script missing"
    assert "lucide" in content.lower(), "Lucide Icons library CDN script missing"
    
    # Check essential structural element IDs
    elements = [
        "kpiImpressions", "kpiClicks", "kpiCTR", "kpiConversions", "kpiCVR",
        "channelFilter", "yearFilter", "volumeChart", "shareChart", "dataTableBody"
    ]
    for el in elements:
        assert f"id=\"{el}\"" in content or f"id='{el}'" in content, f"Element ID '{el}' is missing from HTML structure"
    
    print("Task 1 Validation Passed: Basic scaffold looks correct.")

def validate_task2():
    print("Validating Task 2: Raw data and dynamic calculation script presence...")
    with open(html_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Ensure javascript block exists and mentions rawData array
    assert "const rawData =" in content or "let rawData =" in content or "var rawData =" in content, "Embedded rawData variable missing"
    assert "filterAndCalculate" in content, "filterAndCalculate function missing"
    assert "LinkedIn" in content, "LinkedIn mentions missing"
    assert "Newsletter" in content, "Newsletter mentions missing"
    print("Task 2 Validation Passed: Calculation logic skeleton found.")

def validate_task3():
    print("Validating Task 3: ApexCharts options and update routines...")
    with open(html_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    assert "updateCharts" in content, "updateCharts function missing"
    assert "volumeChartInstance" in content, "volumeChartInstance variable missing"
    assert "sparklineImpressions" in content, "sparklineImpressions element/reference missing"
    print("Task 3 Validation Passed: ApexCharts rendering blocks identified.")

if __name__ == "__main__":
    validate_task1()
    # Task 2 & 3 checks will pass when their code is written, but let's run them to verify progressive checks
    try:
        validate_task2()
    except AssertionError as e:
        print(f"Task 2 Pending: {e}")
    try:
        validate_task3()
    except AssertionError as e:
        print(f"Task 3 Pending: {e}")
