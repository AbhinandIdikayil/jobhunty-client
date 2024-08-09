import { createContext, useContext, useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'
import { Children } from 'src/types/AllTypes';


const ChatSocketContext = createContext<Socket | null>(null)


export const UseChatContext = () => useContext(ChatSocketContext);

export const ChatSocketProvidet = ({ children }: Children) => {
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {

    }, [])
}