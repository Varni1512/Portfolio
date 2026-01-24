import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp } from 'react-icons/fi'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Thoda aur scroll hone par dikhana better rehta hai (e.g. 500px)
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-4 lg:bottom-8 right-4 lg:right-8 p-3.5 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 text-[#A855F7] shadow-lg z-50 group transition-all duration-300"
          
          // Initial Animation (Slide Up)
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          
          // Hover Animation (Glow & Fill)
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: "#A855F7", 
            color: "#ffffff",
            borderColor: "#A855F7",
            boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" 
          }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll to top"
        >
          {/* Arrow Animation on Hover */}
          <FiArrowUp 
            size={22} 
            className="group-hover:-translate-y-1 transition-transform duration-300 ease-in-out" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop