import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { formatSalary } from 'src/utils/formatSalary'

function SalaryAccordian({ handleSalary, setMinSalary, setMaxSalary }: { handleSalary: (e: any, data: any) => void, setMinSalary: any, setMaxSalary: any }) {
    let salary = [[100000, 300000], [300000, 600000],
    [600000, 1200000], [1200000, 2350000]]
    return (
        <AccordionItem className='text-sm text-black border px-2 rounded-lg mt-1 shadow-sm' value="item-4">
            <AccordionTrigger className='font-bold'>Salary Range</AccordionTrigger>
            <AccordionContent>
                <div className='flex gap-2 items-center justify-start mb-1'>
                    <input type="number" onChange={(e) => setMinSalary(parseInt(e.target.value))} className='border border-solid h-8 w-1/3 px-2' min={0} max={10000000} />
                    <input type="number" onChange={(e) => setMaxSalary(parseInt(e.target.value))} className='border border-solid h-8 w-1/3 px-2' min={0} max={10000000} />
                    {/* <CircleChevronRight onClick={handleSubmit} className='text-gray-500' /> */}
                </div>
                {

                    salary?.map((data,ind:number) => (
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