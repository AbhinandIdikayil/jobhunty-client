import { CircleX } from "lucide-react"
import { useState } from "react"
import { toast } from "react-toastify"

function QuizCard({ data, setShow }: { data: any, setShow: any }) {
    const [index, setIndex] = useState<number>(0)
    function selectOption(userAnswer: string) {
        toast.dismiss();
        if (userAnswer == data[index]?.correctAnswer) {
            toast.success('Correct answer', { position: 'top-center' })
            if (index == 4) {
                setShow(false)
                toast.success('Quiz session is over', { position: 'top-center' })
                return;
            }
            setIndex(prev => prev + 1)
        } else {
            toast.error('Incorrect answer', { position: 'top-center' })
        }
    }
    return (
        <div className="relative flex overflow-hidden flex-col  px-5 py-1  w-full h-4/5 bg-stone-200 max-w-[480px] rounded-xl shadow-xl shadow-black">
            <CircleX className="absolute right-3 top-3" onClick={() => setShow(false)} />
            <div className="flex gap-3 mt-6 w-full items-center justify-center">
                <span className="border border-solid border-black px-1.5 py-2 rounded-md  text-black font-bold flex items-center justify-center">
                    {index + 1}/5
                </span>
            </div>
            <div className="self-start mt-5 text-sm font-semibold leading-8 text-blue-950">
                {
                    data[index]?.question
                }
                {/* PREDICT THE TOP LOSER (for tomorrow) across these indices */}
            </div>
            {
                data[index]?.options?.map((ele: string, ind: number) => (
                    <div onClick={() => selectOption(ele)} className={`flex gap-3.5 items-center py-3 pr-16 pl-4 mt-2 text-base font-semibold bg-gray-100 rounded-lg
                    `}>
                        <div>
                            {ind + 1}
                        </div>
                        <div className="self-stretch font-medium my-auto leading-none text-gray-950">
                            {ele}
                        </div>
                    </div>
                ))
            }

            <div className=" w-full mt-2 text-base leading-none flex justify-center items-center absolute bottom-3 left-0">
                <span onClick={() => {
                    setIndex(prev => prev + 1)
                }} className="bg-indigo-600 py-3 rounded-lg px-2 shadow-md shadow-gray-400 text-white font-bold text-sm">
                    CONTINUE
                </span>
            </div>
        </div>
    )
}

export default QuizCard

