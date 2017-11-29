
  var data = [{
  values: [55, 103, 7],
  labels: ['Acquitted', 'Charge Dismissed', 'Pardoned'],
  hole: .4,
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 800
};

Plotly.newPlot('exoneration', data, layout, {displayModeBar: false});

