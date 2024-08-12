import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet, useOutletContext } from "react-router-dom"
import { sendRequest } from "src/redux/actions/companyAction"
import { AppDispatch, RootState } from "src/redux/store"
import { prop } from "src/types/AllTypes"
import {toast } from 'react-toastify'
import { AxiosError } from "axios"

function Settings() {
    const { open } = useOutletContext<prop>()
    const dispatch: AppDispatch = useDispatch()
    const state = useSelector((state:RootState) => state.user)

    async function hanldeRequest() {
        try {
            if(!state?.user?.profileCompletionStatus){
                toast.error('please complete the profile');
                return
            }
            const data = await dispatch(sendRequest()).unwrap()
            console.log(data)
            toast.success('Request has been send',{
                position:"top-center"
            })
        } catch (error: any) {
            if(error?.message) {
                toast.warn('Request has been already sent',{
                    position:"top-center"
                })
            }
            console.log(error)
        }
    }

    return (
        <div className={`flex flex-col ml-2 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 max-md:w-full`}>
            <div className="flex flex-col px-3 pt-3 max-w-full font-semibold w-3/4 max-md:px-5">
                <div className="text-3xl leading-10 text-slate-800">Settings</div>
                <span>Complete the profile and send request
                    <button onClick={hanldeRequest} className="ml-2 bg-indigo-600 text-white font-bold  py-1 px-2 rounded-sm">send</button>
                </span>
                <div className="flex gap-5  mt-6 text-base leading-6 bg-white shadow-sm">
                    <NavLink to={''} end className="settings">Overview</NavLink>
                    {
                        state?.user?.name && state?.user?.email && state?.user?.description &&
                        state?.user?.industry && state?.user?.employees &&
                         state?.user?.locations && state?.user?.techStack ? (
                            <NavLink to={'social-links'} className="settings">Social Links</NavLink>
                        ) : (
                            <button onClick={() => toast.warn('complete overview part',{position:'top-center'})}>Social links</button>
                        )
                    }
                </div>
            </div>
            <hr />
            <Outlet />
        </div >
    )
}

export default Settings