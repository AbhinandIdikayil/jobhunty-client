import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function CategoryCard({image,name,count}:{image: string,name: string,count:number}) {
    return (
        <Link to={'jobs'} className="flex flex-col w-full sm:w-3/12">
            <div className="border-solid border-zinc-200 p-1">
                <div className="flex flex-col grow p-8 mx-auto w-full bg-white border  max-md:px-5 max-md:mt-8 hover:bg-indigo-600 duration-300 hover:rounded-xl hover:-translate-y-2 group">
                    <img
                        loading="lazy"
                        src={image}
                        // src="https://cdn.builder.io/api/v1/image/assets/TEMP/63c8189458ac5f21b05be8bf89f4950a86b8f74a7de1a844d806a44770027777?"
                        className="w-12 h-12 aspect-square rounded-lg"
                    />
                    <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800 group-hover:text-white">
                        {name}
                    </div>
                    <div className="flex gap-4 px-px mt-3 text-lg leading-7 text-slate-500">
                        <div className='group-hover:text-white'>{count} jobs available</div>
                        <ArrowRight className='group-hover:text-white' />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CategoryCard