import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { workers } from '../data/workers';
import { Cpu, MapPin, CheckCircle2, ShieldCheck, Star, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export default function AIMatchResults() {
  const [expandedFactor, setExpandedFactor] = useState({});
  const matchedWorkers = [...workers].sort((a, b) => (b.aiMatchScore || 0) - (a.aiMatchScore || 0));

  const toggleFactor = (id) => {
    setExpandedFactor(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <PageContainer className="bg-gray-50">
      {/* Search Header Summary */}
      <div className="bg-[var(--color-primary)] text-white pt-8 pb-12 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-4 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-[var(--color-accent)]">
            <Cpu size={14} /> AI Match Engine Active
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-6">AI Recommended Workers</h1>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 flex flex-wrap justify-center gap-4 md:gap-8 items-center text-sm md:text-base">
            <div className="flex flex-col items-center">
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Service</span>
              <span className="font-bold">Electrician needed</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Task</span>
              <span className="font-bold">Fan installation</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/20"></div>
            <div className="flex flex-col items-center">
              <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Location</span>
              <span className="font-bold flex items-center gap-1"><MapPin size={14} /> Jaipur</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-8 relative z-20">
        <div className="space-y-6">
          {matchedWorkers.slice(0, 3).map((worker, idx) => (
            <div key={worker.id} className={`bg-white rounded-3xl shadow-lg overflow-hidden border-2 ${idx === 0 ? 'border-[var(--color-accent)]' : 'border-[var(--color-border)]'}`}>
              
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                {/* Score badge (mobile) */}
                <div className="md:hidden w-full flex justify-between items-center bg-[var(--color-background)] p-3 rounded-xl mb-2">
                  <span className="font-bold flex items-center gap-2"><Cpu size={16} className="text-[var(--color-primary)]" /> Match Score</span>
                  <span className="font-extrabold text-[var(--color-primary)] text-xl">{worker.aiMatchScore}%</span>
                </div>

                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0 relative">
                  <img src={worker.avatar} alt={worker.name} className="w-full h-full object-cover" />
                  {worker.verified && (
                    <div className="absolute bottom-0 right-0 bg-white rounded-full p-0.5">
                      <ShieldCheck size={20} className="text-[var(--color-success)] fill-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-2xl font-bold flex items-center gap-2">
                        {worker.name}
                      </h3>
                      <p className="text-[var(--color-primary)] font-semibold">{worker.trade}</p>
                    </div>
                    
                    {/* Score badge (desktop) */}
                    <div className="hidden md:flex flex-col items-center bg-[var(--color-background)] px-4 py-2 rounded-xl border border-[var(--color-border)]">
                      <div className="text-sm font-bold text-gray-500 flex items-center gap-1 mb-1">
                        <Cpu size={14} /> AI Match
                      </div>
                      <div className="text-2xl font-extrabold text-[var(--color-primary)] leading-none">{worker.aiMatchScore}%</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600 mb-4 bg-gray-50 p-3 rounded-xl">
                    <div className="flex items-center gap-1 font-bold text-[var(--color-text)]">
                      <Star size={16} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />
                      {worker.rating}
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="font-medium">{worker.completedJobs} jobs</div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="font-medium">{worker.experience} exp.</div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-1"><MapPin size={14}/> {worker.distance}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock size={16} className="text-gray-400" />
                        <span className="font-medium text-[var(--color-success)]">{worker.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle2 size={16} className="text-gray-400" />
                        <span className="font-medium text-gray-600">Reliability: <span className="text-[var(--color-text)] font-bold">{worker.reliabilityScore}%</span></span>
                      </div>
                    </div>
                    <div className="text-right w-full sm:w-auto">
                      <div className="text-xl font-bold text-[var(--color-primary)]">{worker.rate}</div>
                      <div className="text-xs text-gray-500 font-medium">Estimated Price</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link to={`/worker/${worker.id}`} className="flex-1 bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] text-center font-bold py-2.5 rounded-xl hover:bg-gray-50 transition">
                      View Profile
                    </Link>
                    <Link to={`/booking/${worker.id}`} className="flex-1 bg-[var(--color-primary)] text-white text-center font-bold py-2.5 rounded-xl hover:bg-opacity-90 transition shadow-md">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Expandable Match Factors */}
              <div className="border-t border-[var(--color-border)] bg-gray-50/50">
                <button 
                  onClick={() => toggleFactor(worker.id)}
                  className="w-full flex items-center justify-between p-4 font-semibold text-[var(--color-primary)] hover:bg-gray-50 transition-colors"
                >
                  <span className="flex items-center gap-2"><Cpu size={18} /> Why this match?</span>
                  {expandedFactor[worker.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {expandedFactor[worker.id] && (
                  <div className="p-4 pt-0 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    {worker.matchFactors && worker.matchFactors.length > 0 ? (
                      worker.matchFactors.map((factor, i) => (
                        <div key={i} className="flex gap-3 bg-white p-3 rounded-lg border border-gray-100">
                          <CheckCircle2 size={16} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-gray-800">{factor.factor}</div>
                            <div className="text-gray-600 mt-0.5 text-xs">{factor.desc}</div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <div className="flex gap-3 bg-white p-3 rounded-lg border border-gray-100">
                          <CheckCircle2 size={16} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-gray-800">Skill Match</div>
                            <div className="text-gray-600 mt-0.5 text-xs">Strong match for requested service.</div>
                          </div>
                        </div>
                        <div className="flex gap-3 bg-white p-3 rounded-lg border border-gray-100">
                          <CheckCircle2 size={16} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-gray-800">Reliability</div>
                            <div className="text-gray-600 mt-0.5 text-xs">High completion rate on similar jobs.</div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
