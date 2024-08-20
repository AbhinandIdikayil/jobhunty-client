import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { FilePlus2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { UseResumeContext } from 'src/context/ResumeContext'
import { z } from 'zod'


const formSchema = z.object({
    name: z.string()
        .min(1, { message: "Name can't be empty" })
        .transform((value) => value.replace(/[^a-zA-Z0-9\s]/g, '')),
})

function ResumeNameModal() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <AlertDialog open={open}>
            <AlertDialogTrigger asChild>
                <FilePlus2 onClick={() => setOpen(true)} />
            </AlertDialogTrigger >
            <AlertDialogContent aria-describedby='undefined'>
                <AlertDialogHeader>
                    <AlertDialogTitle>Resume name</AlertDialogTitle>
                    <AddNameForm setOpen={setOpen} />
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default ResumeNameModal


function AddNameForm({ setOpen }: { setOpen: (prev: boolean) => void }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        },
    })
    const { setResume, resume } = UseResumeContext()

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setResume({
            ...resume,
            resumeName: values?.name
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Add a title for your resume
                                <span className="text-red-600">
                                </span>
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Full stack developer" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <AlertDialogFooter>

                </AlertDialogFooter>
                <div className='flex justify-end'>
                    <AlertDialogCancel onClick={() => {
                        setOpen(false)
                    }
                    } className="">Cancel</AlertDialogCancel>
                    <Button type="submit" className='ml-2 bg-indigo-700'>Create</Button>
                </div>
            </form>
        </Form>
    )

}