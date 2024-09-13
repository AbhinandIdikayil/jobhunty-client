import * as React from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button'
import ExploreByCategory from 'src/components/user/ExploreByCategory';
import { BootstrapInput } from 'src/components/common/BootsrapInput';



function Home() {

    const [age, setAge] = React.useState('');
    const handleChange = (event: { target: { value: string } }) => {
        setAge(event.target.value);
    };

    return (
        <>
            <div className="pl-7 pr-5 sm:pl-32 w-full">
                <div className="mt-20  text-2xl sm:text-7xl font-semibold text-sky-400 leading-[79px] w-1/2 max-md:mt-10 max-md:w-full max-md:text-4xl max-md:leading-[49px]">
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
                <FormControl sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="demo-customized-textbox">Search company name</InputLabel>
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
            <ExploreByCategory />
        </>
    )
}

export default Home
