import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import ApplicationListInDashboard from 'src/components/user/dashboard/ApplicationListInDashboard';

function UserDashboard() {
  const [series] = useState([1, 15, 30, 13]);
  const [options] = useState({
    chart: {
      type: 'donut',
    },
    labels: ['Interviewed', 'shortlisted', 'applied', 'declined'],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 250,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  });
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-wrap gap-2 items-start px-4 py-4 w-full h-[398px]">
        <div className="flex flex-col font-semibold  text-slate-800 sm:w-1/4 shadow-md">
          <div className="flex overflow-hidden items-start px-6 pt-7 max-w-full bg-white border border-solid border-zinc-500 rounded w-[258px] max-md:px-5">
            <div className="flex z-10 flex-col self-start mr-0">
              <div className="text-xl leading-tight">Total Jobs Applied</div>
              <div className="self-start mt-7 text-7xl leading-none text-center max-md:text-4xl">
                45
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/81d209f7c4399a3afb60010a5a56afe0eead64ffb45723cb07f84b5ae7cb3e08?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
              className="object-contain shrink-0 self-end mt-16 aspect-[1.29] w-[88px] max-md:mt-10"
            />
          </div>
          <div className="flex overflow-hidden gap-1 items-start px-6 pt-7 mt-6 max-w-full whitespace-nowrap bg-white border border-solid border-zinc-500 rounded w-[258px] max-md:px-5">
            <div className="flex flex-col self-start">
              <div className="text-xl leading-tight">Interviewed</div>
              <div className="self-start mt-7 text-7xl leading-none max-md:text-4xl">
                18
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e639e7eb7a3e7324143d1f3f1f310726fe1853dbd532adc134c962bd6cba6d13?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
              className="object-contain shrink-0 self-end mt-16 aspect-[1.29] w-[88px] max-md:mt-10"
            />
          </div>
        </div>
        <div className="h-full flex flex-col items-center justify-center px-1 py-7 bg-white border border-solid border-zinc-500 rounded min-w-[240px] sm:w-1/3 max-md:px-5 shadow-md">
          <div className="text-xl font-semibold leading-tight text-center text-slate-800">
            Jobs Applied Status
          </div>
          <div className="flex gap-6 items-center self-stretch mt-5">
            <div className="flex flex-col self-stretch leading-relaxed whitespace-nowrap">
              <div id="chart">
                <ReactApexChart options={options} series={series} type="donut" />
              </div>
            </div>
          </div>
        </div>
        <div className="upcoming h-full flex overflow-y-scroll flex-col pb-3 bg-white border border-solid border-zinc-500 rounded min-w-[290px] sm:w-1/3 max-md:max-w-full shadow-md">
          <div className="flex z-10 flex-col pt-2 pb-2 w-full text-xl font-semibold leading-tight text-gray-800 bg-white border border-solid shadow-lg border-zinc-200 max-md:max-w-full">
            <div className="self-start ml-6 text-center max-md:ml-2.5">
              Upcomming Interviews
            </div>
          </div>
          <div className="flex flex-col px-6  mt-0 w-full text-base leading-relaxed max-md:pl-5 max-md:max-w-full">
            <div className="flex flex-col w-full font-medium text-slate-500">
              <div className="flex gap-4 mt-3 max-w-full rounded-none w-[406px] max-md:mt-10 border-b pb-1">
                <span className='text-sm'>11:00 AM</span>
                <div className="flex z-10 gap-4 self-end py-4 pr-16 pl-4 mt-0 bg-violet-100 rounded-lg max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                    className="object-contain shrink-0 w-12 aspect-square"
                  />
                  <div className="flex flex-col self-start">
                    <div className="self-start text-xs font-semibold text-slate-800 w-full">
                      Joe Bartmann
                    </div>
                    <div className="mt-1.5 text-xs font-medium text-slate-500 whitespace-nowrap">
                      HR Manager at Divvy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-6  mt-0 w-full text-base leading-relaxed max-md:pl-5 max-md:max-w-full">
            <div className="flex flex-col w-full font-medium text-slate-500">
              <div className="flex gap-4 mt-3 max-w-full rounded-none w-[406px] max-md:mt-10 border-b pb-1">
                <span className='text-sm'>11:00 AM</span>
                <div className="flex z-10 gap-4 self-end py-4 pr-16 pl-4 mt-0 bg-violet-100 rounded-lg max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                    className="object-contain shrink-0 w-12 aspect-square"
                  />
                  <div className="flex flex-col self-start">
                    <div className="self-start text-xs font-semibold text-slate-800 w-full">
                      Joe Bartmann
                    </div>
                    <div className="mt-1.5 text-xs font-medium text-slate-500 whitespace-nowrap">
                      HR Manager at Divvy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-6  mt-0 w-full text-base leading-relaxed max-md:pl-5 max-md:max-w-full">
            <div className="flex flex-col w-full font-medium text-slate-500">
              <div className="flex gap-4 mt-3 max-w-full rounded-none w-[406px] max-md:mt-10 border-b pb-1">
                <span className='text-sm'>11:00 AM</span>
                <div className="flex z-10 gap-4 self-end py-4 pr-16 pl-4 mt-0 bg-violet-100 rounded-lg max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                    className="object-contain shrink-0 w-12 aspect-square"
                  />
                  <div className="flex flex-col self-start">
                    <div className="self-start text-xs font-semibold text-slate-800 w-full">
                      Joe Bartmann
                    </div>
                    <div className="mt-1.5 text-xs font-medium text-slate-500 whitespace-nowrap">
                      HR Manager at Divvy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-6  mt-0 w-full text-base leading-relaxed max-md:pl-5 max-md:max-w-full">
            <div className="flex flex-col w-full font-medium text-slate-500">
              <div className="flex gap-4 mt-3 max-w-full rounded-none w-[406px] max-md:mt-10 border-b pb-1">
                <span className='text-sm'>11:00 AM</span>
                <div className="flex z-10 gap-4 self-end py-4 pr-16 pl-4 mt-0 bg-violet-100 rounded-lg max-md:pr-5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d74c2893b9d42818e9c2f8d7bd2c796ece8dc0a145e626cc1a57f2a7ba95ea26?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                    className="object-contain shrink-0 w-12 aspect-square"
                  />
                  <div className="flex flex-col self-start">
                    <div className="self-start text-xs font-semibold text-slate-800 w-full">
                      Joe Bartmann
                    </div>
                    <div className="mt-1.5 text-xs font-medium text-slate-500 whitespace-nowrap">
                      HR Manager at Divvy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ApplicationListInDashboard />
    </div>
  )
}

export default UserDashboard

