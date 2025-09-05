import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaUniversity, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

export default function Education() {
  const education = [
    {
      id: 1,
      type: 'education',
      title: 'B.Tech in Computer Science',
      institution: 'Rishihood University',
      period: '2021 - 2025',
      location: 'Sonipat, Haryana',
      description: 'Currently pursuing my Bachelor\'s degree with a focus on software development and machine learning.',
      gpa: 'CGPA: 8.5/10',
      link: 'https://www.rishihood.edu.in/'
    },
    {
      id: 2,
      type: 'education',
      title: 'Higher Secondary (12th)',
      institution: 'Kendriya Vidyalaya',
      period: '2020 - 2021',
      location: 'Delhi, India',
      description: 'Completed 12th standard with Computer Science as main subject.',
      gpa: 'Percentage: 85%',
      link: '#'
    }
  ];

  const experience = [
    {
      id: 1,
      type: 'experience',
      title: 'Frontend Developer Intern',
      company: 'Tech Solutions Inc.',
      period: 'June 2024 - Present',
      location: 'Remote',
      description: 'Working on building responsive web applications using React.js and modern frontend technologies.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
      link: '#'
    }
  ];

  return (
    <section id="education" className="pt-32 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My educational background and professional experience that shaped my skills and knowledge.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <FaGraduationCap className="mr-2 text-blue-500" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="relative pl-8 pb-8 border-l-2 border-blue-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1 border-4 border-white"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{edu.title}</h4>
                        <div className="flex items-center text-gray-600 mt-1">
                          <FaUniversity className="mr-2" />
                          <span>{edu.institution}</span>
                        </div>
                      </div>
                      <a 
                        href={edu.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1" />
                        {edu.location}
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600">{edu.description}</p>
                    {edu.gpa && <p className="mt-2 text-sm text-gray-500">{edu.gpa}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center">
              <FaBriefcase className="mr-2 text-blue-500" />
              Experience
            </h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="relative pl-8 pb-8 border-l-2 border-blue-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + education.length) * 0.1 }}
                >
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-1 border-4 border-white"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                        <div className="flex items-center text-gray-600 mt-1">
                          <FaUniversity className="mr-2" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <a 
                        href={exp.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 transition-colors"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600">{exp.description}</p>
                    {exp.technologies && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
