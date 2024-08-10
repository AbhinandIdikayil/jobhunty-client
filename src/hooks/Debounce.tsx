import { useEffect, useRef, useState } from "react"


export const UseDebounce = (value: string, delay: number) => {
    const [debouncedValue, SetDebouncedValue] = useState<string | null>(null)
    const handler = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        if(handler.current){
            clearTimeout(handler.current)
        }
        handler.current = setTimeout(() => {
            SetDebouncedValue(value)
        }, delay);
    }, [value,delay])
    
    return debouncedValue
}