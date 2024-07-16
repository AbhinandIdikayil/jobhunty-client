import { NavLink, Outlet, useOutletContext } from "react-router-dom"
import { prop } from "src/types/AllTypes"

function Settings() {
    const { open } = useOutletContext<prop>()

    return (
        <div className={`flex flex-col ml-2 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 max-md:w-full`}>
            <div className="flex flex-col px-3 pt-3 max-w-full font-semibold w-3/4 max-md:px-5">
                <div className="text-3xl leading-10 text-slate-800">Settings</div>
                <span>Complete the profile and send request
                    <button className="ml-2 bg-indigo-600 text-white font-bold  py-1 px-2 rounded-sm">send</button>
                </span>
                <div className="flex gap-5  mt-6 text-base leading-6 bg-white shadow-sm">
                    <NavLink to={''} end className="settings">Overview</NavLink>
                    <NavLink to={'social-links'} className="settings">Social Links</NavLink>
                </div>
            </div>
            <hr />
            <Outlet />
        </div >
    )
}

export default Settings