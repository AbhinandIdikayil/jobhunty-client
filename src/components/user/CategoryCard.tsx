import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const cardMotion = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: 'easeOut' },
    },
}

function CategoryCard({ image, name, count, index = 0 }: { image: string, name: string, count: number, index?: number }) {
    return (
        <motion.div
            variants={cardMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.08 }}
        >
            <Link
                to={'jobs'}
                className="group block rounded-[24px] border border-warm-border bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfaf7_100%)] p-6 shadow-warm transition-all duration-300 hover:-translate-y-1 hover:shadow-warm-md"
            >
                <div className="w-11 h-11 rounded-2xl bg-indigo-600/10 grid place-items-center overflow-hidden">
                    <img
                        loading="lazy"
                        src={image}
                        className="w-6 h-6 object-contain"
                        alt={name}
                    />
                </div>
                <div className="mt-5 text-lg font-semibold leading-tight tracking-tight text-slate-900">
                    {name}
                </div>
                <div className="flex items-center justify-between mt-4">
                    <span className="rounded-full bg-slate-900/5 px-3 py-1.5 text-xs font-medium text-slate-700">
                        {count} jobs available
                    </span>
                    <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300"
                    />
                </div>
            </Link>
        </motion.div>
    )
}

export default CategoryCard