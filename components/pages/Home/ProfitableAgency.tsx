"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



export default function ProfitableAgency() {
    const MotionImage = motion(Image);

    return (
        <div className="container">
            <section className="md:mt-20 mt-4 w-full py-16 lg:px-20">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left Side (Text) */}
                    <div className="md:w-3/5 text-left">
                        <h2 className="text-3xl md:text-4xl font-normal capitalize leading-snug font-ibm_plex ">
                            Your shortcut to a more <br />
                            {" "}

                            <span className="text-gradient font-dm_serif">Profitable Agency</span>
                           
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-lg">
                            We give property managers and realtors more hours back in their week without hiring headaches.
                            No long interviews. No steep training curve. Just a trained team member or back-end team:
                            ready to get to work.
                        </p>
                        <Link href={'/get-started'}>
                            <button className="  mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-[#CFF0FF] to-[#D2CBFF] text-black text-lg font-medium hover:scale-105 transition-transform">
                                Start in 7 Days
                            </button>
                        </Link>

                        <hr className="bg-[#E7E7E7] h-[1px] my-10" />

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                            <motion.div initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}>
                                <Image src="/assets/redesign/agency1.png" alt="Agency Icon" width={40} height={40} className="mb-2" />
                                <p className="font-semibold text-purplish text-lg ">Less admin, more closings</p>
                                <p className="text-[#6D6D6D]  text-base mt-2">
                                    Offload your inbox, listings, and tenant calls so you can focus on revenue.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <Image src="/assets/redesign/agency2.png" alt="Agency Icon" width={40} height={40} className="mb-2" />
                                <p className="font-semibold text-purplish text-lg">Smooth management, zero stress</p>
                                <p className="text-[#6D6D6D]  text-base mt-2">
                                    Get a hire who’s supported, guided, and kept on track:  without you having to manage them constantly.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <Image src="/assets/redesign/agency3.png" alt="Agency Icon" width={40} height={40} className="mb-2" />
                                <p className="font-semibold text-purplish text-lg">Your systems, our people</p>
                                <p className="text-[#6D6D6D]  text-base mt-2">
                                    We integrate into your CRMs, portals, and workflows seamlessly.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <Image src="/assets/redesign/agency4.png" alt="Agency Icon" width={40} height={40} className="mb-2" />
                                <p className="font-semibold text-purplish text-lg">Talent you can trust</p>
                                <p className="text-[#6D6D6D]  text-base mt-2">
                                    Every hire passes a 2-month UK-specific estate agency training.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side (Images) */}
                    <div className="relative hidden  md:w-2/5 md:flex justify-center items-center">
                        <div className="relative w-full h-full flex flex-col gap-2 justify-center items-center">
                            <MotionImage
                                src="/assets/redesign/agency_img2.png"
                                alt="Team meeting"
                                width={400}
                                // agencycontainer
                                height={400}
                                initial={{ scale: 0.1, opacity: 0, y: 50 }}
                                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="top-0 right-6 w-[70%] rounded-xl"
                            />
                            <MotionImage
                                src="/assets/redesign/agency_img1.png"
                                alt="People standing"
                                width={600}
                                height={600}
                                className="relative w-[80%] rounded-xl shadow-lg"
                            />
                            <MotionImage
                                src="/assets/redesign/agency_img3.png"
                                alt="Handshake"
                                width={400}
                                height={400}
                                initial={{ scale: 0.1, opacity: 0, y: -50 }}
                                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="w-[70%] rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="flex md:hidden">
                         <motion.img
                                src="/assets/redesign/agencycontainer.png"
                                alt="Team meeting"
                                initial={{ scale: 0.1, opacity: 0, y: 50 }}
                                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: false }}
                                className="w-full right-6  rounded-xl"
                            />
                    </div>
                </div>
            </section>
        </div>
    );
}
