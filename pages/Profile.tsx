import React, { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { User, SavedPlan } from '../types';
import { SPOTS_DB } from '../constants';
import SpotCard from '../components/SpotCard';
import { MapPin, Calendar, Clock, Trash2, Heart, X, ArrowRight } from 'lucide-react';

interface ProfileProps {
  user: User | null;
  onDeletePlan: (planId: string) => void;
  onToggleFavorite: (id: string) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onDeletePlan, onToggleFavorite }) => {
  const [viewingPlan, setViewingPlan] = useState<SavedPlan | null>(null);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const favoriteSpots = SPOTS_DB.filter(spot => user.favorites.includes(spot.id));

  return (
    <div className="min-h-screen bg-[#FBFBF9] pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="mb-20">
            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4 block">Personal Archive</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6">Namaste, {user.name.split(' ')[0]}</h1>
            <p className="text-stone-400 font-light text-lg">{user.email}</p>
        </header>

        <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column: Itineraries */}
            <div className="lg:col-span-8">
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-2xl font-serif font-bold text-stone-900 flex items-center gap-4">
                        Saved Yatras
                        <span className="w-8 h-8 rounded-full bg-stone-100 text-stone-500 text-xs flex items-center justify-center font-bold font-sans">{user.savedPlans.length}</span>
                    </h2>
                    <Link to="/planner" className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors flex items-center gap-2 group">
                        Create New <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {user.savedPlans.length === 0 ? (
                  <div className="p-20 bg-white rounded-[3rem] border border-dashed border-stone-200 text-center">
                     <p className="text-stone-400 font-light mb-8">Your travel archive is currently empty.</p>
                     <Link to="/planner" className="px-10 py-4 bg-stone-900 text-white rounded-full text-sm font-bold shadow-xl hover:bg-stone-800 transition-all inline-block">Begin Planning</Link>
                  </div>
                ) : (
                  <div className="space-y-10">
                    {user.savedPlans.map((plan) => (
                      <div 
                        key={plan.id} 
                        onClick={() => setViewingPlan(plan)}
                        className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] border border-stone-100 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all cursor-pointer group relative overflow-hidden"
                      >
                        {/* Status chip */}
                        <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                             <div className="bg-stone-50 p-3 rounded-full text-stone-400 hover:text-red-500 transition-colors" onClick={(e) => { e.stopPropagation(); onDeletePlan(plan.id); }}>
                                <Trash2 size={18} />
                             </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-10">
                            <div className="flex-grow">
                                <h3 className="text-3xl font-serif font-bold text-stone-900 mb-4 group-hover:text-stone-600 transition-colors">{plan.name}</h3>
                                <div className="flex flex-wrap gap-6 text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-8">
                                    <span className="flex items-center gap-2"><MapPin size={14} className="text-stone-300"/> {plan.destination}</span>
                                    <span className="flex items-center gap-2"><Clock size={14} className="text-stone-300"/> {plan.timeAvailable}</span>
                                    <span className="flex items-center gap-2"><Calendar size={14} className="text-stone-300"/> {plan.createdAt}</span>
                                </div>
                                
                                <p className="text-stone-500 font-serif italic text-lg leading-relaxed mb-8 max-w-xl">
                                    "{plan.essence}"
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {plan.preferences.slice(0, 3).map(p => (
                                        <span key={p} className="text-[10px] font-bold text-stone-500 bg-stone-50 px-4 py-2 rounded-full border border-stone-100 uppercase tracking-widest">{p}</span>
                                    ))}
                                    {plan.preferences.length > 3 && <span className="text-[10px] text-stone-300 font-bold uppercase py-2">+{plan.preferences.length - 3} more</span>}
                                </div>
                            </div>
                            
                            {/* Visual Preview */}
                            <div className="w-full md:w-48 shrink-0 flex md:flex-col gap-2">
                                {plan.itinerary.flatMap(d => d.spots).slice(0, 3).map((spot, i) => (
                                    <div key={spot.id} className={`h-24 md:h-20 w-full rounded-2xl overflow-hidden bg-stone-100 ${i === 2 ? 'hidden md:block opacity-40' : i === 1 ? 'opacity-70' : ''}`}>
                                        <img src={spot.imageUrl} alt="" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                {plan.itinerary.flatMap(d => d.spots).length > 3 && (
                                    <div className="hidden md:flex items-center justify-center h-10 w-full rounded-xl bg-stone-50 text-stone-300 text-[10px] font-bold uppercase">
                                        + More Gems
                                    </div>
                                )}
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
            </div>

            {/* Right Column: Favorites */}
            <div className="lg:col-span-4">
                <h2 className="text-2xl font-serif font-bold text-stone-900 mb-10 flex items-center gap-4">
                    The Wishlist
                    <Heart size={20} className="text-red-500" fill="currentColor" />
                </h2>
                
                {favoriteSpots.length === 0 ? (
                    <div className="p-12 bg-white rounded-[2.5rem] border border-stone-100 text-center">
                        <p className="text-stone-400 text-sm font-light leading-relaxed">Discover spots you love and heart them to curate your own bucket list.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {favoriteSpots.map(spot => (
                            <Link to={`/${spot.destination.toLowerCase()}`} key={spot.id} className="block group">
                                <div className="flex items-center gap-5 p-4 bg-white rounded-3xl border border-stone-100 transition-all hover:shadow-xl hover:-translate-y-1">
                                    <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0">
                                        <img src={spot.imageUrl} alt="" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-serif font-bold text-stone-900 group-hover:text-stone-600 transition-colors">{spot.name}</h4>
                                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{spot.destination}</span>
                                    </div>
                                    <button 
                                        onClick={(e) => { e.preventDefault(); onToggleFavorite(spot.id); }}
                                        className="p-3 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                    >
                                        <Heart size={16} fill="currentColor" />
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Plan Detail Modal */}
      {viewingPlan && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-md" onClick={() => setViewingPlan(null)} />
          <div className="relative bg-[#FBFBF9] w-full max-w-6xl h-[90vh] rounded-[3rem] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col animate-fade-in-up">
            
            <div className="p-10 border-b border-stone-100 flex justify-between items-start bg-white sticky top-0 z-20">
              <div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-3 block">Viewing Yatra</span>
                <h2 className="text-4xl font-serif font-bold text-stone-900 mb-3">{viewingPlan.name}</h2>
                <div className="flex items-center gap-6">
                   <span className="text-stone-500 font-serif italic text-lg opacity-70">"{viewingPlan.essence}"</span>
                </div>
              </div>
              <button onClick={() => setViewingPlan(null)} className="p-4 bg-stone-50 hover:bg-stone-100 rounded-full transition-colors">
                <X size={24} className="text-stone-400" />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-10 md:p-16">
              <div className="space-y-24">
                {viewingPlan.itinerary.map((day) => (
                   <div key={day.dayNumber}>
                      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 pb-6 border-b border-stone-100">
                          <div>
                              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-300 block mb-4">Phase 0{day.dayNumber}</span>
                              <h3 className="text-3xl font-serif font-bold text-stone-900 leading-tight">{day.essence}</h3>
                          </div>
                          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-stone-400 bg-stone-50/50 px-6 py-3 rounded-full">
                              <span>{day.totalTouringHours}h Explore</span>
                              <span className="text-stone-200">/</span>
                              <span>{day.bufferHours}h Pause</span>
                          </div>
                      </div>

                      {day.spots.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {day.spots.map((spot, idx) => (
                                <div key={spot.id} className="relative">
                                    <div className="absolute -top-3 -left-3 z-10 w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center font-serif font-bold text-xs shadow-xl">
                                      {idx + 1}
                                    </div>
                                    <SpotCard 
                                      spot={spot} 
                                      minimal
                                      isFavorite={user.favorites.includes(spot.id)}
                                      onToggleFavorite={onToggleFavorite}
                                    />
                                </div>
                            ))}
                        </div>
                      ) : (
                        <div className="py-20 text-center bg-stone-50/50 rounded-[2rem] border border-dashed border-stone-100">
                             <p className="text-stone-400 font-serif text-xl">A day dedicated to unscripted presence.</p>
                        </div>
                      )}
                   </div>
                ))}
              </div>
            </div>
            
            <div className="p-10 bg-white border-t border-stone-100 flex justify-center">
                 <button onClick={() => setViewingPlan(null)} className="px-12 py-4 bg-stone-900 text-white rounded-full font-bold text-sm shadow-xl active:scale-95 transition-all">Dismiss Plan</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;