import { useEffect, useState } from 'react'
import Loading from 'src/components/common/Loading'
import Sidebar from 'src/components/chat/Sidebar'
import { UseChatSocketContext } from 'src/context/ChatSocketContext'
import SendMessage from 'src/components/chat/SendMessage';
import { AppDispatch, RootState } from 'src/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessages, listChats } from 'src/redux/actions/chatAction';
import { dateToTime } from 'src/utils/FormatDateToTime';


function Chat() {

    const [loading, setLoading] = useState<boolean>(false);
    const { socket, setSocketConnected, socketConnected } = UseChatSocketContext()
    const user = useSelector((state: RootState) => state?.user?.user)
    const chat = useSelector((state: RootState) => state?.chat)
    const [messages, setMessages] = useState<any>([])
    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {

        if (socket) {
            console.log(user)
            socket.emit('setup', user)
            socket.on('connected', () => setSocketConnected(true))

            socket.on('disconnect', () => {
                console.log('disconnected');
            });
        }



        return () => {
            if (socket) {
                socket.off('connected');
                socket.off('disconnect');
            }
        };
    }, [socket])

    const fetchMessages = async () => {
        try {
            let data = await dispatch(getAllMessages(chat?.selectedUser?._id)).unwrap()
            return data
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        dispatch(listChats()).unwrap()
    }, [])

    useEffect(() => {
        fetchMessages()
    }, [chat?.selectedUser])

    return (
        <div className='flex gap-1 w-full'>
            <Sidebar setLoading={setLoading} setMessages={setMessages} />
            {/* //! sidebar to list and search for and users and company, listing the chats also */}

            <div className="relative flex flex-col w-full min-h-[82vh]  rounded-xl bg-muted/50 px-1 lg:col-span-2">
                <div className="flex-1" />
                <div className='chat w-full max-h-[63vh] overflow-y-scroll pb-2 flex flex-col scroll-smooth px-1'>
                    {
                        chat?.messages?.length ? chat?.messages?.map((data: any, ind: number) => {
                            return data?.senderId === user?._id ? (
                                <div key={`${data?.id}+${ind}`} className='list-chat mb-1 text-black w-fit max-w-[50%] bg-gray-200 px-2 mb rounded-lg rounded-br-none break-words h-10'>
                                    <h1>
                                        {data?.content?.content ?? ''}
                                    </h1>
                                    <h1 className='text-right text-xs'> {dateToTime(data?.createdAt)} </h1>
                                </div>
                            ) : (
                                <div key={`${data?.id}+${ind}`} className='text-black mb-1 w-fit max-w-[50%] bg-gray-200 px-2 mb rounded-lg rounded-bl-none break-words h-10'>
                                    <h1>
                                        {data?.content?.content ?? ''}
                                    </h1>
                                    <h1 className='text-left text-xs'> {dateToTime(data?.createdAt)} </h1>
                                </div>
                            )
                        })
                            : (
                                <div className='flex justify-center items-center w-full h-screen'>
                                    Start messaging
                                </div>
                            )
                    }
                    {
                        // console.log(messages),
                        messages?.length ? messages?.map((data: any, ind: number) => {
                            return data?.senderId === user?._id ? (
                                <div key={`${data?.id}+${ind}`}
                                    className='list-chat text-black w-fit mb-1 max-w-[50%] bg-gray-200 px-2 mb rounded-lg rounded-bl-none break-words'
                                >
                                    <h1>
                                        {data?.content?.content ?? ''}
                                    </h1>
                                    <h1 className='text-right text-xs'> {dateToTime(data?.createdAt)} </h1>
                                </div>
                            ) : (
                                <div key={`${data?.id}+${ind}`}
                                    className=' text-black w-fit max-w-[50%] bg-gray-200 px-2 mb rounded-lg rounded-bl-none break-words'>
                                    <h1>
                                        {data?.content?.content ?? ''}
                                    </h1>
                                    <h1 className='text-left text-xs'> {dateToTime(data?.createdAt)} </h1>
                                </div>
                            )
                        }) : (
                            ''
                        )

                    }
                </div>
                <SendMessage setMessages={setMessages} />
            </div>
            <Loading loading={loading} />
        </div>
    )
}

export default Chat