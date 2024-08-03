import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useOutletContext } from 'react-router-dom';
import { listAllCompanies } from 'src/redux/actions/commonAction';
import { AppDispatch, RootState } from 'src/redux/store';
import { prop } from 'src/types/AllTypes';
import CompanyCard from './CompanyCard';

function CompanyList() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const dispatch: AppDispatch = useDispatch()
    const state = useSelector((state: RootState) => state.admin)

    useEffect(() => {
        dispatch(listAllCompanies()).unwrap()
    }, [])

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
                                        <div className="mt-1 text-base leading-6">
                                            Showing 73 results
                                        </div>
                                    </div>
                                    <div className="flex gap-5 justify-center items-center my-auto">
                                        <div className="flex gap-3 self-stretch my-auto text-base leading-6">
                                            <div className="text-right text-slate-500">Sort by:</div>
                                            <div className="flex gap-2 font-medium text-slate-800">
                                                <div>Most relevant</div>
                                                <img
                                                    loading="lazy"
                                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e0ad8cf3b83b975764a3f6ff7c0a8ace747a9c9cb2b5fdad9baf757c992c964?"
                                                    className="shrink-0 my-auto w-4 aspect-square"
                                                />
                                            </div>
                                        </div>
                                        <div className="shrink-0 self-stretch my-auto w-px h-8 bg-gray-800 border border-gray-800 border-solid" />
                                        <div className="flex gap-4 self-stretch">
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/173c4a9f782b35eaeba837b298e7a2bacbc5d940995719d94651c13828e73d74?"
                                                className="shrink-0 w-10 aspect-square"
                                            />
                                            <img
                                                loading="lazy"
                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/78f3aa7eaa20179df9e47270a51233973379309c809f3c6a5d37c8050bd3aa48?"
                                                className="shrink-0 w-10 aspect-square"
                                            />
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyList