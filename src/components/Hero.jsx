import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { BiChevronDown } from 'react-icons/bi'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] text-white">
      
      {/* --- MASTER LEVEL BACKGROUND --- */}
      
      {/* 1. Subtle Grid Pattern (Engineering vibe) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* 2. Top Spotlight (Cinematic lighting) */}
      {/* <div className="absolute top-0 left-0 right-0 h-[500px] bg-[radial-gradient(circle_800px_at_50%_-100px,#3b82f640,transparent)]"></div> */}
      
      {/* 3. Floating Glow Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Status Badge (Very trendy in 2024 portfolios) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Available for New Projects</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl md:text-6xl font-bold tracking-tight mb-6">
              Building <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">
                Digital Experiences
              </span>
            </h1>
          </motion.div>
          
          {/* Sub-headline / Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-2xl md:text-3xl text-gray-400 mb-10 h-12 flex items-center justify-center gap-2"
          >
            <span className="text-purple-400 font-mono">{'>'}</span>
            <TypeAnimation
              sequence={[
                'Full-Stack Developer',
                2000,
                'React & Next.js Expert',
                2000,
                'UI/UX Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-light"
            />
            <span className="animate-blink ml-1 w-2 h-8 bg-purple-400 inline-block"></span>
          </motion.div>
          
          {/* Description Text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-gray-400 mb-10 text-base md:text-lg leading-relaxed"
          >
            I am <span className="text-white font-semibold">Varnikumar Patel</span>. I blend design and technology to create pixel-perfect, scalable, and performant web applications that solve real-world problems.
          </motion.p>

          {/* CTA Buttons - Glassmorphism Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto"
          >
            <Link
              to="projects"
              smooth={true}
              offset={-70}
              duration={500}
              className="group relative px-8 py-4 w-full sm:w-auto rounded-full bg-white text-black font-bold text-lg overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 group-hover:text-white transition-colors duration-200">View My Work</span>
            </Link>

            <Link
              to="contact"
              smooth={true}
              offset={-70}
              duration={500}
              className="group px-8 py-4 w-full sm:w-auto rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium text-lg hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <FiMail className="group-hover:-translate-y-1 transition-transform" /> Contact Me
            </Link>
          </motion.div>

          {/* Social Proof / Social Links (Optional but looks pro) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex items-center gap-6 text-gray-500"
          >
             <a href="#" className="hover:text-white transition-colors"><FiGithub size={24} /></a>
             <a href="#" className="hover:text-white transition-colors"><FiLinkedin size={24} /></a>
             {/* <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div> */}
          </motion.div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="about"
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center gap-2 cursor-pointer group"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 group-hover:text-purple-400 transition-colors">Scroll</span>
          <BiChevronDown className="w-6 h-6 text-gray-500 group-hover:text-purple-400 transition" />
          
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero