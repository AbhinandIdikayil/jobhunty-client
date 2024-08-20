
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
            <div className="text-xs flex mt-2 ">
                {
                    data?.skill?.technical_skill?.length > 0 && (
                        <div className="w-[130px] capitalize">
                            technical skill
                        </div>
                    )
                }
                <div>
                    {
                        data?.skill?.technical_skill &&
                        data?.skill?.technical_skill?.map((skill: any, ind: number) => (
                            <span>
                                {skill}
                                {
                                    (ind === data?.skill?.technical_skill?.length - 1) ? ' ' : ','
                                }
                            </span>
                        ))
                    }
                </div>
            </div>
            <div className="text-xs flex mt-2 ">
                {
                    data?.skill?.technical_skill?.length > 0 && (
                        <div className="w-[130px] capitalize">
                            soft skill
                        </div>
                    )
                }
                <div>
                    {
                        data?.skill?.soft_skill &&
                        data?.skill?.soft_skill?.map((skill: any, ind: number) => (
                            <span>
                                {skill}
                                {
                                    (ind === data?.skill?.soft_skill?.length - 1) ? ' ' : ','
                                }
                            </span>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillsPreview