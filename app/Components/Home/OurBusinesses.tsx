import Image from "next/image";
import { ArrowRight } from "lucide-react";

const OurBusinesses = () => {
    const businesses = [
        {
            title: "MAXXCARE",
            subTitle: "We Know How",
            logo: "/images/businesses/maxxcare.png",
            description: "Market access solutions in Myanmar, Vietnam & Cambodia",
            bgColor: "bg-[#e0f7fa]", // Light cyan
            textColor: "text-[#1e293b]",
            linkColor: "text-[#006064]",
            type: "maxxcare"
        },
        {
            title: "Natural",
            subTitle: "We care",
            description: "Inspiring shift to life-changing plant-based way of living",
            bgColor: "bg-[#f1f8e9]", // Light green
            textColor: "text-[#2e7d32]",
            linkColor: "text-[#1b5e20]",
            type: "natural"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                {/* Heading Section */}
                <div className="text-center mb-16">
                    <h2 className="text-[3.5rem] font-black leading-tight mb-4 tracking-tighter shadow-sm inline-block">
                        Our <span className="text-indigo-600">businesses</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-medium">
                        Helping you stay healthy as long as you live.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {businesses.map((biz, index) => (
                        <div
                            key={index}
                            className={`${biz.bgColor} rounded-[3rem] p-12 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-500 ease-out cursor-pointer h-full`}
                        >
                            {/* Logo Area */}
                            <div className="relative w-full h-48 mb-8 flex items-center justify-center">
                                {biz.type === "maxxcare" ? (
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={biz.logo || ""}
                                            alt={biz.title}
                                            fill
                                            className="object-contain transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                ) : (
                                    /* Custom CSS Leaf Logo for "Natural We care" */
                                    <div className="flex flex-col items-center">
                                        <div className="relative w-32 h-32 bg-[#4caf50] rounded-tl-[100%] rounded-br-[100%] rounded-tr-[40%] rounded-bl-[40%] flex items-center justify-center shadow-lg transform rotate-[-15deg] group-hover:rotate-0 transition-transform duration-500">
                                            <span className="text-white font-black text-2xl rotate-[15deg] group-hover:rotate-0 transition-transform duration-500">Natural</span>
                                        </div>
                                        <div className="mt-4">
                                            <span className="text-3xl font-black text-[#2e7d32] uppercase tracking-tighter italic">We care</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <p className={`text-2xl md:text-3xl font-bold ${biz.textColor} leading-tight mb-10 px-4`}>
                                {biz.description}
                            </p>

                            {/* Link */}
                            <a
                                href="https://abcinternationalh.netlify.app/"
                                className={`mt-auto inline-flex items-center gap-2 font-black uppercase text-lg tracking-widest ${biz.linkColor} hover:gap-4 transition-all duration-300`}
                            >
                                Know More <ArrowRight className="w-6 h-6" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurBusinesses;
