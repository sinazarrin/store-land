import { Suspense } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { Grid } from '@mui/material'

const DefaultLayout = () => {
  return (
    <Grid>
      <Navbar />
      <div>
        <Suspense >
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </Grid>
  )
}

export default DefaultLayout