'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
    {
        title: "Marketing",
        description:
            "R-Biomeds offers comprehensive marketing solutions through in-house capabilities and team of empaneled Strategic Business Partners. The company has a well-knit team of professionals that bring-in expertise, across the value chain.",
        logo: "/service/1.png",
    },
    {
        title: "Distribution",
        description:
            "Through a countrywide network of captive warehouse, branches and dealer network, R-Biomeds offers seamless distribution services to its clients for all the dosage forms and cold chain products.",
        logo: "/service/2.png",
    },
    {
        title: "Importation",
        description:
            "R-Biomeds has been successfully importing products from countries across the globe. Also we offer a unique model to help companies mitigate intellectual property risks by maintaining Drug Registration Certificates (DRCs) of the products in our custody.",
        logo: "/service/3.png",
    },
    {
        title: "Regulatory",
        description:
            "FDA requires to register every pharmaceutical and Healthcare products before it is imported in Asia. R-Biomeds manages the complete regulatory cycle on behalf of its customers.",
        logo: "/service/4.png",
    },
    {
        title: "Trademark Registration",
        description:
            "With an objective to protect IP of the clients, R-Biomeds provides Trademark Registration services in a timely and cost-effective manner.",
        logo: "/service/5.png",
    },
    {
        title: "Healthcare Consultancy",
        description:
            "Backed with deep understanding of pharmaceutical value chain, customer behavior and market understanding, R-Biomeds offer consultancy services.",
        logo: "/service/6.png",
    },
];

const ServicesList = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-6 2xl:py-2 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-4 md:gap-6">
                    {services.map((service, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`
                                    group border border-gray-100 rounded-xl
                                    px-5 md:px-6
                                    flex flex-col md:flex-row
                                    items-start md:items-center
                                    gap-2 md:gap-12
                                    transition-all duration-500
                                    overflow-hidden
                                    ${isActive ? 'bg-[#ef662e]' : 'hover:bg-[#ef662e]'}

                                    /* MOBILE */
                                    h-auto p-4

                                    /* DESKTOP */
                                    ${isActive ? 'md:h-72' : 'md:h-32 md:hover:h-72'}
                                `}
                            >
                                {/* NUMBER */}
                                <div className={`
                                    text-3xl md:text-5xl font-bold transition-colors duration-300 min-w-[60px] md:min-w-[80px]
                                    ${isActive ? 'text-white' : 'text-gray-200 group-hover:text-white'}
                                `}>
                                    {(index + 1).toString().padStart(2, '0')}
                                </div>

                                {/* CONTENT */}
                                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 items-start md:items-center">
                                    <h3 className={`
                                        text-xl md:text-3xl font-bold transition-colors duration-300 leading-tight
                                        ${isActive ? 'text-white' : 'text-gray-900 group-hover:text-white'}
                                    `}>
                                        {service.title}
                                    </h3>

                                    <p
                                        className={`
                                            text-sm md:text-lg leading-relaxed transition-all duration-500
                                            /* MOBILE */
                                            line-clamp-none
                                            /* DESKTOP */
                                            ${isActive ? 'text-white line-clamp-none' : 'text-gray-500 md:line-clamp-2 group-hover:text-white group-hover:line-clamp-none'}
                                        `}
                                    >
                                        {service.description}
                                    </p>
                                </div>

                                {/* LOGO */}
                                <div className="w-full md:w-auto flex justify-start md:justify-center">
                                    <img
                                        src={service.logo}
                                        alt="Logo"
                                        className={`
                                            w-24 h-24 md:w-60 md:h-60 object-contain rounded-xl
                                            transition-all duration-300
                                            /* MOBILE */
                                            opacity-100 scale-100
                                            /* DESKTOP */
                                            ${isActive ? 'md:opacity-100 md:scale-100' : 'md:opacity-0 md:scale-50 group-hover:opacity-100 group-hover:scale-100'}
                                        `}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
