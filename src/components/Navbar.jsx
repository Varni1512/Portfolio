import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX, FiCode } from 'react-icons/fi'

// Saare options wapis add kar diye hain
const navLinks = [
  { name: 'Home', to: 'hero', offset: 0 },
  { name: 'About', to: 'about', offset: -100 },
  { name: 'Skills', to: 'skills', offset: -100 },
  { name: 'Work Experience', to: 'work-experience', offset: -100 },
  { name: 'Projects', to: 'projects', offset: -100 },
  { name: 'Education', to: 'education', offset: -100 },
  { name: 'Certificates', to: 'certificates', offset: -100 },
  { name: 'Contact', to: 'contact', offset: -100 },
]

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed z-50 transition-all duration-500 ease-in-out w-full flex justify-center 
        ${scrolled ? 'top-4' : 'top-0'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div 
        className={`
          transition-all duration-500 ease-in-out relative flex items-center justify-between
          ${scrolled 
            ? 'w-[95%] xl:w-[85%] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl rounded-full py-2 px-6' 
            : 'w-full bg-transparent py-6 px-6 md:px-12'
          }
        `}
      >
          {/* --- LOGO --- */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer group flex-shrink-0"
          >
            
            <span className={`font-bold tracking-tight text-white ${scrolled ? 'text-lg' : 'text-xl'}`}>
              Varnikumar<span className="text-purple-400">.dev</span>
            </span>
          </Link>

          {/* --- DESKTOP NAV (Hidden on Mobile/Tablet due to many links) --- */}
          {/* xl:flex kiya hai kyunki links bahut zyada hain, chhote laptops pe fat na jaye */}
          <div className="hidden xl:flex items-center gap-4">
            <ul className="flex bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true} // Jaruri hai active state detect karne ke liye
                    smooth={true}
                    offset={link.offset}
                    duration={500}
                    // 'activeClass' sirf tab apply hoga jab wo section screen par ho
                    activeClass="!text-white !bg-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] font-semibold"
                    className="cursor-pointer px-4 py-2 text-xs font-medium text-gray-400 transition-all duration-300 rounded-full hover:text-white hover:bg-white/5 block whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            
          </div>

          {/* --- MOBILE/TABLET TOGGLE (Visible below XL screens) --- */}
          <div className="flex items-center xl:hidden gap-4">
             
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-200 hover:text-white transition-colors p-1"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 z-40 xl:hidden"
          >
            <div className="bg-[#121212]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl max-h-[80vh] overflow-y-auto">
              <ul className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      offset={link.offset}
                      duration={500}
                      onClick={() => setIsOpen(false)}
                      activeClass="bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-white border border-white/10"
                      className="block px-4 py-3 text-center text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  )
}

export default Navbar