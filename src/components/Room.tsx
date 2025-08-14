import React from 'react';
import { motion } from 'framer-motion';
import { Users, Wifi, Tv, Coffee, Bath } from 'lucide-react';

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
        return <Wifi className="w-4 h-4" />;
      case 'tv':
        return <Tv className="w-4 h-4" />;
      case 'coffee':
        return <Coffee className="w-4 h-4" />;
      case 'bath':
      case 'private bath':
        return <Bath className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Room Image */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative h-48 md:h-64 overflow-hidden"
      >
        <img 
          src={room.image_url} 
          alt={room.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold shadow-lg"
        >
          ₹{room.price}/night
        </motion.div>
      </motion.div>

      {/* Room Details */}
      <div className="p-6">
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xl font-semibold mb-2 text-gray-800"
        >
          {room.title}
        </motion.h3>

        {/* Room Info */}
        <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Users className="w-4 h-4 text-gray-500 mr-2" />
            <span>Up to {room.capacity} guests</span>
          </div>
          {room.size && (
            <div className="flex items-center">
              <span className="w-4 h-4 mr-2">📏</span>
              <span>{room.size}</span>
            </div>
          )}
          {room.bed_type && (
            <div className="flex items-center">
              <span className="w-4 h-4 mr-2">🛏️</span>
              <span>{room.bed_type}</span>
            </div>
          )}
        </div>

        {/* Room Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-4 text-sm leading-relaxed"
        >
          {room.description}
        </motion.p>

        {/* Amenities */}
        {room.amenities && room.amenities.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Amenities:</h4>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-700"
                >
                  {getAmenityIcon(amenity)}
                  <span>{amenity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Book Now Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBookNow}
          className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium text-sm"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Room;