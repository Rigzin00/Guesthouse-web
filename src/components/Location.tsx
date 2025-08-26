import React, { useState } from 'react';
import { motion} from 'framer-motion';
import { MapPin, Phone, Mail, Car, Clock, Mountain, Navigation, Camera, TreePine, Building } from 'lucide-react';

const Location: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('location');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconHoverVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  const textHoverVariants = {
    hover: {
      x: 10,
      color: "#F59E0B",
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const tabVariants = {
    inactive: {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "#9CA3AF"
    },
    active: {
      scale: 1.05,
      backgroundColor: "#F59E0B",
      color: "#FFFFFF",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Skayil Gokma, Sumoor Nubra, Leh Ladakh, 194401, India",
      delay: 0
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 1234567890",
      delay: 0.1
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@bangsagokma.com",
      delay: 0.2
    },
    {
      icon: Car,
      label: "Distance",
      value: "5 minutes from Sumur sand dunes",
      delay: 0.3
    },
    {
      icon: Clock,
      label: "Check-in",
      value: "2:00 PM - 11:00 PM",
      delay: 0.4
    },
    {
      icon: Mountain,
      label: "Altitude",
      value: "10,000 feet above sea level",
      delay: 0.5
    }
  ];

  const nearbyAttractions = [
    {
      name: "Sumur Sand Dunes",
      distance: "5 minutes walk",
      description: "Experience camel rides on the cold desert",
      icon: Mountain
    },
    {
      name: "Diskit Monastery",
      distance: "15 minutes drive",
      description: "Ancient Buddhist monastery with giant Buddha statue",
      icon: Building
    },
    {
      name: "Hunder Village",
      distance: "20 minutes drive",
      description: "Traditional Ladakhi village with stunning landscapes",
      icon: TreePine
    },
    {
      name: "Khardung La Pass",
      distance: "2 hours drive",
      description: "World's highest motorable road at 18,379 feet",
      icon: Mountain
    }
  ];

  const directions = [
    "Fly to Leh Airport (Kushok Bakula Rimpochee Airport)",
    "Take a taxi or bus to Nubra Valley via Khardung La Pass",
    "Drive through Khalsar and continue to Sumoor",
    "Look for Bangsa Gokma signboards near Skayil Gokma",
    "Call us for exact directions: +91 1234567890"
  ];

  return (
    <motion.section 
      id="location"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 py-16 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 opacity-20 rounded-full blur-xl"
      />
      
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-10 w-24 h-24 bg-blue-200 opacity-20 rounded-full blur-xl"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            Find Us in Paradise
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Nestled in the heart of Nubra Valley, surrounded by majestic mountains and endless beauty
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
            {[
              { id: 'location', label: 'Location', icon: MapPin },
              { id: 'attractions', label: 'Attractions', icon: Camera },
              { id: 'directions', label: 'Directions', icon: Navigation }
            ].map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                variants={tabVariants}
                animate={selectedTab === id ? 'active' : 'inactive'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTab(id)}
                className="px-6 py-3 rounded-full mx-1 font-medium flex items-center gap-2 transition-colors duration-300"
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content based on selected tab */}
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {selectedTab === 'location' && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.h3 
                  className="text-2xl font-bold text-gray-800 mb-6"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Contact Information
                </motion.h3>
                
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        variants={cardHoverVariants}
                        whileHover="hover"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: item.delay, duration: 0.5 }}
                        className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
                      >
                        <motion.div 
                          variants={textHoverVariants}
                          whileHover="hover"
                          className="flex items-start gap-4 cursor-pointer"
                        >
                          <motion.div
                            variants={iconHoverVariants}
                            whileHover="hover"
                            className="flex-shrink-0"
                          >
                            <Icon className="text-yellow-500 w-6 h-6" />
                          </motion.div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{item.label}</h4>
                            <p className="text-gray-600">{item.value}</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Map/Image */}
              <motion.div
                variants={itemVariants}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <motion.img 
                    src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80"
                    alt="Nubra Valley Location"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay with location pin animation */}
                  <motion.div
                    className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="bg-yellow-500 p-4 rounded-full shadow-lg"
                    >
                      <MapPin className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Floating info card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <Mountain className="text-yellow-500 w-5 h-5" />
                    <div>
                      <p className="font-semibold text-sm text-gray-800">Nubra Valley</p>
                      <p className="text-xs text-gray-600">Cold Desert</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}

          {selectedTab === 'attractions' && (
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {nearbyAttractions.map((attraction, index) => {
                const AttractionIcon = attraction.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardHoverVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div
                        variants={iconHoverVariants}
                        whileHover="hover"
                        className="flex-shrink-0 p-3 bg-yellow-100 rounded-full"
                      >
                        <AttractionIcon className="text-yellow-600 w-6 h-6" />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h4 
                          className="text-xl font-bold text-gray-800 mb-2"
                          whileHover={{ color: "#F59E0B" }}
                          transition={{ duration: 0.2 }}
                        >
                          {attraction.name}
                        </motion.h4>
                        <motion.p 
                          className="text-yellow-600 font-medium mb-3 flex items-center gap-2"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Car size={16} />
                          {attraction.distance}
                        </motion.p>
                        <p className="text-gray-600">{attraction.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {selectedTab === 'directions' && (
            <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-8 text-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                How to Reach Us
              </motion.h3>
              
              <div className="space-y-4">
                {directions.map((direction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 flex items-center gap-4"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                      className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    >
                      {index + 1}
                    </motion.div>
                    <p className="text-gray-700">{direction}</p>
                  </motion.div>
                ))}
              </div>

              {/* Call to action */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="text-center mt-8"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Need Help? Call Us Now
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Location;