import { useEffect, useState } from 'react'
import Loading from 'src/components/common/Loading'
import Sidebar from 'src/components/chat/Sidebar'
import { UseChatSocketContext } from 'src/context/ChatSocketContext'
import SendMessage from 'src/components/chat/SendMessage';
import { RootState } from 'src/redux/store';
import { useSelector } from 'react-redux';


function Chat() {

    const [loading, setLoading] = useState<boolean>(false);
    const { socket , setSocketConnected , socketConnected} = UseChatSocketContext()
    const user = useSelector((state:RootState) => state?.user?.user)

    useEffect(() => {
        if (socket) {
            console.log(user)
            socket.emit('setup',user)            
            socket.on('connected',() => setSocketConnected(true))
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

    return (
        <div className='flex gap-1 w-full'>
            <Sidebar setLoading={setLoading} /> 
            {/* //! sidebar to list and search for and users and company, listing the chats also */}

            <div className="relative flex w-full min-h-[82vh] flex-col rounded-xl bg-muted/50 px-1 lg:col-span-2">
                <div className="flex-1" />
                <div className='chat w-full max-h-[63vh] overflow-y-scroll pb-2 flex flex-col scroll-smooth px-1'>
                    <div className='w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 rounded-bl-none rounded-lg mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>                    
                    <div className='list-chat w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                </div>
                <SendMessage />
            </div>
            <Loading loading={loading} />
        </div>
    )
}

export default Chat