import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useOutletContext } from 'react-router-dom';
import { listAllCompanies } from 'src/redux/actions/commonAction';
import { AppDispatch } from 'src/redux/store';
import { prop } from 'src/types/AllTypes';

function CompanyList() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const dispatch:AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(listAllCompanies()).unwrap()
    },[])

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
                                            All Jobs
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
                                <div className="mt-8 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col">
                                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow p-6 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                                                <div className="flex gap-5 justify-between text-base text-indigo-600">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="http://res.cloudinary.com/dghv07eag/image/upload/v1722314502/jobhunty/knqfodgopfwy9u4wveep.png"
                                                        className="shrink-0 aspect-square w-[88px]"
                                                    />
                                                    <div className="self-start px-3 py-1 bg-slate-50">
                                                        7 Jobs
                                                    </div>
                                                </div>
                                                <div className="mt-4 text-2xl font-semibold leading-7 text-slate-800">
                                                    Stripe
                                                </div>
                                                <div className="mt-4 text-lg leading-7 text-slate-600">
                                                    Stripe is a software platform for starting and running
                                                    internet businesses. Millions of businesses rely on
                                                    Stripe’s software tools...
                                                </div>
                                                <div className="flex gap-4 mt-4 text-sm font-semibold">
                                                    <div className="px-2.5 py-1.5 text-emerald-300 whitespace-nowrap border border-emerald-300 border-solid rounded-[80px]">
                                                        Business
                                                    </div>
                                                    <div className="px-2.5 py-1.5 text-indigo-600 bg-indigo-600 bg-opacity-10 rounded-[80px]">
                                                        Payment gateway
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow p-6 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                                                <div className="flex gap-5 justify-between text-base text-indigo-600">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="http://res.cloudinary.com/dghv07eag/image/upload/v1722314502/jobhunty/knqfodgopfwy9u4wveep.png"
                                                        className="shrink-0 aspect-square w-[88px]"
                                                    />
                                                    <div className="self-start px-3 py-1 bg-slate-50">
                                                        7 Jobs
                                                    </div>
                                                </div>
                                                <div className="mt-4 text-2xl font-semibold leading-7 text-slate-800">
                                                    Truebill
                                                </div>
                                                <div className="mt-4 text-lg leading-7 text-slate-600">
                                                    Take control of your money. Truebill develops a mobile
                                                    app that helps consumers take control of their
                                                    financial...
                                                </div>
                                                <div className="self-start px-2.5 py-1.5 mt-4 text-sm font-semibold text-emerald-300 whitespace-nowrap border border-emerald-300 border-solid rounded-[80px]">
                                                    Business
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col">
                                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow p-6 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                                                <div className="flex gap-5 justify-between text-base text-indigo-600">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="..."
                                                        className="shrink-0 aspect-square w-[88px]"
                                                    />
                                                    <div className="self-start px-3 py-1 bg-slate-50">
                                                        7 Jobs
                                                    </div>
                                                </div>
                                                <div className="mt-4 text-2xl font-semibold leading-7 text-slate-800">
                                                    Square
                                                </div>
                                                <div className="mt-4 text-lg leading-7 text-slate-600">
                                                    Square builds common business tools in unconventional
                                                    ways so more people can start, run, and grow their
                                                    businesses.
                                                </div>
                                                <div className="flex gap-4 self-start mt-4 text-sm font-semibold whitespace-nowrap">
                                                    <div className="px-2.5 py-1.5 text-emerald-300 border border-emerald-300 border-solid rounded-[80px]">
                                                        Business
                                                    </div>
                                                    <div className="px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                                        Blockchain
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow p-6 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                                                <div className="flex gap-5 justify-between text-base text-indigo-600">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="..."
                                                        className="shrink-0 aspect-square w-[88px]"
                                                    />
                                                    <div className="self-start px-3 py-1 bg-slate-50">
                                                        7 Jobs
                                                    </div>
                                                </div>
                                                <div className="mt-4 text-2xl font-semibold leading-7 text-slate-800">
                                                    Coinbase
                                                </div>
                                                <div className="mt-4 text-lg leading-7 text-slate-600">
                                                    Coinbase is a digital currency wallet and platform where
                                                    merchants and consumers can transact with new digital
                                                    currencies.
                                                </div>
                                                <div className="flex gap-4 self-start mt-4 text-sm font-semibold whitespace-nowrap">
                                                    <div className="px-2.5 py-1.5 text-emerald-300 border border-emerald-300 border-solid rounded-[80px]">
                                                        Business
                                                    </div>
                                                    <div className="px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                                        Blockchain
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col">
                                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow p-6 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                                                <div className="flex gap-5 justify-between text-base text-indigo-600">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="..."
                                                        className="shrink-0 aspect-square w-[88px]"
                                                    />
                                                    <div className="self-start px-3 py-1 bg-slate-50">
                                                        7 Jobs
                                                    </div>
                                                </div>
                                                <div className="mt-4 text-2xl font-semibold leading-7 text-slate-800">
                                                    Robinhood
                                                </div>
                                                <div className="mt-4 text-lg leading-7 text-slate-600">
                                                    Robinhood is lowering barriers, removing fees, and
                                                    providing greater access to financial information.
                                                </div>
                                                <div className="self-start px-2.5 py-1.5 mt-4 text-sm font-semibold text-emerald-300 whitespace-nowrap border border-emerald-300 border-solid rounded-[80px]">
                                                    Business
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow p-6 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                                                <div className="flex gap-5 justify-between text-base text-indigo-600">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="..."
                                                        className="shrink-0 aspect-square w-[88px]"
                                                    />
                                                    <div className="self-start px-3 py-1 bg-slate-50">
                                                        7 Jobs
                                                    </div>
                                                </div>
                                                <div className="mt-4 text-2xl font-semibold leading-7 text-slate-800">
                                                    Kraken
                                                </div>
                                                <div className="mt-4 text-lg leading-7 text-slate-600">
                                                    Based in San Francisco, Kraken is the world’s largest
                                                    global bitcoin exchange in euro volume and liquidity.
                                                </div>
                                                <div className="flex gap-4 self-start mt-4 text-sm font-semibold whitespace-nowrap">
                                                    <div className="px-2.5 py-1.5 text-emerald-300 border border-emerald-300 border-solid rounded-[80px]">
                                                        Business
                                                    </div>
                                                    <div className="px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                                        Blockchain
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col">
                                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow p-6 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                                                <div className="flex gap-5 justify-between text-base text-indigo-600">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="..."
                                                        className="shrink-0 aspect-square w-[88px]"
                                                    />
                                                    <div className="self-start px-3 py-1 bg-slate-50">
                                                        7 Jobs
                                                    </div>
                                                </div>
                                                <div className="mt-4 text-2xl font-semibold leading-7 text-slate-800">
                                                    Revolut
                                                </div>
                                                <div className="mt-4 text-lg leading-7 text-slate-600">
                                                    When Revolut was founded in 2015, we had a vision to
                                                    build a sustainable, digital alternative to traditional
                                                    big banks.
                                                </div>
                                                <div className="self-start px-2.5 py-1.5 mt-4 text-sm font-semibold text-emerald-300 whitespace-nowrap border border-emerald-300 border-solid rounded-[80px]">
                                                    Business
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow p-6 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:px-5 max-md:mt-8 max-md:max-w-full">
                                                <div className="flex gap-5 justify-between text-base text-indigo-600">
                                                    <img
                                                        loading="lazy"
                                                        srcSet="..."
                                                        className="shrink-0 aspect-square w-[88px]"
                                                    />
                                                    <div className="self-start px-3 py-1 bg-slate-50">
                                                        7 Jobs
                                                    </div>
                                                </div>
                                                <div className="mt-4 text-2xl font-semibold leading-7 text-slate-800">
                                                    Divvy
                                                </div>
                                                <div className="mt-4 text-lg leading-7 text-slate-600">
                                                    Divvy is a secure financial platform for businesses to
                                                    manage payments and subscriptions.
                                                </div>
                                                <div className="flex gap-4 self-start mt-4 text-sm font-semibold whitespace-nowrap">
                                                    <div className="px-2.5 py-1.5 text-emerald-300 border border-emerald-300 border-solid rounded-[80px]">
                                                        Business
                                                    </div>
                                                    <div className="px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                                        Blockchain
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-center items-center self-center mt-8 text-base leading-6 whitespace-nowrap text-slate-500">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/130f749b4940af607695a5066fca8241730a9817e416703e7222a696d8c88d48?"
                                        className="shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
                                    <div className="self-stretch my-auto text-center">1</div>
                                    <div className="self-stretch px-4 py-2 font-semibold text-white bg-indigo-600 rounded leading-[150%]">
                                        2
                                    </div>
                                    <div className="self-stretch my-auto">3</div>
                                    <div className="self-stretch my-auto">•••</div>
                                    <div className="self-stretch my-auto">10</div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f46bb1d92b4d4a05204ccc69aefad5c987fabde5ba80547269dd589c2b511126?"
                                        className="shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
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