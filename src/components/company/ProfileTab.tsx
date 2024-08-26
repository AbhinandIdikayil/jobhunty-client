import { TabsContent } from '@/components/ui/tabs'

function ProfileTab({name,about,experiences,education,skills}:{name:string | null,about:string | null,experiences:any[],education:any[],skills:any[]}) {
    return (
        <TabsContent value='profile'>
            <div className="flex flex-col mt-6 px-4 max-w-full w-[672px]">
                <div className="flex flex-col items-start w-full max-w-2xl max-md:max-w-full">
                    <div className="self-stretch text-lg font-semibold leading-relaxed text-slate-800">
                        Personal Info
                    </div>
                    <div className="flex gap-5 justify-between items-start mt-4 max-w-full leading-relaxed w-[456px]">
                        <div className="flex flex-col">
                            <div className="flex flex-col self-start">
                                <div className="text-slate-500">Name</div>
                                <div className="font-medium text-slate-800 capitalize">
                                    {name || ''}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col">
                                <div className="text-slate-500">Language</div>
                                <div className="font-medium text-slate-800">
                                    English, French, Bahasa
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-4 max-w-full w-[232px]">
                        {/* <div className="leading-relaxed text-slate-500">Address</div>
                                        <div className="font-medium leading-7 text-slate-800">
                                            4517 Washington Ave. Manchester, Kentucky 39495
                                        </div> */}
                    </div>
                </div>
                <div className="flex mt-6 w-full bg-zinc-200 min-h-[1px] max-md:max-w-full" />
                <div className="flex flex-col mt-6 w-full max-w-2xl max-md:max-w-full">
                    <div className="text-lg font-semibold leading-relaxed text-slate-800">
                        Professional Info
                    </div>
                    <div className="flex flex-col mt-4 w-full">
                        <div className="leading-relaxed text-slate-500">About Me</div>
                        <div className="flex flex-col mt-2 w-full font-medium leading-7 bg-white text-slate-800">
                            <div className="max-md:max-w-full">
                                {
                                    about || ''
                                }

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-5 items-start mt-4 w-full leading-relaxed max-md:max-w-full">
                        <div className="flex flex-col">
                            <div className="flex flex-col self-start">
                                <div className="text-slate-500">Current Job</div>
                                <div className="font-medium text-slate-800">
                                    {
                                        // state?.applicant?.userId?.
                                        experiences?.map((data: any) => data?.working ? data?.title : '')
                                    }
                                </div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <div className="text-slate-500">
                                    Highest Qualification Held
                                </div>
                                {
                                    // state?.applicant?.userId?.
                                    education?.map((data,ind:number) => (
                                        <div key={data +''+ind} className="font-medium text-slate-800">
                                            {data?.course}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex flex-col min-w-[240px]">
                            <div className="flex flex-col self-start">
                                <div className="text-slate-500">Experience in Years</div>
                                <div className="font-medium text-slate-800">4 Years</div>
                            </div>
                            <div className="flex flex-col mt-4">
                                <div className="text-slate-500">Skill set</div>
                                <div className="flex gap-1 items-start text-indigo-600">
                                    {
                                        // state?.applicant?.userId?.
                                        skills?.map((data,ind:number) => (
                                            <div key={data +''+ind} className="gap-4 self-stretch px-3 py-1 bg-slate-50">
                                                {data}
                                            </div>
                                        ))
                                    }
                                    <div className="gap-4 self-stretch px-3 py-1 whitespace-nowrap bg-slate-50">
                                        English
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TabsContent>
    )
}

export default ProfileTab