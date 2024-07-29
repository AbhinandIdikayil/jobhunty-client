import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { SquarePen } from 'lucide-react'
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    instagram: z.string().startsWith('https://www.instagram.com', { message: 'invalid url' }),
    twitter: z.string().startsWith('https://www.twitter.com', { message: 'invalid url' }),
    webisite: z.string().startsWith('https://www.', { message: 'invalid url' }),
})


function UserSocialLinkUpdate() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <SquarePen />
            </AlertDialogTrigger >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Social links </AlertDialogTitle>

                    {/* ////! Here is the form component that is under this component */}
                    <SocialLinkForm />

                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default UserSocialLinkUpdate


export function SocialLinkForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            instagram: "",
            twitter: "",
            webisite: "",
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
                    name="instagram"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Instagram
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
                <FormField
                    control={form.control}
                    name="twitter"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Twitter
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
                <FormField
                    control={form.control}
                    name="webisite"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Website
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