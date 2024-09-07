import { useSelector } from "react-redux"
import CategoryCard from "./CategoryCard"
import { RootState } from "src/redux/store"

function ExploreByCategory() {
    
    const category = useSelector((state:RootState) => state?.category)

    return (
        <div className="flex flex-col w-full justify-end items-center px-12 sm:px-32 pt-20 bg-white">
            <div className="flex flex-col w-full max-w-[1192px] max-md:max-w-full">
                <div className="flex gap-2.5 justify-between w-full font-semibold max-md:flex-wrap max-md:max-w-full">
                    <div className="text-5xl text-sky-400 leading-[52.8px] max-md:max-w-full max-md:text-4xl">
                        Explore by <span className="text-sky-400">category</span>
                    </div>
                    <div className="flex gap-4 self-end mt-7 text-base leading-6 text-center text-indigo-600">
                        <div>Show all jobs</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/247d3677732c680ee4f270e0de17e72780a5526fa8c7aeefd90199d2c241fe60?"
                            className="shrink-0 self-start w-6 aspect-square"
                        />
                    </div>
                </div>
                <div className="mt-0 sm:mt-12  max-md:max-w-full pb-3">
                    <div className="flex flex-wrap w-full justify-items-startmax-md:flex-col ">
                        {
                            category?.sectors?.length > 0 &&
                            category?.sectors?.map((data:any) => (
                                <CategoryCard  name={data?.name} image={data?.image} count={data?.jobs} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreByCategory