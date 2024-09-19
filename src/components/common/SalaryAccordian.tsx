import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { CircleChevronRight } from 'lucide-react'
import { formatSalary } from 'src/utils/formatSalary'

function SalaryAccordian({ handleSalary, setMinSalary, setMaxSalary, minSalary, handleInputSalary }: { handleSalary: (e: any, data: any) => void, setMinSalary: any, setMaxSalary: any, minSalary: number | undefined, handleInputSalary: (d: any) => void }) {
    let salary = [[100000, 300000], [300000, 600000],
    [600000, 1200000], [1200000, 2350000]]
    return (
        <AccordionItem className='text-sm text-black border px-2 rounded-lg mt-1 shadow-sm' value="item-4">
            <AccordionTrigger className='font-bold'>Salary Range</AccordionTrigger>
            <AccordionContent>
                <div className='flex gap-2 items-center justify-start mb-1'>
                    <input type="number"
                        onInput={(e: any) => {
                            const value = Math.max(0, parseInt(e.target.value) || 0); // Ensure the value is non-negative
                            e.target.value = value.toString(); // Update the input value to be non-negative
                        }}
                        onChange={(e) => setMinSalary(parseInt(e.target.value))} className='border border-solid h-8 w-5/12 px-2' min={0} max={10000000} />
                    <input type="number"
                        onInput={(e: any) => {
                            let value = Math.max(0, parseInt(e.target.value) || 0); // Ensure the value is non-negative
                            if(!minSalary) return
                            if (value < minSalary) {
                                value = minSalary; // If value is less than minSalary, reset it to minSalary
                            }
                            setMaxSalary(value);
                            e.target.value = value.toString(); // Update the input value to the validated non-negative number
                        }}
                        onChange={(e) => setMaxSalary(parseInt(e.target.value))} className='border border-solid h-8 w-5/12 px-2' min={0} max={10000000} />
                    <CircleChevronRight onClick={handleInputSalary} className='text-gray-500' />
                </div>
                {

                    salary?.map((data, ind: number) => (
                        <div key={ind} className='flex flex-wrap gap-2 items-center justify-start mb-1'>
                            <Checkbox id="terms2" onClick={(e) => handleSalary(e, data)} />
                            <label
                                htmlFor="terms2"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {formatSalary(data[0], data[1])}
                            </label>
                        </div>
                    ))
                }

            </AccordionContent>
        </AccordionItem>
    )
}

export default SalaryAccordian