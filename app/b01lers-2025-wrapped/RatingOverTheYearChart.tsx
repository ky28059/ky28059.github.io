'use client'

import { VegaEmbed } from 'react-vega';
import { teamData } from '@/app/b01lers-2025-wrapped/data';


export default function RatingOverTheYearChart() {
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
                    "values": aggregateRatingData(teamData[0].events)
                },
                "layer": [
                    {
                        "mark": { "type": "area", "opacity": 0.4, "color": "#66b3ff", "interpolate": "step-after" },
                        "encoding": {
                            "x": { "field": "end", "type": "temporal" },
                            "y": { "field": "rating", "type": "quantitative" }
                        }
                    },
                    {
                        "mark": { "type": "line", "color": "#66b3ff", "strokeWidth": 2, "interpolate": "step-after" },
                        "encoding": {
                            "x": { "field": "end", "type": "temporal" },
                            "y": { "field": "rating", "type": "quantitative" }
                        }
                    },
                ],
                "encoding": {
                    "x": {
                        "title": "Date",
                        "field": "end",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "gridColor": "#404040",
                            // "format": "d"
                        }
                    },
                    "y": {
                        "title": "CTFtime rating",
                        "field": "rating",
                        "axis": {
                            "labelColor": "#BABABA",
                            "titleColor": "#BABABA",
                            "gridColor": "#404040"
                        }
                    },
                    "tooltip": [
                        { "field": "end", "title": "Date", "type": "temporal", "format": "%B %d" },
                        { "field": "rating", "title": "Rating", "format": ".3f" }
                    ]
                }
            }}
        />
    )
}

function aggregateRatingData(events: { rating: number, end: string }[]) {
    events.sort((a, b) => a.end.localeCompare(b.end));

    const curr: number[] = [];
    const res: { rating: number, end: string }[] = [];
    let rating: number = 0;

    for (let i = 0; i < events.length; i++) {
        if (i < 10) {
            curr.push(events[i].rating);
            rating += events[i].rating;
        } else {
            // TODO: more efficient with a heap
            curr.sort((a, b) => a - b);

            if (curr[0] < events[i].rating) {
                rating -= curr[0];
                rating += events[i].rating;
                curr[0] = events[i].rating;
            }
        }

        res.push({ rating, end: events[i].end });
    }

    console.log(res);
    return res;
}
