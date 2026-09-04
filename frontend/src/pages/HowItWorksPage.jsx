import React, { useState } from 'react';
import PageContainer from '../components/ui/PageContainer';
import { Search, Cpu, CheckCircle, CalendarCheck, ShieldCheck, Star, UserPlus, FileCheck, MapPin, TrendingUp } from 'lucide-react';

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState('households');

  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="bg-[var(--color-primary)] text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-accent)] opacity-10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">How Rozgo Works</h1>
          <p className="text-xl text-white/80 leading-relaxed mb-10">
            A seamless discovery platform for households, and a fair cooperative for workers. Select your journey below to see how it works.
          </p>
          
          <div className="inline-flex bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/20">
            <button 
              onClick={() => setActiveTab('households')}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${activeTab === 'households' ? 'bg-white text-[var(--color-primary)] shadow-md' : 'text-white hover:bg-white/10'}`}
            >
              For Households
            </button>
            <button 
              onClick={() => setActiveTab('workers')}
              className={`px-8 py-3 rounded-xl font-bold text-lg transition-all ${activeTab === 'workers' ? 'bg-white text-[var(--color-primary)] shadow-md' : 'text-white hover:bg-white/10'}`}
            >
              For Workers
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {activeTab === 'households' ? (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Find reliable help, instantly.</h2>
              <p className="text-gray-600 text-lg">We've simplified the process of finding trustworthy household professionals.</p>
            </div>
            
            <div className="relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-0 bottom-0 left-12 w-1 bg-gray-100 -z-10 rounded-full"></div>
              
              <div className="space-y-12">
                {[
                  { icon: <Search size={24} />, title: "1. Search", desc: "Tell us what you need and where you are. Whether it's a plumbing emergency or daily domestic help." },
                  { icon: <Cpu size={24} />, title: "2. AI Match", desc: "Our Smart India Hackathon AI algorithm instantly ranks workers based on skill, proximity, and reliability." },
                  { icon: <ShieldCheck size={24} />, title: "3. Verify", desc: "Review detailed profiles, past work history, cooperative ratings, and background checks." },
                  { icon: <CalendarCheck size={24} />, title: "4. Book Securely", desc: "Book your preferred worker. Your payment is held securely in escrow until the job is completed." },
                  { icon: <CheckCircle size={24} />, title: "5. Complete Job", desc: "The worker arrives on time and completes the task to your satisfaction." },
                  { icon: <Star size={24} />, title: "6. Rate & Release", desc: "Release the payment from escrow and rate your experience to help the community." }
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] transition-colors text-gray-400">
                      {step.icon}
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex-1 group-hover:border-[var(--color-primary)] group-hover:shadow-md transition-all">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Build your business, your way.</h2>
              <p className="text-gray-600 text-lg">Join the cooperative, get more jobs, and keep more of what you earn.</p>
            </div>
            
            <div className="relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-0 bottom-0 left-12 w-1 bg-gray-100 -z-10 rounded-full"></div>
              
              <div className="space-y-12">
                {[
                  { icon: <UserPlus size={24} />, title: "1. Create Profile", desc: "Sign up and showcase your trade, years of experience, and base rates." },
                  { icon: <FileCheck size={24} />, title: "2. Verify Skills", desc: "Complete Aadhaar verification and skill assessments to earn trust badges." },
                  { icon: <MapPin size={24} />, title: "3. Receive Jobs", desc: "Get notifications for jobs in your immediate neighborhood. No more long commutes." },
                  { icon: <CheckCircle size={24} />, title: "4. Complete Work", desc: "Provide excellent service. Payments are guaranteed through our escrow system." },
                  { icon: <Star size={24} />, title: "5. Build Reputation", desc: "Earn ratings that belong to you. Higher ratings mean better AI matching." },
                  { icon: <TrendingUp size={24} />, title: "6. Grow Together", desc: "As a cooperative member, you get voting rights, insurance benefits, and profit dividends." }
                ].map((step, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-colors text-gray-400">
                      {step.icon}
                    </div>
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex-1 group-hover:border-[var(--color-accent)] group-hover:shadow-md transition-all">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
}
