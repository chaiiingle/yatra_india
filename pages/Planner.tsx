import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DestinationName, TimeOption, SpotCategory, ItineraryDay, User } from '../types';
import { TIME_OPTIONS, CATEGORIES, DESTINATIONS_DATA } from '../constants';
import { generateSmartItinerary, getTripEssence, generateDayEssence } from '../utils/plannerLogic';
import SpotCard from '../components/SpotCard';
import { Save, RefreshCw, Clock, Info, Check, ArrowLeft } from 'lucide-react';

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
      setTimeout(() => setIsSaved(false), 3000);
    }
  };

  if (generatedPlan) {
    return (
      <div className="min-h-screen bg-[#FBFBF9] pb-24">
        {/* Fixed Navigation Header */}
        <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-100">
           <div className="container mx-auto px-6 max-w-7xl h-20 flex items-center justify-between">
              <div className="flex items-center gap-6">
                 <button 
                   onClick={() => setGeneratedPlan(null)} 
                   className="p-3 rounded-full hover:bg-stone-100 transition-colors text-stone-500"
                 >
                   <ArrowLeft size={20} />
                 </button>
                 <div>
                    <h2 className="text-xl font-serif font-bold text-stone-900">{destination}</h2>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block">{timeAvailable} Plan</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl pt-20">
          {/* Header Essence & Action Buttons */}
          <div className="mb-24 text-center max-w-3xl mx-auto flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl font-serif text-stone-800 leading-[1.3] italic font-light mb-12">
              "{planEssence}"
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={handleSave}
                disabled={isSaved}
                className={`px-10 py-4 rounded-full text-white font-bold shadow-xl transition-all flex items-center gap-3 ${
                  isSaved ? 'bg-emerald-600 scale-105' : 'bg-stone-900 hover:bg-stone-800 active:scale-95'
                }`}
              >
                {isSaved ? <><Check size={20} /> Saved</> : <><Save size={20} /> Save Yatra</>}
              </button>

              <button 
                onClick={() => setGeneratedPlan(null)} 
                className="px-10 py-4 rounded-full bg-white text-stone-900 border border-stone-200 font-bold shadow-md hover:bg-stone-50 transition-all flex items-center gap-3 active:scale-95"
              >
                <RefreshCw size={20} />
                Redesign
              </button>
            </div>
          </div>

          {/* Itinerary Phases */}
          <div className="space-y-24">
            {generatedPlan.map((day) => (
              <div key={day.dayNumber} className="bg-white rounded-[3rem] shadow-sm border border-stone-100 overflow-hidden">
                {/* Day Info Bar */}
                <div className="bg-stone-50/50 px-10 py-8 border-b border-stone-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div>
                    <span className="px-3 py-1 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-stone-400 border border-stone-100 mb-3 inline-block">Phase 0{day.dayNumber}</span>
                    <h3 className="text-2xl font-serif font-bold text-stone-900">{day.essence}</h3>
                  </div>
                  <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-stone-900"/> {day.totalTouringHours}h Motion</div>
                    <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-stone-200"/> {day.bufferHours}h Stillness</div>
                  </div>
                </div>

                <div className="p-10 md:p-16">
                  {day.spots.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                      {day.spots.map((spot, idx) => (
                        <div key={spot.id} className="relative">
                          <div className="absolute -top-3 -left-3 z-20 w-8 h-8 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-lg">
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
                    <div className="text-center py-20 bg-stone-50/30 rounded-3xl border border-dashed border-stone-200">
                      <p className="text-stone-400">No spots selected for this phase.</p>
                    </div>
                  )}
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
      <div className="w-full max-w-2xl">
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.4em] mb-4 block">The Intelligent Compass</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-stone-900">Design Your Yatra</h1>
          <p className="text-stone-500 font-light">Artfully crafted itineraries that prioritize your peace.</p>
        </div>

        <div className="bg-white rounded-[3rem] shadow-xl p-10 md:p-16 border border-stone-100">
          <div className="space-y-12">
            {/* Destination Selection */}
            <div>
              <label className="block text-[10px] font-black text-stone-400 uppercase tracking-widest mb-6">Where to?</label>
              <div className="grid grid-cols-3 gap-4">
                {(Object.keys(DESTINATIONS_DATA) as DestinationName[]).map((dest) => (
                  <button
                    key={dest}
                    onClick={() => setDestination(dest)}
                    className={`py-4 rounded-2xl border text-sm font-bold transition-all ${
                      destination === dest ? 'bg-stone-900 border-stone-900 text-white shadow-lg scale-105' : 'bg-stone-50 border-stone-100 text-stone-500 hover:bg-white'
                    }`}
                  >
                    {dest}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-[10px] font-black text-stone-400 uppercase tracking-widest mb-6">Duration</label>
              <select
                value={timeAvailable}
                onChange={(e) => setTimeAvailable(e.target.value as TimeOption)}
                className="w-full p-5 rounded-2xl border border-stone-100 bg-stone-50 text-stone-800 outline-none font-bold"
              >
                {TIME_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>

            {/* Preference Chips */}
            <div>
              <label className="block text-[10px] font-black text-stone-400 uppercase tracking-widest mb-6">Interests</label>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => handleTogglePref(cat)}
                    className={`px-5 py-2 rounded-full text-[11px] font-bold border transition-all ${
                      preferences.includes(cat) ? 'bg-stone-900 text-white border-stone-900' : 'bg-white text-stone-400 border-stone-100'
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
              className={`w-full py-6 rounded-3xl font-bold text-lg transition-all ${
                !destination ? 'bg-stone-100 text-stone-300' : 'bg-stone-900 text-white shadow-2xl hover:bg-stone-800'
              }`}
            >
              {isGenerating ? 'Crafting...' : 'Manifest Itinerary'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planner;
