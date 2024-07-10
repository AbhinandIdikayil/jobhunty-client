import Login from './pages/common/Login'
import Signup from './pages/common/Signup'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/user/BeforeOneApplicant/Home'
import CompanyHome from './pages/company/CompanyHome'
import Dashboard from './pages/company/Dashboard'
import AdminLogin from './pages/admin/Login'
import AdminHome from './pages/admin/AdminHome'
import UsersListing from './pages/admin/UsersListing'

function App() {

  return (
    <Routes>

      ////! routes for user
      <Route path='' element={<Navigate to='/home' />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />


     ////! routes for the company
      <Route path='/company'>
        <Route path='' element={<CompanyHome />}>
          <Route path='' element={<Dashboard />} />
          <Route path='messages' element={<h1>messages</h1>} />
          <Route path='profile' element={<h1>profile</h1>} />
          <Route path='applicants' element={<h1>applicants</h1>} />
          <Route path='job-list' element={<h1>job list</h1>} />
          <Route path='schedules' element={<h1>schedules</h1>} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
      </Route>


      ////! routes for admin
      <Route path='/admin'>
        <Route path='' element={<AdminLogin />} />
        <Route path='home' element={<AdminHome />}>
          <Route path='' />
          <Route path='requests' element={<h1>useres</h1>} />
          <Route path='companies' element={<h1>companies</h1>} />
          <Route path='users' element={<UsersListing />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
