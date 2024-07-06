import React, { useEffect, useState } from "react"
import { Login as LoginI } from "../../types/AllTypes"
import * as Yup from 'yup'
import { Formik, Field, FormikValues, Form } from 'formik'
import { Link, useNavigate } from "react-router-dom"
import { AppDispatch, RootState } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../redux/actions/userAction"
import Navbar from "../user/BeforeOneApplicant/Navbar"

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Invalid email'),
    password: Yup.string().required('Password is required').min(4, 'must be atleast 4 character'),

})

const Login: React.FC = () => {

    const user = useSelector((state: RootState) => state.user)
    const dispath: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const [isCompanyLogin, setIsCompanyLogin] = useState(false);

    useEffect(() => {
        setIsCompanyLogin(window.location.pathname.includes('/company/login'))
    }, [user])

    const initialValues: LoginI = {
        email: '',
        password: ''
    }

    async function handleSubmit(values: FormikValues) {
        const url = window.location.href.split('/')[3];
        if (url == 'login') {
            const formData: LoginI = {
                ...values
            }
            try {
                const data = await dispath(login(formData)).unwrap()
                if (data) {
                    navigate('/home')
                }
            } catch (error) {
                console.log(error)
            }
        }
        console.log(values)
    }

    return (
        <div className="bg-white h-screen">
            <Navbar />
            <div className="flex  max-md:flex-col max-md:gap-0">
                <div className="hidden md:flex flex-col w-[50%] ">
                    <div className="flex flex-col">
                        <div className="flex gap-5 justify-between items-start pl-16 bg-slate-50 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
                            <div className="flex flex-col mt-7">
                                <div className="flex gap-3 self-end text-2xl font-bold tracking-tight leading-9 text-gray-800 whitespace-nowrap">

                                </div>
                                <div className="flex flex-col px-8 py-6 mt-28 w-full bg-white max-md:px-5 max-md:mt-10">
                                    <div className="flex gap-2 items-start max-md:pr-5">
                                        <div className="shrink-0 mt-5 w-2 bg-indigo-600 h-[22px] rounded-[40px]" />
                                        <div className="shrink-0 mt-2.5 w-2 bg-indigo-600 h-[30px] rounded-[40px]" />
                                        <div className="shrink-0 mt-2.5 w-2 bg-indigo-600 h-[30px] rounded-[40px]" />
                                        <div className="shrink-0 self-stretch w-2 h-10 bg-indigo-600 rounded-[40px]" />
                                    </div>
                                    <div className="mt-7 text-xl font-bold tracking-normal leading-5 text-gray-800">
                                        100K+
                                    </div>
                                    <div className="mt-3.5 text-base leading-6 text-gray-800">
                                        People got hired
                                    </div>
                                </div>
                            </div>
                            <div className="shrink-0 w-px bg-zinc-300 h-[630px]" />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col h-full justify-center px-16 w-full text-base bg-white max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col pt-3 sm:pt-0 pb-1 mx-8 bg-white max-md:mx-2.5">
                            <div className="flex gap-0 justify-center self-center font-semibold text-indigo-600 leading-[160%]">
                                {
                                    isCompanyLogin ? (
                                        <>
                                            <Link to={'/login'} className="justify-center px-3 py-2 bg-white">
                                                Job Seeker
                                            </Link>
                                            <Link to={'/company/login'} className="justify-center px-3 py-2 whitespace-nowrap bg-violet-100 ">
                                                Company
                                            </Link>
                                        </>
                                    ) : (
                                        <>
                                            <Link to={'/login'} className="justify-center px-3 py-2 bg-violet-100">
                                                Job Seeker
                                            </Link>
                                            <Link to={'/company/login'} className="justify-center px-3 py-2 whitespace-nowrap bg-white">
                                                Company
                                            </Link>
                                        </>
                                    )
                                }

                            </div>
                            <div className="mt-3 text-1xl sm:text-3xl font-semibold leading-10 text-center text-gray-800">
                                Welcome back dude{" "}
                            </div>
                            <div className="flex justify-center items-center px-4 py-3 mt-6 font-bold text-center text-indigo-600 border border-indigo-200 border-solid leading-[160%] max-md:px-5">
                                <div className="flex gap-2.5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2019ff383b243dae561ad6a469db084ba563760d8f4bb4a2722edf42f5a32861?"
                                        className="shrink-0 my-auto w-5 aspect-square"
                                    />
                                    <div>Login with Google</div>
                                </div>
                            </div>
                            <div className="flex gap-2 items-center py-1 mt-3 text-center text-gray-800 leading-[160%]">
                                <div className="hidden shrink-0 self-stretch my-auto h-px border border-solid bg-zinc-200 border-zinc-200 w-[109px]" />
                                <div className="flex-auto self-stretch">
                                    Or login up with email
                                </div>
                                <div className="hidden shrink-0 self-stretch my-auto h-px border border-solid bg-zinc-200 border-zinc-200 w-[104px]" />
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting, errors }) => (
                                    <>
                                        <Form className="flex flex-col">

                                            <div className="mt-4 font-semibold leading-[160%] text-slate-600">
                                                Email Address
                                                <span className="text-red-600">
                                                    {
                                                        errors?.email && '(' + errors.email + ')' ||
                                                        user?.err && (user?.err as string).includes('user') && '(' + user?.err + ")"
                                                    }
                                                </span>
                                            </div>
                                            <Field
                                                placeholder=' Enter email address'
                                                className='justify-center items-start px-3 py-2 mt-1 text-gray-500 bg-white border border-solid border-zinc-200 leading-[160%] max-md:pr-5'
                                                type="text"
                                                name='email'
                                            />

                                            <div className="mt-4 font-semibold leading-[160%] text-slate-600">
                                                Password
                                                <span className="text-red-600">
                                                    {
                                                        errors?.password && '(' + errors.password + ')' ||
                                                        user?.err && (user?.err as string).includes('password') && '(' + user?.err + ")"
                                                    }
                                                </span>
                                            </div>
                                            <Field
                                                name='password'
                                                placeholder=' Enter password'
                                                className='justify-center items-start px-3 py-2 mt-1 text-gray-500 bg-white border border-solid border-zinc-200 leading-[160%] max-md:pr-5'
                                                type="text"
                                            />

                                            {
                                                isSubmitting ? (
                                                    <button className="justify-center items-center px-6 py-3 mt-6 font-bold text-center text-white whitespace-nowrap bg-indigo-600 leading-[160%] max-md:px-5">
                                                        Loging in
                                                    </button>
                                                ) : (
                                                    <button type="submit" disabled={isSubmitting} className="justify-center items-center px-6 py-3 mt-6 font-bold text-center text-white whitespace-nowrap bg-indigo-600 leading-[160%] max-md:px-5">
                                                        Login
                                                    </button>
                                                )
                                            }

                                            <div className="flex gap-2 mt-4">
                                                <div className="text-gray-800 leading-[160%]">
                                                    Dont have an account?
                                                </div>
                                                <Link to={'/signup'} className="font-semibold text-center text-indigo-600 leading-[150%]">
                                                    signup
                                                </Link>
                                            </div>

                                        </Form>
                                    </>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
