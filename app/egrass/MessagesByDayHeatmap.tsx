'use client'

import { VegaEmbed } from 'react-vega';


export default function MessagesByDayHeatmap() {
    // https://stackoverflow.com/questions/61266239/vega-lite-how-to-aggregate-by-week
    return (
        <VegaEmbed
            options={{ actions: false }}
            spec={{
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "width": 800,
                "height": 200,
                "background": null,
                "title": {
                    "text": "Messages by day of year",
                    "color": "white"
                },

                "data": {
                    "url": "data/heatmap_egrass.csv",
                    "format": { "type": "csv" }
                },
                "transform": [
                    { "timeUnit": "yearmonthdate", "field": "date", "as": "date" },
                    {
                        "aggregate": [{ "op": "sum", "field": "count", "as": "count" }],
                        "groupby": ["date"]
                    },
                    { "calculate": "day(datum.date) == 1", "as": "mondays" },
                    {
                        "window": [{ "op": "sum", "field": "mondays", "as": "week" }],
                        "sort": "date"
                    }
                ],
                "mark": "rect",
                "encoding": {
                    "y": {
                        "timeUnit": "day",
                        "field": "date",
                        "type": "ordinal",
                        "title": "Day of week",
                        "sort": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA"
                        }
                    },
                    "x": {
                        "field": "week",
                        "type": "ordinal",
                        "title": "Week of year",
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
                    },
                    "tooltip": [
                        { "field": "date", "timeUnit": "yearmonthdate", "title": "Date" },
                        { "field": "count", "aggregate": "sum", "title": "Count" }
                    ]
                }
            }}
        />
    )
}
