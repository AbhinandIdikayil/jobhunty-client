import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@nextui-org/react'
import { CornerDownLeft, Paperclip, Phone, Smile } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UseChatSocketContext } from 'src/context/ChatSocketContext'
import { listChats, sendMessage } from 'src/redux/actions/chatAction'
import { AppDispatch, RootState } from 'src/redux/store'
import EmojiPicker from 'emoji-picker-react';
import File_And_ImagePreview from './File_And_ImagePreview'

function SendMessage({ setMessages }: { setMessages: any }) {
    const [messageInput, setMessageInput] = useState<string>('');
    const { socket, socketConnected } = UseChatSocketContext()
    const dispatch: AppDispatch = useDispatch()
    const chatState = useSelector((state: RootState) => state.chat)
    const location = useLocation()
    const [show, setShow] = useState<boolean>(false)
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    async function fetchChats() {
        await dispatch(listChats()).unwrap()
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (socket && socket.connected && socketConnected) {
            let data: any;
            if (location.pathname == '/company/messages') {
                data = {
                    recieverId: chatState?.selectedUser?.members[0],
                    chatId: chatState?.selectedUser?._id,
                    content: {
                        type: 'text',
                        content: messageInput
                    },
                    status: 'unread'
                }
            } else {
                data = {
                    recieverId: chatState?.selectedUser?.members[1],
                    chatId: chatState?.selectedUser?._id,
                    content: {
                        type: 'text',
                        content: messageInput
                    },
                    status: 'unread'
                }
            }
            try {
                let res = await dispatch(sendMessage(data)).unwrap()
                socket.emit('send-message', res)
                setMessageInput('')
                setMessages((prevMessages: any) => [...prevMessages, res]);
            } catch (error: any) {
                toast.error(error?.message, { position: 'top-center' })
                console.log(error)
            }
        } else {
            toast.warn('socket not connected')
        }
    }

    useEffect(() => {
        if (socket) {
            const handleReceiveMessage = (message: any) => {
                setMessages((prevMessages: any) => [...prevMessages, message]);
                socket.emit('mark-as-read', ({ messageId: message?._id, senderId: message?.senderId }))
            };
            const handleReadMesage = ({ messageId, status }: { messageId: string, status: string }) => {
                setMessages((prevMessages: any) => {
                    const updatedMessages = prevMessages?.map((data: any) =>
                        data?._id === messageId ? { ...data, status } : data
                    );
                    return updatedMessages;
                });
            }

            socket.on('recieve-message', handleReceiveMessage);
            socket.on('message-read', handleReadMesage)
            return () => {
                socket.off('recieve-message', handleReceiveMessage);
                socket.off('message-read', handleReadMesage)
            }
        }
    }, [socket])

    useEffect(() => {
        if (socket) {
            const unreadMessages = chatState?.messages?.filter(data => data?.status == 'unread')

            if (unreadMessages?.length > 0) {
                unreadMessages?.forEach(data => {
                    socket.emit('mark-as-read', { messageId: data?._id, senderId: data?.senderId })
                })
            }
        }
    }, [chatState?.messages, socket])

    useEffect(() => {
        fetchChats()
    }, [chatState?.selectedUser])

    // Cleanup the URL object to prevent memory leaks
    useEffect(() => {
        return () => {
            if (preview && typeof preview === 'string') {
                URL.revokeObjectURL(preview);
            }
        };
    }, [preview]);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = e.target.files?.[0] || null;
        if (selectedFile) {
            setFile(selectedFile);
            if (selectedFile.type.startsWith('image/')) {
                setPreview(URL.createObjectURL(selectedFile)); //! Image preview
            } else if (selectedFile.type === 'application/pdf') {
                setPreview(URL.createObjectURL(selectedFile)); //! PDF preview
            } else if (selectedFile.type.startsWith('text/')) {
                const reader = new FileReader();
                reader.onload = () => setPreview(reader.result as string); //! Text file preview
                reader.readAsText(selectedFile);
            } else {
                setPreview(null); // No preview for other file types
            }
        }
    }

    return (
        <>
            {file && (
                <File_And_ImagePreview setMessages={setMessages} file={file} preview={preview} setPreview={setPreview} setFile={setFile} />
            )}
            {
                show && (
                    <div className='absolute  left-0'>
                        <EmojiPicker className='w-full' width={800} height={300} onEmojiClick={(emoji) => {
                            setMessageInput(prevState => prevState + emoji.emoji);
                        }} />
                    </div>
                )
            }
            <form className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
            >
                <Label htmlFor="message" className="sr-only">
                    Message
                </Label>
                <Textarea
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    id="message"
                    placeholder="Type your message here..."
                    disableAutosize
                    className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0 chat"
                />
                <div className="flex items-center p-3 pt-0">
                    <Button type='button' variant="ghost" size="icon" onClick={handleButtonClick}>
                        <Paperclip className="size-4" />
                        <span className="sr-only">Attach file</span>
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </Button>
                    <Button type='button' variant="ghost" size="icon" onClick={() => setShow(!show)}>
                        <Smile className='size-4' />
                        <span className="sr-only">icon</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <Phone className="size-4" />
                        <span className="sr-only">Use Microphone</span>
                    </Button>
                    <Button onClick={handleSubmit} type="submit" size="sm" className="ml-auto gap-1.5">
                        Send Message
                        <CornerDownLeft className="size-3.5" />
                    </Button>
                </div>
            </form>
        </>
    )
}

export default SendMessage