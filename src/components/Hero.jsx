import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaArrowRight, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiX } from "react-icons/si";
import image from "../assets/sankalp.webp";

export default function Hero() {
    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/sankalpmtellur" },
        { icon: <FaInstagram className="text-pink-600" />, url: "https://www.instagram.com/sankalp_m_tellur/" },
        { icon: <SiLeetcode className="text-[#f89f1b]" />, url: "https://leetcode.com/sankalpmtellur/" },
        { icon: <SiX className="text-black" />, url: "https://x.com/sankalpmtellur" },
        { icon: <FaLinkedin className="text-blue-700" />, url: "https://www.linkedin.com/in/sankalpmt/" },
    ];

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-100 opacity-10"
                        style={{
                            width: Math.random() * 300 + 100,
                            height: Math.random() * 300 + 100,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, 30, 0],
                            x: [0, Math.random() * 40 - 20, 0],
                        }}
                        transition={{
                            duration: 10 + Math.random() * 20,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.p
                            className="text-blue-600 font-medium mb-4 inline-block px-4 py-1 rounded-full bg-blue-50 text-sm"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            👋 Hello, I'm
                        </motion.p>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                                Sankalp M Tellur
                            </span>
                        </motion.h1>

                        <motion.div
                            className="text-xl md:text-2xl text-gray-600 font-medium mb-6 h-10"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Typewriter
                                options={{
                                    strings: [
                                        "Full Stack Developer",
                                        "Problem Solver",
                                        "Tech Enthusiast",
                                        "UI/UX Designer"
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 30,
                                }}
                            />
                        </motion.div>

                        <motion.p
                            className="text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 text-lg leading-relaxed"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            An aspiring developer skilled in Python, DSA and JavaScript, with over 125+ Leetcode problems solved and a continuous drive to improve through challenges and hands-on projects.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            <a
                                href="#projects"
                                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full group-hover:from-blue-700 group-hover:to-cyan-600 transition-all duration-300 ease-out shadow-lg hover:shadow-xl"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></span>
                                <span className="relative flex items-center">
                                    View My Work
                                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </a>
                            <a
                                href="#contact"
                                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-blue-600 border-2 border-blue-600 rounded-full hover:text-white transition-all duration-300 ease-out hover:shadow-lg"
                            >
                                <span className="absolute inset-0 w-full h-0 bg-blue-600 transition-all duration-300 ease-out group-hover:h-full -z-10"></span>
                                <span>Let's Talk</span>
                            </a>
                        </motion.div>

                        <motion.div
                            className="mt-12 flex items-center justify-center lg:justify-start space-x-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="h-px bg-gray-300 w-8"></div>
                            <div className="flex space-x-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl text-gray-500 hover:text-blue-600 transition-colors duration-300"
                                        whileHover={{ y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={link.url.split('/').pop()}
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                            <div className="h-px bg-gray-300 w-8"></div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-20 blur-3xl -z-10"></div>
                            <div className="relative">
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 opacity-20 animate-pulse"></div>
                                <img
                                    src={image}
                                    alt="Sankalp Tellur"
                                    className="relative z-10 w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-white shadow-2xl"
                                />
                            </div>

                            {/* Experience Badge */}
                            <motion.div
                                className="absolute -bottom-2 -right-8 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 z-20 w-45"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                                            <span className="text-sm font-bold">1+</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Years of</p>
                                        <p className="font-semibold">Experience</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project Badge */}
                            <motion.div
                                className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 z-20 w-45"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.9 }}
                            >
                                <div className="flex items-center">
                                    <div className="bg-green-100 p-2 rounded-lg mr-3">
                                        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center text-white">
                                            <span className="text-sm font-bold">10+</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Projects</p>
                                        <p className="font-semibold">Completed</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: [0, 1, 1, 0],
                    y: [20, 0, 0, -10]
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "loop"
                }}
            >
                <span className="text-sm text-gray-500 mb-2">Scroll Down</span>
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
                    <motion.div
                        className="w-1 h-2 bg-gray-500 rounded-full"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                    />
                </div>
            </motion.div>
        </section>
    );
} 