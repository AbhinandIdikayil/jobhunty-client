import { format } from "date-fns"

export const formatDate = (data: string) => {
    if (!data) {
        return ''
    }
    const date = new Date(data)
    return format(date, 'MMM yyyy')
}


export const formatDateToThree = (data: string) => {
    if (!data) return '';

    const date = new Date(data);
    if (isNaN(date.getTime())) {
        return '';
    }

    return format(date, 'dd MMM yyyy');
}