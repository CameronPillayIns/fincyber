import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Services from './components/Services';
import Features from './components/Features';
import Institutes from './components/Institutes';
import Partners from './components/Partners';
import LearnMore from './components/LearnMore';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  
      
      
      <BrowserRouter>
        <div>
        <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Features/>
      <Institutes />
      <Partners />
      <LearnMore />
      <Footer />
      <Footer2 />

    
      </div>
      
      
      </BrowserRouter>

  );
}

export default App;
