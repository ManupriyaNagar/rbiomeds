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
                                src="/staff/10.png" // Using an existing large image as placeholder, user can replace
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
                                <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                                    <p className="">
                                        R-Biomeds, Singapore, is an emerging healthcare company with a vision to lead the healthcare market and build trust in the world of pharmaceuticals. The company was incorporated in the year 2016 with the goal to support varied verticals in the medical field to build reputable brands across South Asia.
                                    </p>

                                    <p>
                                        R-Biomeds, is a strategic planner, experienced executor, regulatory advisor and marketer of healthcare products. We are committed to assist pharmaceutical companies in becoming competitive and successful in today’s fast growing market. Our strategy is to work hard to evaluate the most important issues and the best opportunities that can elevate our client’s growth graph.
                                    </p>

                                    <p>
                                        Our deep insight and holistic approach beyond the political boundaries has helped us to build our presence in Myanmar & Singapore. With a vision to be a trusted healthcare organization of repute, admired by its stakeholders for being customer centric, driven by values, yet adhering to corporate governance, we take pride for being committed to CSR & employee recognition.
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
