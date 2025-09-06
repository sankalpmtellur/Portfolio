import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaHeart, FaMapMarkerAlt, FaChess, FaCode, FaBrain } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import myPhoto from "../assets/image.webp";

export default function About() {
    const stats = [
        { icon: <FaGraduationCap className="text-xl text-blue-500" />, title: "Education", desc: "B.Tech in Computer Science and AI at Rishihood University" },
        { icon: <FaBriefcase className="text-xl text-blue-500" />, title: "Experience", desc: "Software Engineer Intern at AgroEdge" },
        { icon: <FaHeart className="text-xl text-blue-500" />, title: "Interests", desc: "Chess, Problem Solving, Web Development" },
        { icon: <FaMapMarkerAlt className="text-xl text-blue-500" />, title: "Location", desc: "Delhi NCR, India" },
    ];

    const skills = [];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        About <span className="text-blue-600">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Image */}
                    <motion.div
                        className="relative flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative">
                            {/* Background gradient effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl opacity-20 blur-3xl -z-10"></div>
                            <div className="relative">
                                <img
                                    src={myPhoto}
                                    alt="Sankalp Tellur"
                                    className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl border-4 border-white"
                                />
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <div className="flex items-center">
                                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                        <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                                            <FaCode className="text-sm" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Passionate</p>
                                        <p className="font-semibold">Developer</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Side: Content */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Who am I?</h3>
                            <p className="text-gray-600 leading-relaxed">
                                I'm a <span className="font-medium text-gray-800">Computer Science student</span> passionate about problem-solving and building things with code. I've solve problems on LeetCode and enjoy tackling algorithmic challenges.
                            </p>
                            <p className="mt-4 text-gray-600 leading-relaxed">
                                I'm currently exploring web development and working on personal projects to improve my skills. When I'm not coding, you can find me playing chess or learning about new technologies.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 * index }}
                                >
                                    <div className="flex items-center mb-3">
                                        <div className="p-2 bg-blue-50 rounded-lg mr-3">
                                            {stat.icon}
                                        </div>
                                        <h4 className="font-semibold text-gray-800">{stat.title}</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">{stat.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="pt-4"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-cyan-600"
                            >
                                Get In Touch
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}