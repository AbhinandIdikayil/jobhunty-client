import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
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
import { toast } from 'react-toastify';
import { CircleChevronRight } from 'lucide-react';
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { Backdrop, CircularProgress } from '@mui/material';
import { formatSalary } from 'src/utils/formatSalary';
import { BootstrapInput } from 'src/components/common/BootsrapInput';


function Jobs() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const jobState = useSelector((state: RootState) => state.job);
    const userState = useSelector((state: RootState) => state.user)
    const categoryState = useSelector((state: RootState) => state?.category)
    const dispatch: AppDispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [pdf, setPdf] = useState([])
    const [jobid, setJobId] = useState()
    const [companyId, setCompanyId] = useState()
    const [loading, setLoading] = useState(false)
    const [minSalary, setMinSalary] = useState<number>()
    const [maxSalary, setMaxSalary] = useState<number>()
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });


    interface FilterAndSearch {
        name: string;
        category: any[];
        employment: any[] | [];
        price: number[] | [];
    }
    const [filterAndSearch, setFilterAndSearch] = useState<FilterAndSearch>({
        name: '',
        category: [],
        employment: [],
        price: [],
    })
    const page = Math.ceil((jobState?.jobs?.totalCount?.[0]?.count || 5) / pagination.pageSize)
    let salary = [[100000, 300000], [300000, 600000],
    [600000, 1200000], [1200000, 2350000]]



    const fetchData = async (page: number, pageSize: number, name?: string, employment?: string[], category?: string[], price?: number[]) => {
        try {
            setLoading(true)
            let data = await dispatch(getAllJob({
                page,
                pageSize,
                name,
                employment,
                category,
                price,
            })).unwrap()
            if (data) {
                setLoading(false)
            }
        } catch (error) {
            setLoading(false)

            console.log(error)
        }
    }

    useEffect(() => {
        setLoading(true)
        fetchData(
            pagination.pageIndex + 1,
            pagination.pageSize,
            '',
            filterAndSearch?.employment,
            filterAndSearch?.category,
            mergeRanges(filterAndSearch?.price),
        )
    }, [pagination.pageIndex, pagination.pageSize,
    filterAndSearch?.employment, filterAndSearch?.category,
    filterAndSearch?.price
    ])

    function applyForJob(data: any) {
        if (userState?.user.resumes.length > 0) {
            setModalOpen(true)
            setJobId(data.jobId)
            setCompanyId(data.companyId)
            setPdf(userState?.user.resumes)
        } else {
            toast.error('pleae provide a resume')
        }
    }

    async function handleResume(data: string) {
        let userid = userState?.user._id;
        try {
            console.log({ userid, jobid, resume: data, companyId })
            await dispatch(applyJob({ userid, jobid, resume: data, companyId })).unwrap()
            setModalOpen(false)
            toast.success('applied succesfully', { position: "top-center" })
        } catch (error) {
            console.log(error)
            toast.error(jobState?.err?.message, { position: "top-center" })
        }
    }

    function handleCategory(e: any, _id: string) {
        const target = e.currentTarget; // or e.target if it's directly on the button
        const ariaChecked = target.getAttribute('aria-checked');
        console.log('aria-checked value:', ariaChecked); // Should match what is in the DOM

        // Optional: Toggle aria-checked value if needed
        const newAriaChecked = ariaChecked === 'true' ? 'false' : 'true';
        target.setAttribute('aria-checked', newAriaChecked);
        console.log('asdf', newAriaChecked)
        setFilterAndSearch(prevState => {
            let updatedCategory;

            if (newAriaChecked === 'true') {
                console.log('-i')
                // Add category if checked
                updatedCategory = [...prevState.category, _id];
            } else {
                console.log('i-')

                // Remove category if unchecked
                updatedCategory = prevState.category.filter(id => id !== _id);
            }

            console.log(updatedCategory)
            return {
                ...prevState,
                category: updatedCategory
            };
        })
    }

    function handleEmployment(e: any, _id: string) {
        const target = e.currentTarget; // or e.target if it's directly on the button
        const ariaChecked = target.getAttribute('aria-checked');
        console.log('aria-checked value:', ariaChecked); // Should match what is in the DOM

        // Optional: Toggle aria-checked value if needed
        const newAriaChecked = ariaChecked === 'true' ? 'false' : 'true';
        target.setAttribute('aria-checked', newAriaChecked);
        console.log('asdf', newAriaChecked)
        setFilterAndSearch(prevState => {
            let updatedEmployment;

            if (newAriaChecked === 'true') {
                // Add employment if checked
                updatedEmployment = [...prevState.employment, _id];
            } else {
                // Remove .employment if unchecked
                updatedEmployment = prevState.employment.filter(id => id !== _id);
            }

            console.log(updatedEmployment)
            return {
                ...prevState,
                employment: updatedEmployment
            };
        })
    }

    function handleSalary(e: any, data: any[]) {
        const target = e.currentTarget; // or e.target if it's directly on the button
        const ariaChecked = target.getAttribute('aria-checked');
        const newAriaChecked = ariaChecked === 'true' ? 'false' : 'true';
        target.setAttribute('aria-checked', newAriaChecked);
        setFilterAndSearch(prevState => {
            let updatedPrice;

            if (newAriaChecked === 'true') {
                // Add category if checked
                updatedPrice = [...prevState.price, data];
            } else {
                // Remove category if unchecked
                updatedPrice = prevState.price.filter(
                    (r) => r[1] != data[1] || r[0] != data[0]
                );
            }

            const mergedRanges = mergeRanges(updatedPrice);
            console.log(updatedPrice,mergedRanges)
            return {
                ...prevState,
                price: updatedPrice
            };
        })
    }

    const mergeRanges = (ranges:any) => {
        if (ranges.length === 0) return [];
        const sortedRanges = ranges.sort((a, b) => a[0] - b[0]);
        console.log(sortedRanges)
        const merged = [sortedRanges[0][0],sortedRanges[sortedRanges?.length-1][1]];
        return merged
    };

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
                            <BootstrapInput onChange={(e) => setFilterAndSearch({ ...filterAndSearch, name: e.target.value })} id="demo-customized-textbox" />
                        </FormControl>
                        <FormControl sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="demo-customized-select-native">location</InputLabel>

                            <NativeSelect
                                onChange={() => console.log(filterAndSearch)}
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
                                            {
                                                categoryState.category?.map(data => (
                                                    <div onClick={(e) => handleEmployment(e, data?._id)} className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                        <Checkbox id="terms2" />
                                                        <label
                                                            htmlFor="terms2"
                                                            className="text-xs text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {data?.name}
                                                        </label>
                                                    </div>
                                                ))
                                            }
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem className='text-sm text-black' value="item-2">
                                        <AccordionTrigger>Categories</AccordionTrigger>
                                        <AccordionContent>
                                            {
                                                categoryState?.sectors?.map(data => (
                                                    <div onClick={(e) => handleCategory(e, data?._id)}
                                                        className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                        <Checkbox id="terms2" />
                                                        <label
                                                            htmlFor="terms2"
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {data?.name}
                                                        </label>
                                                    </div>
                                                ))
                                            }
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem className='text-sm text-black' value="item-4">
                                        <AccordionTrigger>Salary Range</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex gap-2 items-center justify-start mb-1'>
                                                <input type="number" onChange={(e) => setMinSalary(parseInt(e.target.value))} className='border border-solid h-8 w-1/3 px-2' min={0} max={10000000} />
                                                <input type="number" onChange={(e) => setMaxSalary(parseInt(e.target.value))} className='border border-solid h-8 w-1/3 px-2' min={0} max={10000000} />
                                                {/* <CircleChevronRight onClick={handleSubmit} className='text-gray-500' /> */}
                                            </div>
                                            {

                                                salary?.map(data => (
                                                    <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                        <Checkbox id="terms2" onClick={(e) => handleSalary(e, data)} />
                                                        <label
                                                            htmlFor="terms2"
                                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {formatSalary(data[0], data[1])}
                                                        </label>
                                                    </div>
                                                ))
                                            }

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
                                    jobState?.jobs?.jobs?.map((data: any, ind) => (
                                        <UserJobCard key={ind} data={data} apply={applyForJob} />
                                    ))
                                }
                                <div className='flex items-center justify-center gap-2 font-bold'>
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            if (pagination.pageIndex < page) {
                                                if (pagination.pageIndex + 1 > 1) {
                                                    setPagination({ ...pagination, pageIndex: pagination.pageIndex - 1 })
                                                }
                                            }
                                        }}
                                        className="h-8 w-8 p-0"
                                    >
                                        <span className="sr-only">Go to first page</span>
                                        <DoubleArrowLeftIcon className="h-4 w-4" />
                                    </Button>
                                    {
                                        <span className='font-thin'>
                                            page {pagination?.pageIndex + 1} of {page}
                                        </span>
                                    }
                                    <Button
                                        variant="contained"
                                        className={`h-8 w-8 p-0`}
                                        onClick={() => {
                                            if (pagination.pageIndex < page) {
                                                if (pagination.pageIndex + 1 < page) {
                                                    setPagination({ ...pagination, pageIndex: pagination.pageIndex + 1 })
                                                }
                                            }
                                        }}
                                    >
                                        <span className="sr-only">Go to first page</span>
                                        <DoubleArrowRightIcon className="h-4 w-4" />
                                    </Button>
                                </div>
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
                                                            <button className='p-2 bg-indigo-600 rounded-sm hover:bg-indigo-400' onClick={() => handleResume(data)}>
                                                                select
                                                            </button>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <span>select resume</span>
                                            <AlertDialogCancel onClick={() => setModalOpen(false)} className="">Cancel</AlertDialogCancel>
                                            {/* <Button type="submit" className='ml-2 bg-indigo-700'>Submit</Button> */}
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog >

                            </div>
                        </div>
                    </div>
                </div>
                {
                    loading && (
                        <Backdrop
                            open={loading}
                            sx={{ color: 'white', backgroundColor: 'rgba( 9,9,9,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    )
                }
            </div>
        </>
    )
}

export default Jobs