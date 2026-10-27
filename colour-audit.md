# Colour accessibility audit

Scope: the 13 chart specifications loaded by `js/embed.js`. Unused specification files were excluded.
Requirement: no red-family and green-family hues together in one graph. Muted rose, coral and terracotta count as red-family; seafoam and green-leaning teal count as green-family.
Status: proposals only. Chart palettes have not been changed.

## Figure 3 - Domestic and international visitor nights

Current conflict: Tasmania's rose `#9B6582` and South Australia's green-leaning teal `#427E77`.
Proposed direction: blue, amber, purple and warm neutrals. Keep most state colours; replace South Australia with warm brown `#8C563D` and Northern Territory's olive with neutral taupe `#6F6B63`.
Apply the same mapping to Figure 11 and the associated state-coloured analysis text.

## Figure 5 - Recovery by travel purpose

Current conflict: friends and relatives in raspberry `#A84B62` and business in teal `#287D74`.
Proposed palette:

| Purpose | Proposed colour |
|---|---|
| Holiday or leisure | Blue `#315A8A` |
| Visiting friends and relatives | Burnt amber `#A6642F` |
| Business | Violet `#7651A8` |
| Other and not asked | Slate `#626B73` |

Update panel headings and category-coloured commentary to match.

## Figure 6 - International accommodation treemap

Current conflict: terracotta `#C97868` with seafoam `#79A69A`, teal `#568A91` and green `#51756A`.
Proposed direction: coastal blue, terracotta, sand and neutral shades. Preserve the two dominant category colours and replace all green-leaning minor tones.

| Accommodation | Proposed colour |
|---|---|
| Rented properties | Deep blue `#2B5D73` (retain) |
| Friends or relatives | Terracotta `#C97868` (retain) |
| Hotels, resorts and motels | Powder blue `#8FB4C8` |
| Other private accommodation | Sand `#D6BD91` (retain) |
| Backpackers or hostels | Steel blue `#6E91AD` |
| Other accommodation | Mist blue `#B2C0D0` |
| Own property | Dark sand `#A58F68` (retain) |
| Other commercial accommodation | Muted plum `#846F83` (retain) |
| Caravan park | Slate blue `#536A85` |
| Non-commercial caravan or camping | Neutral grey `#8E9196` |
| Guest house or bed and breakfast | Shell `#D6D3CE` |

Retain direct labels and automatic black/white label contrast. Keep the matching coloured commentary.

## Figure 8 - State accommodation mix

Current conflict: seafoam hotels `#79A69A` and terracotta friends or relatives `#C97868`.
Use the same revised coastal mapping as Figure 6: hotels `#8FB4C8`, rented accommodation `#2B5D73`, friends or relatives `#C97868`.

## Figure 11 - State accommodation economy profiles

Same state-colour conflict as Figure 3. Apply the Figure 3 proposal exactly, rather than assigning different colours to the same states.

## Figure 12 - Spending waterfall

Current conflict: increase in green-leaning teal `#138878` and decrease in red `#CF5B59`.
Proposed palette: increase in blue `#2F6F9F`, decrease in amber `#B9742A`, total in charcoal `#4B5563`.

## Other figures checked

| Figure | Current colour direction | Red/green combination |
|---|---|---|
| 1 | Sequential blues | No |
| 2 | Single teal on a neutral map | No |
| 4 | Red-blue diverging scale | No |
| 7 | Blue and ochre | No |
| 9 | Blue dots on a neutral map | No |
| 10 | Two blue shades, hollow/filled markers | No |
| 13 | Plum and gold | No |

These are palette proposals for the user's stated rule, not a claim that removing red/green combinations alone addresses every colour-vision deficiency. Preserve the existing direct labels, numeric annotations and marker distinctions.
