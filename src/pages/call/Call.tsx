import { CircleUserRound, Phone } from "lucide-react"
import { useState } from "react"
import { UseChatSocketContext } from "src/context/ChatSocketContext"

function Call() {

    const {isCalling} = UseChatSocketContext()

    return (

        isCalling ? (
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[300px] bg-blue-500 z-50 rounded-3xl flex flex-col justify-around shadow-xl' >
                <div className="text-white font-bold text-lg text-center w-full">
                    <div className="flex justify-center items-center animate-bounce">
                        Calling
                    </div>
                </div>
                <div className="flex justify-center">
                    <CircleUserRound className="text-white" size={60} />
                </div>
                <div className="flex justify-center">
                    <div className=" w-[140px] flex justify-between">
                        <div className="bg-red-500 rounded-full px-2 py-2">
                            <Phone className="text-white" />
                        </div>
                        <div className="bg-green-500 rounded-full px-2 py-2">
                            <Phone className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            ''
        )

    )
}

export default Call