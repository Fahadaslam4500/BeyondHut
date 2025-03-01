import Image from 'next/image'
import React from 'react'

function WorkWithUs() {
    return (
        <div className='container my-20'>
            <div className='w-full mt-10'>
                <h5 className='text-center text-black text-lg font-medium capitalize'>Why Work With Us?</h5>
                <h4 className='text-black text-center md:text-3xl text-2xl  font-bold'>Elevate Your Career with Top Global Companies</h4>

                <div className='flex flex-row flex-wrap gap-3 justify-center items-center mt-5'>



                    <div className='bg-[#F3C9B6] p-5 overflow-hidden h-[350px] md:max-w-[300px] w-full rounded-lg flex flex-col justify-between'>
                        <div className='relative  flex justify-center items-center -mr-14 -mt-12'>
                            <Image src='/assets/polygon1.svg' alt='polygon' width={300} height={300} />
                            <Image src='/assets/p_icon1.png' alt='polygon' className='absolute' width={200} height={200} />
                        </div>
                        <h5 className='text-black text-base font-medium'>Competitive USD salaries</h5>
                    </div>


                    <div className='bg-[#F8E1BE] p-5 overflow-hidden h-[350px] md:max-w-[300px] w-full rounded-lg flex flex-col justify-between'>
                        <div className='relative  flex justify-center items-center -mr-14 -mt-12'>
                            <Image src='/assets/polygon2.svg' alt='polygon' width={280} height={280} />
                            <Image src='/assets/p_icon2.png' alt='polygon' className='absolute' width={200} height={200} />
                        </div>
                        <h5 className='text-black text-base font-medium'>Work with YC-backed & global companies</h5>
                    </div>


                    <div className='bg-[#D2CCFA] p-5 overflow-hidden h-[350px] md:max-w-[300px] w-full rounded-lg flex flex-col justify-between'>
                        <div className='relative  flex justify-center items-center -mr-14 -mt-12'>
                            <Image src='/assets/polygon3.svg' alt='polygon' width={300} height={300} />
                            <Image src='/assets/p_icon3.png' alt='polygon' className='absolute' width={200} height={200} />
                        </div>
                        <h5 className='text-black text-base font-medium'>Remote & on-site opportunities</h5>
                    </div>


                    <div className='bg-[#ADD0F3] p-5 overflow-hidden h-[350px] md:max-w-[300px] w-full rounded-lg flex flex-col justify-between'>
                        <div className='relative  flex justify-center items-center -mr-14 -mt-12'>
                            <Image src='/assets/polygon4.svg' alt='polygon' width={300} height={300} />
                            <Image src='/assets/p_icon4.png' alt='polygon' className='absolute' width={200} height={200} />
                        </div>
                        <h5 className='text-black text-base font-medium'>Career growth & mentorship</h5>
                    </div>

                    <div className='bg-[#FAC1C1] p-5 overflow-hidden h-[350px] md:max-w-[300px] w-full rounded-lg flex flex-col justify-between'>
                        <div className='relative  flex justify-center items-center -mr-14 -mt-12'>
                            <Image src='/assets/polygon5.svg' alt='polygon' width={300} height={300} />
                            <Image src='/assets/p_icon5.png' alt='polygon' className='absolute' width={200} height={200} />
                        </div>
                        <h5 className='text-black text-base font-medium'>Seamless hiring process</h5>
                    </div>

                </div>



                   


            </div>
        </div>
    )
}

export default WorkWithUs