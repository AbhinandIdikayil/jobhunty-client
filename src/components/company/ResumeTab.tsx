import { TabsContent } from '@radix-ui/react-tabs'
import React from 'react'

function ResumeTab({ resume }: { resume: string }) {
    return (
        <TabsContent value='resume'>
            <div className="flex flex-col mt-6 px-4 max-w-full w-[672px]">
                <div className="flex flex-col items-start w-full max-w-2xl max-md:max-w-full">
                    <iframe className='w-full' height={600}
                        allowFullScreen={true} src={resume}>

                    </iframe>
                </div>
            </div>
        </TabsContent>
    )
}

export default ResumeTab