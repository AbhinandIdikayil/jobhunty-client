import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUserProfile } from 'src/redux/actions/userAction'
import { AppDispatch, RootState } from 'src/redux/store'
import { formatDate } from 'src/utils/formateDatetoDateinput'
import { z } from 'zod'


interface UserEditEducation {
    setOpen: Dispatch<SetStateAction<boolean>>,
    ind: number
}


const educationSchema = z.object({
    university: z.string().nonempty({ message: 'University name is required' }),
    course: z.string().nonempty({ message: 'Course is required' }),
    year: z.object({
        from: z.date({ required_error: 'Start date is required' }).refine(date => date <= new Date(), {
            message: 'Start date must be in the past'
        }),
        to: z.date({ required_error: 'End date is required' }).refine(date => date <= new Date(), {
            message: 'End date must be in the past'
        })
    }).refine(data => data.from <= data.to, {
        message: 'Start date must be before or equal to the end date',
        path: ['from']  // Specify the path to indicate where the error should be applied
    }),
    description: z.string(),
})

const formSchema = z.object({
    education: z.array(educationSchema)
})



function EditEducation({ ind }: { ind: number }) {
    const [open, setOpen] = useState<boolean>(false)
    return (
        <AlertDialog open={open}>
            <AlertDialogTrigger asChild >
                <Edit onClick={() => setOpen(true)} />
            </AlertDialogTrigger >
            <AlertDialogContent className='max-x-fit max-h-fit'>
                <AlertDialogHeader>
                    <AlertDialogTitle>Social links </AlertDialogTitle>

                    {/* ////! Here is the form component that is under this component */}
                    <EditEducationForm setOpen={setOpen} ind={ind} />

                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default EditEducation

function EditEducationForm({ setOpen, ind }: UserEditEducation) {

    const state = useSelector((state: RootState) => state?.user);
    const dispatch: AppDispatch = useDispatch()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            education: [
                {
                    university: state?.user?.education?.[ind]?.university,
                    course: state?.user?.education?.[ind]?.course,
                    year: {
                        from: new Date(state?.user?.education?.[ind]?.year?.from),
                        to: new Date(state?.user?.education?.[ind]?.year?.to)
                    },
                    description: state?.user?.education?.[ind]?.description || ''
                }
            ]
        },
    })


    function onSubmit(values: z.infer<typeof formSchema>) {
        const updatedEducation = values.education.map((ed:any) => ({
            ...ed,
            year: {
                from: ed.year.from?.toISOString(),
                to: ed.year.to?.toISOString()
            }
        }));
        const payload = {
            education: state.user?.education?.map((data:any,index:number) => {
                return index == ind ? updatedEducation[0] : data
            })
        };
        try {
            dispatch(updateUserProfile(payload)).unwrap()
            setOpen(false)
            toast.success('Education updated succesfully',{position:'top-center'})
        } catch (error: any) {
            setOpen(false)
            console.log(error)
            toast.error(error?.message,{position:'top-center'})

        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-0">

                <FormField
                    control={form.control}
                    name={`education.${0}.university`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>university
                            </FormLabel>
                            <FormControl>
                                <Input  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`education.${0}.course`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>course

                            </FormLabel>
                            <FormControl>
                                <Input  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name={`education.${0}.description`}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>description

                            </FormLabel>
                            <FormControl>
                                <Input  {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex gap-2'>
                    <FormField
                        control={form.control}
                        name={`education.${0}.year.from`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>from

                                </FormLabel>
                                <br />
                                <FormControl>
                                    <input
                                        className='border border-solid border-gray-400'
                                        type='date'
                                        value={field?.value ? formatDate(field?.value) : ''}
                                        onChange={(e) => {
                                            const valueAsDate = e.target.value ? new Date(e.target.value) : null;
                                            field.onChange(valueAsDate);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name={`education.${0}.year.to`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>to

                                </FormLabel>
                                <br />
                                <FormControl>
                                    <input
                                        className='border border-solid border-gray-400'
                                        type='date'
                                        value={field?.value ? formatDate(field?.value) : ''}
                                        onChange={(e) => {
                                            const valueAsDate = e.target.value ? new Date(e.target.value) : null;
                                            field.onChange(valueAsDate);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <AlertDialogCancel onClick={() => setOpen(false)} className="">Cancel</AlertDialogCancel>
                <Button type="submit" className='ml-2 bg-indigo-700'>Submit</Button>

            </form>
        </Form>
    )
}