import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SectionHeading title='Discover NEW Arrivals' description='Recently added shirts!'/>
    </div>
  )
}

export default HomePage
