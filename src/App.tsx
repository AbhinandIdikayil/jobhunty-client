import Login from './pages/common/Login'
import Signup from './pages/common/Signup'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/user/BeforeOneApplicant/Home'
import CompanyHome from './pages/company/CompanyHome'
import Dashboard from './pages/company/Dashboard'
import CompnanyPrivateRoute from './components/company/CompnanyPrivateRoute'

function App() {

  return (
    <Routes>
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

    </Routes>
  )
}

export default App
