import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Album from './components/Image'
import { Footer } from './components/Footer'

const Page = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Album />
        <Footer />
    </div>
  )
}

export default Page