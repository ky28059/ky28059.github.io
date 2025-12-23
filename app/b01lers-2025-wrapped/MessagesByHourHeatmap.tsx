'use client'

import { VegaEmbed } from 'react-vega';


export default function MessagesByHourHeatmap() {
    return (
        <VegaEmbed
            options={{ actions: false }}
            spec={{
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "data": {
                    "url": "data/heatmap_511675552386777099.csv",
                    "format": { "type": "csv" }
                },
                "width": 800,
                "height": 300,
                "background": null,
                "title": {
                    "text": "Messages by hour of day",
                    "color": "white"
                },

                "mark": "rect",
                "encoding": {
                    "x": {
                        "field": "date",
                        "type": "temporal",
                        "timeUnit": "day",
                        "title": "Day of week",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA"
                        }
                    },
                    "y": {
                        "field": "date",
                        "type": "temporal",
                        "timeUnit": "hours",
                        "title": "Hour",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "format": "%-I:%M %p"
                        },
                        "scale": {
                            "reverse": true
                        }
                    },
                    "color": {
                        "field": "count",
                        "type": "quantitative",
                        "aggregate": "sum",
                        "title": "Message count",
                        "scale": {
                            "scheme": "magma"
                        },
                        "legend": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA"
                        }
                    },
                    "tooltip": [
                        { "field": "date", "timeUnit": "day", "title": "Day" },
                        { "field": "date", "timeUnit": "hours", "title": "Hour" },
                        { "field": "count", "aggregate": "sum", "title": "Count" }
                    ]
                }
            }}
        />
    )
}
