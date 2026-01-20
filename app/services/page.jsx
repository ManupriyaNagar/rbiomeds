import ServicesList from "../Components/Services/ServicesList";

export default function Services() {
    return (
        <main className="min-h-screen bg-white">
            {/* Header Section */}
            <div className="pt-32 pb-16 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6">
                        Our Services
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto">
                        Comprehensive pharmaceutical solutions tailored to meet global standards
                        and local market needs in Myanmar.
                    </p>
                </div>
            </div>

            {/* List Section */}
            <ServicesList />
        </main>
    );
}