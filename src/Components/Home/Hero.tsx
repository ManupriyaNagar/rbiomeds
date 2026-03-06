"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative bg-white md:h-screen 2xl:min-h-[800px] overflow-hidden flex items-center md:pt-20 md:px-0 px-4 pt-30 ">
            {/* Subtle Grid Pattern Overlay */}

            <div className="container mx-auto relative z-10">
                <div className="bg-gradient-to-r from-red-900 to-[#ef662a] h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-6 md:p-2 lg:p-4 rounded-2xl overflow-hidden  border-white/10">

                    {/* Left Content */}
                    <div className="flex flex-col gap-6 lg:gap-4 md:max-w-2xl p-6">
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
                                Advancing Healthcare Access Across Emerging Markets
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05]"
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
                            <Link href="/services" className="group bg-[#ef662a] hover:bg-white text-white hover:text-[#ef662a] md:px-8 px-4 md:py-4 py-2 rounded-full font-bold md:text-lg text-sm transition-all duration-300 flex items-center gap-2 ">
                                Explore Our Services
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* stats card for 200k */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-4 bg-white/5 backdrop-blur-xl border border-white/20 p-2 w-fit rounded-3xl md:ml-0 -ml-10"
                        >
                            <div className="bg-white/10 p-5 rounded-2xl w-fit flex items-center gap-6 relative group hover:bg-white/15 transition-all">
                                <div className="flex flex-col items-center">
                                    <div className="bg-white/20 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex items-center justify-center min-w-[100px]">
                                        <span className="text-4xl  text-white leading-none">600+ <br /> <span className="text-2xl"> Quality Brands </span></span>
                                    </div>
                                    <div className="flex -space-x-3 mt-4 ">
                                        {["/logo/1.png", "/logo/2.png", "/logo/3.png", "/logo/4.png", "/logo/5.png", "/logo/6.png"].map((logo, i) => (
                                            <div key={i} className="w-10 h-10 rounded-full bg-white overflow-hidden relative ">
                                                <img
                                                    src={logo}
                                                    alt={`Brand Logo ${i + 1}`}
                                                    className="w-full h-full object-contain "
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="h-20 w-[1px] bg-white/20 mx-2" />
                                <div className="flex flex-col gap-3">
                                    <p className="text-white/90 text-sm max-w-[180px] leading-snug font-medium">
                                        Quality brands for your health.
                                    </p>
                                    <Link
                                        href="/ourproduct"
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center self-end group-hover:scale-110 transition-transform "
                                    >
                                        <ArrowUpRight className="w-5 h-5 text-[#ef662a]" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Content - Visual Grid */}
                    <div className="flex flex-col gap-10 relative">

                        {/* Top Large Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="col-span-2 relative bg-white rounded-3xl overflow-hidden aspect-[8/6] group border border-white/10 "
                        >
                            <img
                                src="/science.png"
                                alt="Doctor Consultation"
                                className="object-cover group-hover:scale-105 transition-transform duration-1000 "
                            />

                            <div className="absolute bottom-6 right-6 flex flex-wrap justify-end gap-2 max-w-[85%]">
                                {['Marketing', 'Distribution', 'Importation', 'Regulatory', 'Trademark Registration', 'Healthcare Consultancy'].map((tag) => (
                                    <span key={tag} className="px-3 py-1.5 bg-white/90 backdrop-blur-md border border-white/10 rounded-full text-black text-[10px] uppercase tracking-wider font-bold hover:bg-[#ef662a] hover:text-white transition-all cursor-default whitespace-nowrap">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4" >
                            {/* Bottom Left Small Card (Successful Diagnose) */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                className="bg-white rounded-2xl p-4 2xl:p-10 relative border border-white/10 flex flex-col justify-between "
                            >
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black text-[#ef662a] leading-none">300+</h3>
                                    <p className="text-[#022c2e]/60 text-[20px] tracking-wider mt-2">Experienced Staff</p>
                                </div>

                            </motion.div>


                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                className="bg-white rounded-2xl p-4 2xl:p-10 relative overflow-hidden border border-white/10 flex flex-col justify-between "
                            >
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-black text-[#ef662a] leading-none">50000+</h3>
                                    <p className="text-[#022c2e]/60 text-[20px] tracking-wider mt-2">Satisfied Clients</p>
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
                                    <h3 className="text-3xl font-black text-[#ef662a] leading-none">1000+</h3>
                                    <p className="text-[#022c2e]/60 text-[20px] tracking-wider mt-2">Positive Reviews</p>
                                </div>



                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
