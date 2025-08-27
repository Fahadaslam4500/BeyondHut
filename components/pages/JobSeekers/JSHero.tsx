import FadeInBottom from '@/components/framermotion/FadeInBottom'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInRight from '@/components/framermotion/FadeInRight'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function JobSeekersHero() {
    return (
        <div className='relative'>
            <div className='container '>
            <div className=' min-h-[75vh]  flex flex-col justify-center gap-10 items-center  md:rounded-[50px] rounded-[30px]'>

                {/* Glow*/}
                <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                        <div className="relative w-full h-full glow-animation">

                            {/* Purple Glow */}
                            <div className="absolute md:w-[250px] md:h-[250px] 2xl:w-[450px] 2xl:h-[450px] w-[200px] h-[200px] bg-[#78cfea82] rounded-full blur-3xl opacity-50 -bottom-20 top-[20%] left-[20%]"></div>

                            {/* Sky Blue Glow */}
                            <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] 2xl:w-[450px] 2xl:h-[450px] bg-[#9f96f2a0] rounded-full blur-3xl opacity-50 -bottom-10 top-[20%] left-30"></div>

                        </div>
                    </div>




                <div className='w-full md:max-w-[75%] mt-10 md:p-4 p-2 flex flex-col justify-center items-center relative z-[3]'>
                    <h1 className="ffade-in-up  text-3xl md:text-4xl 2xl:text-5xl font-thin text-center md:max-w-[900px] leading-normal md:leading-[3.5rem] 2xl:leading-[4rem]">
                        <span className="block font-dm_serif font-normal">Smart Careers Start Here.</span>
                        <span className="block font-dm_serif">Fast. Focused. Human.</span>
                    </h1>



                    <p className='mt-7 text-center  text-lg text-[#516371] max-w-[850px] leading-7'>Scale your property business faster with trained remote staff handling admin operations, tenant support, listings, appointments and much more.</p>
                    <Link href={'/application-form'}>
                        <Button className="rounded-full py-6 px-8 mt-5 hover:scale-105 transition-all text-black font-medium bg-gradient-to-r from-[#CFF0FF] to-[#D2CBFF] shadow-xl shadow-[#91919138]">
                            Get Hired
                        </Button>
                    </Link>

                </div>

            </div>
        </div>
        </div>



    )
}

export default JobSeekersHero