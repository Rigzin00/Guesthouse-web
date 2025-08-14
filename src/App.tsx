// import React, { useState, useEffect } from 'react';
// import { motion, useScroll, useAnimation, AnimatePresence } from 'framer-motion';
// import { BedDouble, MapPin, Phone, Mail, Utensils, Wifi, Car, Mountain, Users, Bath, Tv, Coffee } from 'lucide-react';
// import { Toaster } from 'react-hot-toast';
// import { supabase, type Room } from './lib/supabase';
// import { AuthModal } from './components/AuthModal';
// import { BookingModal } from './components/BookingModal';

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
//   const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
//   const [rooms, setRooms] = useState<Room[]>([]);
//   const [user, setUser] = useState(null);
//   const controls = useAnimation();
//   const { scrollY } = useScroll();

//   useEffect(() => {
//     // Fetch rooms
//     const fetchRooms = async () => {
//       const { data, error } = await supabase
//         .from('rooms')
//         .select('*');
      
//       if (error) {
//         console.error('Error fetching rooms:', error);
//         return;
//       }

//       setRooms(data);
//     };

//     fetchRooms();

//     // Subscribe to auth changes
//     const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
//       setUser(session?.user || null);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'rooms', 'location'];
//       sections.forEach(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
//             setActiveSection(section);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleBooking = (room: Room) => {
//     if (!user) {
//       setIsAuthModalOpen(true);
//       return;
//     }
//     setSelectedRoom(room);
//   };

//   const handleSignOut = async () => {
//     await supabase.auth.signOut();
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Toaster position="top-center" />
//       <AuthModal 
//         isOpen={isAuthModalOpen} 
//         onClose={() => setIsAuthModalOpen(false)} 
//       />
//       {selectedRoom && (
//         <BookingModal
//           isOpen={true}
//           onClose={() => setSelectedRoom(null)}
//           room={selectedRoom}
//         />
//       )}

//       {/* Hero Section */}
//       <header id="home" className="relative h-screen">
//         <motion.div 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0"
//         >
//           <img 
//             src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
//             alt="Bangsa Gokma Guest House"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/50" />
//         </motion.div>
        
//         <motion.nav 
//           initial={{ y: -100 }}
//           animate={{ y: 0 }}
//           transition={{ type: "spring", stiffness: 100 }}
//           className="relative z-20 flex items-center justify-between px-4 md:px-8 py-6"
//         >
//           <motion.h1 
//             whileHover={{ scale: 1.1 }}
//             className="text-2xl md:text-3xl font-bold text-white cursor-pointer"
//           >
//             Bangsa Gokma
//           </motion.h1>
//           <div className="flex items-center space-x-4">
//             {user ? (
//               <button
//                 onClick={handleSignOut}
//                 className="text-white hover:text-yellow-400 transition-colors"
//               >
//                 Sign Out
//               </button>
//             ) : (
//               <button
//                 onClick={() => setIsAuthModalOpen(true)}
//                 className="text-white hover:text-yellow-400 transition-colors"
//               >
//                 Sign In
//               </button>
//             )}
//             <button 
//               className="md:hidden text-white"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               <motion.svg 
//                 animate={{ rotate: isMenuOpen ? 180 : 0 }}
//                 className="w-6 h-6" 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//               </motion.svg>
//             </button>
//           </div>
//           <AnimatePresence>
//             {(isMenuOpen || window.innerWidth >= 768) && (
//               <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ type: "spring", stiffness: 100 }}
//                 className={`md:flex fixed md:relative top-20 md:top-0 left-0 md:left-auto w-full md:w-auto flex-col md:flex-row items-center bg-black/90 md:bg-transparent md:space-x-8 text-white py-4 md:py-0 space-y-4 md:space-y-0 z-50`}
//               >
//                 {['about', 'rooms', 'location', 'contact'].map((item) => (
//                   <motion.a
//                     key={item}
//                     href={`#${item}`}
//                     onClick={() => setIsMenuOpen(false)}
//                     whileHover={{ scale: 1.1, color: "#FCD34D" }}
//                     className={`transition-colors ${activeSection === item ? 'text-yellow-400' : 'text-white'}`}
//                   >
//                     {item.charAt(0).toUpperCase() + item.slice(1)}
//                   </motion.a>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </motion.nav>

//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 mt-[-4rem]"
//         >
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7 }}
//             className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6"
//           >
//             Welcome to Bangsa Gokma
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.9 }}
//             className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mb-8 px-4"
//           >
//             Experience the beauty of Nubra Valley at our peaceful guest house, located near the stunning Sumur sand dunes
//           </motion.p>
//           <motion.a 
//             href="#rooms"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-yellow-500 text-black px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-sm sm:text-base"
//           >
//             View Rooms
//           </motion.a>
//         </motion.div>
//       </header>

