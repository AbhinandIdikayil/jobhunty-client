import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ScheduleChart from "src/components/company/ScheduleChart";

function Schedules() {
    const [selected, setSelected] = useState()
    const interviewData = [
        { date: '2024-08-18', time: '09:00', count: 1 },
        { date: '2024-08-18', time: '10:00', count: 2 },
        { date: '2024-08-19', time: '09:00', count: 3 },
        // Add more entries as needed
    ];

    return (
        <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row items-start w-full max-md:max-w-full">
                <div className="border border-solid w-fit bg-gray-50">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={
                            selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
                        }
                    />
                </div>
                <div className="flex flex-col bg-green-400 grow shrink justify-center items-end w-fit max-md:max-w-full">
                    {/* <div className="flex flex-wrap gap-1 w-full font-semibold leading-relaxed text-center whitespace-nowrap bg-white shadow-sm max-w-[818px] max-md:max-w-full">
                        <div className="flex flex-wrap flex-auto my-auto max-md:max-w-full">
                            <div className="flex flex-col items-center p-2">
                                <div className="text-sm text-slate-500">SUN</div>
                                <div className="mt-2 text-lg text-slate-800">23</div>
                            </div>
                            <div className="flex flex-col items-center p-2">
                                <div className="text-sm text-slate-500">MON</div>
                                <div className="flex flex-col mt-2 w-9 text-lg text-white">
                                    <div className="z-10 px-2 py-0.5 bg-indigo-600 rounded-full fill-indigo-600">
                                        24
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center p-2">
                                <div className="text-sm text-slate-500">TUE</div>
                                <div className="mt-2 text-lg text-slate-800">25</div>
                            </div>
                            <div className="flex flex-col items-center p-2">
                                <div className="text-sm text-slate-500">WED</div>
                                <div className="mt-2 text-lg text-slate-800">26</div>
                            </div>
                        </div>
                        <div className="flex flex-auto">
                            <div className="flex flex-col items-center p-2 bg-red-400 bg-opacity-10">
                                <div className="text-sm text-slate-500">THU</div>
                                <div className="mt-2 text-lg text-slate-800">27</div>
                                <div className="gap-2.5 self-stretch px-4 text-xs text-white bg-red-400">
                                    Holiday
                                </div>
                            </div>
                            <div className="flex flex-col items-center self-start p-2 mt-1.5">
                                <div className="text-sm text-slate-500">FRI</div>
                                <div className="mt-2 text-lg text-slate-800">28</div>
                            </div>
                            <div className="flex flex-col items-center py-2 pl-2 my-auto">
                                <div className="text-sm text-slate-500">SAT</div>
                                <div className="mt-2 text-lg text-slate-800">29</div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-7 max-w-full w-[794px] max-md:pr-5">
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
                                <div className="flex gap-6 mt-6 text-sm max-md:mt-10">
                                    <div className="flex flex-col leading-relaxed text-right max-md:hidden">
                                        <div className="font-semibold text-slate-800">GMT +07</div>
                                        <div className="flex flex-col items-start pl-3 mt-11 text-slate-600 max-md:hidden max-md:mt-10">
                                            <div className="ml-3 max-md:ml-2.5">1 AM</div>
                                            <div className="mt-12 ml-3 max-md:mt-10 max-md:ml-2.5">
                                                2 AM
                                            </div>
                                            <div className="mt-12 ml-3 max-md:mt-10 max-md:ml-2.5">
                                                3 AM
                                            </div>
                                            <div className="mt-11 ml-3 max-md:mt-10 max-md:ml-2.5">
                                                4 AM
                                            </div>
                                            <div className="mt-12 ml-3 max-md:mt-10 max-md:ml-2.5">
                                                5 AM
                                            </div>
                                            <div className="mt-12 ml-3 max-md:mt-10 max-md:ml-2.5">
                                                6 AM
                                            </div>
                                            <div className="mt-12 ml-2.5 max-md:mt-10">7 AM</div>
                                            <div className="mt-12 ml-3 max-md:mt-10 max-md:ml-2.5">
                                                8 AM
                                            </div>
                                            <div className="mt-11 ml-3 max-md:mt-10 max-md:ml-2.5">
                                                9 AM
                                            </div>
                                            <div className="mt-12 max-md:mt-10 max-md:ml-1">
                                                10 AM
                                            </div>
                                            <div className="mt-11 max-md:mt-10 max-md:ml-1.5">
                                                11 AM
                                            </div>
                                            <div className="mt-12 max-md:mt-10">12 AM</div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col my-auto text-white">
                                        <div className="flex flex-col px-2 py-2.5 bg-sky-400">
                                            <div className="font-medium leading-5">
                                                Interview session with Kathryn Murphy
                                            </div>
                                            <div className="mt-1.5 leading-relaxed opacity-90 max-md:mr-1.5">
                                                02.00 - 05.00 AM
                                            </div>
                                            <img
                                                loading="lazy"
                                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf25b3fe216573e04f8b13c92ed23d463764493e84719826fb437337baab1411?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf25b3fe216573e04f8b13c92ed23d463764493e84719826fb437337baab1411?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf25b3fe216573e04f8b13c92ed23d463764493e84719826fb437337baab1411?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf25b3fe216573e04f8b13c92ed23d463764493e84719826fb437337baab1411?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf25b3fe216573e04f8b13c92ed23d463764493e84719826fb437337baab1411?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf25b3fe216573e04f8b13c92ed23d463764493e84719826fb437337baab1411?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf25b3fe216573e04f8b13c92ed23d463764493e84719826fb437337baab1411?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cf25b3fe216573e04f8b13c92ed23d463764493e84719826fb437337baab1411?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                                className="object-contain self-end mt-11 w-10 aspect-[1.67] max-md:mt-10 max-md:mr-1.5"
                                            />
                                        </div>
                                        <div className="flex flex-col px-2 py-2 mt-44 bg-sky-400 max-md:mt-10">
                                            <div className="font-medium leading-tight">
                                                Interview sess...
                                            </div>
                                            <div className="leading-relaxed opacity-90 max-md:mr-1.5">
                                                08.00 - 09.00 AM
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                                <div className="flex grow gap-2 text-sm text-white max-md:mt-10">
                                    <div className="flex flex-col flex-1 self-end p-2 bg-emerald-300 mt-[547px] max-md:mt-10">
                                        <div className="font-medium leading-tight">
                                            Meeting with s...
                                        </div>
                                        <div className="leading-relaxed opacity-90 max-md:mr-2">
                                            09.00 - 10.00 AM
                                        </div>
                                    </div>
                                    <div className="flex shrink-0 bg-rose-50 h-[736px] w-[137px]" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <ScheduleChart data={interviewData} />
                </div>
            </div>
        </div>
    )
}

export default Schedules


