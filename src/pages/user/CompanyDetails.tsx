import { Facebook, Instagram, Twitter } from "lucide-react";
import { useLocation, useOutletContext } from "react-router-dom";
import CompanyDetailsHeader from "src/components/common/CompanyDetailsHeader";
import { prop } from "src/types/AllTypes";
// import stack from '../../assets/techstacks.json'

function CompanyDetails() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const location = useLocation()
    const { state } = location
    return (
        <div className={`flex flex-col items-center justify-center ${open && open ? 'w-full' : 'w-full'}  ${open && open ? 'bg-none' : 'bg-slate-50'}`}>
            <CompanyDetailsHeader data={state} />
            <div className={`flex flex-col sm:flex-row gap-5 items-start  ${open ? 'px-5 py-5' : 'px-10 py-10'}  w-full bg-white `}>
                <div className="flex flex-col grow shrink w-full sm:w-1/2">
                    <div className="flex flex-col max-w-full ">
                        <div className="flex flex-col w-full">
                            <div className="text-3xl font-semibold leading-tight text-slate-800">
                                Company Profile
                            </div>
                            <div className={`
                            mt-4 text-base leading-7 text-slate-600 
                            `}>
                                {state?.description}
                            </div>
                        </div>
                        <div className="flex flex-col items-start mt-6 w-full text-base font-medium leading-relaxed text-indigo-600 whitespace-nowrap max-w-[752px] max-md:max-w-full">
                            <div className="self-stretch text-3xl font-semibold leading-tight text-slate-800">
                                Contact
                            </div>
                            <div className="flex flex-wrap gap-4 items-start mt-4 w-full max-md:max-w-full">
                                {
                                    state.socialLinks.map((data:any) => {
                                        if (data.includes('twitter')) {
                                            return (
                                                <div className="flex gap-4 items-start p-2">
                                                    <Twitter />
                                                    <div>{data.substr(8)}</div>
                                                </div>
                                            )
                                        } else if (data.includes('instagram')) {
                                            return (
                                                <div className="flex gap-4 items-start p-2">
                                                    <Instagram />
                                                    <div>{data.substr(8)}</div>
                                                </div>
                                            )
                                        } else if (data.length > 0) {
                                            return (
                                                <div className="flex gap-4 items-start p-2">
                                                    <Facebook />

                                                    <div>{data.substr(8)}</div>
                                                </div>
                                            )
                                        }
                                    })
                                }

                            </div>
                            <div className="flex gap-4 items-center p-2 mt-4">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f776a6f75ce5554e99557a08cf3868e21ff513b6544753d4c7fd8c41f59b65a5?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                    className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                                />
                                <div className="self-stretch my-auto">
                                    {state?.LinkedInLink.substr(8)}
                                    {/* linkedin.com/company/stripe */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  shrink min-w-[240px] w-[301px]">
                    <div className="flex flex-col max-w-full w-[376px]">
                        <div className="flex flex-col w-full">
                            <div className="max-w-full text-3xl font-semibold leading-tight rounded-none text-slate-800 w-[174px]">
                                Tech stack
                            </div>
                            <div className="mt-4 text-base leading-7 text-slate-600">
                                Learn about the technology and tools that {state?.name} uses.{" "}
                            </div>
                        </div>
                        <div className="flex flex-col self-start mt-4 w-[297px] h-full text-base leading-relaxed text-slate-800">
                            <div className="flex flex-wrap items-start">
                                {
                                    state.techStack.map((data:any) => (
                                        <div className="flex flex-col items-center p-3 w-[98px]">
                                            <picture>
                                                <source
                                                    media="(prefers-color-scheme: light)"
                                                    srcSet={`https://deviconapi.vercel.app/${data}?theme=light&size=50`} />
                                                {/* <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${data.name}/${data.name}-original.svg?size=10`} /> */}

                                                <img src={`https://deviconapi.vercel.app/${data}?theme=lig&size=50`} />
                                            </picture>

                                            <div className="mt-2.5"> {data} </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="mt-4 w-full min-h-[1px]" />
                    </div>
                    <div className="flex flex-col mt-10 w-full max-w-[376px]">
                        <div className="flex flex-col w-full">
                            <div className="text-3xl font-semibold leading-tight text-slate-900">
                                Office Location
                            </div>
                        </div>
                        <div className="flex flex-col items-start self-start mt-6 text-base font-semibold leading-relaxed ">
                            {
                                state.locations.map((data:any) => (
                                    <div className="flex gap-3 items-center self-stretch">
                                        <div className="self-stretch my-auto"> {data} </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="mt-6 w-full min-h-[1px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetails


