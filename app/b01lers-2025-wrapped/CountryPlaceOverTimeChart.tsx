'use client'

import { VegaEmbed } from 'react-vega';
import { teamData } from '@/app/b01lers-2025-wrapped/data';


export default function CountryPlaceOverTimeChart() {
    return (
        <VegaEmbed
            options={{ actions: false }}
            spec={{
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "width": 800,
                "height": 250,
                "background": null,

                "data": {
                    "values": teamData
                },
                "layer": [ // TODO: can remove layer if only using one
                    {
                        "mark": { "type": "line", "color": "#66b3ff", "strokeWidth": 2 },
                        "encoding": {
                            "x": { "field": "year", "type": "quantitative" },
                            "y": { "field": "countryPlace", "type": "quantitative" }
                        }
                    }
                ],
                "encoding": {
                    "x": {
                        "title": "Year",
                        "field": "year",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "gridColor": "#404040",
                            "format": "d"
                        }
                    },
                    "y": {
                        "title": "Country place",
                        "field": "countryPlace",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "gridColor": "#404040"
                        },
                        "scale": {
                            "reverse": true
                        }
                    },
                    "tooltip": [
                        { "field": "year", "title": "Year" },
                        { "field": "countryPlace", "title": "Country place" }
                    ]
                }
            }}
        />
    )
}
