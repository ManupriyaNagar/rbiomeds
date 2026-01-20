import React from 'react';
import Image from 'next/image';

const PeopleHighlight = () => {
    return (
        <section className="bg-white md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-[#ef662e] rounded-[2.5rem] overflow-hidden relative min-h-[400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        {/* Left Side: Text (Wider) */}
                        <div className="lg:col-span-7 p-8 md:p-14 lg:p-12 text-white">
                            <div className="space-y-6">
                                <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                                    R-Biomeds provides access to high-quality & affordable Healthcare products and services to its customers with an objective to bridge the therapy gaps. Since its incorporation in 2016, the company has witnessed a steady growth in the pharmaceutical industry of Myanmar, gaining market share in critical therapeutic segments such as Biosimilars, Oncology, hematology, nephrology, Endocrinology, dermatology, respiratory, cardiovascular, anti-diabetics, Oral healthcare, nutraceuticals, etc.
                                </p>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                                    While the differentiated products and services have been the growth drivers, we believe that our success is orchestrated by our people, guided by the philosophy of execution excellence within the ecosystem governed by our core values. We are a dedicated team of experienced industry experts and energetic professionals working tirelessly towards our mission to be a leading player in the healthcare space in South East Asia.
                                </p>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                                    We envision our company to be a valued partner for our esteemed customers, exhibiting their unwavering trust in our offerings and to be an organization, seen by our people as a great place to work.
                                </p>
                                <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                                    We express our gratitude to our esteemed clients who helped us in achieving the growth trajectory we have set ourselves on and we look forward to their continued support.
                                </p>
                            </div>

                            <div className="mt-8">
                                <p className="text-white font-bold text-lg">Your Sincerely,</p>
                                <p className="text-white font-extrabold text-2xl md:text-3xl mt-1 italic font-geist-sans">Mr. Rajeev Rawal</p>
                            </div>
                        </div>

                        {/* Right Side: Image (Smaller) */}
                        <div className="lg:col-span-5 h-[250px] lg:h-full relative min-h-[300px]">
                            <img
                                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                                alt="Our Team"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Gradient Overlay for mobile */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#ef662e] via-transparent to-transparent lg:hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleHighlight;
