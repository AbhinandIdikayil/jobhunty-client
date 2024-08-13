
export type ChatInitialState = {
    loading : boolean,
    err : null | any,
    selectedUser : null | any,
    users : any[] | [],
    companies : any[] | [],
    chats:any[] | [],
    messages: any[] | []
}