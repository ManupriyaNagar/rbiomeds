'use client';
import React from 'react';
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
            "FDA requires to register every pharmaceutical and Healthcare products before it is imported in Myanmar. R-Biomeds manages the complete regulatory cycle on behalf of its customers.",
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
    return (
        <section className="py-6 2xl:py-10 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-4 md:gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="
                group bg-white border border-gray-100 rounded-xl
                px-5 md:px-6
                flex flex-col md:flex-row
                items-start md:items-center
                gap-4 md:gap-12
                transition-all duration-500
                overflow-hidden

                /* MOBILE */
                h-auto

                /* DESKTOP */
                md:h-32 md:hover:h-72
              "
                        >
                            {/* NUMBER */}
                            <div className="text-3xl md:text-5xl font-bold text-gray-200 group-hover:text-[#ef662e] transition-colors duration-300 min-w-[60px] md:min-w-[80px]">
                                {(index + 1).toString().padStart(2, '0')}
                            </div>

                            {/* CONTENT */}
                            <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 items-start md:items-center">
                                <h3 className="text-xl md:text-3xl font-bold text-gray-900 group-hover:text-[#ef662e] transition-colors duration-300 leading-tight">
                                    {service.title}
                                </h3>

                                <p
                                    className="
                    text-gray-500 text-sm md:text-lg leading-relaxed
                    /* MOBILE */
                    line-clamp-none

                    /* DESKTOP */
                    md:line-clamp-2 md:group-hover:line-clamp-none
                    transition-all duration-500
                  "
                                >
                                    {service.description}
                                </p>
                            </div>

                            {/* LOGO */}
                            <div className="w-full md:w-auto flex justify-start md:justify-center">
                                <img
                                    src={service.logo}
                                    alt="Logo"
                                    className="
                    w-24 h-24 md:w-60 md:h-60 object-contain rounded-xl
                    transition-all duration-300

                    /* MOBILE */
                    opacity-100 scale-100

                    /* DESKTOP */
                    md:opacity-0 md:scale-50
                    md:group-hover:opacity-100 md:group-hover:scale-100
                  "
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
