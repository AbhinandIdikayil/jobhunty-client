import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import TypeDate from '../common/TypeDate'
import { LocationInput } from '../common/LocationInput'
import { companyProfile, companyProfileInitialState } from '../../validation/company/index'
import TechStackInput from '../common/TechStackInput'
import { CalendarDate } from '@internationalized/date'

function Overview() {

    const [locations, setLocation] = useState<any[]>([]);
    const [stacks, setStacks] = useState<any[]>([]);
    const [imagePreview, setImagePreview] = useState('')
    const [date,setDate] = useState(new CalendarDate(2024, 7, 15))
    const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target?.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                  setImagePreview(reader.result);
                } else {
                  console.error('FileReader result is not a string');
                }
              };
        
            reader.readAsDataURL(file);
        }
    }

    function handleSubmit() {

    }
    return (
        <div className="flex flex-col justify-center p-3 w-full bg-white max-md:px-5 max-md:max-w-full">
            <div className="self-start text-lg font-semibold leading-7 text-slate-800 max-md:max-w-full">
                Basic Information
            </div>
            <div className="self-start mt-1 text-base leading-6 text-slate-500 max-md:max-w-full">
                This is company information that you can update anytime.
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-base leading-7 max-md:mt-10">
                            <div className="font-semibold text-slate-800">Company Logo</div>
                            <div className="mt-1 text-slate-500">
                                This image will be shown publicly as company logo.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
                        <div className="grow max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex items-center justify-center w-full">
                                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            {imagePreview ? (
                                                <img src={imagePreview} alt="Preview" className="w-full h-full object-contain" />
                                            ) : (
                                                <>
                                                    <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                    </svg>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                        <span className="font-semibold">Click to upload</span> or drag and drop
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </>
                                            )}
                                        </div>
                                        <input id="dropzone-file" type="file" onChange={handleFileChange} className="hidden" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[34%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-base leading-7 max-md:mt-10">
                            <div className="font-semibold text-slate-800">
                                Company Details
                            </div>
                            <div className="mt-1 text-slate-500">
                                Introduce your company core info quickly to users by fill up
                                company details
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[66%] max-md:ml-0 max-md:w-full">
                        <Formik
                            initialValues={companyProfileInitialState}
                            onSubmit={handleSubmit}
                            validationSchema={companyProfile}
                        >
                            {
                                ({errors}) => (
                                    <Form>
                                        <div className="flex flex-col grow text-base leading-6 text-slate-600 max-md:mt-10 max-md:max-w-full">
                                            <div className="font-semibold max-md:max-w-full">
                                                Company Name
                                            </div>
                                            <Field name='name' className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />
                                            <div className="mt-6 font-semibold max-md:max-w-full">
                                                Website
                                                {
                                                    errors?.website && <span className='text-red-600'> {errors?.website} </span>
                                                }
                                            </div>
                                            <Field name='website' className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />


                                            <LocationInput label='location' name='location' location={locations} setLocation={setLocation} />



                                            <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
                                                <div className="flex flex-col">
                                                    <div className="font-semibold">Employee</div>
                                                    <div className="flex gap-4 justify-between px-4 py-3 mt-1 bg-white border border-solid border-zinc-200 max-md:pr-5">
                                                        <div>1 - 50</div>
                                                        <img
                                                            loading="lazy"
                                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c2cbc77a9e47cd5264c4cb39f8e4e24c8f7f5c131a37388012a72e9cc92af6f?apiKey=bf80438c4595450788b907771330b274&"
                                                            className="shrink-0 my-auto w-5 aspect-square"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col whitespace-nowrap">
                                                    <div className="font-semibold">Industry</div>
                                                    <div className="flex gap-4 justify-between px-4 py-3 mt-1 bg-white border border-solid border-zinc-200 max-md:pr-5">
                                                        <select name="" id="" className='w-[110px]'>
                                                            <option>Technology</option>
                                                            <option>Technology</option>
                                                            <option>Technology</option>
                                                            <option>Technology</option>
                                                            <option>Technology</option>
                                                            <option>Technology</option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>
                                            <TypeDate label='founded-date' name='date' date={date} setDate={setDate} />

                                            <div className="mt-6 font-semibold max-md:max-w-full">
                                                Tech Stack
                                            </div>
                                            <TechStackInput label='stack' name='stack' stacks={stacks} setStacks={setStacks} />

                                            <div className="text-base font-semibold leading-6 text-slate-600 max-md:max-w-full">
                                                Description
                                                {
                                                    errors?.description && <span className='text-red-600'> {errors?.description} </span>
                                                }
                                            </div>
                                            <Field type='textarea' cols='30'
                                                as='textarea'
                                                rows='5' name='description'
                                                label='description'
                                                className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full"
                                            />
                                        </div>
                                        <div className="justify-center self-end px-10 py-3.5 mt-12 text-lg font-bold leading-7 text-center text-white bg-indigo-600 max-md:px-5 max-md:mt-10">
                                            Save Changes
                                        </div>
                                    </Form>
                                )
                            }

                        </Formik>
                    </div>
                </div>
            </div>
            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col text-base leading-7 max-md:mt-10">
                            <div className="font-semibold text-slate-800">
                                About Company
                            </div>
                            <div className="mt-1 text-slate-500">
                                Brief description for your company. URLs are hyperlinked.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Overview