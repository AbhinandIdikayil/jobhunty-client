import { BarChart } from '@mui/x-charts'

function YearChart() {
    return (
        <BarChart
            series={[
                { data: [35], color: 'violet' },
                { data: [51], color: "cyan" },
            ]}
            height={290}
            xAxis={[{ data: [new Date().getFullYear()], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
    )
}

export default YearChart