import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { zodResolver } from "@hookform/resolvers/zod"
import { SquarePen } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { updateUserProfile } from 'src/redux/actions/userAction'
import { AppDispatch, RootState } from 'src/redux/store'
import { z } from "zod"

const formSchema = z.object({
    about: z.string().min(20, { message: 'Atleast 20 character' }),
})

interface func {
    setOpen: Dispatch<SetStateAction<boolean>>
}

function UserAboutMeUpdate() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <AlertDialog open={open}>
            <AlertDialogTrigger asChild>
                <SquarePen onClick={() => setOpen(true)} />
            </AlertDialogTrigger >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Social links </AlertDialogTitle>
                    {/* ////! Here is the form component that is under this component */}
                    <AddDescriptionForm setOpen={setOpen} />
                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default UserAboutMeUpdate

function AddDescriptionForm({ setOpen }: func) {
    const dispatch: AppDispatch = useDispatch();
    const state = useSelector((state: RootState) => state.user)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            about: state.user.about || ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await dispatch(updateUserProfile(values)).unwrap()
            setOpen(false)
        } catch (error) {
            console.log(error);
            setOpen(false)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
                <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description
                            </FormLabel>
                            <FormControl>
                                {/* <Input placeholder="shadcn" {...field} /> */}
                                <textarea
                                    placeholder="Enter your description"
                                    {...field} // This spreads all necessary props like onChange, onBlur, etc.
                                    rows={20} // Adjust the number of rows for the textarea
                                    cols={33}
                                    className="w-full p-2 border border-gray-300 rounded-md h-32" // Basic styling
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <AlertDialogCancel onClick={() => setOpen(false)} className="">Cancel</AlertDialogCancel>
                <Button type="submit" className='ml-2 bg-indigo-700'>Submit</Button>
            </form>
        </Form>
    )
}