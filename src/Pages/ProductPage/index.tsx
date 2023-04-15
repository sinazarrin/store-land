import React from 'react'
import Banner from './Banner'
import Filters from './Filters'
import ProductCard from './ProdactCard'
import Navbar from '../../Layout/Default/Navbar/Navbar'
import Footer from '../../Layout/Default/Footer'

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