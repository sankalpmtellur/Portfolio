import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo / Name */}
                <h1 className="text-2xl font-bold text-gray-900">Sankalp</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a
                                href={`#${link.toLowerCase()}`}
                                className="hover:text-blue-600 transition-colors duration-300"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
                    <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link.toLowerCase()}`}
                                    className="hover:text-blue-600 transition-colors duration-300"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}