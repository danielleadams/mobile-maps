// https://fbnewsroomus.files.wordpress.com/2015/02/state-of-connectivity_3.pdf
const TwoG = [
  ['eu', 97.9 ],
  ['oc', 95.8 ],
  ['af', 80 ],
  ['as', 85 ],
  ['na', 99.8 ],
  ['sa', 97.5]
];

// https://fbnewsroomus.files.wordpress.com/2015/02/state-of-connectivity_3.pdf
const ThreeG = [
  ['eu', 81.9],
  ['oc', 86.4],
  ['af', 36],
  ['as', 1.61],
  ['na', 99.5],
  ['sa', 82.5]
];

const config = function(data, name, { primaryColor, accentColor }) {
  return {
    chart: {
      map: 'custom/world-continents'
    },

    legend: {
      layout: "horizontal"
    },

    colorAxis: {
      min: 1,
      type: 'linear',
      minColor: '#ffffff',
      maxColor: primaryColor,
      labels: {
        format: "{value}"
      }
    },

    title: {
      text: `Generations of Cellular Networks: ${name} in 2014`
    },

    plotOptions: {
      map: {
        dataLabels: {
          enabled: true,
          color: '#FFFFFF',
          format: '{point.value}%'
        },
        tooltip: {
          headerFormat: "",
          pointFormat: `${name} Coverage: <b>{point.value}%</b>`
        }
      }
    },

    series: [{
      data: data,
      name: name,
      states: {
        hover: {
          color: accentColor
        }
      }
    }]
  }
}

Highcharts.mapChart('container-map-2g', config(TwoG, "2G", { primaryColor: "#3f51b5", accentColor: "#002984" }));
Highcharts.mapChart('container-map-3g', config(ThreeG, "3G", { primaryColor: "#9c27b0", accentColor: "#6a0080" }));
