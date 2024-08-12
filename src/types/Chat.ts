import { any, boolean } from "zod"

export type ChatInitialState = {
    loading : boolean,
    err : null | any,
    selectedUser : null | any,
    users : any[] | [],
    companies : any[] | [],
}