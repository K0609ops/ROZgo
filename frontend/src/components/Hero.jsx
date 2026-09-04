import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ShieldCheck, Star, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[var(--color-background)] pt-20 pb-32 overflow-hidden">
      {/* Subtle background pattern/shape for premium feel without being excessive */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-2xl">

            
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] leading-[1.1] mb-6 tracking-tight">
              Trusted workers.<br />
              Better work.<br />
              <span className="text-[var(--color-primary)]">Stronger communities.</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Find verified electricians, plumbers and household professionals near you — matched by skill, availability and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/find-workers" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0e2c25] transition-colors shadow-sm">
                <Search size={20} />
                Find a Worker
              </Link>
              <Link to="/join-as-worker" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-[var(--color-text)] border border-[var(--color-border)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-sm">
                Join as a Worker
                <ArrowRight size={20} className="text-[var(--color-accent)]" />
              </Link>
            </div>
            
            <div className="flex items-center gap-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-[var(--color-success)]" />
                <span>100% Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-[var(--color-accent)]" />
                <span>Trusted Ratings</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Visual/Trust indicator composite instead of generic illustration */}
          <div className="relative hidden lg:block">
            {/* Main structural card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-[var(--color-border)]/50 relative z-10 max-w-md ml-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-xl text-[var(--color-text)]">Recent Matches</h3>
                  <p className="text-sm text-gray-500">In your neighborhood</p>
                </div>
                <div className="bg-[var(--color-background)] px-3 py-1 rounded-full text-xs font-semibold text-[var(--color-primary)]">
                  Live
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Profile Row 1 */}
                <div className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=68" alt="Electrician" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-[var(--color-text)]">Rajesh K.</h4>
                    <p className="text-xs text-gray-500">Master Electrician • 4.9 ★</p>
                  </div>
                  <div className="bg-white shadow-sm border border-gray-100 px-3 py-1.5 rounded-lg text-xs font-semibold text-[var(--color-success)]">
                    Matched
                  </div>
                </div>
                
                {/* Profile Row 2 */}
                <div className="flex items-center p-4 bg-white rounded-2xl border border-gray-100 shadow-sm relative -ml-6 mr-6">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex-shrink-0 overflow-hidden">
                    <img src="https://i.pravatar.cc/150?img=47" alt="Plumber" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-[var(--color-text)]">Anita M.</h4>
                    <p className="text-xs text-gray-500">Expert Plumber • 4.8 ★</p>
                  </div>
                  <div className="flex items-center gap-1 bg-[var(--color-accent)]/10 px-2 py-1 rounded text-xs font-semibold text-[var(--color-accent)]">
                    <Clock size={12} />
                    Arriving in 15m
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=32" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=12" alt="" />
                    <img className="w-8 h-8 rounded-full border-2 border-white" src="https://i.pravatar.cc/150?img=33" alt="" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600">
                      +2k
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">Workers available</span>
                </div>
              </div>
            </div>
            
            {/* Decorative background accent block */}
            <div className="absolute top-10 right-10 w-full h-full bg-[var(--color-primary)] rounded-3xl -z-10 opacity-5 transform rotate-3"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
