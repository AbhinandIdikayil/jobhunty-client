import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import { Children } from 'src/types/AllTypes';



interface ChatSocketContextType {
    socket: Socket | null;
    socketConnected: boolean;
    setSocketConnected: React.Dispatch<React.SetStateAction<boolean>>;
    isCalling: boolean;
    setIsCalling: React.Dispatch<React.SetStateAction<boolean>>;
    callId: string | null;
    setCallId: React.Dispatch<React.SetStateAction<string | null>>;
    isOnCall: boolean;
    setIsOnCall: React.Dispatch<React.SetStateAction<boolean>>;
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
    const [socketConnected, setSocketConnected] = useState<boolean>(false)
    const [isCalling, setIsCalling] = useState(false);
    const [isOnCall, setIsOnCall] = useState(false);
    const [callId, setCallId] = useState<string | null>(null);
    const localStreamRef = useRef(null);
    const remoteStreamRef = useRef(null);
    const peerConnectionRef = useRef(null);

    useEffect(() => {
        const newSocket = io(String(process.env.CHAT_ORIGIN))
        setSocket(newSocket);

        return () => {
            newSocket.close()
        }
    }, [])

    return (
        <ChatSocketContext.Provider value={{
            socket, socketConnected, setSocketConnected, isCalling, setIsCalling,
            callId, setCallId, setIsOnCall, isOnCall
        }}>
            {children}
        </ChatSocketContext.Provider>
    )
}