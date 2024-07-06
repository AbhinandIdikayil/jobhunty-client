import { HiMenuAlt3 } from "react-icons/hi";

interface props {
    func: () => void,
    open: boolean
}

function Header({func,open}:props) {
    return (
        <div className="flex gap-5 justify-between px-8 py-4 w-full bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
            <div className="flex gap-4 whitespace-nowrap">
                <div className={`flex items-center ${open ? 'hidden' : ''} `}>
                    <HiMenuAlt3 onClick={func} color='black' size={30} />
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/28fcac72ebb7d51aabcc8a2e42dcfd241ea63b6ee352291d3a8ebc64ceae3826?apiKey=bf80438c4595450788b907771330b274&"
                    className="shrink-0 self-start w-12 aspect-square"
                />
                <div className="flex flex-col">
                    <div className="text-base leading-6 text-slate-600">
                        Company
                    </div>
                    <div className="flex gap-2 text-xl font-semibold leading-6 text-slate-800">
                        <div>Nomad</div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/11e2517998516c181ac04025690221ae22f5c4e4eb4dee7f65d6fdbaf2f88a9b?apiKey=bf80438c4595450788b907771330b274&"
                            className="shrink-0 w-6 aspect-square"
                        />
                    </div>
                </div>
            </div>
            <div className="flex gap-5 justify-center text-base font-bold leading-6 text-center text-white">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/22cc243b4b17eb6822f1aae2f96ecac59c86787ba7154d9a5282f66481ba231f?apiKey=bf80438c4595450788b907771330b274&"
                    className="shrink-0 my-auto w-10 aspect-square"
                />
                <div className="flex gap-2.5 justify-center px-6 py-3 bg-indigo-600 max-md:px-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cf21e8a0b760a5ffef9e7996a107a62bc1d05df032f9ade093a7c12125c833?apiKey=bf80438c4595450788b907771330b274&"
                        className="shrink-0 self-start w-6 aspect-square"
                    />
                    <div>Post a job</div>
                </div>
            </div>
        </div>
    )
}

export default Header