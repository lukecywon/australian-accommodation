# Colour accessibility audit

Scope: the 13 chart specifications loaded by `js/embed.js`. Unused specification files were excluded.
Requirement: no red-family and green-family hues together in one graph. Muted rose, coral and terracotta count as red-family; seafoam and green-leaning teal count as green-family.
Status: all proposals implemented in Figures 3, 5, 6, 8, 11 and 12. Shared state and accommodation mappings, chart headings and coloured commentary have been kept consistent.

## Figure 3 - Domestic and international visitor nights

Previous conflict: Tasmania's rose `#9B6582` and South Australia's green-leaning teal `#427E77`.
Applied direction: blue, amber, purple and warm neutrals. Keep most state colours; replace South Australia with warm brown `#8C563D` and Northern Territory's olive with neutral taupe `#6F6B63`.
The same mapping is applied to Figure 11 and the associated state-coloured analysis text.

## Figure 5 - Recovery by travel purpose

Previous conflict: friends and relatives in raspberry `#A84B62` and business in teal `#287D74`.
Applied palette:

| Purpose | Applied colour |
|---|---|
| Holiday or leisure | Blue `#315A8A` |
| Visiting friends and relatives | Burnt amber `#A6642F` |
| Business | Violet `#7651A8` |
| Other and not asked | Slate `#626B73` |

Panel headings and category-coloured commentary match this palette.

## Figure 6 - International accommodation treemap

Previous conflict: terracotta `#C97868` with seafoam `#79A69A`, teal `#568A91` and green `#51756A`.
Applied direction: coastal blue, terracotta, sand and neutral shades. The two dominant category colours are preserved; all green-leaning minor tones are replaced.

| Accommodation | Applied colour |
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

Direct labels, automatic black/white label contrast and matching coloured commentary are retained.

## Figure 8 - State accommodation mix

Previous conflict: seafoam hotels `#79A69A` and terracotta friends or relatives `#C97868`.
Uses the same revised coastal mapping as Figure 6: hotels `#8FB4C8`, rented accommodation `#2B5D73`, friends or relatives `#C97868`.

Caravan and commercial camping was subsequently added in slate blue `#536A85`, matching the caravan category in Figure 6. Shares and column widths now cover four accommodation categories.

## Figure 11 - State accommodation economy profiles

Previously had the same state-colour conflict as Figure 3. Now uses the identical revised state mapping.

## Figure 12 - Spending waterfall

Previous conflict: increase in green-leaning teal `#138878` and decrease in red `#CF5B59`.
Applied palette: increase in blue `#2F6F9F`, decrease in amber `#B9742A`, total in charcoal `#4B5563`.

## Verification

All 13 active chart specifications were rechecked after the changes. No active chart combines the red and green colour families defined above. Figures 3 and 11 share identical state colours; Figures 6 and 8 share identical accommodation colours.

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

These changes implement the user's stated palette rule. Existing direct labels, numeric annotations and marker distinctions are retained.
