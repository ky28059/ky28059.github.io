'use client'

import { VegaEmbed } from 'react-vega';
import { teamData } from '@/app/b01lers-2025-wrapped/data';


export default function CTFRatingChart(props: { index: number }) {
    const data = props.index === -1
        ? teamData.flatMap(f => f.events)
        : teamData[props.index].events;

    return (
        <VegaEmbed
            options={{ actions: false }}
            spec={{
                "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
                "width": 800,
                "height": 300,
                "background": null,
                "title": {
                    "text": `CTF weight vs. rating gain (${props.index === -1 ? 'overall' : teamData[props.index].year})`,
                    "color": "white"
                },

                "data": {
                    "values": data
                },
                "mark": {
                    "type": "circle",
                    "tooltip": true
                },
                "encoding": {
                    "x": {
                        "bin": { "maxbins": 20 },
                        "field": "weight",
                        "title": "CTF weight (binned)",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "gridColor": "#404040"
                        }
                    },
                    "y": {
                        "bin": { "maxbins": 10 },
                        "field": "rating",
                        "title": "Rating gain (binned)",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "gridColor": "#404040"
                        }
                    },
                    "size": {
                        "aggregate": "count",
                        "title": "CTF count",
                        "legend": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA"
                        }
                    }
                },
                // "tooltip": [
                //     { "field": "weight", "title": "Weight" },
                //     { "field": "rating", "title": "Rating gain" }
                // ]
            }}
        />
    )
}