//       {/* Features */}
//       <motion.section 
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//         className="py-12 sm:py-16 px-4 md:px-8"
//       >
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//           <FeatureCard icon={<BedDouble />} title="Comfortable Rooms" description="Clean, spacious rooms with modern amenities" />
//           <FeatureCard icon={<Wifi />} title="Free Wi-Fi" description="Stay connected with high-speed internet" />
//           <FeatureCard icon={<Utensils />} title="Local Cuisine" description="Authentic Ladakhi dining experience" />
//           <FeatureCard icon={<Mountain />} title="Valley Views" description="Breathtaking views of Nubra Valley" />
//         </div>
//       </motion.section>

//       {/* Rooms Section */}
//       <motion.section 
//         id="rooms"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="py-12 sm:py-16 px-4 md:px-8 bg-white"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4"
//           >
//             Our Rooms
//           </motion.h2>
//           <motion.p 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4"
//           >
//             Choose from our selection of comfortable and well-appointed rooms, each designed to make your stay memorable
//           </motion.p>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//             {rooms.map((room) => (
//               <RoomCard
//                 key={room.id}
//                 room={room}
//                 onBookNow={() => handleBooking(room)}
//               />
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* Location */}
//       <motion.section 
//         id="location"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="bg-gray-50 py-12 sm:py-16 px-4 md:px-8"
//       >
//         <div className="max-w-6xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-2xl sm:text-3xl font-bold text-center mb-12"
//           >
//             Our Location
//           </motion.h2>
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="order-2 md:order-1"
//             >
//               <h3 className="text-xl font-semibold mb-4">Find Us Here</h3>
//               <div className="space-y-4">
//                 <motion.p 
//                   whileHover={{ x: 10 }}
//                   className="flex items-center gap-3"
//                 >
//                   <MapPin className="text-yellow-500 flex-shrink-0" />
//                   <span>Skayil Gokma, Sumoor Nubra, Leh Ladakh, 194401, India</span>
//                 </motion.p>
//                 <motion.p 
//                   whileHover={{ x: 10 }}
//                   className="flex items-center gap-3"
//                 >
//                   <Phone className="text-yellow-500 flex-shrink-0" />
//                   <span>+91 1234567890</span>
//                 </motion.p>
//                 <motion.p 
//                   whileHover={{ x: 10 }}
//                   className="flex items-center gap-3"
//                 >
//                   <Mail className="text-yellow-500 flex-shrink-0" />
//                   <span>info@bangsagokma.com</span>
//                 </motion.p>
//                 <motion.p 
//                   whileHover={{ x: 10 }}
//                   className="flex items-center gap-3"
//                 >
//                   <Car className="text-yellow-500 flex-shrink-0" />
//                   <span>5 minutes from Sumur sand dunes</span>
//                 </motion.p>
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="aspect-video rounded-lg overflow-hidden shadow-lg order-1 md:order-2"
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80"
//                 alt="Nubra Valley"
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer 
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="bg-gray-900 text-white py-12 px-4 md:px-8"
//       >
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-xl font-bold mb-4">Bangsa Gokma</h3>
//             <p className="text-gray-400">Your home away from home in the beautiful Nubra Valley</p>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <div className="space-y-2">
//               {['about', 'rooms', 'location', 'contact'].map((item) => (
//                 <motion.a
//                   key={item}
//                   href={`#${item}`}
//                   whileHover={{ x: 10, color: "#FCD34D" }}
//                   className="block text-gray-400 hover:text-white"
//                 >
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//           >
//             <h3 className="text-xl font-bold mb-4">Contact Us</h3>
//             <div className="space-y-2 text-gray-400">
//               <motion.p whileHover={{ x: 10 }}>Phone: +91 1234567890</motion.p>
//               <motion.p whileHover={{ x: 10 }}>Email: info@bangsagokma.com</motion.p>
//               <motion.p whileHover={{ x: 10 }}>Sumoor Nubra, Leh Ladakh</motion.p>
//             </div>
//           </motion.div>
//         </div>
//       </motion.footer>
//     </div>
//   );
// }

// function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ scale: 1.05 }}
//       className="bg-white p-6 rounded-lg shadow-lg text-center"
//     >
//       <motion.div 
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ type: "spring", stiffness: 200 }}
//         className="w-12 h-12 mx-auto mb-4 text-yellow-500"
//       >
//         {icon}
//       </motion.div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </motion.div>
//   );
// }

