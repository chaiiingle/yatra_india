import React from 'react';
import { TouristSpot } from '../types';
import { Clock, Navigation, Heart, Trash2 } from 'lucide-react';

interface SpotCardProps {
  spot: TouristSpot;
  minimal?: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
  onRemove?: () => void;
}

const SpotCard: React.FC<SpotCardProps> = ({ spot, minimal = false, isFavorite = false, onToggleFavorite, onRemove }) => {
  return (
    <div className="group h-full flex flex-col bg-white rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] hover:-translate-y-2 relative border border-stone-100/50">
      <div className="relative h-60 overflow-hidden">
        <div className="absolute inset-0 bg-stone-100 animate-pulse" />
        <img 
          src={spot.imageUrl} 
          alt={spot.name} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-60" />
        
        {/* Categories Float */}
        <div className="absolute top-5 left-5 flex flex-wrap gap-2 max-w-[80%]">
           {spot.categories.slice(0, 2).map((cat, idx) => (
             <span key={idx} className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-800 shadow-sm">
               {cat}
             </span>
           ))}
        </div>

        <div className="absolute top-5 right-5 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
            {/* Remove Button (If in Edit Mode) */}
            {onRemove && (
            <button 
                onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onRemove();
                }}
                className="p-3 rounded-full backdrop-blur-md bg-white/95 text-stone-400 hover:bg-red-500 hover:text-white transition-all shadow-lg active:scale-95"
                title="Remove from plan"
            >
                <Trash2 size={16} />
            </button>
            )}

            {/* Favorite Button */}
            {onToggleFavorite && (
            <button 
                onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleFavorite(spot.id);
                }}
                className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg active:scale-95 ${
                isFavorite 
                    ? 'bg-white text-red-500' 
                    : 'bg-white/90 text-stone-400 hover:text-red-500'
                }`}
            >
                <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
            </button>
            )}
        </div>
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-serif font-bold text-xl text-stone-900 mb-3 leading-tight group-hover:text-stone-700 transition-colors">
          {spot.name}
        </h3>
        
        {!minimal && (
          <p className="text-stone-500 text-sm leading-relaxed mb-8 line-clamp-3 font-light">
            {spot.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto pt-5 border-t border-stone-50">
          <div className="flex items-center gap-2 text-stone-400">
             <Clock size={14} className="opacity-70" />
             <span className="text-[10px] font-bold tracking-widest uppercase">{spot.durationHours}h Session</span>
          </div>
          
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-stone-900 hover:opacity-60 transition-opacity text-[10px] font-bold uppercase tracking-widest"
          >
            Guide
            <Navigation size={10} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpotCard;