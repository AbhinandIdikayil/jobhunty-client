import Login from './pages/common/Login'
import Signup from './pages/common/Signup'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default App
