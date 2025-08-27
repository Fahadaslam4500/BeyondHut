"use client";
import { motion } from "framer-motion";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

export default function FourSteps() {
    const steps = [
        {
            title: "The Clarity Call",
            desc: "A quick call to uncover your biggest time drains and map how we’ll give you hours back each week.",
            icon: "/assets/redesign/step_1.png",
        },
        {
            title: "Your Perfect Match",
            desc: "We handpick 2–3 trained candidates matched to your systems. You choose your fit and start within a week.",
            icon: "/assets/redesign/step_2.png",
        },
        {
            title: "Plug & Play Launch",
            desc: "We handle contracts, setup, and onboarding so your hire is productive from day one.",
            icon: "/assets/redesign/step_3.png",
        },
        {
            title: "The Freedom Phase™",
            desc: "Your hire takes on the busywork. You close more deals, enjoy family time or finally get your evenings back.",
            icon: "/assets/redesign/step_4.png",
        },
    ];

    return (
        <div className="w-full bg-[#E1F3F8] md:py-32 py-10 my-20">
            <section className="container">

                <TextAnimate animation="blurInUp" by="word" as={'h2'} duration={0.8} className="text-center text-3xl font-dm_serif md:text-4xl font-medium text-[#1B1B1B]">
                    How We Get You Started In Just 
                </TextAnimate>
                <h2 className="text-center my-3 mb-8 text-3xl font-dm_serif md:text-4xl font-bold text-gradient">4 Simple Steps.</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative">
                    {steps.map((step, index) => (
                        <motion.div
                         initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: "linear",
                    }}
                            key={index}
                            className="flex flex-col items-start text-center px-4 relative font-dm_serif"
                        >
                            <div className="w-[80px] h-[80px] mb-4 relative">
                                <Image
                                    src={step.icon}
                                    alt={step.title}
                                    width={180}
                                    height={180}
                                />
                            </div>
                            <h3 className="font-bold text-lg font-ibm_plex">{step.title}</h3>
                            <p className="text-gray-600 mt-2 text-sm text-start">{step.desc}</p>

                            {/* Arrows between steps (desktop only) */}
                            {index < steps.length - 1 && (
                                <div className=" block absolute md:top-1/3 md:right-[-40px] max-sm:rotate-90 max-sm:left-[30%] max-sm:top-[120%]">
                                    <Image
                                        src="/assets/redesign/arrow1.png"
                                        alt="arrow"
                                        width={100}
                                        height={100}
                                        className={index === 1 ? "scale-y-[-1]" : ""} 
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
