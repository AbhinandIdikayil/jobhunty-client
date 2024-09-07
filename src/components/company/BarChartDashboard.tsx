import { chart } from 'src/pages/company/Dashboard';
import DayChart from './chart/DayChart';
import MonthChart from './chart/monthChart';
import YearChart from './chart/YearChart';

function BarChartDashboard({ charts }: { charts: chart }) {

    return (
        <div>
            {/* <BarChart
                series={[
                    { data: [4, 2, 5, 4, 1], stack: 'A', label: 'Series A1' },
                    { data: [2, 8, 1, 3, 1], stack: 'A', label: 'Series A2' },
                    { data: [14, 6, 5, 8, 9], label: 'Series B1' },
                ]}
                barLabel={(item, context) => {
                    if ((item.value ?? 0) > 10) {
                        return 'High';
                    }
                    return context.bar.height < 60 ? null : item.value?.toString();
                }}
                width={600}
                height={350}
            /> */}
            {
                charts?.week && (
                    <DayChart />
                )
            }
            {
                charts?.month && (
                    <MonthChart />
                )
            }
            {
                charts?.year && (
                    <YearChart />
                )
            }
        </div>
    );
}

export default BarChartDashboard