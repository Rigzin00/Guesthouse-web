import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Mountain, Users, Award, MapPin, Clock, Utensils, Home } from 'lucide-react';

const About: React.FC = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Animation variants for stats
  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }),
    hover: {
      scale: 1.05,
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  // Animation variants for feature cards
  const featureVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }),
    hover: {
      x: 10,
      transition: { duration: 0.2 }
    }
  };

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Guests" },
    { icon: <Award className="w-6 h-6" />, value: "5", label: "Years Experience" },
    { icon: <Mountain className="w-6 h-6" />, value: "4.8", label: "Rating" },
    { icon: <Home className="w-6 h-6" />, value: "12", label: "Rooms Available" }
  ];

  const features = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Prime Location",
      description: "Located in the heart of Nubra Valley, just 5 minutes from the famous Sumur sand dunes."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Service",
      description: "Round-the-clock assistance to ensure your stay is comfortable and memorable."
    },
    {
      icon: <Utensils className="w-5 h-5" />,
      title: "Authentic Cuisine",
      description: "Experience the rich flavors of traditional Ladakhi cuisine prepared with local ingredients."
    },
    {
      icon: <Mountain className="w-5 h-5" />,
      title: "Adventure Gateway",
      description: "Perfect base for exploring monasteries, trekking routes, and the stunning Himalayan landscape."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 bg-yellow-100 px-4 py-2 rounded-full mb-6"
          >
            <Heart className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-700 font-medium text-sm">About Our Guest House</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Bangsa Gokma
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Your gateway to the breathtaking beauty of Nubra Valley, where traditional Ladakhi hospitality meets modern comfort
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="order-2 lg:order-1"
          >
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6"
            >
              Our Story
            </motion.h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                Nestled in the enchanting Nubra Valley, Bangsa Gokma Guest House has been welcoming travelers 
                from around the world since 2019. Our name, which means "Happy Valley" in the local Ladakhi language, 
                reflects our commitment to bringing joy and comfort to every guest who walks through our doors.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Located in the picturesque village of Skayil Gokma, just minutes away from the famous Sumur sand dunes, 
                we offer an authentic Ladakhi experience while providing all modern amenities. Our family-run guest house 
                combines traditional architecture with contemporary comfort, creating a unique atmosphere that feels like home.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Whether you're seeking adventure in the high-altitude desert, spiritual solace in ancient monasteries, 
                or simply a peaceful retreat surrounded by majestic mountains, Bangsa Gokma serves as your perfect base 
                to explore the wonders of Ladakh.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200"
            >
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Promise</h4>
                  <p className="text-gray-700 text-sm">
                    We promise to provide you with warm hospitality, comfortable accommodations, and unforgettable 
                    memories that will last a lifetime. Your comfort and satisfaction are our top priorities.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80"
                alt="Bangsa Gokma Guest House"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-900">Nubra Valley, Ladakh</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statVariants}
                custom={index}
                whileHover="hover"
                className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100 cursor-default"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="w-12 h-12 mx-auto mb-3 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-2xl font-bold text-gray-900 mb-1"
                >
                  {stat.value}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-sm text-gray-600"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Why Choose Bangsa Gokma?
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                custom={index}
                whileHover="hover"
                className="flex gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 flex-shrink-0"
                >
                  {feature.icon}
                </motion.div>
                <div>
                  <motion.h4
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-lg font-semibold text-gray-900 mb-2"
                  >
                    {feature.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-gray-600 text-sm leading-relaxed"
                  >
                    {feature.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#rooms"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Explore Our Rooms
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;