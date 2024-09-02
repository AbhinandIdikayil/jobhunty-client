import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
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
    notifications: any[]
    setNotifications: React.Dispatch<React.SetStateAction<any[]>>
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
            const newSocket = io(String(process.env.CHAT_ORIGIN));

            newSocket.on('connect', () => {
                setSocketConnected(true);
            });

            newSocket.on('disconnect', () => {
                setSocketConnected(false);
            });

            // Assign the socket instance to the ref
            socketRef.current = newSocket;
        }
        // socketRef?.current?.on('recieve-message', handleNotification)

        // Cleanup function to disconnect the socket on unmount
        return () => {
            // socketRef.current?.off('receive-message', handleNotification);
            if (socketRef.current) {
                socketRef.current.disconnect();
                socketRef.current = null;
            }
        };
    }, []);

    const handleNotification = useCallback(
        (data: any) => {
            console.log('HANDLE NOTIFICATION --- CHAT CONTEXT');
            if (location.pathname.includes('messages') && data?.chatId === selectedChat?._id) {
                return null
            }
            if (!location?.pathname?.includes('messages') || data?.chatId !== selectedChat?._id) {
                console.log(data, 'INSIDE IF CONDITION--------------------');
                setNotifications((prev: any) => [...prev, data]);
            }
        },
        [location?.pathname, selectedChat?._id] 
    );

    useEffect(() => {
        if (socketRef?.current) {

            if (socketRef?.current && !location?.pathname?.includes('messages')) {
                socketRef.current.on('recieve-message', handleNotification);
            }
            return () => {
                socketRef?.current?.off('receive-message', handleNotification);
            };
        }
    }, [handleNotification])

    return (
        <ChatSocketContext.Provider value={{
            socket: socketRef.current, socketConnected, setSocketConnected, isCalling, setIsCalling,
            callId, setCallId, setIsOnCall, isOnCall
            , notifications, setNotifications
        }}>
            {children}
        </ChatSocketContext.Provider>
    )
}