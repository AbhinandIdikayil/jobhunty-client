import { formatDistanceToNow } from "date-fns";

export const formatDateToDaysAgo = (data: string | null) => {
    if(!data){
        return ''
    }
    const date = new Date(data)
    const formattedDate = formatDistanceToNow(date, { addSuffix: true });
    return formattedDate
}