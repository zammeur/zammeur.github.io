    var data = [{
  x: ['Love', 'Family', 'Thank', 'Sorry','God','Life','Forgive','Hope','Lord','Peace'],
  y: [700, 314, 262, 245, 205, 153, 144, 143, 141, 105],
  type: 'bar',
  width: [0.4, 0.4, 0.4, 0.4, 0.4,0.4,0.4,0.4,0.4,0.4],
  marker:{color:'#820333'}
}];

var layout = {
  title: 'Strong Words',
  font:{
    family: 'Raleway, snas-serif'
  },
  showlegend: false,
  xaxis: {
	title:'Words',
    tickangle: -45
  },
  yaxis: {
  title: 'Occurences',
    zeroline: false,
    gridwidth: 0
  },
  bargap :0.05
};

Plotly.newPlot('barPlotWords', data, layout, {displayModeBar: false});