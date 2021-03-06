
    var trace1 = {
  x: [2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1995,1994,1991,1988,1986,1985,1981,1978,1976,1972,1971,1969,1967,1966,1965,1960,1957,1956,1953,1937],
  y: [55,60,61,63,60,63,61,64,65,64,69,67,64,64,70,70,68,67,71,77,80,76,79,70,75,66,62,66,57,49,51,54,42,45,53,47,53,68,60],
  type: 'scatter',
  name: 'Favor',
  line: {color: '#820333'}
};

var trace2 = {
  x: [2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1995,1994,1991,1988,1986,1985,1981,1978,1976,1972,1971,1969,1967,1966,1965,1960,1957,1956,1953,1937],
  y: [41,37,37,33,35,32,35,39,31,30,27,28,30,31,25,25,26,28,22,13,16,18,16,22,17,25,27,26,32,40,40,38,47,43,36,34,34,25,33],
  type: 'scatter',
  name: 'Oppose',
  line: {color: '#F0433A'}
};


var data = [trace1, trace2];

var layout = {
  title: 'Public Opinion on the Death Penalty',
  xaxis: {
    title: 'Years'
  },
  yaxis: {
    title: '% opinions'
  },
};

Plotly.newPlot('opinionline', data, layout, {displayModeBar: false});
