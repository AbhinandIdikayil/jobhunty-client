import { lazy, Suspense } from 'react'
import Login from './pages/common/Login'
import Signup from './pages/common/Signup'
import './App.css'
import { Backdrop, CircularProgress } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLogin from './pages/admin/Login'


import Home from './pages/user/BeforeOneApplicant/Home'
const CompanyHome = lazy(() => import('./pages/company/CompanyHome'))
const Dashboard = lazy(() => import('./pages/company/Dashboard'))
const AdminHome = lazy(() => import('./pages/admin/AdminHome'))
import CompnanyPrivateRoute from './components/company/CompnanyPrivateRoute'
const ForgotPassword = lazy(() => import('./pages/common/ForgotPassword'))
const Settings = lazy(() => import('./pages/company/Settings'))
const Overview = lazy(() => import('./components/company/Overview'))
const SocialLinks = lazy(() => import('./components/company/SocialLinks'))
import AdminPrivateRoute from './components/admin/AdminPrivateRoute'
import UserLayout from './pages/layouts/UserLayout'
import CompanyList from './components/user/common/CompanyList'
const Jobs = lazy(() => import('./components/user/common/Jobs'))
const Requests = lazy(() => import('./pages/admin/Requests'))
const UsersListing = lazy(() => import('./pages/admin/UsersListing'))
const Companies = lazy(() => import('./pages/admin/Companies'))
const UserDashboardHome = lazy(() => import('./components/user/dashboard/Home'));
import UserDashboard from './components/user/dashboard/Dashboard'
import Profile from './components/user/dashboard/Profile'
import Categories from './pages/admin/Categories'
import AddCategory from './pages/admin/AddCategory'
const PostJob = lazy(() => import('./components/company/PostJob')) 
import 'react-profile/themes/default'
import EditCategory from './components/admin/EditCategory'
import ListSector from './components/admin/ListSector'
import AddSectors from './components/admin/AddSectors'
import CompanyJobListing from './components/company/CompanyJobListing'
import Chat from './pages/company/Chat'
import JobDetails from './pages/user/JobDetails'
import CompanyDetails from './pages/user/CompanyDetails'


function App() {

  return (
    <Suspense fallback={
      <Backdrop open={true} sx={{ color: 'white', backgroundColor: 'rgba( 9,9,9,0.2)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
        <CircularProgress color="inherit" />
      </Backdrop>
    }>
      <Routes>

      ////! routes for user
      <Route path='/' element={<Navigate to='home' />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='home' element={<UserLayout />} >
          <Route index element={<Home />} />
          <Route path='jobs' element={<Jobs />} />
          <Route path='jobs/:id' element={<JobDetails />} />
          <Route path='companies' element={<CompanyList />} />
          <Route path='companies/details' element={<CompanyDetails />} />
        </Route>
        <Route path='/Dashboard' element={<UserDashboardHome />}>
          <Route path='' element={<UserDashboard />} />
          <Route path='jobs' element={<Jobs />} />
          <Route path='jobs/:id' element={<JobDetails />} />
          <Route path='companies' element={<CompanyList />} />
          <Route path='companies/:id' element={<CompanyDetails />} />
          <Route path='profile' element={<Profile />} />
        </Route>

        


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
            <Route path='post' element={<PostJob />} />
            <Route path='messages' element={<Chat />} />
            <Route path='profile' element={<h1>profile</h1>} />
            <Route path='applicants' element={<h1>applicants</h1>} />
            <Route path='job-list' element={<CompanyJobListing />} />
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
            <Route path='' element={<h1>sadfsdf</h1>} />
            <Route path='add-category' element={<AddCategory />} />
            <Route path='category' element={<Categories />} />
            <Route path='sector' element={<ListSector />} />
            <Route path='add-sector' element={<AddSectors />} />
            <Route path='update' element={<EditCategory />} />
            <Route path='requests' element={<Requests />} />
            <Route path='companies' element={<Companies />} />
            <Route path='users' element={<UsersListing />} />
          </Route>
        </Route>
      </Routes>
    </Suspense >
  )
}

export default App
