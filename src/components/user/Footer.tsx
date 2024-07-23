import React from 'react'

function Footer() {
    return (
        <div className="flex flex-col items-center self-stretch px-16 pt-16 pb-10 bg-gray-800 max-md:px-5">
            <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
                <div className="flex gap-5 justify-between items-start max-md:flex-wrap w-full">
                    <div className="flex flex-col w-full sm:w-1/2">
                        <div className="flex gap-2 self-start text-2xl font-bold tracking-tight leading-9 text-white whitespace-nowrap">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/43b75df0e54738b61eff158b2b8f6ca722cc0ea022176b2a0289b6380c179761?"
                                className="shrink-0 w-8 aspect-square"
                            />
                            <div className="flex-auto">JobHuntly</div>
                        </div>
                        <div className="mt-5 text-lg leading-8 text-zinc-200">
                            Great platform for the job seeker that passionate about startups.
                            Find your dream job easier.
                        </div>
                    </div>
                    <div className="flex flex-col text-base leading-6">
                        <div className="text-lg font-semibold text-white">
                            Get job notifications
                        </div>
                        <div className="mt-7 leading-7 text-zinc-200">
                            The latest job news, articles, sent to your inbox weekly.
                        </div>
                        <div className="flex gap-2 mt-11 max-md:mt-10">
                            <div className="px-4 py-3 text-gray-400 bg-white border border-solid border-zinc-200 max-md:pr-5">
                                Email Address
                            </div>
                            <div className="px-6 py-3 font-bold text-center text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
                                Subscribe
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-5 mt-32 text-base font-medium leading-6 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex-auto my-auto">
                        2021 @ JobHuntly. All rights reserved.
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d8029132a057f06f45ef2418c149d887c9c5fec64095ace05c1229c91a8a2d2?"
                        className="shrink-0 w-64 max-w-full aspect-[7.69]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer