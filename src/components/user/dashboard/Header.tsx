import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { HiMenuAlt3 } from 'react-icons/hi'

interface props {
    func: () => void,
    open: boolean
}

function Header({func, open}:props) {
    return (
        <div className="flex gap-5 justify-between px-8 w-full bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full" style={{ borderBottom: '.5px solid black', paddingBlock: '16px' }}>
            <div className="flex gap-4 whitespace-nowrap">
                <div className={`flex items-center ${open ? 'hidden' : ''} `}>
                    <HiMenuAlt3 onClick={func} color='black' size={30} />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex gap-2">
                    <div className="flex-auto text-2xl font-bold tracking-tight leading-9 text-slate-800">
                            Dashboard
                        </div>
                        {/* <DropDown /> */}
                    </div>
                </div>
            </div>
            <div className="flex gap-5 justify-center text-base font-bold leading-6 text-center text-white">
                <Popover>
                    <PopoverTrigger asChild>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/22cc243b4b17eb6822f1aae2f96ecac59c86787ba7154d9a5282f66481ba231f?apiKey=bf80438c4595450788b907771330b274&"
                            className="shrink-0 my-auto w-10 aspect-square"
                        />
                    </PopoverTrigger>
                    <PopoverContent align="end" className="w-40 sm:w-80" style={{ zIndex: 99 }}>
                        <ScrollArea className="h-40 sm:h-48 rounded-md ">

                            <div className="grid gap-4">
                                <div className="space-y-2">
                                    <h4 className="font-medium leading-none">Dimensions</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Set the dimensions for the layer.
                                    </p>
                                </div>
                                <div className="grid gap-2">
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="width">Width</Label>
                                        <Input
                                            id="width"
                                            defaultValue="100%"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="maxWidth">Max. width</Label>
                                        <Input
                                            id="maxWidth"
                                            defaultValue="300px"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="height">Height</Label>
                                        <Input
                                            id="height"
                                            defaultValue="25px"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 items-center gap-4">
                                        <Label htmlFor="maxHeight">Max. height</Label>
                                        <Input
                                            id="maxHeight"
                                            defaultValue="none"
                                            className="col-span-2 h-8"
                                        />
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </PopoverContent>
                </Popover>
                <div className="flex gap-2.5 justify-center px-6 py-3 bg-indigo-600 max-md:px-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cf21e8a0b760a5ffef9e7996a107a62bc1d05df032f9ade093a7c12125c833?apiKey=bf80438c4595450788b907771330b274&"
                        className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div>Post a job</div>
                </div>
            </div>
        </div>
    )
}

export default Header