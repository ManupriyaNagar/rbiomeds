"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [

    // Prescription Medicines
    { id: 'cardiovascular', title: 'Cardiovascular', image: '/ourproduct/4.png', tab: 'prescription', slug: 'cardiovascular-prescription' },
    { id: 'anti-infectives', title: 'Anti-Infectives', image: '/ourproduct/3.png', tab: 'prescription', slug: 'anti-infectives-prescription' },
    { id: 'oncology', title: 'Oncology', image: '/ourproduct/6.png', tab: 'prescription', slug: 'oncology-prescription' },
    { id: 'ENT', title: 'ENT', image: '/ourproduct/5.png', tab: 'prescription', slug: 'ENT-prescription' },
    { id: 'haematology', title: 'Haematology', image: '/ourproduct/8.png', tab: 'prescription', slug: 'haematology-prescription' },
    { id: 'local-anesthetics', title: 'Local Anesthetics', image: '/ourproduct/23.png', tab: 'prescription', slug: 'local-anesthetics-prescription' },
    { id: 'dermatology', title: 'Dermatology', image: '/ourproduct/33.png', tab: 'prescription', slug: 'dermatology-prescription' },
    { id: 'endocrinology', title: 'Endocrinology', image: '/ourproduct/22.png', tab: 'prescription', slug: 'endocrinology-prescription' },
    { id: 'analgesic', title: 'Analgesic', image: '/ourproduct/11.png', tab: 'prescription', slug: 'analgesic-prescription' },
    { id: 'hepatology', title: 'Hepatology', image: '/ourproduct/12.png', tab: 'prescription', slug: 'hepatology-prescription' },
    { id: 'nephrology', title: 'Nephrology', image: '/ourproduct/34.png', tab: 'prescription', slug: 'nephrology-prescription' },
    { id: 'gi', title: 'GI', image: '/ourproduct/20.png', tab: 'prescription', slug: 'gi-prescription' },
    { id: 'urology', title: 'Urology', image: '/ourproduct/35.png', tab: 'prescription', slug: 'urology-prescription' },
    { id: 'oral-care', title: 'Oral Care', image: '/ourproduct/13.png', tab: 'prescription', slug: 'oral-care-prescription' },
    { id: 'biosimilar', title: 'Biosimilar', image: '/ourproduct/26.png', tab: 'prescription', slug: 'biosimilar-prescription' },
    { id: 'neurology', title: 'Neurology', image: '/ourproduct/24.png', tab: 'prescription', slug: 'neurology-prescription' },


    //wellness and nutrition
    { id: 'kids-care-wellness', title: 'Kids Care', image: '/ourproduct/1.png', tab: 'wellness', slug: 'kids-care-wellness' },
    { id: 'general-wellbeing-wellness', title: 'General Wellbeing', image: '/ourproduct/2.png', tab: 'wellness', slug: 'general-wellbeing-wellness' },
    { id: 'women-wellness', title: 'Women', image: '/ourproduct/7.png', tab: 'wellness', slug: 'women-wellness' },
    { id: 'diabetic-care-wellness', title: 'Diabetic Care', image: '/ourproduct/14.png', tab: 'wellness', slug: 'diabetic-care-wellness' },
    { id: 'eye-care-wellness', title: 'Eye Care', image: '/ourproduct/17.png', tab: 'wellness', slug: 'eye-care-wellness' },
    { id: 'neuro-wellness', title: 'Neuro', image: '/ourproduct/24.png', tab: 'wellness', slug: 'neuro-wellness' },
    { id: 'bone-health-wellness', title: 'Bone Health', image: '/ourproduct/25.png', tab: 'wellness', slug: 'bone-health-wellness' },


    // Health Concerns
    { id: 'general-wellbeing-health', title: 'General Wellbeing', image: '/ourproduct/2.png', tab: 'health', slug: 'general-wellbeing-health' },
    { id: 'child-health', title: 'Child', image: '/ourproduct/10.png', tab: 'health', slug: 'child-health' },
    { id: 'women-health', title: 'Women', image: '/ourproduct/7.png', tab: 'health', slug: 'women-health' },


    // Medical Devices
    { id: 'medical-devices', title: 'Medical Devices', image: '/ourproduct/27.png', tab: 'medical', slug: 'medical-devices' },


    // Vet Care
    { id: 'nutrition-vetcare', title: 'Nutrition', image: '/ourproduct/15.png', tab: 'vetcare', slug: 'nutrition-vetcare' },
    { id: 'food-vetcare', title: 'Food', image: '/ourproduct/18.png', tab: 'vetcare', slug: 'food-vetcare' },
];

