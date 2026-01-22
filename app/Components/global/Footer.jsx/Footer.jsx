'use client';
import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
    return (
        <footer id='contact' className="font-inter-tight-1 bg-white pt-20 pb-10 relative overflow-hidden overflow-x-hidden">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 z-0 opacity-60 pointer-events-none"
                style={{
                    backgroundImage: "url('/footerbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}
            />
            <div className="container mx-auto px-4 md:px-0 relative z-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between md:items-start sm:items-center sm:text-center md:text-left gap-12 md:gap-10">
                    <div className="max-w-7xl">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-500 leading-tight mb-8 hover:text-[#ff5400] transition-colors cursor-pointer">    We'd love to hear from you!
                        </h2>
                        <div className='max-w-5xl'>


                            {/* Links/Contact Columns */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-1">
                                <div className='md:col-span-2'>
                                    <h4 className="font-bold text-lg mt-3 mb-2 text-black">Address</h4>
                                    <div className="w-full ">
                                        <div className='mb-2'>
                                            <p className="text-black font-bold text-sm mb-1">SINGAPORE</p>
                                            <p className="text-gray-500 hover:text-[#ff5400] transition-colors cursor-pointer font-medium leading-relaxed text-sm sm:text-base">
                                                11G, Bright Hill Drive,
                                                Thomson View, Singapore. 579615 |
                                                PH: +6591276706
                                            </p>
                                        </div>
                                        <div className='mb-2'>
                                            <p className="text-black font-bold text-sm mb-1">MYANMAR</p>
                                            <p className="text-gray-500 hover:text-[#ff5400] transition-colors cursor-pointer font-medium leading-relaxed text-sm sm:text-base">  No.002, Shwe Than Lwin Condo,
                                                Bahan Township, Yangon, Myanmar, 11201
                                                | PH: +95943040374, +95979845393
                                            </p>
                                        </div>
                                        <div className='mb-2'>
                                            <p className="text-black font-bold text-sm mb-1">CANADA</p>
                                            <p className="text-gray-500 hover:text-[#ff5400] transition-colors cursor-pointer font-medium leading-relaxed text-sm sm:text-base">   63 Meadowridge St,
                                                Kitchener, ON, N2P 0E2
                                            </p>
                                        </div>
                                        <div className='mb-2'>
                                            <p className="text-black font-bold text-sm mb-1">CAMBODIA</p>
                                            <p className="text-gray-500 hover:text-[#ff5400] transition-colors cursor-pointer font-medium leading-relaxed text-sm sm:text-base">  #601, Phum Chey Apt., Street 135,
                                                Tuol Tompoung, Phnom Penh, Cambodia.
                                            </p>
                                        </div>
                                        <div className='mb-2'>
                                            <p className="text-black font-bold text-sm mb-1">INDIA</p>
                                            <p className="text-gray-500 hover:text-[#ff5400] transition-colors cursor-pointer font-medium leading-relaxed text-sm sm:text-base">   105, Sagar Complex,
                                                Pitampura, New Delhi 110034 |
                                                PH: +91 987133044
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mt-4'>
                                        <h4 className="font-bold text-lg mb-1 text-black">Send a Message</h4>
                                        <p className="text-gray-500 hover:text-[#ff5400] transition-colors cursor-pointer font-medium leading-relaxed text-sm sm:text-base">info@rbiomeds.com</p>
                                    </div>
                                </div>

                                <div className="md:col-span-1">
                                    <h4 className="font-bold text-lg mb-4 text-black">Our Products</h4>
                                    <ul className="space-y-3">
                                        <li><a href="#" className="text-gray-500 hover:text-[#ff5400] transition-colors font-medium whitespace-nowrap">R-BIOMEDS</a></li>
                                        <li><a href="#" className="text-gray-500 hover:text-[#ff5400] transition-colors font-medium whitespace-nowrap">R-BIOMEDS</a></li>
                                        <li><a href="#" className="text-gray-500 hover:text-[#ff5400] transition-colors font-medium whitespace-nowrap">R-BIOMEDS</a></li>
                                        <li><a href="#" className="text-gray-500 hover:text-[#ff5400] transition-colors font-medium whitespace-nowrap">R-BIOMEDS</a></li>
                                        <li><a href="#" className="text-gray-500 hover:text-[#ff5400] transition-colors font-medium whitespace-nowrap">R-BIOMEDS</a></li>
                                        <li><a href="#" className="text-gray-500 hover:text-[#ff5400] transition-colors font-medium whitespace-nowrap">R-BIOMEDS</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Circular Badge and Form */}
                    <div className="w-full md:w-[400px]">


                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-0">
                            <h4 className="font-bold text-2xl mb-6 text-black">Get a Proposal</h4>
                            <form className="space-y-4">
                                <input type="text" placeholder="Company name" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors placeholder:text-gray-400" />
                                <input type="email" placeholder="Your email address" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors placeholder:text-gray-400" />
                                <input type="tel" placeholder="Phone no." className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors placeholder:text-gray-400" />
                                <textarea placeholder="Tell us about your project" rows="4" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors resize-none placeholder:text-gray-400"></textarea>
                                <button type="submit" className="w-full py-4 bg-[#ef662e] text-white font-bold rounded-full hover:bg-[#ff5400] transition-all transform hover:scale-[1.02] ">
                                    Request a Consultation
                                </button>
                            </form>
                        </div>

                        <div className='flex flex-col sm:flex-row gap-4 px-6 m-4'>
                            <h1 className="font-bold text-xl text-black">Follow us on:</h1>
                            <div className='flex  gap-4'>
                                <a href="https://www.facebook.com/profile.php?id=100067754681394" target='_blank' className="text-black w-6 h-6 flex items-center justify-center transition-all transform hover:scale-110 group ">
                                    <FaFacebook className='w-full h-full' />
                                </a>

                                <a href="https://www.linkedin.com/company/r-biomeds-singapore/" target='_blank' className="text-black w-6 h-6 flex items-center justify-center  transition-all transform hover:scale-110 group ">
                                    <RxLinkedinLogo className='w-full h-full' />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Lime Green Banner */}
                <div className="bg-[#ef662e] text-black rounded-[1.5rem] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center transition-all hover:shadow-2xl hover:shadow-orange-100 ">
                    <h3 className="text-white text-2xl sm:text-3xl md:text-[1.5rem] 2xl:text-[1.8rem] font-bold text-center md:text-left leading-tight">  Get in touch with Rbiomeds for business, partnership, or healthcare inquiries.
                    </h3>
                    <button className="bg-white text-black px-8 py-2 rounded-2xl font-extrabold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
                        Call Us Now
                    </button>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
                    <p>© Copyright 2026 - Rbiomeds All Rights Reserved Copyright.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="https://rbshstudio.com" target="_blank" className="transition-colors">Powered By <span className="text-[#ff5400] font-bold">RBSH Studio</span> </a>

                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
