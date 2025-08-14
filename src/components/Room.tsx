import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wifi, Tv, Coffee, Bath, Star, MapPin, Calendar } from 'lucide-react';

export interface Room {
  id: string;
  title: string;
  description: string;
  price: number;
  capacity: number;
  image_url: string;
  amenities?: string[];
  size?: string;
  bed_type?: string;
}

interface RoomProps {
  room: Room;
  onBookNow: () => void;
}

const Room: React.FC<RoomProps> = ({ room, onBookNow }) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="w-3 h-3" />;
      case 'tv':
        return <Tv className="w-3 h-3" />;
      case 'coffee':
        return <Coffee className="w-3 h-3" />;
      case 'bath':
      case 'private bath':
        return <Bath className="w-3 h-3" />;
      case 'balcony':
        return <MapPin className="w-3 h-3" />;
      case 'valley view':
        return <Star className="w-3 h-3" />;
      case 'mini fridge':
      case 'mini bar':
        return <Coffee className="w-3 h-3" />;
      default:
        return <Star className="w-3 h-3" />;
    }
  };

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: { 
      y: -12, 
      scale: 1.02,
      transition: { 
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: { 
      scale: 1.08,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Animation variants for content sections
  const contentVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  // Animation variants for amenities
  const amenityVariants = {
    hidden: { opacity: 0, scale: 0.8, x: -10 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: 0.6 + index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }),
    hover: {
      scale: 1.05,
      backgroundColor: "#FEF3C7",
      transition: { duration: 0.2 }
    }
  };

  // Animation variants for button
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.4,
        delay: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hover: { 
      scale: 1.02, 
      backgroundColor: "#374151",
      boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { 
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform-gpu group"
    >
      {/* Room Image Container */}
      <div className="relative h-48 md:h-64 overflow-hidden bg-gray-100">
        <motion.img
          variants={imageVariants}
          src={room.image_url}
          alt={room.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Image Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Price Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.05 }}
          className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-2 rounded-xl font-bold shadow-lg backdrop-blur-sm border border-yellow-400"
        >
          <div className="flex items-center gap-1">
            <span className="text-xs">₹</span>
            <span className="text-sm">{room.price.toLocaleString()}</span>
            <span className="text-xs opacity-80">/night</span>
          </div>
        </motion.div>

        {/* Floating Info Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg shadow-md"
        >
          <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
            <Users className="w-3 h-3" />
            <span>{room.capacity} guests</span>
          </div>
        </motion.div>
      </div>

      {/* Room Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Room Title */}
        <motion.h3
          variants={contentVariants}
          custom={0.1}
          className="text-xl font-bold mb-3 text-gray-800 line-clamp-2"
        >
          {room.title}
        </motion.h3>

        {/* Room Specifications */}
        <motion.div
          variants={contentVariants}
          custom={0.2}
          className="flex flex-wrap items-center gap-3 mb-4"
        >
          {room.size && (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-lg text-xs font-medium text-gray-600 border border-gray-200"
            >
              <span>📏</span>
              <span>{room.size}</span>
            </motion.div>
          )}
          {room.bed_type && (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-lg text-xs font-medium text-gray-600 border border-gray-200"
            >
              <span>🛏️</span>
              <span>{room.bed_type}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Room Description */}
        <motion.p
          variants={contentVariants}
          custom={0.3}
          className="text-gray-600 mb-5 text-sm leading-relaxed line-clamp-3 flex-grow"
        >
          {room.description}
        </motion.p>

        {/* Amenities Section */}
        {room.amenities && room.amenities.length > 0 && (
          <motion.div
            variants={contentVariants}
            custom={0.4}
            className="mb-6"
          >
            <motion.h4 
              className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2"
            >
              <Star className="w-4 h-4 text-yellow-500" />
              Amenities
            </motion.h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.slice(0, 6).map((amenity, index) => (
                <motion.div
                  key={index}
                  variants={amenityVariants}
                  custom={index}
                  whileHover="hover"
                  className="flex items-center gap-1.5 bg-gray-100 hover:bg-yellow-50 px-3 py-1.5 rounded-lg text-xs font-medium text-gray-700 border border-gray-200 hover:border-yellow-200 cursor-default transition-all duration-200"
                >
                  {getAmenityIcon(amenity)}
                  <span>{amenity}</span>
                </motion.div>
              ))}
              {room.amenities.length > 6 && (
                <motion.div
                  variants={amenityVariants}
                  custom={6}
                  className="flex items-center gap-1 bg-yellow-100 px-3 py-1.5 rounded-lg text-xs font-medium text-yellow-800 border border-yellow-200"
                >
                  <span>+{room.amenities.length - 6} more</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {/* Book Now Button */}
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          onClick={onBookNow}
          className="w-full bg-gray-900 text-white py-3.5 px-6 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 mt-auto flex items-center justify-center gap-2 group"
        >
          <Calendar className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
          <span>Book Now</span>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="text-lg"
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Room;