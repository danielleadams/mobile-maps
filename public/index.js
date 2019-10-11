// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var TwoG = [
  ['eu', 97.9],
  ['oc', 95.8],
  ['af', 80],
  ['as', 85],
  ['na', 99.8],
  ['sa', 97.5]
];

var ThreeG = [
  ['eu', 81.9],
  ['oc', 86.4],
  ['af', 36],
  ['as', 1.61],
  ['na', 99.5],
  ['sa', 82.5]
];

// Create the chart
Highcharts.mapChart('container', {
  chart: {
    map: 'custom/world-continents'
  },

  title: {
    text: 'Generations of Cellular Networks'
  },

  plotOptions: {
    map: {
      dataLabels: {
        enabled: true,
        color: 'white',
        style: {
          fontWeight: 'bold'
        }
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '{point.name}: <b>{series.name}</b>'
      }
  //
    }
  },

  series: [{
    data: TwoG,
    name: '2G: 2014',
    color: "#282c34",
    states: {
      hover: {
        color: '#09d3ac'
      }
    }
  }, {
    data: ThreeG,
    name: '3G: 2014',
    color: "#282c34",
    visible: false,
    states: {
      hover: {
        color: '#09d3ac'
      }
    }
  }]
});
