import { useSelector } from "react-redux"
import { RootState } from "src/redux/store"

function JobCard() {
    const jobState = useSelector((state: RootState) => state?.job)
    const userState = useSelector((state:RootState) => state?.user)
    return (
        <div className="flex gap-5 max-md:flex-col  w-full">
            {
                jobState.jobs.jobs?.map((data: any, ind: number) => {
                    console.log(data)
                    return ind <= 3 && (
                        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow p-6 mx-auto w-full text-sm font-semibold leading-6 bg-white border border-solid border-zinc-200 max-md:pl-5 max-md:mt-10">
                                <div className="flex gap-5 justify-between text-emerald-300 whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src={userState?.user?.images}
                                        className="shrink-0 w-12 aspect-square"
                                    />
                                    <div className="justify-center self-start px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                                        {data?.job?.employmentDetails?.name }
                                    </div>
                                </div>
                                <div className="mt-4 text-lg text-slate-800">
                                    {data?.job?.jobTitle || 'hai'}
                                </div>
                                <div className="flex gap-2 justify-between text-base text-slate-500">
                                    <div>{data?.job?.location[0]}</div>
                                </div>
                                <div className="flex gap-2 mt-6 whitespace-nowrap">
                                    <div className="justify-center px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                        {data?.job?.categoryDetails?.name }
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default JobCard