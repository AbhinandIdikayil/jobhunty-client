import { CircleUserRound } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateHiringStatus } from 'src/redux/actions/jobAction'
import { AppDispatch, RootState } from 'src/redux/store'

function HireOrDeclineModal({ open, setOpen }: { open: boolean, setOpen: (prev: boolean) => void }) {
    const application = useSelector((state: RootState) => state?.job)

    const dispatch: AppDispatch = useDispatch()
    async function hireOrReject(status: boolean) {
        const applicationId = application?.applicant?._id;
        if (!applicationId) {
            console.error("Application ID is required but was not found.");
            return;
        }
        const value = {
            applicationId,
            status,
        };
        try {
            await dispatch(updateHiringStatus(value)).unwrap()
            toast.success("Interviwe status updated",{position:'top-center'})
        } catch (error) {
            console.log(error)
        } finally {
            setOpen(false)
        }
    }

    return (
        open ? (
            <div className='absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[300px] bg-blue-500 z-50 rounded-3xl flex flex-col justify-around shadow-2xl shadow-black transition-all duration-500 ease-out scale-90 animate-call-popup' >
                <div className="text-white font-bold text-lg text-center w-full">
                    <div className="flex justify-center items-center">
                        Change status...
                    </div>
                </div>
                <div className="flex justify-center">
                    <CircleUserRound className="text-white" size={60} />
                </div>
                <div className="flex justify-center">
                    <div className=" w-[180px] flex justify-between">
                        <button type='button' onClick={() => hireOrReject(false)} className="bg-red-500 rounded-full px-2 py-2 font-bold text-white capitalize">
                            Decline
                        </button>
                        <button onClick={() => hireOrReject(true)} className="bg-green-500 rounded-full py-2 text-white font-bold px-4 capitalize">
                            Hire
                        </button>
                    </div>
                </div>
            </div>
        ) : (
            ''
        )

    )
}

export default HireOrDeclineModal