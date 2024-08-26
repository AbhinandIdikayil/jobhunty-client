import { TabsContent } from '@radix-ui/react-tabs'
import AddInterview from './AddInterview'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'
import InterviewList from './InterviewList'

function InterviewSchedule({ setLoading }: { setLoading: (prev: boolean) => void }) {
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
                        applicant?.schedule?.map((data, ind: number) => (
                            <InterviewList applcantId={applicant?.userId?._id ?? ''} email={applicant?.userId?.email || ''} setLoading={setLoading} date={data?.date} image={applicant?.userId?.coverImage} name={applicant?.userId?.name || ''}
                                ind={ind} testType={data?.testType || ''} time={data?.time} key={ind} room={data?.roomId} />
                        ))
                    }
                </div>
            </div>
        </TabsContent>
    )
}

export default InterviewSchedule


