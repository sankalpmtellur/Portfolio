import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import image from "../assets/sankalp.webp";

export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 pt-32"
        >
            <motion.div
                className="flex-1 text-center md:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Hi, I'm <span className="text-blue-600">Sankalp</span>
                </h1>
                <h2 className="mt-3 text-lg md:text-xl text-gray-600">
                    <Typewriter
                        options={{
                            strings: [
                                "Full Stack Developer",
                                "Tech Enthusiast",
                                "Creative Designer",
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                <p className="mt-4 text-gray-700 max-w-md">
                    An aspiring developer skilled in Python, DSA and React, with over 125+ Leetcode problems solved and a continuous drive to improve through challenges and hands-on projects.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                    <a
                        href="#projects"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </motion.div>

            <motion.div
                className="flex-1 mt-10 md:mt-0 flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <img
                    src={image}
                    alt="Sankalp"
                    className="w-64 md:w-80 rounded-2xl shadow-xl border-4 border-white"
                />
            </motion.div>
        </section>
    );
}