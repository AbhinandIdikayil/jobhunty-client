import * as React from 'react'
import { Search, MapPin, ArrowRight, Briefcase, Building2, Users, Sparkles } from 'lucide-react'
import ExploreByCategory from 'src/components/user/ExploreByCategory'
import { motion } from 'framer-motion'

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.45,
            ease: 'easeOut',
        },
    }),
}

const staggerMotion = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
}

const stats = [
    { icon: Briefcase, label: 'Jobs Available', value: '5,000+' },
    { icon: Building2, label: 'Companies', value: '200+' },
    { icon: Users, label: 'Active Users', value: '10K+' },
]

function Home() {
    const [searchTerm, setSearchTerm] = React.useState('')
    const [location, setLocation] = React.useState('')

    return (
        <>
            {/* ─── Hero ─── */}
            <section className="relative isolate w-full overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.10),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(15,23,42,0.06),_transparent_28%),linear-gradient(180deg,_#faf9f7_0%,_#f5f3ef_100%)]">
                {/* Decorative blurs — same style as company dashboard */}
                <div
                    className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl"
                    aria-hidden="true"
                />
                <div
                    className="pointer-events-none absolute -right-20 top-36 h-80 w-80 rounded-full bg-slate-900/10 blur-3xl"
                    aria-hidden="true"
                />

                <motion.div
                    variants={staggerMotion}
                    initial="hidden"
                    animate="visible"
                    className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28"
                >
                    {/* ── Badge ── */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700"
                    >
                        <Sparkles size={14} />
                        Discover opportunities
                    </motion.div>

                    {/* ── Headline ── */}
                    <motion.h1
                        custom={1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
                    >
                        Discover more than{' '}
                        <span className="text-indigo-600">5000+ Jobs</span>
                    </motion.h1>

                    {/* ── Subtitle ── */}
                    <motion.p
                        custom={2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base"
                    >
                        Great platform for the job seeker that searching for new career
                        heights and passionate about startups.
                    </motion.p>

                    {/* ── Search Bar Card ── */}
                    <motion.div
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-10 sm:mt-12 max-w-2xl"
                    >
                        <div className="flex flex-col sm:flex-row items-stretch rounded-[24px] overflow-hidden border border-warm-border bg-white shadow-warm">
                            {/* Job title / company input */}
                            <label className="flex items-center gap-3 flex-1 px-5 py-4 sm:py-0 sm:min-h-[60px] border-b sm:border-b-0 sm:border-r border-warm-border">
                                <Search size={18} strokeWidth={2} className="text-warm-text-tertiary shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Job title or company"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-transparent outline-none text-sm font-body text-warm-text-primary placeholder:text-warm-text-tertiary"
                                />
                            </label>

                            {/* Location select */}
                            <label className="flex items-center gap-3 flex-1 px-5 py-4 sm:py-0 sm:min-h-[60px] border-b sm:border-b-0 sm:border-r border-warm-border">
                                <MapPin size={18} strokeWidth={2} className="text-warm-text-tertiary shrink-0" />
                                <select
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className={`w-full bg-transparent outline-none text-sm font-body appearance-none cursor-pointer ${location ? 'text-warm-text-primary' : 'text-warm-text-tertiary'}`}
                                >
                                    <option value="">Select location</option>
                                    <option value="new-york">New York</option>
                                    <option value="san-francisco">San Francisco</option>
                                    <option value="london">London</option>
                                    <option value="remote">Remote</option>
                                </select>
                            </label>

                            {/* CTA — indigo-600 to match dashboard interactive accent */}
                            <button className="flex items-center justify-center gap-2 px-7 py-4 sm:py-0 sm:min-h-[60px] text-sm font-semibold tracking-wide text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 active:scale-[0.97] shrink-0 font-body">
                                Search Jobs
                                <ArrowRight size={16} strokeWidth={2.5} />
                            </button>
                        </div>

                        {/* Hint text */}
                        <p className="mt-3.5 text-xs sm:text-sm text-warm-text-tertiary font-body">
                            Popular: UI Designer, UX Researcher, Android Developer, Admin
                        </p>
                    </motion.div>

                    {/* ── Stats Row ── */}
                    <motion.div
                        custom={4}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-14 sm:mt-16 flex flex-wrap gap-6 sm:gap-10"
                    >
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex items-center gap-3">
                                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-indigo-600/10">
                                    <stat.icon size={18} strokeWidth={2} className="text-indigo-600" />
                                </div>
                                <div>
                                    <div className="text-xl font-semibold leading-none text-slate-900">
                                        {stat.value}
                                    </div>
                                    <div className="mt-0.5 text-xs text-warm-text-secondary font-body">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* ─── Categories ─── */}
            <ExploreByCategory />
        </>
    )
}

export default Home
