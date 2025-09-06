import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaPhone, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
    const contactInfo = [
        {
            name: 'Email',
            icon: <FaEnvelope className="text-2xl text-red-500" />,
            url: 'mailto:sankalp.tellur2024@nst.rishihood.edu.in',
            value: 'sankalp.tellur2024@nst.rishihood.edu.in',
            isLink: true
        },
        {
            name: 'Phone',
            icon: <FaPhone className="text-2xl text-green-600" />,
            url: 'tel:+91 6363002342',
            value: '+91 6363002342',
            isLink: true
        },
        {
            name: 'Location',
            icon: <FaMapMarkerAlt className="text-2xl text-red-500" />,
            value: 'Delhi NCR, India',
            isLink: false
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub />,
            url: 'https://github.com/sankalpmtellur',
            className: 'hover:bg-gray-900 hover:text-white'
        },
        {
            name: 'LeetCode',
            icon: <SiLeetcode />,
            url: 'https://leetcode.com/sankalpmtellur/',
            className: 'text-[#f89f1b] hover:bg-[#f89f1b] hover:text-white'
        },
        {
            name: 'X',
            icon: <FaXTwitter />,
            url: 'https://x.com/sankalpmtellur',
            className: 'hover:bg-black hover:text-white'
        },
        {
            name: 'Instagram',
            icon: <FaInstagram />,
            url: 'https://www.instagram.com/sankalp_m_tellur/',
            className: 'text-pink-600 hover:bg-gradient-to-r from-pink-500 to-purple-600 hover:text-white'
        }
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Get In <span className="text-blue-600">Touch</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Interested in working together or have a question? 
                        Feel free to reach out through any of these channels.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-2xl font-semibold mb-8 text-center">Contact Information</h3>
                    
                    <div className="space-y-6 mb-10">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                <div className="p-3 bg-white rounded-lg shadow-sm mr-4">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">{item.name}</p>
                                    {item.isLink ? (
                                        <a 
                                            href={item.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
                                        >
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-800 font-medium">{item.value}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <h4 className="text-lg font-medium text-gray-800 mb-4">Follow Me</h4>
                        <div className="flex justify-center space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-100 hover:scale-110 transition-all ${social.className}`}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
