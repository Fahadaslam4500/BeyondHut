
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function JobSeekersHero() {
    return (
        <div className='container '>
            <div className='bg-white shadow-lg shadow-gray-200 min-h-[65vh] flex flex-col justify-center items-center relative overflow-hidden md:rounded-[50px] rounded-[30px]'>

                {/* Glow*/}
                <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                    <div className="relative w-full h-full glow-animation">
                        {/* Purple Glow */}
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#A78BFA] rounded-full blur-3xl opacity-50 -bottom-10 left-0"></div>

                        {/* Sky Blue Glow */}
                        <div className="absolute md:w-[400px] md:h-[300px] w-[200px] h-[200px] bg-[#7DD3FC] rounded-full blur-3xl opacity-50 -bottom-20 left-20"></div>
                    </div>
                </div>



                <div className='w-full md:max-w-[70%] mt-10 md:p-4 p-2 flex flex-col justify-center items-center relative z-[3]'>
                    <h1 className="fade-in-up font-roca text-3xl md:text-4xl lg:text-[40px] font-thin text-center md:max-w-[900px]">
                    Smart Careers Start Here.<br className="hidden xl:flex" />
                    Fast.  Focused.  Human.<br className="hidden xl:flex" />
                    </h1>

                    <p className='mt-3 text-center  text-lg text-[#516371] max-w-[600px]'>At Beyond Hut, we don’t just connect you to work: we match you with real opportunities, at real companies, that value what you bring to the table.</p>
                </div>

                {/* semicircle */}
                <div className='md:min-h-[250px] flex justify-center 2xl:items-start items-center w-full md:py-10 py-5'>
                    <img src='/assets/new/eclipse.png' className='w-[100%] md:w-[60%] absolute bottom-0 transform translate-y-[10px] z-[2]' />

                    <div className='relative flexjustify-start items-start z-[10]'>
                        <Link href={'/application-form'}>
                            <Button size={'lg'} className="bg-primarylight hover:scale-105 rounded-full md:mt-10 mt-24 transition-transform duration-300 ease-in-out transform shadow-md">
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