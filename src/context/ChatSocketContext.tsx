import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import io, { Socket } from 'socket.io-client'
import { RootState } from 'src/redux/store';
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
    const [socketConnected, setSocketConnected] = useState<boolean>(false)
    const [isCalling, setIsCalling] = useState(false);
    const [isOnCall, setIsOnCall] = useState(false);
    const [callId, setCallId] = useState<string | null>(null);
    const [notifications, setNotifications] = useState<any>([])
    const selectedChat = useSelector((state: RootState) => state?.chat?.selectedUser)
    const location = useLocation()
    // const localStreamRef = useRef(null);
    // const remoteStreamRef = useRef(null);
    // const peerConnectionRef = useRef(null);
    const socketRef = useRef<Socket | null>(null);

    useEffect(() => {
        if (!socketRef.current) {
            // Initialize the socket only once
            const newSocket = io(String(process.env.CHAT_ORIGIN));

            newSocket.on('connect', () => {
                console.log('Socket connected');
                setSocketConnected(true);
            });

            newSocket.on('disconnect', () => {
                console.log('Socket disconnected');
                setSocketConnected(false);
            });

            newSocket.on('recieve-message', (data) => {
                if(data?.chatId !== selectedChat?._id || !location.pathname.includes('/messages')){
                    setNotifications((prev:any) => [...prev,data])
                }
            })

            // Assign the socket instance to the ref
            socketRef.current = newSocket;
        }

        // Cleanup function to disconnect the socket on unmount
        return () => {
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
        };
    }, []);

    return (
        <ChatSocketContext.Provider value={{
            socket: socketRef.current, socketConnected, setSocketConnected, isCalling, setIsCalling,
            callId, setCallId, setIsOnCall, isOnCall
        }}>
            {children}
        </ChatSocketContext.Provider>
    )
}