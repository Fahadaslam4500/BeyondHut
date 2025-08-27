
import { Button } from '@/components/ui/button'
import { MoveRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function StartWithUs() {
    return (
        <div className='md:container max-md:mx-auto'>
            <div className=' my-12'>
                <div className='relative  max-lg:min-h-[50vh] min-h-[450px] p-5  flex flex-col justify-center items-center md:rounded-[50px] rounded-[30px] overflow-visible'>


                    <div className='flex flex-col justify-center items-center w-full relative z-[20]'>
                        <div className='w-full mt-14 mb-10 flex flex-col gap-3'>
                            <h2 className="fade-in-up font-dm_serif text-3xl md:text-4xl text-center  font-thin mb-3">Ready to Stop Drowning in Calls?</h2>

                            <p className='mt-1 text-center  text-xl text-[#516371]'>Keep your agency agile without the staffing hassle.</p>
                        </div>


                        <div className='flex flex-row gap-3 justify-center items-center'>
                            <Link href={'/get-started'}>
                                <Button size={'lg'} className="bg-primary hover:scale-105 rounded-full text-lg  transition-transform duration-300 ease-in-out transform shadow-md p-3 px-8">
                                    Book a discovery call
                                </Button>
                            </Link>
                        </div>
                    </div>


                    {/* Top Glow Group */}
                    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                        <div className="relative w-full h-full glow-animation">
                            <div className="absolute  w-[200px] h-[200px] bg-[#a78bfada] rounded-full blur-xl opacity-[25%] bottom-[10%] left-[10%]" />
                            <div className="absolute  w-[200px] h-[200px] bg-[#7dd4fcce] rounded-full blur-xl opacity-[25%] bottom-[10%] left-[20%]" />
                        </div>
                    </div>

                    {/* Bottom Glow Group */}
                    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
                        <div className="relative w-full h-full">
                            <div className="absolute w-[200px] h-[200px] bg-[#a78bface] rounded-full blur-xl opacity-[25%] top-[40%] right-[10%] glow-animation-reverse animate-pulse" />
                            <div className="absolute w-[200px] h-[200px] bg-[#7dd4fcd9] rounded-full blur-xl opacity-[25%] top-[40%] right-[50%] glow-animation-reverse animate-pulse" />
                        </div>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default StartWithUs