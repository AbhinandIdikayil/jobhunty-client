import { formatDateToThree } from "src/utils/formateDate";

function CompanyDetailsHeader({data}:{data:any}) {
  return (
    <div className="flex flex-wrap gap-3 items-center w-full">
      <img
        loading="lazy"
        srcSet={data?.images}
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-1/6"
      />
      <div className="flex flex-col self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col self-start">
          <div className="flex gap-3 items-center">
            <div className="self-stretch my-auto text-5xl font-semibold leading-none text-slate-800 max-md:text-4xl">
              {data?.name}
            </div>
            {/* <div className="gap-2 self-stretch px-3 py-1 my-auto text-base leading-relaxed text-center text-indigo-600 border border-indigo-600 border-solid">
              43 Jobs
            </div> */}
          </div>
          <a href={data?.website} target="_blank" className="mt-3 text-base font-semibold leading-relaxed text-indigo-600">
          {data?.website}
          </a>
        </div>
        <div className="flex flex-wrap gap-10 items-start mt-6 max-md:max-w-full">
          <div className="flex gap-4 items-center">
            <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 bg-white rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa5737db9ef482edec7d22640ae70591f1d2cb6f545f085dbbf61c93f9d7ed3c?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                className="object-contain w-6 aspect-square"
              />
            </div>
            <div className="flex flex-col self-stretch my-auto text-base leading-relaxed">
              <div className="text-slate-600">Founded</div>
              <div className="font-semibold text-slate-800">  {data?.foundedDate && formatDateToThree(data?.foundedDate) || 'non disclosable'} </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 bg-white rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdb3057de9ae7f2270edc999b1710752f4c173f0d79f39524a597ec47c1edfa6?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                className="object-contain w-6 aspect-square"
              />
            </div>
            <div className="flex flex-col self-stretch my-auto text-base leading-relaxed whitespace-nowrap">
              <div className="text-slate-600">Employees</div>
              <div className="font-semibold text-slate-800"> {data?.employees} </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 bg-white rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/63e17c9becfeb1e95f13ad6037d26d2864566d21e479b48681fc75d0ca295977?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                className="object-contain w-6 aspect-square"
              />
            </div>
            <div className="flex flex-col self-stretch my-auto text-base leading-relaxed">
              <div className="text-slate-600">Location</div>
              <div className="font-semibold text-slate-800"> {data?.locations?.length + ' Location'} </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-2.5 items-center self-stretch p-2.5 my-auto w-11 h-11 bg-white rounded-[50px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/26531dffa619e5cc4bf25ff6cfbae274efcec0b7e6ff88f777493f37ec6a30b4?placeholderIfAbsent=true&apiKey=bf80438c4595450788b907771330b274"
                className="object-contain w-6 aspect-square"
              />
            </div>
            <div className="flex flex-col self-stretch my-auto text-base leading-relaxed">
              <div className="text-slate-600">Industry</div>
              <div className="font-semibold text-slate-800">
                 {data?.industry ?? 'non-disclosable'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDetailsHeader