import { useState } from "react"
import QuizCard from "src/components/quiz/QuizCard"
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { toast } from "react-toastify";
import { generateQuizQuestion } from "src/utils/GenerateQuiz";
import { LoaderCircle } from "lucide-react";

function Quiz() {
    const [show, setShow] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const [quiz, setQuiz] = useState<any>()
    const userState = useSelector((state: RootState) => state?.user);
    let skills: string;
    userState?.user?.skills?.forEach((data: string) => skills += data + ',');

    const hasSkills = userState.user?.skills?.length > 0;


    async function startQuiz() {
        setLoading(true)
        if (!hasSkills) {
            toast.error('Please add one or more skills', { position: 'top-center' })
            return;
        }

        try {
            let data: any = await generateQuizQuestion(skills)
            const jsonData = JSON.parse(data);
            setQuiz(jsonData)
            setShow(true)
        } catch (error) {
            toast.error('Some error has happened');
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-wrap items-center justify-normal sm:justify-center text-sm bg-slate-900 h-full sm:h-[532px] rounded-2xl">
            {
                show ? (
                    <QuizCard data={quiz} setShow={setShow} />
                ) : (
                    <>
                        <div className="flex flex-col w-1/2">
                            <div className="flex flex-col items-start py-8 pr-16 pl-8 w-full bg-blend-difference max-md:px-5">
                                <div className="text-4xl text-white font-bold">
                                    <span className="font">Learn </span>
                                    <br />
                                    <span className="font text-indigo-600 w-full text-2xl sm:text-4xl">new concepts</span>
                                    <br />
                                    <span className="text-lg sm:text-4xl w-full">for each question</span>
                                </div >
                                <div className="mt-12 ml-3 text-white tracking-widest max-md:mt-10 max-md:ml-2.5">
                                    We help you prepare for interview and quizes(based on your skills in profile ){" "}
                                </div>
                                <div className="flex gap-5 justify-between mt-10 max-w-full w-[158px]">
                                    <div onClick={startQuiz} className="px-5 py-3 font-bold text-white shadow-lg max-md:pr-5 bg-indigo-600 rounded shadow-black hover:-translate-y-1 duration-300 flex  justify-center items-center gap-2">
                                        Start solving

                                        {
                                            loading && <LoaderCircle className="animate-spin" />
                                        }
                                    </div>
                                </div>
                            </div >
                        </div >
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfd455dc37509ebc0a93c6302f9ba12d37e7aea2e54e33943604da56e73f26cf?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                            className="object-contain rounded-none aspect-[0.97] min-w-[240px] w-[359px]"
                        />
                    </>
                )
            }
        </div >
    )
}

export default Quiz

