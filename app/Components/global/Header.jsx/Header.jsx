"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const isActive = (path) => {
        if (path === "/") return pathname === "/";
        return pathname.startsWith(path);
    };

    const links = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Our Products", href: "/ourproduct" },
        { name: "Our People", href: "/ourpeople" },
        { name: "Journal", href: "/articles" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto h-20 px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/Rbiomedslogo.png"
                        alt="ABC International Logo"
                        width={140}
                        height={60}
                        className="object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-medium text-lg transition-colors ${isActive(link.href)
                                ? "text-[#ff5400]"
                                : "text-gray-600 hover:text-gray-900"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex">
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 bg-gray-100 hover:bg-[#ef662a] text-black px-6 py-2.5 rounded-full text-lg font-medium hover:text-white transition-colors"
                    >
                        Contact us
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-800"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-20 left-0 w-full bg-white border-t transition-all duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                <nav className="flex flex-col gap-6 px-6 py-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className={`text-lg font-medium ${isActive(link.href)
                                ? "text-[#ff5400]"
                                : "text-gray-700"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Mobile CTA */}
                    <Link
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 inline-flex items-center justify-center gap-2 bg-[#ef662a] text-white px-6 py-3 rounded-full text-lg font-medium"
                    >
                        Contact us
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}
