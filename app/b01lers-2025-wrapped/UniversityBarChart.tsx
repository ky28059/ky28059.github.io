'use client'

import { VegaEmbed } from 'react-vega';
import { univData } from '@/app/b01lers-2025-wrapped/data';


export default function UniversityBarChart() {
    return (
        <VegaEmbed
            options={{ actions: false }}
            spec={{
                "$schema": "https://vega.github.io/schema/vega/v6.json",
                "width": 900,
                "height": 300,
                "padding": 5,

                "config": {
                    "axis": {
                        "labelColor": "#BABABA",
                        "titleColor": "#333D49",
                    }
                },
                "data": [
                    {
                        "name": "teams",
                        "values": univData
                    }
                ],
                "signals": [
                    {
                        "name": "tooltip",
                        "value": {},
                        "on": [
                            { "events": "rect:mouseover", "update": "datum" },
                            { "events": "rect:mouseout",  "update": "{}" }
                        ]
                    }
                ],
                "scales": [
                    {
                        "name": "xscale",
                        "type": "band",
                        "domain": {"data": "teams", "field": "name"},
                        "range": "width",
                        "padding": 0.075,
                        "round": true
                    },
                    {
                        "name": "yscale",
                        "domain": { "data": "teams", "field": "points" },
                        "nice": true,
                        "range": "height",
                    }
                ],
                "axes": [
                    { "orient": "bottom", "scale": "xscale", "labelAngle": -45, "labelAlign": "right" },
                    { "orient": "left", "scale": "yscale" }
                ],
                "marks": [
                    {
                        "type": "rect",
                        "from": { "data": "teams" },
                        "encode": {
                            "enter": {
                                "x": { "scale": "xscale", "field": "name" },
                                "width": { "scale": "xscale", "band": 1 },
                                "y": { "scale": "yscale", "field": "points" },
                                "y2": { "scale": "yscale", "value": 0 }
                            },
                            "update": {
                                "fill": { "value": "steelblue" }
                            },
                            "hover": {
                                "fill": { "value": "red" }
                            }
                        }
                    },
                    {
                        "type": "text",
                        "interactive": false,
                        "encode": {
                            "enter": {
                                "align": {"value": "center"},
                                "baseline": {"value": "bottom"},
                                "fill": {"value": "#333"}
                            },
                        }
                    }
                ]
            }}
        />
    )
}
