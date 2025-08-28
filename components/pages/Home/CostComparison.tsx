import React from 'react'
import BeyondWay from './Beyondway'
import InHouseWay from './InHouseTalent'
import { TextAnimate } from '@/components/magicui/text-animate'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

function CostComparison() {
    return (
        <div className='container my-16'>

            <div className='flex flex-col justify-center items-center gap-2 mb-10'>
                <TextAnimate animation="blurInUp" once={true} by="word" as={'h2'} duration={0.8} className="text-3xl  md:text-4xl font-medium text-[#1B1B1B]">
                    Cost Comparison Section
                </TextAnimate>
                <h4 className='font-ibm_plex text-xl md:text-2xl'>BeyondHut vs Local Hire - ROI That Shows</h4>
                <p className=' text-lg md:text-xl  text-[#6B6B6B]'>Save  £40K+ per year when you hire estate talent with BeyondHut</p>
            </div>

            <div className='flex flex-col md:flex-row  justify-center md:items-center gap-2'>
                <BeyondWay />
                <img src='/assets/redesign/vs.png' alt='vs' className='w-[100px] mx-auto' />
                <InHouseWay />
            </div>


             <div className='flex flex-col justify-center items-center  my-10'>
                <p className=' text-base md:text-lg  text-[#6B6B6B]'>See how much you save</p>
                 <Link href={'/pricing'}>
                            <Button className=" font-ibm_plex text-black text-lg rounded-full hover:scale-105 py-6 px-8 transition-transform mt-5 font-medium bg-gradient-to-r from-[#CFF0FF] to-[#D2CBFF] shadow-xl">
                                View Pricing
                            </Button>
                        </Link>
            </div>
        </div>
    )
}

export default CostComparison