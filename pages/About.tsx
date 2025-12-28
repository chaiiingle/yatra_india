import React from 'react';
import { Clock, Coffee, Map, Linkedin, ExternalLink } from 'lucide-react';

const TeamSection = () => {
  const team = [
    { name: "Chaitali Ingle", role: "Lead Developer & Visionary", linkedin: "https://www.linkedin.com/in/chaitali-ingle-b43a94351" },
    { name: "Srushti Hande", role: "Lead Developer & Visionary", linkedin: "https://www.linkedin.com/in/srushti-hande-6b02993a2" },
    { name: "Sanjana Hodage", role: "Team Member", linkedin: "https://www.linkedin.com/in/sanjana-hodage-082946367" },
    { name: "Nikita Jadhav", role: "Team Member", linkedin: "https://www.linkedin.com/in/nikita-jadhav-6412993a3" },
    { name: "Akhilesh Patil", role: "Team Member", linkedin: "https://www.linkedin.com/in/akhilesh-gondepatil-03b9b43a1" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <span className="text-stone-400 uppercase tracking-[0.3em] text-xs font-bold">The Faces Behind the Journey</span>
          <h2 className="text-5xl font-serif font-bold mt-4 text-stone-900 leading-tight">Our Team</h2>
          <div className="w-20 h-1 bg-stone-900 mx-auto mt-8 opacity-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="group relative p-10 rounded-[2.5rem] bg-[#FBFBF9] border border-stone-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-stone-900 flex items-center justify-center text-white mb-6">
                    <span className="text-2xl font-serif">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-stone-900 mb-1">{member.name}</h3>
                  <p className="text-stone-400 text-sm uppercase tracking-widest font-medium">{member.role}</p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors font-medium text-sm"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                  <ExternalLink size={14} className="text-stone-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="pt-24 pb-12">
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
      
      {/* Team section added below the main content */}
      <TeamSection />
    </div>
  );
};

export default About;
