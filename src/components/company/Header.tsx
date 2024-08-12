import { HiMenuAlt3 } from "react-icons/hi";
import DropDown from "./DropDown";
import { useSocket } from "src/context/SocketConext";
import { useEffect } from "react";
import { toast } from 'react-toastify'
import { AppDispatch, RootState } from "src/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { getCompany } from "src/redux/actions/companyAction";
interface props {
    func: () => void,
    open: boolean
}

function Header({ func, open }: props) {

    const socket = useSocket();
    const state = useSelector((state: RootState) => state?.user)
    const dispatch: AppDispatch = useDispatch()
    // const navigate = useNavigate()
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
                console.log(state);
                console.log(email);
            }
        };

        if (socket) {
            console.log("Adding event listener for request_update");
            socket.on('request_update', handleRequestUpdate);
        }

        return () => {
            if (socket) {
                console.log("Removing event listener for request_update");
                socket.off('request_update', handleRequestUpdate);
            }
        };
    }, [socket, state])

    // useEffect(() => {
    //     if(!state.role && !state.user){
    //         return navigate('/company/login')
    //     }
    // },[state])

    const fetchData = async () => {
        try {
            await dispatch(getCompany()).unwrap()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
        console.log('hi from overview -----')
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
                        {/* <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11e2517998516c181ac04025690221ae22f5c4e4eb4dee7f65d6fdbaf2f88a9b?apiKey=bf80438c4595450788b907771330b274&"
                            className="shrink-0 w-6 aspect-square"
                        /> */}
                        <DropDown />
                    </div>
                </div>
            </div>
            <div className="flex gap-5 justify-center text-base font-bold leading-6 text-center text-white">
                <Popover>
                    <PopoverTrigger asChild>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22cc243b4b17eb6822f1aae2f96ecac59c86787ba7154d9a5282f66481ba231f?apiKey=bf80438c4595450788b907771330b274&"
                            className="shrink-0 my-auto w-10 aspect-square"
                        />
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-40 sm:w-80" style={{ zIndex: 99 }}>
                        <ScrollArea className="h-40 sm:h-48 rounded-md ">

                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <h4 className="font-medium leading-none">Dimensions</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Set the dimensions for the layer.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="width">Width</Label>
                                        <Input
                                            id="width"
                                            defaultValue="100%"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="maxWidth">Max. width</Label>
                                        <Input
                                            id="maxWidth"
                                            defaultValue="300px"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="height">Height</Label>
                                        <Input
                                            id="height"
                                            defaultValue="25px"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="maxHeight">Max. height</Label>
                                        <Input
                                            id="maxHeight"
                                            defaultValue="none"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </PopoverContent>
                </Popover>
                <div className="flex gap-2.5 justify-center px-6 py-3 bg-indigo-600 max-md:px-5">
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