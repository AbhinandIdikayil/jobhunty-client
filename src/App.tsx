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
import CompnanyPrivateRoute from './components/company/CompnanyPrivateRoute'
const ForgotPassword = lazy(() => import('./pages/common/ForgotPassword'))
const Settings = lazy(() => import('./pages/company/Settings'))
const Overview = lazy(() => import('./components/company/Overview'))
const SocialLinks = lazy(() => import('./components/company/SocialLinks'))
import { Backdrop, CircularProgress } from '@mui/material'
import AdminPrivateRoute from './components/admin/AdminPrivateRoute'
const UsersListing = lazy(() => import('./pages/admin/UsersListing'))
const Companies =  lazy(() => import('./pages/admin/Companies')) 

function App() {

  return (
    <Suspense fallback={
      <Backdrop open={true} sx={{ color: 'white', backgroundColor: 'rgba( 9,9,9,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <CircularProgress color="inherit" />
      </Backdrop>
    }>
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
          <Route path='home' element={
            <AdminPrivateRoute>
              <AdminHome />
            </AdminPrivateRoute>
          }>
            <Route path='' />
            <Route path='requests' element={<h1>users</h1>} />
            <Route path='companies' element={<Companies />} />
            <Route path='users' element={<UsersListing />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
