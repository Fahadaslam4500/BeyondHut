
import FadeInTop from '@/components/framermotion/FadeInTop'
import Image from 'next/image'
import React from 'react'

function RightRole() {
    return (
        <div className='my-14 py-14 bg-[#F6F6F6]  max-lg:min-h-[50vh] relative'>
            
        <div className='container'>
            <div className="custom-shape-divider-top-1747344540">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="custom-shape-divider-bottom-1747344583">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                </svg>
            </div>
            <div className='max-lg:min-h-[50vh]  md:px-12 md:py-10 md:p-8 p-1  flex flex-col justify-center items-center relative overflow-hidden '>
                <div className='w-full md:max-w-[70%] mt-4 mb-4'>
                    <FadeInTop once={false} duration={0.6} distance={30}>
                        <h2 className="font-roca text-2xl md:text-4xl font-thin text-center mb-3">What you get</h2>
                    </FadeInTop>
                    <p className='mt-1 text-center  text-lg text-[#516371]'>Beyond Tools. Beyond tactics.</p>
                </div>

                <div className='flex gap-4 flex-col md:flex-row justify-center items-stretch overflow-hidden'>

                    <div className='group col-span-1  bg-[#B1A79A33]  w-full p-5 rounded-xl flex flex-col pb-8   relative overflow-hidden max-sm:mb-4'>
                        <div className="absolute w-[170px] h-[170px] bg-[#b1a89bd0] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <h2 className='font-roca text-6xl text-[#B1A79A] md:mb-[100px] mb-[50px]'>1</h2>
                        <div className='relative z-10 '>
                            <h3 className='font-semibold text-xl'>A Sales Engine That Runs Without You</h3>
                            <p className='text-sm md:text-base'>Campaigns trigger, leads flow, data syncs your system works even when you're not watching.</p>
                        </div>
                    </div>

                    <div className='group col-span-1 bg-[#CDF3FF66]   w-full p-5 rounded-xl flex flex-col pb-8 relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#4bafcdad] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <h2 className='font-roca text-6xl text-[#5FADC6] md:mb-[100px] mb-[50px]'>2</h2>
                        <div className='relative z-10 '>
                            <h3 className='font-semibold text-xl'>Pipeline Clarity</h3>
                            <p className='text-sm md:text-base'>No more guessing where deals stand. See exactly who’s active, what’s next, and where to push.</p>
                        </div>
                    </div>

                    <div className='group col-span-1 bg-[#c5f8f44d]  w-full p-5 rounded-xl flex flex-col pb-8 relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#57aca4cf] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <h2 className='font-roca text-6xl text-[#58AAA4] md:mb-[100px] mb-[50px]'>3</h2>
                        <div className='relative z-10'>
                            <h3 className='font-semibold text-xl'>Fewer Hires, More Output</h3>
                            <p className='text-sm md:text-base'>Automation and smart workflows reduce the need for bloated teams
                                saving costs and cutting delays.</p>
                        </div>
                    </div>

                    <div className='group col-span-1 bg-[#EFEEFDE5] w-full p-5 pb-8 rounded-xl flex flex-col relative overflow-hidden'>
                        <div className="absolute w-[170px] h-[170px] bg-[#c4bffbef] rounded-full blur-xl top-0 left-0 glow-anim z-0" />
                        <h2 className='font-roca text-6xl text-[#ABA5E8] md:mb-[100px] mb-[50px]'>4</h2>
                        <div className='relative z-10 '>
                            <h3 className='font-semibold text-xl'>High-Intent Conversations</h3>
                            <p className='text-sm md:text-base'>You don’t just get more leads
                                you get the right ones, ready to talk and primed to convert.</p>
                        </div>
                    </div>



                </div>

            </div>
        </div>

        </div>


    )
}

export default RightRole