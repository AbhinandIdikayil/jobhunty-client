import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { chart } from "src/pages/company/Dashboard";

function BarChartDashboard({ chart, setChart }: { chart: chart, setChart: React.Dispatch<React.SetStateAction<chart>> }) {

    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'APPLICANTS',
                data: [44, 55, 41, 67, 22, 43, 43],
            },
            {
                name: 'SHORTLISTED',
                data: [13, 23, 20, 8, 13, 27, 12],
            },
            {
                name: 'INTERVIEW',
                data: [11, 17, 15, 15, 21, 14, 3],
            },
            {
                name: 'PRODUCT D',
                data: [21, 7, 25, 13, 22, 8],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                toolbar: {
                    show: true,
                },
                zoom: {
                    enabled: true,
                },
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10,
                    borderRadiusApplication: 'end', // 'around', 'end'
                    borderRadiusWhenStacked: 'last', // 'all', 'last'
                    dataLabels: {
                        total: {
                            enabled: true,
                            style: {
                                fontSize: '13px',
                                fontWeight: 900,
                            },
                        },
                    },
                },
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    '01/01/2011 GMT',
                    '01/02/2011 GMT',
                    '01/03/2011 GMT',
                    '01/04/2011 GMT',
                    '01/05/2011 GMT',
                    '01/06/2011 GMT',
                    '01/07/2011 GMT',
                ],
                labels: {
                    format: 'dd/MMM'
                }
            },
            legend: {
                position: 'right',
                offsetY: 40,
            },
            fill: {
                opacity: 1,
            },
        },
    });
    return (
        <div id="chart">
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                height={350}
            />
        </div>
    )
}

export default BarChartDashboard