import csv
import json

file_path = r"C:\Users\USER\.gemini\antigravity\scratch\sunday_bake_marketing\data\marketing_performance.csv"

data = []
with open(file_path, 'r') as f:
    reader = csv.DictReader(f)
    for row in reader:
        # Convert values to correct types
        row['Impressions'] = int(row['Impressions'])
        row['CTR'] = float(row['CTR'])
        row['Clicks'] = int(row['Clicks'])
        row['Conversions'] = int(row['Conversions'])
        row['ConversionRate'] = float(row['ConversionRate'])
        data.append(row)

# Let's calculate total Impressions, Clicks, Conversions
total_impressions = sum(row['Impressions'] for row in data)
total_clicks = sum(row['Clicks'] for row in data)
total_conversions = sum(row['Conversions'] for row in data)
overall_ctr = total_clicks / total_impressions if total_impressions > 0 else 0
overall_conv_rate = total_conversions / total_clicks if total_clicks > 0 else 0

print(f"Total Impressions: {total_impressions}")
print(f"Total Clicks: {total_clicks}")
print(f"Total Conversions: {total_conversions}")
print(f"Overall CTR: {overall_ctr:.4f}")
print(f"Overall Conversion Rate: {overall_conv_rate:.4f}")

# Group by Year
by_year = {}
for row in data:
    y = row['Year']
    if y not in by_year:
        by_year[y] = {'Impressions': 0, 'Clicks': 0, 'Conversions': 0}
    by_year[y]['Impressions'] += row['Impressions']
    by_year[y]['Clicks'] += row['Clicks']
    by_year[y]['Conversions'] += row['Conversions']

print("\nBy Year:")
for y, m in by_year.items():
    ctr = m['Clicks'] / m['Impressions']
    cvr = m['Conversions'] / m['Clicks']
    print(f"{y}: Impressions={m['Impressions']}, Clicks={m['Clicks']}, Conversions={m['Conversions']}, CTR={ctr:.4f}, CVR={cvr:.4f}")

# Group by Channel
by_channel = {}
for row in data:
    ch = row['Channel']
    if ch not in by_channel:
        by_channel[ch] = {'Impressions': 0, 'Clicks': 0, 'Conversions': 0}
    by_channel[ch]['Impressions'] += row['Impressions']
    by_channel[ch]['Clicks'] += row['Clicks']
    by_channel[ch]['Conversions'] += row['Conversions']

print("\nBy Channel:")
for ch, m in by_channel.items():
    ctr = m['Clicks'] / m['Impressions']
    cvr = m['Conversions'] / m['Clicks']
    print(f"{ch}: Impressions={m['Impressions']}, Clicks={m['Clicks']}, Conversions={m['Conversions']}, CTR={ctr:.4f}, CVR={cvr:.4f}")

# Group by Year and Channel
by_year_channel = {}
for row in data:
    y = row['Year']
    ch = row['Channel']
    key = (y, ch)
    if key not in by_year_channel:
        by_year_channel[key] = {'Impressions': 0, 'Clicks': 0, 'Conversions': 0}
    by_year_channel[key]['Impressions'] += row['Impressions']
    by_year_channel[key]['Clicks'] += row['Clicks']
    by_year_channel[key]['Conversions'] += row['Conversions']

print("\nBy Year & Channel:")
for (y, ch), m in sorted(by_year_channel.items()):
    ctr = m['Clicks'] / m['Impressions']
    cvr = m['Conversions'] / m['Clicks']
    print(f"{y} - {ch}: Impressions={m['Impressions']}, Clicks={m['Clicks']}, Conversions={m['Conversions']}, CTR={ctr:.4f}, CVR={cvr:.4f}")

# Generate structured timeline data for charts
# Timeline labels would be "Year 1 Jan", "Year 1 Feb", "Year 1 Mar", etc.
timeline = []
for row in data:
    label = f"{row['Year']} {row['Month'][:3]}"
    timeline.append({
        'label': label,
        'year': row['Year'],
        'month': row['Month'],
        'channel': row['Channel'],
        'impressions': row['Impressions'],
        'clicks': row['Clicks'],
        'conversions': row['Conversions'],
        'ctr': row['CTR'],
        'cvr': row['ConversionRate']
    })

# Output JSON structure for easy pasting into HTML
with open(r"C:\Users\USER\.gemini\antigravity\scratch\sunday_bake_marketing\scratch\processed_data.json", "w") as f:
    json.dump(timeline, f, indent=2)
