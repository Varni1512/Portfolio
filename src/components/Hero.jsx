import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { FiArrowDown } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Hello, I'm Varnikumar Patel
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 h-16"
          >
            <TypeAnimation
              sequence={[
                'Software Developer',
                1000,
                'Full-Stack Developer',
                1000,
                'Frontend Specialist',
                1000,
                'Data Analyst',
                1000,
                'AI & Machine Learning Developer',
                1000,
                'Creative Coder',
                1000,
                'Passionate Coder',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-dark-light dark:text-light-light"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a href="/Varnikumar_Patel_Resume.pdf" className="btn-secondary">
              Download Resume
            </a>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="btn-secondary cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm mb-2 text-dark-light dark:text-light-light">Scroll Down</span>
          <FiArrowDown className="text-primary animate-bounce" size={24} />
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero