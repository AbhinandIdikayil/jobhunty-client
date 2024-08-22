import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { useSelector } from 'react-redux'
import { RootState } from 'src/redux/store'

function SectoresAccordian({handleCategory}:{handleCategory:(e:any,id:string) => void}) {
    const categoryState = useSelector((state: RootState) => state.category)
    return (
        <AccordionItem className='text-sm text-black border px-2 rounded-lg mt-1 shadow-sm' value="item-2">
            <AccordionTrigger className='font-bold'>Categories</AccordionTrigger>
            <AccordionContent>
                {
                    categoryState?.sectors?.map(data => (
                        <div onClick={(e) => handleCategory(e, data?._id)}
                            className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                            <Checkbox id="terms2" />
                            <label
                                htmlFor="terms2"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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

export default SectoresAccordian