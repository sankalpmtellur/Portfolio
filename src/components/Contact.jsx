import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Contact() {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="text-2xl" />,
            url: 'https://github.com/sankalpmtellur',
            username: '@sankalpmtellur'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="text-2xl text-[#0077b5]" />,
            url: 'https://linkedin.com/in/sankalpmtellur',
            username: 'sankalpmtellur'
        },
        {
            name: 'Email',
            icon: <FaEnvelope className="text-2xl text-red-500" />,
            url: 'mailto:sankalpmtellur@gmail.com',
            username: 'sankalpmtellur@gmail.com'
        },
        {
            name: 'Phone',
            icon: <FaPhone className="text-2xl text-green-600" />,
            url: 'tel:+919999999999',
            username: '+91 99999 99999'
        },
        {
            name: 'Location',
            icon: <FaMapMarkerAlt className="text-2xl text-red-500" />,
            username: 'Delhi NCR, India'
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log('Form submitted:', data);
        e.target.reset();
    };

    return (
        <section id="contact" className="min-h-screen py-20 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto">
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
                        Have a project in mind or want to discuss potential opportunities? 
                        Feel free to reach out to me. I'm always open to new ideas and collaborations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="bg-white rounded-2xl shadow-lg p-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="How can I help you?"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                    placeholder="Hi there, I'd like to talk about..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300 transform hover:scale-[1.02]"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <p className="text-gray-600 mb-8">
                                Feel free to reach out to me through any of these platforms. 
                                I'll get back to you as soon as possible!
                            </p>
                        </div>

                        <div className="space-y-6">
                            {socialLinks.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.url || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 group"
                                    whileHover={{ x: 5 }}
                                >
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mr-4 group-hover:bg-blue-100 transition">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-700">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.username}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
                            <h4 className="font-semibold text-lg mb-4">Working Hours</h4>
                            <div className="space-y-2">
                                <p className="flex justify-between">
                                    <span className="text-gray-600">Monday - Friday</span>
                                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                                </p>
                                <p className="flex justify-between">
                                    <span className="text-gray-600">Weekend</span>
                                    <span className="font-medium">Not available</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
