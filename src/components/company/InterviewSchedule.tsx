import { TabsContent } from '@radix-ui/react-tabs'
import { PlusIcon } from 'lucide-react'
import AddInterview from './AddInterview'
import { useState } from 'react'

function InterviewSchedule() {
    const [open,setOpen] = useState<boolean>(false)
    return (
        <TabsContent value='interview'>
            <div className="flex flex-col leading-relaxed max-w-[688px] h-full px-1 ">
                <div className="flex flex-wrap gap-10 justify-between items-center w-full text-base max-md:max-w-full border-2 mt-4 px-2">
                    <div className="self-stretch my-auto font-semibold text-slate-800">
                        Interview List
                    </div>
                    <AddInterview open={open} setOpen={setOpen} />
                </div>
                <div className="chat flex flex-col mt-4 w-full h-[700px] overflow-y-auto shadow-md">
                    <div className="flex flex-col w-full max-md:max-w-full">
                        <div className="text-sm text-slate-500">Tomorrow - 10 July, 2021</div>
                        <div className="flex flex-wrap gap-4 justify-between items-center p-4 mt-2 w-full bg-white border border-solid border-zinc-200 max-md:max-w-full">
                            <div className="flex gap-4 items-center self-stretch my-auto w-[204px]">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38331d5a49a5d55104e7e3321c96011b53a42c275725fa220c6a4901a848d5be?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38331d5a49a5d55104e7e3321c96011b53a42c275725fa220c6a4901a848d5be?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38331d5a49a5d55104e7e3321c96011b53a42c275725fa220c6a4901a848d5be?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38331d5a49a5d55104e7e3321c96011b53a42c275725fa220c6a4901a848d5be?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38331d5a49a5d55104e7e3321c96011b53a42c275725fa220c6a4901a848d5be?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38331d5a49a5d55104e7e3321c96011b53a42c275725fa220c6a4901a848d5be?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38331d5a49a5d55104e7e3321c96011b53a42c275725fa220c6a4901a848d5be?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38331d5a49a5d55104e7e3321c96011b53a42c275725fa220c6a4901a848d5be?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                    className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                                />
                                <div className="flex flex-col self-stretch my-auto">
                                    <div className="text-base font-semibold text-slate-800">
                                        Kathryn Murphy
                                    </div>
                                    <div className="text-sm text-slate-500">Written Test</div>
                                </div>
                            </div>
                            <div className="flex flex-col self-stretch my-auto w-[189px]">
                                <div className="text-base font-medium text-slate-800">
                                    10:00 AM - 11:30 AM
                                </div>
                                <div className="text-sm text-slate-500">
                                    Silver Crysta Room, Nomad
                                </div>
                            </div>
                            <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-3 my-auto text-base font-bold text-center text-indigo-600 border border-indigo-200 border-solid">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/118c533b3f327b8a9072dde626808c96e5ed7cd5220d6966a13826bc0f21d346?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                                />
                                <div className="self-stretch my-auto">Add Feedback</div>
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f79d3f8d41765804183d2ddbc2a6fab5e35395687e8ce8558fd2b25391b7711?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </TabsContent>
    )
}

export default InterviewSchedule


