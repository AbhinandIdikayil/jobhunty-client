import { format, parseISO } from 'date-fns';


export const dateToTime = (date:string) => {
    if(date){
        let parse = parseISO(date)
        return format(parse,'hh:mm a')
    }
    return null
}