import { IListJob } from "src/types/Job"

function JobCard({data}:{data:IListJob}) {
    return (
        <div className="flex gap-5 justify-between p-6 mt-8 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 justify-between font-semibold">
                <img
                    loading="lazy"
                    // https://cdn.builder.io/api/v1/image/assets/TEMP/b94d9fdee77350452c2ebee502002cd2043b1ec89123ecc33a11b01ceaf9ba73?
                    src={data.companyId.images}
                    className="shrink-0 self-start w-16 aspect-square"
                />
                <div className="flex flex-col">
                    <div className="text-xl leading-6 text-slate-800">
                        {data?.jobTitle || ''}
                    </div>
                    <div className="flex gap-2 justify-between py-px mt-2 text-base text-slate-500">
                        <div>Terraform</div>
                        <div>Hamburg, Germany</div>
                    </div>
                    <div className="flex gap-2 mt-2 text-sm whitespace-nowrap">
                        <div className="px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                            {data?.employment?.name}
                        </div>
                        <div className="shrink-0 w-px bg-zinc-200 h-[34px]" />
                        <div className="px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                            Marketing
                        </div>
                        <div className="px-2.5 py-1.5 text-indigo-600 border border-indigo-600 border-solid rounded-[80px]">
                            Design
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between text-center">
                <div className="px-6 py-3 text-base font-bold text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
                    Apply
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/98f64b305f12c671b14db57bd5c042df5e706b2094a78a5b493aef4524773937?"
                    className="self-center mt-4 aspect-[25] w-[164px]"
                />
                <div className="mt-2 text-sm text-slate-500">
                    <span className="font-semibold text-slate-800">
                        8 applied
                    </span>{" "}
                    <span className="text-slate-500">of 12 capacity</span>
                </div>
            </div>
        </div>
    )
}

export default JobCard