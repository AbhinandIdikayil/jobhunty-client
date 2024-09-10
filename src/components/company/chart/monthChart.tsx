import { BarChart } from '@mui/x-charts'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJob, listApplicants } from 'src/redux/actions/jobAction';
import { AppDispatch, RootState } from 'src/redux/store';

function MonthChart() {
    const dispatch: AppDispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user);
    const job = useSelector((state: RootState) => state.job);
    const applicants = useSelector((state: RootState) => state.job.applicants);

    const [yearlyData, setYearlyData] = useState<any[]>([]);

    useEffect(() => {
        const update = async () => {
            await dispatch(getAllJob({ _id: user?.user?._id }));
            await dispatch(listApplicants());
        };
        update();
    }, []);

    useEffect(() => {
        const filterDataByYear = () => {
            const currentYear = new Date().getFullYear();
            const jobCountsByMonth = Array(12).fill(0); // Array to hold job counts for each month
            const applicantCountsByMonth = Array(12).fill(0); // Array to hold applicant counts for each month

            // Filter jobs by the current year
            job?.jobs?.jobs?.forEach((job: any) => {
                const jobDate = new Date(job?.job?.createdAt);
                if (jobDate.getFullYear() === currentYear) {
                    const month = jobDate.getMonth(); // Get month (0 - 11)
                    jobCountsByMonth[month]++;
                }
            });

            // Filter applicants by the current year
            applicants?.forEach((applicant: any) => {
                const applicantDate = new Date(applicant.createdAt);
                if (applicantDate.getFullYear() === currentYear) {
                    const month = applicantDate.getMonth(); // Get month (0 - 11)
                    applicantCountsByMonth[month]++;
                }
            });

            // Format the data for display
            const formattedData = [
                { data: jobCountsByMonth, color: 'violet' },       // Data for jobs
                { data: applicantCountsByMonth, color: 'cyan' }    // Data for applicants
            ];

            setYearlyData(formattedData);
        };

        filterDataByYear();
    }, [job?.jobs?.jobs, applicants]);
    return (
        <BarChart
            series={yearlyData}
            height={290}
            xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
    )
}

export default MonthChart