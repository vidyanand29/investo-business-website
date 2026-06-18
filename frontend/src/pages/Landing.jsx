import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Features from '../components/Features'
import {useState,useEffect} from "react"
const Landing = () => {


  return (
    <div className="bg-[#0D1117]">
      <Header />
      <Hero />
      <About />
      <Features />
    </div>
  )
}

export default Landing