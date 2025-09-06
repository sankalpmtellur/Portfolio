import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaGithub, FaNodeJs, 
    FaDatabase, FaServer, FaMobileAlt, FaCode
} from "react-icons/fa";
import { 
    SiTailwindcss, SiSupabase, SiTypescript, SiExpress, SiNextdotjs, 
    SiJavascript, SiGit, SiFigma, SiCanva, SiVercel
} from "react-icons/si";

const skillCategories = [
    {
        id: 'frontend',
        title: 'Frontend',
        icon: <FaReact className="text-blue-500" />,
        skills: [
            { name: 'React', icon: <FaReact className="text-blue-500" /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
            { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
            { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
            { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
            { name: 'GSAP', icon: <FaCode className="text-green-500" /> },
        ]
    },
    {
        id: 'backend',
        title: 'Backend',
        icon: <FaServer className="text-green-500" />,
        skills: [
            { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
            { name: 'Express', icon: <SiExpress /> },
            { name: 'Python', icon: <FaPython className="text-blue-700" /> },
        ]
    },
    {
        id: 'database',
        title: 'Database',
        icon: <FaDatabase className="text-yellow-500" />,
        skills: [
            { name: 'MySQL', icon: <FaDatabase className="text-blue-600" /> },
            { name: 'Supabase', icon: <SiSupabase className="text-green-500" /> },
        ]
    },
    {
        id: 'tools',
        title: 'Dev Tools',
        icon: <FaCode className="text-purple-500" />,
        skills: [
            { name: 'Git', icon: <SiGit className="text-orange-600" /> },
            { name: 'GitHub', icon: <FaGithub className="text-gray-800" /> },
            { name: 'Vercel', icon: <SiVercel className="text-black" /> },
        ]
    },
    {
        id: 'design',
        title: 'UI/UX Design',
        icon: <FaMobileAlt className="text-pink-500" />,
        skills: [
            { name: 'Figma', icon: <SiFigma className="text-purple-600" /> },
            { name: 'Canva', icon: <SiCanva className="text-blue-500" /> },
            { name: 'Responsive Design', icon: <FaMobileAlt className="text-blue-500" /> },
        ]
    }
];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const navigate = useNavigate();

    const currentCategory = skillCategories.find(cat => cat.id === activeCategory);

    return (
        <section id="skills" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        My <span className="text-blue-600">Skills</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Here are the technologies and tools I work with to bring ideas to life.
                        I'm always learning and expanding my skill set.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Category Tabs */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-2 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {skillCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                                activeCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            <span>{category.icon}</span>
                            {category.title}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <AnimatePresence mode="wait">
                        {currentCategory.skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="relative group"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <div className="relative group">
                                    <div className={`p-4 rounded-xl bg-white border-2 ${
                                        hoveredSkill === index 
                                            ? 'border-blue-500 shadow-lg scale-105' 
                                            : 'border-gray-200 hover:border-blue-300'
                                    } transition-all duration-300 h-full flex flex-col items-center justify-center`}
                                         onMouseEnter={() => setHoveredSkill(index)}
                                         onMouseLeave={() => setHoveredSkill(null)}
                                    >
                                        <div className="text-4xl mb-3">
                                            {skill.icon}
                                        </div>
                                        <h4 className="font-medium text-gray-800 text-center">{skill.name}</h4>
                                    </div>
                                </div>

                                {/* Hover Effect */}
                                {hoveredSkill === skill.name && (
                                    <motion.div 
                                        className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1.05, opacity: 1 }}
                                        exit={{ scale: 0.9, opacity: 0 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Learning Section */}
                <motion.div 
                    className="mt-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                            Always Learning & Growing
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Technology never stands still, and neither do I. I'm constantly exploring new tools, 
                            frameworks, and best practices to stay at the forefront of web development.
                            Currently diving deeper into advanced React patterns, performance optimization, 
                            and cloud architecture.
                        </p>
                        <button 
                            onClick={() => navigate('/education')}
                            className="px-6 py-2.5 bg-white text-blue-600 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:bg-blue-50"
                        >
                            View My Learning Path
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}