import { Field, Formik } from "formik"
import { socialLinks, socialLinksValidation } from "src/validation/company"

function SocialLinks() {

  function handleSubmit() {

  }

  return (
    <div className="flex flex-col justify-center p-8 bg-white max-md:px-5">
      <Formik
        initialValues={socialLinks}
        validationSchema={socialLinksValidation}
        onSubmit={handleSubmit}
      >
        <div className="max-md:max-w-full">
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
                <div className="max-md:max-w-full">Instagram</div>
                <Field name='instagram' className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />
                <div className="mt-6 max-md:max-w-full">Twitter</div>
                <Field name='twitter' className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />
                <div className="mt-6 max-md:max-w-full">Facebook</div>
                <Field name='facebook' className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />
                <div className="mt-6 max-md:max-w-full">LinkedIn</div>
                <Field name='linkedIn' className="justify-center items-start px-4 py-3 mt-1 text-gray-400 bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />
                <div className="mt-6 max-md:max-w-full">Youtube</div>
                <Field name='youtube' className="justify-center items-start px-4 py-3 mt-1 text-gray-400 bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />
              </div>
            </div>
          </div>
        <div className="justify-center self-end px-10 py-3.5 mt-12 text-lg font-bold leading-7 text-center text-white bg-indigo-600 max-md:px-5 max-md:mt-10">
          Save Changes
        </div>
        </div>
      </Formik>
    </div>
  )
}

export default SocialLinks