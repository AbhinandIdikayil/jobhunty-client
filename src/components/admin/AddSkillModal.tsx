import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { PlusCircle } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { addSkill } from 'src/redux/actions/adminAction'
import { AppDispatch } from 'src/redux/store'
import { z } from 'zod'

function AddSkillModal() {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <AlertDialog open={open}>
            <AlertDialogTrigger asChild>
                <Button size="sm" className="h-8 gap-1" onClick={() => setOpen(true)}>
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add Skills
                    </span>
                </Button>
            </AlertDialogTrigger >
            <AlertDialogContent >
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit profile</AlertDialogTitle>

                    {/* ////! Here is the form component that is under this component */}
                    <AddSkillForm setOpen={setOpen} />

                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

function AddSkillForm({ setOpen }: { setOpen: (prev: boolean) => void }) {
    const dispatch: AppDispatch = useDispatch()
    const formSchema = z.object({
        name: z.string().nonempty({ message: 'title is required' }),
    })


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ''
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await dispatch(addSkill(values)).unwrap()
            setOpen(false)
        } catch (error: any) {
            if (error?.message) {
                toast.error(error?.message);
                return;
            } else {
                toast.error('An unknown error occurred.');
            }
            setOpen(false)
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Skill
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="skills..." {...field} />
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

export default AddSkillModal