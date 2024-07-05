import Login from './pages/common/Login'
import Signup from './pages/common/Signup'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/user/BeforeOneApplicant/Home'
import CompanyHome from './pages/company/CompanyHome'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />

     ////! routes for the company 
      <Route path='/company'>
            <Route path='' element={<CompanyHome />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
      </Route>

    </Routes>
  )
}

export default App
