import { Avatar } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import { Link, useLocation } from "react-router-dom"
import {   getAllJobsUser} from "src/types/Job"
import { formatSalary } from "src/utils/formatSalary"

function JobCard({ data, apply }: { data: getAllJobsUser, apply: (data: any) => void }) {
    const location = useLocation()
    return ( 
        <div className="hover:cursor-default flex gap-5 justify-between p-6 mb-4 w-full bg-white border border-solid border-zinc-200 leading-[160%] max-md:flex-wrap max-md:px-5 max-md:max-w-full rounded-lg  border-t-indigo-600 border-t-4 shadow-sm">
            <div className="flex gap-5 justify-between font-semibold">
                {
                    data?.company?.images ? (
                        <img
                            loading="lazy"
                            src={data?.company?.images}
                            className="shrink-0 self-start w-16 aspect-square"
                        />
                    ) : (
                        <Avatar sx={{ bgcolor: deepOrange[500], width: 86, height: 86 }}>
                            { data?.company?.name?.charAt(1) }
                            
                        </Avatar>
                    )
                }

                <div className="flex flex-col ">
                    {
                        location.pathname == '/home/jobs' ? (
                            <Link to={`/home/jobs/${data?._id}`} className="text-xl leading-6 text-slate-800 hover:underline">
                                {data?.jobTitle || ''}
                            </Link>
                        ) : (
                            <Link to={`/Dashboard/jobs/${data?._id}`} className="text-xl leading-6 text-slate-800 hover:underline">
                                {data?.jobTitle || ''}
                            </Link>
                        )
                    }
                    <div className="flex flex-wrap gap-2 justify-between py-px mt-2 text-base text-slate-500">
                        <span>
                            {data?.location?.[0] || 'non-disclosable'}    
                        </span>
                        {/* <div>Terraform</div>
                        <div>Hamburg, Germany</div> */}
                    </div>
                    <div className="flex gap-2 mt-2 text-sm whitespace-nowrap">
                        <div className="px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                            {data?.employmentDetails?.name}
                        </div>
                        <div className="shrink-0 w-px bg-zinc-200 h-[34px]" />
                        <div className="hidden sm:block px-2.5 py-1.5 text-amber-400 border border-amber-400 border-solid rounded-[80px]">
                            {data?.categoryDetails?.name || 'non-disclosable'}
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between text-center">
                <button
                    onClick={() => apply({ jobId: data?._id, companyId: data?.companyId })}
                    className="hover:cursor-pointer px-6 py-3 text-base font-bold text-white whitespace-nowrap bg-indigo-600 max-md:px-5">
                    Apply
                </button>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/98f64b305f12c671b14db57bd5c042df5e706b2094a78a5b493aef4524773937?"
                    className="self-center mt-4 aspect-[25] w-[164px]"
                />
                <div className="font-semibold text-slate-800">
                    {
                        formatSalary(data?.salaryrange?.from,data?.salaryrange?.to)
                    }
                </div>
            </div>
        </div >
    )
}

export default JobCard