import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {  Textarea } from '@nextui-org/react'
import { CornerDownLeft, Mic, Paperclip } from 'lucide-react'
import { useEffect, useState } from 'react'
import { UseDebounce } from 'src/hooks/Debounce'
import { AXIOS_INSTANCE_USER } from 'src/constants/axiosInstance'
import { Avatar } from '@mui/material'
import Loading from 'src/components/common/Loading'


function Chat() {

    const [search, setSearch] = useState<string | null>(null)
    const debouncedValue = UseDebounce(search || '', 500)
    const [data, setData] = useState<any[]>([]);
    const [loading,setLoading] =  useState<boolean>(false)

    const handleOnchange = async () => {
        try {
            const res = await AXIOS_INSTANCE_USER.get('/search-user', {
                params: { name: debouncedValue },
            });
            if (Array.isArray(res.data)) {
                setData(res.data);
            } else {
                setData([]);
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setData([]);
            console.error(error);
        }
    };
    useEffect(() => {
        setLoading(true)
        if (debouncedValue) {
            handleOnchange();
        } else {
            setLoading(false)
            setData([]); // Clear data if search is empty
        }
    }, [debouncedValue]);


    return (
        <div className='flex gap-1 w-full'>
            <div className='w-1/3 hidden md:block'>
                <div className='w-full'>
                    <input type="text" value={search || ''} onChange={(e) => setSearch(e.target.value)} placeholder='Search users..' className='w-full bg-gray-200 h-8 px-2 focus:outline-gray-200 rounded-md' />
                </div>
                <div className='flex flex-col px-3 gap-2 mt-1'>
                    {
                        data?.length ? data?.map(data => (
                            <div className="flex gap-2 items-center">
                                <Avatar />
                                <div className="flex flex-col">
                                    <span className="text-small">{data?.name}</span>
                                    <span className="text-tiny text-default-400">{data?.email}</span>
                                </div>
                            </div>
                        )) : (
                            <div>
                                ....
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="relative flex w-full min-h-[82vh] flex-col rounded-xl bg-muted/50 px-1 lg:col-span-2">

                <Badge variant="outline" className="absolute right-3 top-3">
                    Output
                </Badge>

                <div className="flex-1" />
                <div className='chat w-full max-h-[63vh] overflow-y-scroll pb-2 flex flex-col scroll-smooth px-1'>
                    <div className='w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 rounded-bl-none rounded-lg mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='list-chat w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='list-chat w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 rounded-bl-none rounded-lg mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 rounded-bl-none rounded-lg mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='list-chat w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='list-chat w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 rounded-bl-none rounded-lg mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 rounded-bl-none rounded-lg mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 rounded-bl-none rounded-lg mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='list-chat w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='list-chat w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 rounded-bl-none rounded-lg mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 rounded-bl-none rounded-lg mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                    <div className='list-chat w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem
                    </div>
                </div>

                <form
                    className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
                >
                    <Label htmlFor="message" className="sr-only">
                        Message
                    </Label>
                    <Textarea
                        id="message"
                        placeholder="Type your message here..."
                        disableAutosize
                        className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0 chat"
                    />
                    <div className="flex items-center p-3 pt-0">
                        <Button variant="ghost" size="icon">
                            <Paperclip className="size-4" />
                            <span className="sr-only">Attach file</span>
                        </Button>


                        <Button variant="ghost" size="icon">
                            <Mic className="size-4" />
                            <span className="sr-only">Use Microphone</span>
                        </Button>

                        <Button type="submit" size="sm" className="ml-auto gap-1.5">
                            Send Message
                            <CornerDownLeft className="size-3.5" />
                        </Button>
                    </div>
                </form>
            </div>
            <Loading loading={loading} />
        </div>
    )
}

export default Chat