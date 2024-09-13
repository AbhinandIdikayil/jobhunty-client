
function Footer() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex  flex-col items-center px-12 sm:px-32 pt-16 pb-10 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
                    <div className="flex flex-wrap gap-5 justify-between items-start max-md:max-w-full">
                        <div className="flex flex-col">
                            <div className="flex gap-2 self-start text-2xl font-bold tracking-tight text-white whitespace-nowrap">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/40550eadec7bbc460f9ee4be4291e780f8963001faa5df2daa66f0614767c8b9?"
                                    className="shrink-0 aspect-[1.35] w-[43px]"
                                />
                                <div className="basis-auto">JobHuntly</div>
                            </div>
                            <div className="mt-8 text-xl leading-8 text-white">
                                Great platform for the job seeker that passionate about
                                startups. Find your dream job easier.
                            </div>
                        </div>
                        <div className="flex flex-col self-stretch leading-relaxed">
                            <div className="self-start text-lg font-semibold text-white">
                                About
                            </div>
                            <div className="flex flex-col mt-5 text-base text-white">
                                <div>Companies</div>
                                <div className="mt-4">Pricing</div>
                                <div className="mt-4">Terms</div>
                                <div className="mt-4">Advice</div>
                                <div className="mt-4">Privacy Policy</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start text-base leading-relaxed text-white">
                            <div className="self-stretch text-lg font-semibold text-white">
                                Resources
                            </div>
                            <div className="mt-5">Help Docs</div>
                            <div className="mt-6">Guide</div>
                            <div className="mt-6">Updates</div>
                            <div className="mt-6">Contact Us</div>
                        </div>
                        {/* <div className="flex flex-col items-start text-base leading-relaxed">
                            <div className="text-lg font-semibold text-white">
                                Get job notifications
                            </div>
                            <div className="mt-5 leading-7 text-white">
                                The latest job news, articles, sent to your inbox weekly.
                            </div>
                            <div className="flex gap-2 items-start self-stretch mt-10">
                                <div className="gap-2.5 self-stretch px-4 py-3 text-gray-400 bg-white border border-solid border-zinc-200 w-[223px]">
                                    Email Address
                                </div>
                                <div className="gap-2.5 self-stretch px-6 py-3 font-bold text-center text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
                                    Subscribe
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/952d6d8de5a60a59be33590795d23544dcb9a79cdebfef402ce60593d73463c2?apiKey=bf80438c4595450788b907771330b274&"
                        className="object-contain mt-20 w-full rounded-none max-md:mt-10 max-md:max-w-full"
                    />
                    <div className="flex flex-wrap gap-5 justify-between mt-10 text-base font-medium leading-relaxed text-white max-md:max-w-full">
                        <div className="my-auto">
                            2021 @ JobHuntly. All rights reserved.
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddac5565f16886e1ffde1d96d549eb0440cc328883ea806c8136d1709475ad8d?apiKey=bf80438c4595450788b907771330b274&"
                            className="object-contain shrink-0 w-64 max-w-full aspect-[8]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
