import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from '../../redux/store'
import { ReactNode } from 'react'


interface Children {
    children: ReactNode;
  }

function CompnanyPrivateRoute({children}:Children) {
    const state = useSelector((state: RootState) => state?.user)

    if (state.role == 'company' && state.user) {
        return children
    } else {
        return <Navigate to={'/company/login'} />
    }
}

export default CompnanyPrivateRoute