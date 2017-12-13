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
              [0, 'rgb(214,213,214)'], [0.012, 'rgb(206,193,198)'],
              [0.025, 'rgb(198,148,164)'], [0.035, 'rgb(176,117,139)'],
              [0.05, 'rgb(163,84,114)'], [1, 'rgb(130,4,51)']
          ],
          colorbar: {
              title: 'Number of Executions since 1976',
              thickness: 15
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