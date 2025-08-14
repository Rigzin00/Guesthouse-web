import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, User, LogOut, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  user: any;
  setIsAuthModalOpen: (isOpen: boolean) => void;
  handleSignOut: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  user,
  setIsAuthModalOpen,
  handleSignOut
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'rooms', label: 'Accommodations' },
    { id: 'location', label: 'Location' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      {/* Top Contact Bar - Only visible when not scrolled */}
      <motion.div 
        initial={{ opacity: 1, height: 'auto' }}
        animate={{ 
          opacity: isScrolled ? 0 : 1, 
          height: isScrolled ? 0 : 'auto' 
        }}
        transition={{ duration: 0.3 }}
        className="bg-gray-900/90 text-white text-sm py-2 px-4 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 1234567890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@bangsagokma.com</span>
            </div>
          </div>
          <div className="hidden md:block text-yellow-400">
            Nubra Valley, Leh Ladakh
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <nav className="px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <h1 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <span className="text-yellow-500">Bangsa</span> Gokma
            </h1>
            <p className={`text-xs tracking-wide transition-colors duration-300 ${
              isScrolled ? 'text-gray-600' : 'text-gray-300'
            }`}>
              GUEST HOUSE
            </p>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className={`relative text-sm font-medium tracking-wide uppercase transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? activeSection === item.id 
                      ? 'text-yellow-600' 
                      : 'text-gray-700 hover:text-yellow-600'
                    : activeSection === item.id 
                      ? 'text-yellow-400' 
                      : 'text-white hover:text-yellow-300'
                } group`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-500 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </motion.a>
            ))}
          </div>

          {/* Auth & Mobile Menu */}
          <div className="flex items-center space-x-4">
            
            {/* Desktop Auth Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={user ? handleSignOut : () => setIsAuthModalOpen(true)}
              className={`hidden lg:flex items-center space-x-2 px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg hover:shadow-xl'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-gray-900 backdrop-blur-sm'
              }`}
            >
              {user ? <LogOut size={16} /> : <User size={16} />}
              <span className="text-sm">{user ? 'Sign Out' : 'Book Now'}</span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' 
                  : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl"
            >
              <div className="p-8">
                
                {/* Mobile Logo */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      <span className="text-yellow-500">Bangsa</span> Gokma
                    </h2>
                    <p className="text-xs text-gray-600 tracking-wide">GUEST HOUSE</p>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-2 mb-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block py-4 px-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                        activeSection === item.id 
                          ? 'text-yellow-600 bg-yellow-50' 
                          : 'text-gray-700 hover:text-yellow-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile Auth Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    user ? handleSignOut() : setIsAuthModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-3 py-4 px-6 bg-yellow-500 text-white rounded-xl font-semibold hover:bg-yellow-600 transition-colors duration-300"
                >
                  {user ? <LogOut size={18} /> : <User size={18} />}
                  <span>{user ? 'Sign Out' : 'Book Now'}</span>
                </motion.button>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-8 border-t border-gray-200 space-y-3 text-sm text-gray-600"
                >
                  <div className="flex items-center space-x-3">
                    <Phone size={16} />
                    <span>+91 1234567890</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail size={16} />
                    <span>info@bangsagokma.com</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;