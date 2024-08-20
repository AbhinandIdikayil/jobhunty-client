
function SkillsPreview({ data }: { data: any }) {
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
                            <div className="w-[240px] h-full break-words">
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