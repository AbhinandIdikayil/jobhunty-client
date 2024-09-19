import "react-day-picker/dist/style.css";
import ScheduleChart from "src/components/company/ScheduleChart";

function Schedules() {
   

    return (
        <div className="flex flex-col w-full ">
            <div className="flex sm:flex-row items-start w-full max-md:max-w-full">
                <div className="flex bg-green-400 grow shrink w-full max-md:max-w-full">
                    <ScheduleChart />
                </div>
            </div>
        </div>
    )
}

export default Schedules


