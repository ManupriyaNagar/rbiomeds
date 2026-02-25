"use client";
import React from "react";
import { motion } from "framer-motion";

const WelcomeSection = () => {
  return (
    <section className="py-12 2xl:py-20 bg-white">
      <div className="max-w-7xl 2xl:max-w-[1600px] mx-auto px-4 md:px-6 2xl:px-12">
        <div className="bg-[#F3F4F6] rounded-2xl 2xl:rounded-3xl p-6 md:p-8 2xl:p-14 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 2xl:gap-12 items-center">

            {/* Left Image */}
            <motion.div
              className="lg:col-span-5 relative 
                         h-[400px] md:h-[550px] 
                         2xl:h-[750px] 
                         rounded-2xl 2xl:rounded-3xl 
                         overflow-hidden"
            >
              <img
                src="/welcome.png"
                alt="R-Biomeds"
                className="object-cover object-center 2xl:object-top w-full h-full"
              />
            </motion.div>

            {/* Right Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 2xl:gap-10">

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-light text-gray-900 leading-tight">
                  Welcome to{" "}
                  <span className="font-semibold hover:text-[#ef662a]">
                    <br className="" />
                    R-Biomeds
                  </span>
                </h1>
              </motion.div>

              {/* Text Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl 2xl:rounded-3xl 
                           p-8 md:p-10 2xl:p-14 
                           border border-gray-100 shadow-sm"
              >
                <div className="space-y-6 2xl:space-y-8 
                                text-gray-700 
                                text-base md:text-lg 
                                2xl:text-lg 
                                leading-relaxed 2xl:leading-loose">

                  <p>
                    <span className="font-semibold">R-Biomeds</span>, headquartered in Singapore, is a fast-growing healthcare organization with a clear vision to build trust, advance access, and lead innovation in the pharmaceutical and healthcare space.
                  </p>

                  <p>
                    R-Biomeds operates as a strategic planner, experienced executor, regulatory advisor, and marketer of healthcare products. We partner closely with pharmaceutical and FMCG healthcare companies to help them successfully enter, scale, and compete in rapidly evolving markets.
                  </p>

                  <p>
                    With deep regional insight and a holistic, cross-border perspective, R-Biomeds has rapidly expanded its footprint across key Asian markets including Myanmar, Cambodia, Laos, Nepal, and Singapore.
                  </p>

                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;