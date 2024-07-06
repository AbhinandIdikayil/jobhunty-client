import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { RootState } from '../../redux/store'

function CompnanyPrivateRoute() {
    const state = useSelector((state: RootState) => state?.user)

    if (state.role == 'company' && state.user) {
        return <Outlet />
    } else {
        return <Navigate to={'/company/login'} />
    }
}

export default CompnanyPrivateRoute