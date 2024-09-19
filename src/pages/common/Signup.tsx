import { Form, Formik, Field, FormikValues } from 'formik'
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { googleLoginAndSignup, signupUser, verifyOtp } from '../../redux/actions/userAction';
import { AppDispatch, RootState } from '../../redux/store';
import { GoogleLogin } from '@react-oauth/google'
import Navbar from '../user/BeforeOneApplicant/Navbar';
import Timer from '../../components/common/Timer';
import { otpInitialValues, otpValidationSchema, validationSchema } from '../../validation/common/signup-validation';
import { resetErr } from '../../redux/reducers/user/userSlice';
import LoginAndSignupSidePage from 'src/components/common/LoginAndSignupSidePage';


function Signup() {
    const user = useSelector((state: RootState) => state?.user)
    const dispath: AppDispatch = useDispatch();
    const navigate = useNavigate()
    const [isCompanySignup, setIsCompanySignup] = useState(false);
    const [otpPage, setOtpPage] = useState(false)
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isExpired, setIsExpired] = useState(false);
    const location = useLocation()

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    useEffect(() => {
        dispath(resetErr())
        if (user.role == 'company') {
            return navigate('/company')
        } else if (user.role == 'user') {
            return navigate('/home')
        }
    }, [])

    useEffect(() => {
        setIsCompanySignup(window.location.pathname.includes('/company/signup'))
    }, [user])


    const responseMessage = (response: Object) => {
        console.log(response);
        let data;
        if (location.pathname === '/company/signup') {
            data = {
                ...response,
                role: 'company',
                page: 'signup'
            }
        } else {
            data = {
                ...response,
                role: 'user',
                page: 'signup'
            }
        }
        handleGoogleAuth(data)
    };
    const errorMessage = () => {
        console.log('auth failed');
    };

    async function handleGoogleAuth(data: any) {
        try {
            let result = await dispath(googleLoginAndSignup(data)).unwrap()
            console.log(result)
            if (result) {
                navigate('/home')
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSubmit(values: FormikValues) {
        try {
            handleOpen()
            if (isExpired) {
                alert('OTP has expired. Please request a new one.');
                return;
            }
            setName(values?.name)
            setPassword(values?.password)
            setEmail(values?.email)

            const url = window.location.pathname.split('/')[1]
            const signupConfig = {
                'company': { role: 'company', navigateTo: '/company' },
                'signup': { role: 'user', navigateTo: '/login' },
            } as const
            type SignupType = keyof typeof signupConfig;
            const urLKey = Object.keys(signupConfig).find(key => url.includes(key)) as SignupType | undefined
            if (urLKey) {
                const { role } = signupConfig[urLKey]
                const form = {
                    ...values,
                    role
                }
                const data = await dispath(signupUser(form)).unwrap()
                console.log(form)
                if (data) {
                    setOtpPage(true)
                    handleClose();
                }
            }
        } catch (error) {
            handleClose();
            console.log(error)
        }

    }


    async function handleOtp(values: FormikValues) {
        resetErr()
        const url = window.location.pathname.split('/')[1]
        const signupConfig = {
            'company': { role: 'company', navigateTo: '/company' },
            'signup': { role: 'user', navigateTo: '/login' },
        } as const
        type SignupType = keyof typeof signupConfig;
        const urLKey = Object.keys(signupConfig).find(key => url.includes(key)) as SignupType | undefined

        if (urLKey) {
            handleOpen();
            const { role, navigateTo } = signupConfig[urLKey]
            try {
                console.log(name, password, values?.otp, role)
                const data = await dispath(verifyOtp({ email: email, name: name, password: password, otp: values?.otp, role })).unwrap();
                console.log(data)
                if (data) {
                    navigate(navigateTo)
                }
            } catch (error) {
                console.log(error)
            } finally {
                handleClose()
            }
        } else {
            console.log('unrecognized url')
        }
    }

    const handleExpire = () => {
        setIsExpired(true);
        alert('OTP has expired. Please request a new one.');
    };

    return (
        <div className="bg-white h-screen">
            <Navbar />
            <div className="flex  max-md:flex-col max-md:gap-0">
                <LoginAndSignupSidePage />
                <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col h-full justify-center px-16 w-full text-base bg-white max-md:px-5 max-md:max-w-full">
                        {
                            otpPage ? (
                                <div className="flex flex-col pt-5 sm:pt-0 pb-1 mx-8 bg-white max-md:mx-2.5">
                                    <Formik
                                        initialValues={otpInitialValues}
                                        validationSchema={otpValidationSchema}
                                        onSubmit={handleOtp}
                                    >
                                        {({ errors }) => (
                                            <Form className='flex flex-col'>
                                                <div className="mt-3 text-1xl sm:text-3xl font-semibold leading-10 text-center text-gray-800">
                                                    Get more opportunities{" "}
                                                </div>
                                                {/* //! TIMER FOR OTP  */}
                                                <Timer initialSeconds={120} onExpire={handleExpire} />
                                                <div className="mt-4 font-semibold leading-[160%] text-slate-600">
                                                    Enter otp
                                                    <span className='text-red-600'>
                                                        {
                                                            errors?.otp && errors?.otp ||
                                                            user?.err && user?.err
                                                        }
                                                    </span>
                                                </div>
                                                <Field
                                                    name='otp'
                                                    placeholder='Enter otp'
                                                    className='justify-center items-start px-3 py-2 mt-1 text-gray-500 bg-white border border-solid border-zinc-200 leading-[160%] max-md:pr-5'
                                                    type="text"
                                                />
                                                <button type='submit' className="justify-center items-center px-6 py-3 mt-6 font-bold text-center text-white whitespace-nowrap bg-indigo-600 leading-[160%] max-md:px-5">
                                                    verify
                                                </button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            ) : (
                                <div className="flex flex-col pt-5 sm:pt-0 pb-1 mx-8 bg-white max-md:mx-2.5">
                                    <div className="flex gap-0 justify-center self-center font-semibold text-indigo-600 leading-[160%]">
                                        {
                                            isCompanySignup ? (
                                                <>
                                                    <Link to={'/signup'} className="justify-center px-3 py-2 bg-white">
                                                        Job Seeker
                                                    </Link>
                                                    <Link to={'/company/signup'} className="justify-center px-3 py-2 whitespace-nowrap bg-violet-100 ">
                                                        Company
                                                    </Link>
                                                </>
                                            ) : (
                                                <>
                                                    <Link to={'/signup'} className="justify-center px-3 py-2 bg-violet-100">
                                                        Job Seeker
                                                    </Link>
                                                    <Link to={'/company/signup'} className="justify-center px-3 py-2 whitespace-nowrap bg-white">
                                                        Company
                                                    </Link>
                                                </>
                                            )
                                        }
                                    </div>
                                    <div className="mt-3 text-1xl sm:text-3xl font-semibold leading-10 text-center text-gray-800">
                                        Get more opportunities{" "}
                                    </div>
                                    <div className="flex justify-center items-center px-4 py-3 mt-6 font-bold text-center text-indigo-600  border-indigo-200  leading-[160%] max-md:px-5">
                                        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} width={'500'} />
                                    </div>
                                    <div className="flex gap-2 items-center py-1 mt-3 text-center text-gray-800 leading-[160%]">
                                        <div className="hidden shrink-0 self-stretch my-auto h-px border border-solid bg-zinc-200 border-zinc-200 w-[109px]" />
                                        <div className="flex-auto self-stretch">
                                            Or sign up with email
                                        </div>
                                        <div className="hidden shrink-0 self-stretch my-auto h-px border border-solid bg-zinc-200 border-zinc-200 w-[104px]" />
                                    </div>
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ errors, isSubmitting }) => (
                                            <Form className='flex flex-col'>
                                                <div className="mt-1 font-semibold leading-[160%] text-slate-600">
                                                    {
                                                        isCompanySignup ? 'Company name' : 'Full name'
                                                    }
                                                    <span className='text-red-600 capitalize'>
                                                        {errors?.name ||
                                                            (typeof user?.err === 'object' && 'message' in user.err && `(${(user.err as { message: string }).message})`) ||
                                                            (typeof user?.err === 'string' && `(${user.err})`)
                                                        }
                                                    </span>
                                                </div>
                                                <Field
                                                    name='name'
                                                    placeholder='Enter your full name'
                                                    type="text"
                                                    className='justify-center items-start px-3 py-2 mt-1 text-gray-500 bg-white border border-solid border-zinc-200 leading-[160%] max-md:pr-5'
                                                />
                                                <div className="mt-4 font-semibold leading-[160%] text-slate-600">
                                                    Email Address
                                                    <span className='text-red-600 capitalize'>
                                                        {
                                                            errors?.email && errors?.email
                                                        }
                                                    </span>
                                                </div>
                                                <Field
                                                    id='email'
                                                    name='email'
                                                    placeholder=' Enter email address'
                                                    className='justify-center items-start px-3 py-2 mt-1 text-gray-500 bg-white border border-solid border-zinc-200 leading-[160%] max-md:pr-5'
                                                    type="email"
                                                />
                                                <div className="mt-4 font-semibold leading-[160%] text-slate-600">
                                                    Password
                                                    <span className='text-red-600 capitalize'>
                                                        {
                                                            errors?.password && errors?.password
                                                        }
                                                    </span>
                                                </div>
                                                <Field
                                                    id='password'
                                                    name='password'
                                                    placeholder=' Enter password'
                                                    className='justify-center items-start px-3 py-2 mt-1 text-gray-500 bg-white border border-solid border-zinc-200 leading-[160%] max-md:pr-5'
                                                    type="text"
                                                />
                                                {
                                                    isSubmitting ? (
                                                        <button disabled={isSubmitting} className="justify-center items-center px-6 py-3 mt-6 font-bold text-center text-white whitespace-nowrap bg-indigo-600 leading-[160%] max-md:px-5">
                                                            Signup..
                                                        </button>
                                                    ) : (
                                                        <button type='submit' className="justify-center items-center px-6 py-3 mt-6 font-bold text-center text-white whitespace-nowrap bg-indigo-600 leading-[160%] max-md:px-5">
                                                            Signup
                                                        </button>
                                                    )
                                                }
                                                <div className="flex gap-2 mt-4">
                                                    <div className="text-gray-800 leading-[160%]">
                                                        Already have an account?
                                                    </div>
                                                    <Link to={'/login'} className="font-semibold text-center text-indigo-600 leading-[150%]">
                                                        Login
                                                    </Link>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <Backdrop open={open} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default Signup