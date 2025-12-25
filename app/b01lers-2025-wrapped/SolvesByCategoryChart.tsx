'use client'

import { VegaEmbed } from 'react-vega';


export default function SolvesByCategoryChart(props: { normalize?: boolean, unit?: string }) {
    return (
        <VegaEmbed
            options={{ actions: false }}
            spec={{
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "width": 800,
                "height": 300,
                "background": null,
                "title": {
                    "text": "Solves over time by category" + (props.normalize ? " (normalized)" : ""),
                    "color": "white"
                },

                "data": {
                    "url": "data/solves.csv",
                    "format": { "type": "csv" }
                },
                "mark": {
                    "type": "bar",
                    // "line": true,
                    "tooltip": true
                },
                "encoding": {
                    "y": {
                        "aggregate": "sum",
                        "field": "count",
                        "title": props.normalize ? "Solve percentage" : "Solve count",
                        "stack": props.normalize ? "normalize" : undefined,
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "gridColor": props.normalize ? 'transparent' : "#404040"
                        }
                    },
                    "x": {
                        "timeUnit": props.unit ?? "yearmonth",
                        "field": "date",
                        "title": "Date",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "gridColor": "transparent",
                            "format": props.unit === 'year' ? '%Y' : "%m/%Y"
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
