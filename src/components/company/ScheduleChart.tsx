import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from 'react';

const ScheduleChart = ({ data }: { data: any }) => {
    const [events,setEvents] = useState()

    return (
        <>
            <div className='w-full'>
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin]}
                    initialView='dayGridWeek'
                    headerToolbar={{
                        start: "today prev,next",
                        center: "title",
                        end: "dayGridMonth, timeGridWeek, timeGridDay"
                    }}
                    events={events}
                    eventContent={renderEventContent}

                />
            </div>
        </>
    );
};

function renderEventContent(eventInfo: { timeText: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; event: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; }) {
    return (
        <div className='flex w-full flex-col justify-center bg-lightgreen px-3 py-1 border bg-gray-100 border-customviolet rounded-md text-customviolet font-semibold'>
            <b>{eventInfo.timeText}</b>
            <p className='w-full overflow-hidden overflow-ellipsis whitespace-normal break-words'>
                {eventInfo.event.title}
            </p>
        </div>
    )
}

export default ScheduleChart;



