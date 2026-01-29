import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiMail, FiMapPin, FiCalendar, FiGlobe, FiDownload, FiArrowRight } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
  }

  // Personal Info Data
  const personalInfo = [
    { icon: <FiUser />, label: "Name", value: "Varnikumar Patel" },
    { icon: <FiMail />, label: "Email", value: "varni1505@gmail.com" },
    { icon: <FiMapPin />, label: "Location", value: "Gujarat, India" },
    { icon: <FiCalendar />, label: "Experience", value: "3 Years" }, // Replaced Birthday with Experience for professionalism
    { icon: <FiGlobe />, label: "Availability", value: "Open for Work" },
  ]

  return (
    <section id="about" className="py-12 relative bg-[#0a0a0a] overflow-hidden text-white">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container  mx-auto px-6 relative z-10">
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          
          {/* LEFT COLUMN: Image & Decor */}
          <motion.div variants={itemVariants} className="relative group">
            {/* Abstract Background Shapes behind image */}
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-3xl rotate-6 opacity-30 blur-lg group-hover:rotate-3 transition-transform duration-700"></div>
            <div className="absolute inset-0 bg-white/5 rounded-3xl -rotate-3 backdrop-blur-sm border border-white/10"></div> */}
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/5] lg:aspect-square">
               {/* Replace src with your actual image path */}
              <img
                src="/main.jpg"
                alt="Varnikumar Patel"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Gradient for text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-between">
                <div>
                   <p className="text-xs text-gray-300 uppercase tracking-wider">Current Status</p>
                   <p className="text-sm font-semibold text-white flex items-center gap-2">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                     Building Full-Stack Apps
                   </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-sm font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 uppercase mb-2">
                About Me
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Transforming ideas into <br/>
                <span className="text-white/50">digital reality.</span>
              </h3>
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-gray-400 leading-relaxed">
              Hello! I'm <span className="text-white font-medium">Varnikumar Patel</span>, a passionate Full-Stack Developer and CS student at VIT. 
              My journey started with <span className="text-purple-400">React & Next.js</span>, but my curiosity pushed me deeper into the backend ecosystem.
              <br /><br />
              Today, I don't just write code; I architect scalable solutions. Whether it's crafting pixel-perfect UIs or optimizing database queries, 
              I thrive on the challenge of building applications that live on the internet.
            </motion.p>

            {/* Info Grid - Bento Style Tiles */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {personalInfo.map((item, index) => (
                 <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-colors">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase">{item.label}</p>
                      <p className="text-sm font-medium text-gray-200">{item.value}</p>
                    </div>
                 </div>
               ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <a 
                href="/Varnikumar_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative px-8 py-3 rounded-full bg-white text-black font-semibold overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download CV <FiDownload />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors text-white font-medium flex items-center gap-2"
              >
                Let's Talk <FiArrowRight />
              </a>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default About