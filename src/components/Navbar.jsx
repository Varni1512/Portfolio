import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', to: 'hero', offset: 0 },
  { name: 'About', to: 'about', offset: -70 },
  { name: 'Skills', to: 'skills', offset: -70 },
  { name: 'Work Experience', to: 'work-experience', offset: -70 },
  { name: 'Projects', to: 'projects', offset: -70 },
  { name: 'Education', to: 'education', offset: -70 },
  { name: 'Certificates', to: 'certificates', offset: -70 },
  { name: 'Contact', to: 'contact', offset: -70 },
]

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-primary cursor-pointer"
          >
            Varnikumar Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={link.offset}
                    duration={500}
                    className="text-dark-light dark:text-light-light hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer"
                    activeClass="text-primary font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-light-dark dark:bg-dark-dark hover:bg-light dark:hover:bg-dark-light transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-primary" />}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full bg-light-dark dark:bg-dark-dark hover:bg-light dark:hover:bg-dark-light transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FiSun className="text-yellow-300" /> : <FiMoon className="text-primary" />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-dark-light dark:text-light-light hover:bg-light-dark dark:hover:bg-dark-dark transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className="relative">
        {isOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-dark-dark shadow-lg max-w-[300px] w-full absolute right-0 top-full rounded-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={link.offset}
                      duration={500}
                      className="block py-1 text-center text-dark-light dark:text-light-light hover:text-primary dark:hover:text-primary transition-colors duration-300"
                      activeClass="text-primary font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </div>

    </motion.nav>
  )
}

export default Navbar