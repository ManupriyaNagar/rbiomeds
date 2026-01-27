'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const calculators = [
    {
        type: "bmi",
        title: "BMI Calculator",
        icon: "/images/calculators/bmi.png",
        href: "/calculators?type=bmi",
        description: "Calculate your Body Mass Index (BMI) to understand if you are at a healthy weight for your height. It's a quick and useful screening tool used globally by health professionals."
    },
    {
        type: "bmr",
        title: "BMR Calculator",
        icon: "/images/calculators/bmr.png",
        href: "/calculators?type=bmr",
        description: "Determine your Basal Metabolic Rate (BMR) to understand exactly how many calories your body needs to maintain basic functions. Essential for planning nutrition and fitness goals."
    },
    {
        type: "bodyfat",
        title: "Body Fat Calculator",
        icon: "/images/calculators/bodyfat.png",
        href: "/calculators?type=bodyfat",
        description: "Estimate your body fat percentage to get a clearer picture of your overall body composition and metabolic health, providing insights beyond just weight."
    }
];

const HealthCalculators = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white px-4 md:px-6">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-5xl font-black uppercase text-gray-900 mb-6 tracking-tighter hover:text-[#ef662a] transition-colors">
                        Health Tools & Calculators
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl font-medium">
                        Quickly assess your key health metrics with our pro-grade calculators. Precise, science-backed tools designed to help you monitor your journey toward a healthier lifestyle.
                    </p>
                </div>

                {/* Grid Section - Showcasing UI */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-8 max-w-7xl mx-auto">
                    {calculators.map((calc, index) => (
                        <Link
                            href={calc.href}
                            key={calc.type}
                            className="relative group cursor-pointer block"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            {/* Image/Icon Wrapper - Styled like Showcasing cards */}
                            <div className={`relative rounded-3xl overflow-hidden border-2 flex items-center justify-center transition-all duration-500 `}>
                                <Image
                                    src={calc.icon}
                                    alt={calc.title}
                                    width={420}
                                    height={220}
                                    className="object-cover transition-transform duration-700 "
                                />
                                {/* Background glow effect on hover */}
                                <div className="absolute inset-0 bg-white/10 transition-opacity duration-500"></div>
                            </div>

                            {/* Floating Content Box - Matches Showcasing style */}
                            <div className="-mt-10 px-6  relative z-10 w-full">
                                <div

                                    className="bg-gray-200 rounded-[2.5rem] px-4 py-2 w-full border border-gray-100"


                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl lg:text-2xl font-black text-gray-900  ">
                                            {calc.title}
                                        </h3>
                                        <div className="bg-black group-hover:bg-[#ef662a] text-white w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:rotate-45">
                                            <ArrowUpRight className="w-5 h-5 lg:w-5 lg:h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HealthCalculators;
