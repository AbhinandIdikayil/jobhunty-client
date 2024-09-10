import { BarChart } from '@mui/x-charts'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';

function YearChart() {
    const job = useSelector((state: RootState) => state.job);
    const applicants = useSelector((state: RootState) => state.job.applicants);

    const [yearlyData, setYearlyData] = useState<any[]>([]);



    useEffect(() => {
        const filterDataForCurrentYear = () => {
            const currentYear = new Date().getFullYear();
            let jobCountForYear = 0;        // Variable to store the total job count for the current year
            let applicantCountForYear = 0;  // Variable to store the total applicant count for the current year

            // Calculate total jobs for the current year
            job?.jobs?.jobs?.forEach((job: any) => {
                const jobDate = new Date(job?.job?.createdAt);
                if (jobDate.getFullYear() === currentYear) {
                    jobCountForYear++;
                }
            });

            // Calculate total applicants for the current year
            applicants?.forEach((applicant: any) => {
                const applicantDate = new Date(applicant.createdAt);
                if (applicantDate.getFullYear() === currentYear) {
                    applicantCountForYear++;
                }
            });

            // Format the data for the current year
            const formattedData = [
                { data: [jobCountForYear], color: 'violet' },       // Data for total jobs
                { data: [applicantCountForYear], color: 'cyan' }    // Data for total applicants
            ];

            setYearlyData(formattedData);
        };

        filterDataForCurrentYear();
    }, [job?.jobs?.jobs, applicants]);


    return (
        <BarChart
            series={yearlyData}
            height={290}
            xAxis={[{ data: [new Date().getFullYear()], scaleType: 'band' }]}
            margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
    )
}

export default YearChart