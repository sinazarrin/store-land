import React from 'react'
import Banner from './Banner'
import { Grid } from '@mui/material'
import Card from '../../Components/MaterialComponents/Card'
import Filters from './Filters'
import ProductCard from './ProdactCard'

const ProductPage = () => {
  return (
    <>
      <Banner/>
      <Filters/>
      <ProductCard/>
    </>
  )
}

export default ProductPage