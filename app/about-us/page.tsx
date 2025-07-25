import CTAabout from '@/components/pages/AboutUs/CTAabout'
import AboutHero from '@/components/pages/AboutUs/Hero'
import MakeDifference from '@/components/pages/AboutUs/MakeDifference'
import MeetTheTeam from '@/components/pages/AboutUs/MeetTheTeam'
import MissionVission from '@/components/pages/AboutUs/MissionVission'
import OurValues from '@/components/pages/AboutUs/OurValues'
import WeGotHere from '@/components/pages/AboutUs/WeGotHere'
import React from 'react'

export const metadata = {
  title: "About",
}


function AboutUs() {
  return (
    <>
      <AboutHero/>
      <MissionVission/>
      <OurValues/>
      <MeetTheTeam/>
      <WeGotHere/>
      <MakeDifference/>
      <CTAabout/>
    </>
  )
}

export default AboutUs