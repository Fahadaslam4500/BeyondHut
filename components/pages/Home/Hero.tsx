import FadeInBottom from '@/components/framermotion/FadeInBottom'
import FadeInLeft from '@/components/framermotion/FadeInLeft'
import FadeInRight from '@/components/framermotion/FadeInRight'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeHero() {
    return (
        <div className='min-h-[100vh] pb-20 md:pb-0 relative z-[-10] md:min-h-[100vh] bg-[#78D0EA] flex  items-center justify-between pt-10 md:pt-0 overflow-hidden'>
            <div className='container flex flex-col md:flex-row justify-between items-center'>
                <div className='md:p-10 p-3 flex flex-col gap-2 md:w-[50%]'>
                    <FadeInLeft duration={1} distance={70} once={false}> 
                        <h1 className='text-4xl md:text-5xl font-bold text-white md:max-w-[600px]'>Your One-Stop Solution for Remote Talent Hiring and Management</h1>
                    </FadeInLeft>

                    <FadeInBottom duration={1} distance={40}>
                        <div className='max-w-[500px] mt-3'>
                            <Image alt='Remote Talent Aquisition' src={'/assets/line.svg'} width={400} height={10} />
                        </div>
                    </FadeInBottom>
                    <p className='text-white font-medium text-lg mt-4'>Empowering businesses with top-tier remote talent and seamless sales automation—anytime, anywhere.</p>

                    <Link href={'/get-started'}><Button size={'lg'} className='self-start mt-4 bg-white text-black rounded-full hover:bg-black hover:text-white'>Get Started</Button></Link>
                </div>

                <div className='md:max-w-[40%] relative '>
                    <div className='absolute md:w-[550px] md:h-[550px] z-[-4] rounded-2xl  md:-top-28 md:-left-10 md:rotate-[25deg] rotate-[55deg] w-[450px] h-[450px] top-24  sm:top-0 sm:left-20  inset-0 bg-[#9BE4FA]'></div>
                    <FadeInRight once={false} duration={1}>
                        <Image alt='Remote Talent Aquisition' src={'/assets/home_hero.png'} width={800} height={600} />
                    </FadeInRight>
                </div>


                <div className='w-[100vw] absolute md:-bottom-10 -bottom-[5px] right-0'>
                    <img src='/assets/shape_hero.svg' className=' w-[100vw]' />
                </div>
            </div>
        </div>
    )
}

export default HomeHero