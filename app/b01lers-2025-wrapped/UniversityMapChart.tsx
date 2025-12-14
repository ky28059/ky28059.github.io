'use client'

import { VegaEmbed } from 'react-vega';
import { univData } from '@/app/b01lers-2025-wrapped/data';


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
                            { "events": "@cell:mouseover", "update": "datum" },
                            { "events": "@cell:mouseout", "update": "null" }
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
                            { "events": "dblclick", "update": "cell_stroke ? null : 'brown'" },
                            { "events": "mousedown!", "update": "cell_stroke" }
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
                        "translate": [{ "signal": "width / 2" }, {"signal": "height / 2" }]
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
                                "fill": { "value": "#26252c" },
                                "stroke": { "value": "#666666" }
                            },
                            "update": {
                                "path": { "field": "path" }
                            }
                        }
                    },
                    {
                        "type": "symbol",
                        "from": { "data": "teams" },
                        "encode": {
                            "enter": {
                                "size": { "scale": "size", "field": "points" },
                                "fill": { "value": "steelblue" },
                                "fillOpacity": { "value": 0.8 },
                                "stroke": { "value": "white" },
                                "strokeWidth": { "value": 1.5 }
                            },
                            "update": {
                                "x": { "field": "x" },
                                "y": { "field": "y" },
                                "fill": { "signal": "hover && hover.name == datum.name ? '#ca8a04' : datum.name == 'b01lers' ? '#eab308' : 'steelblue'" }
                            }
                        }
                    },
                    {
                        "type": "path",
                        "name": "cell",
                        "from": {"data": "teams"},
                        "encode": {
                            "enter": {
                                "fill": { "value": "transparent" },
                                "strokeWidth": { "value": 0.35 }
                            },
                            "update": {
                                "path": { "field": "path" },
                                "stroke": { "signal": "cell_stroke" }
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
