import { useOutletContext } from 'react-router-dom';
import { prop } from 'src/types/AllTypes';
import './Resume.css'
import ResumeNameModal from 'src/components/resume/ResumeNameModal';

function ResumeHome() {

    const context = useOutletContext<prop>() || {};
    const { open } = context;
    return (
        <div className={`${open ? 'w-full' : 'w-full'} px-0 sm:px-10 py-5 text-zinc-800 `}>
            <div className='wrapper justify-center sm:justify-normal'>
                <div className='box text-black bg-gray-100 relative shadow-lg'>
                    <div className='flex justify-center items-center h-full'>
                        <ResumeNameModal  />
                    </div>
                    <div className='absolute bottom-0 left-0 w-full flex items-center justify-center  text-indigo-600 font-bold capitalize text-sm'>
                        title
                    </div>
                </div>
                <div className='box'>asd</div>
            </div>
        </div>
    )
}

export default ResumeHome