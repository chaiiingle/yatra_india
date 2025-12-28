import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { supabase } from '../supabaseClient'; 

const Home: React.FC = () => {
  // 1. ADD THIS LOGIC BACK IN - Your component needs this to talk to Supabase
  const [destinations, setDestinations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('cities') // PULLING FROM CITIES TABLE
        .select('*');
      
      if (!error && data) {
        setDestinations(data);
      }
      setLoading(false);
    };
    fetchCities();
  }, []);

  // 2. Loading state so it doesn't crash while fetching
  if (loading) return (
    <div className="h-screen flex items-center justify-center bg-[#FBFBF9]">
      <div className="text-xl font-serif animate-pulse">Loading Destinations...</div>
    </div>
  );

  return (
    <div className="flex flex-col bg-[#FBFBF9]">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://wallpaperaccess.com/full/2023261.jpg" 
            alt="India Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center">
          <span className="uppercase tracking-[0.3em] text-xs font-bold mb-6 opacity-80 animate-fade-in-up">The Art of Slow Travel</span>
          <h1 className="text-6xl md:text-8xl font-serif font-medium mb-8 tracking-tight leading-tight animate-fade-in-up delay-100">
            Discover India,<br />
            <span className="italic font-light opacity-90">One breath at a time.</span>
          </h1>
          <p className="text-lg md:text-xl font-light mb-12 text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Experience Junnar, Mahabaleshwar, and Ooty with smart itineraries designed for mindfulness, culture, and rhythm.
          </p>
          <Link 
            to="/planner" 
            className="group inline-flex items-center gap-3 bg-white text-stone-900 px-10 py-5 rounded-full font-medium text-lg hover:bg-stone-100 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] animate-fade-in-up delay-300"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
                <span className="text-stone-400 uppercase tracking-widest text-xs font-bold">Curated Collections</span>
                <h2 className="text-5xl font-serif font-bold mt-4 text-stone-900 leading-tight">Destinations designed <br/> for the soul.</h2>
            </div>
            <Link to="/planner" className="hidden md:flex items-center gap-2 text-stone-900 font-medium hover:opacity-70 transition-opacity pb-2 border-b border-stone-900">
                View all locations <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {destinations.map((city) => (
              /* Use city.name as the key per your instruction */
              <Link to={`/${city.name.toLowerCase()}`} key={city.name} className="group cursor-pointer block h-full">
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-[3/4] shadow-2xl shadow-stone-200 transition-all duration-700 hover:-translate-y-2">
                  <img 
                    src={city.heroImage} // Matches your 'cities' column
                    alt={city.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 p-10 w-full">
                    <h3 className="text-4xl font-serif font-bold text-white mb-3">{city.name}</h3>
                    <p className="text-white/80 text-sm mb-6 line-clamp-2 font-light leading-relaxed">{city.tagline}</p>
                    
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-white group-hover:text-stone-900 transition-all duration-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      
      {/* Quick Feature Highlight */}
      <section className="py-32 bg-[#FBFBF9]">
        <div className="container mx-auto px-6 max-w-7xl grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="relative z-10 bg-white rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] p-12 flex flex-col justify-center border border-stone-100">
               <div className="flex items-center justify-between mb-10 border-b border-stone-100 pb-6">
                  <span className="text-stone-400 text-sm font-medium tracking-wide uppercase">Total Time</span>
                  <span className="font-serif font-bold text-2xl text-stone-900">12 Hours</span>
               </div>
               <div className="flex items-center justify-between mb-10 border-b border-stone-100 pb-6">
                  <span className="text-stone-400 text-sm font-medium tracking-wide uppercase">Active Touring</span>
                  <span className="font-serif font-bold text-2xl text-green-700">8 Hours</span>
               </div>
               <div className="flex items-center justify-between">
                  <span className="text-stone-400 text-sm font-medium tracking-wide uppercase">Buffer (Relax)</span>
                  <span className="font-serif font-bold text-2xl text-orange-600">4 Hours</span>
               </div>
               
               <div className="mt-12 inline-flex self-center px-6 py-2 bg-stone-900 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                 Smart Planner Engine
               </div>
            </div>
            
            {/* Decorative blob behind */}
            <div className="absolute -top-10 -left-10 w-full h-full bg-stone-200 rounded-[3rem] -z-10 transform rotate-3 opacity-50" />
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-stone-900 leading-tight">Not just a schedule,<br />but a rhythm.</h2>
            <p className="text-stone-500 text-xl mb-12 leading-relaxed font-light max-w-lg">
              Most planners cram your day. We respect your time, and energy. Our Smart Planner keeps in mind your energy and buffer time for travel, chai breaks, and spontaneous discoveries.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-orange-50 rounded-2xl text-orange-700"><Star size={24} fill="currentColor" className="opacity-20" /></div>
                 <div>
                    <h4 className="font-bold text-stone-900 mb-1">Relaxed Pace</h4>
                    <p className="text-sm text-stone-400">Never feel rushed.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="p-3 bg-green-50 rounded-2xl text-green-700"><Star size={24} fill="currentColor" className="opacity-20" /></div>
                 <div>
                    <h4 className="font-bold text-stone-900 mb-1">Locally Curated</h4>
                    <p className="text-sm text-stone-400">Gems only locals know.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

