import { useOutletContext } from 'react-router-dom';
import { prop } from 'src/types/AllTypes';
import UserSocialLinkUpdate from './UserSocialLinkUpdate';
import UserAddtionalDetailsUpdate from './UserAddtionalDetailsUpdate';
import UserAboutMeUpdate from './UserAboutMeUpdate';
import { Avatar } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import UserEditProfile from './EditProfile';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'src/redux/store';
import { Delete, DeleteIcon, Edit, Globe, Instagram, Languages, LinkedinIcon, Mail, Plus, PlusIcon, Smartphone, Trash2, Twitter } from 'lucide-react';
import AddEducation from './addEducation';
import { FaAward, FaUniversity } from 'react-icons/fa'
import AddExperience from './AddExperience';
import { useRef, useState } from 'react';
import { handleFileChange } from 'src/utils/validatePdf';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { uploadToCloudinary } from 'src/utils/common/cloudinaryUpload';
import { removeExperienceAndUpdateUserProfile, updateUserProfile } from 'src/redux/actions/userAction';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import AddSkills from './AddSkills';
import { removeExperienceState } from 'src/redux/reducers/user/userSlice';

function Profile() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const state = useSelector((state: RootState) => state.user);
    const dispatch: AppDispatch = useDispatch()
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [pdf, setPdf] = useState()
    const [pdfUrl, setPdfUrl] = useState()
    const [modal, setModal] = useState<boolean>(false)


    function handleClick() {
        if (fileInputRef.current) {
            fileInputRef.current.click();
            setModal(true)
        }
    }

    function formatDateRange(dateStr: string) {
        const date = new Date(dateStr);

        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let image = handleFileChange(e);
        if (image) {
            setPdfUrl(image)
            let url = URL.createObjectURL(image)
            setPdf(url)
        }
    }

    async function handleResume() {
        try {
            let image = await uploadToCloudinary(pdfUrl);
            const payload = {
                resumes: [
                    ...state.user.resumes,
                    image
                ]
            }
            console.log(payload);
            dispatch(updateUserProfile(payload)).unwrap();
            setModal(false)
        } catch (error) {
            setModal(false)
            console.log(error)
        }
    }

    async function removeExperience(ind: number) {
        try {
            await dispatch(removeExperienceAndUpdateUserProfile(ind)).unwrap();
        } catch (error) {
            console.error('Failed to remove experience and update profile:', error);
        }
    }

    return (
        <div className={`flex flex-col ${open ? 'w-5/6' : 'w-full '}max-md:ml-0`}>
            <div className="justify-between">
                <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow max-md:mt-6 max-md:max-w-full">
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-0 sm:gap-3 pb-6 py-3 sm:pt-0 bg-white border border-gray-500 rounded max-md:max-w-full">
                                {/* //! AVATAR */}
                                <div className='hidden sm:block'>
                                    {
                                        state?.user?.coverImage ? (
                                            <Avatar src={state?.user?.coverImage} sx={{ bgcolor: deepOrange[500], width: 86, height: 86 }} />

                                        ) : (
                                            <Avatar className='' sx={{ bgcolor: deepOrange[500], width: 86, height: 86 }}>N</Avatar>
                                        )
                                    }
                                </div>
                                <div className='block sm:hidden'>
                                    {
                                        state?.user?.coverImage ? (
                                            <Avatar src={state?.user?.coverImage} sx={{ bgcolor: deepOrange[500], width: 126, height: 126 }} />

                                        ) : (
                                            <Avatar className='' sx={{ bgcolor: deepOrange[500], width: 86, height: 86 }}>N</Avatar>
                                        )
                                    }
                                </div>
                                <div className="justify-between self-end sm:mt-6 max-w-full w-[524px] max-md:pr-5">
                                    <div className="flex gap-5 max-md:flex-col">
                                        <div className="flex flex-col w-[69%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col items-center grow text-lg font-semibold leading-7 text-slate-800 max-md:mt-10">
                                                <div className="text-2xl leading-7 capitalize"> {state?.user?.name} </div>
                                                <div className="mt-2">
                                                    <span className="text-slate-500">
                                                        Product Designer at
                                                    </span>{" "}
                                                    <span className="font-medium text-slate-800">
                                                        Twitter
                                                    </span>
                                                </div>
                                                <div className="flex gap-2 mt-2 text-slate-500">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae8b37fc26bd1bd5f8e96c86a49789f57c0c966d5c47293a8783eb173a8bf5e3?"
                                                        className="shrink-0 my-auto w-6 aspect-square"
                                                    />
                                                    <div>Manchester, UK</div>
                                                </div>
                                                <div className="flex gap-2.5 justify-center px-6 py-3 mt-2 text-base text-center text-emerald-300 rounded-lg bg-emerald-300 bg-opacity-10 max-md:px-5">
                                                    <img
                                                        loading="lazy"
                                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/49168d812fdf6da7a7a7aac95f8d09653973067c39a759a55c09b94fdce7b1dd?"
                                                        className="shrink-0 w-6 aspect-square"
                                                    />
                                                    <div>OPEN FOR OPPORTUNITIES</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[31%] items-center max-md:ml-0 max-md:w-full">
                                            <UserEditProfile name={state?.user?.name} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-6 mt-6 bg-white border border-gray-500 rounded max-md:px-5 max-md:max-w-full">
                                <div className="flex gap-4 justify-between max-md:flex-wrap max-md:max-w-full">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        About Me
                                    </div>
                                    <div className="flex justify-center items-center p-2.5 border border-gray-500 rounded">
                                        <UserAboutMeUpdate />
                                    </div>
                                </div>
                                <div className="mt-4 text-base leading-7 text-slate-600 max-md:max-w-full">
                                    {
                                        state?.user?.about
                                    }
                                </div>
                                <div className="mt-4 text-base leading-7 text-slate-600 max-md:max-w-full">
                                </div>
                            </div>
                            <div className="flex flex-col px-px py-6 mt-6 bg-white border border-gray-500 rounded max-md:max-w-full">
                                <div className="flex gap-4 justify-between px-6 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        Experiences
                                    </div>
                                    <div className="flex justify-center items-center p-2  border border-gray-500 rounded">
                                        <AddExperience />
                                    </div>
                                </div>
                                {
                                    state?.user?.experiences?.map((data, ind) => (
                                        <div key={ind} className="flex gap-5 justify-between px-6 py-6 bg-white max-md:flex-wrap max-md:px-5">
                                            <FaAward size={60} />
                                            <div className="flex flex-col max-md:max-w-full">
                                                <div className="flex gap-1.5 justify-between px-px max-md:flex-wrap max-md:max-w-full">
                                                    <div className="my-auto text-lg font-semibold leading-7 text-slate-800">
                                                        {data.title}
                                                    </div>
                                                    <div className="flex justify-center items-center gap-1 p-2.5">
                                                        <div className='px-2 border py-2 border-solid border-gray-400'>
                                                            <Trash2 onClick={() => removeExperience(ind)} />
                                                        </div>
                                                        <div className='px-2 border py-2 border-solid border-gray-400'>
                                                            <Edit />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2 justify-between self-start mt-2 text-base leading-6 text-slate-600">
                                                    <div className="font-medium text-slate-800">GoDaddy</div>
                                                    <div>Full-Time</div>
                                                    <div>Jun 2011 - May 2019 (8y)</div>
                                                </div>
                                                <div className="mt-1.5 text-base leading-6 text-slate-500 max-md:max-w-full">
                                                    Manchester, UK
                                                </div>
                                                <div className="mt-3 text-base leading-7 text-slate-600 max-md:max-w-full">
                                                    Developed digital marketing strategies, activation plans,
                                                    proposals, contests and promotions for client initiatives
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>


                            <div className="flex flex-col px-px py-6 mt-6 bg-white border border-gray-500 rounded max-md:max-w-full">
                                <div className="flex gap-4 justify-between px-6 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        Education
                                    </div>
                                    <div className="flex justify-center items-center p-2 border border-gray-500 rounded">
                                        <AddEducation />
                                    </div>
                                </div>
                                {
                                    state?.user?.education?.map((data, index) => (
                                        <>

                                            <div className="flex gap-5 justify-between px-6 py-6 bg-white max-md:flex-wrap max-md:px-5">

                                                <FaUniversity size={80} />
                                                <div className="flex flex-col max-md:max-w-full">
                                                    <div className="flex gap-1.5 justify-between px-px max-md:flex-wrap max-md:max-w-full">
                                                        <div className="my-auto text-lg font-semibold leading-7 text-slate-800">
                                                            {data.university}
                                                        </div>
                                                        <div className="flex justify-center items-center p-2.5 border border-solid border-zinc-200">
                                                            <img
                                                                loading="lazy"
                                                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ce10734fca792aed29a77e6939d552f3a56b9153161e91719c937203a6057a7?"
                                                                className="w-5 aspect-square"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-2 justify-between self-start mt-2 text-base leading-6 text-slate-600">
                                                        <div> {data?.course} </div>
                                                    </div>
                                                    <div className="mt-1.5 text-base leading-6 text-slate-500 max-md:max-w-full">
                                                        {formatDateRange(state?.user?.education[index].year?.from) + ' - ' + formatDateRange(state?.user?.education[index]?.year?.to)}
                                                    </div>
                                                    <div className="mt-3 text-base leading-7 text-slate-800 max-md:max-w-full">
                                                        {
                                                            data?.description
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="shrink-0 max-w-full h-px bg-zinc-200 w-full max-md:mr-1" />
                                        </>
                                    ))
                                }

                                {/* <div className="self-center text-base font-semibold leading-6 text-center text-indigo-600">
                                    Show 3 more experiences
                                </div> */}
                            </div>

                            <div className="flex flex-col p-6 mt-6 bg-white border border-gray-500 rounded max-md:px-5 max-md:max-w-full">
                                <div className="flex gap-4 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        Skills
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex justify-center items-center p-2.5 rounded border border-gray-400">
                                            <AddSkills />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4 pr-20 mt-4 text-base leading-6 text-indigo-600 max-md:flex-wrap max-md:pr-5">
                                    {
                                        state?.user?.skills?.map((data: string) => (
                                            <div className="px-3 py-1 whitespace-nowrap bg-slate-50">
                                                {data}
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                            <div className='flex mt-3'>
                                <button className='bg-indigo-600 w-full text-white font-bold p-2'>
                                    save
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col max-md:mt-6">
                            <div className="flex flex-col p-6 w-full bg-white border border-gray-500 rounded max-md:px-5">
                                <div className="flex gap-4 justify-between">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        Additional Details
                                    </div>
                                    <div className="flex justify-center items-center p-2.5 border border-gray-500 rounded">

                                        {/* //!  A MODAL WILL POPUP IF THE EDIT ICON IS CLICKED */}
                                        <UserAddtionalDetailsUpdate />
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6 whitespace-nowrap">
                                    <Mail />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Email</div>
                                        <div className="text-slate-800">{state?.user?.email}</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6">
                                    <Smartphone />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Phone</div>
                                        <div className="text-slate-800">{state.user.phonenumber || 'none'}</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6">
                                    <Languages />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Languages</div>
                                        <div className="text-slate-800">English, French</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col p-6 w-full mt-6 bg-white border border-gray-500 rounded max-md:px-5">
                                <div className="flex gap-4 justify-between">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        Add resume
                                    </div>
                                    <div className="flex justify-center items-center p-2.5 border border-gray-500 rounded">

                                        <Plus onClick={handleClick} />
                                        <input ref={fileInputRef} onChange={handleChange} type='file' style={{ display: 'none' }} />
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6 whitespace-nowrap">
                                    <Accordion type="single" collapsible className="w-full">
                                        {
                                            state?.user?.resumes?.map((data, index) => (
                                                <AccordionItem value={`item-${index + 1}`}>
                                                    <AccordionTrigger>resume 1</AccordionTrigger>
                                                    <AccordionContent>
                                                        <iframe height={400} src={state?.user?.resumes[index]} className='w-full sm:w-auto'>

                                                        </iframe>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))
                                        }
                                    </Accordion>
                                </div>
                                {
                                    pdf && (
                                        <>
                                            <AlertDialog open={modal}>
                                                <AlertDialogTrigger asChild>
                                                </AlertDialogTrigger >
                                                <AlertDialogContent className='max-w-fit'>
                                                    <AlertDialogHeader>
                                                        <iframe width="320" className='w-fit' height="360"
                                                            // URL.createObjectURL(file)
                                                            src={pdf}
                                                        >

                                                        </iframe>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel onClick={() => setModal(false)} className="">Cancel</AlertDialogCancel>
                                                        <Button type="submit" onClick={handleResume} className='ml-2 bg-indigo-700'>Submit</Button>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog >

                                        </>
                                    )
                                }
                            </div>
                            <div className="flex flex-col p-6 mt-6 w-full bg-white border border-gray-500 rounded max-md:px-5">
                                <div className="flex gap-4 justify-between">
                                    <div className="my-auto text-xl font-semibold leading-6 text-slate-800">
                                        Social Links
                                    </div>
                                    <div className="flex justify-center items-center p-2.5 border border-gray-500 rounded">

                                        {/* //!  A MODAL WILL POPUP IF THE EDIT ICON IS CLICKED */}
                                        <UserSocialLinkUpdate />
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6 whitespace-nowrap">
                                    <Instagram />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Instagram</div>
                                        <div className="text-indigo-600">{state?.user?.socialLink?.[0]}</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6 whitespace-nowrap">
                                    <Twitter />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Twitter</div>
                                        <div className="text-indigo-600">{state?.user?.socialLink?.[1]}</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6 whitespace-nowrap">
                                    <Globe />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Website</div>
                                        <div className="text-indigo-600">{state?.user?.socialLink?.[2]}</div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-4 text-base leading-6 whitespace-nowrap">
                                    <LinkedinIcon />
                                    <div className="flex flex-col">
                                        <div className="text-slate-500">Website</div>
                                        <div className="text-indigo-600">{state?.user?.personalsite}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile