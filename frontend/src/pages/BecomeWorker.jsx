import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { ArrowRight, UserCheck, Star, MapPin, HeartHandshake, ShieldCheck, Briefcase, TrendingUp } from 'lucide-react';

export default function BecomeWorker() {
  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="bg-[var(--color-primary)] text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Turn your skills into opportunity.</h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Build your professional identity, find more work and grow with a cooperative platform built for workers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/worker/register" className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-opacity-90 transition shadow-lg text-center flex items-center justify-center gap-2">
                Start Your Profile <ArrowRight size={20} />
              </Link>
              <a href="#how-it-works" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition text-center">
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Join Rozgo */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold mb-12 text-center text-[var(--color-text)]">Why join Rozgo?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-[var(--color-background)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <UserCheck size={32} className="text-[var(--color-primary)]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Verified Profile</h3>
            <p className="text-gray-600">Get a professional profile that proves your skills and identity.</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-[var(--color-background)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Star size={32} className="text-[var(--color-accent)]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Build Reputation</h3>
            <p className="text-gray-600">Collect ratings and reviews that belong to you, not the platform.</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-[var(--color-background)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Local Matches</h3>
            <p className="text-gray-600">Get matched with nearby jobs to minimize travel time and cost.</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-16 h-16 bg-[var(--color-background)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HeartHandshake size={32} className="text-[var(--color-success)]" />
            </div>
            <h3 className="text-xl font-bold mb-3">Co-op Ownership</h3>
            <p className="text-gray-600">Participate in the cooperative, vote on rules, and keep more earnings.</p>
          </div>
        </div>
      </div>
      
      {/* Professional Identity Preview */}
      <div className="bg-[var(--color-background)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Your work deserves a professional identity.</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Stand out to customers with a verified, trust-building digital profile.</p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[var(--color-border)] shadow-2xl overflow-hidden">
            <div className="bg-[var(--color-primary)] h-32 relative">
              <div className="absolute -bottom-12 left-8 w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                <img src="https://i.pravatar.cc/150?img=68" alt="Profile preview" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-8 pt-16">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold flex items-center gap-2">Rajesh Kumar <ShieldCheck size={20} className="text-[var(--color-success)]" /></h3>
                  <p className="text-[var(--color-primary)] font-semibold text-lg">Master Electrician</p>
                </div>
                <div className="flex gap-2">
                  <div className="bg-gray-100 px-3 py-1 rounded-lg text-sm font-bold flex items-center gap-1">
                    <Star size={14} className="text-[var(--color-accent)] fill-[var(--color-accent)]" /> 4.9
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <div className="text-center">
                  <div className="font-bold text-xl">356</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Jobs</div>
                </div>
                <div className="text-center border-l border-r border-gray-200">
                  <div className="font-bold text-xl text-[var(--color-success)]">98%</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Reliability</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-xl">8 yrs</div>
                  <div className="text-xs text-gray-500 uppercase font-semibold">Experience</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-bold mb-3 text-sm text-gray-500 uppercase tracking-wider">Verified Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 rounded-full text-sm font-semibold">House Wiring</span>
                  <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 rounded-full text-sm font-semibold">Appliance Repair</span>
                  <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 rounded-full text-sm font-semibold">Circuit Breakers</span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* How it works for workers */}
      <div id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How it works for workers</h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { num: "01", title: "Create your profile", desc: "Sign up and detail your trade, skills, and experience." },
              { num: "02", title: "Verify your identity", desc: "Complete a simple Aadhaar verification to get the trusted badge." },
              { num: "03", title: "Receive nearby jobs", desc: "Our AI matches you with jobs in your immediate locality." },
              { num: "04", title: "Complete jobs", desc: "Do great work, get paid securely via escrow, and earn reviews." },
              { num: "05", title: "Benefit from the co-op", desc: "Gain access to insurance, voting rights, and keep 95% of what you earn." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-[var(--color-primary)] transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-[var(--color-primary)] shadow-sm text-xl flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Cooperative Section */}
      <div className="bg-[#0e2c25] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeartHandshake size={48} className="mx-auto mb-6 text-[var(--color-accent)]" />
          <h2 className="text-4xl font-bold mb-6">Built for workers, not middlemen.</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            Rozgo operates as a digital cooperative. There are no corporate shareholders taking 30% of your earnings. 
            The platform is sustained by a transparent 5% fee that funds the technology and worker benefits.
          </p>
          <Link to="/worker/register" className="inline-block bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg">
            Create My Worker Profile
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
