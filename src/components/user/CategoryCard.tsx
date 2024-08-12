import { Link } from 'react-router-dom'

function CategoryCard({image,name,count}:{image: string,name: string,count:number}) {
    return (
        <Link to={'jobs'} className="flex flex-col w-full sm:w-3/12">
            <div className="border-solid border-zinc-200 p-1">
                <div className="flex flex-col grow p-8 mx-auto w-full bg-white border  max-md:px-5 max-md:mt-8">
                    <img
                        loading="lazy"
                        src={image}
                        // src="https://cdn.builder.io/api/v1/image/assets/TEMP/63c8189458ac5f21b05be8bf89f4950a86b8f74a7de1a844d806a44770027777?"
                        className="w-12 h-12 aspect-square"
                    />
                    <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                        {name}
                    </div>
                    <div className="flex gap-4 px-px mt-3 text-lg leading-7 text-slate-500">
                        <div>{count} jobs available</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1883c3f970080ef24d10fc7219940fa5e85397d2971645cdf958557da632f345?"
                            className="shrink-0 my-auto w-6 aspect-square"
                        />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CategoryCard