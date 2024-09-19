import { chart } from 'src/pages/company/Dashboard';
import DayChart from './chart/DayChart';
import MonthChart from './chart/monthChart';
import YearChart from './chart/YearChart';

function BarChartDashboard({ charts }: { charts: chart }) {

    return (
        <div>
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