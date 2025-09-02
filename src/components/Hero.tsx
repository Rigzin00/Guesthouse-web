// import React from 'react';
// import { motion } from 'framer-motion';
// import Header from './Header';

// interface HeroProps {
//   isMenuOpen: boolean;
//   setIsMenuOpen: (isOpen: boolean) => void;
//   activeSection: string;
//   user: any;
//   setIsAuthModalOpen: (isOpen: boolean) => void;
//   handleSignOut: () => void;
// }

// // Container animation for stagger effect
// const containerVariant = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3, delayChildren: 0.3 }
//   }
// };

// // Individual text animation
// const fadeUpVariant = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
// };

// const Hero: React.FC<HeroProps> = ({
//   isMenuOpen,
//   setIsMenuOpen,
//   activeSection,
//   user,
//   setIsAuthModalOpen,
//   handleSignOut
// }) => {
//   return (
//     <header id="home" className="relative h-screen overflow-hidden">
//       {/* Background with cinematic pan effect */}
//       <motion.div
//         initial={{ scale: 1.15, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 2, ease: 'easeOut' }}
//         className="absolute inset-0"
//       >
//         <motion.img
//           src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80"
//           alt="Bangsa Gokma Guest House"
//           className="w-full h-full object-cover"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
//         />
//         {/* Rich gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
//       </motion.div>

//       {/* Header */}
//       <Header
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//         activeSection={activeSection}
//         user={user}
//         setIsAuthModalOpen={setIsAuthModalOpen}
//         handleSignOut={handleSignOut}
//       />

//       {/* Hero Content */}
//       <motion.div
//         variants={containerVariant}
//         initial="hidden"
//         animate="visible"
//         className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
//       >
//         <motion.h2
//           variants={fadeUpVariant}
//           className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight drop-shadow-xl"
//         >
//           Welcome to <span className="text-yellow-400">Bangsa Gokma</span>
//         </motion.h2>

//         <motion.p
//           variants={fadeUpVariant}
//           className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 leading-relaxed"
//         >
//           Discover the charm of Nubra Valley at our tranquil retreat,
//           where modern comfort meets the serene beauty of the Himalayas.
//         </motion.p>

//         <motion.a
//           variants={fadeUpVariant}
//           href="#rooms"
//           whileHover={{
//             scale: 1.08,
//             boxShadow: '0px 0px 20px rgba(255, 215, 0, 0.7)',
//             y: -2
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 sm:px-10 py-4 rounded-full font-semibold shadow-lg 
//                      hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-base sm:text-lg"
//         >
//           View Rooms
//         </motion.a>
//       </motion.div>

//       {/* Optional decorative particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute bg-white rounded-full opacity-20"
//             style={{
//               width: Math.random() * 4 + 2,
//               height: Math.random() * 4 + 2,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`
//             }}
//             animate={{
//               y: [0, -20, 0],
//               opacity: [0.2, 0.5, 0.2]
//             }}
//             transition={{
//               duration: Math.random() * 6 + 4,
//               repeat: Infinity,
//               ease: 'easeInOut'
//             }}
//           />
//         ))}
//       </div>
//     </header>
//   );
// };

// export default Hero;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Star, Wifi, Car, Coffee, Shield, Phone, Mail } from 'lucide-react';

const ProfessionalGuesthouse = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">Bangsa Gokma Guest House</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#rooms" className="text-gray-600 hover:text-gray-800 transition-colors">Rooms</a>
              <a href="#amenities" className="text-gray-600 hover:text-gray-800 transition-colors">Amenities</a>
              <a href="#location" className="text-gray-600 hover:text-gray-800 transition-colors">Location</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book Now
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=2000"
            alt="Bangsa Gokma Guest House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Bangsa Gokma
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Your peaceful retreat in the heart of Nubra Valley, Ladakh
            </p>
            <div className="flex items-center justify-center space-x-2 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-200">4.8 (127 reviews)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Widget */}
      <section className="bg-white shadow-lg -mt-20 relative z-20 max-w-6xl mx-auto rounded-xl p-6 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Guests</label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>
          </div>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            Check Availability
          </button>
        </div>
      </section>

      {/* About Section */}
     

      {/* Amenities Section */}
     
      {/* Footer */}
      
    </div>
  );
};

export default ProfessionalGuesthouse;