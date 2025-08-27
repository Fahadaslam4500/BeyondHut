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
        <div className='relative'>
            <div className='container '>
                <div className=' min-h-[75vh]  flex flex-col justify-center gap-10 2xl:gap-12 items-center  md:rounded-[50px] rounded-[30px]'>

                    {/* Glow*/}
                    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                        <div className="relative w-full h-full glow-animation">

                            {/* Purple Glow */}
                            <div className="absolute md:w-[250px] md:h-[250px] 2xl:w-[450px] 2xl:h-[450px] w-[200px] h-[200px] bg-[#78cfea82] rounded-full blur-3xl opacity-50 -bottom-20 top-[20%] left-[20%]"></div>

                            {/* Sky Blue Glow */}
                            <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] 2xl:w-[450px] 2xl:h-[450px] bg-[#9f96f2a0] rounded-full blur-3xl opacity-50 -bottom-10 top-[20%] left-30"></div>

                        </div>
                    </div>




                    <div className='w-full md:max-w-[70%] mt-10 md:p-4 p-2 flex flex-col justify-center items-center relative z-[3]'>
                        <h1 className="fade-in-up  text-3xl md:text-4xl 2xl:text-5xl font-thin text-center md:max-w-[900px] leading-normal md:leading-[3.5rem] 2xl:leading-[4rem]">
                            Build Your Dream Property Team,
                            <br className="hidden xl:block" />
                            Without The Extra Overhead
                        </h1>


                        <p className='mt-7 text-center  text-lg 2xl:text-[21px] text-[#516371] max-w-[800px] leading-7'>Scale your property business faster with trained remote staff handling admin operations, tenant support, listings, appointments and much more.</p>
                        <Link href={'/get-started'}>
                            <Button className=" font-ibm_plex text-lg rounded-full hover:scale-105 py-6 px-8 transition-transform mt-5 text-black font-medium bg-gradient-to-r from-[#CFF0FF] to-[#D2CBFF] shadow-xl shadow-[#91919138]">
                                Build My Dream Team
                            </Button>
                        </Link>

                    </div>


                    <div
                        className="w-full 2xl:w-[85%] lg:w-[100%] md:bg-white bg-transparent py-4 mb-7 
                        rounded-[10px] md:shadow-md md:shadow-[#8e8e8e13] relative z-[3] 
                        grid grid-cols-2 gap-y-6 text-center md:flex md:justify-between md:items-center"
                    >
                        {/* Box 1 */}
                        <div className="md:p-5 p-3 flex-1 relative">
                            <p className="text-[#A4D5E3] text-4xl">
                                <NumberTicker
                                    value={7}
                                    className="text-[#A4D5E3] text-4xl whitespace-pre-wrap font-bold tracking-tighter"
                                />
                            </p>
                            <p className="text-[#516371]">Day Setup</p>
                            <div className="absolute sm:hidden flex h-20 w-[0.4px] bg-[#C4C4C4] right-0 -bottom-2"></div>
                        </div>

                        <div className="hidden md:flex h-10 w-px bg-[#C2C2C2] mx-2"></div>

                        {/* Box 2 */}
                        <div className="md:p-5 p-3 flex-1 relative">
                            <div className="flex justify-center">
                                <NumberTicker
                                    value={45}
                                    className="text-[#A4D5E3] text-4xl whitespace-pre-wrap font-bold tracking-tighter"
                                />
                                <p className="text-[#A4D5E3] text-4xl">%</p>
                            </div>
                            <p className="text-[#516371]">Cost Saving</p>
                            <div className="absolute sm:hidden flex w-20 h-[0.4px] bg-[#C4C4C4] left-[20%] -bottom-6"></div>
                            <div className="absolute sm:hidden flex w-20 h-[0.4px] bg-[#c4c4c483] right-[120%] -bottom-6"></div>
                        </div>

                        <div className="hidden md:flex h-10 w-px bg-[#C2C2C2] mx-2"></div>

                        {/* Box 3 */}
                        <div className="md:p-5 p-3 flex-1 -mt-3 relative">
                            <p className="text-[#A4D5E3] text-5xl whitespace-pre-wrap font-bold tracking-tighter">∞</p>
                            <p className="text-[#516371]">Hours Saved</p>
                            <div className="absolute sm:hidden flex h-20 w-[0.4px] bg-[#C4C4C4] right-0 -bottom-2"></div>
                        </div>

                        <div className="hidden md:flex h-10 w-px bg-[#C2C2C2] mx-2"></div>

                        {/* Box 4 */}
                        <div className="md:p-5 p-3 flex-1 relative">
                            <div className="flex justify-center">
                               <p className='text-[#A4D5E3] text-4xl whitespace-pre-wrap font-bold tracking-tighter'>0</p>
                             
                            </div>
                            <p className="text-[#516371]">Down time</p>
                        </div>

                        <div className="hidden md:flex h-10 w-px bg-[#C2C2C2] mx-2"></div>

                        {/* Box 5 (centered on mobile) */}
                        <div className="md:p-5 p-3 flex-1 col-span-2 flex justify-center">
                            <div>
                                <div className="flex justify-center">
                                    <NumberTicker
                                        value={93}
                                        className="text-[#A4D5E3] text-4xl whitespace-pre-wrap font-bold tracking-tighter"
                                    />
                                    <p className="text-[#A4D5E3] text-4xl">%</p>
                                </div>
                                <p className="text-[#516371]">Client Retention</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default HomeHero