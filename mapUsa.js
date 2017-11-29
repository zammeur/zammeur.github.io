        Plotly.d3.csv('https://gist.githubusercontent.com/zammeur/ccbad79ce4b0a6a55437d1b05f62cf51/raw/6cb93fc54f7a813d6b0eb547c6aa62e269fedb93/execbystate.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

      var data = [{
          type: 'choropleth',
          locationmode: 'USA-states',
          locations: unpack(rows, 'State'),
          z: unpack(rows, 'Executions'),
          text: unpack(rows, 'Name'),
          zmin: 0,
          zmax: 545,
          colorscale: [
              [0, 'rgb(188,189,220)'], [0.012, 'rgb(218,218,235)'],
              [0.025, 'rgb(188,189,220)'], [0.035, 'rgb(158,154,200)'],
              [0.05, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
          ],
          colorbar: {
              title: 'Number of Executions since 1976',
              thickness: 0.5
          },
          marker: {
              line:{
                  color: 'rgb(255,255,255)',
                  width: 2
              }
          }
      }];


      var layout = {
          title: 'Executions by State',
          geo:{
              scope: 'usa',
              showlakes: true,
              lakecolor: 'rgb(255,255,255)',
			  showland: true,
              landcolor: 'rgb(217, 217, 217)',
			  subunitcolor: 'rgb(255, 255, 255)'
          },
		 yaxis: {
                           fixedrange: true
                          },
                   xaxis : {
                            fixedrange: true
                            }
						  
      };

      Plotly.plot(mapUsa, data, layout,{displayModeBar: false});
});