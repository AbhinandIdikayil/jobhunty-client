import { useEffect, useRef, useState } from 'react'
import Loading from 'src/components/common/Loading'
import Sidebar from 'src/components/chat/Sidebar'
import SendMessage from 'src/components/chat/SendMessage';
import { AppDispatch, RootState } from 'src/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMessages, listChats } from 'src/redux/actions/chatAction';
import { dateToTime } from 'src/utils/FormatDateToTime';
import { CheckCheck } from 'lucide-react';

function Chat() {
    const [loading, setLoading] = useState<boolean>(false);
    const user = useSelector((state: RootState) => state?.user?.user)
    const chat = useSelector((state: RootState) => state?.chat)
    const [messages, setMessages] = useState<any>([])
    const dispatch: AppDispatch = useDispatch()
    const chatRef = useRef<HTMLDivElement>(null);

    const handleScrollToBottom = () => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    };

    const fetchMessages = async () => {
        try {
            let data = await dispatch(getAllMessages(chat?.selectedUser?._id)).unwrap()
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchChats() {
        await dispatch(listChats()).unwrap()
    }

    useEffect(() => {
        fetchChats()
        console.log('_______-chat page')
    }, [])

    useEffect(() => {
        fetchMessages()
    }, [chat?.selectedUser])

    useEffect(() => {
        handleScrollToBottom();
    }, [messages])

    const handleCardClick = (data: string) => {
        if (data) {
          window.open(data, '_blank'); // Open the file in a new tab
        }
      };

    return (
        <div className='flex gap-1 w-full'>
            <Sidebar setLoading={setLoading} setMessages={setMessages} />
            {/* //! sidebar to list and search for and users and company, listing the chats also */}
            <div className="relative flex flex-col w-full min-h-[83vh]  rounded-xl bg-muted/50 px-1 lg:col-span-2">
                <div className="flex-1" />
                <div ref={chatRef} className='chat w-full max-h-[63vh] overflow-y-scroll pb-2 flex flex-col scroll-smooth px-1'>
                    {
                        chat?.messages?.length ? chat?.messages?.map((data: any, ind: number) => {
                            return data?.senderId === user?._id ? (  //! TO ALGIN MESSAGES TO RIGHT SIDE FOR THE SENDER
                                <div key={`${data?.id}+${ind}`} className={`list-chat mb-1 text-black w-fit max-w-[50%] bg-gray-200 px-2 mb rounded-lg rounded-br-none break-words ${data?.content?.type === 'image' ? 'h-full' : 'h-10'} `}>
                                    {
                                        data?.content?.type === 'image' && (
                                            <img src={data?.content?.content} className="shrink-0 my-auto w-48 aspect-square bg-gray-200 pt-2" />
                                        )
                                    }
                                    {
                                        data?.content?.type === 'doc' && (
                                            <div
                                                onClick={() => handleCardClick(data?.content?.content)}
                                                className="hover:cursor-pointer"
                                            >
                                                <p className="text-sm text-gray-500">Type: {data?.content?.type}</p>
                                            </div>
                                        )
                                    }
                                    {
                                        data?.content?.type == 'text' && (
                                            <h1>
                                                {data?.content?.content ?? ''}
                                            </h1>
                                        )
                                    }
                                    <h1 className='text-right text-xs flex float-right'>
                                        {dateToTime(data?.createdAt)}
                                        <CheckCheck size={15} className={`${data?.status == 'read' ? 'text-blue-500' : ''}`} />
                                    </h1>
                                </div>
                            ) : (
                                <div key={`${data?.id}+${ind}`} className={`text-black mb-1 w-fit max-w-[50%] bg-gray-200 px-2 mb rounded-lg rounded-bl-none break-words ${data?.content?.type === 'image' ? 'h-full' : 'h-10'}`}>
                                    {
                                        data?.content?.type === 'image' && (
                                            <img src={data?.content?.content} className="shrink-0 my-auto w-48 aspect-square bg-gray-200 pt-2" />
                                        )
                                    }
                                    {
                                        data?.content?.type === 'text' && (
                                            <h1>
                                                {data?.content?.content ?? ''}
                                            </h1>
                                        )
                                    }
                                    <h1 className='text-left text-xs'>
                                        {/* <CheckCheck size={15} /> */}
                                        {dateToTime(data?.createdAt)}
                                    </h1>
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
                        messages?.length ? messages?.map((data: any, ind: number) => {
                            return data?.senderId === user?._id ? (   //! TO ALGIN MESSAGES TO RIGHT SIDE FOR THE SENDER
                                <div key={`${data?._id}+${ind}`}
                                    className='list-chat text-black w-fit mb-1 max-w-[50%] bg-gray-200 px-2 mb rounded-lg rounded-bl-none break-words'
                                >
                                    {
                                        data?.content?.type === 'image' && (
                                            <img src={data?.content?.content} className="shrink-0 my-auto w-48 aspect-square bg-gray-200 pt-2" />
                                        )
                                    }
                                    {
                                        data?.content?.type === 'text' && (
                                            <h1>
                                                {data?.content?.content ?? ''}
                                            </h1>
                                        )
                                    }
                                    <h1 className='text-right text-xs flex float-right'>
                                        {dateToTime(data?.createdAt)}
                                        <CheckCheck size={15} className={`${data?.status == 'read' ? 'text-blue-500' : ''}`} />
                                    </h1>
                                </div>
                            ) : (
                                <div key={`${data?._id}+${ind}`} className={`text-black w-fit max-w-[50%] bg-gray-200 px-2 mb-1 rounded-lg rounded-bl-none break-words`}>
                                    {
                                        data?.content?.type === 'image' && (
                                            <img src={data?.content?.content} className="shrink-0 my-auto w-48 aspect-square bg-gray-200 pt-2" />
                                        )
                                    }
                                    {
                                        data?.content?.type === 'text' && (
                                            <h1>
                                                {data?.content?.content ?? ''}
                                            </h1>
                                        )
                                    }
                                    <h1 className='text-left text-xs'>
                                        {/* <CheckCheck size={15} /> */}
                                        {dateToTime(data?.createdAt)}
                                    </h1>
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