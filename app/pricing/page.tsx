import ComparisonTable from '@/components/pages/Pricing/ComparisonTable'
import FAQSection from '@/components/pages/Pricing/FAQSection'
import PricingCards from '@/components/pages/Pricing/PricingCards'
import React from 'react'

function Pricing() {
  return (
    <div className='font-dm_sans'>
        <PricingCards/>
        <ComparisonTable/>
        <FAQSection/>
    </div>
  )
}

export default Pricing