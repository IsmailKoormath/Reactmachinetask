import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJs, ArcElement, Legend, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import classes from './Pie_chart.module.css';

ChartJs.register(ArcElement, Legend, Tooltip);


const options = {
    responsive: true,
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
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/pie-chart')
            .then((response) => {
                setCategory(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const data = {
        labels: category.map(categ => categ.label),
        datasets: [
            {
                data: category.map(categ => categ.value),
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


    return (
        <div className={classes.Pie_chart}>
            <div style={{width:'13rem' ,height:'13rem'}}>
                <Pie data={data} options={options} />
            </div>
            <ul className={classes.LabelList}>
                {category && category.map((cate, index) => (
                    <li key={index}>
                        <span
                            className={classes.ColorBox}
                            style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
                        ></span>
                        {cate.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PieChart;
