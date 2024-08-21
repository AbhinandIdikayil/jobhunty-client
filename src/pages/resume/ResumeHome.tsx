import './Resume.css'
import ResumeNameModal from 'src/components/resume/ResumeNameModal';
import { ResumeContextProvider } from 'src/context/ResumeContext';

function ResumeHome() {
;
    return (
        <ResumeContextProvider>
            {/* <div className={`${open ? 'w-full' : 'w-full'} px-0 sm:px-10 py-5 text-zinc-800 `}>
                <div className='wrapper justify-center sm:justify-normal'>
                    <div className='box text-black bg-gray-100 relative shadow-lg'>
                        <div className='flex justify-center items-center h-full'>
                            <ResumeNameModal />
                        </div>
                        <div className='absolute bottom-0 left-0 w-full flex items-center justify-center  text-indigo-600 font-bold capitalize text-sm'>
                            title
                        </div>
                    </div>
                    <div className='box'>asd</div>
                </div>
            </div> */}
            <div className="bg-slate-800 w-full font-body justify-around lg:px-[100px] flex items-center h-[550px] text-white rounded-2xl shadow-xl">
                <div className="animate-topslide lg:py-16 w-full ">
                    <p className="text-[30px] text-bold mb-4">Resume Builder</p>
                    <h1 className="text-bold  text-gray-400 text-[18px]">
                        Create an AI generated resume using AI
                    </h1>
                    <div className="flex gap-4  w-full flex-wrap">
                        <button
                            className="relative  inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group"
                        >
                            <span className="absolute top-0 left-0 w-20 h-40 -mt-10 -ml-3 transition-all duration-700 bg-teal-600 rounded-full blur-md ease"></span>
                            <span className="absolute inset-0 w-full bg-teal-500 h-full transition duration-700  ease">
                                <span className="absolute transition-all duration-700  ease group-hover:left-[8rem] bottom-0 left-0 w-[12rem] h-24 -ml-10 bg-[#5227C7] rounded-full blur-md"></span>
                                <span className="absolute transition-all duration-700  ease group-hover:left-0 bottom-0 right-0 w-[10rem] h-24 -mr-10 bg-teal-400 rounded-full blur-md"></span>
                            </span>
                            <span className="relative text-white flex gap-2">
                                <ResumeNameModal />
                                Create resume
                            </span>
                        </button>
                        <button
                            className="  border-2 after:w-full  hover:border-indigo-700  transition-all border-teal-600 px-6 py-3 rounded-md"
                        >
                            Create cover letter
                        </button>
                    </div>
                </div>

                <div className='hidden sm:block'>
                    <img
                        alt="gif"
                        className="animate-topslide -mt-24 md:mt-12 max-h-[450px]"
                        src="https://github.com/bellatrick/resume-builder/blob/main/public/gif3.gif?raw=true"
                    />
                </div>

            </div>
        </ResumeContextProvider>
    )
}

export default ResumeHome