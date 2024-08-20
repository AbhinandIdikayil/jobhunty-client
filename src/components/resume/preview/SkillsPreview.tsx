import React from 'react'

function SkillsPreview({ data }: { data: any }) {
    return (
        <div className='my-6'>
            <h2 className='text-center font-bold text-sm mb-2'
                style={{
                    color: data?.themeColor
                }}
            >Education</h2>
            <hr style={{
                borderColor: data?.themeColor
            }} />

            <div className='grid grid-cols-2 gap-3 my-4'>
                {data?.skills.map((skill: any, index: any) => (
                    <div key={index} className='flex items-center justify-between'>
                        <h2 className='text-xs'>{skill.name}</h2>
                        <div className='h-2 bg-gray-200 w-[120px]'>
                            <div className='h-2'
                                style={{
                                    backgroundColor: data?.themeColor,
                                    width: skill?.rating * 20 + '%'
                                }}
                            >
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsPreview