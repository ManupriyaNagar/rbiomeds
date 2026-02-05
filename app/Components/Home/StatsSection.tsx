'use client';
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, animate } from "framer-motion";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => setCount(Math.floor(latest)),
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
};

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
                                <h3 className="text-5xl sm:text-6xl lg:text-7xl text-black hover:text-[#ef662a] mb-3  tracking-tighter">
                                    <Counter value={600} suffix="+" />
                                </h3>
                                <h4 className="text-lg sm:text-xl lg:text-2xl  text-gray-900 mb-2 uppercase tracking-tighter leading-tight">
                                    Quality Brands
                                </h4>
                                <p className="text-sm sm:text-base text-gray-500 max-w-lg font-medium">
                                    Delivering fast, secure, and professional medical advice to patients worldwide.
                                </p>
                            </div>

                            <div className="relative w-full h-[200px] md:flex-1 md:min-h-[180px]">
                                <img
                                    src="/staff/s1.png"
                                    alt="Staff"
                                    className="object-contain md:scale-125 md:translate-y-5"
                                />
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-white rounded-3xl p-5 sm:p-6 min-h-auto md:min-h-[420px] flex flex-col overflow-hidden relative group">
                            <div className="relative z-10 mb-6">
                                <h3 className="text-5xl sm:text-6xl lg:text-7xl text-black hover:text-[#ef662a] mb-3 uppercase tracking-tighter">
                                    <Counter value={250} suffix="+" />
                                </h3>
                                <h4 className="text-lg sm:text-xl lg:text-2xl  text-gray-900 mb-2 uppercase tracking-tighter leading-tight">
                                    Experienced Staffs
                                </h4>
                                <p className="text-sm sm:text-base text-gray-500 font-medium">
                                    Our experts are dedicated to providing the highest level of care and medical support.
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
                                <h3 className="text-5xl sm:text-6xl lg:text-7xl  text-black hover:text-[#ef662a] mb-3 uppercase tracking-tighter">
                                    <Counter value={50000} suffix="+" />
                                </h3>
                                <h4 className="text-lg sm:text-xl lg:text-2xl  text-gray-900 mb-2 uppercase tracking-tighter leading-tight">
                                    Satisfied Clients
                                </h4>
                                <p className="text-sm sm:text-base text-gray-500 font-medium">
                                    Trust from thousands of patients motivates us to push for medical excellence every day.
                                </p>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="bg-white rounded-3xl p-4 sm:p-6 min-h-auto md:min-h-[300px] flex flex-col overflow-hidden">
                            <div className="h-[70px] sm:h-[90px] w-full relative flex items-center overflow-hidden rounded-xl">
                                <img
                                    src="/staff/4.png"
                                    alt="Reviews"
                                    className="rounded-2xl w-full h-full object-cover opacity-100"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <svg key={s} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:p-6">

                                <h3 className="text-5xl sm:text-6xl lg:text-7xl text-black hover:text-[#ef662a] mb-3 uppercase tracking-tighter">
                                    <Counter value={1000} suffix="+" />
                                </h3>
                                <h4 className="text-lg sm:text-xl lg:text-2xl  text-gray-900 mb-2 uppercase tracking-tighter leading-tight">
                                    Positive Reviews
                                </h4>
                                <p className="text-sm sm:text-base text-gray-500 font-medium">
                                    Our community's feedback reflects our commitment to healthcare innovation and patient trust.
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
