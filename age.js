
var trace1 = {
  x: [22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,71,72,74,75,76,77], 
  y: [1,2,5,11,12,30,29,34,40,49,49,59,52,48,44,72,78,72,54,58,57,61,45,35,45,59,35,43,28,33,30,26,20,16,17,16,16,15,
7,15,13,12,2,4,5,2,1,2,3,1,1,1], 
  type: 'scatter',
  name: 'Executed Prisonners',
  line:{color:'#820333'}
};

var trace2 = {
  x: [40],
  y: [54],
  mode: 'markers',
  marker: {
    color: 'rgb(240,67,58)',
    size: 12
  },
  name: 'Median Age'
};

var data = [trace1, trace2];


var layout = {
  title: 'Age and Death Penalty',
  xaxis: {
    title: 'Age'
  },
  yaxis: {
    title: 'Number of people executed'
  },
};
Plotly.newPlot('age', data, layout, {displayModeBar: false});
