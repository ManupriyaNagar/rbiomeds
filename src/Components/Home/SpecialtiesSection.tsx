'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SpecialtiesSection = () => {
    return (
        <section className="py-10 bg-white overflow-x-hidden">
            {/* overflow-x-hidden FIXES mobile animation bugs */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 2xl:gap-10 items-stretch">

                    {/* LEFT COLUMN */}
                    <div className="lg:col-span-4 flex flex-col gap-6 order-1 lg:order-1">
                        <motion.div
                            initial={{ x: -120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="group bg-[#F8F9FA] 2xl:bg-gray-200 rounded-md p-10 2xl:p-10"
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-[#ef6623] transition-colors duration-300 mb-4">
                                Our Vision
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                To be a trusted health care organization of repute, admired by its stakeholders for being customer centric.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ x: -120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="group bg-[#F8F9FA] 2xl:bg-gray-200 rounded-md p-10 2xl:p-10"
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-[#ef6623] transition-colors duration-300 mb-4">
                                Our Culture
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                At R-Biomeds, culture is about empowerment and a collaborative atmosphere with shared goals.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ x: -120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="group bg-[#F8F9FA] 2xl:bg-gray-200 rounded-md p-10 2xl:p-10"
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-[#ef6623] transition-colors duration-300 mb-4">
                                Our Mission
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                To inspire hope and contribute to overall health through world-class products and services.
                            </p>
                        </motion.div>
                    </div>

                    {/* IMAGE COLUMN – DESKTOP ONLY */}
                    {/* IMAGE COLUMN – DESKTOP CENTER */}
                    <div className="hidden lg:block lg:col-span-4 lg:order-2 relative">
                        <div className="relative w-full h-full min-h-[500px] rounded-md overflow-hidden">
                            <Image
                                src="/ourvision.png"
                                alt="Doctor Consultation"
                                fill
                                className="md:object-cover 2xl:object-contain object-center transition-transform duration-700"
                                priority
                            />
                        </div>
                    </div>


                    {/* RIGHT COLUMN */}
                    <div className="lg:col-span-4 flex flex-col gap-8 order-3 lg:order-3">
                        <motion.div
                            initial={{ x: -120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="group bg-[#F8F9FA] 2xl:bg-gray-200 rounded-md p-10 2xl:p-10"
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-[#ef6623] transition-colors duration-300 mb-4">
                                Execution Excellence
                            </h3>

                            <p className="text-gray-500 font-medium leading-relaxed">
                                Our teams deliver accountable results with the right capability and attitude.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ x: -120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="group bg-[#F8F9FA] 2xl:bg-gray-200 rounded-md p-10 2xl:p-10"
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-[#ef6623] transition-colors duration-300 mb-4">
                                Our Values
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                Driven by quality, customer focus, and respect for individuals.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ x: -120, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="group bg-[#F8F9FA] 2xl:bg-gray-200 rounded-md p-10 2xl:p-10"
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-black group-hover:text-[#ef6623] transition-colors duration-300 mb-4">
                                Employee Value Proposition
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed">
                                We value career growth as a core part of every employee’s journey.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SpecialtiesSection;
