"use client"

import * as React from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { addDays, format , isBefore } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>()

  function disableFutureDates () {
    const today = new Date()
    return isBefore(date,today)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[240px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="flex w-auto flex-col space-y-2 p-2"
      >
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), -parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value={(365 * 1).toString()}>1 year back</SelectItem>
            <SelectItem value={(365 * 2).toString()}>2 years back</SelectItem>
            <SelectItem value={(365 * 5).toString()}>5 years back</SelectItem>
            <SelectItem value={(365 * 10).toString()}>10 years backk</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border">
          <Calendar mode="single" selected={date} onSelect={setDate} disabled={(date) => !disableFutureDates(date)} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
