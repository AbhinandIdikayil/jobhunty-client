import { createContext, useContext, useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import { Children } from 'src/types/AllTypes';


const ChatSocketContext = createContext<Socket | null>(null)


export const UseChatContext = () => useContext(ChatSocketContext);

export const ChatSocketProvider = ({ children }: Children) => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        const newSocket = io(String(process.env.JOB_SERVICE_URL))
        setSocket(newSocket);
        return () => {
            newSocket.close()
        }
    }, [])

    return (
        <ChatSocketContext.Provider value={socket}>
            {children}
        </ChatSocketContext.Provider>
    )
}