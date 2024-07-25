import { useOutletContext } from 'react-router-dom';
import { prop } from 'src/types/AllTypes';
import { openEditor } from 'react-profile'
import { ChangeEvent, useState } from 'react';
import { Field, Form, Formik, FormikValues } from 'formik';
import { AddCategoryValidation } from 'src/validation/admin';

function AddCategory() {
    const context = useOutletContext<prop>() || {};
    const { open } = context;

    const [dataUrl, setDataUrl] =  useState<string | undefined>(undefined);

    const categoryInitialValue = {
        name: '',
        description: '',
    }

    async function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        console.log('---------')
        if (file) {
            console.log('Selected file:', file.name);
            // Add your file handling logic here
            const image = await openEditor({ src: file });
            if (image && image.editedImage) {
                const dataUrl = image.editedImage.getDataURL();
                setDataUrl(dataUrl); // Call the function to get the URL and then set it
              }
        }
    }
    function handleSubmit(values: FormikValues) {
        console.log(values)
    }

    return (
        <div className={`flex flex-col ml-2 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 px-0 sm:px-10 py-5 max-md:w-full text-zinc-800 `}>
            <Formik
                initialValues={categoryInitialValue}
                validationSchema={AddCategoryValidation}
                onSubmit={handleSubmit}
            >
                {({ errors ,isSubmitting }) => (
                    <Form>

                        <div className='w-full flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center '>
                            <div className='w-full sm:w-1/2 flex flex-col items-start'>
                                <span className='font-bold text-xl'>Category name</span>
                            </div>
                            <div className='w-full sm:w-1/2 flex flex-col items-start'>
                            <span className='text-red-600'>
                                {
                                    errors?.name && (
                                        errors?.name
                                    )
                                }
                            </span>
                                <Field name='name' type="text" className='w-full border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2' />
                                <span className='font-sans'>atleast 50 character</span>
                            </div>
                        </div>
                        <hr />
                        <div className='w-full flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center  mt-5'>
                            <div className='w-1/2 flex flex-col items-start'>
                                <span className='font-bold text-xl'>Category description</span>
                            </div>
                            <div className='w-full sm:w-1/2 flex flex-col items-start'>
                            <span className='text-red-600'>
                                {
                                    errors?.description && (
                                        errors?.description
                                    )
                                }
                            </span>
                                <Field as='textarea' name="description" id="description" className='w-full border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2'>

                                </Field>
                                <span className='font-sans'>atleast 50 character</span>
                            </div>
                        </div>
                        <hr />
                        <div className='w-full flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center mt-5'>
                            <div className='w-1/2 flex flex-col items-start'>
                                <span className='font-bold text-xl'>Upload image</span>
                            </div>
                            <div className='w-1/2 flex flex-col items-start'>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className='border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2'
                                />
                                <span className='font-sans'>atleast 50 character</span>
                            </div>
                        </div>
                        <hr />
                        <div className='w-full flex sm:justify-end mt-5'>
                            <div className='w-1/2 flex flex-col items-start'>
                                {
                                    dataUrl && (
                                        <img src={dataUrl} alt="" className='w-80 h-72' />
                                    )
                                }
                            </div>
                        </div>
                        <button type='submit' disabled={isSubmitting} className='hover:cursor-pointer mt-2 py-2 px-2 bg-indigo-600 sm:w-1/3 text-white font-bold'>
                            save
                        </button>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default AddCategory