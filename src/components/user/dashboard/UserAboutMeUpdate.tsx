import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { SquarePen } from 'lucide-react'
import { useForm } from "react-hook-form"
import { z } from "zod"


const formSchema = z.object({
    description: z.string().min(20,{ message: 'Atleast 20 character' }),
})

function UserAboutMeUpdate() {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <SquarePen />
            </AlertDialogTrigger >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Social links </AlertDialogTitle>

                    {/* ////! Here is the form component that is under this component */}
                    <AddDescriptionForm />

                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default UserAboutMeUpdate

function AddDescriptionForm () {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            description:""
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
                    name="description"
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