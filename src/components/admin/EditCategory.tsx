import { Field, Form, Formik, FormikValues } from 'formik'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom'
import { updateCategory } from 'src/redux/actions/adminAction';
import { AppDispatch } from 'src/redux/store';
import { prop } from 'src/types/AllTypes';
import { AddCategoryValidation } from 'src/validation/admin'

function EditCategory() {

    const context = useOutletContext<prop>() || {};
    const { open } = context;
    const location = useLocation()
    const navigate = useNavigate()
    const { state } = location
    const dispatch:AppDispatch = useDispatch()
    async function handleSubmit(values) {
        try {
            let data = {
                ...state,
                ...values
            }
            const res =  dispatch(updateCategory(data)).unwrap()
            return navigate('/admin/home/category')
        } catch (error) {
            console.log(error)
        }
    }

    const EditCategoryInitialValues = {
        name: state?.name,
        description: state?.description
    }

    return (
        <div className={`flex flex-col ml-2 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 px-0 sm:px-10 py-5 max-md:w-full text-zinc-800 `}>
            <Formik
                initialValues={EditCategoryInitialValues}
                validationSchema={AddCategoryValidation}
                onSubmit={handleSubmit}
            >
                {({ errors, isSubmitting }) => (
                    <Form>

                        <div className='w-full flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center '>
                            <div className='w-full sm:w-1/2 flex flex-col items-start'>
                                <span className='font-bold text-xl'>Category name</span>
                            </div>
                            <div className='w-full sm:w-1/2 flex flex-col items-start'>
                                <span className='text-red-600'>
                                    {
                                        typeof errors?.name === 'string' && errors.name
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
                                        typeof errors?.description == 'string' && errors?.description
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
                                <span className='text-red-600'>
                                    {/* {
                                        errors?.image && (
                                            errors?.image
                                        )
                                    } */}
                                </span>
                                <input
                                    type="file"
                                    // onChange={handleFileChange}
                                    className='border border-solid border-zinc-200 focus:border-zinc-500 focus:outline-none p-2'
                                />
                                <span className='font-sans'>atleast 50 character</span>
                            </div>
                        </div>
                        <hr />
                        <div className='w-full flex sm:justify-end mt-5'>
                            <div className='w-1/2 flex flex-col items-start'>
                                {
                                    state?.image && (
                                        <img src={state?.image} alt="" className='w-80 h-72' />
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

export default EditCategory