"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaBehance, FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiFiverr, SiFreelancer, SiUpwork } from "react-icons/si";

export default function Footer() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } },
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send email to backend)
    alert("Subscribed! You'll receive resources soon.");
  };

  return (
    <footer className="bg-gray-900 text-white py-12 fonts">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Homepage
                </a>
              </li>
              <li>
                <a href="/skills" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  My Skills
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Projects & Portfolio
                </a>
              </li>

               <li>
                <a href="/about" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Let's Collaborate */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">Let's Collaborate</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services/ui-ux" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="/services/graphic-design" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Frontend Developer
                </a>
              </li>
              <li>
                <a href="/services/web-development" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services/social-media" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                  Social Media
                </a>
              </li>
            </ul>
          </div>

          {/* Keep Connected */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">Keep Connected</h3>
            <p className="text-gray-400 mb-4">Get My Resource For Free</p>
            <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="mahlabazam614@gmail.com"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-orange-400 w-full"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
            <motion.div
              className="flex gap-4"
              variants={iconVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
               <a href="https://www.linkedin.com/in/mahlab-azam-a85637335/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <FaLinkedin size={24} />
              </a>
              
              <a href="https://www.instagram.com/mahlab614/?__pwa=1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.facebook.com/mahlab.azam" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <FaFacebook size={24} />
              </a>
               <a href="https://wa.me/923318077912" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://www.upwork.com/freelancers/~0146d86aeb82c17791" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <SiUpwork size={24} />
              </a>
              <a href="https://www.fiverr.com/mahlabazam/buying?source=avatar_menu_profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                <SiFiverr size={24} />
              </a>

            </motion.div>
          </div>
        </motion.div>

        {/* Copyright and Contact Info */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-center md:text-left">
            All rights are reserved - Developed by Mahlab Azam • <a href="tel:+92 331 8077972" className="hover:text-orange-400 transition-colors duration-300">03318077912</a> • <a href="mahlabazam614@gmail.com" className="hover:text-orange-400 transition-colors duration-300">mahlabazam614@gmail.com</a>
          </p>
        </motion.div>

        {/* Thanks for Watching Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className=" head_fonts text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <FaEnvelope /> Thanks for Collaboration!
          </h3>
          <p className="text-gray-400 mb-4">
            Need similar website or need any help with your Web design and Development ?
          </p>
         
        </motion.div>
      </div>
    </footer>
  );
}