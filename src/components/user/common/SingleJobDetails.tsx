import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { prop } from 'src/types/AllTypes';

function SingleJobDetails() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;
    return (
        <>
            
            <div className={`flex flex-col items-center ml-2 ${open && open ? 'w-full' : 'w-full'}  ${open && open ? 'bg-none' : 'bg-slate-50'} px-3`}>
            <div className="flex gap-5 justify-between p-6 bg-white border border-solid border-zinc-200 max-md:flex-wrap max-md:px-5">
                <div className="flex gap-5 justify-center max-md:flex-wrap">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb974e8542f64ab89ff2208f80a789de6f92f3c2a0a65fcd9f22cba416493ed?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fb974e8542f64ab89ff2208f80a789de6f92f3c2a0a65fcd9f22cba416493ed?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fb974e8542f64ab89ff2208f80a789de6f92f3c2a0a65fcd9f22cba416493ed?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fb974e8542f64ab89ff2208f80a789de6f92f3c2a0a65fcd9f22cba416493ed?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fb974e8542f64ab89ff2208f80a789de6f92f3c2a0a65fcd9f22cba416493ed?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fb974e8542f64ab89ff2208f80a789de6f92f3c2a0a65fcd9f22cba416493ed?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fb974e8542f64ab89ff2208f80a789de6f92f3c2a0a65fcd9f22cba416493ed?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6fb974e8542f64ab89ff2208f80a789de6f92f3c2a0a65fcd9f22cba416493ed?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                        className="shrink-0 aspect-[0.97] w-[88px]"
                    />
                    <div className="flex flex-col my-auto">
                        <div className="text-3xl font-semibold leading-10 text-slate-800">
                            Social Media Assistant
                        </div>
                        <div className="flex gap-2 justify-between mt-2 text-xl leading-8 text-slate-600">
                            <div>Stripe</div>
                            <div>Paris, France</div>
                            <div>Full-Time</div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 justify-between py-px my-auto text-lg font-bold leading-7 text-center text-white whitespace-nowrap">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3738b4dd49192a6d40bc920921c9d25176575734d8e5ca5741203c937e095d6?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                        className="shrink-0 my-auto w-8 aspect-[0.97]"
                    />
                    <div className="px-14 py-3.5 bg-indigo-600 max-md:px-5">Apply</div>
                </div>
            </div>
                <div className={`flex justify-center items-center self-stretch  px-5 py-5 bg-white`}>
                    <div className={`${!open && 'px-10 py-5'} w-full max-w-[1192px] max-md:max-w-full`}>
                        <div className="flex gap-5 max-md:flex-col">
                            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col text-base leading-6 text-slate-600 max-md:mt-10 max-md:max-w-full">
                                    <div className="text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">
                                        Description
                                    </div>
                                    <div className="mt-4 leading-7 max-md:max-w-full">
                                        Stripe is looking for Social Media Marketing expert to help
                                        manage our online networks. You will be responsible for
                                        monitoring our social media channels, creating content, finding
                                        effective ways to engage the community and incentivize others to
                                        engage on our channels.
                                    </div>
                                    <div className="mt-10 text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">
                                        Responsibilities
                                    </div>
                                    <div className="flex gap-2 mt-4 max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13597c93cc790211f83d37157790033eb10b87552a995f5648afecec4d7bb54b?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                            className="shrink-0 self-start w-5 aspect-square"
                                        />
                                        <div className="max-md:max-w-full">
                                            Community engagement to ensure that is supported and actively
                                            represented online
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-2 max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1759a8a3f024ac7e1cdb3029132114c63ba8db6fdf987b7e348bb6f6ba22a975?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                            className="shrink-0 self-start w-5 aspect-square"
                                        />
                                        <div className="max-md:max-w-full">
                                            Focus on social media content development and publication
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-2 max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9534f2c0113247595e326aa8c2dd25942f36fffb816000e538aa8ee7ebecc33c?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                            className="shrink-0 self-start w-5 aspect-square"
                                        />
                                        <div className="max-md:max-w-full">
                                            Marketing and strategy support
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-2 leading-7 max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/929cb3c62225e34fd0eb6aaae51a3d8e38baf6b24ff86816f6f8903beeb2b2a6?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                            className="shrink-0 self-start w-5 aspect-square"
                                        />
                                        <div className="max-md:max-w-full">
                                            Stay on top of trends on social media platforms, and suggest
                                            content ideas to the team
                                        </div>
                                    </div>
                                    <div className="flex gap-2 mt-2 max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/93fd352adf2e2ea53b679b37bcb11303aee0aabd3e8318df85f10c4e5307dca9?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                            className="shrink-0 self-start w-5 aspect-square"
                                        />
                                        <div className="max-md:max-w-full">
                                            Engage with online communities
                                        </div>
                                    </div>
                                    <div className="mt-10 text-3xl font-semibold leading-10 text-slate-800 max-md:max-w-full">
                                        Who You Are
                                    </div>
                                    <div className="flex gap-2 self-start mt-4 max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6509028df0eed4dc36fdf09450c46d7b3b5b5c59f9501f6a5f89b5a8c65876a4?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                            className="shrink-0 self-start w-5 aspect-square"
                                        />
                                        <div className="max-md:max-w-full">
                                            You get energy from people and building the ideal work
                                            environment
                                        </div>
                                    </div>
                                    <div className="flex gap-2 self-start mt-2 max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a4ce156f4433a9b5a1e70cac1cb637221f52fb3c0e6578575a637cf543c706a?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                            className="shrink-0 self-start w-5 aspect-square"
                                        />
                                        <div className="max-md:max-w-full">
                                            You have a sense for beautiful spaces and office experiences
                                        </div>
                                    </div>
                                    <div className="flex gap-2 self-start mt-2 max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/103491a101ad3b2b864d8a352366680962b0b897ed0cb08c466aa6e6816e60d6?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                            className="shrink-0 self-start w-5 aspect-square"
                                        />
                                        <div className="max-md:max-w-full">
                                            You are a confident office manager, ready for added
                                            responsibilities
                                        </div>
                                    </div>
                                    <div className="flex gap-2 self-start mt-2 max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d236e9db7dfe12af4e7f60455b5d0b491bf5add39eeb2341bef5516272545e2?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                            className="shrink-0 self-start w-5 aspect-square"
                                        />
                                        <div className="max-md:max-w-full">
                                            You're detail-oriented and creative
                                        </div>
                                    </div>
                                    <div className="flex gap-2 self-start mt-2 max-md:flex-wrap">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d42fcdc1a5324daa7fa72dd70c837ac45ec0e7dfbd68b2843595a9667bd9fde2?apiKey=bf80438c4595450788b907771330b274&&apiKey=bf80438c4595450788b907771330b274"
                                            className="shrink-0 self-start w-5 aspect-square"
                                        />
                                        <div className="max-md:max-w-full">
                                            You're a growth marketer and know how to run campaigns
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow max-md:mt-10">
                                    <div className="text-3xl font-semibold leading-10 text-slate-800">
                                        About this role
                                    </div>
                                    <div className="flex flex-col p-4 mt-6 w-full bg-slate-50">
                                        <div className="text-base font-semibold leading-6 text-center text-slate-500">
                                            <span className="text-slate-800">5 applied</span>{" "}
                                            <span className=" text-slate-500">of 10 capacity</span>
                                        </div>
                                        <div className="flex mt-2">
                                            <div className="flex-1 shrink-0 h-2 bg-emerald-300" />
                                            <div className="flex-1 shrink-0 h-2 bg-emerald-300" />
                                            <div className="flex-1 shrink-0 h-2 bg-zinc-200" />
                                            <div className="flex-1 shrink-0 h-2 bg-zinc-200" />
                                            <div className="flex-1 shrink-0 h-2 bg-zinc-200" />
                                        </div>
                                    </div>
                                    <div className="flex gap-5 justify-between mt-6 text-base leading-6">
                                        <div className="text-slate-600">Apply Before</div>
                                        <div className="font-semibold text-slate-800">
                                            July 31, 2021
                                        </div>
                                    </div>
                                    <div className="flex gap-5 justify-between mt-6 text-base leading-6">
                                        <div className="text-slate-600">Job Posted On</div>
                                        <div className="font-semibold text-slate-800">July 1, 2021</div>
                                    </div>
                                    <div className="flex gap-5 justify-between mt-6 text-base leading-6">
                                        <div className="text-slate-600">Job Type</div>
                                        <div className="font-semibold text-slate-800">Full-Time</div>
                                    </div>
                                    <div className="flex gap-5 justify-between mt-6 text-base leading-6">
                                        <div className="text-slate-600">Salary</div>
                                        <div className="font-semibold text-gray-800">$75k-$85k USD</div>
                                    </div>
                                    <div className="shrink-0 mt-10 h-px border border-solid bg-zinc-200 border-zinc-200" />
                                    <div className="mt-10 text-3xl font-semibold leading-10 text-slate-800">
                                        Categories
                                    </div>
                                    <div className="flex gap-2 mt-6 text-sm font-semibold leading-6 whitespace-nowrap">
                                        <div className="px-2.5 py-1.5 text-amber-400 bg-orange-400 bg-opacity-10 rounded-[80px]">
                                            Marketing
                                        </div>
                                        <div className="px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                                            Design
                                        </div>
                                    </div>
                                    <div className="shrink-0 mt-10 h-px border border-solid bg-zinc-200 border-zinc-200" />
                                    <div className="mt-12 text-3xl font-semibold leading-10 text-slate-800 max-md:mt-10">
                                        Required Skills
                                    </div>
                                    <div className="flex gap-2.5 mt-5 text-base leading-6 text-indigo-600">
                                        <div className="px-3 py-1 bg-slate-50">Project Management</div>
                                        <div className="px-3 py-1 whitespace-nowrap bg-slate-50">
                                            Copywriting
                                        </div>
                                    </div>
                                    <div className="flex gap-2.5 mt-2.5 text-base leading-6 text-indigo-600">
                                        <div className="grow px-3 py-1 bg-slate-50 w-fit">
                                            Social Media Marketing
                                        </div>
                                        <div className="px-3 py-1 whitespace-nowrap bg-slate-50">
                                            English
                                        </div>
                                    </div>
                                    <div className="px-3 py-1 mt-2.5 text-base leading-6 text-indigo-600 bg-slate-50">
                                        Copy Editing
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleJobDetails




