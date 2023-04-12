import React from 'react'
import Banner from './Banner'
import { Grid } from '@mui/material'
import Card from '../../Components/MaterialComponents/Card'
import Filters from './Filters'
import ProductCard from './ProdactCard'
import Navbar from '../../Layout/Default/Navbar/Navbar'

const ProductPage = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Filters/>
      <ProductCard/>
    </>
  )
}

export default ProductPage