// function RoomCard({ room, onBookNow }: { room: Room; onBookNow: () => void }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -10 }}
//       className="bg-white rounded-lg shadow-lg overflow-hidden"
//     >
//       <motion.div 
//         initial={{ scale: 1.2 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="relative h-48 md:h-64"
//       >
//         <img 
//           src={room.image_url} 
//           alt={room.title} 
//           className="w-full h-full object-cover"
//           loading="lazy"
//         />
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//           className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold"
//         >
//           ₹{room.price}/night
//         </motion.div>
//       </motion.div>
//       <div className="p-6">
//         <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
//         <div className="flex items-center mb-4">
//           <Users className="w-5 h-5 text-gray-500 mr-2" />
//           <span className="text-gray-600">Up to {room.capacity} guests</span>
//         </div>
//         <p className="text-gray-600 mb-4">{room.description}</p>
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={onBookNow}
//           className="w-full mt-6 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
//         >
//           Book Now
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useAnimation, AnimatePresence } from 'framer-motion';
import { BedDouble, MapPin, Phone, Mail, Utensils, Wifi, Car, Mountain, Users, Bath, Tv, Coffee } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { supabase } from './lib/supabase';
import { AuthModal } from './components/AuthModal';
import { BookingModal } from './components/BookingModal';
import Room, { Room as RoomType } from './components/Room';
import About from './components/About';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [rooms, setRooms] = useState<RoomType[]>([]);
  const [user, setUser] = useState(null);
  const controls = useAnimation();
  const { scrollY } = useScroll();

  useEffect(() => {
    // Fetch rooms
    const fetchRooms = async () => {
      const { data, error } = await supabase
        .from('rooms')
        .select('*');
      
      if (error) {
        console.error('Error fetching rooms:', error);
        // Fallback to sample data for demo purposes
        setRooms(sampleRooms);
        return;
      }

      setRooms(data);
    };

    fetchRooms();

    // Subscribe to auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'rooms', 'location'];
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
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  // Sample room data for demo purposes
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
      {selectedRoom && (
        <BookingModal
          isOpen={true}
          onClose={() => setSelectedRoom(null)}
          room={selectedRoom}
        />
      )}

      {/* Hero Section */}
      <header id="home" className="relative h-screen">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80"
            alt="Bangsa Gokma Guest House"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative z-20 flex items-center justify-between px-4 md:px-8 py-6"
        >
          <motion.h1 
            whileHover={{ scale: 1.1 }}
            className="text-2xl md:text-3xl font-bold text-white cursor-pointer"
          >
            Bangsa Gokma
          </motion.h1>
          <div className="flex items-center space-x-4">
            {user ? (
              <button
                onClick={handleSignOut}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                Sign In
              </button>
            )}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.svg 
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </motion.svg>
            </button>
          </div>
          <AnimatePresence>
            {(isMenuOpen || window.innerWidth >= 768) && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 100 }}
                className={`md:flex fixed md:relative top-20 md:top-0 left-0 md:left-auto w-full md:w-auto flex-col md:flex-row items-center bg-black/90 md:bg-transparent md:space-x-8 text-white py-4 md:py-0 space-y-4 md:space-y-0 z-50`}
              >
                {['about', 'rooms', 'location', 'contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.1, color: "#FCD34D" }}
                    className={`transition-colors ${activeSection === item ? 'text-yellow-400' : 'text-white'}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

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
      <About />
      {/* Features */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-12 sm:py-16 px-4 md:px-8"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <FeatureCard icon={<BedDouble />} title="Comfortable Rooms" description="Clean, spacious rooms with modern amenities" />
          <FeatureCard icon={<Wifi />} title="Free Wi-Fi" description="Stay connected with high-speed internet" />
          <FeatureCard icon={<Utensils />} title="Local Cuisine" description="Authentic Ladakhi dining experience" />
          <FeatureCard icon={<Mountain />} title="Valley Views" description="Breathtaking views of Nubra Valley" />
        </div>
      </motion.section>

      {/* Rooms Section */}
      <motion.section 
        id="rooms"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 px-4 md:px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Our Rooms
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4"
          >
            Choose from our selection of comfortable and well-appointed rooms, each designed to make your stay memorable
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Room
                  room={room}
                  onBookNow={() => handleBooking(room)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      

      {/* Location */}
      <motion.section 
        id="location"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-12 sm:py-16 px-4 md:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-center mb-12"
          >
            Our Location
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <h3 className="text-xl font-semibold mb-4">Find Us Here</h3>
              <div className="space-y-4">
                <motion.p 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3"
                >
                  <MapPin className="text-yellow-500 flex-shrink-0" />
                  <span>Skayil Gokma, Sumoor Nubra, Leh Ladakh, 194401, India</span>
                </motion.p>
                <motion.p 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3"
                >
                  <Phone className="text-yellow-500 flex-shrink-0" />
                  <span>+91 1234567890</span>
                </motion.p>
                <motion.p 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3"
                >
                  <Mail className="text-yellow-500 flex-shrink-0" />
                  <span>info@bangsagokma.com</span>
                </motion.p>
                <motion.p 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-3"
                >
                  <Car className="text-yellow-500 flex-shrink-0" />
                  <span>5 minutes from Sumur sand dunes</span>
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video rounded-lg overflow-hidden shadow-lg order-1 md:order-2"
            >
              <img 
                src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80"
                alt="Nubra Valley"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-12 px-4 md:px-8"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Bangsa Gokma</h3>
            <p className="text-gray-400">Your home away from home in the beautiful Nubra Valley</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['about', 'rooms', 'location', 'contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  whileHover={{ x: 10, color: "#FCD34D" }}
                  className="block text-gray-400 hover:text-white"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <motion.p whileHover={{ x: 10 }}>Phone: +91 1234567890</motion.p>
              <motion.p whileHover={{ x: 10 }}>Email: info@bangsagokma.com</motion.p>
              <motion.p whileHover={{ x: 10 }}>Sumoor Nubra, Leh Ladakh</motion.p>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-lg text-center"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="w-12 h-12 mx-auto mb-4 text-yellow-500"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default App;