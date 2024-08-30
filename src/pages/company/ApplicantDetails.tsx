import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Avatar } from '@mui/material';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import Loading from 'src/components/common/Loading';
import ContactInApplicantDetails from 'src/components/company/ContactInApplicantDetails';
import HireOrDeclineModal from 'src/components/company/HireOrDeclineModal';
import HiringProcess from 'src/components/company/HiringProcess';
import InterviewSchedule from 'src/components/company/InterviewSchedule';
import ProfileTab from 'src/components/company/ProfileTab';
import ResumeTab from 'src/components/company/ResumeTab';
import { getSpecificApplicantDetails } from 'src/redux/actions/jobAction';
import { AppDispatch, RootState } from 'src/redux/store';
import { prop } from 'src/types/AllTypes';
import { formatDateToDaysAgo } from 'src/utils/formateDateToDaysAgo';

function ApplicantDetails() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const dispatch: AppDispatch = useDispatch()
    const state = useSelector((state: RootState) => state?.job)
    const navigate = useNavigate()
    const params = useParams()
    const [loading, setLoading] = useState<boolean>(false)
    const [modalOpen, setOpen] = useState<boolean>(false)

    const { id } = params

    function handleGoBack() {
        navigate(-1)
    }

    useEffect(() => {
        if (id) {
            dispatch(getSpecificApplicantDetails(id))
        }
    }, [])

    return (
        <>
            <HireOrDeclineModal open={modalOpen} setOpen={setOpen} />
            <div className={`flex flex-col`}>
                <div className={`flex flex-wrap gap-5 justify-between items-center  ${open ? 'px-4' : 'w-full'} px-8 py-6 w-full bg-white  max-md:max-w-full`}>
                    <div className="flex gap-5 items-center self-stretch my-auto text-2xl font-semibold leading-tight min-w-[240px] text-slate-800">
                        <ArrowLeft onClick={handleGoBack} />
                        <div className="self-stretch my-auto">Applicant Details</div>
                    </div>
                </div>
                <div className={`flex flex-wrap gap-5 justify-center items-start ${open ? 'px-3' : 'px-8'} w-full max-md:px-5 max-md:max-w-full`}>
                    <div className="flex flex-col grow shrink p-6 bg-white min-w-[240px] w-[282px] border-2 border-solid max-md:px-5 shadow-md">
                        <div className="flex gap-5 items-start self-start text-base leading-relaxed text-slate-800">
                            {
                                state?.applicant?.userId?.coverImage ? (
                                    <img
                                        loading="lazy"
                                        srcSet={state?.applicant?.userId?.coverImage}
                                        // srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c9a4f0236a9f401fc4617296c30a14a1e0489f27f15ddf29db165753e94e1fe2?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a4f0236a9f401fc4617296c30a14a1e0489f27f15ddf29db165753e94e1fe2?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a4f0236a9f401fc4617296c30a14a1e0489f27f15ddf29db165753e94e1fe2?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a4f0236a9f401fc4617296c30a14a1e0489f27f15ddf29db165753e94e1fe2?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a4f0236a9f401fc4617296c30a14a1e0489f27f15ddf29db165753e94e1fe2?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a4f0236a9f401fc4617296c30a14a1e0489f27f15ddf29db165753e94e1fe2?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a4f0236a9f401fc4617296c30a14a1e0489f27f15ddf29db165753e94e1fe2?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c9a4f0236a9f401fc4617296c30a14a1e0489f27f15ddf29db165753e94e1fe2?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                        className="object-contain shrink-0 w-24 rounded-full"
                                    />
                                ) : (
                                    <Avatar sx={{ width: 73, height: 74 }}> {state?.applicant?.userId?.name?.charAt(0)} </Avatar>
                                )
                            }
                            <div className="flex flex-col">
                                <div className="text-2xl font-semibold leading-tight capitalize">
                                    {state?.applicant?.userId?.name}
                                </div>
                                <div className="mt-2 text-slate-500">
                                    {
                                        state?.applicant?.userId?.experiences?.map((data: any) => data?.working ? data?.title : '')
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col p-4 mt-5 w-full leading-relaxed bg-slate-50">
                            <div className="flex gap-5 justify-between items-start w-full text-sm">
                                <div className="text-slate-800">Applied Jobs</div>
                                <div className="text-right text-slate-500">
                                    {
                                        formatDateToDaysAgo(state?.applicant?.createdAt || null)
                                    }
                                </div>
                            </div>
                            <div className="flex mt-2 w-full bg-zinc-200 min-h-[1px]" />
                            <div className="flex flex-col self-start mt-2">
                                {
                                    state?.applicant?.userId?.experiences?.map((data: any) => data?.working ? (
                                        <>
                                            <div className="text-base font-semibold text-slate-800">
                                                {data?.title}
                                            </div>
                                            <div className="flex gap-2 justify-center items-center self-start text-sm whitespace-nowrap text-slate-600">
                                                <div className="self-stretch my-auto"> {data?.company} </div>
                                                <div className="self-stretch my-auto">Full-Time</div>
                                            </div>
                                        </>
                                    ) : '')
                                }
                            </div>
                        </div>
                        <div className="flex flex-col p-4 mt-5 w-full bg-slate-50">
                            <div className="flex gap-5 justify-between items-start w-full text-sm leading-relaxed whitespace-nowrap">
                                <div className="text-slate-800">Stage</div>
                                <div className="flex gap-2 items-center text-right text-sky-400">
                                    <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-sky-400 rounded-full" />
                                    <div className="self-stretch my-auto">Interview</div>
                                </div>
                            </div>
                            <div className="flex gap-0.5 mt-2 w-full min-h-[11px]">
                                <div className="flex flex-1 shrink bg-sky-400 basis-0 h-[11px] w-[66px]" />
                                <div className="flex flex-1 shrink bg-sky-400 basis-0 h-[11px] w-[67px]" />
                                <div className="flex flex-1 shrink bg-sky-400 basis-0 h-[11px] w-[66px]" />
                                <div className="flex flex-1 shrink basis-0 bg-zinc-200 h-[11px] w-[67px]" />
                            </div>
                        </div>
                        <div className="flex mt-5 w-full bg-zinc-200 min-h-[1px]" />
                        <ContactInApplicantDetails email={state?.applicant?.userId?.email || ""} socialLink={state.applicant?.userId?.socialLink || []} />
                    </div>
                    <div className="flex flex-col grow shrink items-center pb-6 border-2 border-solid text-base bg-white max-h-[859px] min-w-[240px] w-[648px] max-md:max-w-full shadow-md">
                        <Tabs defaultValue="profile" className="w-full">
                            <div className="flex flex-col  w-full font-semibold leading-relaxed bg-white  text-slate-500 max-md:max-w-full">
                                <div className="flex flex-wrap gap-5 items-start w-full border-b-2 border-solid bg-white shadow-sm">
                                    <TabsList className="flex items-center justify-center w-full bg-white">
                                        <TabsTrigger
                                            className={cn(
                                                "mx-2 -mb-[2px] inline-flex items-center justify-start rounded-none whitespace-nowrap border-b-2  text-base font-medium  transition-all first-of-type:ml-0 disabled:pointer-events-none disabled:text-muted-foreground data-[state=active]:border-indigo-600 ",
                                            )}
                                            value="profile">profile</TabsTrigger >
                                        <TabsTrigger
                                            className={cn(
                                                "mx-2 -mb-[2px] inline-flex items-center justify-start rounded-none whitespace-nowrap border-b-2  text-base font-medium  transition-all first-of-type:ml-0 disabled:pointer-events-none disabled:text-muted-foreground data-[state=active]:border-indigo-600 ",
                                            )}
                                            value="resume">resume</TabsTrigger>
                                        <TabsTrigger
                                            className={cn(
                                                "mx-2 -mb-[2px] inline-flex items-center justify-start rounded-none whitespace-nowrap border-b-2  text-base font-medium  transition-all first-of-type:ml-0 disabled:pointer-events-none disabled:text-muted-foreground data-[state=active]:border-indigo-600 ",
                                            )}
                                            value="hiring">Hiring progress</TabsTrigger>
                                        <TabsTrigger
                                            className={cn(
                                                "mx-2 -mb-[2px] inline-flex items-center justify-start rounded-none whitespace-nowrap border-b-2  text-base font-medium  transition-all first-of-type:ml-0 disabled:pointer-events-none disabled:text-muted-foreground data-[state=active]:border-indigo-600 ",
                                            )}
                                            value="interview">Interview process</TabsTrigger>
                                    </TabsList>
                                </div>
                            </div>
                            <ProfileTab
                                key={'profile'}
                                name={state?.applicant?.userId?.name || ''}
                                about={state?.applicant?.userId?.about || ''}
                                education={state?.applicant?.userId?.education || []}
                                experiences={state?.applicant?.userId?.experiences || []}
                                skills={state?.applicant?.userId?.skills || []}
                            />
                            {
                                state?.applicant?.resume && (
                                    <ResumeTab resume={state?.applicant?.resume} />
                                )
                            }
                            <HiringProcess setOpen={setOpen} key={'hiring'} setLoading={setLoading} applicantId={state?.applicant?._id || null} />
                            <InterviewSchedule key={'interview'} setLoading={setLoading} />
                        </Tabs>
                    </div>
                </div>
                <Loading loading={loading} />
            </div >
        </>
    )
}

export default ApplicantDetails


