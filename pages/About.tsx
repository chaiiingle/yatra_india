import React from 'react';
import { Clock, Coffee, Map } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8">
           <h1 className="text-4xl font-serif font-bold text-stone-900 mb-6">Philosophy</h1>
           <p className="text-lg text-stone-600 leading-relaxed mb-6">
             Yatra was born from a simple observation: Modern travel has become a checklist exercise. We rush from point A to point B, capturing photos but missing the moment.
           </p>
           <p className="text-lg text-stone-600 leading-relaxed">
             Our mission is to bring <strong>minimalism</strong> to Indian travel. By focusing on Junnar, Mahabaleshwar, and Ooty—places rich in culture and nature—we encourage you to slow down, breathe, and truly experience the destination.
           </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
           <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
             <Map className="text-orange-700 mb-4" size={32} />
             <h3 className="font-bold text-stone-800 mb-2">Clustered Logic</h3>
             <p className="text-sm text-stone-600">We group spots by location to minimize travel time, so you spend less time in the car and more time exploring.</p>
           </div>
           <div className="bg-green-50 p-6 rounded-xl border border-green-100">
             <Coffee className="text-green-700 mb-4" size={32} />
             <h3 className="font-bold text-stone-800 mb-2">The Buffer Rule</h3>
             <p className="text-sm text-stone-600">We strictly limit touring hours. If you have 12 hours, we only book 8. The rest is for you.</p>
           </div>
           <div className="bg-sky-50 p-6 rounded-xl border border-sky-100">
             <Clock className="text-sky-700 mb-4" size={32} />
             <h3 className="font-bold text-stone-800 mb-2">Time Respect</h3>
             <p className="text-sm text-stone-600">Input your exact availability, and we generate a plan that fits, without overpromising.</p>
           </div>
        </div>

        <div className="bg-stone-900 text-white rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-serif font-bold mb-6">How the Smart Planner Works</h2>
          <div className="space-y-6">
             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center shrink-0 font-bold">1</div>
                <div>
                   <h4 className="font-bold text-lg mb-1">Available Touring Time (ATT) Calculation</h4>
                   <p className="text-stone-400 text-sm">We take your total time and subtract mandatory buffer. 1 Day (14 active hours) becomes max 10 hours of touring.</p>
                </div>
             </div>
             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center shrink-0 font-bold">2</div>
                <div>
                   <h4 className="font-bold text-lg mb-1">Preference Scoring</h4>
                   <p className="text-stone-400 text-sm">Spots matching your tags (History, Nature, Food) are prioritized in the queue.</p>
                </div>
             </div>
             <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center shrink-0 font-bold">3</div>
                <div>
                   <h4 className="font-bold text-lg mb-1">Day Bin Packing</h4>
                   <p className="text-stone-400 text-sm">We fill your day with spots until the ATT limit is reached, ensuring you never feel rushed.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
