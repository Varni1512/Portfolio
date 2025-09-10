import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiMail, FiMapPin, FiCalendar, FiGlobe, FiPhone } from 'react-icons/fi'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="bg-light dark:bg-dark py-16 md:py-18">
      <div className="container-section -mt-28">
        <motion.h2
          className="section-title"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-xl transform rotate-3"></div>
              <img
                src="/main.jpg"
                alt="Varnikumar Patel"
                className="relative z-10 w-full h-auto object-cover rounded-xl shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              
              Hello, I&apos;m Varnikumar Patel, a third-year computer science
              student at Vellore Institute of Technology, deeply immersed in the
              world of full-stack web development. My journey began with
              exploring the captivating realm of frontend development, where I
              delved into technologies like React and Next.js, crafting
              innovative projects along the way. My current focus is on
              mastering the backend, with the goal of creating full-stack
              applications that cater to a wide audience. Coding and graphic
              design serve as my creative outlets, allowing me to transform
              ideas into visually appealing and functional solutions. The
              satisfaction of bringing creativity to life through lines of code
              and eye-catching designs is truly fulfilling for me.
              </p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <FiUser className="text-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                  <p className="font-medium">Varnikumar Patel</p>
                </div>
              </div>

              <div className="flex items-center">
                <FiMail className="text-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="font-medium">varni1505@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <FiPhone className="text-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="font-medium">+91 9510728395</p>
                </div>
              </div>

              <div className="flex items-center">
                <FiMapPin className="text-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="font-medium">Ankleshwar , Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-center">
                <FiCalendar className="text-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Birthday</p>
                  <p className="font-medium">December 15, 2005</p>
                </div>
              </div>

              <div className="flex items-center">
                <FiGlobe className="text-primary mr-3" size={20} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Freelance</p>
                  <p className="font-medium">Available</p>
                </div>
              </div>
            </div>

            <a href="/Varnikumar_Resume.pdf" className="btn-secondary">
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
