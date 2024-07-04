import * as React from 'react'
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    // '& .MuiInputBase-input': {
    //     borderRadius: 4,
    //     position: 'relative',
    //     backgroundColor: theme.palette.background.paper,
    //     border: '1px solid #ced4da',
    //     fontSize: 16,
    //     padding: '10px 26px 10px 12px',
    //     transition: theme.transitions.create(['border-color', 'box-shadow']),
    //     // Use the system font instead of the default Roboto font.
    //     fontFamily: [
    //         '-apple-system',
    //         'BlinkMacSystemFont',
    //         '"Segoe UI"',
    //         'Roboto',
    //         '"Helvetica Neue"',
    //         'Arial',
    //         'sans-serif',
    //         '"Apple Color Emoji"',
    //         '"Segoe UI Emoji"',
    //         '"Segoe UI Symbol"',
    //     ].join(','),
    //     '&:focus': {
    //         borderRadius: 4,
    //         borderColor: '#80bdff',
    //         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    //     },
    // },
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

function Home() {

    const [age, setAge] = React.useState('');
    const handleChange = (event: { target: { value: string } }) => {
        setAge(event.target.value);
    };

    return (
        <>
            <div className="flex flex-col items-start pb-20 bg-slate-50 w-full">
                <nav className="flex justify-center items-center self-stretch px-16 w-full max-md:px-5 max-md:max-w-full">
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
                            <NavLink to='/login' className="my-auto text-indigo-600">Login</NavLink>
                            <NavLink to='/signup' className="justify-center px-6 py-3 text-white bg-indigo-600 max-md:px-5">
                                Sign Up
                            </NavLink>
                        </div>
                    </div>
                </nav>
                <div className="pl-7 pr-5 sm:pl-32 w-full">

                    <div className="mt-20  text-2xl sm:text-7xl font-semibold text-sky-400 leading-[79px] w-1/2 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                        <span className="text-slate-800">Discover more than</span>{" "}
                        <span className="text-sky-400">5000+ Jobs</span>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1a38b1853b642b4e50d197e06cb214ecb60c40ff995fac8f96165b129c8411c?"
                        className="hidden sm:flex mt-7 max-w-full aspect-[16.67] w-1/2"
                    />
                    <div className="mt-6  text-base sm:text-xl leading-8 text-slate-600 w-full sm:w-1/2 max-md:max-w-full">
                        Great platform for the job seeker that searching for new career heights
                        and passionate about startups.
                    </div>


                    {/* <div className="flex bg-gray-100 w-1/2 justify-evenly items-center py-2 px-"> */}
                    {/* <div className="w-3/4 flex  gap-2">
                        <div className="w-1/2 ">
                        <input className="bg-gray-100  border-b-2 border-zinc-600 py-3 h-full w-full" type="text " />
                        </div>
                        <div className="w-1/2 bg-red-800">
                            <input className="bg-gray-100 border-b-2 border-zinc-600 py-2 h-full w-full" type="text " />
                            </div>
                            </div>
                            <button className="w-1/3  py-2.5 text-xl text-white font-medium rounded bg-indigo-600">
                            search my job
                            </button> */}

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
                            value={age}
                            onChange={handleChange}
                            input={<BootstrapInput />}
                        >
                            <option aria-label="None" value="" />
                            <option value={10}>company name</option>
                            <option value={20}>company name</option>
                            <option value={30}>company companay company</option>
                        </NativeSelect>

                    </FormControl>
                    <Button sx={{ m: 1, marginTop: '30px', backgroundColor: 'rgb(79 70 229)', color: 'white', fontWeight: '600' }} variant="outlined">search my job</Button>

                    {/* </div> */}

                    <div className="mt-2 text-base leading-6 text-gray-800 max-md:max-w-full">
                        Popular :{" "}
                        <span className="font-medium">
                            UI Designer, UX Researcher, Android, Admin
                        </span>
                    </div>
                </div>
            </div>




            <div className="flex flex-col justify-end items-center px-16 pt-2 sm:pt-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
                    <div className="flex gap-2.5 justify-between w-full font-semibold max-md:flex-wrap max-md:max-w-full">
                        <div className="text-xl sm:text-5xl text-sky-400 leading-[52.8px] max-md:max-w-full max-md:text-4xl">
                            Explore by <span className="text-sky-400">category</span>
                        </div>
                        <div className="flex gap-4 self-end mt-7 text-base leading-6 text-center text-indigo-600">
                            <div>Show all jobs</div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/247d3677732c680ee4f270e0de17e72780a5526fa8c7aeefd90199d2c241fe60?"
                                className="shrink-0 self-start w-6 aspect-square"
                            />
                        </div>
                    </div>
                    <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-8 mx-auto w-full bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/776a402f8317174b8782476b18b5b8a8aeefcedffab2ad56f8c5c5d7443f7e34?"
                                        className="w-12 aspect-square"
                                    />
                                    <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                                        Design
                                    </div>
                                    <div className="flex gap-4 px-px mt-3 text-lg leading-7 text-slate-500">
                                        <div>235 jobs available</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1883c3f970080ef24d10fc7219940fa5e85397d2971645cdf958557da632f345?"
                                            className="shrink-0 my-auto w-6 aspect-square"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-8 mx-auto w-full bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/27141bf69e23f978a1556de61779488da109b1ea437e4bff5b04f190a0d09448?"
                                        className="w-12 aspect-square"
                                    />
                                    <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                                        Sales
                                    </div>
                                    <div className="flex gap-4 px-px mt-3 text-lg leading-7 text-slate-500">
                                        <div>756 jobs available</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1883c3f970080ef24d10fc7219940fa5e85397d2971645cdf958557da632f345?"
                                            className="shrink-0 my-auto w-6 aspect-square"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-8 mx-auto w-full text-white bg-indigo-600 max-md:px-5 max-md:mt-8">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/725ec1ebf514ce5bf1e0d3fd4643e5d12e7d0be9df9055a0aaa58517d0e147f9?"
                                        className="w-12 aspect-square"
                                    />
                                    <div className="mt-8 text-2xl font-semibold leading-7">
                                        Marketing
                                    </div>
                                    <div className="flex gap-4 px-px mt-3 text-lg leading-7">
                                        <div>140 jobs available</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ec9ea434b1edb58bb7f7f36daf5789ef8e975cb195f9c8f2bdc13b63e412d2f?"
                                            className="shrink-0 my-auto w-6 aspect-square"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-8 mx-auto w-full bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fd16790b68f40a71b145e338cf893de0a3959b21b52bacbc73c2156c0de9211?"
                                        className="w-12 aspect-square"
                                    />
                                    <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                                        Finance
                                    </div>
                                    <div className="flex gap-4 px-px mt-3 text-lg leading-7 text-slate-500">
                                        <div>325 jobs available</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1883c3f970080ef24d10fc7219940fa5e85397d2971645cdf958557da632f345?"
                                            className="shrink-0 my-auto w-6 aspect-square"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="mt-8 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-8 mx-auto w-full bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b06cae18e90c02ffde152882439e6366cc3ee48f814452c3761e0125765374b?"
                                        className="w-12 aspect-square"
                                    />
                                    <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                                        Technology
                                    </div>
                                    <div className="flex gap-4 px-px mt-3 text-lg leading-7 text-slate-500">
                                        <div>436 jobs available</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1883c3f970080ef24d10fc7219940fa5e85397d2971645cdf958557da632f345?"
                                            className="shrink-0 my-auto w-6 aspect-square"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-8 mx-auto w-full bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/908f62770de21708a8b20f6eb6a62947b053e853319c72bf62ad4b80a0145f78?"
                                        className="w-12 aspect-square"
                                    />
                                    <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                                        Engineering
                                    </div>
                                    <div className="flex gap-4 px-px mt-3 text-lg leading-7 text-slate-500">
                                        <div>542 jobs available</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1883c3f970080ef24d10fc7219940fa5e85397d2971645cdf958557da632f345?"
                                            className="shrink-0 my-auto w-6 aspect-square"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-8 mx-auto w-full bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/17fdb8063d6a36e4da0bf57f73d91c05b92b7a56df3f83dd44ecf2cd9f02568c?"
                                        className="w-12 aspect-square"
                                    />
                                    <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                                        Business
                                    </div>
                                    <div className="flex gap-4 px-0.5 mt-3 text-lg leading-7 text-slate-500">
                                        <div>211 jobs available</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1883c3f970080ef24d10fc7219940fa5e85397d2971645cdf958557da632f345?"
                                            className="shrink-0 my-auto w-6 aspect-square"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow p-8 mx-auto w-full bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb1a39c94f25450a37f1e05134e17f4ce94d861523ff8394fdf9b55cf92cba70?"
                                        className="w-12 aspect-square"
                                    />
                                    <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                                        Human Resource
                                    </div>
                                    <div className="flex gap-4 px-px mt-3 text-lg leading-7 text-slate-500">
                                        <div>346 jobs available</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1883c3f970080ef24d10fc7219940fa5e85397d2971645cdf958557da632f345?"
                                            className="shrink-0 my-auto w-6 aspect-square"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default Home


{/* <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9db8721803ed71131c4d5c1e115a2d6411773ea62c6811959594b4f4d9acc901?"
                        className="shrink-0 my-auto w-6 aspect-square"
                    />
                    
                     */}