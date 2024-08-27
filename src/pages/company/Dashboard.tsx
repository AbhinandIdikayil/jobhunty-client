import { Link, useOutletContext } from "react-router-dom"
import JobCard from "../../components/company/JobCard"
import { prop } from "../../types/AllTypes"
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ArrowRight } from "lucide-react";


function Dashboard() {
    const { open } = useOutletContext<prop>()
    const [chartData, setChartData] = useState({
        series: [
            {
                name: 'PRODUCT A',
                data: [44, 55, 41, 67, 22, 43],
            },
            {
                name: 'PRODUCT B',
                data: [13, 23, 20, 8, 13, 27],
            },
            {
                name: 'PRODUCT C',
                data: [11, 17, 15, 15, 21, 14],
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
                ],
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

    const options = {
        series: [44, 55, 13, 43, 22],
        chart: {
            width: 342,
            type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        ],
    };

    return (
        <div className={`flex flex-col ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 max-md:w-full`}>
            <div className="flex flex-col grow pb-6 max-md:max-w-full">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                </div>
                <div className="px-5 mt-8 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex grow gap-3.5 items-center p-6 w-full text-white bg-indigo-600 max-md:px-5 max-md:mt-6">
                                <div className="self-stretch my-auto text-5xl font-semibold leading-10 max-md:text-4xl">
                                    76
                                </div>
                                <div className="text-lg font-medium leading-7">
                                    New candidates to review
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d67482e3d717ee772fa042101c13ad242d3c3efbcfa9515fa9715b3514f77fd?apiKey=bf80438c4595450788b907771330b274&"
                                    className="shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex grow gap-3.5 justify-between p-6 w-full text-white bg-emerald-300 max-md:px-5 max-md:mt-6">
                                <div className="flex gap-3.5">
                                    <div className="text-5xl font-semibold leading-10 max-md:text-4xl">
                                        3
                                    </div>
                                    <div className="my-auto text-lg font-medium leading-7">
                                        Schedule for today
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5192c2afba141d8c84b3ed160d0b813c35157bac93e43620e4127a0fd1d8c6fb?apiKey=bf80438c4595450788b907771330b274&"
                                    className="shrink-0 my-auto w-6 aspect-square"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex grow gap-2.5 justify-between p-6 w-full text-white bg-sky-400 max-md:px-5 max-md:mt-6">
                                <div className="flex gap-3.5">
                                    <div className="text-5xl font-semibold leading-10 max-md:text-4xl">
                                        24
                                    </div>
                                    <div className="my-auto text-lg font-medium leading-7">
                                        Messages received
                                    </div>
                                </div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1925330832ae6e0032c5685bd4dc5177474b0e377d509538ee3547c357bb6bb1?apiKey=bf80438c4595450788b907771330b274&"
                                    className="shrink-0 my-auto w-6 aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow py-6 w-full bg-white border border-solid border-zinc-200 max-md:mt-6 max-md:max-w-full">
                                <div className="flex gap-5 justify-between mx-6 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
                                    <div className="flex flex-col">
                                        <div className="text-xl font-semibold leading-6 text-slate-800">
                                            Job statistics
                                        </div>
                                        <div className="mt-1 text-sm leading-6 text-slate-500">
                                            Showing Jobstatistic Jul 19-25
                                        </div>
                                    </div>
                                    <div className="flex gap-0 self-start p-1 text-base font-semibold leading-6 text-indigo-600 whitespace-nowrap bg-violet-100">
                                        <div className="justify-center px-3 py-2 bg-white">
                                            Week
                                        </div>
                                        <div className="justify-center px-3 py-2 bg-violet-100">
                                            Month
                                        </div>
                                        <div className="justify-center px-3 py-2 bg-violet-100">
                                            Year
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-6 mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                                    <div id="chart">
                                        <ReactApexChart
                                            options={chartData.options}
                                            series={chartData.series}
                                            type="bar"
                                            height={350}
                                        />
                                    </div>
                                    <div id="html-dist"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-6">
                                <div className="flex flex-col pt-6 pb-6 w-full bg-white border border-solid border-zinc-200">
                                    <div className="self-start ml-6 text-xl font-semibold leading-6 text-center text-slate-800 max-md:ml-2.5">
                                        Job Open
                                    </div>
                                    <div className="flex gap-4 items-start px-6 pt-2.5 pb-5 mt-4 max-md:px-5">
                                        <div className="self-start text-7xl font-semibold leading-[72px] text-slate-800 max-md:text-4xl">
                                            12
                                        </div>
                                        <div className="flex-auto self-end mt-10 text-xl leading-8 text-slate-500">
                                            Jobs Opened
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col pt-6 pb-6 mt-6 w-full bg-white border border-solid border-zinc-200">
                                    <div className="self-start ml-6 text-xl font-semibold leading-6 text-center text-slate-800 max-md:ml-2.5">
                                        Applicants Summary
                                    </div>
                                    <div id="chart">
                                        <ReactApexChart
                                            options={options}
                                            series={options.series}
                                            type="pie"
                                            width={options.chart.width}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-6 border border-solid border-zinc-200 max-md:max-w-full">
                    <div className="flex gap-5 justify-between p-6 w-full font-semibold bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                        <div className="text-xl leading-6 text-slate-800">
                            Job Updates
                        </div>
                        <Link to={'job-list'} className="flex gap-2 text-base leading-6 text-indigo-600">
                            <div>View All</div>
                            <ArrowRight />
                        </Link>
                    </div>
                    <div className="p-6 max-md:px-5 max-md:max-w-full">
                        <JobCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard