import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@nextui-org/react'
import { CornerDownLeft, Mic, Paperclip } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { UseChatSocketContext } from 'src/context/ChatSocketContext'
import { sendMessage } from 'src/redux/actions/chatAction'
import { AppDispatch, RootState } from 'src/redux/store'

function SendMessage() {
    const [messageInput, setMessageInput] = useState<string | null>(null);
    const { socket, socketConnected, setSocketConnected } = UseChatSocketContext()
    const dispatch: AppDispatch = useDispatch()
    const chatState = useSelector((state: RootState) => state?.chat)
    const location = useLocation()

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        // if (socket && socketConnected) {
            let data: any;
            if (location.pathname == '/company/messages') {
                data = {
                    recieverId: chatState?.selectedUser?.members[0],
                    chatId: chatState?.selectedUser?._id,
                    content: {
                        type: 'text',
                        content: messageInput
                    },
                    status: 'sent'
                }
            } else {
                data = {
                    recieverId: chatState?.selectedUser?.members[1],
                    chatId: chatState?.selectedUser?._id,
                    content: {
                        type: 'text',
                        content: messageInput
                    },
                    status: 'sent'
                }
            }
            try {
                dispatch(sendMessage(data)).unwrap()
                // socket.emit('send-message', messageInput)
            } catch (error) {
                console.log(error)
            }
        // }
    }

    return (
        <form
            className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
        >
            <Label htmlFor="message" className="sr-only">
                Message
            </Label>
            <Textarea
                onChange={(e) => setMessageInput(e.target.value)}
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

                <Button onClick={handleSubmit} type="submit" size="sm" className="ml-auto gap-1.5">
                    Send Message
                    <CornerDownLeft className="size-3.5" />
                </Button>
            </div>
        </form>
    )
}

export default SendMessage