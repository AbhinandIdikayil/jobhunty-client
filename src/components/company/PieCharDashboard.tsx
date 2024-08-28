import ReactApexChart from "react-apexcharts";

function PieCharDashboard() {
    const options = {
        series: [44, 55, 13, 43, 22],
        chart: {
            width: 300,
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
        <div className="mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
            <div id="chart">
                <ReactApexChart
                    options={options}
                    series={options.series}
                    type="pie"
                    width={options.chart.width}
                />
            </div>
        </div>
    )
}

export default PieCharDashboard