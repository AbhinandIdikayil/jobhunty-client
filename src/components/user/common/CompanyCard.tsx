import { Company } from "src/types/Company"

function CompanyCard({data}:{data:Company}) {
    return (
        <div className="company-card flex flex-col grow p-6 bg-white border border-solid border-zinc-200 leading-[160%] max-md:px-5 max-md:mt-8 ">
            <div className="flex gap-5 justify-between text-base text-indigo-600">
                <img
                    loading="lazy"
                    srcSet="http://res.cloudinary.com/dghv07eag/image/upload/v1722314502/jobhunty/knqfodgopfwy9u4wveep.png"
                    className="shrink-0 aspect-square w-[88px]"
                />
                <div className="self-start px-3 py-1 bg-slate-50">
                    7 Jobs
                </div>
            </div>
            <div className="mt-4 text-2xl font-semibold leading-7 text-slate-800">
                Truebill
            </div>
            <div className="mt-4 text-lg leading-7 text-slate-600">
                Take control of your money. Truebill develops a mobile
                app that helps consumers take control of their
                financial...
            </div>
            <div className="self-start px-2.5 py-1.5 mt-4 text-sm font-semibold text-emerald-300 whitespace-nowrap border border-emerald-300 border-solid rounded-[80px]">
                Business
            </div>
        </div>
    )
}

export default CompanyCard