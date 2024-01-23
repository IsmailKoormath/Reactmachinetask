import React, { useEffect, useState } from 'react';
import classes from './LineChart.module.css';
import { Line } from 'react-chartjs-2';
import {
    Chart as Chartjs,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';
import axios from 'axios';

Chartjs.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
);

const options = {
    responsive: true,
    plugins: {},
    // legend: {
    //     display: false
    // },
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
    const [progress, setProgress] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/graph').then((response) => {
            setProgress(response.data);
        })
         .catch((error) => {
             console.error('Error fetching data:', error);
         });
    }, []);

    const chartData = {
        labels: progress.map(item => item.x),
        datasets: [
            {
                data: progress.map(item => item.y),
                fill: false,
                borderColor: 'rgb(124, 196, 196)',
                backgroundColor: 'rgb(124, 196, 196)',
                tension: 0.1
            }
        ]
    };

    return (
        <div className={classes.linechart}>
            <div style={{ width: "100%", height: "100%" }}>
                <Line  data={chartData} options={options} />
            </div>
        </div>
    );
};

export default LineChart;
