import "react-day-picker/dist/style.css";
import ScheduleChart from "src/components/company/ScheduleChart";

function Schedules() {
    const interviewData = [
        { date: '2024-08-18', time: '09:00', count: 1 },
        { date: '2024-08-18', time: '10:00', count: 2 },
        { date: '2024-08-19', time: '09:00', count: 3 },
        // Add more entries as needed
    ];

    return (
        <div className="flex flex-col w-full ">
            <div className="flex sm:flex-row items-start w-full max-md:max-w-full">
                <div className="flex bg-green-400 grow shrink w-full max-md:max-w-full">
                    <ScheduleChart data={interviewData} />
                </div>
            </div>
        </div>
    )
}

export default Schedules


