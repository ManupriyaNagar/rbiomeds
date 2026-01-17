'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Showcasing = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const cards = [
        {
            id: 1,
            title: "Commercial Space Design",
            description: "An Emerging Firm With A Vision To Lead The Market & Build A Name In The World Of Medicine. Delivering fast, secure, and professional medical advice.",
            image: "https://kit.createbigsupply.com/interora/wp-content/uploads/sites/38/2025/04/conceptual-interior-room-3d-illustration-2024-10-15-00-57-51-utc.jpg"
        },
        {
            id: 2,
            title: "Commercial Space Design",
            description: "This living room was designed to embody simplicity, elegance, and functionality. The goal was to create a warm yet sophisticated space with a neutral color palette, natural textures,",
            image: "https://kit.createbigsupply.com/interora/wp-content/uploads/sites/38/2025/04/ficus-next-to-brown-sofa-with-orange-pillows-in-gr-2024-10-18-12-54-55-utc.jpg"
        },
        {
            id: 3,
            title: "Commercial Space Design",
            description: "ISO 9001:2015 Certified Pharmaceutical Warehouse Opening In Yangon Myanmar. Strengthening our global brand presence and healthcare access.",
            image: "https://kit.createbigsupply.com/interora/wp-content/uploads/sites/38/2025/04/orange-armchair-next-to-lamp-in-minimal-living-roo-2024-10-18-22-38-51-utc.jpg"
        }
    ];

    return (
        <section className="py-24 bg-white px-4 md:px-6">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-medium text-gray-900 mb-6 font-geist-sans">
                        Showcasing Timeless Designs That<br />
                        Inspire and Elevate Spaces.
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Explore our curated portfolio of stunning interior designs, where creativity meets functionality to transform ordinary spaces into extraordinary experiences
                    </p>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-24 mb-20">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className="relative h-[480px] md:h-[450px] lg:h-[300px] group cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Image Wrapper with clipping */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Floating White Box - Positioned to expand DOWNWARDS */}
                            <div className="absolute top-[85%] left-6 right-6 z-[80]">
                                <motion.div
                                    layout
                                    className="bg-[#F8F8F8]/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 shadow-xl w-full"
                                    initial={false}
                                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
                                            {card.title}
                                        </h3>
                                        <div className="bg-black text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:rotate-45">
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
                                                <p className="text-gray-600 text-sm lg:text-base leading-relaxed font-medium">
                                                    {card.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Showcasing;