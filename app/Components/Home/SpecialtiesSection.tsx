'use client';
import React from 'react';
import Image from 'next/image';
import { Brain, Stethoscope, Baby, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const SpecialtiesSection = () => {
    return (
        <>
            <section className="py-10 bg-white ">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-10">
                        <h2 className="text-3xl md:text-6xl font-medium text-gray-900 mb-6 leading-none">
                            Comprehensive Care Across<br />
                            Multiple Specialties, Online<br />
                            Anytime
                        </h2>
                        <p className="text-gray-500 text-lg">
                            We are dedicated to transforming healthcare access by connecting<br />
                            patients with certified doctors through secure
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative">

                        {/* Left Column */}
                        <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
                            {/* Dermatology Card */}
                            <motion.div
                                initial={{ x: "100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-[#F8F9FA] rounded-md p-10 flex-1 hover:shadow-lg transition-shadow relative"
                            >
                                <div className="bg-[#ef662e] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                    <Brain className="text-white w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dermatology</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    Primary care services for common illnesses and
                                    health concerns. Skin, hair, and nail consultations
                                    with certified dermatologists.
                                </p>
                            </motion.div>

                            {/* Pediatrics Card */}
                            <motion.div
                                initial={{ x: "100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-[#F8F9FA] rounded-md p-10 flex-1 hover:shadow-lg transition-shadow relative"
                            >
                                <div className="bg-[#ef662e] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                    <Baby className="text-white w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pediatrics</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    Primary care services for common illnesses and
                                    health concerns. Skin, hair, and nail consultations
                                    with certified dermatologists.
                                </p>
                            </motion.div>
                        </div>

                        {/* Middle Column - Image */}
                        <div className="lg:col-span-4 h-full min-h-[500px] lg:min-h-0 order-1 lg:order-2 z-10 relative">
                            <div className="relative w-full h-full rounded-md overflow-hidden shadow-xl">
                                <Image
                                    src="/assets/images/specialties/doctor_vertical.png"
                                    alt="Doctor Consultation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="lg:col-span-4 flex flex-col gap-6 order-3 lg:order-3">
                            {/* General Consultation Card */}
                            <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-[#F8F9FA] rounded-md p-10 flex-1 hover:shadow-lg transition-shadow relative"
                            >
                                <div className="bg-[#ef662e] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                    <Stethoscope className="text-white w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">General Consultation</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    Primary care services for common illnesses and
                                    health concerns. Skin, hair, and nail consultations
                                    with certified dermatologists.
                                </p>
                            </motion.div>

                            {/* Mental Health Card */}
                            <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                                viewport={{ once: true }}
                                className="bg-[#F8F9FA] rounded-md p-10 flex-1 hover:shadow-lg transition-shadow relative"
                            >
                                <div className="bg-[#ef662e] w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                    <HeartHandshake className="text-white w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mental Health</h3>
                                <p className="text-gray-500 leading-relaxed font-medium">
                                    Primary care services for common illnesses and
                                    health concerns. Skin, hair, and nail consultations
                                    with certified dermatologists.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpecialtiesSection;
