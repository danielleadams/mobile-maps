/*
  country code key

  eu -> Europe & Central Asia
  oc -> East Asia & Pacific
  af -> Sub-Saharan Africa
  as -> South Asia
  na -> North America
  sa -> Latin America & Caribbean
*/
const dataPath = 'https://radiant-plateau-81585.herokuapp.com/data/';

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

// 5G action plans -http://www.europarl.europa.eu/RegData/etudes/IDAN/2019/631060/IPOL_IDA(2019)631060_EN.pdf
const FiveG2025 = [
  { code: 'USA', regionName: "USA" },
  { code: 'TWN', regionName: "Taiwan" },
  { code: 'SGP', regionName: "Singapore" },
  { code: 'KOR', regionName: "Korea" },
  { code: 'JPN', regionName: "Japan" },
  { code: 'CHN', regionName: "China" },
  { code: 'AUT', regionName: "Austria" },
  { code: 'FRA', regionName: "France" },
  { code: 'FIN', regionName: "Finland" },
  { code: 'NLD', regionName: "Netherlands" },
  { code: 'ESP', regionName: "Spain" },
  { code: 'SWE', regionName: "Sweden" },
  { code: 'DEU', regionName: "Germany" },
  { code: 'LUX', regionName: "Luxemburg" },
  { code: 'GBR', regionName: "UK" }
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

fetch(`${dataPath}coverage-2018.csv`)
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


// cities map
const drawLatLongs = function(idName, title, dataSet, gen, year, { primaryColor, accentColor }) {
  Highcharts.mapChart(idName, {
    chart: {
      map: "custom/world"
    },

    title: {
      text: `${title} with ${gen} in ${year}`
    },

    legend: {
      enabled: false
    },

    series: [{
      mapData: Highcharts.maps['custom/world'],
      name: 'Basemap',
      borderColor: '#A0A0A0',
      nullColor: 'rgba(200, 200, 200, 0.3)',
      showInLegend: false
    },{
      type: 'mappoint',
      name: title,
      data: dataSet,
      name: gen,
      color: primaryColor
    }],

    tooltip: {
      headerFormat: "",
      pointFormat: "<b>{point.name}</b>",
      nullFormat: "Unavailable"
    }
  });
};

let data = [];
const p1 = fetch(`${dataPath}coverage-5G-2020.csv`)
  .then(response => response.text())
  .then((text) => {
    const cities = text.split("\n").map((city) => city.split(","));
    cities.map(c => {
      if (c[0] !== "") {
        data = data.concat( { name: c[0], lat: parseFloat(c[1]), lon: parseFloat(c[2]) } );
      }
    });
  });

const p2 = fetch(`${dataPath}coverage-5G-US.csv`)
  .then(response => response.text())
  .then((text) => {
    const cities = text.split("\n").map((city) => city.split(","));
    cities.map(c => {
      if (c[0] !== "") {
        data.push( { name: c[0], lat: parseFloat(c[1]), lon: parseFloat(c[2]) } );
      }
    });
  });

const p3 = fetch(`${dataPath}coverage-5G-US-expansion.csv`)
  .then(response => response.text())
  .then((text) => {
    const cities = text.split("\n").map((city) => city.split(","));
    cities.map(c => {
      if (c[0] !== "") {
        data.push( { name: c[0], lat: parseFloat(c[1]), lon: parseFloat(c[2]) } );
      }
    });
  });



Promise.all([p1, p2, p3])
    .then((x) => {
      drawLatLongs('container-map-5g', "Cities", data, "5G", 2020, { primaryColor: "#ff9800" });
    });
