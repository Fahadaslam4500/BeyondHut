import FadeInBottom from '@/components/framermotion/FadeInBottom'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInRight from '@/components/framermotion/FadeInRight'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeHero() {
    return (
        <div className='container '>
            <div className=' min-h-[75vh]  flex flex-col justify-center gap-10 items-center relative md:rounded-[50px] rounded-[30px]'>

                {/* Glow*/}
                <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                    <div className="relative w-full h-full glow-animation">

                        {/* Purple Glow */}
                        <div className="absolute md:w-[250px] md:h-[250px] w-[200px] h-[200px] bg-[#78cfea82] rounded-full blur-3xl opacity-50 -bottom-20 top-[20%] -left-10"></div>

                        {/* Sky Blue Glow */}
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#9f96f2a0] rounded-full blur-3xl opacity-50 -bottom-10 top-[20%] left-30"></div>

                    </div>
                </div>




                <div className='w-full md:max-w-[70%] mt-10 md:p-4 p-2 flex flex-col justify-center items-center relative z-[3]'>
                    <h1 className="fade-in-up font-roca text-3xl md:text-4xl lg:text-[44px] font-thin text-center md:max-w-[900px] leading-normal md:leading-[3.5rem]">
                        Build Your Dream Property Team,
                        <br className="hidden xl:block" />
                        Without The Extra Overhead
                    </h1>


                    <p className='mt-7 text-center  text-lg text-[#516371] max-w-[800px] leading-7'>Scale your property business faster with trained remote staff handling admin operations, tenant support, listings, appointments and much more.</p>
                    <Link href={'/get-started'}>
                        <Button className=" font-dm_sans text-lg rounded-full hover:scale-105 py-5 px-8 transition-transform mt-5 text-black font-medium bg-gradient-to-r from-[#CFF0FF] to-[#D2CBFF] shadow-xl shadow-[#91919138]">
                            Hire Talent
                        </Button>
                    </Link>

                </div>


                <div className="max-sm:w-[50%] 2xl:w-[85%] lg:w-[100%] bg-white flex py-4 flex-col md:flex-row justify-between items-center text-center rounded-[10px] shadow-2xl shadow-[#8e8e8e2f] relative z-[3]">

                    <div className="flex-1 p-5">
                        <h2 className="text-[#A4D5E3] text-4xl font-roca">
                            <NumberTicker
                                value={100}
                                className="text-[#A4D5E3] text-4xl font-roca whitespace-pre-wrap  font-medium tracking-tighter"
                            />
                        </h2>
                        <p className="text-[#516371]">Day Setup</p>
                    </div>

                    {/* Divider */}
                    <div className="flex md:hidden w-10 h-px bg-[#C2C2C2] my-2"></div> {/* mobile: horizontal */}
                    <div className="hidden md:flex h-10 w-px bg-[#C2C2C2] mx-2"></div> {/* desktop: vertical */}

                    <div className="flex-1 p-5">
                        <div className='flex justify-center'>
                            <NumberTicker
                                value={45}
                                className="text-[#A4D5E3] text-4xl font-roca whitespace-pre-wrap  font-medium tracking-tighter"
                            />
                            <h2 className="text-[#A4D5E3] text-4xl font-roca">%</h2>
                        </div>
                        <p className="text-[#516371]">Hours Saved</p>
                    </div>

                    {/* Divider */}
                    <div className="flex md:hidden w-10 h-px bg-[#C2C2C2] my-2"></div>
                    <div className="hidden md:flex h-10 w-px bg-[#C2C2C2] mx-2"></div>

                    <div className="flex-1 p-5">
                        <div className='flex justify-center'>
                            <NumberTicker
                                value={70}
                                className="text-[#A4D5E3] text-4xl font-roca whitespace-pre-wrap  font-medium tracking-tighter"
                            />
                            <h2 className="text-[#A4D5E3] text-4xl font-roca">%</h2>
                        </div>
                        <p className="text-[#516371]">Hours Saved</p>
                    </div>

                    {/* Divider */}
                    <div className="flex md:hidden w-10 h-px bg-[#C2C2C2] my-2"></div>
                    <div className="hidden md:flex h-10 w-px bg-[#C2C2C2] mx-2"></div>

                    <div className="flex-1 p-5">
                        <div className='flex justify-center'>
                            <NumberTicker
                                value={100}
                                className="text-[#A4D5E3] text-4xl font-roca whitespace-pre-wrap  font-medium tracking-tighter"
                            />
                            <h2 className="text-[#A4D5E3] text-4xl font-roca">%</h2>
                        </div>
                        <p className="text-[#516371]">Coverage Guarantee</p>
                    </div>

                    {/* Divider */}
                    <div className="flex md:hidden w-10 h-px bg-[#C2C2C2] my-2"></div>
                    <div className="hidden md:flex h-10 w-px bg-[#C2C2C2] mx-2"></div>

                    <div className="flex-1 p-5">
                        <div className='flex justify-center'>
                            <NumberTicker
                                value={93}
                                className="text-[#A4D5E3] text-4xl font-roca whitespace-pre-wrap  font-medium tracking-tighter"
                            />
                            <h2 className="text-[#A4D5E3] text-4xl font-roca">%</h2>
                        </div>
                        <p className="text-[#516371]">Client Retention</p>
                    </div>

                </div>






            </div>
        </div>



    )
}

export default HomeHero