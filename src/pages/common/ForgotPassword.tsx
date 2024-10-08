import { Navbar } from "@nextui-org/react"
import { Field, Form, Formik, FormikValues } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { forgotPassword } from "src/redux/actions/userAction"
import { AppDispatch, RootState } from "src/redux/store"
import { forgotPasswordValidation } from "src/validation/common/signup-validation"

const initialValues = {
  newPassword: '',
  confirmPassword: ''
}

function ForgotPassword() {

  const dispath: AppDispatch = useDispatch()
  const state = useSelector((state: RootState) => state.user)
  const navigate = useNavigate()

  async function handleSubmit(values: FormikValues) {
    try {
      const value = {
        ...values,
        email:state.user?.email
      }
      const data = await dispath(forgotPassword(value)).unwrap()
      console.log(data)
      if (data) {
        toast.success('password updated succesfully', { position: 'top-center' })
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div className="flex  max-md:flex-col max-md:gap-0">
        <div className="hidden md:flex flex-col w-[50%] ">
          <div className="flex flex-col">
            <div className="flex gap-5 justify-between items-start pl-16 bg-slate-50 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
              <div className="flex flex-col mt-7">
                <div className="flex gap-3 self-end text-2xl font-bold tracking-tight leading-9 text-gray-800 whitespace-nowrap">

                </div>
                <div className="flex flex-col px-8 py-6 mt-28 w-full bg-white max-md:px-5 max-md:mt-10">
                  <div className="flex gap-2 items-start max-md:pr-5">
                    <div className="shrink-0 mt-5 w-2 bg-indigo-600 h-[22px] rounded-[40px]" />
                    <div className="shrink-0 mt-2.5 w-2 bg-indigo-600 h-[30px] rounded-[40px]" />
                    <div className="shrink-0 mt-2.5 w-2 bg-indigo-600 h-[30px] rounded-[40px]" />
                    <div className="shrink-0 self-stretch w-2 h-10 bg-indigo-600 rounded-[40px]" />
                  </div>
                  <div className="mt-7 text-xl font-bold tracking-normal leading-5 text-gray-800">
                    100K+
                  </div>
                  <div className="mt-3.5 text-base leading-6 text-gray-800">
                    People got hired
                  </div>
                </div>
              </div>
              <div className="shrink-0 w-px bg-zinc-300 h-[630px]" />
            </div>

          </div>
        </div>
        <div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col h-full justify-center px-16 w-full text-base bg-white max-md:px-5 max-md:max-w-full">

            <div className="flex flex-col pt-3 sm:pt-0 pb-1 mx-8 bg-white max-md:mx-2.5">
              <div className="flex gap-0 justify-center self-center font-semibold text-indigo-600 leading-[160%]">


              </div>
              <div className="mt-3 text-1xl sm:text-3xl font-semibold leading-10 text-center text-gray-800">
                Welcome back dude{" "}
              </div>
              <div className="flex justify-center items-center px-4 py-3 mt-6 font-bold text-center text-indigo-600 border border-indigo-200 border-solid leading-[160%] max-md:px-5">
                <div className="flex gap-2.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2019ff383b243dae561ad6a469db084ba563760d8f4bb4a2722edf42f5a32861?"
                    className="shrink-0 my-auto w-5 aspect-square"
                  />
                  <div>Login with Google</div>
                </div>
              </div>
              <div className="flex gap-2 items-center py-1 mt-3 text-center text-gray-800 leading-[160%]">
                <div className="hidden shrink-0 self-stretch my-auto h-px border border-solid bg-zinc-200 border-zinc-200 w-[109px]" />
                <div className="flex-auto self-stretch">
                  Or login up with email
                </div>
                <div className="hidden shrink-0 self-stretch my-auto h-px border border-solid bg-zinc-200 border-zinc-200 w-[104px]" />
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={forgotPasswordValidation}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, errors }) => (
                  <>
                    <Form className="flex flex-col">

                      <div className="mt-4 font-semibold leading-[160%] text-slate-600">
                        Password
                        <span className="text-red-600">
                          {
                            errors?.newPassword && '(' + errors.newPassword + ')' ||
                            state?.err && (state?.err as string).includes('user') && '(' + state?.err + ")"
                          }
                        </span>
                      </div>
                      <Field
                        placeholder=' Enter email address'
                        className='justify-center items-start px-3 py-2 mt-1 text-gray-500 bg-white border border-solid border-zinc-200 leading-[160%] max-md:pr-5'
                        type="text"
                        name='newPassword'
                      />

                      <div className="mt-4 font-semibold leading-[160%] text-slate-600">
                        Confirm password
                        <span className="text-red-600">
                          {
                            errors?.confirmPassword && '(' + errors.confirmPassword + ')' ||
                            state?.err && (state?.err as string).includes('password') && '(' + state?.err + ")"
                          }
                        </span>
                      </div>
                      <Field
                        name='confirmPassword'
                        placeholder=' Enter password'
                        className='justify-center items-start px-3 py-2 mt-1 text-gray-500 bg-white border border-solid border-zinc-200 leading-[160%] max-md:pr-5'
                        type="text"
                      />

                      {
                        isSubmitting ? (
                          <button className="justify-center items-center px-6 py-3 mt-6 font-bold text-center text-white whitespace-nowrap bg-indigo-600 leading-[160%] max-md:px-5">
                            Updating..
                          </button>
                        ) : (
                          <button type="submit" disabled={isSubmitting} className="justify-center items-center px-6 py-3 mt-6 font-bold text-center text-white whitespace-nowrap bg-indigo-600 leading-[160%] max-md:px-5">
                            Upadate
                          </button>
                        )
                      }

                    </Form>
                  </>
                )}
              </Formik>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword