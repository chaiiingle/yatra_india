import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DestinationName, TimeOption, SpotCategory, ItineraryDay, User } from '../types';
import { TIME_OPTIONS, CATEGORIES, DESTINATIONS_DATA } from '../constants';
import { generateSmartItinerary, getTripEssence, generateDayEssence } from '../utils/plannerLogic';
import SpotCard from '../components/SpotCard';
import { Save, RefreshCw, Clock, Info, Check, ArrowLeft, Trash2 } from 'lucide-react';

interface PlannerProps {
  user: User | null;
  onSavePlan: (planName: string, dest: DestinationName, time: string, prefs: SpotCategory[], itinerary: ItineraryDay[]) => void;
  onOpenAuth: () => void;
  onToggleFavorite: (id: string) => void;
}

const Planner: React.FC<PlannerProps> = ({ user, onSavePlan, onOpenAuth, onToggleFavorite }) => {
  const [searchParams] = useSearchParams();
  const initialDest = searchParams.get('dest') as DestinationName;

  // Form State
  const [destination, setDestination] = useState<DestinationName | ''>(initialDest || '');
  const [timeAvailable, setTimeAvailable] = useState<TimeOption>('12 Hours');
  const [preferences, setPreferences] = useState<SpotCategory[]>([]);
  
  // Result State
  const [generatedPlan, setGeneratedPlan] = useState<ItineraryDay[] | null>(null);
  const [planEssence, setPlanEssence] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTogglePref = (cat: SpotCategory) => {
    if (preferences.includes(cat)) {
      setPreferences(preferences.filter(c => c !== cat));
    } else {
      setPreferences([...preferences, cat]);
    }
  };

  const handleGenerate = () => {
    if (!destination) return;
    setIsGenerating(true);
    setIsSaved(false);
    setTimeout(() => {
      const plan = generateSmartItinerary(destination, timeAvailable, preferences);
      const essence = getTripEssence(destination, timeAvailable, preferences);
      setGeneratedPlan(plan);
      setPlanEssence(essence);
      setIsGenerating(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  const handleRemoveSpot = (dayNumber: number, spotId: string) => {
    if (!generatedPlan) return;

    const updatedPlan = generatedPlan.map(day => {
      if (day.dayNumber === dayNumber) {
        const newSpots = day.spots.filter(s => s.id !== spotId);
        const newTouringHours = newSpots.reduce((acc, curr) => acc + curr.durationHours, 0);
        const newBuffer = Math.max(0, 14 - newTouringHours); 
        const newEssence = generateDayEssence(newSpots);

        return {
          ...day,
          spots: newSpots,
          totalTouringHours: newTouringHours,
          bufferHours: newBuffer,
          essence: newEssence
        };
      }
      return day;
    });

    setGeneratedPlan(updatedPlan);
    setIsSaved(false);
  };

  const handleSave = () => {
    if (!user) {
      onOpenAuth();
      return;
    }
    if (destination && generatedPlan) {
      const name = `${destination} Yatra - ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}`;
      onSavePlan(name, destination, timeAvailable, preferences, generatedPlan);
      setIsSaved(true);
      // Feedback duration
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  if (generatedPlan) {
    return (
      <div className="min-h-screen bg-[#FBFBF9] pb-24">
        {/* Navigation - Offset fix */}
        <div className="sticky top-0 z-40 bg-white/70 backdrop-blur-2xl border-b border-stone-100">
           <div className="container mx-auto px-6 max-w-7xl h-24 flex items-center justify-between">
              <div className="flex items-center gap-6">
                 <button 
                   onClick={() => setGeneratedPlan(null)} 
                   className="p-3 rounded-full hover:bg-stone-100 transition-colors text-stone-500 group"
                 >
                   <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                 </button>
                 <div>
                    <h2 className="text-2xl font-serif font-bold text-stone-900 leading-none">{destination}</h2>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mt-2 block">{timeAvailable} Curation</span>
                 </div>
              </div>

             <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md px-6">
  <div className="bg-white/90 backdrop-blur-xl border border-stone-200 p-3 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center gap-3">
    <button 
      onClick={handleSave}
      disabled={isSaved}
      className={`flex-1 px-8 py-3 rounded-2xl text-white font-bold text-sm transition-all flex items-center justify-center gap-2 ${
        isSaved ? 'bg-emerald-600' : 'bg-stone-900 hover:bg-stone-800'
      }`}
    >
      {isSaved ? <><Check size={18} /> Saved</> : <><Save size={18} /> Save Yatra</>}
    </button>

    <button 
    onClick={() => setGeneratedPlan(null)} 
      className="px-8 py-3 rounded-2xl bg-white text-stone-900 border border-stone-200 font-bold text-sm hover:bg-stone-50 transition-all shadow-sm"
    >
      Redesign
    </button>
  </div>
</div>
           </div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl pt-16">
          {/* Header Essence */}
          <div className="mb-24 text-center max-w-2xl mx-auto">
            <p className="text-3xl md:text-5xl font-serif text-stone-800 leading-[1.2] italic font-light">
              "{planEssence}"
            </p>
          </div>

          <div className="space-y-32">
            {generatedPlan.map((day) => (
              <div key={day.dayNumber} className="relative group">
                {/* Timeline Visual */}
                <div className="absolute left-1/2 -top-16 bottom-0 w-px bg-stone-100 hidden xl:block" />

                <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.04)] border border-stone-100/60 overflow-hidden">
                   
                  {/* Day Header - Sticky Offset Fix (top-24 accounts for navbar) */}
                  <div className="sticky top-24 z-30 bg-white/95 backdrop-blur-xl border-b border-stone-50/50 px-10 py-10 md:px-16 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-3 mb-4">
                           <span className="px-3 py-1 bg-stone-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Phase 0{day.dayNumber}</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 leading-tight">
                            {day.essence}
                        </h3>
                    </div>
                    
                    {day.spots.length > 0 && (
                    <div className="flex items-center gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 shrink-0 bg-stone-50/50 px-8 py-4 rounded-full border border-stone-100/50">
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                            {day.totalTouringHours}h Motion
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-200" />
                            {day.bufferHours}h Stillness
                        </div>
                    </div>
                    )}
                  </div>

                  {/* Spots Grid */}
                  <div className="p-10 md:p-16">
                    {day.spots.length > 0 ? (
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {day.spots.map((spot, idx) => (
                          <div key={spot.id} className="relative">
                            <div className="absolute -top-3 -left-3 z-20 w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center font-serif font-bold text-xs shadow-xl">
                              {idx + 1}
                            </div>
                            <SpotCard 
                              spot={spot} 
                              isFavorite={user?.favorites.includes(spot.id)}
                              onToggleFavorite={onToggleFavorite}
                              onRemove={() => handleRemoveSpot(day.dayNumber, spot.id)}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-24 bg-stone-50/30 rounded-[2rem] border border-dashed border-stone-100">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                            <Clock className="text-stone-300" size={24} />
                        </div>
                        <h4 className="font-serif font-bold text-2xl text-stone-800 mb-4">A Day for Nothing</h4>
                        <p className="text-stone-400 max-w-sm mx-auto leading-relaxed text-sm font-light">
                          Sometimes the best part of a journey is the space between destinations. Use today to wander without a map.
                        </p>
                      </div>
                    )}

                    {day.spots.length > 0 && (
                       <div className="mt-16 flex items-center justify-center gap-4 text-stone-400 text-sm font-light italic">
                          <Info size={16} className="opacity-50" />
                          <span>Approximately {day.bufferHours} hours of unscripted time remains.</span>
                       </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40 pb-24 bg-[#FBFBF9] flex flex-col items-center px-6">
      <div className="w-full max-w-2xl animate-fade-in-up">
        <div className="text-center mb-20">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-6 block">The Intelligent Compass</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-stone-900 tracking-tight leading-none">Design Your Yatra</h1>
          <p className="text-lg text-stone-500 font-light max-w-md mx-auto leading-relaxed">Artfully crafted itineraries that prioritize your peace over the checklist.</p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.06)] p-10 md:p-16 border border-stone-100/50">
          <div className="space-y-12">
            {/* Destination */}
            <div>
              <label className="block text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-6">Where would you like to be?</label>
              <div className="grid grid-cols-3 gap-4">
                {(Object.keys(DESTINATIONS_DATA) as DestinationName[]).map((dest) => (
                  <button
                    key={dest}
                    onClick={() => setDestination(dest)}
                    className={`py-5 px-2 rounded-2xl border transition-all duration-500 text-sm font-bold ${
                      destination === dest 
                        ? 'border-stone-900 bg-stone-900 text-white shadow-2xl scale-[1.02]' 
                        : 'border-stone-100 bg-stone-50/50 text-stone-500 hover:border-stone-200 hover:bg-white'
                    }`}
                  >
                    {dest}
                  </button>
                ))}
              </div>
            </div>

            {/* Time */}
            <div>
              <label className="block text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-6">Duration of presence</label>
              <div className="relative">
                <select
                  value={timeAvailable}
                  onChange={(e) => setTimeAvailable(e.target.value as TimeOption)}
                  className="w-full p-5 rounded-2xl border border-stone-100 bg-stone-50/50 text-stone-800 focus:bg-white focus:ring-4 focus:ring-stone-900/5 focus:border-stone-900 outline-none appearance-none font-bold cursor-pointer transition-all"
                >
                  {TIME_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-stone-300">
                    <Clock size={18} />
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div>
              <label className="block text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] mb-6">Elements of interest</label>
              <div className="flex flex-wrap gap-3">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleTogglePref(cat)}
                    className={`px-6 py-3 rounded-full text-[11px] font-bold border transition-all duration-500 tracking-wider uppercase ${
                      preferences.includes(cat)
                        ? 'bg-stone-900 border-stone-900 text-white shadow-lg'
                        : 'bg-white border-stone-100 text-stone-400 hover:border-stone-300 hover:text-stone-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={!destination || isGenerating}
              className={`w-full py-6 rounded-[2rem] font-bold text-lg shadow-2xl transition-all duration-700 transform hover:-translate-y-1 active:scale-95 ${
                !destination 
                  ? 'bg-stone-50 text-stone-200 cursor-not-allowed border border-stone-100' 
                  : 'bg-stone-900 text-white hover:bg-stone-800 hover:shadow-stone-900/20'
              }`}
            >
              {isGenerating ? (
                  <span className="flex items-center justify-center gap-3">
                      <RefreshCw className="animate-spin" size={20} /> Crafting...
                  </span>
              ) : 'Manifest Itinerary'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;
