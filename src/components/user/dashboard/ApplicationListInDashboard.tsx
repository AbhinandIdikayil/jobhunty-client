import { ArrowRight } from 'lucide-react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { listApplicants } from 'src/redux/actions/jobAction';
import { AppDispatch, RootState } from 'src/redux/store'
import { formatDateToThree } from 'src/utils/formateDate';

function ApplicationListInDashboard() {
  const application = useSelector((state: RootState) => state?.job?.applications);
  const dispatch:AppDispatch = useDispatch()
  useEffect(() => {
    dispatch(listApplicants()).unwrap()
  }, [])
  return (
    <div className=" px-4 py-4 flex flex-col leading-relaxed">
      <div className="flex flex-col w-full max-md:max-w-full  shadow-md">
        <div className="flex flex-col py-6 w-full bg-white border border-solid border-zinc-500 rounded max-md:max-w-full">
          <div className="self-start ml-6 text-xl font-semibold leading-tight text-slate-800 max-md:ml-2.5">
            Recent Applications History
          </div>
          <div className="mt-5 w-full border-b border-solid border-zinc-500 " />
          {
            application?.map((data: any, ind: number) => {
              return ind <= 1 ? (
                <div key={ind} className="flex flex-col mx-6 mt-6 max-md:mr-2.5 max-md:max-w-full">
                  <div className="flex flex-wrap gap-10 justify-between items-center p-6 w-full rounded-lg bg-slate-50 max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px] w-[446px] max-md:max-w-full">
                      <img loading="lazy" src={data?.companyId?.images}
                        className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square"
                      />
                      <div className="flex flex-col self-stretch my-auto min-w-[240px]">
                        <div className="text-lg font-bold text-slate-800">
                          {data?.jobId?.jobTitle}
                        </div>
                        <div className="flex gap-2 justify-center items-center text-base min-h-[27px] text-slate-500">
                          <div className="self-stretch my-auto"> {data?.jobId?.location?.[0]} </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col self-stretch my-auto text-base w-[171px]">
                      <div className="font-medium text-slate-800">Date Applied</div>
                      <div className="mt-1.5 text-slate-500">{formatDateToThree(data?.createdAt)} </div>
                    </div>
                    <div className="flex flex-col justify-center items-start self-stretch my-auto text-sm font-semibold text-amber-400 w-[117px]">
                      <div className={`gap-2 self-stretch px-2.5 text-center py-1.5 border
                        ${data?.hiring_status == 'interview' ? 'border border-green-500 text-green-500' : ''}
                        ${data?.hiring_status == 'shortlisted' ? 'border border-orange-500 text-orange-500' : ''}
                        ${data?.hiring_status == 'in-review' ? 'border border-indigo-500 text-indigo-500' : ''}
                         border-solid rounded-[80px]`}>
                        {data?.hiring_status}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )
            }
            )
          }
          <Link to={'applications'} className="flex gap-4 items-center self-center mt-6 text-base font-semibold text-center text-indigo-600">
            <div className="self-stretch my-auto">
              View all applications history
            </div>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ApplicationListInDashboard