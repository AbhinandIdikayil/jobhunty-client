import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { listAllCompanies } from 'src/redux/actions/commonAction';
import { AppDispatch, RootState } from 'src/redux/store';
import { prop } from 'src/types/AllTypes';
import CompanyCard from './CompanyCard';
import Loading from 'src/components/common/Loading';
import { Button } from '@/components/ui/button';
import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';


interface FilterAndSearch {
    name: string;
    category: any[];
}

function CompanyList() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const dispatch: AppDispatch = useDispatch()
    const state = useSelector((state: RootState) => state.admin)
    const [loading,setLoading] = useState<boolean>(false)
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 5,
    });
    const [filterAndSearch, setFilterAndSearch] = useState<FilterAndSearch>({
        name: '',
        category: [],
    })

    const fetchData = async (page: number, pageSize: number, name?: string,  category?: string[]) => {
        try {
            setLoading(true)
            await dispatch(listAllCompanies({
                page,
                pageSize,
                name,
                category,
            })).unwrap()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(
            pagination?.pageIndex+1,
            pagination?.pageSize,
            '',
            filterAndSearch?.category
        )
    }, [pagination?.pageIndex,pagination?.pageSize,filterAndSearch?.category])

    return (
        <div className={`flex flex-col items-center ml-2 ${open && open ? 'w-5/6' : 'w-full'}  ${open && open ? 'bg-none' : 'bg-white'} px-3`}>
            <div className="flex justify-center items-center px-1 py-10 sm:py-20 bg-white max-md:px-5">
                <div className="w-full max-w-[1192px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col text-base leading-6 text-slate-600 ">
                                <Accordion type="multiple" className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger className='font-bold text-slate-800'>Industry</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm sm:w-[155px] font-medium text-ellipsis leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 overflow-hidden whitespace-nowrap"
                                                >
                                                    Consumer Tech Education
                                                </label>
                                            </div>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Education
                                                </label>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger className='font-bold text-slate-800'>Company size</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    1-50 (25)
                                                </label>
                                            </div>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    1-50 (25)
                                                </label>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                                <div className="flex gap-5 justify-between px-px w-full max-md:flex-wrap max-md:max-w-full">
                                    <div className="flex flex-col text-slate-800">
                                        <div className="text-3xl font-semibold leading-10">
                                            All Companies
                                        </div>
                                    </div>
                                </div>
                                <div className='company grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-2'>
                                    {
                                        state.companies.map((data, index) => (
                                            <CompanyCard key={index} data={data} />
                                        ))
                                    }
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>
                <Loading loading={loading} key={'company-loading'} />
            </div>
        </div>
    )
}

export default CompanyList