'use client'
import React from 'react'
import { motion } from 'framer-motion'

function FallingButtonFramer() {
    return (
        <div className='bg-blue-900 w-[500px] h-[500px] relative ms-10 flex flex-col justify-end overflow-hidden'>
            <div className="bg-blue-900 w-[500px] h-[500px] relative flex flex-col items-center justify-end perspective">
                <motion.button
                    className="bg-white rounded-full px-6 py-3 shadow-md max-w-[200px]"
                    initial={{ y: -900, opacity: 0 }}
                    whileInView={{ y: -3, opacity: 1, rotate:3}}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    £25K/year
                </motion.button>
            </div>



        </div>
    )
}

export default FallingButtonFramer