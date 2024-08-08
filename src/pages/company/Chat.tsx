import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Avatar, Listbox, ListboxItem, Textarea } from '@nextui-org/react'
import { CornerDownLeft, Mic, Paperclip } from 'lucide-react'
import React from 'react'
import { users } from './data'


function Chat() {


    const [values, setValues] = React.useState(new Set(["1"]));


    return (
        <div className='flex gap-1 w-full'>
            <div className='w-1/3 hidden md:block'>
                <Listbox
                    classNames={{
                        base: "max-w-xs",
                        list: "chat max-h-[550px] overflow-y-scroll",
                    }}
                    defaultSelectedKeys={["1"]}
                    items={users}
                    label="Assigned to"
                    selectionMode="multiple"
                    onSelectionChange={setValues}
                    variant="flat"
                >
                    {(item) => (
                        <ListboxItem key={item.id} textValue={item.name}>
                            <div className="flex gap-2 items-center">
                                <Avatar alt={item.name} className="flex-shrink-0" size="sm" src={item.avatar} />
                                <div className="flex flex-col">
                                    <span className="text-small">{item.name}</span>
                                    <span className="text-tiny text-default-400">{item.email}</span>
                                </div>
                            </div>
                        </ListboxItem>
                    )}
                </Listbox>
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
                    <div className='list-chat w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem 
                    </div>
                    <div className='w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 rounded-bl-none rounded-lg mb-2'>
                        joeljhgh Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt libero quisquam doloribus repudiandae deleniti rem 
                    </div>
                    <div className='w-auto text-black max-w-[66.67%]  bg-gray-200 px-2 rounded-bl-none rounded-lg mb-2'>
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
        </div>
    )
}

export default Chat