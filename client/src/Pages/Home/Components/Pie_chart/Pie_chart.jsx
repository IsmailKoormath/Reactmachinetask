import React from 'react'
import { Chart as ChartJs, ArcElement, Legend, Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import classes from './Pie_chart.module.css'

ChartJs.register(ArcElement, Legend, Tooltip)
const data = {
    labels: ["Category A", "Category B", "Category C", "Category D", "Category E"],
    datasets: [
        {
            data: [10, 20, 5],
            backgroundColor: [
                '#67C587',
                '#88D1A1',
                '#A9DEBA',
                '#C9EAD4',
                '#EAF6ED'
            ],
            borderColor: "white",
            borderWidth: 1
        }
    ]
};
const options = {
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                padding: 20,
            },
            display: false,
        },
    },
};
const PieChart = () => {
    return (
        <div className={classes.Pie_chart}>
            <Pie data={data} options={options} />
                <ul className={classes.LabelList}>
                    {data.labels.map((label, index) => (
                        <li key={index} >
                            <span
                                className={classes.ColorBox}
                                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                            ></span>
                            {label}
                        </li>
                    ))}
                </ul>

        </div>
    )
}

export default PieChart