"use client";
import React from 'react';
import Image from 'next/image';
import { Shield, MessageSquare, Monitor, Briefcase, Pill, Mail } from 'lucide-react';

const StatsSection = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl hover:text-[#ef662a] font-semibold text-gray-900 mb-6 leading-none">
                        Empowering Health Through<br />
                        Technology, and Compassion
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        We are dedicated to transforming healthcare access by connecting patients
                        with certified doctors through secure
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Column 1: Card 1 (Cities) and Card 3 (Consultations) */}
                    <div className="flex flex-col gap-8">
                        {/* Card 1: 100+ Cities - Standard Height 400px */}
                        <div className="bg-white rounded-[2.5rem] p-10 relative overflow-hidden min-h-[400px] ">
                            <div className="relative z-10">
                                <h3 className="text-5xl font-bold text-black mb-4">100+</h3>
                                <h4 className="text-xl font-bold text-[#004D40] mb-2">Cities Served Across Regions</h4>
                                <p className="text-gray-500 text-sm max-w-sm">Delivering fast, secure, and professional medical advice to patients worldwide.</p>
                            </div>

                            {/* Globe & Flags Visual */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20 pointer-events-none">
                                <Image
                                    src="/assets/images/stats/globe.png"
                                    alt="Globe"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Floating Flags */}
                            <div className="absolute inset-0 pointer-events-none">
                                {/* USA */}
                                <div className="absolute top-[45%] left-[10%] bg-white py-2 px-4 rounded-full  flex items-center gap-2 animate-float-slow">
                                    <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 relative">
                                        <span className="absolute inset-0 flex items-center justify-center text-[10px]">🇺🇸</span>
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm">United States</span>
                                </div>

                                {/* UK */}
                                <div className="absolute top-[35%] right-[15%] bg-white py-2 px-4 rounded-full flex items-center gap-2 animate-float-medium">
                                    <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 relative">
                                        <span className="absolute inset-0 flex items-center justify-center text-[10px]">🇬🇧</span>
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm">United kingdom</span>
                                </div>

                                {/* Switzerland */}
                                <div className="absolute bottom-[25%] left-[20%] bg-white py-2 px-4 rounded-full flex items-center gap-2 animate-float-fast">
                                    <div className="w-6 h-6 rounded-full overflow-hidden bg-red-600 relative flex items-center justify-center">
                                        <span className="text-white font-bold text-xs">+</span>
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm">Switzerland</span>
                                </div>

                                {/* Poland */}
                                <div className="absolute bottom-[20%] right-[10%] bg-white py-2 px-4 rounded-full flex items-center gap-2 animate-float-slow">
                                    <div className="w-6 h-6 rounded-full overflow-hidden bg-white  relative">
                                        <div className="h-1/2 bg-white"></div>
                                        <div className="h-1/2 bg-red-600"></div>
                                    </div>
                                    <span className="font-bold text-gray-800 text-sm">Poland</span>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: 15,000+ Consultations - Taller Height 520px */}
                        <div className="bg-white rounded-[2.5rem] p-10 min-h-[520px]  flex flex-col overflow-hidden relative group">
                            <div className="relative z-10 mb-8">
                                <h3 className="text-5xl font-bold text-black mb-4">15,000+</h3>
                                <h4 className="text-xl font-bold text-[#004D40] mb-2">Online Consultations Completed</h4>
                                <p className="text-gray-500 text-sm">Delivering fast, secure, and professional medical advice to patients worldwide.</p>
                            </div>

                            <div className="flex-grow w-full h-[250px] relative rounded-2xl overflow-hidden mt-4">
                                <Image
                                    src="/assets/images/stats/consultation.png"
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
                        <div className="bg-white rounded-[2.5rem] p-10 min-h-[520px]  flex flex-col justify-between overflow-hidden">
                            {/* Circular Network Image */}
                            <div className="w-full h-[250px] relative mb-8">
                                <Image
                                    src="/assets/images/stats/doctors_network.png"
                                    alt="Doctors Network"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <div>
                                <h3 className="text-5xl font-bold text-black mb-4">500+</h3>
                                <h4 className="text-xl font-bold text-[#004D40] mb-2">Certified Doctors Available</h4>
                                <p className="text-gray-500 text-sm">Delivering fast, secure, and professional medical advice to patients worldwide.</p>
                            </div>
                        </div>

                        {/* Card 4: 200+ Conditions - Standard Height 400px */}
                        <div className="bg-white rounded-[2.5rem] p-6  min-h-[400px] flex flex-col overflow-hidden">
                            {/* Teal Banner Section */}
                            <div className="bg-[#0f4c5c] h-[90px] w-full relative flex items-center overflow-hidden">
                                {/* Ideally this would be an infinite scroll marquee */}
                                <img src="/assets/images/stats/conditions.png" alt="" />

                            </div>

                            <div className="p-10 bg-white">
                                <h3 className="text-5xl font-bold text-black mb-4">200+</h3>
                                <h4 className="text-xl font-bold text-[#004D40] mb-2">Medical Conditions Listed and Explained</h4>
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
