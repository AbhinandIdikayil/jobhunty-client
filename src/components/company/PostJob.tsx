import { useOutletContext } from 'react-router-dom';
import { prop } from 'src/types/AllTypes';

function PostJob() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;



    return (
        <div className={`flex flex-col ml-2 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 px-0 sm:px-10 py-5 max-md:w-full text-zinc-600`}>
            <div className='w-full flex justify-between items-center '>
                <div className='w-1/2 flex flex-col items-start'>
                    <span className='font-bold text-xl'>Job title</span>
                    <label htmlFor="" className='font-sans'>
                        job title must be describing one position
                    </label>
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                    <input type="text" className='border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2' />
                    <span className='font-sans'>atleast 50 character</span>
                </div>
            </div>
            <hr />
            <div className='w-full flex justify-between items-center mt-5'>
                <div className='w-1/2 flex flex-col items-start'>
                    <span className='font-bold text-xl'>Types of employment</span>
                    <label htmlFor="" className='font-sans'>
                        select single type of employment
                    </label>
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                    <input type="text" className='border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2' />
                    <span className='font-sans'>atleast 50 character</span>
                </div>
            </div>
            <hr />
            <div className='w-full flex justify-between items-center mt-5'>
                <div className='w-1/2 flex flex-col items-start'>
                    <span className='font-bold text-xl'>Salary</span>
                    <label htmlFor="" className='font-sans'>
                        Please specify  the estimated salary range for the role
                    </label>
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                    <input type="text" className='border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2' /> <br />
                    <input type="text" className='border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2' />
                    <span className='font-sans'>atleast 50 character</span>
                </div>
            </div>
            <hr />
            <div className='w-full flex justify-between items-center mt-5'>
                <div className='w-1/2 flex flex-col items-start'>
                    <span className='font-bold text-xl'>Categories</span>
                    <label htmlFor="" className='font-sans'>
                        select single type of employment
                    </label>
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                    <input type="text" className='border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2' />
                    <span className='font-sans'>atleast 50 character</span>
                </div>
            </div>
            <hr />
            <div className='w-full flex justify-between items-center mt-5'>
                <div className='w-1/2 flex flex-col items-start'>
                    <span className='font-bold text-xl'>Required skills</span>
                    <label htmlFor="" className='font-sans'>
                        select single type of employment
                    </label>
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                    <input type="text" className='border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2' />
                    <span className='font-sans'>atleast 50 character</span>
                </div>
            </div>
            <hr />
            <div className='w-full flex justify-between items-center mt-5'>
                <div className='w-1/2 flex flex-col items-start'>
                    <span className='font-bold text-xl'>Job descriptions</span>
                    <label htmlFor="" className='font-sans'>
                        select single type of employment
                    </label>
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                    <input type="text" className='border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2' />
                    <span className='font-sans'>atleast 50 character</span>
                </div>
            </div>
            <hr />
            <div className='w-full flex justify-between items-center mt-5'>
                <div className='w-1/2 flex flex-col items-start'>
                    <span className='font-bold text-xl'>Responsibilities</span>
                    <label htmlFor="" className='font-sans'>
                        select single type of employment
                    </label>
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                    <input type="text" className='border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2' />
                    <span className='font-sans'>atleast 50 character</span>
                </div>
            </div>
            <hr />
            <div className='w-full flex justify-between items-center mt-5'>
                <div className='w-1/2 flex flex-col items-start'>
                    <span className='font-bold text-xl'>Who you are</span>
                    <label htmlFor="" className='font-sans'>
                        Add your preferred candidates qualifiacations
                    </label>
                </div>
                <div className='w-1/2 flex flex-col items-start'>
                    <input type="text" className='border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2' />
                    <span className='font-sans'>atleast 50 character</span>
                </div>
            </div>
            <hr />

        </div>
    )
}

export default PostJob