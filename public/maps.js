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

const regionsByCountry = {
  AUS: "East Asia & Pacific",
  BRN: "East Asia & Pacific",
  KHM: "East Asia & Pacific",
  CHN: "East Asia & Pacific",
  FJI: "East Asia & Pacific",
  HKG: "East Asia & Pacific",
  IDN: "East Asia & Pacific",
  JPN: "East Asia & Pacific",
  KOR: "East Asia & Pacific",
  LAO: "East Asia & Pacific",
  MYS: "East Asia & Pacific",
  MNG: "East Asia & Pacific",
  MMR: "East Asia & Pacific",
  NZL: "East Asia & Pacific",
  PNG: "East Asia & Pacific",
  PHL: "East Asia & Pacific",
  WSM: "East Asia & Pacific",
  SGP: "East Asia & Pacific",
  SLB: "East Asia & Pacific",
  THA: "East Asia & Pacific",
  TLS: "East Asia & Pacific",
  TON: "East Asia & Pacific",
  VUT: "East Asia & Pacific",
  VNM: "East Asia & Pacific",
    ALB: "Europe & Central Asia",
     ARM: "Europe & Central Asia",
      AUT: "Europe & Central Asia",
       AZE: "Europe & Central Asia",
        BLR: "Europe & Central Asia",
         BEL: "Europe & Central Asia",
          BIH: "Europe & Central Asia",
           BGR: "Europe & Central Asia",
            HRV: "Europe & Central Asia",
             CYP: "Europe & Central Asia",
              CZE: "Europe & Central Asia",
               DNK: "Europe & Central Asia",
                EST: "Europe & Central Asia",
                 FIN: "Europe & Central Asia",
                  FRA: "Europe & Central Asia",
                   GEO: "Europe & Central Asia",
                    DEU: "Europe & Central Asia",
                     GRC: "Europe & Central Asia",
                      HUN: "Europe & Central Asia",
                       ISL: "Europe & Central Asia",
                        IRL: "Europe & Central Asia",
                         ITA: "Europe & Central Asia",
                          KAZ: "Europe & Central Asia",
                           KGZ: "Europe & Central Asia",
                            LVA: "Europe & Central Asia",
                             LTU: "Europe & Central Asia",
                              LUX: "Europe & Central Asia",
                               MKD: "Europe & Central Asia",
                                MLT: "Europe & Central Asia",
                                 MDA: "Europe & Central Asia",
                                  MNE: "Europe & Central Asia",
                                   NLD: "Europe & Central Asia",
                                    NOR: "Europe & Central Asia",
                                     POL: "Europe & Central Asia",
                                      PRT: "Europe & Central Asia",
                                       ROU: "Europe & Central Asia",
                                        RUS: "Europe & Central Asia",
                                         SRB: "Europe & Central Asia",
                                          SVK: "Europe & Central Asia",
                                           SVN: "Europe & Central Asia",
                                            ESP: "Europe & Central Asia",
                                             SWE: "Europe & Central Asia",
                                              CHE: "Europe & Central Asia",
                                               TJK: "Europe & Central Asia",
                                                UKR: "Europe & Central Asia",
                                                 GBR: "Europe & Central Asia",
                                                  UZB: "Europe & Central Asia",
  ARG: "Latin America & Caribbean",
  BHS: "Latin America & Caribbean",
  BRB: "Latin America & Caribbean",
  BLZ: "Latin America & Caribbean",
  BOL: "Latin America & Caribbean",
  BRA: "Latin America & Caribbean",
  CHL: "Latin America & Caribbean",
  COL: "Latin America & Caribbean",
  CRI: "Latin America & Caribbean",
  DOM: "Latin America & Caribbean",
  ECU: "Latin America & Caribbean",
  SLV: "Latin America & Caribbean",
  GTM: "Latin America & Caribbean",
  GUY: "Latin America & Caribbean",
  HTI: "Latin America & Caribbean",
  HND: "Latin America & Caribbean",
  JAM: "Latin America & Caribbean",
  MEX: "Latin America & Caribbean",
  NIC: "Latin America & Caribbean",
  PAN: "Latin America & Caribbean",
  PRY: "Latin America & Caribbean",
  PER: "Latin America & Caribbean",
  LCA: "Latin America & Caribbean",
  TTO: "Latin America & Caribbean",
  URY: "Latin America & Caribbean",
  VEN: "Latin America & Caribbean",
  DZA: "Middle East & North Africa",
  BHR: "Middle East & North Africa",
  EGY: "Middle East & North Africa",
  IRN: "Middle East & North Africa",
  IRQ: "Middle East & North Africa",
  ISR: "Middle East & North Africa",
  JOR: "Middle East & North Africa",
  KWT: "Middle East & North Africa",
  LBN: "Middle East & North Africa",
  LBY: "Middle East & North Africa",
  MRT: "Middle East & North Africa",
  MAR: "Middle East & North Africa",
  OMN: "Middle East & North Africa",
  QAT: "Middle East & North Africa",
  SAU: "Middle East & North Africa",
  SDN: "Middle East & North Africa",
  TUN: "Middle East & North Africa",
  TUR: "Middle East & North Africa",
  ARE: "Middle East & North Africa",
  YEM: "Middle East & North Africa",
  CAN: "North America",
  USA: "North America",
  BGD: "South Asia",
  BTN: "South Asia",
  IND: "South Asia",
  NPL: "South Asia",
  PAK: "South Asia",
  LKA: "South Asia",
  AGO: "Sub-Saharan Africa",
  BEN: "Sub-Saharan Africa",
  BWA: "Sub-Saharan Africa",
  BFA: "Sub-Saharan Africa",
  BDI: "Sub-Saharan Africa",
  CPV: "Sub-Saharan Africa",
  CMR: "Sub-Saharan Africa",
  CAF: "Sub-Saharan Africa",
  TCD: "Sub-Saharan Africa",
  COG: "Sub-Saharan Africa",
  COD: "Sub-Saharan Africa",
  CIV: "Sub-Saharan Africa",
  ETH: "Sub-Saharan Africa",
  GAB: "Sub-Saharan Africa",
  GMB: "Sub-Saharan Africa",
  GHA: "Sub-Saharan Africa",
  GIN: "Sub-Saharan Africa",
  GNB: "Sub-Saharan Africa",
  KEN: "Sub-Saharan Africa",
  LSO: "Sub-Saharan Africa",
  LBR: "Sub-Saharan Africa",
  MDG: "Sub-Saharan Africa",
  MWI: "Sub-Saharan Africa",
  MLI: "Sub-Saharan Africa",
  MUS: "Sub-Saharan Africa",
  MOZ: "Sub-Saharan Africa",
  NAM: "Sub-Saharan Africa",
  NER: "Sub-Saharan Africa",
  NGA: "Sub-Saharan Africa",
  RWA: "Sub-Saharan Africa",
  SEN: "Sub-Saharan Africa",
  SLE: "Sub-Saharan Africa",
  ZAF: "Sub-Saharan Africa",
  SWZ: "Sub-Saharan Africa",
  TZA: "Sub-Saharan Africa",
  TGO: "Sub-Saharan Africa",
  UGA: "Sub-Saharan Africa",
  ZMB: "Sub-Saharan Africa",
  ZWE: "Sub-Saharan Africa"
};

