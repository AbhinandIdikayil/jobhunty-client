import { Avatar } from '@mui/material'
import { useEffect, useState, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getAllusers } from 'src/redux/actions/adminAction'
import { createOneToOneChat, getAllMessages, listChats } from 'src/redux/actions/chatAction'
import { listAllCompanies } from 'src/redux/actions/commonAction'
import { AppDispatch, RootState } from 'src/redux/store'

function UserListingCard({ data, setLoading, setMessages }: { data: any, setLoading: (newState: boolean) => void, setMessages:(newState:any) => void }) {
    const dispatch: AppDispatch = useDispatch()
    const [chatDetails, setChatDetails] = useState<any>()
    const users = useSelector((state: RootState) => state?.admin)
    const chat = useSelector((state: RootState) => state?.chat)
    const location = useLocation()

    async function createChat(data: any) {
        setMessages('')
        try {
            setLoading(true)
            let result
            if (location.pathname == '/company/messages') {
                result = await dispatch(createOneToOneChat({ data, role: 'company' })).unwrap()
            } else {
                result = await dispatch(createOneToOneChat({ data, role: 'user' })).unwrap()
            }
            return result
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    async function filterChat() {
        await dispatch(listAllCompanies(undefined)).unwrap()
        await dispatch(getAllusers()).unwrap()
        // if (a || b) {
        if (location.pathname == '/company/messages') {
            console.log(users.users)
            let res = users?.users?.filter(user => user?._id == data?.members[0])
            setLoading(false)
            console.log(res, data)
            setChatDetails(res)
            return;
        } else {
            let res = users?.companies?.companies?.filter(com => com?._id === data?.members?.[1])
            setLoading(false)
            setChatDetails(res)
        }
        // }
        setLoading(false)
    }

    useEffect(() => {
        dispatch(listChats()).unwrap()
        if (data) {
            filterChat().then(data => data).catch(err => console.log(err))
        }
    }, [])
    async function listMessage() {
        setLoading(true)
        try {
            const data = await dispatch(getAllMessages(chat?.selectedUser?._id)).unwrap()
            if (data) {
                setLoading(false)
                return data
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    useEffect(() => {
        listMessage()
    }, [chat?.selectedUser])

    return (
        <>
            <div onClick={() => createChat(data?._id)}
                className={`${chat?.selectedUser?._id == data?._id ? 'text-indigo-600' : ''} w-full flex gap-2 items-center hover:bg-gray-50 hover:cursor-pointer rounded border-b`}>
                <Avatar />
                <div className="flex flex-col">
                    <span className="text-small"> {data?.name || chatDetails?.[0]?.name} </span>
                    <span className="text-tiny text-default-400"> {data?.email || chatDetails?.[0]?.email} </span>
                </div>
            </div>
        </>
    )
}

export default UserListingCard