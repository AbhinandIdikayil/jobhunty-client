import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { Children } from 'src/types/AllTypes'


function CompnanyPrivateRoute({children}:Children) {
    const state = useSelector((state: RootState) => state?.user)

    if (state.role == 'company' && state.user) {
        return children
    } else {
        return <Navigate to={'/company/login'} />
    }
}

export default CompnanyPrivateRoute