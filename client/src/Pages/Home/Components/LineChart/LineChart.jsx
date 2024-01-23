import React from 'react';
import classes from './LineChart.module.css';
import { Line } from 'react-chartjs-2';
import {
    Chart as Chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';

Chartjs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [{
        data: [10, 15, 8, 12, 18],
        fill: false,
        borderColor: 'rgb(124, 196, 196)',
        backgroundColor: 'rgb(124, 196, 196)',
        tension: 0.1
    }]
};

const options = {
    responsive: true,
    plugins: {},
    legend: {
        display: false
    },
    scales: {
        y: {
            beginAtZero: true,
            max: 20,
            ticks: {
                stepSize: 5,
            }
        }
    }
};

const LineChart = () => {
    return (
        <div className={classes.linechart}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default LineChart;
