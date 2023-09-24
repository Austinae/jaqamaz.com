import { Outlet } from 'react-router-dom'
import './navigation.css'

import Header from './Header'
import Footer from './Footer'

const Navigation = () => {
  return (
    <div>
      <Outlet />
      <Header />
      <Footer />
    </div>
  )
}

export default Navigation