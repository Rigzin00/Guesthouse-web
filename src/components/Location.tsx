import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Car, Clock, Mountain, Navigation, Camera, TreePine, Building, Star, Award, Shield, Globe, Wifi, Coffee } from 'lucide-react';

const Location = () => {
  const [selectedTab, setSelectedTab] = useState('location');
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      label: "Premium Address",
      value: "Skayil Gokma, Sumoor Nubra Valley, Leh Ladakh 194401",
      subtext: "GPS: 34.8167° N, 77.6500° E",
      delay: 0,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "24/7 Concierge",
      value: "+91 9469 432 100",
      subtext: "Multilingual support available",
      delay: 0.1,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      label: "Reservations",
      value: "reservations@bangsagokma.com",
      subtext: "Response within 2 hours",
      delay: 0.2,
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Car,
      label: "Strategic Location",
      value: "5 minutes from Sumur Sand Dunes",
      subtext: "Private helipad available",
      delay: 0.3,
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      label: "Flexible Check-in",
      value: "2:00 PM - 11:00 PM",
      subtext: "Early check-in upon request",
      delay: 0.4,
      gradient: "from-yellow-500 to-amber-500"
    },
    {
      icon: Mountain,
      label: "Elevation Excellence",
      value: "10,000 feet above sea level",
      subtext: "Oxygen-enriched accommodations",
      delay: 0.5,
      gradient: "from-indigo-500 to-blue-500"
    }
  ];

  const nearbyAttractions = [
    {
      name: "Sumur Sand Dunes",
      distance: "5 minutes walk",
      description: "Experience the ethereal beauty of the world's highest cold desert at 10,000+ feet. Our exclusive partnership offers private dawn and dusk camel safaris on double-humped Bactrian camels across pristine white sand dunes, creating an otherworldly juxtaposition of desert and alpine landscapes beneath the towering Karakoram Range.",
      icon: Mountain,
      rating: 4.9,
      highlights: ["Private Safari Access", "Sunrise/Sunset Tours", "Photography Workshops"],
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      name: "Diskit Monastery",
      distance: "15 minutes drive",
      description: "Founded in 1420 CE, this magnificent Gelugpa monastery represents six centuries of unbroken Buddhist tradition. Home to Ladakh's largest Buddha statue at 106 feet, the monastery houses priceless 15th-century murals, ancient manuscripts, and offers exclusive early morning prayer ceremonies with panoramic valley vistas.",
      icon: Building,
      rating: 4.8,
      highlights: ["Private Monk Tours", "Ancient Manuscripts", "Sunrise Prayers"],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      name: "Panamik Hot Springs",
      distance: "10 minutes drive",
      description: "Natural therapeutic geothermal springs rich in sulfur and minerals, scientifically proven to treat arthritis, skin conditions, and respiratory ailments. Located at the sacred confluence of Nubra and Siachen rivers, these 45°C springs offer premium spa treatments amidst dramatic Himalayan scenery.",
      icon: TreePine,
      rating: 4.7,
      highlights: ["Therapeutic Benefits", "Spa Treatments", "Medical Consultation"],
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      name: "Ensa Monastery",
      distance: "8 minutes walk",
      description: "An intimate 15th-century Buddhist sanctuary housing the rarest collection of Tibetan artifacts in Nubra Valley. This hidden gem offers authentic monastic experiences, meditation sessions with resident lamas, and unparalleled panoramic views of the Siachen Glacier and Karakoram peaks.",
      icon: Building,
      rating: 4.9,
      highlights: ["Meditation Sessions", "Rare Artifacts", "Glacier Views"],
      gradient: "from-green-400 to-teal-500"
    },
    {
      name: "Siachen Base Camp",
      distance: "45 minutes drive",
      description: "Exclusive access to the world's highest battlefield at 18,875 feet. Our military liaison provides unprecedented insights into operations at extreme altitudes, complete with briefings on strategic importance while witnessing the majestic Siachen Glacier and the greater Karakoram massif through high-powered telescopes.",
      icon: Mountain,
      rating: 4.6,
      highlights: ["Military Briefings", "Telescope Access", "Strategic Insights"],
      gradient: "from-gray-400 to-slate-500"
    },
    {
      name: "Yarab Tso Sacred Lake",
      distance: "3 hours premium trek",
      description: "A mystical high-altitude lake at 14,982 feet, revered by both Buddhist and Islamic traditions. This pristine alpine sanctuary, fed by ancient glacial melt, offers guided spiritual treks through diverse ecosystems, traditional Balti villages, and encounters with rare Himalayan wildlife including snow leopards.",
      icon: TreePine,
      rating: 4.8,
      highlights: ["Spiritual Treks", "Wildlife Spotting", "Cultural Immersion"],
      gradient: "from-indigo-400 to-purple-500"
    }
  ];

  const directions = [
    {
      step: "Premium Flight Experience",
      description: "Fly to Leh Airport (Kushok Bakula Rimpochee Airport) via Delhi/Mumbai. Book morning flights (6-10 AM) for optimal weather and breathtaking aerial views of K2, Nanga Parbat, and the entire Himalayan range. Our airport concierge meets you upon arrival.",
      icon: "✈️",
      duration: "1.5 hours from Delhi",
      tips: "VIP lounge access, priority boarding"
    },
    {
      step: "Altitude Acclimatization Protocol",
      description: "Mandatory 24-48 hour acclimatization in Leh at 11,562 feet. Our medical team provides comprehensive health monitoring, oxygen therapy if needed, and personalized altitude adaptation programs including specialized nutrition and hydration protocols.",
      icon: "🏥",
      duration: "1-2 days",
      tips: "Medical monitoring, oxygen therapy available"
    },
    {
      step: "Permit & Documentation",
      description: "Obtain Inner Line Permits (ILP) for Nubra Valley from DC Office Leh or our expedited online service. Foreign nationals require Protected Area Permits (PAP) arranged minimum 7 days in advance. Our documentation team handles all paperwork seamlessly.",
      icon: "📋",
      duration: "Same day processing",
      tips: "Expedited service available, document assistance"
    },
    {
      step: "Khardung La Pass Expedition",
      description: "Scenic journey via Khardung La Pass (18,379 feet) - world's highest motorable road. Our luxury fleet includes oxygen-equipped vehicles, professional drivers, and strategic photo stops. Experience includes certificates, refreshments, and emergency medical support.",
      icon: "🏔️",
      duration: "3-4 hours scenic drive",
      tips: "Oxygen cylinders, photography stops, certificates"
    },
    {
      step: "Nubra Valley Approach",
      description: "Navigate through Khalsar security checkpoint and continue 45km through spectacular landscapes to Sumoor. Our premium vehicles feature climate control, panoramic windows, and entertainment systems. Motion comfort amenities provided throughout the journey.",
      icon: "🚗",
      duration: "1.5 hours through valleys",
      tips: "Luxury vehicles, comfort amenities, scenic stops"
    },
    {
      step: "Final Destination Navigation",
      description: "Arrive at Skayil Gokma village following precision GPS coordinates 34.8167° N, 77.6500° E. Look for our distinctive traditional Ladakhi architecture enhanced with contemporary luxury amenities. Welcome reception includes traditional ceremonies and orientation.",
      icon: "📍",
      duration: "15 minutes from main road",
      tips: "GPS tracking, welcome ceremonies, orientation"
    },
    {
      step: "Helicopter Premium Service",
      description: "Alternative luxury helicopter service from Leh (20 minutes flight time) available weather permitting. Includes aerial photography, champagne service, and direct landing at our private helipad. Advanced booking essential with flexible weather policies.",
      icon: "🚁",
      duration: "20 minutes aerial experience",
      tips: "Private helipad, aerial photography, champagne service"
    },
    {
      step: "Emergency Support Network",
      description: "Comprehensive 24/7 support system: Local administration +91-1982-253007, Medical emergencies +91-1982-252014, Bangsa Gokma concierge +91-9469432100, Helicopter evacuation +91-9419178234. Satellite communication backup available.",
      icon: "🆘",
      duration: "24/7 availability",
      tips: "Satellite backup, helicopter evacuation, medical support"
    }
  ];

  const amenities = [
    { icon: Wifi, label: "Starlink WiFi" },
    { icon: Coffee, label: "24/7 Service" },
    { icon: Shield, label: "Medical Support" },
    { icon: Award, label: "5-Star Luxury" },
    { icon: Globe, label: "Multilingual Staff" },
    { icon: Star, label: "Premium Experience" }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-green-500 to-teal-600 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-5 bg-noise"></div>

      <div className="relative z-10 py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-2 mb-6">
              <Star className="text-amber-400 w-5 h-5" />
              <span className="text-amber-300 font-medium">World-Class Hospitality</span>
              <Star className="text-amber-400 w-5 h-5" />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Discover
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Bangsa Gokma
              </span>
            </h1>
            
            <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed mb-8">
              An extraordinary sanctuary nestled at 10,000 feet in the mystical Nubra Valley, 
              where ancient Himalayan traditions meet contemporary luxury amidst the world's most dramatic landscapes.
            </p>

            {/* Amenities Bar */}
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <amenity.icon className="text-amber-400 w-4 h-4" />
                  <span className="text-gray-300 text-sm font-medium">{amenity.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Tab Navigation */}
          <div className={`flex justify-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl">
              {[
                { id: 'location', label: 'Contact & Location', icon: MapPin, gradient: 'from-blue-500 to-cyan-500' },
                { id: 'attractions', label: 'Premium Attractions', icon: Camera, gradient: 'from-purple-500 to-pink-500' },
                { id: 'directions', label: 'Journey Planning', icon: Navigation, gradient: 'from-green-500 to-emerald-500' }
              ].map(({ id, label, icon: Icon, gradient }) => (
                <button
                  key={id}
                  onClick={() => setSelectedTab(id)}
                  className={`group relative px-8 py-4 rounded-xl mx-1 font-semibold flex items-center gap-3 transition-all duration-500 overflow-hidden ${
                    selectedTab === id 
                      ? `bg-gradient-to-r ${gradient} text-white shadow-2xl scale-105 transform` 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {selectedTab === id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-20 blur-xl transition-all duration-500`}></div>
                  )}
                  <Icon size={20} className={`transition-all duration-300 ${selectedTab === id ? 'scale-110' : 'group-hover:scale-110'}`} />
                  <span className="relative z-10 hidden sm:inline whitespace-nowrap">{label}</span>
                  {selectedTab === id && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Content Sections */}
          <div className="transition-all duration-700 transform">
            {selectedTab === 'location' && (
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <Phone className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">Premium Contact</h3>
                      <p className="text-gray-400">World-class service, always accessible</p>
                    </div>
                  </div>
                  
                  <div className="grid gap-6">
                    {contactInfo.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={index}
                          className={`group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-amber-500/20 cursor-pointer transform ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                          }`}
                          style={{ 
                            transitionDelay: `${item.delay + 0.5}s`,
                            animationDelay: `${item.delay}s`
                          }}
                          onMouseEnter={() => setActiveCard(index)}
                          onMouseLeave={() => setActiveCard(null)}
                        >
                          <div className="flex items-start gap-5">
                            <div className={`relative flex-shrink-0 p-4 bg-gradient-to-r ${item.gradient} rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                              <Icon className="text-white w-6 h-6" />
                              {activeCard === index && (
                                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl blur-lg opacity-50 scale-150 transition-all duration-500`}></div>
                              )}
                            </div>
                            <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                              <h4 className="font-bold text-white text-lg mb-2 group-hover:text-amber-300 transition-colors duration-300">{item.label}</h4>
                              <p className="text-gray-200 mb-1 text-base">{item.value}</p>
                              <p className="text-gray-400 text-sm font-medium">{item.subtext}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Enhanced Map/Image Section */}
                <div className="relative">
                  <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
                    <div className="aspect-[4/3] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200"
                        alt="Bangsa Gokma - Nubra Valley Luxury Resort"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Interactive Location Pin */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 group-hover:scale-125">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow">
                            <MapPin className="text-white w-8 h-8" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-xl opacity-50 scale-150"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Stats Cards */}
                  <div className="absolute -bottom-8 -left-8 -right-8 flex flex-wrap gap-4 justify-center">
                    {[
                      { label: "Altitude", value: "10,000 ft", icon: Mountain },
                      { label: "Rating", value: "5.0★", icon: Star },
                      { label: "Heritage", value: "Est. 2018", icon: Award }
                    ].map((stat, index) => (
                      <div key={index} 
                           className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-xl transition-all duration-700 hover:scale-110 ${
                             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                           }`}
                           style={{ transitionDelay: `${1 + index * 0.1}s` }}
                      >
                        <div className="flex items-center gap-3">
                          <stat.icon className="text-amber-400 w-5 h-5" />
                          <div>
                            <p className="text-white font-bold">{stat.value}</p>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedTab === 'attractions' && (
              <div>
                <div className="text-center mb-12">
                  <h3 className="text-4xl font-bold text-white mb-4">Curated Experiences</h3>
                  <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                    Discover hand-selected attractions and experiences that showcase the natural wonders 
                    and cultural richness of the Nubra Valley region.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {nearbyAttractions.map((attraction, index) => {
                    const AttractionIcon = attraction.icon;
                    return (
                      <div
                        key={index}
                        className={`group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                        style={{ transitionDelay: `${index * 0.15}s` }}
                      >
                        <div className="flex items-start gap-6 mb-6">
                          <div className={`relative p-4 bg-gradient-to-r ${attraction.gradient} rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                            <AttractionIcon className="text-white w-8 h-8" />
                            <div className={`absolute inset-0 bg-gradient-to-r ${attraction.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 scale-150 transition-all duration-500`}></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
                                {attraction.name}
                              </h4>
                              <div className="flex items-center gap-1 bg-amber-500/20 rounded-full px-3 py-1">
                                <Star className="text-amber-400 w-4 h-4 fill-current" />
                                <span className="text-amber-300 text-sm font-bold">{attraction.rating}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-amber-400 font-semibold mb-4 group-hover:translate-x-2 transition-transform duration-300">
                              <Car size={16} />
                              <span>{attraction.distance}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                          {attraction.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {attraction.highlights.map((highlight, idx) => (
                            <span key={idx} className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-gray-300 font-medium hover:bg-white/20 transition-colors duration-300">
                              {highlight}
                            </span>
                          ))}
                        </div>

                        {/* Hover Effect Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {selectedTab === 'directions' && (
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h3 className="text-4xl font-bold text-white mb-6">Your Journey to Paradise</h3>
                  <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                    Experience a meticulously planned journey from your doorstep to our sanctuary. 
                    Every detail is crafted for comfort, safety, and unforgettable memories.
                  </p>
                </div>
                
                <div className="space-y-8">
                  {directions.map((direction, index) => (
                    <div
                      key={index}
                      className={`group relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-amber-500/20 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start gap-8 p-8">
                        {/* Step Number & Icon */}
                        <div className="flex-shrink-0 relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-2xl group-hover:scale-110 transition-all duration-500">
                            {index + 1}
                          </div>
                          <div className="absolute -top-2 -right-2 text-2xl">{direction.icon}</div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                            <h4 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors duration-300">
                              {direction.step}
                            </h4>
                            <div className="flex items-center gap-4">
                              <span className="bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 text-blue-300 text-sm font-medium">
                                {direction.duration}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                            {direction.description}
                          </p>
                          
                          <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                            <p className="text-green-300 font-medium flex items-center gap-2">
                              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                              Pro Tips: {direction.tips}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Progress Line */}
                      {index < directions.length - 1 && (
                        <div className="absolute left-14 bottom-0 w-0.5 h-8 bg-gradient-to-b from-amber-500 to-transparent transform translate-y-8"></div>
                      )}
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  ))}
                </div>

                {/* Call to Action */}
                <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1s' }}>
                  <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
                    <h4 className="text-2xl font-bold text-white mb-4">Ready to Begin Your Journey?</h4>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                      Our dedicated concierge team is available 24/7 to assist with your travel planning, 
                      documentation, and ensuring every detail of your Himalayan adventure is perfectly orchestrated.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <button className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden">
                        <span className="relative z-10 flex items-center gap-3">
                          <Phone className="w-5 h-5" />
                          Call Concierge Now
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </button>
                      
                      <button className="group relative bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-500 hover:scale-105 active:scale-95">
                        <span className="flex items-center gap-3">
                          <Mail className="w-5 h-5" />
                          Email Reservations
                        </span>
                      </button>
                    </div>

                    {/* Emergency Contacts Quick Access */}
                    <div className="mt-8 pt-8 border-t border-white/10">
                      <h5 className="text-lg font-semibold text-white mb-4">Emergency & Support Contacts</h5>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                          <div className="font-semibold text-red-300 mb-1">Medical Emergency</div>
                          <div className="text-red-200">+91-1982-252014</div>
                        </div>
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3">
                          <div className="font-semibold text-blue-300 mb-1">Local Administration</div>
                          <div className="text-blue-200">+91-1982-253007</div>
                        </div>
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3">
                          <div className="font-semibold text-green-300 mb-1">Helicopter Evacuation</div>
                          <div className="text-green-200">+91-9419178234</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Footer Information */}
          <div className={`mt-20 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1.2s' }}>
            <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Safety First</h4>
                  <p className="text-gray-400 text-sm">Comprehensive safety protocols and medical support at extreme altitudes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Award Winning</h4>
                  <p className="text-gray-400 text-sm">Recognized for excellence in sustainable luxury hospitality</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Globe className="text-white w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Global Standards</h4>
                  <p className="text-gray-400 text-sm">International hospitality standards in the heart of the Himalayas</p>
                </div>
              </div>
            </div>

            {/* Final Brand Statement */}
            <div className="mt-12">
              <p className="text-gray-400 text-lg font-light max-w-4xl mx-auto leading-relaxed">
                <span className="text-amber-400 font-semibold">Bangsa Gokma</span> - Where the ancient wisdom of the Himalayas 
                meets contemporary luxury, creating an unparalleled sanctuary for the discerning traveler 
                seeking authentic experiences at the edge of the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced CSS Animations and Styles */}
     
    </div>
  );
};

export default Location;