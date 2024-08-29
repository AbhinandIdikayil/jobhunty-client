import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { editSkill } from 'src/redux/actions/adminAction'
import { AppDispatch, RootState } from 'src/redux/store'
import { z } from 'zod'


function EditSkillModal({ ind }: { ind: number }) {
    const [open, setOpen] = useState<boolean>(false)
    const handleOpenChange = (newOpen: boolean) => {
        if (!newOpen) {
            // Only allow the dialog to close if we're setting it to false
            setOpen(false);
        }
    };

    return (
        <AlertDialog open={open} onOpenChange={handleOpenChange}
        >
            <AlertDialogTrigger asChild>
                <button onClick={(e) => {
                    e.stopPropagation(); // Prevent event from bubbling up
                    setOpen(true);
                }} className="w-full font-bold">
                    Edit
                </button>
            </AlertDialogTrigger >
            <AlertDialogContent >
                <AlertDialogHeader>
                    <AlertDialogTitle>Edit profile</AlertDialogTitle>

                    {/* ////! Here is the form component that is under this component */}
                    <EditSkillForm setOpen={setOpen} ind={ind} />

                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

function EditSkillForm({ setOpen, ind }: { setOpen: (prev: boolean) => void, ind: number }) {
    const dispatch: AppDispatch = useDispatch()
    const skill = useSelector((state: RootState) => state.admin)
    const formSchema = z.object({
        name: z.string().nonempty({ message: 'title is required' }),
    })


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: skill?.skills?.[ind]?.name || ''
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            let req = {
                ...values,
                _id:skill?.skills?.[ind]?._id
            }
            await dispatch(editSkill(req)).unwrap()
        } catch (error: any) {
            if (error?.message) {
                toast.error(error?.message);
                return;
            } else {
                toast.error('An unknown error occurred.');
            }
        } finally {
            setOpen(false)
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={(e: any) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit(onSubmit)(e);
            }} className="space-y-1" onClick={(e) => e.stopPropagation()}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Skill
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="skills..."
                                    onKeyDown={(e) => e.stopPropagation()}
                                    onClick={(e) => e.stopPropagation()}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <AlertDialogCancel onClick={(e) => { e.stopPropagation(); setOpen(false); }} className="">Cancel</AlertDialogCancel>
                <Button type="submit" className='ml-2 bg-indigo-700'>Submit</Button>
            </form>
        </Form>
    )
}

export default EditSkillModal