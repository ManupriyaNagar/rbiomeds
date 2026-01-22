'use client';
import React from 'react';
import Image from 'next/image';
import { Brain, Stethoscope, Baby, HeartHandshake, Activity, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

const SpecialtiesSection = () => {
    return (
        <>
            <section className="py-10 bg-white pt-10 ">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 2xl:gap-10 gap-6 items-stretch relative">
                        {/* Left Column */}
                        <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
                            {/* Dermatology Card */}
                            <motion.div
                                initial={{ x: "100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-[#F8F9FA] rounded-md 2xl:p-10 p-6 flex-1 relative"
                            >
                                <h3 className="text-3xl font-bold text-black hover:text-[#ef6623] mb-4">Our Vision</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    To be a trusted health care organization of repute, admired by its stakeholders for being customer centric.
                                </p>
                            </motion.div>
                            {/* Pediatrics Card */}
                            <motion.div
                                initial={{ x: "100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-[#F8F9FA] rounded-md 2xl:p-10 p-6 flex-1  relative"
                            >
                                <h3 className="text-3xl font-bold text-black  hover:text-[#ef6623] mb-4">Our Culture</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    At R-Biomeds, culture is about empowerment, promoting collaborative atmosphere with shared goals.
                                </p>
                            </motion.div>


                            {/* Orthopedics Card */}
                            <motion.div
                                initial={{ x: "100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-[#F8F9FA] rounded-md 2xl:p-10 p-6 flex-1  relative"
                            >
                                <h3 className="text-3xl font-bold text-black  hover:text-[#ef6623] mb-4">Our Mission</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    To inspire hope and contribute to the overall health and well-being by promising to deliver world class products and healthcare services for better patient care through integrated practices, education and research.</p>
                            </motion.div>
                        </div>

                        {/* Middle Column - Image */}
                        <div className="lg:col-span-4 h-full min-h-[500px] lg:min-h-0 order-1 lg:order-2 z-10 relative">
                            <div className="relative w-full h-full rounded-md overflow-hidden ">
                                <Image
                                    src="/staff/5.png"
                                    alt="Doctor Consultation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:col-span-4 flex flex-col gap-8 order-3 lg:order-3">
                            {/* General Consultation Card */}
                            <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-[#F8F9FA] rounded-md 2xl:p-10 p-8 flex-1  relative"
                            >
                                <h3 className="text-3xl font-bold text-black  hover:text-[#ef6623] mb-4">Execution Excellence</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    With the right capability and attitude our team is aligned to its core values & highly accountable results.
                                </p>
                            </motion.div>


                            {/* Mental Health Card */}
                            <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-[#F8F9FA] rounded-md 2xl:p-10 p-8 flex-1  relative"
                            >
                                <h3 className="text-3xl font-bold text-black  hover:text-[#ef6623] mb-4">Our Values</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    R-Biomeds is driven by its core values like quality, customer focus and respect for individuals.
                                </p>
                            </motion.div>

                            {/* Diagnostics Card */}
                            <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-[#F8F9FA] rounded-md 2xl:p-10 p-8 flex-1 relative"
                            >
                                <h3 className="text-3xl hover:text-[#ef6623] font-bold text-black mb-4">Employee Value Proposition</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    We understand that career growth of an individual at R-Biomeds is an important aspect. </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpecialtiesSection;
