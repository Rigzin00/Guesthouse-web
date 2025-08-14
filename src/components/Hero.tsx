import React from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

interface HeroProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  user: any;
  setIsAuthModalOpen: (isOpen: boolean) => void;
  handleSignOut: () => void;
}

const Hero: React.FC<HeroProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  user,
  setIsAuthModalOpen,
  handleSignOut
}) => {
  return (
    <header id="home" className="relative h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img 
          src="Public/Photos/photo.png"
          alt="Bangsa Gokma Guest House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      
      <Header 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        user={user}
        setIsAuthModalOpen={setIsAuthModalOpen}
        handleSignOut={handleSignOut}
      />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-[-4rem]"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Welcome to Bangsa Gokma
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mb-8 px-4"
        >
          Experience the beauty of Nubra Valley at our peaceful guest house, located near the stunning Sumur sand dunes
        </motion.p>
        <motion.a 
          href="#rooms"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-sm sm:text-base"
        >
          View Rooms
        </motion.a>
      </motion.div>
    </header>
  );
};

export default Hero;