const createMapData = function(data) {
  const mapData = Highcharts.maps['custom/world'];

  return mapData.features.map((feature) => {
    var code = feature.properties["iso-a3"],
      region = regionsByCountry[code];
    return {
      regionName: region,
      "hc-key": feature.properties['hc-key'],
      value: data[region] || null
    };
  });
}

// https://fbnewsroomus.files.wordpress.com/2015/02/state-of-connectivity_3.pdf
const TwoG2014 = {
  "Europe & Central Asia": 97.9,
  "East Asia & Pacific": 95.8,
  "Sub-Saharan Africa": 80,
  "South Asia": 85,
  "North America": 99.8,
  "Latin America & Caribbean": 97.5,
  "Middle East & North Africa": 93.2
};

// https://fbnewsroomus.files.wordpress.com/2015/02/state-of-connectivity_3.pdf
const ThreeG2014 = {
  "Europe & Central Asia": 81.9,
  "East Asia & Pacific": 86.4,
  "Sub-Saharan Africa": 36,
  "South Asia": 1.61,
  "North America": 99.5,
  "Latin America & Caribbean": 82.5,
  "Middle East & North Africa": 70.3
};

const ThreeG2017 = {
  "East Asia & Pacific": 96,
  "Sub-Saharan Africa": 70,
  "South Asia": 88,
  "North America": 99,
  "Latin America & Caribbean": 92,
  "Middle East & North Africa": 89
};

const FourG2017 = {
  "Europe & Central Asia": 97,
  "East Asia & Pacific": 93,
  "Sub-Saharan Africa": 34,
  "South Asia": 82,
  "North America": 98,
  "Latin America & Caribbean": 82,
  "Middle East & North Africa": 62
};

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
      map: 'custom/world'
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
      joinBy: 'hc-key',
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
};

Highcharts.mapChart('container-map-2g-2014', config("% of Population Living Within Range by Region", createMapData(TwoG2014), "2G", 2014, { primaryColor: "#3f51b5", accentColor: "#002984" }));
Highcharts.mapChart('container-map-3g-2014', config("% of Population Living Within Range by Region", createMapData(ThreeG2014), "3G", 2014, { primaryColor: "#9c27b0", accentColor: "#6a0080" }));
Highcharts.mapChart('container-map-3g-2017', config("% of Population Covered by Region", createMapData(ThreeG2017), "3G", 2017, { primaryColor: "#9c27b0", accentColor: "#6a0080" }));
Highcharts.mapChart('container-map-4g-2017', config("% of Population Covered by Region", createMapData(FourG2017), "4G", 2017, { primaryColor: "#4caf50", accentColor: "#087f23" }));

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
