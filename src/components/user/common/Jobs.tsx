import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button'


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Checkbox } from '@/components/ui/checkbox';
import { prop } from 'src/types/AllTypes';
import { useOutletContext } from 'react-router-dom';
import UserJobCard from './JobCard'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import { applyJob, getAllJob } from 'src/redux/actions/jobAction';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from '@/components/ui/alert-dialog';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        // ... other styles
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        borderBottom: '1px solid #ced4da',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    '& .MuiNativeSelect-select': {
        paddingRight: '26px', // Ensure space for the dropdown arrow
    },
    '& .MuiNativeSelect-select option': {
        minWidth: '100%',
        width: 'auto',
        overflow: 'scroll',
        whiteSpace: 'nowrap',
    },
}));

function Jobs() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const jobState = useSelector((state: RootState) => state.job);
    const userState = useSelector((state: RootState) => state.user)
    const dispatch: AppDispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [pdf, setPdf] = useState([])
    const [jobid, setJobId] = useState()
    useEffect(() => {
        dispatch(getAllJob()).unwrap()
    }, [])

    function applyForJob(id: string) {
        if (userState?.user.resumes.length > 1) {
            setModalOpen(true)
            setJobId(id)
            setPdf(userState?.user.resumes)
            // handleResume(pdf)
        }
    }

    function handleResume(data: string) {
        let userid = userState?.user._id;
        dispatch(applyJob({ userid, jobid, resume:data })).unwrap()
        setModalOpen(false)
    }

    return (
        <>

            <div className={`flex flex-col items-center ml-2 ${open && open ? 'w-full' : 'w-full'}  ${open && open ? 'bg-none' : 'bg-slate-50'} px-3`}>
                <div className={`${open && open ? 'hidden' : ''} `}>
                    <div className={`hidden sm:flex gap-4 mt-10 text-5xl font-semibold text-center leading-[52.8px] max-md:flex-wrap max-md:text-4xl`}>
                        <div className="self-start text-slate-800 max-md:text-4xl">
                            Find your
                        </div>
                        <div className={`flex-col text-sky-400 max-md:text-4xl`}>
                            <div className="max-md:text-4xl">dream job</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c5387d8afcfab9fd00e94a5a0ff7e7093a6a80b56f15adaf6cecf8274992e61?"
                                className="self-center aspect-[16.67] w-[241px]"
                            />
                        </div>
                    </div>
                    <div className={`hidden sm:block mt-6 text-lg leading-7 text-center text-slate-600 max-md:max-w-full`}>
                        Find your next career at companies like HubSpot, Nike, and Dropbox
                    </div>
                </div>
                <div className="p-6 mt-5 flex justify-center items-center w-full bg-white max-w-[800px]  max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <FormControl sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="demo-customized-textbox">Search company name</InputLabel>
                            {/* <InputLabel htmlFor="">Age</InputLabel> */}
                            {/* <FormHelperText>Age</FormHelperText> */}
                            <BootstrapInput id="demo-customized-textbox" />
                        </FormControl>
                        <FormControl sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="demo-customized-select-native">location</InputLabel>

                            <NativeSelect

                                sx={{ minWidth: 200 }}
                                id="demo-customized-select-native"
                                // value={age}
                                // onChange={handleChange}
                                input={<BootstrapInput />}
                            >
                                <option aria-label="None" value="" />
                                <option value={10} className='font-bold border-solid px-2'>company name</option>
                                <option value={20}>company name</option>
                                <option value={30}>company companay company</option>
                            </NativeSelect>

                        </FormControl>
                        <Button sx={{
                            m: 1, marginTop: '30px', backgroundColor: 'rgb(79 70 229)', color: 'white', borderRadius: '0px', fontWeight: '600', '&:hover': {
                                backgroundColor: 'rgb(55 48 163)', // Darker shade for hover
                            }
                        }} variant="outlined">search my job</Button>
                    </div>
                </div>
            </div>
            {/* // </div> */}
            <div className="flex justify-center items-center self-stretch px-10 py-10 bg-white max-md:px-5">
                <div className="w-full max-w-[1193px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-base leading-6 text-slate-600 max-md:mt-10">
                                <Accordion type="multiple" className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className='text-sm text-black'>Types Of Employment</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-xs text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Internship
                                                </label>
                                            </div>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-xs text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Contract
                                                </label>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem className='text-sm text-black' value="item-2">
                                        <AccordionTrigger>Categories</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Technology
                                                </label>
                                            </div>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Engineering
                                                </label>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem className='text-sm text-black' value="item-3">
                                        <AccordionTrigger>Job Level</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Directore
                                                </label>
                                            </div>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    VP or above
                                                </label>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem className='text-sm text-black' value="item-4">
                                        <AccordionTrigger>Salary Range</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    1000 - 10000
                                                </label>
                                            </div>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    10000 - 100000
                                                </label>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col justify-center max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                    <div className="flex flex-col">
                                        <div className="text-3xl font-semibold leading-10 text-slate-800">
                                            All Jobs
                                        </div>
                                        <div className="mt-1 text-base leading-6 text-slate-500">
                                            Showing 73 results
                                        </div>
                                    </div>
                                    <div className="flex gap-5 justify-between my-auto">
                                        <div className="flex gap-3 my-auto text-base leading-6">
                                            <div className="text-right text-slate-500">Sort by:</div>
                                            <div className="flex gap-2 font-medium text-slate-800">
                                                <div>Most relevant</div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ad21e06b94d4e303cf315b72150c5e281dbf263065443ae1f8f824686fc2c21?"
                                                    className="shrink-0 my-auto w-4 aspect-square"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/83dc5820df5ac7a0fdb6df552b5d8ccad8fb0e7e0ba27f0adecfc62b9f30140c?"
                                                className="shrink-0 w-10 aspect-square"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af99e711d991f721e551cf0f66b57afaa46ed70f4aab789d5c1cae314f16f791?"
                                                className="shrink-0 w-10 aspect-square"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {
                                    jobState.jobs.map((data, ind) => (
                                        <UserJobCard key={ind} data={data} apply={applyForJob} />
                                    ))
                                }
                                <AlertDialog open={modalOpen}>

                                    <AlertDialogTrigger asChild>
                                    </AlertDialogTrigger >
                                    <AlertDialogContent className='max-w-fit'>
                                        <AlertDialogHeader>
                                            <div className='flex w-72 overflow-x-scroll'>
                                                {
                                                    pdf.map(data => (
                                                        <div>
                                                            <iframe width="320" className='hover:cursor-grab w-fit' height="360"
                                                                // URL.createObjectURL(file)
                                                                src={data}
                                                            >
                                                            </iframe>
                                                            <button className='p-2 bg-green-400' onClick={() => handleResume(data)}>
                                                                asdfsd
                                                            </button>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <span>select resume</span>
                                            <AlertDialogCancel onClick={() => setModalOpen(false)} className="">Cancel</AlertDialogCancel>
                                            <Button type="submit" className='ml-2 bg-indigo-700'>Submit</Button>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog >

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobs