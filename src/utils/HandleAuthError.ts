import { toast } from "react-toastify";


export const handleAuthError = (state: any, payload: any) => {
    console.log(payload)
    if (payload === 'Token') {
        state.user = null;
        state.role = null
    } else if(payload === 'blocked') {
        toast.error('you are blocked',{position:'top-center'})
    }
};