/*
  country code key

  eu -> Europe & Central Asia
  oc -> East Asia & Pacific
  af -> Sub-Saharan Africa
  as -> South Asia
  na -> North America
  sa -> Latin America & Caribbean
*/

// https://fbnewsroomus.files.wordpress.com/2015/02/state-of-connectivity_3.pdf
const TwoG2014 = [
  { code: 'eu', regionName: "Europe & Central Asia", value: 97.9 },
  { code: 'oc', regionName: "East Asia & Pacific", value: 95.8 },
  { code: 'af', regionName: "Sub-Saharan Africa", value: 80 },
  { code: 'as', regionName: "South Asia", value: 85 },
  { code: 'na', regionName: "North America", value: 99.8 },
  { code: 'sa', regionName: "Latin America & Caribbean", value: 97.5 }
];

// https://fbnewsroomus.files.wordpress.com/2015/02/state-of-connectivity_3.pdf
const ThreeG2014 = [
  { code: 'eu', regionName: "Europe & Central Asia", value: 81.9 },
  { code: 'oc', regionName: "East Asia & Pacific", value: 86.4 },
  { code: 'af', regionName: "Sub-Saharan Africa", value: 36 },
  { code: 'as', regionName: "South Asia", value: 1.61 },
  { code: 'na', regionName: "North America", value: 99.5 },
  { code: 'sa', regionName: "Latin America & Caribbean", value: 82.5 }
];

const ThreeG2017 = [
  { code: 'oc', regionName: "East Asia & Pacific", value: 96 },
  { code: 'af', regionName: "Sub-Saharan Africa", value: 70 },
  { code: 'as', regionName: "South Asia", value: 88 },
  { code: 'na', regionName: "North America", value: 99 },
  { code: 'sa', regionName: "Latin America & Caribbean", value: 92 }
];

const FourG2017 = [
  { code: 'eu', regionName: "Europe & Central Asia", value: 97 },
  { code: 'oc', regionName: "East Asia & Pacific", value: 93 },
  { code: 'af', regionName: "Sub-Saharan Africa", value: 34 },
  { code: 'as', regionName: "South Asia", value: 82 },
  { code: 'na', regionName: "North America", value: 98 },
  { code: 'sa', regionName: "Latin America & Caribbean", value: 82 }
];

const config = function(title, data, gen, year, { mapType, primaryColor, accentColor }) {
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
      text: `${title}: ${gen} in ${year}`
    },

    plotOptions: {
      map: {
        nullInteraction: true
      }
    },

    series: [{
      data: data,
      name: gen,
      joinBy: ['hc-key', 'code'],
      states: {
        hover: {
          color: accentColor
        }
      }
    }],

    tooltip: {
      headerFormat: "",
      pointFormat: "{point.regionName}: <b>{point.value}%</b>",
      nullFormat: "Unavailable"
    }
  }
}

Highcharts.mapChart('container-map-2g-2014', config("% of Population Living Within Range by Region", TwoG2014, "2G", 2014, { primaryColor: "#3f51b5", accentColor: "#002984" }));
Highcharts.mapChart('container-map-3g-2014', config("% of Population Living Within Range by Region", ThreeG2014, "3G", 2014, { primaryColor: "#9c27b0", accentColor: "#6a0080" }));
Highcharts.mapChart('container-map-3g-2017', config("% of Population Covered by Region", ThreeG2017, "3G", 2017, { primaryColor: "#9c27b0", accentColor: "#6a0080" }));
Highcharts.mapChart('container-map-4g-2017', config("% of Population Covered by Region", FourG2017, "4G", 2017, { primaryColor: "#4caf50", accentColor: "#087f23" }));


const draw = function(idName, title, dataSet, gen, year, { primaryColor, accentColor }) {
  Highcharts.mapChart(idName, {
    chart: {
      map: "custom/world"
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
      text: `${title}: ${gen} in ${year}`
    },

    plotOptions: {
      map: {
        nullInteraction: true
      }
    },

    series: [{
      data: dataSet,
      name: gen,
      joinBy: ['iso-a3', 'code'],
      states: {
        hover: {
          color: accentColor
        }
      }
    }],

    tooltip: {
      headerFormat: "",
      pointFormat: "{point.code}: <b>{point.value}%</b>",
      nullFormat: "Unavailable"
    }
  });
};

fetch("http://localhost:3000/data/coverage-2018.csv")
  .then(response => response.text())
  .then((text) => {
    const coverageSets2018 = text.split("\n").map((country) => country.split(","));

    const data2G = coverageSets2018.map(c => {
      return { code: c[0], value: parseFloat(c[1]) };
    });

    const data3G = coverageSets2018.map(c => {
      return { code: c[0], value: parseFloat(c[2]) };
    });

    const data4G = coverageSets2018.map(c => {
      return { code: c[0], value: parseFloat(c[3]) };
    });

    draw('container-map-2g-2018', "% of Population Covered by Country", data2G, "2G", 2018, { primaryColor: "#3f51b5", accentColor:  "#002984" });
    draw('container-map-3g-2018', "% of Population Covered by Country", data3G, "3G", 2018, { primaryColor: "#9c27b0", accentColor: "#6a0080" });
    draw('container-map-4g-2018', "% of Population Covered by Country", data4G, "4G", 2018, { primaryColor: "#4caf50", accentColor: "#087f23" });
  });
