import React, { useState, useEffect } from 'react';
import { motion, useScroll, useAnimation, useSpring } from 'framer-motion';
import { BedDouble, MapPin, Phone, Mail, Utensils, Wifi, Mountain } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

import Room, { Room as RoomType } from './components/Room';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Location from './components/Location';
import SignInModal from './components/SignInModal';

// User interface
interface User {
  id: string;
  name: string;
  email: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const springScrollY = useSpring(scrollY, { damping: 50, stiffness: 400 });

  // Enhanced container variants with stagger effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Sample room data (since Supabase is removed)
  const sampleRooms: RoomType[] = [
    {
      id: '1',
      title: 'Deluxe Double Room',
      description: 'Spacious room with mountain views, perfect for couples seeking comfort and tranquility.',
      price: 3500,
      capacity: 2,
      size: '25 sq m',
      bed_type: 'King Size',
      image_url: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80',
      amenities: ['WiFi', 'TV', 'Private Bath', 'Coffee']
    },
    {
      id: '2',
      title: 'Family Suite',
      description: 'Large family room with separate living area, ideal for families visiting Nubra Valley.',
      price: 5500,
      capacity: 4,
      size: '40 sq m',
      bed_type: '2 Double Beds',
      image_url: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80',
      amenities: ['WiFi', 'TV', 'Private Bath', 'Coffee', 'Mini Fridge']
    },
    {
      id: '3',
      title: 'Standard Single Room',
      description: 'Cozy single room perfect for solo travelers exploring the beautiful landscapes of Ladakh.',
      price: 2500,
      capacity: 1,
      size: '18 sq m',
      bed_type: 'Single Bed',
      image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80',
      amenities: ['WiFi', 'TV', 'Private Bath']
    },
    {
      id: '4',
      title: 'Premium Valley View',
      description: 'Luxurious room with panoramic valley views and premium amenities for an unforgettable stay.',
      price: 4500,
      capacity: 2,
      size: '30 sq m',
      bed_type: 'King Size',
      image_url: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80',
      amenities: ['WiFi', 'TV', 'Private Bath', 'Coffee', 'Balcony', 'Valley View']
    },
    {
      id: '5',
      title: 'Budget Twin Room',
      description: 'Affordable twin room perfect for backpackers and budget-conscious travelers.',
      price: 2000,
      capacity: 2,
      size: '20 sq m',
      bed_type: 'Twin Beds',
      image_url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80',
      amenities: ['WiFi', 'Shared Bath']
    },
    {
      id: '6',
      title: 'Honeymoon Suite',
      description: 'Romantic suite with special amenities and stunning views, perfect for couples celebrating special moments.',
      price: 6500,
      capacity: 2,
      size: '45 sq m',
      bed_type: 'King Size',
      image_url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
      amenities: ['WiFi', 'TV', 'Private Bath', 'Coffee', 'Balcony', 'Valley View', 'Mini Bar']
    }
  ];

