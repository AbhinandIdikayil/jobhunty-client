import { createContext, useContext, useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import { Children } from 'src/types/AllTypes';



interface ChatSocketContextType {
    socket: Socket | null;
    socketConnected: boolean;
    setSocketConnected: (connected: boolean) => void;
}

const ChatSocketContext = createContext<ChatSocketContextType | null>(null);

export const UseChatSocketContext = () => {
    const context = useContext(ChatSocketContext);
    if (!context) {
        throw new Error('UseChatSocketContext must be used within a ChatSocketProvider');
    }
    return context;
};


export const ChatSocketProvider = ({ children }: Children) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [socketConnected,setSocketConnected] = useState<boolean>(false)
    useEffect(() => {        
        const newSocket = io(String(process.env.CHAT_ORIGIN))
        setSocket(newSocket);

        return () => {
            newSocket.close()
        }
    }, [])

    return (
        <ChatSocketContext.Provider value={{socket,socketConnected,setSocketConnected}}>
            {children}
        </ChatSocketContext.Provider>
    )
}