"use client";
import React from "react";
import Image from "next/image";

const StatsSection = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* COLUMN 1 */}
                    <div className="flex flex-col gap-8">

                        {/* CARD 1 */}
                        <div className="bg-white flex flex-col rounded-3xl relative overflow-hidden min-h-auto md:min-h-[400px] shadow-sm">
                            <div className="p-5 sm:p-6 h-auto md:h-[180px] z-20">
                                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black hover:text-[#ef662a] mb-3">
                                    600+
                                </h3>
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-medium text-black mb-2">
                                    Quality Brands
                                </h4>
                                <p className="text-sm sm:text-base text-gray-500 max-w-lg">
                                    Delivering fast, secure, and professional medical advice to patients worldwide.
                                </p>
                            </div>

                            <div className="relative w-full h-[200px] md:flex-1 md:min-h-[180px]">
                                <Image
                                    src="/staff/s1.png"
                                    alt="Staff"
                                    fill
                                    className="object-contain md:scale-125 md:translate-y-5"
                                />
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white rounded-3xl p-5 sm:p-6 min-h-auto md:min-h-[420px] flex flex-col overflow-hidden relative group">
                            <div className="relative z-10 mb-6">
                                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black hover:text-[#ef662a] mb-3">
                                    250+
                                </h3>
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-medium text-black mb-2">
                                    Experienced Staffs
                                </h4>
                                <p className="text-sm sm:text-base text-gray-500">
                                    Delivering fast, secure, and professional medical advice to patients worldwide.
                                </p>
                            </div>

                            <div className="flex-grow w-full h-[200px] sm:h-[220px] md:h-[250px] relative rounded-3xl overflow-hidden">
                                <Image
                                    src="/staff/2.png"
                                    alt="Online Consultation"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="flex flex-col gap-8">

                        {/* CARD 2 */}
                        <div className="bg-white rounded-3xl p-5 sm:p-6 min-h-auto md:min-h-[520px] flex flex-col justify-between overflow-hidden">
                            <div className="w-full h-[220px] sm:h-[280px] md:h-[350px] 2xl:h-[370px] relative">
                                <Image
                                    src="/staff/3.png"
                                    alt="Doctors Network"
                                    fill
                                    className="object-cover 2xl:object-contain 2xl:scale-120"
                                />
                            </div>

                            <div className="z-20 mt-6 md:mt-0">
                                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black hover:text-[#ef662a] mb-3">
                                    50000+
                                </h3>
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-medium text-black mb-2">
                                    Satisfied Clients
                                </h4>
                                <p className="text-sm sm:text-base text-gray-500">
                                    Delivering fast, secure, and professional medical advice to patients worldwide.
                                </p>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="bg-white rounded-3xl p-4 sm:p-6 min-h-auto md:min-h-[300px] flex flex-col overflow-hidden">
                            <div className="bg-[#0f4c5c] h-[70px] sm:h-[90px] w-full relative flex items-center overflow-hidden rounded-xl">
                                <img
                                    src="/staff/4.png"
                                    alt=""
                                    className="rounded-2xl"
                                />
                            </div>

                            <div className="p-4 sm:p-6">
                                <h3 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-black hover:text-[#ef662a] mb-3">
                                    1000+
                                </h3>
                                <h4 className="text-lg sm:text-xl lg:text-2xl font-medium text-black mb-2">
                                    Positive Reviews
                                </h4>
                                <p className="text-sm sm:text-base text-gray-500">
                                    Delivering fast, secure, and professional medical advice to patients worldwide.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
