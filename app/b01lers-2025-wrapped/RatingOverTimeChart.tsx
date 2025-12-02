'use client'

import { VegaEmbed } from 'react-vega';
import { teamData } from '@/app/b01lers-2025-wrapped/data';


export default function RatingOverTimeChart() {
    return (
        <VegaEmbed
            options={{ actions: false }}
            spec={{
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "width": 800,
                "height": 300,
                "background": null,
                // "title": {
                //     "text": "b01lers CTFtime rating",
                //     "color": "white"
                // },

                "data": {
                    "values": teamData
                },
                "layer": [
                    {
                        "data": { "url": "data/events-186494.json" },
                        "mark": { "type": "line", "color": "#f97316", "strokeWidth": 2 },
                        "encoding": {
                            "x": { "field": "year", "type": "quantitative" },
                            "y": { "field": "points", "type": "quantitative" }
                        }
                    },
                    {
                        "data": { "url": "data/events-186494.json" },
                        "mark": { "type": "area", "opacity": 0.4, "color": "#f97316" },
                        "encoding": {
                            "x": { "field": "year", "type": "quantitative" },
                            "y": { "field": "points", "type": "quantitative" }
                        }
                    },
                    {
                        "data": { "url": "data/events-27763.json" },
                        "mark": { "type": "line", "color": "#eab308", "strokeWidth": 2 },
                        "encoding": {
                            "x": { "field": "year", "type": "quantitative" },
                            "y": { "field": "points", "type": "quantitative" }
                        }
                    },
                    {
                        "data": { "url": "data/events-27763.json" },
                        "mark": { "type": "area", "opacity": 0.4, "color": "#eab308" },
                        "encoding": {
                            "x": { "field": "year", "type": "quantitative" },
                            "y": { "field": "points", "type": "quantitative" }
                        }
                    },
                    {
                        "mark": { "type": "area", "opacity": 0.4, "color": "#66b3ff" },
                        "encoding": {
                            "x": { "field": "year", "type": "quantitative" },
                            "y": { "field": "points", "type": "quantitative" }
                        }
                    },
                    {
                        "mark": { "type": "line", "color": "#66b3ff", "strokeWidth": 2 },
                        "encoding": {
                            "x": { "field": "year", "type": "quantitative" },
                            "y": { "field": "points", "type": "quantitative" }
                        }
                    },
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
                        "title": "CTFtime rating",
                        "field": "points",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "gridColor": "#404040"
                        }
                    },
                    "tooltip": [
                        { "field": "year", "title": "Year" },
                        { "field": "points", "title": "Points" }
                    ]
                }
            }}
        />
    )
}
