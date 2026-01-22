"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative bg-white md:h-screen 2xl:min-h-[800px] overflow-hidden flex items-center pt-20 md:p-0 p-4">
            {/* Subtle Grid Pattern Overlay */}

            <div className="container mx-auto relative z-10">
                <div className="bg-gradient-to-r from-red-900 to-[#ef662a] h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center p-6 md:p-2 lg:p-4 rounded-2xl overflow-hidden  border-white/10">

                    {/* Left Content */}
                    <div className="flex flex-col gap-6 lg:gap-4 max-w-2xl p-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 w-fit"
                        >
                            <div className="bg-[#ef662a] rounded-full p-1">
                                <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
                                Instant access to certified doctors
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05]"
                        >
                            Your Health Is <span className="font-semibold"> <br />Our Priority</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-white/80 text-base md:text-lg leading-relaxed max-w-lg"
                        >
                            R-Biomeds is an emerging pharmaceutical company focused on building trusted, customer-centric healthcare, guided by strong values, sustainability, and corporate governance.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex items-center gap-4"
                        >
                            <button className="group bg-[#ef662a] hover:bg-white text-white hover:text-[#ef662a] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-2 ">
                                Book a Consultation
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* stats card for 200k */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-4 bg-white/5 backdrop-blur-xl border border-white/20 p-2 w-fit rounded-3xl"
                        >
                            <div className="bg-white/10 p-5 rounded-2xl w-fit flex items-center gap-6 relative group hover:bg-white/15 transition-all">
                                <div className="flex flex-col items-center">
                                    <div className="bg-white/20 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center justify-center min-w-[100px]">
                                        <span className="text-4xl font-black text-white leading-none">200K</span>
                                    </div>
                                    <div className="flex -space-x-3 mt-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white/20 bg-gray-600 overflow-hidden relative ">
                                                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-20 w-[1px] bg-white/20 mx-2" />
                                <div className="flex flex-col gap-3">
                                    <p className="text-white/90 text-sm max-w-[180px] leading-snug font-medium">
                                        Talk to experienced doctors anytime, anywhere.
                                    </p>
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center self-end group-hover:scale-110 transition-transform ">
                                        <ArrowUpRight className="w-5 h-5 text-[#ef662a]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Visual Grid */}
                    <div className="lg:grid grid-cols-2 gap-4  h-full relative md:space-y-0 space-y-7 ">

                        {/* Top Large Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="col-span-2 relative bg-white rounded-3xl overflow-hidden aspect-[12/9] group border border-white/10 "
                        >
                            <Image
                                src="/staff/6.png"
                                alt="Doctor Consultation"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000 "
                            />

                            <div className="absolute bottom-6 right-6 flex flex-wrap justify-end gap-2 max-w-[85%]">
                                {['Symptoms', 'Body Area', 'Specialization', 'Risk Factors', 'Condition Name', 'Population Group'].map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white text-[10px] uppercase tracking-wider font-bold hover:bg-[#ef662a] hover:text-white transition-all cursor-default whitespace-nowrap">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Bottom Left Small Card (Successful Diagnose) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="bg-white rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/10 "
                        >
                            <div className="relative w-28 h-28 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90 ">
                                    <circle
                                        className="text-gray-100"
                                        strokeWidth="10"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="45"
                                        cx="56"
                                        cy="56"
                                    />
                                    <motion.circle
                                        initial={{ strokeDashoffset: 282.7 }}
                                        animate={{ strokeDashoffset: 282.7 * 0.02 }}
                                        transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                                        className="text-[#ef662a]"
                                        strokeWidth="10"
                                        strokeDasharray="282.7"
                                        strokeLinecap="round"
                                        stroke="currentColor"
                                        fill="transparent"
                                        r="45"
                                        cx="56"
                                        cy="56"
                                    />
                                </svg>
                                <div className="absolute text-3xl font-black text-[#022c2e]">98%</div>
                            </div>
                            <div className="text-center">
                                <p className="text-[#022c2e]/40 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Statistical Analysis</p>
                                <p className="text-[#022c2e] font-bold text-lg leading-tight">Successful Diagnose</p>
                            </div>
                        </motion.div>

                        {/* Bottom Right Card (Professional Doctor) */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="bg-white rounded-2xl p-4 2xl:p-10 relative overflow-hidden border border-white/10 flex flex-col justify-between "
                        >
                            <div className="relative z-10">
                                <h3 className="text-5xl font-black text-[#ef662a] leading-none">300+</h3>
                                <p className="text-[#022c2e]/60 text-xs font-bold uppercase tracking-wider mt-2">Professional Doctors</p>
                            </div>

                            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-10">
                                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#ef662a]">
                                    <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,73.1,41.4C64.8,53.8,53.8,64.1,40.7,71.3C27.6,78.5,12.4,82.6,-2.1,86.2C-16.6,89.8,-30.5,92.9,-42.6,88.3C-54.7,83.7,-65,71.4,-72.5,58.2C-80,45,-84.7,30.9,-86.3,16.5C-87.9,2.1,-86.4,-12.6,-80.6,-25.1C-74.8,-37.6,-64.7,-47.9,-53,-56.3C-41.3,-64.7,-28.1,-71.2,-14.3,-75.4C-0.5,-79.6,13.7,-81.5,27.1,-80.4C40.5,-79.3,53.1,-74.2,44.7,-76.4Z" transform="translate(100 100)" />
                                </svg>
                            </div>

                            <div className="mt-4 flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
                                ))}
                                <div className="w-8 h-8 rounded-full border-2 border-white bg-[#ef662a] text-white text-[10px] font-bold flex items-center justify-center">
                                    +50
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
