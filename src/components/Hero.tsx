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

// Container animation for stagger effect
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 }
  }
};

// Individual text animation
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const Hero: React.FC<HeroProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  user,
  setIsAuthModalOpen,
  handleSignOut
}) => {
  return (
    <header id="home" className="relative h-screen overflow-hidden">
      {/* Background with cinematic pan effect */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <motion.img
          src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80"
          alt="Bangsa Gokma Guest House"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        />
        {/* Rich gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </motion.div>

      {/* Header */}
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        user={user}
        setIsAuthModalOpen={setIsAuthModalOpen}
        handleSignOut={handleSignOut}
      />

      {/* Hero Content */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <motion.h2
          variants={fadeUpVariant}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-xl"
        >
          Welcome to <span className="text-yellow-400">Bangsa Gokma</span>
        </motion.h2>

        <motion.p
          variants={fadeUpVariant}
          className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 leading-relaxed"
        >
          Discover the charm of Nubra Valley at our tranquil retreat,
          where modern comfort meets the serene beauty of the Himalayas.
        </motion.p>

        <motion.a
          variants={fadeUpVariant}
          href="#rooms"
          whileHover={{
            scale: 1.08,
            boxShadow: '0px 0px 20px rgba(255, 215, 0, 0.7)',
            y: -2
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 sm:px-10 py-4 rounded-full font-semibold shadow-lg 
                     hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-base sm:text-lg"
        >
          View Rooms
        </motion.a>
      </motion.div>

      {/* Optional decorative particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        ))}
      </div>
    </header>
  );
};

export default Hero;
