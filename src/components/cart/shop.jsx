import React from 'react'
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Products from "../products/Products";
import Slider from "../slider/Slider";
import Testimonials from "../testimonials/Testimonials";
import Virtual from "../virtual/Virtual";
const Shop = () => {
  return (
  <div>
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer/>
      </div>
  )
}

export default Shop