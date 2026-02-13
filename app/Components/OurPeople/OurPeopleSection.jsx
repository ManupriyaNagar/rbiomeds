import React from "react";

export default function OurPeopleSection() {
    return (
        <section
            className="
        bg-white
        py-10
        pt-30 2xl:pt-30
        p-4 md:px-0
        h-auto md:h-[95vh]
      "
        >
            <div
                className="
          container mx-auto
          grid
          grid-cols-1
          md:grid-cols-2
          gap-4
        "
            >
                {/* TOP LEFT — TEXT */}
                <div className="bg-gradient-to-r from-red-900 to-[#ef662a] text-white rounded-[2rem]">
                    <div className="p-6 md:p-6 2xl:p-20 rounded-[2rem] mt-18">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                            Our People
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                            R-Biomeds is powered by a team of aligned and seasoned professionals brought together by a shared ambition to build a trusted healthcare organization of repute. This ambition is anchored in strong values, customer focus, and disciplined execution, while consistently adhering to robust corporate governance frameworks and a sustained commitment to Corporate Social Responsibility. Equally, we place strong emphasis on recognizing and valuing our people for the distinctive impact they deliver every day.
                        </p>
                    </div>
                </div>

                {/* TOP RIGHT — IMAGE */}
                <div className="w-full h-[260px] sm:h-[320px] md:h-full">
                    <img
                        src="/staff/7.png"
                        alt="Our Team"
                        className="w-full h-full object-cover rounded-[2rem]"
                    />
                </div>

                {/* BOTTOM — FULL WIDTH */}
                <div
                    className="
            md:col-span-2
            bg-gray-100
            rounded-[2rem]
            px-5 sm:px-6 md:px-8
            py-8 md:py-12
            flex items-center
            h-auto
          "
                >
                    <p className="text-sm sm:text-base md:text-lg text-black/80 font-medium leading-relaxed">
                        R-Biomeds is driven by a collective of like-minded and experienced professionals unified by a common vision to establish a trusted and respected healthcare organization. Guided by shared values and a customer-centric mindset, we operate with strict adherence to corporate governance principles and a deep commitment to CSR, fostering a culture where employees are consistently acknowledged for the unique value and contributions they bring each day.
                    </p>
                </div>
            </div>
        </section>
    );
}
