import {Suspense} from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const DefaultLayout = () => {
  return (
    <div>
      <Navbar/>
        <Suspense >
          <Outlet/>
        </Suspense>
      <Footer/>
    </div>
  )
}

export default DefaultLayout