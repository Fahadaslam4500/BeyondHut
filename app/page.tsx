import BlogsSection from '@/components/pages/Home/BlogsSections'
import CostComparison from '@/components/pages/Home/CostComparison'
import FourSteps from '@/components/pages/Home/FourSteps'
import HomeHero from '@/components/pages/Home/Hero'
import Logos_Sliding from '@/components/pages/Home/Logos_Sliding'
import ProfitableAgency from '@/components/pages/Home/ProfitableAgency'
import RolesSection from '@/components/pages/Home/RolesSection'
import StartWithUs from '@/components/pages/Home/StartWithUs'
import Testimonials_New from '@/components/pages/Home/Testimonials_New'
import React from 'react'


function Home() {
  return (
    <div className=''>
      <HomeHero />
      <ProfitableAgency />
      <CostComparison/>
      <RolesSection />
      <Logos_Sliding />
      <Testimonials_New />
      <FourSteps />
      <BlogsSection />
      <StartWithUs />
    </div>
  )
}

export default Home