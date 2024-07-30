import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Avatar } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React, { Dispatch, SetStateAction, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { updateUserProfile } from 'src/redux/actions/userAction'
import { AppDispatch } from 'src/redux/store'
import { uploadToCloudinary } from 'src/utils/common/cloudinaryUpload'
import { z } from 'zod'


const formSchema = z.object({
    name: z.string().min(5, { message: 'Atleast 20 character' }).optional(),
    location: z.string({ required_error: 'location is required' }).optional()
})

interface UserEditProfileProps {
    name: string;
    setOpen: Dispatch<SetStateAction<boolean>>
}

function UserEditProfile({ name }: UserEditProfileProps) {
    const [open,setOpen] = useState<boolean>(false)
    return (
        <AlertDialog open={open}>
            <AlertDialogTrigger asChild>
                <div onClick={() => setOpen(true)} className="px-6 py-3 text-base font-bold leading-6 text-center text-indigo-600 border border-gray-500 rounded max-md:px-5 max-md:mt-10 hover:cursor-pointer">
                    Edit Profile
                </div>
            </AlertDialogTrigger >
            <AlertDialogContent className='max-w-fit'>
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit profile</AlertDialogTitle>

                    {/* ////! Here is the form component that is under this component */}
                    <EditProfile name={name} setOpen={setOpen} />

                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default UserEditProfile

function EditProfile({ name, setOpen }: UserEditProfileProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<string | null>(null);
    const dispatch: AppDispatch = useDispatch()

    function handleAvatarClick() {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target?.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (typeof reader.result === 'string') {
                    setImage(reader.result);
                } else {
                    console.error('FileReader result is not a string');
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: name || ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            let imageUrl
            if (image) {
                imageUrl = await uploadToCloudinary(image);
            }
            console.log(imageUrl)
            let req = {
                coverImage: imageUrl,
                ...values
            }
            console.log(req)
            dispatch(updateUserProfile(req)).unwrap()
            setOpen(false)
        } catch (error) {
            setOpen(false)
            console.log(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1 w-auto">
                <div className='flex flex-col justify-center items-center relative'>
                    <div className='w-1/2 z-40 flex items-center justify-center' style={{ borderRadius: '500px' }} onClick={handleAvatarClick}>
                        {
                            image ? (
                                <Avatar src={image} className='bg-transparent bg-white' sx={{ width: 86, height: 86 }} />
                            ) : (
                                <Avatar sx={{ bgcolor: deepOrange[500], width: 86, height: 86 }}>N</Avatar>
                            )
                        }
                    </div>
                    <input
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        type="file" style={{ display: 'none' }}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description
                                <span className="text-red-600">

                                    {/* {
                                        state.err && '(' + state.err + ')'
                                    } */}
                                </span>
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <AlertDialogCancel onClick={() => setOpen(false)} className="">Cancel</AlertDialogCancel>
                {/* <AlertDialogAction> */}
                <Button type="submit" className='ml-2 bg-indigo-700'>Submit</Button>
                {/* </AlertDialogAction> */}

            </form>
        </Form>
    )
}
