import { format } from "date-fns"

export const formatDate = (data: string) => {
    if(!data){
        return ''
    }
    const date = new Date(data)
    return format(date, 'MMM yyyy')
}