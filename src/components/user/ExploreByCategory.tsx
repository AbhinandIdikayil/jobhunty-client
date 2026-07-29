import { useSelector } from "react-redux"
import CategoryCard from "./CategoryCard"
import { RootState } from "src/redux/store"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const sectionMotion = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
    },
}

function ExploreByCategory() {

    const category = useSelector((state: RootState) => state?.category)

    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-16 sm:pb-24">

                {/* ── Header row ── */}
                <motion.div
                    variants={sectionMotion}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-14"
                >
                    <div>
                        <p className="text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
                            Browse openings
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                            Explore by{' '}
                            <span className="text-indigo-600">category</span>
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                            Find roles that match your expertise across our most popular sectors.
                        </p>
                    </div>

                    <a
                        href="/home/jobs"
                        className="inline-flex items-center gap-2 rounded-full border border-warm-border bg-warm-surface px-4 py-2 text-sm font-semibold text-warm-text-primary transition-colors hover:bg-white group shrink-0"
                    >
                        Show all jobs
                        <ArrowRight
                            size={16}
                            strokeWidth={2.5}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </a>
                </motion.div>

                {/* ── Cards grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        category?.sectors?.length > 0 &&
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        category?.sectors?.map((data: any, idx: number) => (
                            <CategoryCard key={data?.name || idx} name={data?.name} image={data?.image} count={data?.jobs} index={idx} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ExploreByCategory