import React, { useMemo, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { DestinationName, SpotCategory, User } from '../types';
import { DESTINATIONS_DATA, SPOTS_DB, CATEGORIES } from '../constants';
import SpotCard from '../components/SpotCard';
import { Calendar, Filter } from 'lucide-react';

interface DestinationProps {
  user: User | null;
  onToggleFavorite: (id: string) => void;
}

const Destination: React.FC<DestinationProps> = ({ user, onToggleFavorite }) => {
  const { name } = useParams<{ name: string }>();
  const [filterCategory, setFilterCategory] = useState<SpotCategory | 'All'>('All');

  // Validate Name and normalize
  const destKey = Object.keys(DESTINATIONS_DATA).find(
    key => key.toLowerCase() === name?.toLowerCase()
  ) as DestinationName | undefined;

  if (!destKey) {
    return <Navigate to="/" replace />;
  }

  const destData = DESTINATIONS_DATA[destKey];
  
  // Theme styling based on destination
  const themeClasses = useMemo(() => {
    switch (destKey) {
      case DestinationName.JUNNAR: return 'bg-orange-50/50 text-stone-800';
      case DestinationName.MAHABALESHWAR: return 'bg-green-50/50 text-stone-800';
      case DestinationName.OOTY: return 'bg-sky-50/50 text-stone-800';
      default: return 'bg-[#FBFBF9]';
    }
  }, [destKey]);

  const buttonClass = useMemo(() => {
    switch (destKey) {
      case DestinationName.JUNNAR: return 'bg-orange-700 hover:bg-orange-800';
      case DestinationName.MAHABALESHWAR: return 'bg-green-700 hover:bg-green-800';
      case DestinationName.OOTY: return 'bg-teal-700 hover:bg-teal-800';
      default: return 'bg-stone-900';
    }
  }, [destKey]);

  const spots = SPOTS_DB.filter(s => s.destination === destKey);
  const filteredSpots = filterCategory === 'All' 
    ? spots 
    : spots.filter(s => s.categories.includes(filterCategory));

  return (
    <div className={`min-h-screen ${themeClasses}`}>
      {/* Header */}
      <div className="relative h-[60vh]">
        <img 
          src={destData.heroImage} 
          alt={destKey} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-tight">{destKey}</h1>
          <p className="text-xl text-white/90 max-w-2xl font-light leading-relaxed">{destData.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 relative -mt-20 z-10">
        <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-10 mb-12 flex flex-col md:flex-row justify-between items-center gap-6 border border-stone-100">
           <div>
             <h2 className="text-2xl font-serif font-bold mb-1 text-stone-900">Ready to explore {destKey}?</h2>
             <p className="text-stone-500 text-sm font-light">Get a personalized itinerary in seconds.</p>
           </div>
           <Link 
             to={`/planner?dest=${destKey}`} 
             className={`${buttonClass} text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg transition-transform hover:scale-105`}
           >
             <Calendar size={18} />
             Launch Smart Planner
           </Link>
        </div>

        {/* Filter Section - Scrollable */}
        <div className="mb-10 flex items-center gap-3 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex items-center gap-2 text-stone-400 font-bold text-xs uppercase tracking-widest mr-2 shrink-0">
            <Filter size={14} /> Filters:
          </div>
          
          {/* 'All' Button - Clearly visible and reset functionality */}
          <button 
            onClick={() => setFilterCategory('All')}
            className={`shrink-0 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              filterCategory === 'All' 
                ? 'bg-stone-900 text-white shadow-md transform scale-105' 
                : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-200 hover:text-stone-900'
            }`}
          >
            All
          </button>
          
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filterCategory === cat 
                  ? 'bg-stone-900 text-white shadow-md transform scale-105' 
                  : 'bg-white text-stone-500 hover:bg-stone-100 border border-stone-200 hover:text-stone-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpots.map(spot => (
            <div key={spot.id} className="h-full">
              <SpotCard 
                spot={spot} 
                isFavorite={user?.favorites.includes(spot.id)}
                onToggleFavorite={onToggleFavorite}
              />
            </div>
          ))}
          {filteredSpots.length === 0 && (
             <div className="col-span-full text-center py-20 text-stone-400 bg-white rounded-[2rem] border border-dashed border-stone-200">
               No spots found for this category.
               <br/>
               <button onClick={() => setFilterCategory('All')} className="mt-4 text-stone-900 underline font-medium">Reset Filters</button>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Destination;