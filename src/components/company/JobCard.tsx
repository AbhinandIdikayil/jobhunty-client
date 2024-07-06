
function JobCard() {
    return (
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-6 mx-auto w-full text-sm font-semibold leading-6 bg-white border border-solid border-zinc-200 max-md:pl-5 max-md:mt-10">
                <div className="flex gap-5 justify-between text-emerald-300 whitespace-nowrap">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/98dd67d5b501cec1d613d6591932d51a0221ba22ad9008be452100d6537f275f?apiKey=bf80438c4595450788b907771330b274&"
                        className="shrink-0 w-12 aspect-square"
                    />
                    <div className="justify-center self-start px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                        Full-Time
                    </div>
                </div>
                <div className="mt-4 text-lg text-slate-800">
                    Social Media Assistant
                </div>
                <div className="flex gap-2 justify-between text-base text-slate-500">
                    <div>Nomad</div>
                    <div>Paris, France</div>
                </div>
                <div className="flex gap-2 mt-6 whitespace-nowrap">
                    <div className="justify-center px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                        Marketing
                    </div>
                    <div className="justify-center px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
                        Design
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f222244f5aac6ace1bb71e2d414b3d8448a9027abe1c1ded52d5ee933bcb688d?apiKey=bf80438c4595450788b907771330b274&"
                    className="self-center mt-6 aspect-[33.33] w-[199px]"
                />
                <div className="mt-2 text-center text-slate-500 max-md:mr-1.5">
                    <span className="font-semibold text-slate-800">
                        5 applied
                    </span>{" "}
                    <span className="text-slate-500">of 10 capacity</span>
                </div>
            </div>
        </div>
    )
}

export default JobCard