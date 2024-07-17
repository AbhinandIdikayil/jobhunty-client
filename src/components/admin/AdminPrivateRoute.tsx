import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RootState } from 'src/redux/store'
import { Children } from 'src/types/AllTypes'

function AdminPrivateRoute({children}:Children) {
    const state = useSelector((state:RootState) => state.user)
    if(state.user && state.role == 'admin') {
        return children
    } else {
        return <Navigate to={'/admin'} />
    }
}

export default AdminPrivateRoute