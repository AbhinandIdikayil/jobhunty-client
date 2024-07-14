import React from "react";
import { DateInput } from "@nextui-org/react";
import { CalendarDate } from "@internationalized/date";
import { useField } from "formik";

interface PasswordInputProps {
    label: string;
    date: string;
}



const TypeDate: React.FC<PasswordInputProps> = ({ label, date }) => {
    const [field, meta] = useField(date)
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4  border-gray-400 mt-6" style={{ border: '0.5px groove' }}>
            {meta.touched && meta.error ? (
                <div style={{ color: 'red' }}>{meta.error}</div>
            ) : null}
            <DateInput {...field} id={date} name={date} label={label} placeholderValue={new CalendarDate(1995, 11, 6)} className="max-w-sm" />
        </div>
    );
}

export default TypeDate
