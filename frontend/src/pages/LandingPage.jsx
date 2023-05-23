import React from 'react'
import Package from "../components/PackageCard/PackageCard"
import Header from '../components/Header/Header'
import Cta from '../components/CTA/Cta'
import Packages from '../components/Packages/Packages'

export default function LandingPage() {
  return (
    <>
    <Header/>
    <Cta/>
      <Packages/>
    
    </>
  )
}
