vegaEmbed("#chart-01", "specs/01_choropleth.json", {
  actions: false,
  renderer: "svg"
}).catch(console.error);

vegaEmbed("#chart-02", "specs/02_symbol_map.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart-03", "specs/03_slope.json", {
  actions: false
}).catch(console.error);

// Timing
vegaEmbed("#chart-04", "specs/04_quarterly_visitor_nights_heatmap.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart-05", "specs/05_purpose_lines.json", {
  actions: false
}).catch(console.error);

// Accommodation
vegaEmbed("#chart-06", "specs/06_treemap.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart-07", "specs/07_butterfly.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart-08", "specs/08_mosaic.json", {
  actions: false
}).catch(console.error);

// Hotel locations
vegaEmbed("#chart-09", "specs/09_hotel_dot_map.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart-10", "specs/10_dumbbell.json", {
  actions: false
}).catch(console.error);

// Economy
vegaEmbed("#chart-11", "specs/11_parallel_coordinates.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart-12", "specs/12_expenditure_waterfall.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart-13", "specs/13_abs_tra_indexed_lines_2018_2025.json", {
  actions: false
}).catch(console.error);
