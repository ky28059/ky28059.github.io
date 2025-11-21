'use client'

import { VegaEmbed } from 'react-vega';


export default function UniversityMapChart() {
    return (
        <VegaEmbed
            options={{ actions: false }}
            spec={{
                "$schema": "https://vega.github.io/schema/vega/v6.json",
                "width": 900,
                "height": 560,
                "padding": { "top": 25, "left": 0, "right": 0, "bottom": 0 },
                "autosize": "none",

                "signals": [
                    {
                        "name": "hover",
                        "value": null,
                        "on": [
                            {"events": "@cell:mouseover", "update": "datum"},
                            {"events": "@cell:mouseout", "update": "null"}
                        ]
                    },
                    {
                        "name": "title",
                        "value": "U.S. University CTF Teams",
                        "update": "hover ? hover.name : 'U.S. University CTF Teams'"
                    },
                    {
                        "name": "cell_stroke",
                        "value": null,
                        "on": [
                            {"events": "dblclick", "update": "cell_stroke ? null : 'brown'"},
                            {"events": "mousedown!", "update": "cell_stroke"}
                        ]
                    }
                ],
                "data": [
                    {
                        "name": "states",
                        "url": "https://vega.github.io/vega/data/us-10m.json",
                        "format": {"type": "topojson", "feature": "states"},
                        "transform": [
                            {
                                "type": "geopath",
                                "projection": "projection"
                            }
                        ]
                    },
                    {
                        "name": "teams",
                        "values": univData,
                        "transform": [
                            {
                                "type": "geopoint",
                                "projection": "projection",
                                "fields": ["lng", "lat"]
                            },
                            {
                                "type": "filter",
                                "expr": "datum.x != null && datum.y != null"
                            },
                            {
                                "type": "voronoi", "x": "x", "y": "y"
                            },
                            {
                                "type": "collect", "sort": {
                                    "field": "points",
                                    "order": "descending"
                                }
                            }
                        ]
                    },
                ],
                "projections": [
                    {
                        "name": "projection",
                        "type": "albersUsa",
                        "scale": 1200,
                        "translate": [{ "signal": "width / 2"}, {"signal": "height / 2" }]
                    }
                ],
                "scales": [
                    {
                        "name": "size",
                        "type": "linear",
                        "zero": false,
                        "domain": { "data": "teams", "field": "points" },
                        "range": [50, 1200]
                    }
                ],
                "marks": [
                    {
                        "type": "path",
                        "from": {"data": "states"},
                        "encode": {
                            "enter": {
                                "fill": {"value": "#26252c"},
                                "stroke": {"value": "#666666"}
                            },
                            "update": {
                                "path": {"field": "path"}
                            }
                        }
                    },
                    {
                        "type": "symbol",
                        "from": {"data": "teams"},
                        "encode": {
                            "enter": {
                                "size": {"scale": "size", "field": "points"},
                                "fill": {"value": "steelblue"},
                                "fillOpacity": {"value": 0.8},
                                "stroke": {"value": "white"},
                                "strokeWidth": {"value": 1.5}
                            },
                            "update": {
                                "x": {"field": "x"},
                                "y": {"field": "y"}
                            }
                        }
                    },
                    {
                        "type": "path",
                        "name": "cell",
                        "from": {"data": "teams"},
                        "encode": {
                            "enter": {
                                "fill": {"value": "transparent"},
                                "strokeWidth": {"value": 0.35}
                            },
                            "update": {
                                "path": {"field": "path"},
                                "stroke": {"signal": "cell_stroke"}
                            }
                        }
                    },
                    {
                        "type": "text",
                        "interactive": false,
                        "encode": {
                            "enter": {
                                "x": { "signal": "width", "offset": -5 },
                                "y": { "value": 0 },
                                "fill": { "value": "#BABABA" },
                                "fontSize": { "value": 18 },
                                "align": { "value": "right" }
                            },
                            "update": {
                                "text": { "signal": "title" }
                            }
                        }
                    }
                ]
            }}
        />
    )
}

export const univData = [
    {
        globalPlace: 33,
        countryPlace: 4,
        name: 'b01lers',
        points: 515.513,
        lat: 40.4237543960544,
        lng: -86.92119207991612
    },
    {
        globalPlace: 42,
        countryPlace: 6,
        name: 'Shellphish',
        points: 484.35,
        lat: 34.41395400566384,
        lng: -119.84891813250306
    },
    {
        globalPlace: 56,
        countryPlace: 8,
        name: 'SIGPwny',
        points: 437.584,
        lat: 40.10472794277409,
        lng: -88.22888599286861
    },
    {
        globalPlace: 74,
        countryPlace: 10,
        name: 'PBR | UCLA',
        points: 393.943,
        lat: 34.069962915416745,
        lng: -118.4438399367731
    },
    {
        globalPlace: 76,
        countryPlace: 11,
        name: 'Knightsec',
        points: 393.166,
        lat: 28.602502336777825,
        lng: -81.20002984524042
    },
    {
        globalPlace: 81,
        countryPlace: 12,
        name: 'Plaid Parliament of Pwning',
        points: 386.966,
        lat: 40.44321067143486,
        lng: -79.94285079216527
    },
    {
        globalPlace: 103,
        countryPlace: 16,
        name: 'NYUSEC',
        points: 340.1,
        lat: 40.729505229417,
        lng: -73.99645559570783
    },
    {
        globalPlace: 132,
        countryPlace: 18,
        name: 'BYU Cyberia',
        points: 293.975,
        lat: 40.25182705296938,
        lng: -111.64931353243009
    },
    {
        globalPlace: 179,
        countryPlace: 22,
        name: 'CTF Academy',
        points: 243.378,
        lat: 33.42299744633826,
        lng: -111.92780833227222
    },
    {
        globalPlace: 200,
        countryPlace: 24,
        name: 'CSG',
        points: 232.578,
        lat: 32.98592050462486,
        lng: -96.75032538132112
    },
    {
        globalPlace: 219,
        countryPlace: 27,
        name: 'Kernel Sanders',
        points: 216.495,
        lat: 29.646533447488483,
        lng: -82.35331124210632
    },
    {
        globalPlace: 234,
        countryPlace: 28,
        name: 'UMDCSEC',
        points: 202.406,
        lat: 38.98685938585996,
        lng: -76.94253308013079
    },
    {
        globalPlace: 237,
        countryPlace: 29,
        name: 'RPISEC',
        points: 200.506,
        lat: 42.72980981066629,
        lng: -73.67883610948103
    },
    {
        globalPlace: 238,
        countryPlace: 30,
        name: 'SavedByTheShell',
        points: 200.321,
        lat: 42.38657385617477,
        lng: -72.5314550178278
    },
    {
        globalPlace: 276,
        countryPlace: 33,
        name: 'wolvsec',
        points: 179.417,
        lat: 42.277192572035474,
        lng: -83.73820709703907
    },
    {
        globalPlace: 311,
        countryPlace: 35,
        name: 'scriptohio',
        points: 163.683,
        lat: 40.00607238760995,
        lng: -83.028227273053
    },
    {
        globalPlace: 331,
        countryPlace: 38,
        name: 'OSUSEC',
        points: 155.794,
        lat: 44.56181714117988,
        lng: -123.28222092013654
    },
    {
        globalPlace: 340,
        countryPlace: 39,
        name: 'Nol3ptr',
        points: 153.084,
        lat: 30.44206851248394,
        lng: -84.29795592793819
    }
]