const tabs = [
    { id: 'prescription', label: 'Prescription Medicines' },
    { id: 'wellness', label: 'Wellness & Nutrition' },
    { id: 'health', label: 'Health Concerns' },
    { id: 'medical', label: 'Medical Devices' },
    { id: 'vetcare', label: 'Vet Care' },
];

export default function ExploreProducts() {
    const [activeTab, setActiveTab] = useState('prescription');

    const filteredCategories = categories.filter(cat => cat.tab === activeTab);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto">
                {/* Heading Section */}
                <div className="text-center mb-12 mt-10 2xl:mt-20 px-4">
                    <h2 className="text-3xl md:text-[3.5rem] font-bold text-gray-500 hover:text-[#ef662a] leading-tight mb-4">
                        Quality Healthcare Products For Every Need
                    </h2>
                    <p className="max-w-7xl mx-auto text-gray-500 text-base md:text-lg leading-relaxed">
                        At ABC International, we are dedicated to developing, manufacturing, sourcing and delivering only the highest quality pharmaceutical products along with renowned partners across the globe.
                        We understand that in healthcare, excellence is non-negotiable. That's why we have established partnerships with industry leaders who share our commitment to uncompromising quality and patient well-being.
                    </p>
                </div>

                {/* Tab Navigation - Mobile Dropdown */}
                <div className="md:hidden mb-8 px-8 relative">
                    <select
                        value={activeTab}
                        onChange={(e) => setActiveTab(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-100 bg-gradient-to-r from-red-900 to-[#ef662a] text-white focus:outline-none focus:ring-2 focus:ring-[#ef662a] appearance-none"
                    >
                        {tabs.map((tab) => (
                            <option key={tab.id} value={tab.id}>
                                {tab.label}
                            </option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-12 flex items-center pointer-events-none text-white">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                        </svg>
                    </div>
                </div>

                {/* Tab Navigation - Desktop Tabs */}
                <div className="hidden md:flex justify-center mb-16 overflow-x-auto px-4 scrollbar-hide">
                    <div className="inline-flex gap-2 bg-gradient-to-r from-red-900 to-[#ef662a] rounded-full p-1 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 md:px-10 py-2 md:py-3 rounded-full text-sm md:text-lg font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                                    ? 'bg-white text-[#ef662a] shadow-md'
                                    : 'text-white hover:bg-white hover:text-[#ef662a]'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Categories Grid - showing for all tabs now */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12 max-w-6xl mx-auto px-4">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((category) => (
                            <Link
                                href={`/ourproduct/${category.slug}`}
                                key={category.id}
                                className="flex flex-col items-center group cursor-pointer"
                            >
                                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 transition-transform duration-300 group-hover:scale-110">
                                    <div className="absolute inset-0 bg-[#fae57f]/30 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-500 opacity-60"></div>

                                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent group-hover:border-[#ef662a]/20 transition-all duration-300">
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            sizes="(max-width: 768px) 96px, 128px"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-center font-bold text-[#1e293b] text-base md:text-lg group-hover:text-[#ef662a] transition-colors duration-300">
                                    {category.title}
                                </h3>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full flex items-center justify-center min-h-[300px]">
                            <p className="text-gray-400 text-xl font-medium">No products found for this category.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
