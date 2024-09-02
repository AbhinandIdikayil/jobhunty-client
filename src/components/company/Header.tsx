import { HiMenuAlt3 } from "react-icons/hi";
import DropDown from "./DropDown";
import { useSocket } from "src/context/SocketConext";
import { useEffect } from "react";
import { toast } from 'react-toastify'
import { AppDispatch, RootState } from "src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { getCompany } from "src/redux/actions/companyAction";
import { UseChatSocketContext } from "src/context/ChatSocketContext";
import { Bell } from "lucide-react";
interface props {
    func: () => void,
    open: boolean
}

function Header({ func, open }: props) {
    const socketForRequestUpdation = useSocket();
    const state = useSelector((state: RootState) => state?.user)
    const dispatch: AppDispatch = useDispatch()
    const { socket, setSocketConnected, notifications, setNotifications } = UseChatSocketContext()

    useEffect(() => {
        if (socket) {
            socket.emit('setup', state?.user)
            socket.on('connected', () => setSocketConnected(true))
            socket.on('disconnect', () => {
                console.log('disconnected');
            });

            return () => {
                socket.off('connected');
                socket.off('disconnect');
            };
        }
    }, [socket])


    useEffect(() => {
        const handleRequestUpdate = ({ email, status }: { email: string, status: string }) => {
            if (state?.user?.email === email) {
                if (status == 'Accepted') {
                    toast.success(`Request has been ${status}`, {
                        position: "top-center"
                    });
                } else if (status == 'Rejected') {
                    toast.error(`Request has been ${status}`, {
                        position: "top-center"
                    });
                }
                return;
            } else {

            }
        };

        if (socketForRequestUpdation) {
            socketForRequestUpdation.on('request_update', handleRequestUpdate);
        }

        return () => {
            if (socketForRequestUpdation) {
                socketForRequestUpdation.off('request_update', handleRequestUpdate);
            }
        };
    }, [socketForRequestUpdation, state])


    const fetchData = async () => {
        try {
            await dispatch(getCompany()).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    
    useEffect(() => {
        fetchData()
        console.log('------------compnay header')
    }, [])

    return (
        <div className="flex gap-5 justify-between px-8 w-full bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full" style={{ borderBottom: '.5px solid black', paddingBlock: '16px' }}>
            <div className="flex gap-4 whitespace-nowrap">
                <div className={`flex items-center ${open ? 'hidden' : ''} `}>
                    <HiMenuAlt3 onClick={func} color='black' size={30} />
                </div>
                {
                    state.user?.images ? (
                        <img
                            loading="lazy"
                            src={state.user.images}
                            alt="hai"
                            className="shrink-0 self-start w-12 aspect-square"
                        />
                    ) : (
                        <Avatar> {state.user?.name[0]} </Avatar>
                    )
                }
                <div className="flex flex-col">
                    <div className="text-base leading-6 text-slate-600">
                        Company
                    </div>
                    <div className="flex gap-2 text-xl font-semibold leading-6 text-slate-800">
                        <div>{state?.user?.name}</div>

                        <DropDown />
                    </div>
                </div>
            </div>
            <div className="flex gap-5 justify-center text-base font-bold leading-6 text-center text-white">
                <Popover>
                    <PopoverTrigger asChild>

                        <div className="flex relative justify-center items-center">
                            {
                                notifications?.length > 0 && (
                                    <span className="bg-red-500 absolute top-1 right-0 px-1 rounded-full flex justify-center items-center" style={{ fontSize: '10px', height: '15px' }} >
                                        {notifications?.length}
                                    </span>
                                )
                            }
                            <Bell color="blue" />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-40 sm:w-80" style={{ zIndex: 99 }}>
                        <ScrollArea className="h-40 sm:h-48 ">

                            <div className="grid gap-4">
                                <div className=" border-b border-indigo-600 flex items-center w-full justify-between pb-1">
                                    <h4 className="font-medium leading-none">Notifications</h4>
                                    <span onClick={() => setNotifications([])} className="font-normal text-sm leading-none bg-indigo-600 text-white  rounded-md px-2 py-1">
                                        CLEAR ALL
                                    </span>
                                </div>
                                {
                                    notifications?.length > 0 &&
                                    notifications?.map((data: any, ind: number) => (
                                        <div key={ind+data?.content?.content} className="overflow-hidden text-ellipsis whitespace-nowrap w-full items-center gap-1">
                                            <span className="text-indigo-600 rounded-full  h-1 "> {ind + 1} ) </span>
                                            {data?.content?.content}
                                        </div>
                                    ))
                                }
                            </div>
                        </ScrollArea>
                    </PopoverContent>
                </Popover>
                <div className="flex gap-2.5 justify-center px-6 py-3 bg-indigo-600 max-md:px-5 shadow-xl hover:-translate-y-1 duration-200 rounded">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cf21e8a0b760a5ffef9e7996a107a62bc1d05df032f9ade093a7c12125c833?apiKey=bf80438c4595450788b907771330b274&"
                        className="shrink-0 self-start w-6 aspect-square"
                    />
                    <Link to={'/company/post'}>Post a job</Link>
                </div>
            </div>
        </div>
    )
}

export default Header