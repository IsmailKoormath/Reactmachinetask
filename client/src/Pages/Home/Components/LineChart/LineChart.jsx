import React from 'react'
import classes from './LineChart.module.css'
import { Line } from 'react-chartjs-2';
import {
    Chart as Chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js'

Chartjs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [{
        data: [10, 15, 8, 12, 18],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor:'rgb(75, 192, 192)',
        tension: 0.1
    }]

}
const options = {
    responsive: true,
    plugins: {

    },
    scale: {
        y: {
            beginAtZero: true,
            max: 20, // Set the maximum value for the y-axis
            ticks: {
                stepSize: 5, // Set the interval between ticks

            }
        }
    }
}

const LineChart = () => {
    return (
        <div className={classes.linechart}>
            <Line data={data} options={options} />

        </div>
    )
}

export default LineChart