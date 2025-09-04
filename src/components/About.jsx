import { motion } from "framer-motion";
import myPhoto from "../assets/image.webp";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20"
        >
            {/* Left Side: Image */}
            <motion.div
                className="flex-1 flex justify-center mb-10 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={myPhoto}
                    alt="Sankalp"
                    className="w-56 md:w-72 rounded-2xl shadow-xl border-4 border-white"
                />
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
                className="flex-1 text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    About Me
                </h2>
                <p className="mt-4 text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
                    I'm a curious minded guy who enjoys turning complex problems into simple,
                    impactful solutions. While I work with technologies like Python, React, and JavaScript,
                    what excites me most is the process of learning something new every day and applying it
                    to real-world projects. Beyond coding, I enjoy challenges — whether it's solving tough
                    algorithmic problems, exploring new tools, or even a game of chess that keeps my brain sharp.
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-blue-600">Education</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            B.Tech in Computer Science and AI at <b>Rishihood University</b>
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-blue-600">Experience</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            Software Engineer Intern at <b>AgroEdge</b>
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-blue-600">Passion</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            I love playing sports like chess and cricket, solving challenging problems,
                            and building innovative applications that make a real-world impact.
                        </p>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-blue-600">Location</h3>
                        <p className="text-sm text-gray-600 mt-1">Delhi NCR, India</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}