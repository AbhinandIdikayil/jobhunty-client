import { useOutletContext } from "react-router-dom"
import JobCard from "../../components/company/JobCard"

interface prop {
    open:boolean
}

function Dashboard() {
    const {open} = useOutletContext<prop>()
    return (
        <div className={`flex flex-col ml-5 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 max-md:w-full`}>
            <div className="flex flex-col grow pb-6 max-md:max-w-full">
                <div className="flex gap-5 justify-between px-8 py-4 w-full bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-4 whitespace-nowrap">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/28fcac72ebb7d51aabcc8a2e42dcfd241ea63b6ee352291d3a8ebc64ceae3826?apiKey=bf80438c4595450788b907771330b274&"
                            className="shrink-0 self-start w-12 aspect-square"
                        />
                        <div className="flex flex-col">
                            <div className="text-base leading-6 text-slate-600">
                                Company
                            </div>
                            <div className="flex gap-2 text-xl font-semibold leading-6 text-slate-800">
                                <div>Nomad</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/11e2517998516c181ac04025690221ae22f5c4e4eb4dee7f65d6fdbaf2f88a9b?apiKey=bf80438c4595450788b907771330b274&"
                                    className="shrink-0 w-6 aspect-square"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 justify-center text-base font-bold leading-6 text-center text-white">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22cc243b4b17eb6822f1aae2f96ecac59c86787ba7154d9a5282f66481ba231f?apiKey=bf80438c4595450788b907771330b274&"
                            className="shrink-0 my-auto w-10 aspect-square"
                        />
                        <div className="flex gap-2.5 justify-center px-6 py-3 bg-indigo-600 max-md:px-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cf21e8a0b760a5ffef9e7996a107a62bc1d05df032f9ade093a7c12125c833?apiKey=bf80438c4595450788b907771330b274&"
                                className="shrink-0 self-start w-6 aspect-square"
                            />
                            <div>Post a job</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-between px-px mt-8 w-full max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col px-5 max-md:max-w-full">
                        <div className="text-2xl font-semibold leading-7 text-slate-800 max-md:max-w-full">
                            Good morning, Maria
                        </div>
                        <div className="mt-2 text-base font-medium leading-6 text-slate-500 max-md:max-w-full">
                            Here is your job listings statistic report from July 19 - July
                            25.
                        </div>
                    </div>
                    <div className="flex gap-4 justify-between px-4 py-3 my-auto text-base leading-6 bg-white border border-solid border-zinc-200 text-slate-800">
                        <div>Jul 19 - Jul 25</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/947f0915c2db61a0853787c774c64c4cf69bbb6bd8e3f7eef20c8ed60349f52d?apiKey=bf80438c4595450788b907771330b274&"
                            className="shrink-0 my-auto w-5 aspect-square"
                        />
                    </div>
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
                                <div className="flex gap-5 justify-between items-start px-6 mt-4 text-base font-semibold leading-6 bg-white shadow-sm text-slate-500 max-md:flex-wrap max-md:px-5">
                                    <div className="flex flex-col self-stretch whitespace-nowrap text-slate-800">
                                        <div>Overview</div>
                                        <div className="shrink-0 mt-2 h-1 bg-indigo-600 rounded-none" />
                                    </div>
                                    <div>Jobs View</div>
                                    <div className="max-md:max-w-full">Jobs Applied</div>
                                </div>
                                <div className="mx-6 mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[65%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow text-base font-medium leading-6 text-center text-slate-500 max-md:mt-6 max-md:max-w-full">
                                                <div className="flex flex-col py-2 ml-28 text-white whitespace-nowrap bg-slate-800 w-[82px] max-md:ml-2.5">
                                                    <div className="flex gap-2">
                                                        <div className="shrink-0 my-auto w-4 h-4 bg-emerald-300 rounded" />
                                                        <div>122</div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div className="shrink-0 my-auto w-4 h-4 bg-sky-400 rounded" />
                                                        <div>34</div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-4 items-end whitespace-nowrap max-md:flex-wrap">
                                                    <div className="flex flex-col flex-1 self-stretch">
                                                        <div className="shrink-0 bg-amber-400 h-[115px]" />
                                                        <div className="shrink-0 bg-violet-500 h-[115px]" />
                                                        <div className="mt-2">Mon</div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 mt-20 max-md:mt-10">
                                                        <div className="shrink-0 bg-amber-400 h-[26px]" />
                                                        <div className="shrink-0 bg-violet-500 h-[132px]" />
                                                        <div className="mt-2">Tue</div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 mt-20 max-md:mt-10">
                                                        <div className="shrink-0 bg-amber-400 h-[110px]" />
                                                        <div className="shrink-0 w-12 h-12 bg-violet-500" />
                                                        <div className="mt-2">Wed</div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 self-start mt-2">
                                                        <div className="shrink-0 bg-amber-400 h-[54px]" />
                                                        <div className="shrink-0 bg-violet-500 h-[168px]" />
                                                        <div className="mt-2">Thu</div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 mt-9">
                                                        <div className="shrink-0 bg-amber-400 h-[132px]" />
                                                        <div className="shrink-0 h-16 bg-violet-500" />
                                                        <div className="mt-2">Fri</div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 mt-36 max-md:mt-10">
                                                        <div className="shrink-0 bg-amber-400 h-[43px]" />
                                                        <div className="shrink-0 bg-violet-500 h-[42px]" />
                                                        <div className="mt-2">Sat</div>
                                                    </div>
                                                    <div className="flex flex-col flex-1 mt-32 max-md:mt-10">
                                                        <div className="shrink-0 bg-amber-400 h-[11px]" />
                                                        <div className="shrink-0 h-24 bg-violet-500" />
                                                        <div className="mt-2">Sun</div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-5 justify-between mt-2 max-md:flex-wrap">
                                                    <div className="flex gap-2">
                                                        <div className="shrink-0 my-auto w-4 h-4 bg-amber-400 rounded" />
                                                        <div>Job View</div>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        <div className="shrink-0 my-auto w-4 h-4 bg-violet-500 rounded" />
                                                        <div>Job Applied</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[35%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow mt-1.5 max-md:mt-7">
                                                <div className="flex flex-col p-4 w-full bg-white border border-solid border-zinc-200">
                                                    <div className="flex gap-5 justify-between">
                                                        <div className="text-lg font-semibold leading-7 text-slate-800">
                                                            Job Views
                                                        </div>
                                                        <div className="flex justify-center items-center p-1.5 w-8 h-8 bg-amber-400 rounded-[32px]">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b58c3c6fc28c4e0f1d0b6d52fa6c7bf8ff6647fa0dd82572266a71bd983ff3f9?apiKey=bf80438c4595450788b907771330b274&"
                                                                className="w-5 aspect-square"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-3.5 text-4xl font-semibold leading-9 text-center text-slate-800">
                                                        2,342
                                                    </div>
                                                    <div className="flex gap-2 text-lg font-medium leading-7 text-center">
                                                        <div className="text-slate-500">This Week </div>
                                                        <div className="flex gap-0 pr-1.5 text-violet-500 whitespace-nowrap">
                                                            <div>6.4%</div>
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/04ec4a4506dc32d534191018ffbd570687fbb14f6888a220b5d57497850f860b?apiKey=bf80438c4595450788b907771330b274&"
                                                                className="shrink-0 my-auto w-5 aspect-square"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col p-4 mt-4 w-full bg-white border border-solid border-zinc-200">
                                                    <div className="flex gap-5 justify-between">
                                                        <div className="text-lg font-semibold leading-7 text-slate-800">
                                                            Job Applied
                                                        </div>
                                                        <div className="flex justify-center items-center p-1.5 w-8 h-8 bg-violet-500 rounded-[32px]">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8642f66d4c4e6ff99eccd32ba0627ad24c7116e532e0a15a5fb6ff80bfb2089?apiKey=bf80438c4595450788b907771330b274&"
                                                                className="w-5 aspect-square"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="mt-3.5 text-4xl font-semibold leading-9 text-center text-slate-800">
                                                        654
                                                    </div>
                                                    <div className="flex gap-2 text-lg font-medium leading-7 text-center">
                                                        <div className="text-slate-500">This Week </div>
                                                        <div className="flex gap-0 pr-1.5 text-red-400 whitespace-nowrap">
                                                            <div>0.5%</div>
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/40003d672b31e1c9bbcdf175c9dd408c935d9a9598474d7d3ab4827f43837ebc?apiKey=bf80438c4595450788b907771330b274&"
                                                                className="shrink-0 my-auto w-5 aspect-square"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
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
                                    <div className="flex gap-2 px-6 py-2 mt-4 whitespace-nowrap max-md:px-5">
                                        <div className="text-7xl font-semibold leading-[72px] text-slate-800 max-md:text-4xl">
                                            67
                                        </div>
                                        <div className="self-end mt-6 text-xl leading-8 text-slate-500">
                                            Applicants
                                        </div>
                                    </div>
                                    <div className="flex gap-0 justify-center px-6 max-md:px-5">
                                        <div className="shrink-0 h-4 bg-violet-500 w-[150px]" />
                                        <div className="shrink-0 h-4 bg-emerald-300 w-[77px]" />
                                        <div className="shrink-0 w-10 h-4 bg-sky-400" />
                                        <div className="shrink-0 w-7 h-4 bg-amber-400" />
                                        <div className="flex-1 shrink-0 h-4 bg-red-400" />
                                    </div>
                                    <div className="flex gap-5 justify-between px-6 text-base leading-6 text-slate-800 max-md:px-5">
                                        <div className="flex flex-col pt-6">
                                            <div className="flex gap-2">
                                                <div className="shrink-0 my-auto w-5 h-5 bg-violet-500 rounded" />
                                                <div>
                                                    Full Time :{" "}
                                                    <span className="font-medium text-slate-800">
                                                        45
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-2">
                                                <div className="shrink-0 my-auto w-5 h-5 bg-emerald-300 rounded" />
                                                <div>
                                                    Part-Time :{" "}
                                                    <span className="font-medium text-slate-800">
                                                        24
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-2">
                                                <div className="shrink-0 my-auto w-5 h-5 bg-sky-400 rounded" />
                                                <div>
                                                    Remote :{" "}
                                                    <span className="font-medium text-slate-800">
                                                        22
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col self-start pt-6">
                                            <div className="flex gap-2">
                                                <div className="shrink-0 my-auto w-5 h-5 bg-amber-400 rounded" />
                                                <div>
                                                    Internship :{" "}
                                                    <span className="font-medium text-slate-800">
                                                        32
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-2">
                                                <div className="shrink-0 my-auto w-5 h-5 bg-red-400 rounded" />
                                                <div>
                                                    Contract :{" "}
                                                    <span className="font-medium text-slate-800">
                                                        30
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
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
                        <div className="flex gap-2 text-base leading-6 text-indigo-600">
                            <div>View All</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/91b969619ab6ae4edfcb08646ad01c396be532e86067e245a8b03ff64740f0c7?apiKey=bf80438c4595450788b907771330b274&"
                                className="shrink-0 self-start w-6 aspect-square"
                            />
                        </div>
                    </div>
                    <div className="p-6 max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <JobCard />
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-6 mx-auto w-full text-sm font-semibold leading-6 bg-white border border-solid border-zinc-200 max-md:pl-5 max-md:mt-10">
                                    <div className="flex gap-5 justify-between text-emerald-300 whitespace-nowrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4a0f79389fba4c6d33f37439376e2abce44580b00b3c8a125a65bf32c51e859?apiKey=bf80438c4595450788b907771330b274&"
                                            className="shrink-0 w-12 aspect-square"
                                        />
                                        <div className="justify-center self-start px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                                            Full-Time
                                        </div>
                                    </div>
                                    <div className="mt-4 text-lg text-slate-800">
                                        Brand Designer
                                    </div>
                                    <div className="flex gap-2 justify-between text-base text-slate-500">
                                        <div>Nomad</div>
                                        <div>Paris, France</div>
                                    </div>
                                    <div className="flex gap-2 mt-6 whitespace-nowrap">
                                        <div className="justify-center px-2.5 py-1.5 text-emerald-300 border border-emerald-300 border-solid rounded-[80px]">
                                            Business
                                        </div>
                                        <div className="justify-center px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
                                            Design
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a29a3205a57d1fc2a3a847f6ad135309bdd4c2c2cffa3851552be25c7ac6d78?apiKey=bf80438c4595450788b907771330b274&"
                                        className="self-center mt-6 aspect-[33.33] w-[198px]"
                                    />
                                    <div className="self-start mt-2 text-center text-slate-500">
                                        <span className="font-semibold text-slate-800">
                                            5 applied
                                        </span>{" "}
                                        <span className="text-slate-500">of 10 capacity</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow py-6 pr-0.5 pl-6 mx-auto w-full text-sm font-semibold leading-6 bg-white border border-solid border-zinc-200 max-md:pl-5 max-md:mt-10">
                                    <div className="flex gap-5 justify-between pr-4 text-emerald-300 whitespace-nowrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8c00f42450a32ba213225dc65262e348f3fe248d47a7c17ff963a7eff09435b?apiKey=bf80438c4595450788b907771330b274&"
                                            className="shrink-0 w-12 aspect-square"
                                        />
                                        <div className="justify-center self-start px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                                            Full-Time
                                        </div>
                                    </div>
                                    <div className="mt-4 text-lg text-slate-800">
                                        Interactive Developer
                                    </div>
                                    <div className="flex gap-2 justify-between text-base text-slate-500">
                                        <div>Terraform</div>
                                        <div>Berlin, Germany</div>
                                    </div>
                                    <div className="flex gap-2 mt-6 whitespace-nowrap">
                                        <div className="justify-center px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                            Marketing
                                        </div>
                                        <div className="justify-center px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
                                            Design
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f222244f5aac6ace1bb71e2d414b3d8448a9027abe1c1ded52d5ee933bcb688d?apiKey=bf80438c4595450788b907771330b274&"
                                        className="self-center mt-6 aspect-[33.33] w-[221px]"
                                    />
                                    <div className="mt-2 text-center text-slate-500">
                                        <span className="font-semibold text-slate-800">
                                            5 applied
                                        </span>{" "}
                                        <span className="text-slate-500">of 10 capacity</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-6 mx-auto w-full text-sm font-semibold leading-6 bg-white border border-solid border-zinc-200 max-md:pl-5 max-md:mt-10">
                                    <div className="flex gap-5 justify-between text-emerald-300 whitespace-nowrap">
                                        <img
                                            loading="lazy"
                                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/21d3495426f43d2090102557740d9d0f615f49b7c7a0d27e036d81a17644f7e4?apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3495426f43d2090102557740d9d0f615f49b7c7a0d27e036d81a17644f7e4?apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3495426f43d2090102557740d9d0f615f49b7c7a0d27e036d81a17644f7e4?apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3495426f43d2090102557740d9d0f615f49b7c7a0d27e036d81a17644f7e4?apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3495426f43d2090102557740d9d0f615f49b7c7a0d27e036d81a17644f7e4?apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3495426f43d2090102557740d9d0f615f49b7c7a0d27e036d81a17644f7e4?apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3495426f43d2090102557740d9d0f615f49b7c7a0d27e036d81a17644f7e4?apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3495426f43d2090102557740d9d0f615f49b7c7a0d27e036d81a17644f7e4?apiKey=bf80438c4595450788b907771330b274&"
                                            className="shrink-0 w-12 aspect-square"
                                        />
                                        <div className="justify-center self-start px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                                            Full-Time
                                        </div>
                                    </div>
                                    <div className="mt-4 text-lg text-slate-800">
                                        Product Designer
                                    </div>
                                    <div className="flex gap-2 justify-between text-base text-slate-500">
                                        <div>ClassPass</div>
                                        <div>Berlin, Germ..</div>
                                    </div>
                                    <div className="flex gap-2 mt-6 whitespace-nowrap">
                                        <div className="justify-center px-2.5 py-1.5 text-emerald-300 border border-emerald-300 border-solid rounded-[80px]">
                                            Business
                                        </div>
                                        <div className="justify-center px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
                                            Design
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a29a3205a57d1fc2a3a847f6ad135309bdd4c2c2cffa3851552be25c7ac6d78?apiKey=bf80438c4595450788b907771330b274&"
                                        className="self-center mt-6 aspect-[33.33] w-[198px]"
                                    />
                                    <div className="self-start mt-2 text-center text-slate-500">
                                        <span className="font-semibold text-slate-800">
                                            5 applied
                                        </span>{" "}
                                        <span className="text-slate-500">of 10 capacity</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard