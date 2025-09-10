import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark-light dark:bg-dark-dark text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-primary">Portfolio</h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center">
            <p className="text-center md:text-left text-gray-300">
              &copy; {currentYear} Varnikumar. All rights reserved.
            </p>
            <p className="flex items-center text-gray-300 mr-12 mt-2 md:mt-0 md:ml-4">
              Made with <FiHeart className="text-secondary mx-1" /> Varnikumar
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer