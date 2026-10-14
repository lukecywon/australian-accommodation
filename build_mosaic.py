"""Calculate Marimekko rectangles from the 15 selected, published NVS values."""
import csv
from collections import defaultdict
from pathlib import Path

base = Path(__file__).resolve().parent
source = base / 'data' / 'accommodation_by_state.csv'
target = base / 'data' / 'mosaic_rectangles.csv'
states = ['New South Wales','Victoria','Queensland','South Australia','Western Australia']
categories = ['Hotels and similar','Rented accommodation','Friends or relatives property']

with source.open(newline='', encoding='utf-8') as f:
    records = list(csv.DictReader(f))
values = {(r['State'],r['AccommodationType']): float(r['NightsM']) for r in records}
assert len(records) == len(values) == len(states)*len(categories), 'Expected 15 non-duplicate, complete observations'
assert all((s,c) in values and values[s,c]>=0 for s in states for c in categories)
state_totals = {s:sum(values[s,c] for c in categories) for s in states}
grand_total = sum(state_totals.values())

out=[]
x0=0
for state in states:
    x1=x0+100*state_totals[state]/grand_total
    y0=0
    for category in categories:
        amount=values[state,category]
        y1=y0+100*amount/state_totals[state]
        out.append({'State':state,'AccommodationType':category,'NightsM':amount,
                    'x0':x0,'x1':x1,'y0':y0,'y1':y1,'StateSelectedTotalM':state_totals[state]})
        y0=y1
    x0=x1

with target.open('w',newline='',encoding='utf-8') as f:
    writer=csv.DictWriter(f,fieldnames=out[0].keys());writer.writeheader();writer.writerows(out)
print(f'Wrote {len(out)} rectangles to {target}')
