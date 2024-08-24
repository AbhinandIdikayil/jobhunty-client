import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import EditInterview from './EditInterview'
import { formatDateToDaysAgo } from 'src/utils/formateDateToDaysAgo'
import { formatDateToThree } from 'src/utils/formateDate'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { memo } from 'react'
import { AXIOS_INSTANCE_NOTIFICATION } from 'src/constants/axiosInstance'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'
import axios from 'axios'
import { method } from 'lodash'

function InterviewList({ email, setLoading, date, image, name, testType, time, ind, room }:
    { email: string, setLoading: (prev: boolean) => void, date: any, image: any, name: string, testType: string, time: string, ind: number, room: string }) {
    const user = useSelector((state: RootState) => state?.user);
    const navigate = useNavigate()
    const handleNavigation = async () => {
        setLoading(true)
        try {
            if (room) {
                let req = {
                    company: user?.user?.name,
                    link: `/home/interview/${room}`,
                    roomId: room,
                    testType,
                    user: name,
                    email,
                }
                const data = await fetch(`http://localhost:6001/api/interview-link`, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: 'PUT',
                    body: JSON.stringify({data:req})
                })
                //  await AXIOS_INSTANCE_NOTIFICATION.post('/interview-link', { data: req })
                if (data) {
                    console.log(data)
                    toast.success(data?.message ?? 'Email has sented')
                    return navigate(`/company/interview/${room}`)
                }
            } else {
                toast.error('cant get room id')
                return
            }
        } catch (error) {
            console.log(error)
            toast.error('Error occured')
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex flex-col w-full max-md:max-w-full">
            <div className="text-sm text-slate-900 font-semibold">
                {
                    formatDateToDaysAgo(date)
                    + ' - ' +
                    formatDateToThree(date)
                }
            </div>
            <div className="flex flex-wrap gap-4 justify-between items-center p-4 mt-2 w-full bg-white border border-solid border-slate-500 max-md:max-w-full">
                <div className="flex gap-4 items-center self-stretch my-auto w-[204px]">
                    <img
                        loading="lazy"
                        srcSet={image}
                        className="object-contain shrink-0 self-stretch my-auto w-10 rounded-full"
                    />
                    <div className="flex flex-col self-stretch my-auto">
                        <div className="text-base font-semibold text-slate-800">
                            {name}
                        </div>
                        <div className="text-sm text-slate-500"> {testType || 'null'} </div>
                    </div>
                </div>
                <div className="flex flex-col self-stretch my-auto w-[139px]">
                    <div className="text-base font-medium text-slate-800">
                        {time}
                    </div>
                </div>
                <div className="flex gap-2.5 justify-center items-center self-stretch px-3 py-3 my-auto text-base font-bold text-center text-indigo-600 ">
                    <div className="self-stretch my-auto border border-indigo-200 border-solid py-2 px-1">
                        Add Feedback
                    </div>
                    <div onClick={handleNavigation} className="hover:cursor-pointer hover:shadow-lg self-stretch my-auto border border-indigo-200 border-solid py-2 px-1">
                        start
                    </div>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem className='border font-bold'>
                            <EditInterview ind={ind} key={ind} />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default memo(InterviewList)