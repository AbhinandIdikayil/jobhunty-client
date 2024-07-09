import { useDispatch, useSelector } from 'react-redux'
import {  NavLink, useNavigate } from 'react-router-dom'
import { AppDispatch, RootState } from '../../../redux/store'
import { resetState } from '../../../redux/reducers/user/userSlice';
import { logout } from '../../../redux/actions/userAction';

function Navbar() {
    const user = useSelector((state: RootState) => state.user)
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()

    async function handleLogout() {
        try {
            let data = await dispatch(logout(undefined))
            if (data) {
                dispatch(resetState())
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <nav className="flex justify-center items-center self-stretch px-16 w-full max-md:px-5 max-md:max-w-full border-b-2">
            <div className="flex gap-5 justify-between  w-full max-w-[1192px] max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-2  items-center">
                        <div className="flex overflow-hidden relative flex-col justify-center items-center w-8 aspect-square">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/40550eadec7bbc460f9ee4be4291e780f8963001faa5df2daa66f0614767c8b9?"
                                className="shrink-0 aspect-[1.35] w-[43px]"
                            />
                        </div>
                        <div className="flex-auto text-2xl font-bold tracking-tight leading-9 text-slate-800">
                            JobHuntly
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center pt-1 items-center text-base font-medium leading-6 text-slate-600">
                        <div className="">Find Jobs</div>
                        <div className="">Browse Companies</div>
                    </div>
                </div>
                <div className="flex gap-4 justify-between py-3.5 pl-6 text-base font-bold leading-6 text-center">
                    {
                        user?.user ? (
                            <button onClick={handleLogout} className="justify-center px-6 py-3 text-white bg-indigo-600 max-md:px-5">Logout</button>
                        ) : (
                            <>
                                <NavLink to='/login' className="my-auto text-indigo-600">Login</NavLink>
                                <NavLink to='/signup' className="justify-center px-6 py-3 text-white bg-indigo-600 max-md:px-5">
                                    Sign Up
                                </NavLink>
                            </>
                        )
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navbar