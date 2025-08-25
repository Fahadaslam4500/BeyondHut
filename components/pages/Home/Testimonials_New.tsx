// components/Testimonials.tsx
"use client";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

export default function Testimonials_New() {
    return (
        <section className="max-w-5xl mx-auto bg-white font-dm_sans p-5">
            {/* Heading */}

            <TextAnimate animation="blurInUp" by="character" as={'h2'} duration={0.8} className="text-center my-7 text-3xl font-roca md:text-4xl font-bold text-[#1B1B1B]">
                What Our Clients Say
            </TextAnimate>

            <div className="grid gap-8 md:grid-cols-2">


                {/* First Row - Large Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: "linear",
                    }}
                    className="relative bg-white border border-[#E7E7E7] rounded-2xl p-6 md:col-span-2 md:flex md:items-center">
                    {/* Quote Background */}
                    <img
                        src="/assets/redesign/quote.png"
                        alt="quote"
                        className=" md:w-[20] md:h-[20] top-2 right-[20%] absolute"
                    />

                    {/* Text Content */}
                    <div className="relative z-10 flex-1 flex flex-col justify-between md:h-full md:pt-5">
                        <div className="flex flex-col justify-start gap-3">
                            <h3 className="text-xl font-semibold mb-2">
                                BeyondHut has taken a huge load off our team
                            </h3>
                            <p className="text-gray-600 mb-4">
                                "They used to get tied up in lettings admin but now deals progress
                                faster, tenants are happier, and we finally have more time to
                                focus on sales."
                            </p>
                        </div>
                        <div className="flex flex-col items-start">
                            <p className="font-medium">Rachel M</p>
                            <p className="text-sm text-gray-500">
                                Lettings Director, London, UK
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className=" relative w-full h-[220px] mt-6 md:mt-0 md:w-[220px] md:h-[240px] md:ml-6 flex-shrink-0">
                        <Image
                            src="/assets/redesign/avatar1.png"
                            alt="Rachel M"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>
                </motion.div>

                {/* Second Row - Two Cards */}
                <motion.div
                    className="relative bg-white border border-[#E7E7E7] rounded-2xl p-6 w-full"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.5,
                        ease: "linear"
                    }}

                >
                    <div className="relative z-10">
                        <h3 className="text-lg font-semibold mb-2">
                            We were drowning in admin and now everything flows
                        </h3>
                        <p className="text-gray-600 mb-4">
                            "Our remote PM handles the details so we can focus on growing the
                            business."
                        </p>
                        <div className="flex items-center gap-3">
                            <Image
                                src="/assets/redesign/avatar2.png"
                                alt="David G"
                                width={40}
                                height={40}
                            />
                            <div>
                                <p className="font-medium">David G</p>
                                <p className="text-sm text-gray-500">
                                    Branch Owner, Austin, TX
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div

                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: "linear"
                    }}
                    className=" relative bg-[#00B7EB1A] border border-[#E7E7E7] rounded-2xl p-6 w-full">
                    {/* Quote Background */}
                    <img
                        src="/assets/redesign/quote.png"
                        alt="quote"
                        className=" md:w-[20] md:h-[20] bottom-2 right-0 absolute"
                    />

                    <div className="relative z-10">
                        <h3 className="text-lg font-semibold mb-2">
                            We scaled from 60 to 200 managed properties
                        </h3>
                        <p className="text-gray-600 mb-4">
                            "Without hiring a single local in-house admin. Our BeyondHut team
                            handles tenant comms, maintenance and compliance. They are great,
                            highly recommended."
                        </p>
                        <div className="flex items-center gap-3">
                            <Image
                                src="/assets/redesign/avatar4.png"
                                alt="Olivia Martinez"
                                width={40}
                                height={40}
                            />
                            <div>
                                <p className="font-medium">Olivia Martinez</p>
                                <p className="text-sm text-gray-500">
                                    Operations Manager, Liverpool
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
