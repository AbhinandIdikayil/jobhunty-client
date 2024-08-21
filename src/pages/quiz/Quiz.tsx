
function Quiz() {
    return (
        <div className="flex flex-wrap items-center text-sm bg-slate-900 h-full sm:h-[532px] rounded-2xl">
            <div className="flex flex-col w-1/2">
                <div className="flex flex-col items-start py-8 pr-16 pl-8 w-full bg-blend-difference max-md:px-5">
                    <div className="text-4xl text-white font-bold">
                        <span className="font">Learn </span>
                        <br />
                        <span className="font text-indigo-600 w-full text-2xl sm:text-4xl">new concepts</span>
                        <br />
                        <span className="text-lg sm:text-4xl w-full">for each question</span>
                    </div>
                    <div className="mt-12 ml-3 text-white tracking-widest max-md:mt-10 max-md:ml-2.5">
                        We help you prepare for exams and quizes{" "}
                    </div>
                    <div className="flex gap-5 justify-between mt-10 max-w-full w-[158px]">
                        <div className="px-5 py-3 font-bold text-white shadow-lg max-md:pr-5 bg-indigo-600 rounded shadow-black hover:-translate-y-1 duration-300">
                            Start solving
                        </div>
                    </div>
                </div>
            </div>
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfd455dc37509ebc0a93c6302f9ba12d37e7aea2e54e33943604da56e73f26cf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                className="object-contain rounded-none aspect-[0.97] min-w-[240px] w-[359px]"
            />
        </div>
    )
}

export default Quiz

