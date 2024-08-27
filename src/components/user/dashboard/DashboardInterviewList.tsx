import { useSelector } from "react-redux"
import { RootState } from "src/redux/store"
import { formatDateToThree } from "src/utils/formateDate";

function DashboardInterviewList() {
    const state = useSelector((state: RootState) => state.job)
    const allSchedules = state.applications?.flatMap(applicant =>
        applicant.schedule.map(schedule => ({
          ...schedule,
          companyName: applicant.companyId.name,
          companyEmail: applicant.companyId.email,
          companyImage: applicant.companyId.images
        }))
      );
    return (
        <div className='overflow-y-scroll upcoming '>
            {
                allSchedules?.map((data: any) => (
                    <div className="flex flex-col px-6  mt-0 w-full text-base leading-relaxed max-md:pl-5 max-md:max-w-full">
                        <div className="flex flex-col w-full font-medium text-slate-500">
                            <div className="flex gap-4 mt-3 max-w-full rounded-none w-[406px] max-md:mt-10 border-b pb-1">
                                <span className='text-sm'> {data?.time} </span>
                                <div className="flex z-10 gap-4 self-end py-4 pr-16 pl-4 mt-0 bg-violet-100 rounded-lg max-md:pr-5">
                                    <img
                                        loading="lazy"
                                        srcSet={data?.companyImage}
                                        className="object-contain shrink-0 w-12 aspect-square"
                                    />
                                    <div className="flex flex-col self-start">
                                        <div className="self-start text-xs font-semibold text-slate-800 w-full">
                                            {data?.companyName}
                                        </div>
                                        <div className="mt-1.5 text-xs font-medium text-slate-500 whitespace-nowrap">
                                            {data?.testType} 
                                            {
                                               '(' + formatDateToThree(data?.date) + ')'
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DashboardInterviewList