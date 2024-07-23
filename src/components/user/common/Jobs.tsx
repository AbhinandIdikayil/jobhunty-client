import React from 'react'
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
    return (
        <>

            {/* // <div className="flex flex-col justify-center self-stretch"> */}
            <div className="flex flex-col items-center w-full bg-slate-50 max-md:max-w-full px-3">
                <div className="hidden sm:flex gap-4 mt-16 text-5xl font-semibold text-center leading-[52.8px] max-md:flex-wrap max-md:mt-10 max-md:text-4xl">
                    <div className="self-start text-slate-800 max-md:text-4xl">
                        Find your
                    </div>
                    <div className="flex flex-col text-sky-400 max-md:text-4xl">
                        <div className="max-md:text-4xl">dream job</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c5387d8afcfab9fd00e94a5a0ff7e7093a6a80b56f15adaf6cecf8274992e61?"
                            className="self-center aspect-[16.67] w-[241px]"
                        />
                    </div>
                </div>
                <div className="hidden sm:block mt-6 text-lg leading-7 text-center text-slate-600 max-md:max-w-full">
                    Find your next career at companies like HubSpot, Nike, and Dropbox
                </div>
                <div className="p-6 mt-10 w-full bg-white shadow-2xl max-w-[800px] max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5  max-md:flex-col">
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
                <div className="hidden sm:block mt-4 text-base leading-6 text-slate-600 max-md:max-w-full">
                    Popular : UI Designer, UX Researcher, Android, Admin
                </div>
            </div>
            {/* // </div> */}
            <div className="flex justify-center items-center self-stretch px-16 py-20 bg-white max-md:px-5">
                <div className="w-full max-w-[1193px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col">
                        <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-base leading-6 text-slate-600 max-md:mt-10">


                                <Accordion type="multiple"  className="w-full">

                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Types Of Employment</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Accept terms and conditions
                                                </label>
                                            </div>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Internship
                                                </label>
                                            </div>
                                            <div className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                                                <Checkbox id="terms2" />
                                                <label
                                                    htmlFor="terms2"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Contract
                                                </label>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>

                                    <AccordionItem value="item-2">
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

                                    <AccordionItem value="item-3">
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

                                    <AccordionItem value="item-4">
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
                                <div className="flex gap-5 justify-between p-6 mt-8 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-between font-semibold">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b94d9fdee77350452c2ebee502002cd2043b1ec89123ecc33a11b01ceaf9ba73?"
                                            className="shrink-0 self-start w-16 aspect-square"
                                        />
                                        <div className="flex flex-col">
                                            <div className="text-xl leading-6 text-slate-800">
                                                Interactive Developer
                                            </div>
                                            <div className="flex gap-2 justify-between py-px mt-2 text-base text-slate-500">
                                                <div>Terraform</div>
                                                <div>Hamburg, Germany</div>
                                            </div>
                                            <div className="flex gap-2 mt-2 text-sm whitespace-nowrap">
                                                <div className="px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                                                    Full-Time
                                                </div>
                                                <div className="shrink-0 w-px bg-zinc-200 h-[34px]" />
                                                <div className="px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                                    Marketing
                                                </div>
                                                <div className="px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
                                                    Design
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between text-center">
                                        <div className="px-6 py-3 text-base font-bold text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
                                            Apply
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/98f64b305f12c671b14db57bd5c042df5e706b2094a78a5b493aef4524773937?"
                                            className="self-center mt-4 aspect-[25] w-[164px]"
                                        />
                                        <div className="mt-2 text-sm text-slate-500">
                                            <span className="font-semibold text-slate-800">
                                                8 applied
                                            </span>{" "}
                                            <span className="text-slate-500">of 12 capacity</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between p-6 mt-4 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-between font-semibold">
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="shrink-0 self-start w-16 aspect-square"
                                        />
                                        <div className="flex flex-col">
                                            <div className="text-xl leading-6 text-slate-800">
                                                Email Marketing
                                            </div>
                                            <div className="flex gap-2 justify-between py-px mt-2 text-base text-slate-500">
                                                <div>Revolut</div>
                                                <div>Madrid, Spain</div>
                                            </div>
                                            <div className="flex gap-2 mt-2 text-sm whitespace-nowrap">
                                                <div className="px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                                                    Full-Time
                                                </div>
                                                <div className="shrink-0 w-px bg-zinc-200 h-[34px]" />
                                                <div className="px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                                    Marketing
                                                </div>
                                                <div className="px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
                                                    Design
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between text-center">
                                        <div className="px-6 py-3 text-base font-bold text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
                                            Apply
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05097392a54f835b210c6ad31b2fe082c17d64684c40a7c8417e1d6e9b78f03c?"
                                            className="self-center mt-4 aspect-[25] w-[164px]"
                                        />
                                        <div className="mt-2 text-sm text-slate-500">
                                            <span className="font-semibold text-slate-800">
                                                0 applied
                                            </span>{" "}
                                            <span className="text-slate-500">of 10 capacity</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between p-6 mt-4 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-between font-semibold">
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="shrink-0 self-start w-16 aspect-square"
                                        />
                                        <div className="flex flex-col">
                                            <div className="text-xl leading-6 text-slate-800">
                                                Lead Engineer
                                            </div>
                                            <div className="flex gap-2 justify-between py-px mt-2 text-base text-slate-500">
                                                <div>Canva</div>
                                                <div>Ankara, Turkey</div>
                                            </div>
                                            <div className="flex gap-2 mt-2 text-sm whitespace-nowrap">
                                                <div className="px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                                                    Full-Time
                                                </div>
                                                <div className="shrink-0 w-px bg-zinc-200 h-[34px]" />
                                                <div className="px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                                    Marketing
                                                </div>
                                                <div className="px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
                                                    Design
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between text-center">
                                        <div className="px-6 py-3 text-base font-bold text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
                                            Apply
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3323d71f02121e6bb3c2e07b5abed2b1bab5b12b6360582b910b4105aecbef80?"
                                            className="self-center mt-4 aspect-[25] w-[164px]"
                                        />
                                        <div className="mt-2 text-sm text-slate-500">
                                            <span className="font-semibold text-slate-800">
                                                5 applied
                                            </span>{" "}
                                            <span className="text-slate-500">of 10 capacity</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between p-6 mt-4 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-between font-semibold">
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="shrink-0 self-start w-16 aspect-square"
                                        />
                                        <div className="flex flex-col">
                                            <div className="text-xl leading-6 text-slate-800">
                                                Product Designer
                                            </div>
                                            <div className="flex gap-2 justify-between py-px mt-2 text-base text-slate-500">
                                                <div>ClassPass</div>
                                                <div>Berlin, Germany</div>
                                            </div>
                                            <div className="flex gap-2 mt-2 text-sm whitespace-nowrap">
                                                <div className="px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                                                    Full-Time
                                                </div>
                                                <div className="shrink-0 w-px bg-zinc-200 h-[34px]" />
                                                <div className="px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                                    Marketing
                                                </div>
                                                <div className="px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
                                                    Design
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between text-center">
                                        <div className="px-6 py-3 text-base font-bold text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
                                            Apply
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3323d71f02121e6bb3c2e07b5abed2b1bab5b12b6360582b910b4105aecbef80?"
                                            className="self-center mt-4 aspect-[25] w-[164px]"
                                        />
                                        <div className="mt-2 text-sm text-slate-500">
                                            <span className="font-semibold text-slate-800">
                                                5 applied
                                            </span>{" "}
                                            <span className="text-slate-500">of 10 capacity</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between p-6 mt-4 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <div className="flex gap-5 justify-between font-semibold">
                                        <img
                                            loading="lazy"
                                            srcSet="..."
                                            className="shrink-0 self-start w-16 aspect-square"
                                        />
                                        <div className="flex flex-col">
                                            <div className="text-xl leading-6 text-slate-800">
                                                Customer Manager
                                            </div>
                                            <div className="flex gap-2 justify-between py-px mt-2 text-base text-slate-500">
                                                <div>Pitch</div>
                                                <div>Berlin, Germany</div>
                                            </div>
                                            <div className="flex gap-2 mt-2 text-sm whitespace-nowrap">
                                                <div className="px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                                                    Full-Time
                                                </div>
                                                <div className="shrink-0 w-px bg-zinc-200 h-[34px]" />
                                                <div className="px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                                                    Marketing
                                                </div>
                                                <div className="px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
                                                    Design
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between text-center">
                                        <div className="px-6 py-3 text-base font-bold text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
                                            Apply
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3323d71f02121e6bb3c2e07b5abed2b1bab5b12b6360582b910b4105aecbef80?"
                                            className="self-center mt-4 aspect-[25] w-[164px]"
                                        />
                                        <div className="mt-2 text-sm text-slate-500">
                                            <span className="font-semibold text-slate-800">
                                                5 applied
                                            </span>{" "}
                                            <span className="text-slate-500">of 10 capacity</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-center items-center self-center mt-8 text-base font-semibold leading-6 text-center whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ec5086ef7bd6883993c5570ce68eed343e1f03e697cd8047e63aa433016a42a?"
                                        className="shrink-0 self-stretch my-auto w-6 aspect-square"
                                    />
                                    <div className="flex gap-5 justify-between self-stretch pr-3">
                                        <div className="flex gap-3">
                                            <div className="px-3 py-2.5 text-white bg-indigo-600 rounded-lg h-[46px] w-[46px]">
                                                1
                                            </div>
                                            <div className="my-auto text-slate-600">2</div>
                                        </div>
                                        <div className="flex gap-5 justify-between my-auto text-slate-600">
                                            <div>3</div>
                                            <div>4</div>
                                            <div>5</div>
                                            <div>...</div>
                                            <div>33</div>
                                        </div>
                                    </div>
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb83c9436689f117d60d9fa6238a35f3497fb5c16b5c5eec5604a832d36208af?"
                                        className="shrink-0 self-stretch my-auto aspect-[1.04] w-[25px]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Jobs