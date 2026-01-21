'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
    {
        title: "Marketing",
        description: "R-Biomeds offers comprehensive marketing solutions through in-house capabilities and team of empaneled Strategic Business Partners. The company has a well-knit team of professionals that bring-in expertise, across the value chain.",
        logo: "/service/1.png"
    },
    {
        title: "Distribution",
        description: "Through a countrywide network of captive warehouse, branches and dealer network, R-Biomeds offers seamless distribution services to its clients for all the dosage forms and cold chain products.",
        logo: "/service/2.png"
    },
    {
        title: "Importation",
        description: "R-Biomeds has been successfully importing products from countries across the globe. Also we offer a unique model to help companies mitigate intellectual property risks by maintaining Drug Registration Certificates (DRCs) of the products in our custody, on behalf of companies, and imports their products into Myanmar.",
        logo: "/service/3.png"
    },
    {
        title: "Regulatory",
        description: "FDA requires to register every pharmaceutical and Healthcare products before it is imported in Myanmar. R-Biomeds manages the complete regulatory cycle (end to end product registration process) on behalf of its customers.",
        logo: "/service/4.png"
    },
    {
        title: "Trademark Registration",
        description: "With an objective to protect IP of the clients, R-Biomeds provides Trademark Registration services to its clients. The company organizes the process, on behalf of the clients, in order to obtain Trademark Registration for the products of its clients, in a timely and cost-effective manner.",
        logo: "/service/5.png"
    },
    {
        title: "Healthcare Consultancy",
        description: "Backed with deep understanding of pharmaceutical value chain, customer behavior and market understanding, R-Biomeds offer consultancy services to its clients for a range of topics such as, market entry strategy, portfolio development, etc.",
        logo: "/service/6.png"
    }
];

const ServicesList = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4 md:px-2">
                <div className="flex flex-col gap-6 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div

                            className="group bg-white hover:bg-[#F9FAFB] border border-gray-100 rounded-xl px-8 md:px-6 flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-all duration-500 overflow-hidden h-32 hover:h-72">
                            {/* Number */}
                            <div className="text-3xl md:text-5xl font-bold text-gray-200 group-hover:text-[#ef662e] transition-colors duration-300 min-w-[80px]">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>


                            {/* Title & Description Grid */}
                            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-[#ef662e] transition-colors duration-300 leading-tight">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 text-lg leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                    {service.description}
                                </p>
                            </div>


                            {/* Logo on Hover */}
                            <div className="mt-4 md:mt-0 min-w-[60px] flex justify-center">
                                <img
                                    src={service.logo}
                                    alt="Logo"
                                    className="w-60 h-60 object-contain rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
