import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import proj1 from "../assets/project1.webp";
import proj2 from "../assets/project2.webp";
// import proj3 from "../assets/projects/invasive.webp";
// import proj4 from "../assets/projects/drone.webp";
// import proj5 from "../assets/projects/portfolio.webp";

const projects = [
  {
    title: "Rishihood University Website",
    description:
      "This dynamic website for Rishihood University, built with HTML and CSS, provides a comprehensive glimpse into the university. It features sections on ongoing fests, faculty, campus life, and a dedicated contact page for easy communication. With a seamless and user-friendly interface, the site serves as an engaging hub for students and visitors alike.",
    tech: ["HTML", "CSS", "Javascript"],
    image: proj1,
    github: "https://github.com/sankalpmtellur/Rishihood_Website",
    live: "https://sankalpmtellur.github.io/Rishihood_Website/",
  },
  {
    title: "Travel Website",
    description:
      "🌏 Travel Wonders is your ultimate guide to exploring India's breathtaking destinations! From a welcoming home page to an interactive travel section with a sleek state-wise selection, the site offers stunning visuals and detailed insights into iconic places—beaches, forts, hills, and more. Whether you're an adventurer or a dreamer, this platform makes discovering India's beauty seamless and exciting. 🧳✨🏞️",
    tech: ["TypeScript", "Supabase", "React"],
    image: proj2,
    github: "https://github.com/sankalpmtellur/Travel",
    live: "https://sankalpmtellur.github.io/Travel/",
  },
  {
    title: "The World of Wonders",
    description:
      "Visually rich parallax website educating people about invasive plants and their impact.",
    tech: ["HTML", "CSS", "JavaScript"],
    // image: proj3,
    github: "https://github.com/sankalpmtellur/The-World-of-Wonders",
    live: "https://sankalpmtellur.github.io/The-World-of-Wonders/",
  },
  {
    title: "Drone-based AI Detection",
    description:
      "Drone system to capture and identify invasive plants with GPS tagging using OpenCV.",
    tech: ["Python", "Flask", "OpenCV"],
    // image: proj4,
    github: "#",
    live: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "This modern, responsive portfolio built with animations, smooth scrolling, and Tailwind.",
    tech: ["React", "Tailwind", "Framer Motion"],
    // image: proj5,
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>

        <div className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 snap-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}