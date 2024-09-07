import { Avatar } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Company } from "src/types/Company"

function CompanyCard({ data }: { data: Company }) {
    const navigate = useNavigate()
    function handleNavigation(sss: any) {
        navigate(`/Dashboard/companies/${data?._id}`, { state: sss })
    }
    return (
        <div onClick={() => handleNavigation(data)} className="company-card flex flex-col grow p-6 bg-white border border-solid border-zinc-200 leading-[160%] max-md:px-5 max-md:mt-8 rounded-lg  border-t-indigo-600 border-t-4 shadow-sm">
            <div className="flex gap-5 justify-between text-base text-indigo-600">
                {
                    data?.images ? (
                        <img
                            loading="lazy"
                            src={data?.images || ''}
                            className="shrink-0 aspect-square w-[88px]"
                        />
                    ) : (
                        <Avatar sx={{width:78,height:78}}> {data?.name.charAt(0) ?? ''} </Avatar>
                    )
                }
            </div>
            <div className="mt-4 text-2xl font-semibold leading-7 text-slate-800 capitalize">
                {data?.name ?? ''}
            </div>
            <div className="company-desc mt-4 text-lg leading-7 text-slate-600 capitalize">
                {
                    data?.description ?? ''
                }

            </div>
            <div className="self-start px-2.5 py-1.5 mt-4 text-sm font-semibold text-emerald-300 whitespace-nowrap border border-emerald-300 border-solid rounded-[80px]">
                {data?.industry}
            </div>
        </div>
    )
}

export default CompanyCard