  // Authentication functions
  const handleSignIn = async (email: string, password: string, rememberMe: boolean): Promise<void> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Demo authentication logic
    if (email === 'guest@bangsagokma.com' && password === 'password123') {
      const user: User = {
        id: '1',
        name: 'Guest User',
        email: email
      };
      
      setUser(user);
      
      // Store in localStorage if remember me is checked
      if (rememberMe) {
        localStorage.setItem('bangsagokma_user', JSON.stringify(user));
      }
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const handleSignOut = () => {
    setUser(null);
    localStorage.removeItem('bangsagokma_user');
    setIsMenuOpen(false);
    // Scroll to top/home
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  useEffect(() => {
    // Check for stored user on app load
    const storedUser = localStorage.getItem('bangsagokma_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        localStorage.removeItem('bangsagokma_user');
      }
    }

    // Set sample rooms
    setRooms(sampleRooms);

    const handleScroll = () => {
      const sections = ['home', 'about', 'rooms', 'location', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = (room: RoomType) => {
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    
    setSelectedRoom(room);
    const bookingMessage = `Hello ${user.name}! Booking initiated for ${room.title} - ₹${room.price}/night`;
    alert(bookingMessage);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="fixed top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-10 rounded-full blur-3xl pointer-events-none z-0"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="fixed bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-blue-200 to-purple-200 opacity-10 rounded-full blur-3xl pointer-events-none z-0"
      />

      <Toaster position="top-center" />

      {/* Authentication Modal */}
      <SignInModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSignIn={handleSignIn}
      />

      {/* Hero Section */}
      <Hero 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
        user={user}
        setIsAuthModalOpen={setIsAuthModalOpen}
        handleSignOut={handleSignOut}
      />
      
      <About />
      
      {/* Enhanced Features Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 md:px-8 relative z-10"
      >
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
              className={`absolute w-2 h-2 bg-yellow-400 rounded-full opacity-30`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Enhanced Section Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-yellow-600 bg-clip-text text-transparent mb-4"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(251, 191, 36, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              Why Choose Bangsa Gokma
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Experience the perfect blend of comfort, adventure, and authentic Ladakhi hospitality
            </motion.p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <FeatureCard 
              icon={<BedDouble />} 
              title="Comfortable Rooms" 
              description="Clean, spacious rooms with modern amenities and traditional touches"
              delay={0}
            />
            <FeatureCard 
              icon={<Wifi />} 
              title="Free Wi-Fi" 
              description="Stay connected with high-speed internet throughout the property"
              delay={0.1}
            />
            <FeatureCard 
              icon={<Utensils />} 
              title="Local Cuisine" 
              description="Authentic Ladakhi dining experience with fresh, local ingredients"
              delay={0.2}
            />
            <FeatureCard 
              icon={<Mountain />} 
              title="Valley Views" 
              description="Breathtaking panoramic views of the majestic Nubra Valley"
              delay={0.3}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Rooms Section */}
      <motion.section 
        id="rooms"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="py-16 px-4 md:px-8 bg-white relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Our Rooms & Suites
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Choose from our selection of comfortable and well-appointed rooms, each designed to make your stay memorable
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group"
              >
                <Room
                  room={room}
                  onBookNow={() => handleBooking(room)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Use the new Location component */}
      <Location />
      
      <Contact />

      {/* Enhanced Footer */}
      <motion.footer 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-4 md:px-8 relative overflow-hidden"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + (i % 4),
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Bangsa Gokma
            </motion.h3>
            <motion.p 
              className="text-gray-300 leading-relaxed"
              whileHover={{ color: "#F3F4F6" }}
              transition={{ duration: 0.2 }}
            >
              Your gateway to the enchanting Nubra Valley. Experience authentic Ladakhi hospitality amidst breathtaking landscapes.
            </motion.p>
            
            {/* Social media icons with enhanced animations */}
            <motion.div 
              className="flex gap-4 mt-6"
              variants={containerVariants}
            >
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <motion.div
                  key={social}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    backgroundColor: "#F59E0B"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300"
                >
                  <span className="text-sm font-bold">{social[0].toUpperCase()}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-6"
              whileHover={{ x: 5, color: "#F59E0B" }}
              transition={{ duration: 0.2 }}
            >
              Quick Links
            </motion.h3>
            <div className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Rooms', href: '#rooms' },
                { name: 'Location', href: '#location' },
                { name: 'Contact', href: '#contact' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Reviews', href: '#reviews' }
              ].map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 10, 
                    color: "#FCD34D",
                    textShadow: "0 0 8px rgba(252, 211, 77, 0.5)"
                  }}
                  className="block text-gray-300 hover:text-yellow-400 transition-all duration-300 cursor-pointer"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-xl font-bold mb-6"
              whileHover={{ x: 5, color: "#F59E0B" }}
              transition={{ duration: 0.2 }}
            >
              Contact Information
            </motion.h3>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+91 1234567890", type: "tel" },
                { icon: Mail, text: "info@bangsagokma.com", type: "email" },
                { icon: MapPin, text: "Sumoor Nubra, Leh Ladakh", type: "address" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ 
                      x: 10,
                      color: "#F59E0B"
                    }}
                    className="flex items-center gap-3 text-gray-300 cursor-pointer transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ 
                        rotate: 5,
                        scale: 1.1
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={18} />
                    </motion.div>
                    <span>{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Newsletter subscription */}
            <motion.div
              variants={itemVariants}
              className="mt-6"
            >
              <h4 className="font-semibold mb-3 text-gray-200">Stay Updated</h4>
              <div className="flex gap-2">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#D97706"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 rounded-lg font-medium transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-700 mt-12 pt-8 text-center relative z-10"
        >
          <motion.p 
            className="text-gray-400"
            whileHover={{ color: "#D1D5DB" }}
            transition={{ duration: 0.2 }}
          >
            © 2024 Bangsa Gokma Guest House. All rights reserved. Made with ❤️ in Nubra Valley.
          </motion.p>
        </motion.div>
      </motion.footer>
    </div>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay?: number;
}) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: {
      scale: 1.05,
      y: -15,
      rotateX: 5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: delay + 0.3
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      color: "#F59E0B",
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-lg text-center group cursor-pointer relative overflow-hidden"
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div 
        variants={iconVariants}
        className="w-16 h-16 mx-auto mb-6 text-yellow-500 relative z-10"
      >
        {icon}
      </motion.div>
      
      <motion.h3 
        className="text-xl font-semibold mb-4 relative z-10"
        whileHover={{ color: "#F59E0B" }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-600 leading-relaxed relative z-10"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1, color: "#374151" }}
        transition={{ duration: 0.2 }}
      >
        {description}
      </motion.p>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}

export default App;