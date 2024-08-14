import { TabsContent } from '@radix-ui/react-tabs'
import React from 'react'

function HiringProcess() {
    return (
        <TabsContent value='hiring'>
            <div className="flex flex-col max-w-2xl px-2">
                <div className="flex flex-col w-full max-md:max-w-full">
                    {/* <div className="flex flex-wrap gap-10 justify-center items-center leading-relaxed max-md:max-w-full">
                        <div className="self-stretch my-auto text-lg font-semibold text-slate-800">
                            Current Stage
                        </div>
                        <div className="flex gap-2.5 justify-center items-center self-stretch px-4 py-3 my-auto text-base font-bold text-center text-indigo-600 border border-indigo-200 border-solid">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef55382aec5ac31316fc602a6885898ac7059cb796f27596b66562b9cca73d88?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                            />
                            <div className="self-stretch my-auto">Give Rating</div>
                        </div>
                    </div> */}
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/950baa3e74d750e95bed3ae9e6ef26208f400349b222aec756db0737caafea88?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                        className="object-contain mt-5 w-full aspect-[13.51] max-md:max-w-full"
                    />
                    <div className="flex flex-col mt-5 max-w-full w-[538px]">
                        <div className="text-base font-semibold leading-relaxed text-slate-800">
                            Stage Info
                        </div>
                        <div className="flex flex-wrap gap-10 justify-between items-start mt-2 w-full">
                            <div className="flex flex-col items-start text-base min-w-[240px] w-[267px]">
                                <div className="flex flex-col leading-relaxed">
                                    <div className="text-slate-500">Interview Date</div>
                                    <div className="font-medium text-slate-800">
                                        10 - 13 July 2021
                                    </div>
                                </div>
                                <div className="flex flex-col self-stretch mt-6 w-full">
                                    <div className="leading-relaxed text-slate-500">
                                        Interview Location
                                    </div>
                                    <div className="font-medium leading-7 text-slate-800">
                                        Silver Crysta Room, Nomad Office
                                        <br /> 3517 W. Gray St. Utica, Pennsylvania 57867
                                    </div>
                                </div>
                                <div className="gap-2.5 self-stretch px-6 py-3 mt-6 font-bold leading-relaxed text-center text-indigo-200 border border-indigo-200 border-solid bg-slate-50 max-md:px-5">
                                    Move To Next Step
                                </div>
                            </div>
                            <div className="flex flex-col items-start leading-relaxed w-[218px]">
                                <div className="flex flex-col">
                                    <div className="text-base text-slate-500">Interview Status</div>
                                    <div className="gap-2 self-start px-2.5 py-1.5 text-sm font-semibold text-amber-400 bg-orange-400 bg-opacity-10 rounded-[80px]">
                                        On Progress
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 w-24 text-base text-slate-500">
                                    <div>Assigned to</div>
                                    <img
                                        loading="lazy"
                                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/434c187e500f09e375b79f1295ab381b7408ae246468cc8646a7b3dd81d66288?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/434c187e500f09e375b79f1295ab381b7408ae246468cc8646a7b3dd81d66288?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/434c187e500f09e375b79f1295ab381b7408ae246468cc8646a7b3dd81d66288?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/434c187e500f09e375b79f1295ab381b7408ae246468cc8646a7b3dd81d66288?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/434c187e500f09e375b79f1295ab381b7408ae246468cc8646a7b3dd81d66288?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/434c187e500f09e375b79f1295ab381b7408ae246468cc8646a7b3dd81d66288?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/434c187e500f09e375b79f1295ab381b7408ae246468cc8646a7b3dd81d66288?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/434c187e500f09e375b79f1295ab381b7408ae246468cc8646a7b3dd81d66288?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                        className="object-contain w-full aspect-[2.4]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex mt-4 w-full bg-zinc-200 min-h-[1px] max-md:max-w-full" />
                <div className="flex overflow-hidden flex-col mt-4 w-full leading-relaxed max-md:max-w-full">
                    <div className="flex gap-10 justify-between items-center w-full text-base max-md:max-w-full">
                        <div className="self-stretch my-auto font-semibold text-slate-800">
                            Notes
                        </div>
                        <div className="flex gap-2.5 justify-center items-center self-stretch py-3 pl-4 my-auto font-bold text-center text-indigo-600">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/448ba9089429853d2a1bc683f279cd71a009e9d82a4a34ab8bcb7d6ffda6aa2c?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                            />
                            <div className="self-stretch my-auto">Add Notes</div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 items-start p-4 mt-4 bg-white border border-solid border-zinc-200">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                            className="object-contain shrink-0 w-10 aspect-square"
                        />
                        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                            <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
                                <div className="self-stretch my-auto text-base font-semibold text-slate-800">
                                    Maria Kelly
                                </div>
                                <div className="flex gap-2 justify-center items-center self-stretch my-auto text-sm text-slate-500">
                                    <div className="self-stretch my-auto">10 July, 2021</div>
                                    <div className="self-stretch my-auto">11:30 AM</div>
                                </div>
                            </div>
                            <div className="mt-2 text-base leading-7 text-slate-600 max-md:max-w-full">
                                Please, do an interview stage immediately. The design division
                                needs more new employee now
                            </div>
                            <div className="mt-2 text-base font-semibold text-indigo-600 max-md:max-w-full">
                                2 Replies
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-4 items-start p-4 mt-4 bg-white border border-solid border-zinc-200">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32c72a8c6c734d130b16964a2cdf464a23c7b6d1d32711d6a877cd637350df6d?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                            className="object-contain shrink-0 w-10 aspect-square"
                        />
                        <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px] max-md:max-w-full">
                            <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
                                <div className="self-stretch my-auto text-base font-semibold text-slate-800">
                                    Maria Kelly
                                </div>
                                <div className="flex gap-2 justify-center items-center self-stretch my-auto text-sm text-slate-500">
                                    <div className="self-stretch my-auto">10 July, 2021</div>
                                    <div className="self-stretch my-auto">10:30 AM</div>
                                </div>
                            </div>
                            <div className="mt-2 text-base text-slate-600 max-md:max-w-full">
                                Please, do an interview stage immediately.{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </TabsContent>
    )
}

export default HiringProcess