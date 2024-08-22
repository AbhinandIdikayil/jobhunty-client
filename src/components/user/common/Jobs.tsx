import { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button'
import {
    Accordion,
} from "@/components/ui/accordion"
import { prop } from 'src/types/AllTypes';
import { useOutletContext } from 'react-router-dom';
import UserJobCard from './JobCard'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import { applyJob, getAllJob } from 'src/redux/actions/jobAction';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { toast } from 'react-toastify';
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { Backdrop, CircularProgress } from '@mui/material';
import { BootstrapInput } from 'src/components/common/BootsrapInput';
import CategoryAccordian from 'src/components/common/CategoryAccordian';
import SectoresAccordian from 'src/components/common/SectoresAccordian';
import SalaryAccordian from 'src/components/common/SalaryAccordian';
import Loading from 'src/components/common/Loading';


function Jobs() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const jobState = useSelector((state: RootState) => state.job);
    const userState = useSelector((state: RootState) => state.user)
    const dispatch: AppDispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [pdf, setPdf] = useState([])
    const [jobid, setJobId] = useState()
    const [companyId, setCompanyId] = useState()
    const [loading, setLoading] = useState(false)
    const [minSalary, setMinSalary] = useState<number>()
    const [maxSalary, setMaxSalary] = useState<number>()
    const [search, setSearch] = useState<string>('')
    const [startNameSearch, setStartNameSearch] = useState<boolean>(false)
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });


    interface FilterAndSearch {
        name: string;
        location: string;
        category: any[];
        employment: any[] | [];
        price: number[] | [];
    }
    const [filterAndSearch, setFilterAndSearch] = useState<FilterAndSearch>({
        name: '',
        location:'',
        category: [],
        employment: [],
        price: [],
    })
    const page = Math.ceil((jobState?.jobs?.totalCount?.[0]?.count || 5) / pagination.pageSize)

    const fetchData = async (page: number, pageSize: number, name?: string, employment?: string[], category?: string[], price?: number[], location: string) => {
        try {
            setLoading(true)
            let data = await dispatch(getAllJob({
                page,
                pageSize,
                name,
                employment,
                category,
                price,
                location,
            })).unwrap()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(
            pagination.pageIndex + 1,
            pagination.pageSize,
            filterAndSearch?.name,
            filterAndSearch?.employment,
            filterAndSearch?.category,
            mergeRanges(filterAndSearch?.price),
            filterAndSearch?.location
        )
    }, [pagination.pageIndex, pagination.pageSize,
    filterAndSearch?.employment, filterAndSearch?.category,
    filterAndSearch?.price, startNameSearch
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

    function handleSearch() {
        // if (filterAndSearch?.name?.trim().length <= 1) {
        //     return toast.error('At least 2 character', {
        //         position: 'top-center'
        //     })
        // }
        setStartNameSearch(!startNameSearch)
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
            console.log(updatedPrice, mergedRanges)
            return {
                ...prevState,
                price: updatedPrice
            };
        })
    }

    const mergeRanges = (ranges: any) => {
        if (ranges.length === 0) return [];
        const sortedRanges = ranges.sort((a, b) => a[0] - b[0]);
        console.log(sortedRanges)
        const merged = [sortedRanges[0][0], sortedRanges[sortedRanges?.length - 1][1]];
        return merged
    };

    return (
        <>
            <div className={`flex flex-col items-center  ${open && open ? 'w-full' : 'w-full'}  ${open && open ? 'bg-none' : 'bg-slate-50'} px-3`}>
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
                <hr className={`${open ? 'w-full bg-black border-solid border-black' : 'hidden'}`} />
                <div className="p-6 flex justify-center items-center w-full bg-white max-w-[800px]  max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <FormControl sx={{ m: 1 }} variant="standard">
                            <InputLabel
                                htmlFor="demo-customized-textbox"
                            >
                                Search company name
                            </InputLabel>
                            <BootstrapInput onChange={(e) => setFilterAndSearch({ ...filterAndSearch, name: e.target.value })} id="demo-customized-textbox" />
                        </FormControl>
                        <FormControl sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="demo-customized-select-native">location</InputLabel>
                            <BootstrapInput
                                onChange={(e) => setFilterAndSearch({ ...filterAndSearch, location: e.target.value })}
                                id="demo-customized-textbox" />

                        </FormControl>
                        <Button
                            onClick={handleSearch}
                            sx={{
                                m: 1, marginTop: '30px', backgroundColor: 'rgb(79 70 229)', color: 'white', borderRadius: '0px', fontWeight: '600', '&:hover': {
                                    backgroundColor: 'rgb(55 48 163)', // Darker shade for hover
                                }
                            }} variant="outlined">
                            search my job
                        </Button>
                    </div>
                </div>
                <hr className={`${open ? 'w-full bg-black border-solid border-black' : 'hidden'}`} />

            </div>
            <div className="flex justify-center items-center self-stretch px-10 py-10 bg-white max-md:px-5">
                <div className="w-full max-w-[1193px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-base leading-6 text-slate-900 max-md:mt-10">
                                <Accordion type="multiple" className="w-full">
                                    <CategoryAccordian handleEmployment={handleEmployment} />
                                    <SectoresAccordian handleCategory={handleCategory} />
                                    <SalaryAccordian handleSalary={handleSalary} setMaxSalary={setMaxSalary} setMinSalary={setMinSalary} />
                                </Accordion>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col justify-center max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                    <div className="flex flex-col">
                                        <div className="text-3xl font-semibold leading-10 text-slate-900">
                                            All Jobs
                                        </div>
                                        <div className="font-semibold leading-10 border border-solid rounded-lg px-2 w-fit shadow-sm">
                                            Showing {jobState?.jobs?.totalCount?.[0]?.count} results
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
                <Loading loading={loading} key={'loading'} />

            </div>
        </>
    )
}

export default Jobs