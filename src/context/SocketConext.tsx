import io from 'socket.io-client'
import { createContext , useContext, useEffect, useState} from 'react'
import { Children } from 'src/types/AllTypes'


const SocketContext = createContext(null)



export const useSocket = () => useContext(SocketContext)



export const SocketProvider = ({children}:Children) => {
    const [socket,setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io('http://localhost:4000');
        setSocket(newSocket);
        return () => {
            newSocket.close()
        }
    },[])

    return (
        <SocketContext.Provider value={socket} >
            {children}
        </SocketContext.Provider>
    )
}