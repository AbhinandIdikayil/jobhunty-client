import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { SquarePen } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUserProfile } from 'src/redux/actions/userAction'
import { AppDispatch, RootState } from 'src/redux/store'
import { z } from 'zod'

interface func {
    setOpen: Dispatch<SetStateAction<boolean>>
}

const formSchema = z.object({
    skills: z.array(z.string().min(3, "Skill cannot be empty")).min(1, { message: "At least one skill is required" })
});




function AddSkills() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <AlertDialog open={open}>
                <AlertDialogTrigger asChild>
                    <SquarePen onClick={() => setOpen(true)} />
                </AlertDialogTrigger >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Additional Detaisl </AlertDialogTitle>

                        {/* ////! Here is the form component that is under this component */}
                        <AddSkillsForm setOpen={setOpen} />

                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog >
        </>
    )
}

export default AddSkills


function AddSkillsForm({ setOpen }: func) {
    const state = useSelector((state: RootState) => state?.user)
    const dispatch: AppDispatch = useDispatch()
    
    type FormValues = z.infer<typeof formSchema>;

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            skills: state?.user?.skills || ['']
        },
    });

    // Use `form.control` directly here
    const { fields, append, remove } = useFieldArray({
        control: form.control, // Access control from `form`
        name: 'skills', // Make sure this matches the schema
    });

    const onSubmit = (data: FormValues) => {
        try {
            dispatch(updateUserProfile(data)).unwrap()
            setOpen(false)
            toast.success('skills updated succesfully',{position:'top-center'})
        } catch (error: any) {
            toast.error(error?.message,{position:'top-center'})
            setOpen(false)
            toast.error(error?.message,{position:'top-center'})
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
                {
                    fields?.map((field, index) => (
                        <div key={field.id} className="flex items-center space-x-2">
                            <FormField
                                control={form.control}
                                name={`skills.${index}`}
                                render={({ field }) => (
                                    <FormItem className="flex-grow">
                                        <FormLabel>Skill {index + 1}</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter a skill" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="button"
                                onClick={() => remove(index)}
                                className="self-end"
                                variant="destructive"
                            >
                                Remove
                            </Button>
                        </div>
                    ))
                }
                <Button
                    type="button"
                    onClick={() => append('')}
                    className="mt-2"
                    variant="secondary"
                >
                    Add Skill
                </Button>
                <div>
                    <AlertDialogCancel onClick={() => setOpen(false)} className="">Cancel</AlertDialogCancel>
                    <Button type="submit" className='ml-2 bg-indigo-700'>Submit</Button>
                </div>

            </form>
        </Form>
    )
}