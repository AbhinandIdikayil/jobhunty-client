import { Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { createOneToOneChat } from 'src/redux/actions/chatAction'
import { AppDispatch, RootState } from 'src/redux/store'

function UserListingCard({ data, setLoading }: { data: any, setLoading: (newState: boolean) => void }) {
    const dispatch: AppDispatch = useDispatch()
    const [chatDetails, setChatDetails] = useState<any>()
    const users = useSelector((state: RootState) => state?.admin)
    const location = useLocation()
    function createChat(data: any) {
        try {
            console.log(data)
            dispatch(createOneToOneChat({ data })).unwrap()
        } catch (error) {
            console.log(error)
        }
    }
    function filterChat() {
        setLoading(true)
        if (location.pathname == '/company/messages') {
            let res = users?.users?.filter(user => user?._id === data?.members?.[0])
            setChatDetails(res)
        } else {
            let res = users?.companies?.filter(com => com?._id === data?.members?.[1])
            setChatDetails(res)
        }
        setLoading(false)
    }
    useEffect(() => {
        if (!data?.name && !data?.emial) {
            filterChat()
        }
    }, [])
    return (
        <>
            <div onClick={() => createChat(data?._id)} className="w-full flex gap-2 items-center hover:bg-gray-50 hover:cursor-pointer rounded border-b">
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