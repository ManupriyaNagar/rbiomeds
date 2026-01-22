import React from "react";

export default function OurPeopleSection() {
    return (
        <section className=" py-10 h-[95vh] bg-white pt-20 2xl:pt-30">
            {/* Left Column: Vertical Split */}
            <div className="container mx-auto grid grid-rows-2 gap-4">
                <div className="w-full grid grid-cols-2 gap-4  rounded-[2rem] ">
                    {/* Top Half: Background Image */}
                    <div
                        className="bg-gradient-to-r from-red-900 to-[#ef662a] text-white rounded-[2rem] "
                    >
                        {/* Optional overlay or empty if image is the primary focus */}
                        <div className="p-6 2xl:p-20 rounded-[2rem]">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight p-6 hover:text-[#ef662a]">
                                Our People
                            </h1>
                            <p className="text-lg md:text-lg text-white font-medium leading-relaxed p-6">
                                R-Biomeds is powered by a team of aligned and seasoned professionals brought together by a shared ambition to build a trusted healthcare organization of repute. This ambition is anchored in strong values, customer focus, and disciplined execution, while consistently adhering to robust corporate governance frameworks and a sustained commitment to Corporate Social Responsibility. Equally, we place strong emphasis on recognizing and valuing our people for the distinctive impact they deliver every day.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">

                        <img
                            src="/staff/7.png"
                            alt="Our Team"
                            className="w-full h-full object-cover rounded-[2rem]"
                        />
                    </div>


                    {/* Bottom Half: Yellow Background with Text */}

                </div>

                {/* Right Column: Full Height Image */}
                <div className="h-full lg:h-1/3 bg-gray-100 flex flex-col justify-center px-8 md:px-8 py-16 lg:py-0 rounded-[2rem]">
                    <p className="text-lg md:text-lg p-6 text-black/80 font-medium leading-relaxed">
                        R-Biomeds is driven by a collective of like-minded and experienced professionals unified by a common vision to establish a trusted and respected healthcare organization. Guided by shared values and a customer-centric mindset, we operate with strict adherence to corporate governance principles and a deep commitment to CSR, fostering a culture where employees are consistently acknowledged for the unique value and contributions they bring each day.</p>
                </div>

            </div>
        </section>
    );
}