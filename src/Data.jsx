import React from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-6 max-w-4xl mx-auto bg-black text-white min-h-screen"
    >
      <motion.h1 className="text-4xl font-bold mb-4 text-gray-200" whileHover={{ scale: 1.05 }}>
        Devesh Kumar
      </motion.h1>
      <p className="text-lg text-white mb-2">📍 Noida | 📞 +91 9958815201 | 📧 deveshkumar48507@gmail.com</p>
      <p className="text-lg text-blue-500 mb-6">
        <a href="https://www.linkedin.com/in/devesh-kumar-5907b2309" target="_blank">https://www.linkedin.com/in/devesh-kumar-5907b2309</a> |
        <a href="https://github.com/Deveshkgjb" className="ml-2" target="_blank">https://github.com/Deveshkgjb</a>
      </p>

      <motion.section className="mb-6" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.2 }}>
        <h2 className="text-2xl font-semibold mb-2 text-gray-300">About Me</h2>
        <p className="text-white">
          Motivated and passionate B.Tech student specializing in Information Technology with strong hands-on experience in full-stack web development using the MERN stack.
          Eager to contribute to impactful projects and grow as a software developer while solving real-world problems using modern technologies.
        </p>
      </motion.section>

      <motion.section className="mb-6" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.3 }}>
        <h2 className="text-2xl font-semibold mb-2 text-gray-300">Education</h2>
        <p className="text-white">
          Bachelor of Technology (B.Tech) – Information Technology<br />
          Sharda University, Greater Noida<br />
          Expected Graduation: 2026
        </p>
        <p className="text-white mt-2">Schooling – Rama Devi International School</p>
      </motion.section>

      <motion.section className="mb-6" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.4 }}>
        <h2 className="text-2xl font-semibold mb-2 text-gray-300">Certifications & Courses</h2>
        <ul className="list-disc list-inside text-white">
          <li>Full Stack Web Development – MERN Stack (6-Month Course), Completed in 2025</li>
          <li>Data Structures & Algorithms in Java</li>
          <li>Computer Networking Essentials  </li>
          <li>Git & GitHub for Developers </li>
        </ul>
      </motion.section>

      <motion.section className="mb-6" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5 }}>
        <h2 className="text-2xl font-semibold mb-2 text-gray-300">Technical Skills</h2>
        <ul className="list-disc list-inside text-white">
          <li>Frontend: React.js (Hooks, Context API, Router), HTML5, CSS3, JavaScript (ES6+), Vite</li>
          <li>Backend: Node.js, Express.js (routing, middleware, APIs)</li>
          <li>Database: MongoDB, Mongoose</li>
          <li>Tools: Git, GitHub, Postman, VS Code</li>
          <li>Deployment: Vercel, Netlify</li>
          <li>Other: Cheerio (Web Scraping), Computer Networking, DSA (Java/Python)</li>
        </ul>
      </motion.section>

      <motion.section className="mb-6" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.6 }}>
        <h2 className="text-2xl font-semibold mb-2 text-gray-300">Projects</h2>
        <ul className="list-disc list-inside text-white space-y-2">
          <li>
            <strong>Campus Connect:</strong> A full-stack MERN application where students across campuses can connect, share ideas, and collaborate on startups or job opportunities.
          </li>
          <li>
            <strong>Music Upload App:</strong> A React + MongoDB app that allows users to upload, store, and share their own music files with cloud storage support.
          </li>
          <li>
            <strong>Chat App:</strong> Real-time chat platform built with MERN stack and socket.io. Features include user login, chat rooms, and online status tracking.
          </li>
          <li>
            <strong>Campus PYQ:</strong> A platform for uploading and accessing previous year college question papers.
            <a href="https://campuspyq.vercel.app/" className="text-blue-500" target="_blank"> 🔗 https://campuspyq.vercel.app/</a>
          </li>
        </ul>
      </motion.section>

      <motion.section whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.7 }}>
        <h2 className="text-2xl font-semibold mb-2 text-gray-300">Hobbies & Interests</h2>
        <ul className="list-disc list-inside text-white">
          <li>Building web apps & automation tools</li>
          <li>Solving DSA problems (Java & Python)</li>
          <li>Exploring new technologies</li>
          <li>Learning system design and networking</li>
        </ul>
      </motion.section>
    </motion.div>
  );
}
