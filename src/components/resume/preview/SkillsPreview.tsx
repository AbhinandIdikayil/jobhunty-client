import { useLocation } from "react-router-dom"

function SkillsPreview({ data }: { data: any }) {
    const location = useLocation();
    let path = location.pathname
    return (
        <div className='my-6'>
            <h2 className='text-center font-bold text-sm mb-2'
                style={{
                    color: data?.themeColor
                }}
            >Skills</h2>
            <hr style={{
                borderColor: data?.themeColor
            }} />
            {
                data?.skill?.length &&
                data?.skill?.map((val: any) => {
                    return (
                        <div className="text-xs flex mt-2 w-full">
                            <div className="w-[110px] capitalize flex-shrink-0">
                                {val?.name}
                            </div>
                            <div
                                className={`
                                ${path == '/Dashboard/resume/create'
                                        ? ' w-[230px] ' : 'w-full text-right'
                                }
                               h-full break-words`}
                            >
                                {
                                    val?.data
                                }
                            </div>
                        </div>
                    )
                })
            }


        </div>
    )
}

export default SkillsPreview