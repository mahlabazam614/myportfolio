"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import unit from "../../public/download.jpg";
import library from "../../public/library.png";
import E_Commerce from "../../public/E-Commerce Store.avif";
import Password from "../../public/password.jpg";
import Data from "../../public/data.jpg";
import cars from "../../public/cars.jpg";
import Datasweeper from "../../public/Datasweeper App.avif";
import Password_manager from "../../public/Password Manager.avif";
import Resume_Website from "../../public/Resume Website.avif";

const projects = [
  {
    title: "Unit Converter Website",
    description: "A modern calculator website with animations, services, built with Python and Sreamlit.",
    image: unit,
    link: "https://mahlabazam614-unit-converter-unitassignment-sln4uh.streamlit.app/",
  },
  {
    title: "Personal Library Manager",
    description: "A sleek web app to organize, track, and manage your personal book collection with search, filters, and reading status. and dark mode with Python and Streamlit.",
    image: library,
    link: "https://mahlabazam614-personal-library-ma-personallibrarymanager-wsfltn.streamlit.app/",
  },
  {
    title: "E-Commerce Store",
    description: "A fully functional e-commerce store with product pages, Stripe checkout, and CMS backend.",
    image: E_Commerce,
    link: "https://test-xi-two-91.vercel.app/",
  },
  {
    title: "Password Strength Meter",
    description: "A responsive web app that checks password strength and provides suggestions for improvement using Python and Streamlit.",
    image: Password,
    link: "https://mahlabazam614-password-strength-passwordstrength-md52er.streamlit.app/",
  },
  {
    title: "Cars Data Analysis",
    description: "Cars buying and selling website using react and next.js.",
    image: cars,
    link: "https://homeworkpw.vercel.app/",
  },
  {
    title: "Data Cleaner App",
    description: "A smart AI chatbot built with Streamlit and OpenAI API for natural language conversations.",
    image: Data,
    link: "https://mahlabazam614-growth-mindset-challenge-growthmindset-g7clpp.streamlit.app/",
  },


];

export default function MyProjects() {
  return (
    <section className="fonts relative py-16 px-6 sm:px-10 md:px-20 lg:px-32 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="head_fonts text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-indigo-500"
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto"
        >
          Explore a collection of my web and AI projects—crafted with modern tools, creativity, and attention to user experience.
        </motion.p>
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group bg-white/5 hover:bg-white/10 backdrop-blur p-5 rounded-2xl shadow-xl border border-white/10 transition duration-300 hover:shadow-pink-500/30 flex flex-col gap-4 transform hover:-translate-y-2 relative"
          >
            <div className="w-full h-48 relative rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <h3 className="text-xl font-semibold text-white group-hover:text-pink-400 transition">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block self-start px-4 py-2 rounded-lg border border-pink-500 text-pink-400 font-medium text-sm hover:bg-pink-500 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-pink-500/40"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
