          trace1 = {
          type: 'scatter',
          x: [1984,	1985,	1986,	1987,	1988,	1989,	1990,	1991,	1992,	1993,	1994,	1995,	1996,	1997,	1998,	1999,	2000,	2001,	2002,	2003,	2004,	2005,	2006,	2007,	2008,	2009,	2010,	2011,	2012],
          y: [74,	71,	87,	86,	80,	95,	95,	116,	114,	113,	122,	134,	125,	133,	130,	143,	137,	142,	127,	131,	132,	147,	145,	153,	139,	169,	178,	198,	190],
          mode: 'lines',
          name: 'Red',
          line: {
            color: '#820333',
            width: 2
          }
          };

          var data = [trace1];
          var layout = {
            title: 'Evolution of time between the sentence and the execution',
            xaxis: {
              title: 'Year'
            },
            yaxis: {
              title: 'Waiting Time in Month'
            },
            };
            Plotly.newPlot('timeSentenceExec', data, layout, {displayModeBar: false});