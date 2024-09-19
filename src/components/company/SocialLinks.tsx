import { Field, Form, Formik, FormikValues } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { updateSocialLinks } from "src/redux/actions/companyAction";
import { AppDispatch, RootState } from "src/redux/store";
import { socialLinksValidation } from "src/validation/company"

function SocialLinks() {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.user);
  const socialLinks = {
    twitter: state?.user?.socialLinks?.[0] || '',
    youtube: state?.user?.socialLinks?.[1] || '',
    facebook: state?.user?.socialLinks?.[2] || '',
    instagram: state?.user?.socialLinks?.[3] || '',
    LinkedInLink: state?.user?.LinkedInLink || '',
  }

  async function handleSubmit(values: FormikValues) {
    try {
      await dispatch(updateSocialLinks(values)).unwrap()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col justify-center p-8 bg-white max-md:px-5">
      <Formik
        initialValues={socialLinks}
        validationSchema={socialLinksValidation}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
          <Form className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="hidden md:flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base leading-7 max-md:mt-10">
                  <div className="font-semibold text-slate-800">
                    Basic Information
                  </div>
                  <div className="mt-1 text-slate-500">
                    Add elsewhere links to your company profile. You can add only
                    username without full https links.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">

                <div className="flex flex-col grow text-base font-semibold leading-6 text-slate-600 max-md:mt-10 max-md:max-w-full">
                  <div className="max-md:max-w-full">
                    Instagram
                    {
                      typeof errors?.instagram == 'string' && <span className="text-red-600"> {errors?.instagram} </span>
                    }
                  </div>
                  <Field name='instagram' className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />

                  <div className="mt-6 max-md:max-w-full">
                    Twitter
                    {
                     typeof errors?.twitter == 'string' && <span className="text-red-600"> {errors?.twitter} </span>
                    }
                  </div>
                  <Field name='twitter' className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />

                  <div className="mt-6 max-md:max-w-full">
                    Facebook
                    {
                     typeof errors?.facebook == 'string' && <span className="text-red-600"> {errors?.facebook} </span>
                    }
                  </div>
                  <Field name='facebook' className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />

                  <div className="mt-6 max-md:max-w-full">
                    LinkedIn
                    {
                      typeof errors?.LinkedInLink == 'string' && <span className="text-red-600"> ( {errors?.LinkedInLink} ) </span>
                    }
                  </div>
                  <Field name='LinkedInLink' className="justify-center items-start px-4 py-3 mt-1 text-gray-400 bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />

                  <div className="mt-6 max-md:max-w-full">
                    Youtube
                    {
                      typeof errors?.youtube == 'string' && <span className="text-red-600"> {errors?.youtube} </span>
                    }
                  </div>
                  <Field name='youtube' className="justify-center items-start px-4 py-3 mt-1 text-gray-400 bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />

                </div>
              </div>
            </div>
            <button type="submit" className="relative top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 px-10 py-3.5 mt-12 text-lg font-bold leading-7 text-center text-white bg-indigo-600 max-md:px-5 max-md:mt-10">
              Save Changes
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SocialLinks