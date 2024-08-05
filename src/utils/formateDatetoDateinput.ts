import { format } from "date-fns";

export const formatDate = (data: string) => {
    if(data){
        const date = new Date(data)
        return format(date, 'yyyy-MM-dd');
    }
}