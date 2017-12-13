  var data = [{
  values: [55, 103, 7],
  labels: ['Acquitted', 'Charge Dismissed', 'Pardoned'],
  hole: .4,
  type: 'pie',
  marker: {
	  colors : ['#820333', '#540133', '#C9283D']  
  },
  textfont: {color: '#FFFFFF'}
}];

var layout = {
  height: 400,
  width: 800
};

Plotly.newPlot('exoneration', data, layout, {displayModeBar: false});