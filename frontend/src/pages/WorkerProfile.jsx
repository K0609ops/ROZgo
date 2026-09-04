import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { getWorkerById } from '../data/workers';
import { MapPin, Star, ShieldCheck, Clock, CheckCircle2, ChevronLeft } from 'lucide-react';

export default function WorkerProfile() {
  const { workerId } = useParams();
  const worker = getWorkerById(workerId) || getWorkerById("w-101"); // fallback for demo

  return (
    <PageContainer>
      {/* Cover and Header */}
      <div className="bg-[var(--color-primary)] h-48 w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <Link to="/find-workers" className="inline-flex items-center text-white/80 hover:text-white mb-4">
            <ChevronLeft size={20} /> Back to Search
          </Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative -mt-20 flex flex-col md:flex-row gap-8">
          
          {/* Left Column: Profile Card */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-2xl shadow-xl border border-[var(--color-border)] p-6 pt-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto -mt-16 mb-4 bg-gray-100">
                <img src={worker.avatar} alt={worker.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="text-center mb-6">
                <h1 className="text-2xl font-bold flex items-center justify-center gap-2">
                  {worker.name}
                  {worker.verified && <ShieldCheck size={20} className="text-[var(--color-success)]" />}
                </h1>
                <p className="text-[var(--color-primary)] font-medium text-lg">{worker.trade}</p>
                <div className="flex items-center justify-center gap-1 text-gray-500 mt-1">
                  <MapPin size={16} /> {worker.location}
                </div>
              </div>
              
              <div className="flex flex-col gap-3 mb-6 border-y border-gray-100 py-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Rate</span>
                  <span className="font-bold text-[var(--color-text)]">{worker.rate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Availability</span>
                  <span className="font-medium text-[var(--color-success)] flex items-center gap-1">
                    <Clock size={16} /> {worker.availability}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Experience</span>
                  <span className="font-medium text-[var(--color-text)]">{worker.experience}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Link to={`/booking/${worker.id}`} className="block w-full bg-[var(--color-primary)] text-white text-center font-bold py-3 rounded-xl hover:bg-opacity-90 transition">
                  Book Now
                </Link>
                <button className="block w-full bg-white border border-[var(--color-primary)] text-[var(--color-primary)] text-center font-bold py-3 rounded-xl hover:bg-gray-50 transition">
                  Contact
                </button>
              </div>
            </div>
            
            {/* Reliability Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-6 mt-6">
              <h3 className="font-bold mb-4">Cooperative Trust Score</h3>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 rounded-full border-4 border-[var(--color-success)] flex items-center justify-center text-xl font-bold">
                  {worker.reliabilityScore}
                </div>
                <div>
                  <div className="font-medium">Excellent Reliability</div>
                  <div className="text-sm text-gray-500">Based on on-time arrivals and completions.</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Details */}
          <div className="w-full md:w-2/3 space-y-6 mt-6 md:mt-0">
            <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-8">
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p className="text-gray-700 leading-relaxed">{worker.bio}</p>
              
              <h3 className="font-bold mt-8 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {worker.skills.map(skill => (
                  <span key={skill} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h3 className="font-bold mt-8 mb-4">Verifications & Badges</h3>
              <div className="flex flex-wrap gap-4">
                {worker.badges.map(badge => (
                  <div key={badge} className="flex items-center gap-2 bg-[var(--color-primary)]/5 text-[var(--color-primary)] border border-[var(--color-primary)]/20 px-4 py-2 rounded-lg text-sm font-semibold">
                    <CheckCircle2 size={16} />
                    {badge}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-[var(--color-border)] p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Reviews & Work History</h2>
                <div className="flex items-center gap-2 text-lg font-bold">
                  <Star size={20} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />
                  {worker.rating} <span className="text-gray-500 font-normal text-sm">({worker.reviews})</span>
                </div>
              </div>
              
              <div className="space-y-6">
                {worker.workHistory.length > 0 ? worker.workHistory.map(history => (
                  <div key={history.id} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">{history.title}</h4>
                      <div className="flex items-center gap-1 text-sm font-medium">
                        <Star size={14} className="text-[var(--color-accent)] fill-[var(--color-accent)]" /> {history.rating}
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 mb-2">{history.date}</div>
                    <p className="text-gray-700 text-sm">{history.comment}</p>
                  </div>
                )) : (
                  <div className="text-gray-500 italic">This worker hasn't received reviews for jobs through Rozgo yet, but their skills are fully verified by the cooperative.</div>
                )}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </PageContainer>
  );
}
