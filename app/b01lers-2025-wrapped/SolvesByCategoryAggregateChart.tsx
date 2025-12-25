'use client'

import { VegaEmbed } from 'react-vega';


export default function SolvesByCategoryAggregateChart() {
    return (
        <VegaEmbed
            options={{ actions: false }}
            spec={{
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "width": 800,
                "height": 300,
                "background": null,
                "title": {
                    "text": "Cumulative solves over time by category",
                    "color": "white"
                },

                "data": {
                    "url": "data/solves.csv",
                    "format": { "type": "csv" }
                },
                "mark": {
                    "type": "area",
                    // "line": true,
                    "tooltip": true
                },
                "transform": [
                    {
                        "timeUnit": "yearmonthdate",
                        "field": "date",
                        "as": "binned_date"
                    },
                    {
                        "aggregate": [{ "op": "sum", "field": "count", "as": "daily_count" }],
                        "groupby": ["category", "binned_date"]
                    },
                    {
                        "impute": "daily_count",
                        "key": "binned_date",
                        "groupby": ["category"],
                        "value": 0
                    },
                    {
                        "sort": [{ "field": "binned_date" }],
                        "window": [{ "op": "sum", "field": "daily_count", "as": "agg_count" }],
                        "groupby": ["category"],
                        "frame": [null, 0]
                    },
                ],
                "encoding": {
                    "y": {
                        "field": "agg_count",
                        "title": "Solve count",
                        "type": "quantitative",
                        "stack": true,
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "gridColor": "#404040"
                        }
                    },
                    "x": {
                        // "timeUnit": "yearmonthdate",
                        "field": "binned_date",
                        "title": "Date",
                        "type": "temporal",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "gridColor": "#404040",
                            "format": "%m/%d/%Y"
                        }
                    },
                    "color": {
                        "field": "category",
                        "title": "Category",
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
