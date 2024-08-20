import { createContext, useContext, useState } from "react";
import { Children } from "src/types/AllTypes";


const ResumeContext = createContext<any | null>(null)


export const UseResumeContext = () => useContext(ResumeContext)


export const ResumeContextProvider = ({children}:Children) => {
    const [resume,setResume] = useState<any | null>(null)
    return (
        <ResumeContext.Provider value={{resume, setResume}}>
            {children}
        </ResumeContext.Provider>
    )
}