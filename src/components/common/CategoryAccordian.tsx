import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'

function CategoryAccordian({handleEmployment}:{handleEmployment:(e:any,id:string) => void}) {
    const categoryState = useSelector((state:RootState) => state.category)
    return (
        <AccordionItem value="item-1" className='border px-2 rounded-lg shadow-sm'>
            <AccordionTrigger className='text-sm text-black font-bold'>Types Of Employment</AccordionTrigger>
            <AccordionContent>
                {
                    categoryState.category?.map(data => (
                        <div onClick={(e) => handleEmployment(e, data?._id)} className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                            <Checkbox id="terms2" />
                            <label
                                htmlFor="terms2"
                                className="text-sm text-black font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {data?.name}
                            </label>
                        </div>
                    ))
                }
            </AccordionContent>
        </AccordionItem>
    )
}

export default CategoryAccordian