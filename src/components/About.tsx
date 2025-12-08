'use client';

import {
  FaPaintBrush,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaBrain,
  FaNodeJs,
  FaShieldAlt,
  FaLinkedin,
  FaInfinity,
  FaGlobe,
} from 'react-icons/fa';
import { FaComputer,  } from 'react-icons/fa6';
import { SiFlutter, SiTypescript,SiUpwork ,SiCplusplus} from 'react-icons/si';

export default function About() {
  const skills = [
    { name: 'Frontend Developer', icon: <FaCode size={24} /> },
    { name: 'UI/UX Design', icon: <FaPaintBrush size={24} /> },
    { name: 'HTML', icon: <FaHtml5 size={24} />, },
    { name: 'CSS', icon: <FaCss3Alt size={24} /> },
    { name: 'C++', icon: <SiCplusplus size={24} /> },
    { name: 'JavaScript', icon: <FaJs size={24} /> },
    { name: 'TypeScript', icon: <SiTypescript size={24} /> },
    { name: 'React', icon: <FaReact size={24} /> },
    { name: 'Next.js', icon: <FaNodeJs size={24} />},
    { name: 'Backend (Python)', icon: <FaPython size={24} /> },
    { name: 'Pursuing Agentic AI', icon: <FaBrain size={24} /> },
    { name: 'Linkedin', icon: <FaLinkedin size={24} /> },
    { name: 'Continuous Learner', icon: <FaInfinity size={24} /> },
    { name: 'Creative Thinker', icon: <FaBrain size={24} /> },
    { name: 'flutter developer', icon: <SiFlutter size={24} /> },
    { name: 'Web Developer', icon: <FaComputer size={24} /> },
    { name: 'Remote Worker', icon: <FaGlobe size={24} /> },
    { name: 'Freelance', icon: <SiUpwork size={24} /> },
  ];

  return (
    <section
      id="about"
      className="relative py-16 px-6 bg-gray-900 bg-gradient-to-r from-gray-900 via-gray-900 to-orange-900/20 overflow-hidden fonts"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 relative z-10">
        {/* Text Section */}
        <div className="md:w-1/2 text-left relative">
          {/* Glow behind heading */}
          <div className="absolute -top-4 -left-6 w-32 h-32 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>

          <h2 className="text-3xl font-bold mb-6 text-white relative z-10 head_fonts">About Me</h2>
          <p className="mb-6 text-white">
           
I'm a creative and detail-oriented Frontend Developer with a passion for building responsive, user-friendly, and accessible digital experiences. With hands-on experience in React, Next.js, TypeScript, JavaScript, and Python, I develop dynamic web applications that solve real-world problems.
<br />
<br />
Beyond code, I have a strong sense of UI/UX design, ensuring that functionality is matched with beautiful, intuitive interfaces. I also build cross-platform mobile apps using Flutter, expanding my reach across devices.
<br />
<br />
I thrive in remote, collaborative environments and love staying up to date with the latest in web and mobile development. Whether it's a new framework or design trend, I'm always eager to learn and grow.
          </p>
          
           <div className="absolute top-40 left-60 w-32 h-32 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
            <div className="absolute top-110 left-2 w-32 h-32 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
        </div>

        {/* Skills Section */}
        <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 font-bold">
          {skills.map((skill) => (
            <a
              key={skill.name}
             
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-gray-800 p-6 rounded-lg w-full transform transition-all duration-300 hover:scale-105 hover:bg-orange-600 hover:text-white animate-fade-in"
            >
               <div className="absolute top-30 left-6 w-32 h-32 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
              <span className="text-orange-400">{skill.icon}</span>
              <span>{skill.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Glowing Circle in bottom-right */}
      <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-orange-500 opacity-30 blur-2xl animate-pulse pointer-events-none z-0"></div>
    </section>
  );
}
