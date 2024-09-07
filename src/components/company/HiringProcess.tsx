import { TabsContent } from '@radix-ui/react-tabs'
import { useDispatch, useSelector } from 'react-redux'
import { updateHiringStatus } from 'src/redux/actions/jobAction'
import { AppDispatch, RootState } from 'src/redux/store'
import { formatDateToThree } from 'src/utils/formateDate'


function HiringProcess({ applicantId, setLoading, setOpen }: { applicantId: string | null, setLoading: (prev: boolean) => void, setOpen: (prev: boolean) => void }) {
    const jobState = useSelector((state: RootState) => state?.job)
    const dispatch: AppDispatch = useDispatch()

    async function handleHiringStatus(id: string | null) {
        setLoading(true)
        if (id) {
            try {
                const value = {
                    applicationId: id,
                    status: null
                }
                if (jobState?.applicant?.hiring_status === 'interview') {
                    setOpen(true)
                    return
                }
                const data = await dispatch(updateHiringStatus(value)).unwrap()
                return data
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    }

    const status = ['in-review', 'shortlisted', 'interview', 'hired/declined']

    return (
        <>

            <TabsContent value='hiring'>
                <div className="flex flex-col max-w-2xl px-2 ">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="object-contain mt-5 w-full aspect-[13.51] flex gap-2 max-md:max-w-full capitalize">
                            {
                                status?.map((data: string, ind: number) => (
                                    <div key={data + '' + ind} className={`w-1/4 flex items-center
                                ${jobState?.applicant?.hiring_status == data ? 'bg-indigo-700 text-white' : 'text-blue-700  bg-gray-300 '} 
                                justify-center font-semibold rounded-sm`}>
                                        {data}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex flex-col mt-5 max-w-full w-[538px]">
                            <div className="text-base font-semibold leading-relaxed text-slate-800">
                                Stage Info
                            </div>
                            <div className="flex flex-wrap gap-10 justify-between items-start mt-2 w-full">
                                <div className="flex flex-col items-start text-base min-w-[240px] w-[267px]">
                                    <div className="flex flex-col leading-relaxed">
                                        <div className="text-slate-500">Interview Date</div>
                                        {
                                            jobState?.applicant?.schedule?.map((data) => (
                                                <div className="font-medium text-slate-800">
                                                    {formatDateToThree(data?.date)}
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <button onClick={() => handleHiringStatus(applicantId || null)} className="hover:cursor-pointer gap-2.5 self-stretch px-6 py-3 mt-6 font-bold leading-relaxed text-center text-white border border-indigo-200 border-solid bg-indigo-700 hover:bg-indigo-400 max-md:px-5">
                                        Move To Next Step
                                    </button>
                                </div>
                                <div className="flex flex-col items-start leading-relaxed w-[218px]">
                                    <div className="flex flex-col">
                                        <div className="text-base text-slate-500">Interview Status</div>
                                        {
                                            jobState?.applicant?.schedule?.map((data, index) => {
                                                const scheduleDate = new Date(data.date); // Convert schedule date to a Date object
                                                const today = new Date(); // Get today's date

                                                const status = scheduleDate > today ? "pending" : "done";

                                                return (
                                                    <div key={index} className="gap-2 self-start px-2.5 py-1.5 text-sm font-semibold text-amber-400 bg-orange-400 bg-opacity-10 rounded-[80px]">
                                                        <div>Status: {status}</div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-4 w-full bg-zinc-200 min-h-[1px] max-md:max-w-full" />
                </div>
            </TabsContent>
        </>
    )
}

export default HiringProcess