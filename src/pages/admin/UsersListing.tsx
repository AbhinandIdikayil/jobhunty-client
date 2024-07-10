import { useOutletContext } from "react-router-dom"
import { prop } from "../../types/AllTypes"

function UsersListing() {
    const {open} = useOutletContext<prop>()
    return (
        <div className={`flex flex-col ml-5 ${open ? 'w-5/6' : 'w-full'}max-md:ml-0 max-md:w-full`}>

        </div>
    )
}

export default UsersListing