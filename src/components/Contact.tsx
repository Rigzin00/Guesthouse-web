import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  User, 
  MessageSquare, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Star,
  Award,
  Shield,
  Zap
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  roomType: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const [focusedField, setFocusedField] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission with realistic delay
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '1',
        roomType: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Prime Location",
      subtitle: "Nubra Valley Gateway",
      details: ["Skayil Gokma, Sumoor Nubra", "Leh Ladakh, 194401, India"],
      color: "from-blue-500 to-blue-600",
      hoverColor: "group-hover:from-blue-600 group-hover:to-blue-700"
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "24/7 Support",
      subtitle: "Always Available",
      details: ["+91 1234567890", "+91 9876543210"],
      color: "from-green-500 to-green-600",
      hoverColor: "group-hover:from-green-600 group-hover:to-green-700"
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Quick Response",
      subtitle: "Professional Service",
      details: ["info@bangsagokma.com", "reservations@bangsagokma.com"],
      color: "from-yellow-500 to-orange-500",
      hoverColor: "group-hover:from-yellow-600 group-hover:to-orange-600"
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Flexible Timing",
      subtitle: "Guest Convenience",
      details: ["Check-in: 2:00 PM", "Check-out: 11:00 AM"],
      color: "from-purple-500 to-indigo-600",
      hoverColor: "group-hover:from-purple-600 group-hover:to-indigo-700"
    }
  ];

  const trustIndicators = [
    { icon: <Star className="w-5 h-5" />, text: "4.8/5 Guest Rating" },
    { icon: <Award className="w-5 h-5" />, text: "Tourism Award Winner" },
    { icon: <Shield className="w-5 h-5" />, text: "Verified & Secure" },
    { icon: <Zap className="w-5 h-5" />, text: "Instant Confirmation" }
  ];

  const roomTypes = [
    "Deluxe Double Room",
    "Family Suite", 
    "Standard Single Room",
    "Premium Valley View",
    "Budget Twin Room",
    "Honeymoon Suite"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section id="contact" className="relative py-20 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-yellow-200/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -150, 0],
            y: [0, 100, 0],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-48 h-48 bg-blue-200/20 rounded-full blur-xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6"
          >
            Let's Start Your Journey
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Experience unparalleled hospitality in the heart of Nubra Valley. Our dedicated team is ready to craft 
            your perfect Ladakhi adventure with personalized service and attention to every detail.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={indicator.text}
                variants={itemVariants}
                className="flex items-center gap-2 text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
              >
                <span className="text-yellow-500">{indicator.icon}</span>
                {indicator.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="grid xl:grid-cols-5 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="xl:col-span-2 space-y-8"
          >
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              >
                Connect With Excellence
              </motion.h3>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    variants={cardVariants}
                    whileHover="hover"
                    className="group relative bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${info.color} ${info.hoverColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl">
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`} />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className={`p-3 rounded-xl bg-gradient-to-r ${info.color} text-white shadow-lg`}
                        >
                          {info.icon}
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900 group-hover:text-gray-800 transition-colors">{info.title}</h4>
                          <p className="text-sm text-gray-500 mb-3">{info.subtitle}</p>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <motion.p 
                                key={idx} 
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                                className="text-gray-700 text-sm font-medium hover:text-gray-900 transition-colors cursor-pointer"
                              >
                                {detail}
                              </motion.p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
{/* Interactive Map Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-2xl shadow-xl overflow-hidden group"
            >
              {/* Map Container */}
              <div className="relative aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d779.0689748311!2d77.6245507!3d34.621886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fdea8c8c8c8c8d%3A0x1234567890abcdef!2s34%C2%B037'18.8%22N%2077%C2%B037'31.7%22E!5e0!3m2!1sen!2sin!4v1693847820000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: '1rem' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter brightness-95 hover:brightness-100 transition-all duration-300"
                />
                
                {/* Overlay with location info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none">
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-lg text-white"
                      >
                        <MapPin className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900">Bangsa Gokma Resort</h4>
                        <p className="text-xs text-gray-600">Nubra Valley, Ladakh</p>
                        <p className="text-xs text-gray-500">34°37'18.8"N 77°37'31.7"E</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Directions Button */}
                  <motion.a
                    href="https://www.google.com/maps/place/34%C2%B037'18.8%22N+77%C2%B037'31.7%22E/@34.621886,77.6245507,310m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d34.621886!4d77.625474?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg text-sm flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    Get Directions
                  </motion.a>
                </div>
                
                {/* Animated corner elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-2 left-2 w-2 h-2 bg-blue-500 rounded-full opacity-60"
                />
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-2 right-12 w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-40"
                />
              </div>
              
              {/* Location Details Footer */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-t">
                <div className="flex justify-between items-center text-xs text-gray-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Exact GPS Location
                  </span>
                  <span>📍 Click map to explore</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="xl:col-span-3 relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full -translate-y-20 translate-x-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/20 to-purple-500/20 rounded-full translate-y-16 -translate-x-16" />
              
              <div className="relative z-10">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
                >
                  Reserve Your Experience
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-gray-600 mb-8"
                >
                  Fill out the form below and we'll get back to you within 2 hours with a personalized offer.
                </motion.p>
                
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -20 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`mb-6 p-5 rounded-2xl flex items-center gap-4 ${
                        submitStatus === 'success' 
                          ? 'bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 border border-green-200' 
                          : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-800 border border-red-200'
                      } shadow-lg`}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.5 }}
                      >
                        {submitStatus === 'success' ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : (
                          <AlertCircle className="w-6 h-6" />
                        )}
                      </motion.div>
                      <div>
                        <p className="font-semibold">
                          {submitStatus === 'success' 
                            ? 'Message Sent Successfully!' 
                            : 'Failed to Send Message'}
                        </p>
                        <p className="text-sm opacity-80">
                          {submitStatus === 'success' 
                            ? 'Our team will contact you within 2 hours with exclusive offers.' 
                            : 'Please check your connection and try again.'}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-3">
                        Full Name *
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField('')}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Enter your full name"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-3">
                        Email Address *
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Enter your email address"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-3">
                        Phone Number
                      </label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField('')}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Enter your phone number"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === 'phone' ? '100%' : '0%' }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      <label htmlFor="guests" className="block text-sm font-bold text-gray-800 mb-3">
                        Number of Guests
                      </label>
                      <motion.select
                        whileFocus={{ scale: 1.02 }}
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('guests')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                        ))}
                      </motion.select>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'guests' ? '100%' : '0%' }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      <label htmlFor="checkIn" className="block text-sm font-bold text-gray-800 mb-3">
                        Check-in Date
                      </label>
                      <div className="relative group">
                        <Calendar className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          type="date"
                          id="checkIn"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('checkIn')}
                          onBlur={() => setFocusedField('')}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === 'checkIn' ? '100%' : '0%' }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="checkOut" className="block text-sm font-bold text-gray-800 mb-3">
                        Check-out Date
                      </label>
                      <div className="relative group">
                        <Calendar className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors" />
                        <motion.input
                          whileFocus={{ scale: 1.02 }}
                          type="date"
                          id="checkOut"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('checkOut')}
                          onBlur={() => setFocusedField('')}
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                        />
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: focusedField === 'checkOut' ? '100%' : '0%' }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <label htmlFor="roomType" className="block text-sm font-bold text-gray-800 mb-3">
                      Preferred Room Type
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.02 }}
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('roomType')}
                      onBlur={() => setFocusedField('')}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a room type</option>
                      {roomTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </motion.select>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'roomType' ? '100%' : '0%' }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-3">
                      Your Message *
                    </label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-yellow-500 transition-colors z-10" />
                      <motion.textarea
                        whileFocus={{ scale: 1.02 }}
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        required
                        rows={4}
                        className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                        placeholder="Share your travel plans, special requirements, dietary preferences, or any questions about your stay..."
                      />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="pt-4"
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ 
                        scale: isSubmitting ? 1 : 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                      }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full relative overflow-hidden bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 text-black font-bold py-5 px-8 rounded-2xl hover:from-yellow-400 hover:via-orange-400 hover:to-yellow-400 focus:ring-4 focus:ring-yellow-200 focus:ring-offset-2 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl disabled:hover:scale-100"
                    >
                      {/* Button Background Animation */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                        animate={{
                          x: isSubmitting ? [-100, 300] : [-300, -300]
                        }}
                        transition={{
                          duration: isSubmitting ? 1.5 : 0,
                          repeat: isSubmitting ? Infinity : 0,
                          ease: "linear"
                        }}
                      />
                      
                      <div className="relative z-10 flex items-center justify-center gap-3">
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="flex items-center gap-3"
                            >
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-6 h-6 border-3 border-black border-t-transparent rounded-full"
                              />
                              <span>Sending Your Message...</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="send"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="flex items-center gap-3"
                            >
                              <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <Send className="w-6 h-6" />
                              </motion.div>
                              <span>Send Message & Get Instant Quote</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.button>
                  </motion.div>
                </form>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="mt-8 pt-8 border-t border-gray-200"
                >
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                      <span className="font-medium">Typically responds within 2 hours</span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                      {[
                        { label: "Response Time", value: "< 2 hrs", icon: "⚡" },
                        { label: "Guest Rating", value: "4.9/5", icon: "⭐" },
                        { label: "Years Experience", value: "15+", icon: "🏆" },
                        { label: "Happy Guests", value: "2000+", icon: "😊" }
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.1 + (index * 0.1) }}
                          className="text-center p-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100"
                        >
                          <div className="text-lg mb-1">{stat.icon}</div>
                          <div className="font-bold text-gray-900 text-sm">{stat.value}</div>
                          <div className="text-xs text-gray-500">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.p 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5 }}
                      className="text-sm text-gray-600 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100"
                    >
                      <span className="font-semibold text-gray-800">🔒 Your Privacy Matters:</span> All information is encrypted and never shared with third parties. 
                      We use your details solely to provide personalized service and exclusive offers.
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(234, 179, 8, 0.7)",
              "0 0 0 20px rgba(234, 179, 8, 0)",
              "0 0 0 0 rgba(234, 179, 8, 0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-2xl hover:from-green-400 hover:to-green-500 transition-colors"
          title="Quick WhatsApp Contact"
        >
          <Phone className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Contact;