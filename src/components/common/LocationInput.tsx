import { Field } from 'formik'
import React from 'react'

function LocationInput() {
    return (
        <>
            <div className="flex gap-4 justify-between py-2 pr-4 pl-2 mt-1 w-full text-indigo-600 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-2">
                    <div className="flex gap-2 justify-center py-1 pr-1 pl-3 bg-slate-50">
                        <div>Japan</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1859abf7f3470b37c0a63be98e1295b54416633457ba5c2a1714cab6094149dd?apiKey=bf80438c4595450788b907771330b274&"
                            className="shrink-0 my-auto w-5 aspect-square"
                        />
                    </div>
                    <div className="justify-center items-start py-1 pr-1 pl-3 bg-slate-50">
                        Australia
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a4c9b6ac0519af150be98b3ffc93bcf7538c334904ecc263e2a764604b22305?apiKey=bf80438c4595450788b907771330b274&"
                    className="shrink-0 my-auto w-6 aspect-square"
                />
            </div>
            <div className="font-semibold max-md:max-w-full">
                Company Name
            </div>
            <Field className="justify-center items-start px-4 py-3 mt-1 whitespace-nowrap bg-white border border-solid border-zinc-200 max-md:pr-5 max-md:max-w-full" />
        </>
    )
}

export default LocationInput