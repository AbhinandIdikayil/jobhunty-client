import { format } from "date-fns";

export const formatDate = (data: string | Date) => {
    if(data){
        const date = new Date(data)
        return format(date, 'yyyy-MM-dd');
    }
    return ''
}