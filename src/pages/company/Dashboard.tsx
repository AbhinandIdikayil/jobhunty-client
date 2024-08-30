import { Link, useOutletContext } from "react-router-dom"
import JobCard from "../../components/company/JobCard"
import { prop } from "../../types/AllTypes"
import { ArrowRight, Download } from "lucide-react";
import BarChartDashboard from "src/components/company/BarChartDashboard";
import PieCharDashboard from "src/components/company/PieCharDashboard";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllJob, listApplicants } from "src/redux/actions/jobAction";
import { AXIOS_INSTANCE_JOB } from "src/constants/axiosInstance";
import { CSVLink } from "react-csv";


export interface chart {
    week: boolean,
    month: boolean,
    year: boolean,
}
function Dashboard() {
    const { open } = useOutletContext<prop>()
    const dispatch: AppDispatch = useDispatch()
    const [timePeriod, setTimePeriod] = useState<chart>({
        week: true,
        month: false,
        year: false,
    });
    const state = useSelector((state: RootState) => state?.job);
    const scheduledForToday = state?.applicants?.flatMap(applicant => (
        applicant?.schedule?.filter(schedule => new Date(schedule.date).getTime() < Date.now())
    ));
    const [csvData, setCsvData] = useState([]);

    const fetchData = async () => {
        try {
            await dispatch(listApplicants()).unwrap()
            await dispatch(getAllJob()).unwrap()
        } catch (error) {
            console.log(error)
        }
    }
    async function download() {
        try {
            const { data } = await AXIOS_INSTANCE_JOB.post("/download");

            const csvData = data.map((candidate: any) => ({
                name: candidate.user.name,
                email: candidate.user.email,
                status: candidate.hiring_status,
                phone: candidate.user?.phonenumber
            }));

            setCsvData(csvData);
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
        download()
    }, [])
    const headers = [
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
        { label: "Status", key: "status" }, // Note: 'status' field should match your data field
        { label: "Phone", key: "phone" }, // Note: 'status' field should match your data field
    ];


    return (
        <div className={`flex flex-col ${open ? 'w-11/12' : 'w-full'} max-md:ml-0 px-0  py-5 max-md:w-full text-zinc-800 `}>
            <div className="sm:pl-5 flex flex-col grow pb-6 w-full max-md:max-w-full ">
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                </div>
                <div className="px-5 mt-8 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-1/3 max-md:ml-0 max-md:w-full">
                            <div className="flex grow gap-3.5 items-center p-6 w-full text-white bg-indigo-600 max-md:px-5 max-md:mt-6">
                                <div className="self-stretch my-auto text-5xl font-semibold leading-10 max-md:text-4xl">
                                    76
                                </div>
                                <div className="text-lg font-medium leading-7">
                                    New candidates to review
                                </div>
                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d67482e3d717ee772fa042101c13ad242d3c3efbcfa9515fa9715b3514f77fd?apiKey=bf80438c4595450788b907771330b274&"
                                    className="shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col  w-1/3 max-md:ml-0 max-md:w-full">
                            <div className="flex grow gap-3.5 justify-between p-6 w-full text-white bg-emerald-300 max-md:px-5 max-md:mt-6">
                                <div className="flex gap-3.5">
                                    <div className="text-5xl font-semibold leading-10 max-md:text-4xl">
                                        {scheduledForToday?.length}
                                    </div>
                                    <div className="my-auto text-lg font-medium leading-7">
                                        Schedule for today
                                    </div>
                                </div>
                                <img loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5192c2afba141d8c84b3ed160d0b813c35157bac93e43620e4127a0fd1d8c6fb?apiKey=bf80438c4595450788b907771330b274&"
                                    className="shrink-0 my-auto w-6 aspect-square"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-6 w-full max-md:max-w-full ">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 ">
                        <div className={`flex flex-col ${open ? 'w-3/4' : 'w-full'}  max-md:ml-0 max-md:w-full`}>
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
                                        <div onClick={() => {
                                            setTimePeriod((prev: chart) => ({
                                                ...prev,
                                                week: true,
                                                month: false,
                                                year: false,
                                            }))
                                        }} className={`justify-center px-3 py-2 hover:cursor-pointer  ${timePeriod?.week && 'bg-white'} `}>
                                            Week
                                        </div>
                                        <div onClick={() => {
                                            setTimePeriod((prev: chart) => ({
                                                ...prev,
                                                week: false,
                                                month: true,
                                                year: false,
                                            }))
                                        }} className={`justify-center px-3 py-2 hover:cursor-pointer ${timePeriod?.month && 'bg-white'}`}>
                                            Month
                                        </div>
                                        <div onClick={() => {
                                            setTimePeriod((prev: chart) => ({
                                                ...prev,
                                                week: false,
                                                month: false,
                                                year: true,
                                            }))
                                        }} className={`justify-center px-3 py-2 hover:cursor-pointer ${timePeriod?.year && 'bg-white'} `}>
                                            Year
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 max-md:mt-10 w-full  max-md:max-w-full">
                                    <BarChartDashboard charts={timePeriod} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-1/3 max-md:ml-0 ">
                            <div className="flex flex-col grow max-md:mt-6">
                                <div className="flex flex-col pt-6 pb-6 w-full bg-white border border-solid border-zinc-200">
                                    <div className="self-start ml-6 text-xl font-semibold leading-6 text-center text-slate-800 ">
                                        Job Open
                                    </div>
                                    <div className="flex gap-4 items-start px-6 pt-2.5 pb-5 mt-4 max-md:px-5">
                                        <div className="self-start text-7xl font-semibold leading-[72px] text-slate-800 max-md:text-4xl">
                                            {state?.jobs?.totalCount?.[0]?.count ?? 0}
                                        </div>
                                        <div className="flex-auto self-end mt-10 text-xl leading-8 text-slate-500">
                                            Jobs Opened
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col pt-6 pb-6 mt-6 w-full bg-white border border-solid border-zinc-200">
                                    <div className="self-start text-xl font-semibold leading-6 text-center text-slate-800 flex w-full justify-around">
                                        <div>
                                            Applicants Summary
                                        </div>
                                        {csvData.length > 0 && (
                                            <CSVLink
                                                data={csvData}
                                                headers={headers}
                                                filename={"Candidates_List.csv"}
                                                className="btn"
                                            >
                                                <Download />
                                            </CSVLink>
                                        )}
                                    </div>
                                    <div className="flex gap-2 px-6 py-2 mt-4 whitespace-nowrap max-md:px-5">
                                        <PieCharDashboard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full  mt-6 border border-solid border-zinc-200 max-md:max-w-full">
                    <div className="flex gap-5 justify-between p-6 w-full font-semibold bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                        <div className="text-xl leading-6 text-slate-800">
                            Job Updates
                        </div>
                        <Link to={'job-list'} className="flex gap-2 text-base leading-6 text-indigo-600">
                            <div>View All</div>
                            <ArrowRight />
                        </Link>
                    </div>
                    <div className="p-6 w-full max-md:px-5 max-md:max-w-full">
                        <JobCard />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard