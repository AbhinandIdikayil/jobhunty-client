import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { SquarePen } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'


const formSchema = z.object({
    name: z.string().min(5, { message: 'Atleast 20 character' }),
    location: z.string({ required_error: 'location is required' })
})


function UserEditProfile() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <div className="px-6 py-3 text-base font-bold leading-6 text-center text-indigo-600 border border-indigo-200 border-solid max-md:px-5 max-md:mt-10 hover:cursor-pointer">
                    Edit Profile
                </div>
            </AlertDialogTrigger >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit profile</AlertDialogTitle>

                    {/* ////! Here is the form component that is under this component */}
                    <EditProfile />

                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default UserEditProfile

function EditProfile() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
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

                <AlertDialogCancel className="">Cancel</AlertDialogCancel>
                {/* <AlertDialogAction> */}
                <Button type="submit" className='ml-2 bg-indigo-700'>Submit</Button>
                {/* </AlertDialogAction> */}

            </form>
        </Form>
    )
}
