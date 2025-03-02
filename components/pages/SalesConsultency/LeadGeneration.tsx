'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';

function LeadGeneration() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }} 
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
            {[
                { src: '/assets/leadgeneration1.png', bg: '#D2CCFA', footerBg: '#BAB2F1', text: 'Define your Ideal Customer Profile (ICP).' , class:"mt-6"},
                { src: '/assets/leadgeneration2.png', bg: '#F3C9B6', footerBg: '#EFB79E', text: 'Refine your pitch, outreach, and touchpoints.' },
                { src: '/assets/leadgeneration3.png', bg: '#F8E1BE', footerBg: '#EAC996', text: 'Use advanced tools to target decision-makers.' },
                { src: '/assets/leadgeneration4.png', bg: '#ADD0F3', footerBg: '#8CB2D9', text: 'Leverage partnerships for warm introductions.' },
            ].map((item, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`rounded-lg col-span-1 flex flex-col justify-center items-center hover:cursor-pointer min-h-[280px]`} 
                    style={{ backgroundColor: item.bg }}
                >
                    <div className='p-4 flex justify-center items-center self-center'>
                        <Image src={item.src} alt='Lead Generation' width={300} height={190} unoptimized className={`${item.class}`}/>
                    </div>
                    <div className="p-4 rounded-b-lg w-full text-center text-white mt-auto font-bold text-lg" style={{ backgroundColor: item.footerBg }}>
                        <p className='text-base'>{item.text}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default LeadGeneration;
