import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChatJS, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js'
import { lineChartData } from '../utils'

ChatJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)
export default function Graph() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            },
            Title: {
                display: true,
                title: {
                    text: "Transaction Graph"
                }

            }
        }
    }

    return (
        <>

            <Line options={options} data={lineChartData} />

        </>
    )
}
