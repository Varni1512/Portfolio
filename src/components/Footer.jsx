import React from 'react'
import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#0a0a0a] text-white py-8 border-t border-white/10 relative overflow-hidden">
      {/* Optional: Subtle Glow for theme consistency */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="mb-4 md:mb-0">
            {/* Same Logo Text, just updated color */}
            <h3 className="text-2xl font-bold text-[#A855F7]">Portfolio</h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-center md:text-left text-gray-400 text-sm">
              &copy; {currentYear} Varnikumar. All rights reserved.
            </p>
            <p className="flex items-center text-gray-400 mt-2  md:mt-0 md:mr-16 text-sm">
              Made with <FiHeart className="text-red-500 mx-1 fill-red-500 animate-pulse" /> by <span className="text-white font-medium ml-1">Varnikumar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer