
import CutFire from '@/components/pages/Home/CutFire'
import GrowthPuzzle from '@/components/pages/Home/GrowthPuzzle'
import HomeHero from '@/components/pages/Home/Hero'
import HybridScrollSection from '@/components/pages/Home/HorizontalScrollCards'
import StartWithUs from '@/components/pages/Home/StartWithUs'
import TalentWithoutHussle from '@/components/pages/Home/TalentWithoutHussle'
import Testimonials from '@/components/pages/Home/Testimonials'
import WhatWeDo from '@/components/pages/Home/WhatWeDo'
import WhyChoose from '@/components/pages/Home/WhyChoose'
import React from 'react'


function Home() {
  return (
    <div className='overflow-hidden'>
      <HomeHero/>
      <TalentWithoutHussle/>
      <CutFire/>
      <WhatWeDo/>
      <HybridScrollSection/>
      <GrowthPuzzle/>
      <WhyChoose/>
      <StartWithUs/>
    </div>
  )
}

export default Home