import React from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Partners from '../components/Partners'
import Categories from '../components/Categories';
import FeaturedPackages from '../components/FeaturedPackages';
import { Testimonials } from '../components/Testimonials';
import { Footer } from '../components/Footer';

const Home : React.FC = () =>{
  return (
    <div>
     <Navbar />
    <Hero />
    <Partners />
    <Categories />
    <FeaturedPackages />
    <Testimonials />
    <Footer />
    </div>
   
  )
}

export default Home;