"use client";
import React from 'react';
import Image from 'next/image';
import { Shield, MessageSquare, Monitor, Briefcase, Pill, Mail } from 'lucide-react';

const StatsSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Column 1: Card 1 (Cities) and Card 3 (Consultations) */}
                    <div className="flex flex-col gap-8">
                        {/* Card 1: 100+ Cities - Standard Height 400px */}
                        <div className="bg-white flex flex-col rounded-3xl relative overflow-hidden min-h-[400px] shadow-sm">

                            {/* Top: Text (smaller height) */}
                            <div className="p-6 h-[180px] z-20">
                                <h3 className="text-7xl font-medium text-black hover:text-[#ef662a] mb-4">600+</h3>
                                <h4 className="text-2xl font-medium text-black mb-2">
                                    Quality Brands
                                </h4>
                                <p className="text-gray-500 text-sm max-w-lg">
                                    Delivering fast, secure, and professional medical advice to patients worldwide.
                                </p>
                            </div>

                            {/* Bottom: Image (larger section) */}
                            <div className="relative w-full flex-1 min-h-[180px]">
                                <Image
                                    src="/staff/s1.png"
                                    alt="Staff"
                                    fill
                                    className="object-contain scale-125 translate-y-5"
                                />
                            </div>

                        </div>


                        {/* Card 3: 15,000+ Consultations - Taller Height 520px */}
                        <div className="bg-white rounded-3xl p-6 min-h-[420px]  flex flex-col overflow-hidden relative group">
                            <div className="relative z-10 mb-8">
                                <h3 className="text-7xl font-medium text-black hover:text-[#ef662a] mb-4">250+</h3>
                                <h4 className="text-2xl font-medium text-black  mb-2">Experienced Staffs</h4>
                                <p className="text-gray-500 text-sm">Delivering fast, secure, and professional medical advice to patients worldwide.</p>
                            </div>

                            <div className="flex-grow w-full h-[250px] relative rounded-3xl overflow-hidden mt-4">
                                <Image
                                    src="/staff/2.png"
                                    alt="Online Consultation"
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Card 2 (Doctors) and Card 4 (Conditions) */}
                    <div className="flex flex-col gap-8">
                        {/* Card 2: 500+ Doctors - Taller Height 520px */}
                        <div className="bg-white rounded-3xl p-6 min-h-[520px]  flex flex-col justify-between overflow-hidden">
                            {/* Circular Network Image */}
                            <div className="w-full h-[350px] relative">
                                <Image
                                    src="/staff/3.png"
                                    alt="Doctors Network"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <h3 className="text-7xl font-medium text-black hover:text-[#ef662a] mb-4">50000+</h3>
                                <h4 className="text-2xl font-medium text-black mb-2">Satisfied Clients</h4>
                                <p className="text-gray-500 text-sm">Delivering fast, secure, and professional medical advice to patients worldwide.</p>
                            </div>
                        </div>

                        {/* Card 4: 200+ Conditions - Standard Height 400px */}
                        <div className="bg-white rounded-3xl p-6  min-h-[300px] flex flex-col overflow-hidden">
                            {/* Teal Banner Section */}
                            <div className="bg-[#0f4c5c] h-[90px] w-full relative flex items-center overflow-hidden rounded-xl">
                                {/* Ideally this would be an infinite scroll marquee */}
                                <img src="/staff/4.png" alt="" className='rounded-2xl' />

                            </div>

                            <div className="p-6 bg-white">
                                <h3 className="text-7xl font-medium text-black hover:text-[#ef662a] mb-4">1000+</h3>
                                <h4 className="text-2xl font-medium text-black mb-2">Positive Reviews</h4>
                                <p className="text-gray-500 text-sm">Delivering fast, secure, and professional medical advice to patients worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Inline styles for subtle animations */}
            <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 3s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 2.5s ease-in-out infinite; }
      `}</style>
        </section>
    );
};

export default StatsSection;
