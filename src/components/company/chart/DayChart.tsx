import { BarChart } from '@mui/x-charts'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJob, listApplicants } from 'src/redux/actions/jobAction';
import { AppDispatch, RootState } from 'src/redux/store';

function DayChart() {
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const job = useSelector((state: RootState) => state.job);
    const applicants = useSelector((state: RootState) => state.job.applicants);

    const [weekData, setWeekData] = useState<any[]>([]);

    useEffect(() => {
        const update = async () => {
            await dispatch(getAllJob({_id:user?.user?._id}));
            await dispatch(listApplicants());
        };
        update();
    }, []);

    useEffect(() => {
        const filterDataByWeek = () => {
            const currentDate = new Date();
            const currentDay = currentDate.getDay();
            const startDate = new Date(currentDate);
            startDate.setDate(startDate.getDate() - currentDay);
            startDate.setHours(0, 0, 0, 0);
            const endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + 6);
            endDate.setHours(23, 59, 59, 999);

            const filteredJobs = job?.jobs?.jobs?.filter((job: any) => {
                const jobDate = new Date(job?.job?.createdAt);
                return jobDate >= startDate && jobDate <= endDate;
            });

            const filteredApplicants = applicants?.filter((applicant: any) => {
                const applicantDate = new Date(applicant.createdAt);
                return applicantDate >= startDate && applicantDate <= endDate;
            });


            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const dayData: any[] = daysOfWeek.map(() => ({ jobCount: 0, applicantCount: 0 }));


            filteredJobs?.forEach((job: any) => {
                const jobDay = new Date(job.createdAt).getDay();
                dayData[jobDay].jobCount++;
            });

            filteredApplicants?.forEach((applicant: any) => {
                const applicantDay = new Date(applicant.createdAt).getDay();
                dayData[applicantDay].applicantCount++;
            });


            const formattedData = daysOfWeek.map((_, index) => ({
                data: [dayData[index].jobCount, dayData[index].applicantCount],
                color: index % 2 === 0 ? 'violet' : 'cyan',
            }));

            setWeekData(formattedData);
        };

        filterDataByWeek();
    }, [job?.jobs?.jobs, applicants]);

    return (
        <div>
            <BarChart
                series={weekData}
                height={290}
                xAxis={[{ data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
            />
        </div>
    );
    return (
        <div>DayChart</div>
    )
}

export default DayChart