import React from 'react'

function UsersListing() {
    return (

        <>
            <div className="shrink-0 bg-white shadow-sm h-[114px] max-md:max-w-full" />
            <div className="justify-center items-center text-2xl font-bold leading-7 bg-white text-slate-800 max-md:px-5 max-md:max-w-full">
                Good morning, Admin
            </div>
            <div className="flex flex-col justify-center py-6 mt-2.5 text-base leading-6 bg-white max-md:max-w-full">
                <div className="flex gap-0 px-3.5 pb-6 font-medium text-gray-800 bg-white shadow-sm max-md:flex-wrap">
                    <div className="self-start">#</div>
                    <div className="flex-1 max-md:max-w-full">User name</div>
                </div>
                <div className="flex gap-5 px-3.5 py-6 w-full bg-white text-slate-800 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-0 whitespace-nowrap">
                        <div className="my-auto">1</div>
                        <div className="flex gap-2">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd61731815318ad57dd1af1adb26ce8a28c0fd40d82f3aae351e9674621d22c0?apiKey=bf80438c4595450788b907771330b274&"
                                className="shrink-0 w-10 aspect-square"
                            />
                            <div className="flex-1 my-auto">shahad</div>
                        </div>
                    </div>
                    <div className="flex-1 my-auto max-md:max-w-full">
                        24 July 2021
                    </div>
                </div>
                <div className="flex gap-5 px-3.5 py-6 w-full bg-slate-50 text-slate-800 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex gap-0 whitespace-nowrap">
                        <div className="my-auto">2</div>
                        <div className="flex gap-2">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8bba6e8248ac48b0dc82f62c6a3be426169d22e16505cfa59e0d4a061c6ed7e7?apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bba6e8248ac48b0dc82f62c6a3be426169d22e16505cfa59e0d4a061c6ed7e7?apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bba6e8248ac48b0dc82f62c6a3be426169d22e16505cfa59e0d4a061c6ed7e7?apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bba6e8248ac48b0dc82f62c6a3be426169d22e16505cfa59e0d4a061c6ed7e7?apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bba6e8248ac48b0dc82f62c6a3be426169d22e16505cfa59e0d4a061c6ed7e7?apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bba6e8248ac48b0dc82f62c6a3be426169d22e16505cfa59e0d4a061c6ed7e7?apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bba6e8248ac48b0dc82f62c6a3be426169d22e16505cfa59e0d4a061c6ed7e7?apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8bba6e8248ac48b0dc82f62c6a3be426169d22e16505cfa59e0d4a061c6ed7e7?apiKey=bf80438c4595450788b907771330b274&"
                                className="shrink-0 w-10 aspect-square"
                            />
                            <div className="my-auto">sreeram</div>
                        </div>
                    </div>
                    <div className="flex-1 my-auto max-md:max-w-full">
                        20 July 2021
                    </div>
                </div>
                <div className="flex gap-0 py-6 pr-6 pl-3.5 whitespace-nowrap bg-white text-slate-800 max-md:flex-wrap max-md:pr-5">
                    <div className="my-auto">3</div>
                    <div className="flex gap-2">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d4e1f97e1bf16b56d5e6d3d53e3a3ac08e52b60b50a89a8f5631a64d4b3e78c?apiKey=bf80438c4595450788b907771330b274&"
                            className="shrink-0 w-10 aspect-square"
                        />
                        <div className="flex-1 my-auto">john</div>
                    </div>
                </div>
                <div className="flex gap-2 justify-center items-center self-center pr-7 mt-52 font-semibold text-center whitespace-nowrap max-md:pr-5 max-md:mt-10">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8da6747ee581fb06850d337d7ab751adbb4280b7146d43a52a35713cee72f439?apiKey=bf80438c4595450788b907771330b274&"
                        className="shrink-0 self-stretch my-auto w-6 aspect-square"
                    />
                    <div className="flex gap-5 justify-between self-stretch pr-3">
                        <div className="flex gap-3">
                            <div className="justify-center items-center px-3 py-2.5 text-white bg-green-500 rounded-lg h-[46px] w-[46px]">
                                1
                            </div>
                            <div className="my-auto text-slate-600">2</div>
                        </div>
                        <div className="flex gap-5 justify-between my-auto text-slate-600">
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div>...</div>
                            <div>33</div>
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2566b3b3cbf6f9ba32693ce3cab8460c2bad37f99f71f1724b0a92700adc9681?apiKey=bf80438c4595450788b907771330b274&"
                        className="shrink-0 self-stretch my-auto aspect-[1.04] w-[25px]"
                    />
                </div>
            </div>

        </>
    )
}

export default UsersListing