'use client'

import { VegaEmbed } from 'react-vega';
import { teamData } from '@/app/b01lers-2025-wrapped/data';


export default function PlaceOverTimeChart() {
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
                "layer": [
                    {
                        "mark": { "type": "line", "color": "#8b5cf6", "strokeWidth": 2 },
                        "encoding": {
                            "x": { "field": "year", "type": "quantitative" },
                            "y": {
                                "title": "Global place",
                                "field": "globalPlace",
                                "type": "quantitative",
                                "axis": {
                                    "orient": "right",
                                    "labelColor": "#BABABA",
                                    "titleColor": "#BABABA",
                                    "gridColor": "#404040"
                                },
                                "scale": {
                                    "reverse": true
                                }
                            }
                        }
                    },
                    {
                        "mark": { "type": "line", "color": "#66b3ff", "strokeWidth": 2 },
                        "encoding": {
                            "x": { "field": "year", "type": "quantitative" },
                            "y": {
                                "title": "Country place",
                                "field": "countryPlace",
                                "type": "quantitative",
                                "axis": {
                                    "orient": "left",
                                    "labelColor": "#BABABA",
                                    "titleColor": "#BABABA",
                                    "gridColor": "#404040"
                                },
                                "scale": {
                                    "reverse": true
                                }
                            }
                        }
                    }
                ],
                "resolve": { "scale": { "y": "independent" } },
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
                    "tooltip": [
                        { "field": "year", "title": "Year" },
                        { "field": "countryPlace", "title": "Country place" },
                        { "field": "globalPlace", "title": "Global place" }
                    ]
                }
            }}
        />
    )
}
