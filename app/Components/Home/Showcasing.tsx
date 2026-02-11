'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Showcasing = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const cards = [
        {
            id: 1,
            title: "Environmental",
            description: "R-Biomeds recognizes environmental protection as one of our guiding principles and a key component of sound business performance. We will operate in compliance with all relevant legislations on environment and we will strive to adopt the best environmental practices in the area of our business operations. To fulfill this commitment, we abide by a set of carefully crafted principles and guidelines.",
            image: "/policy/1.png"
        },
        {
            id: 2,
            title: "Sustainability",
            description: "The company considers sustainability as very important foundation of its business performance and is committed to the cause of promoting sustainability. Strengthening sustainability while developing business, is at the core of leadership focus. The company aims to follow and to promote good sustainability practices and to reduce adverse environmental impact of its activities by following well thought-out guidelines.",
            image: "/policy/2.png"
        },
        {
            id: 3,
            title: "Corporate Social Responsibility",
            description: "The objective of our CSR policy is to ensure an enhanced level of commitment at all levels in the organization, to operate its business in an economically, socially & environmentally sustainable manner, while recognizing the interests of its stakeholders. This policy guides the company to support those at the lower end of the pyramid through various activities such as patient support programmes, support homeless children, etc.",
            image: "/policy/3.png"
        }
    ];

    return (
        <section className="py-14 bg-white px-4 md:px-6">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium uppercase text-black mb-6 hover:text-[#ef662a]">
                        Our Policies
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl ">
                        R-Biomeds is an emerging pharmaceutical company with a vision to be a trusted health care organization, admired by its stakeholders for being customer centric, driven by our core values, guided by the principals of sustainability and corporate governance.</p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-6">
                    {cards.map((card, index) => (
                        <motion.div
                            layout
                            key={card.id}
                            className="relative group cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Image Wrapper */}
                            <div className="relative h-[250px] md:h-[300px] lg:h-[240px] rounded-2xl overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Floating White Box - Now in flow with negative margin */}
                            <div className="-mt-12 px-6 relative z-10 w-full">
                                <motion.div
                                    layout
                                    className="bg-[#ef622a]/90 backdrop-blur-sm rounded-2xl p-6 lg:p-4 w-full text-white"
                                    initial={false}
                                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-100 leading-tight">
                                            {card.title}
                                        </h3>
                                        <div className="bg-gray-200  group-hover:bg-[#ffffff] text-black w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-45">
                                            <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6" />
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                className="overflow-hidden mt-4"
                                            >
                                                <p className="text-gray-200 text-sm lg:text-base leading-relaxed font-medium">
                                                    {card.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcasing;