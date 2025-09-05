import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaMobileAlt, FaChessKnight, FaBrain, FaReact, FaPython, FaHtml5, FaCss3Alt, FaGamepad } from "react-icons/fa";
import { SiTypescript, SiSupabase, SiOpencv, SiFlask, SiJavascript, SiTensorflow } from "react-icons/si";
import proj1 from "../assets/project1.webp";
import proj2 from "../assets/project2.webp";
// import proj3 from "../assets/projects/invasive.webp";
// import proj4 from "../assets/projects/drone.webp";
// import proj5 from "../assets/projects/portfolio.webp";

const projects = [
  {
    id: 1,
    title: "Rishihood University Website",
    description: "A dynamic website for Rishihood University showcasing campus life, faculty, and events with a user-friendly interface.",
    longDescription: "This comprehensive website for Rishihood University was built with modern web technologies to provide an engaging experience for students, faculty, and visitors. The site features responsive design, smooth animations, and intuitive navigation.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    image: proj1,
    github: "https://github.com/sankalpmtellur/Rishihood_Website",
    live: "https://sankalpmtellur.github.io/Rishihood_Website/",
    category: "web",
    featured: true,
    date: "2023-06-15"
  },
  {
    id: 2,
    title: "Travel Explorer",
    description: "An interactive travel guide for exploring India's diverse destinations with state-wise categorization.",
    longDescription: "This feature-rich travel platform helps users discover and plan their trips across India. It includes location-based recommendations, travel guides, and stunning photography. Built with modern frontend technologies for a seamless user experience.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    image: proj2,
    github: "https://github.com/sankalpmtellur/Travel",
    live: "https://sankalpmtellur.github.io/Travel/",
    category: "web",
    featured: true,
    date: "2023-09-22"
  },
  {
    id: 3,
    title: "The World of Wonders",
    description: "An educational platform about environmental conservation and invasive plant species.",
    longDescription: "This interactive website uses parallax scrolling and engaging visuals to educate visitors about environmental conservation. It features detailed information about various ecosystems and the impact of invasive species on local biodiversity.",
    tech: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    // image: proj3,
    github: "https://github.com/sankalpmtellur/The-World-of-Wonders",
    live: "https://sankalpmtellur.github.io/The-World-of-Wonders/",
    category: "web",
    featured: false,
    date: "2023-03-10"
  },
  {
    id: 4,
    title: "Drone-based AI Detection",
    description: "Aerial monitoring system for identifying and tracking invasive plant species using computer vision.",
    longDescription: "This innovative project combines drone technology with computer vision to detect and monitor invasive plant species in large areas. The system captures high-resolution images, processes them in real-time, and generates detailed reports with GPS coordinates of detected plants.",
    tech: ["Python", "OpenCV", "TensorFlow", "Flask"],
    // image: proj4,
    github: "#",
    live: "#",
    category: "ai",
    featured: true,
    date: "2023-11-05"
  },
  {
    id: 5,
    title: "Chess Engine",
    description: "A chess engine with AI opponent and move analysis capabilities.",
    longDescription: "A complete chess implementation featuring multiple difficulty levels, move validation, check detection, and move suggestions. The AI uses minimax algorithm with alpha-beta pruning for optimal performance.",
    tech: ["Python", "Pygame", "Numpy"],
    // image: proj5,
    github: "#",
    live: "#",
    category: "ai",
    featured: false,
    date: "2023-07-18"
  }
];

const categories = [
  { id: 'all', name: 'All Projects', icon: <FaCode className="mr-2" /> },
  { id: 'web', name: 'Web Development', icon: <FaServer className="mr-2" /> },
  { id: 'ai', name: 'AI/ML', icon: <FaBrain className="mr-2" /> },
  { id: 'mobile', name: 'Mobile Apps', icon: <FaMobileAlt className="mr-2" /> },
  { id: 'game', name: 'Games', icon: <FaChessKnight className="mr-2" /> },
];

const techIcons = {
  'React': <FaReact className="text-blue-500" />,
  'TypeScript': <SiTypescript className="text-blue-600" />,
  'JavaScript': <SiJavascript className="text-yellow-400" />,
  'Python': <FaPython className="text-blue-700" />,
  'HTML5': <FaHtml5 className="text-orange-500" />,
  'CSS3': <FaCss3Alt className="text-blue-500" />,
  'Supabase': <SiSupabase className="text-green-500" />,
  'OpenCV': <SiOpencv className="text-white bg-blue-800 rounded" />,
  'Flask': <SiFlask className="text-gray-800" />,
  'TensorFlow': <SiTensorflow className="text-orange-500" />,
  'Pygame': <FaGamepad className="text-green-600" />
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here's a collection of my recent work. Each project was built with passion and attention to detail.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-200'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => openProjectModal(project)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || 'https://via.placeholder.com/600x400?text=Project+Image'}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <span key={i} className="bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {new Date(project.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                    </span>
                    <button 
                      className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        openProjectModal(project);
                      }}
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {isModalOpen && selectedProject && (
            <>
              <motion.div 
                className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              >
                <motion.div 
                  className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <button 
                      onClick={closeModal}
                      className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 z-10 shadow-md hover:shadow-lg transition-all"
                      aria-label="Close modal"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    <div className="h-64 md:h-80 bg-gray-100 overflow-hidden">
                      <img 
                        src={selectedProject.image || 'https://via.placeholder.com/800x500?text=Project+Image'} 
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            {selectedProject.title}
                          </h2>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map((tech, i) => (
                              <span key={i} className="bg-blue-50 text-blue-600 text-xs px-3 py-1 rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3 mt-4 md:mt-0">
                          {selectedProject.github && (
                            <a 
                              href={selectedProject.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors"
                            >
                              <FaGithub className="mr-2" /> Code
                            </a>
                          )}
                          {selectedProject.live && selectedProject.live !== '#' && (
                            <a 
                              href={selectedProject.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                            >
                              <FaExternalLinkAlt className="mr-2" /> Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                      
                      <div className="prose max-w-none text-gray-700">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">About the Project</h3>
                        <p className="mb-4">{selectedProject.longDescription || selectedProject.description}</p>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Technologies Used</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                          {selectedProject.tech.map((tech, i) => (
                            <div key={i} className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <span className="text-xl mr-3">
                                {techIcons[tech] || <FaCode />}
                              </span>
                              <span className="font-medium">{tech}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-8 pt-6 border-t border-gray-200">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-medium text-gray-900 mb-2">Date Completed</h4>
                              <p className="text-gray-600">
                                {new Date(selectedProject.date).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long',
                                  day: 'numeric' 
                                })}
                              </p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                              <h4 className="font-medium text-gray-900 mb-2">Category</h4>
                              <p className="text-gray-600 capitalize">{selectedProject.category}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}