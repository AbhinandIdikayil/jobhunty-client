import { TabsContent } from '@radix-ui/react-tabs'
import AddInterview from './AddInterview'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'
import { formatDateToDaysAgo } from 'src/utils/formateDateToDaysAgo'
import { formatDateToThree } from 'src/utils/formateDate'
import { Ellipsis, Pencil } from 'lucide-react'

function InterviewSchedule() {
    const [open, setOpen] = useState<boolean>(false)
    const applicant = useSelector((state: RootState) => state?.job?.applicant);
    return (
        <TabsContent value='interview'>
            <div className="flex flex-col leading-relaxed max-w-[688px] h-full px-1 ">
                <div className="flex flex-wrap gap-10 justify-between items-center w-full text-base max-md:max-w-full border-2 mt-4 px-2">
                    <div className="self-stretch my-auto font-semibold text-slate-800">
                        Interview List
                    </div>
                    <AddInterview open={open} setOpen={setOpen} />
                </div>
                <div className="chat flex flex-col mt-4 w-full h-[700px] overflow-y-auto shadow-md">
                    {
                        applicant?.schedule?.map((data) => (
                            <div className="flex flex-col w-full max-md:max-w-full">
                                <div className="text-sm text-slate-900 font-semibold">
                                    {
                                        formatDateToDaysAgo(data?.date)
                                        +  ' - ' +
                                        formatDateToThree(data?.date)
                                    }
                                    </div>
                                <div className="flex flex-wrap gap-4 justify-between items-center p-4 mt-2 w-full bg-white border border-solid border-slate-500 max-md:max-w-full">
                                    <div className="flex gap-4 items-center self-stretch my-auto w-[204px]">
                                        <img
                                            loading="lazy"
                                            srcSet={applicant?.userId?.coverImage}
                                            className="object-contain shrink-0 self-stretch my-auto w-10 rounded-full"
                                        />
                                        <div className="flex flex-col self-stretch my-auto">
                                            <div className="text-base font-semibold text-slate-800">
                                                {applicant?.userId?.name}
                                            </div>
                                            <div className="text-sm text-slate-500"> {data?.testType || 'hai'} </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col self-stretch my-auto w-[159px]">
                                        <div className="text-base font-medium text-slate-800">
                                           {data?.time }
                                        </div>
                                    </div>
                                    <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-3 my-auto text-base font-bold text-center text-indigo-600 border border-indigo-200 border-solid">
                                        <Pencil />
                                        <div className="self-stretch my-auto">Add Feedback</div>
                                    </div>
                                    <Ellipsis />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </TabsContent>
    )
}

export default InterviewSchedule


