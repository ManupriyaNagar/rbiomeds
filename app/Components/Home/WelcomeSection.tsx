"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const WelcomeSection = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#F3F4F6] rounded-2xl p-6 md:p-4 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">

                        {/* Left: Building Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 relative h-[400px] md:h-[400px] lg:h-[700px] rounded-2xl overflow-hidden "
                        >
                            <img
                                src="/welcome.png" // Using an existing large image as placeholder, user can replace
                                alt="R-Biomeds HQ"
                                className="object-cover"
                            />

                        </motion.div>

                        {/* Right: Text Content */}
                        <div className="lg:col-span-7 flex flex-col gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h1 className="text-2xl md:text-5xl 2xl:text-[5.2rem] font-light text-gray-900 ">Welcome to <span className="font-semibold hover:text-[#ef662a]"> <br className='md:hidden 2xl:block' />R-Biomeds</span></h1>

                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm"
                            >
                                <div className="space-y-6 text-gray-700 text-base md:text-md leading-relaxed">
                                    <p className="">
                                      <span className="font-semibold">R-Biomeds</span>, headquartered in Singapore, is a fast-growing healthcare organization with a clear
vision to build trust, advance access, and lead innovation in the pharmaceutical and healthcare
space. Incorporated in 2016, the company was founded with the objective of supporting
multiple healthcare verticals and developing reputable, high-quality brands across Asia.

                                    </p>

                                    <p>
                                        R-Biomeds operates as a strategic planner, experienced executor, regulatory advisor, and marketer of healthcare products. We partner closely with pharmaceutical and FMCG healthcare
companies to help them successfully enter, scale, and compete in rapidly evolving markets. Our
approach is rooted in identifying critical market challenges and unlocking high-impact
opportunities that accelerate sustainable growth for our partners.

                                    </p>

                                    <p>
                                        With deep regional insight and a holistic, cross-border perspective, R-Biomeds has rapidly
expanded its footprint across key Asian markets including <span className="font-semibold">Myanmar, Cambodia, Laos, Nepal,
and Singapore</span>, with continued momentum across the region. Guided by a long-term vision to
become a trusted and respected healthcare organization, we remain customer-centric, values-
driven, and firmly aligned with strong corporate governance. We take pride in our commitment
to corporate social responsibility, ethical growth, and the continuous development and
recognition of our people.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WelcomeSection;
