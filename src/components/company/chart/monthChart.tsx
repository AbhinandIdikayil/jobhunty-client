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

    const [yearData, setYearData] = useState<any[]>([]);

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

            // Create an array to store job and applicant counts for each month
            const monthDataArray: any[] = Array.from({ length: 12 }, () => ({ jobCount: 0, applicantCount: 0 }));

            // Filter and count jobs and applicants by month
            job?.jobs?.jobs?.forEach((job: any) => {
                const jobDate = new Date(job?.job?.createdAt);
                if (jobDate.getFullYear() === currentYear) {
                    const jobMonth = jobDate.getMonth(); // Month is zero-based (0 = January, 11 = December)
                    monthDataArray[jobMonth].jobCount++;
                }
            });

            applicants?.forEach((applicant: any) => {
                const applicantDate = new Date(applicant.createdAt);
                if (applicantDate.getFullYear() === currentYear) {
                    const applicantMonth = applicantDate.getMonth(); // Month is zero-based (0 = January, 11 = December)
                    monthDataArray[applicantMonth].applicantCount++;
                }
            });

            // Format the data to be used in the chart or visualization
            const formattedData = monthDataArray.map((data, index) => ({
                month: new Date(currentYear, index).toLocaleString('default', { month: 'short' }), // Convert index to month name
                data: [data.jobCount, data.applicantCount],
                color: index % 2 === 0 ? 'violet' : 'cyan',
            }));

            setYearData(formattedData);
        };

        filterDataByYear();
    }, [job?.jobs?.jobs, applicants]);


    return (
        <BarChart
            series={yearData}
            height={290}
            xAxis={[{ data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
    )
}

export default MonthChart