'use client'

import { VegaEmbed } from 'react-vega';


export default function MessagesHeatmap() {
    return (
        <VegaEmbed
            options={{ actions: false }}
            spec={{
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "width": 800,
                "height": 200,
                "background": null,
                "title": {
                    "text": "Messages by week of year",
                    "color": "white"
                },

                "data": {
                    "url": "data/heatmap.csv",
                    "format": { "type": "csv" }
                },
                "transform": [
                    { "timeUnit": "yearmonthdate", "field": "date", "as": "date" },
                    {
                        "aggregate": [{ "op": "sum", "field": "count", "as": "count" }],
                        "groupby": ["date"]
                    },
                    { "calculate": "day(datum.date) == 0", "as": "sundays" },
                    {
                        "window": [{ "op": "sum", "field": "sundays", "as": "week" }],
                        "sort": "date"
                    }
                ],
                "mark": "rect",
                "encoding": {
                    "y": {
                        "timeUnit": "day", "field": "date", "type": "ordinal", "title": "Day of Week",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA"
                        }
                    },
                    "x": {
                        "field": "week", "type": "ordinal", "title": "Week of year",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA"
                        }
                    },
                    "color": {
                        "aggregate": "sum",
                        "field": "count",
                        "type": "quantitative",
                        "title": "Message count",
                        "scale": {
                            "scheme": "magma"
                        },
                        "legend": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA"
                        }
                    }
                }
            }}
        />
    )
}

/*
{
                "$schema": "https://vega.github.io/schema/vega/v6.json",
                "width": 800,
                "height": 500,
                "padding": 5,

                "config": {
                    "axis": {
                        "labelColor": "#BABABA",
                        "titleColor": "#BABABA",
                    }
                },
                "title": {
                    "text": "b01lers server message density",
                    "anchor": "middle",
                    "fontSize": 16,
                    "frame": "group",
                    "offset": 4
                },
                "signals": [],
                "data": [
                    {
                        "name": "count",
                        "url": "data/heatmap.csv",
                        "format": { "type": "csv", "parse": { "count": "number", "date": "date" } },
                        "transform": [
                            { "type": "formula", "as": "hour", "expr": "hours(datum.date)" },
                            {
                                "type": "formula", "as": "day",
                                "expr": "datetime(year(datum.date), month(datum.date), date(datum.date))"
                            }
                        ]
                    }
                ],
                "scales": [
                    {
                        "name": "x",
                        "type": "time",
                        "domain": { "data": "count", "field": "day" },
                        "range": "width"
                    },
                    {
                        "name": "y",
                        "type": "band",
                        "domain": [
                            6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
                            0, 1, 2, 3, 4, 5
                        ],
                        "range": "height"
                    },
                    {
                        "name": "color",
                        "type": "linear",
                        "range": { "scheme": "Magma" },
                        "domain": { "data": "count", "field": "count" },
                        "zero": false, "nice": true
                    }
                ],
                "axes": [
                    { "orient": "bottom", "scale": "x", "domain": false, "title": "Month", "format": "%b" },
                    {
                        "orient": "left", "scale": "y", "domain": false, "title": "Hour",
                        "encode": {
                            "labels": {
                                "update": {
                                    "text": { "signal": "datum.value === 0 ? 'Midnight' : datum.value === 12 ? 'Noon' : datum.value < 12 ? datum.value + ':00 am' : (datum.value - 12) + ':00 pm'" }
                                }
                            }
                        }
                    }
                ],
                "legends": [
                    {
                        "fill": "color",
                        "type": "gradient",
                        "title": "Message count",
                        "titleFontSize": 12,
                        "titlePadding": 4,
                        "gradientLength": { "signal": "height - 16" }
                    }
                ],
                "marks": [
                    {
                        "type": "rect",
                        "from": { "data": "count" },
                        "encode": {
                            "enter": {
                                "x": { "scale": "x", "field": "day" },
                                "y": { "scale": "y", "field": "hour" },
                                "width": { "value": 5 },
                                "height": { "scale": "y", "band": 1 },
                                "tooltip": { "signal": "timeFormat(datum.date, '%b %d %I:00 %p') + ': ' + datum.count" }
                            },
                            "update": {
                                "fill": { "scale": "color", "field": "count" }
                            }
                        }
                    }
                ]
            }
*/
