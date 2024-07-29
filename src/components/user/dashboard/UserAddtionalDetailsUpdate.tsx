import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { SquarePen } from 'lucide-react'
import { useForm } from "react-hook-form"
import { z } from "zod"


const formSchema = z.object({
    email: z.string().email({ message: 'Invalid email' }),
    phone: z.string().regex(/^\d+$/, { message: 'Invalid phone number' }),
    language: z.string({ required_error: 'Language is required' }),
})


function UserAddtionalDetailsUpdate() {
    return (
        <>
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <SquarePen /> 
            </AlertDialogTrigger >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Additional Detaisl </AlertDialogTitle>

                    {/* ////! Here is the form component that is under this component */}
                    <AdditionalDetailsForm />

                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
        </>
    )
}

export default UserAddtionalDetailsUpdate


function AdditionalDetailsForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            phone: "",
            language: "",
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email
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
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone
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
                    name="language"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Language
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