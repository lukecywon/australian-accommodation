vegaEmbed('#map1', 'specs/01_choropleth.json', {actions:false}).catch(console.error)
vegaEmbed('#map2', 'specs/02_symbol_map.json', {actions:false}).catch(console.error)
vegaEmbed('#chart3', 'specs/03_scatter.json', {actions:false}).catch(console.error)
vegaEmbed('#chart4', 'specs/04_quarterly_visitor_nights_heatmap.json', {actions:false}).catch(console.error)
vegaEmbed(
    "#chart5",
    "specs/05_purpose_lines.json",
    { actions: false }
  ).catch(console.error);
vegaEmbed(
    "#chart6",
    "specs/06_treemap.json",
    { actions: false }
  ).catch(console.error);
vegaEmbed(
    "#butterfly-chart",
    "specs/07_butterfly.json",
    { actions: false }
  ).catch(console.error);
vegaEmbed(
    "#mosaic-chart",
    "specs/08_mosaic.json",
    { actions: false }
    ).catch(console.error);
vegaEmbed(
  "#hotel-map",
  "specs/09_hotel_dot_map.json",
  { actions: false }
).catch(console.error);
vegaEmbed(
    "#dumbbell-chart",
    "specs/10_dumbbell.json",
    { actions: false }
  ).catch(console.error);