import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChatJS, Tooltip, Legend,ArcElement } from 'chart.js'
import { PieChatData } from '../utils'


ChatJS.register(
    Tooltip, Legend,ArcElement
)
export default function PieChat() {

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
    <Bar options={options} data={PieChatData} />
  )
}
