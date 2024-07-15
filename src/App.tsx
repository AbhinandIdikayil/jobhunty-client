import { lazy, Suspense } from 'react'
import Login from './pages/common/Login'
import Signup from './pages/common/Signup'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/user/BeforeOneApplicant/Home'
import CompanyHome from './pages/company/CompanyHome'
import Dashboard from './pages/company/Dashboard'
import AdminLogin from './pages/admin/Login'
import AdminHome from './pages/admin/AdminHome'
const UsersListing = lazy(() => import('./pages/admin/UsersListing'))
import CompnanyPrivateRoute from './components/company/CompnanyPrivateRoute'
import ForgotPassword from './pages/common/ForgotPassword'
const Settings = lazy(() => import('./pages/company/Settings'))
const Overview = lazy(() => import('./components/company/Overview'))
import { Backdrop } from '@mui/material'
import SocialLinks from './components/company/SocialLinks'

function App() {

  return (
    <Suspense fallback={<Backdrop open={true} />}>
      <Routes>

      ////! routes for user
        <Route path='' element={<Navigate to='/home' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />



        <Route path='/forgot-password' element={<ForgotPassword />} />

     ////! routes for the company
        <Route path='/company'>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='' element={
            <CompnanyPrivateRoute>
              <CompanyHome />
            </CompnanyPrivateRoute>
          }>
            <Route path='' element={<Dashboard />} />
            <Route path='messages' element={<h1>messages</h1>} />
            <Route path='profile' element={<h1>profile</h1>} />
            <Route path='applicants' element={<h1>applicants</h1>} />
            <Route path='job-list' element={<h1>job list</h1>} />
            <Route path='schedules' element={<h1>schedules</h1>} />
            <Route path='settings' element={<Settings />}>
              <Route path='' element={<Overview />} />
              <Route path='social-links' element={<SocialLinks />} />
            </Route>
          </Route>
        </Route>


      ////! routes for admin
        <Route path='/admin'>
          <Route path='' element={<AdminLogin />} />
          <Route path='home' element={<AdminHome />}>
            <Route path='' />
            <Route path='requests' element={<h1>users</h1>} />
            <Route path='companies' element={<h1>companies</h1>} />
            <Route path='users' element={<UsersListing />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
