export default function OurEcoSystem() {
    const leftCards = [
        {
            icon: "🏢",
            title: "Our Vision",
            description: "To be a trusted health care organization of repute, admired by its stakeholders for being customer centric."
        },

        {
            icon: "🌟",
            title: "Our Culture",
            description: "At R-Biomeds, culture is about empowerment, promoting collaborative atmosphere with shared goals."
        },
        {
            icon: "💎",
            title: "Our Mission",
            description: "To inspire hope by delivering world-class healthcare products and services that improve patient care through integrated practices, education, and research."
        },
    ];

    const rightCards = [
        {
            icon: "👥",
            title: "Our Values",
            description: "R-Biomeds is driven by its core values like quality, customer focus and respect for individuals."
        },
        {
            icon: "⚡",
            title: "Execution Excellence",
            description: "With the right capability and attitude our team is aligned to its core values & highly accountable results."
        },
        {
            icon: "📈",
            title: "Employee Value Proposition",
            description: "We understand that career growth of an individual at R-Biomeds is an important aspect."
        }
    ];

    return (
        <div className="bg-white md:py-10 2xl:py-6">
            <div className="font-inner-tight-1 container mx-auto px-6">
                <h1 className="md:text-[8.5rem] 2xl:text-[9.2rem] text-gray-200 font-extrabold uppercase -mt-20">
                    Our Eco System
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Left Column - Cards */}
                    <div className="space-y-6">
                        {leftCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 hover:border-white hover:bg-gradient-to-br hover:from-white group-hover:to-[#ef662e] rounded-2xl p-6 group"
                            >
                                <div className="flex items-start gap-4">

                                    <div>
                                        <h3 className="text-2xl font-bold text-black mb-2 group-hover:to-[#ef662e]  transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Column - Image */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-full max-w-md">
                            <img
                                src=""
                                alt="ABC International"
                                className="w-full h-auto rounded-3xl"
                            />
                        </div>
                    </div>

                    {/* Right Column - Cards */}
                    <div className="space-y-6">
                        {rightCards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white border border-gray-200 hover:border-white  hover:bg-gradient-to-br hover:from-white hover:to-[#ef662e] rounded-2xl p-6 "
                            >
                                <div className="flex items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-black mb-2 transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {card.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
