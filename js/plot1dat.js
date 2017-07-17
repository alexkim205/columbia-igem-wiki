Highcharts.chart('plot1', {

  title: {
    text: 'Fluorescein Standard Curve'
  },

  yAxis: {
    title: {
      text: 'Fluorescence'
    }
  },
  xAxis: {
    tickInterval: 5,
    title: {
      text: 'Fluorescein Concentration (uM)'
    }
  },

  plotOptions: {
    series: {
      pointStart: 0
    }
  },

  legend: {
    enabled: false
  },

  tooltip: {
    headerFormat: '<b>{series.name}</b><br/>',
    pointFormat: '{point.x} uM Fluorescein: {point.y}'
},

  series: [{
    name: 'Arithmetic Mean',
    data: [
      [0, 8423.75],
      [0.048828125, 5121.75],
      [0.09765625, 7704.25],
      [0.1953125, 7962.75],
      [0.390625, 8480.5],
      [0.78125, 8680.5],
      [1.5625, 9567.5],
      [3.125, 11912.25],
      [6.25, 17065.5],
      [12.5, 20430.25],
      [25, 27822.75],
      [50.00, 34616.25]
    ]
  }]

});

Highcharts.chart('plot2', {

  title: {
    text: 'Fluorescein Standard Curve (log scale)'
  },

  yAxis: {
     type: 'logarithmic',
     tickInterval: 1,
     title: {
       text: 'Fluorescence'
     },
     min: 0.1,
     max: 100000,
     endOnTick: false
   },
   xAxis: {
     type: 'logarithmic',
     max: 100,
     tickInterval: 1,
     title: {
       text: 'Fluorescein Concentration (uM)'
     }
   },

  plotOptions: {
    series: {
      pointStart: 0
    }
  },

  legend: {
    enabled: false
  },

  tooltip: {
    headerFormat: '<b>{series.name}</b><br/>',
    pointFormat: '{point.x} uM Fluorescein: {point.y}'
},

  series: [{
    name: 'Arithmetic Mean',
    data: [
      [0.048828125, 5121.75],
      [0.09765625, 7704.25],
      [0.1953125, 7962.75],
      [0.390625, 8480.5],
      [0.78125, 8680.5],
      [1.5625, 9567.5],
      [3.125, 11912.25],
      [6.25, 17065.5],
      [12.5, 20430.25],
      [25, 27822.75],
      [50.00, 34616.25]
    ]
  }]

});
