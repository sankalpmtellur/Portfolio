import { motion } from "framer-motion";
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiSupabase, SiTypescript, SiExpress, SiNextdotjs, SiJavascript } from "react-icons/si";

export default function Skills() {
    const skills = [
        { name: "Python", icon: <FaPython /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "GitHub", icon: <FaGithub /> },
    ];

    return (
        <section
            id="skills"
            className="min-h-screen bg-gray-50 py-20 px-6 max-w-7xl mx-auto"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
                My Skills
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                    >
                        <div className="text-4xl text-blue-600 mb-2">{skill.icon}</div>
                        <p className="text-sm font-medium text-gray-700">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}