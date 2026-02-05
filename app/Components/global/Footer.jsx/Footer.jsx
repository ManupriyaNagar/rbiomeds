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
                <div className="flex flex-col md:flex-row md:items-start gap-12 lg:gap-16">
                    <div className="w-full flex flex-col md:flex-row gap-8 lg:gap-6">

                        <div className='md:w-[550px] shrink-0'>
                            {/* Links/Contact Columns */}
                            <div className="grid grid-cols-1 gap-6">
                                <div className='w-full'>
                                    <div className="flex flex-col gap-6 mt-8">
                                        {[
                                            {
                                                country: "SINGAPORE",
                                                flag: "https://flagcdn.com/w160/sg.png",
                                                address: "11G, Bright Hill Drive, Thomson View, Singapore. 579615 | +6591276706",
                                                borderColor: "border-[#e31e24]",
                                                ribbonColor: "bg-[#e31e24]",
                                                textColor: "text-black"
                                            },
                                            {
                                                country: "MYANMAR",
                                                flag: "https://flagcdn.com/w160/mm.png",
                                                address: "No.002, Shwe Than Lwin Condo, Bahan Township, Yangon, Myanmar, 11201 | +95943040374, +95979845393",

                                                borderColor: "border-[#009b77]",
                                                ribbonColor: "bg-[#009b77]",
                                                textColor: "text-black"
                                            },
                                            {
                                                country: "CANADA",
                                                flag: "https://flagcdn.com/w160/ca.png",
                                                address: "63 Meadowridge St, Kitchener, ON, N2P 0E2",

                                                borderColor: "border-[#ff0000]",
                                                ribbonColor: "bg-[#ff0000]",
                                                textColor: "text-black"
                                            },
                                            {
                                                country: "CAMBODIA",
                                                flag: "https://flagcdn.com/w160/kh.png",
                                                address: "#601, Phum Chey Apt., Street 135, Tuol Tompoung, Phnom Penh, Cambodia.",

                                                borderColor: "border-[#003da5]",
                                                ribbonColor: "bg-[#003da5]",
                                                textColor: "text-black"
                                            },
                                            {
                                                country: "INDIA",
                                                flag: "https://flagcdn.com/w160/in.png",
                                                address: "105, Sagar Complex, Pitampura, New Delhi 110034 | +91 987133044",
                                                borderColor: "border-[#f4c430]",
                                                ribbonColor: "bg-[#ff9933]",
                                                textColor: "text-black"
                                            }
                                        ].map((item, idx) => (
                                            <div key={idx} className={`relative bg-white border-[1px] ${item.borderColor} rounded-full px-8 py-5 hover:scale-[1.02] transition-all group max-w-[550px]`}>
                                                {/* Ribbon Flag Badge */}
                                                <div className="absolute top-0 right-10 z-20">
                                                    <div className={`relative ${item.ribbonColor} w-16 h-20 pt-1 px-1`}
                                                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%)' }}
                                                    >
                                                        <div className="bg-white p-1 rounded-sm overflow-hidden h-10 flex items-center justify-center">
                                                            <img
                                                                src={item.flag}
                                                                alt={`${item.country} flag`}
                                                                className="w-full h-auto object-contain"
                                                            />
                                                        </div>
                                                        {/* Decorative ribbon line */}
                                                        <div className="mt-1 flex justify-center">
                                                            <div className="w-2 h-0.2 bg-white/30 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col pr-16">
                                                    <h5 className={`${item.textColor} text-4xl md:text-5xl lg:text-lg font-semibold uppercase text-black hover:text-[#ef662a]`}>{item.country}</h5>
                                                    <div className="space-y-0.5">
                                                        <p className="text-gray-800 text-sm font-semibold leading-tight">
                                                            <span className="text-gray-500 font-medium">{item.address}</span>
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 px-6 mt-6">
                                        <h1 className="font-semibold text-lg sm:text-xl text-gray-900">
                                            Follow us on
                                        </h1>

                                        <div className="flex items-center gap-4">
                                            <a
                                                href="https://www.facebook.com/profile.php?id=100067754681394"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Facebook"
                                                className="w-9 h-9 flex items-center justify-center rounded-full 
                 bg-gray-100 text-gray-700
                 transition-all duration-300 
                 hover:bg-blue-600 hover:text-white hover:scale-110"
                                            >
                                                <FaFacebook className="w-5 h-5" />
                                            </a>

                                            <a
                                                href="https://www.linkedin.com/company/r-biomeds-singapore/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="LinkedIn"
                                                className="w-9 h-9 flex items-center justify-center rounded-full 
                 bg-gray-100 text-gray-700
                 transition-all duration-300 
                 hover:bg-[#0A66C2] hover:text-white hover:scale-110"
                                            >
                                                <RxLinkedinLogo className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex flex-col gap-4">
                            {/* Map Container */}
                            <div className="w-full h-[250px] rounded-[2rem] overflow-hidden  border-4 border-white relative mt-8">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.008916325513!2d103.8247346!3d1.3533924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da16dbe4d2621b%3A0x6b77e8a32a6fa8bb!2s11G%20Bright%20Hill%20Dr%2C%20Singapore%20579615!5e0!3m2!1sen!2ssg!4v1705400000000!5m2!1sen!2ssg"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="hover:grayscale-0 transition-all duration-500"
                                ></iframe>
                            </div>

                            {/* Contact Form */}
                            <div className="flex flex-row gap-4">
                                <div className="bg-white rounded-3xl p-6 sm:p-8  border border-gray-100">
                                    <h4 className="font-bold text-2xl mb-6 text-black">Get in Touch</h4>
                                    <form className="space-y-4">
                                        <input type="text" placeholder="Name" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors placeholder:text-gray-400" />
                                        <input type="email" placeholder="Email" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors placeholder:text-gray-400" />
                                        <textarea placeholder="Comment or Message" rows="4" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#ea9237] transition-colors resize-none placeholder:text-gray-400"></textarea>
                                        <button type="submit" className="w-full py-4 bg-[#ef662e] text-white font-bold rounded-full hover:bg-[#ff5400] transition-all transform hover:scale-[1.02] ">
                                            Submit
                                        </button>
                                    </form>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                {/* Lime Green Banner */}
                <div className="bg-[#ef662e] text-black rounded-[1.5rem] p-6 sm:p-8 flex flex-col md:flex-row justify-between items-center transition-all hover:shadow-2xl hover:shadow-orange-100 mt-16">
                    <h3 className="text-white text-2xl sm:text-3xl md:text-[1.5rem] 2xl:text-[1.8rem] font-bold text-center md:text-left leading-tight">  Get in touch with Rbiomeds for business, partnership, or healthcare inquiries.
                    </h3>
                    <button className="md:mt-0 mt-4 bg-white text-black px-8 py-2 rounded-2xl font-extrabold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
                        Call Us Now
                    </button>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 md:text-sm text-xs font-medium mt-12">
                    <p>© Copyright 2026 - Rbiomeds All Rights Reserved Copyright. | <a href="/admin" className="hover:text-[#ef662e] transition-colors">Admin Portal</a></p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="https://rbshstudio.com" target="_blank" className="transition-colors">Powered By <span className="text-[#ff5400] font-bold">RBSH Studio</span> </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
