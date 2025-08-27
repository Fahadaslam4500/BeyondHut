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
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center blur-[80px] sm:blur-[70px] md:blur-[100px] 2xl:blur-[120px]">
                        <div className="rounded-full w-[80vw] h-[80vh] bg-white relative md:scale-[0.6] overflow-hidden">
                            <div className="blob absolute inset-0 w-full h-full" />
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