import Footer from 'src/components/user/Footer'
import Navbar from '../user/BeforeOneApplicant/Navbar'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
      <div className="flex flex-col items-center justify-center bg-slate-50 w-full">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
  )
}

export default UserLayout