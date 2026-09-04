import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { Check, ArrowRight, ArrowLeft, UploadCloud, ShieldCheck, User, Briefcase, IndianRupee, Clock } from 'lucide-react';

export default function WorkerRegistration() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const steps = [
    { label: "Personal", icon: <User size={16} /> },
    { label: "Trade", icon: <Briefcase size={16} /> },
    { label: "Experience", icon: <IndianRupee size={16} /> },
    { label: "Verification", icon: <ShieldCheck size={16} /> },
    { label: "Availability", icon: <Clock size={16} /> },
    { label: "Preview", icon: <Check size={16} /> }
  ];
  
  const handleNext = () => setStep(prev => Math.min(prev + 1, 6));
  const handlePrev = () => setStep(prev => Math.max(prev - 1, 1));
  const handleComplete = () => navigate('/worker/dashboard');

  return (
    <PageContainer className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[var(--color-text)]">Create Your Professional Profile</h1>
          <p className="text-gray-500 mt-2">Join Rozgo's worker cooperative</p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex justify-between relative min-w-[600px]">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full"></div>
            <div className="absolute top-1/2 left-0 h-1 bg-[var(--color-primary)] -z-10 -translate-y-1/2 rounded-full transition-all duration-300" style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}></div>
            
            {steps.map((s, idx) => (
              <div key={s.label} className="flex flex-col items-center bg-gray-50">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-colors duration-300 shadow-sm ${step > idx + 1 ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white' : step === idx + 1 ? 'bg-white border-[var(--color-primary)] text-[var(--color-primary)]' : 'bg-white border-gray-200 text-gray-400'}`}>
                  {step > idx + 1 ? <Check size={18} /> : s.icon}
                </div>
                <div className={`mt-2 text-xs font-bold uppercase tracking-wider ${step >= idx + 1 ? 'text-[var(--color-primary)]' : 'text-gray-400'}`}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-[var(--color-border)] shadow-lg min-h-[450px] flex flex-col">
          
          {step === 1 && (
            <div className="flex-grow space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-2xl font-bold mb-2">Personal Details</h2>
              <p className="text-gray-500 mb-6 border-b border-gray-100 pb-4">Let's start with your basic information as it appears on your ID.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Full Name (as per Aadhaar)</label>
                  <input type="text" placeholder="e.g. Rajesh Kumar" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all bg-gray-50 focus:bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Mobile Number</label>
                  <input type="tel" placeholder="10-digit number" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all bg-gray-50 focus:bg-white" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Complete Address</label>
                  <textarea rows="3" placeholder="Enter your full residential address..." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all bg-gray-50 focus:bg-white"></textarea>
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="flex-grow space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-2xl font-bold mb-2">Trade & Skills</h2>
              <p className="text-gray-500 mb-6 border-b border-gray-100 pb-4">Define your expertise to match with the right jobs.</p>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Primary Trade</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Electrician', 'Plumber', 'Carpenter', 'Domestic Help'].map((trade, i) => (
                    <label key={trade} className="relative">
                      <input type="radio" name="trade" className="peer sr-only" defaultChecked={i===0} />
                      <div className="border border-gray-200 rounded-xl px-4 py-4 cursor-pointer text-center font-semibold text-gray-600 peer-checked:border-[var(--color-primary)] peer-checked:bg-[var(--color-primary)]/5 peer-checked:text-[var(--color-primary)] hover:bg-gray-50 transition-all">
                        {trade}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <label className="block text-sm font-bold text-gray-700 mb-2">Specific Skills (Select all that apply)</label>
                <div className="flex flex-wrap gap-3">
                  {['Wiring', 'Appliance Repair', 'Lighting Installation', 'Circuit Breakers', 'Inverter Setup'].map(s => (
                    <label key={s} className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="border border-gray-200 rounded-lg px-4 py-2 cursor-pointer font-medium text-sm text-gray-600 peer-checked:border-[var(--color-primary)] peer-checked:bg-[var(--color-primary)]/10 peer-checked:text-[var(--color-primary)] transition-all">
                        {s}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="flex-grow space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-2xl font-bold mb-2">Experience & Rates</h2>
              <p className="text-gray-500 mb-6 border-b border-gray-100 pb-4">Tell customers about your professional background.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Years of Experience</label>
                  <input type="number" placeholder="e.g. 5" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all bg-gray-50 focus:bg-white" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Base Hourly Rate (₹)</label>
                  <input type="number" placeholder="e.g. 400" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all bg-gray-50 focus:bg-white" />
                  <p className="text-xs text-gray-500 mt-1">You keep 95% of this. 5% goes to co-op fund.</p>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Professional Bio</label>
                <textarea rows="4" placeholder="Briefly describe your work ethic, guarantees, and what makes you reliable..." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all bg-gray-50 focus:bg-white"></textarea>
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div className="flex-grow space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-2xl font-bold mb-2">Verification (Demo)</h2>
              <p className="text-gray-500 mb-6 border-b border-gray-100 pb-4">Secure Aadhaar verification ensures a safe platform for everyone.</p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                <UploadCloud size={48} className="text-[var(--color-primary)]/50 mx-auto mb-4" />
                <div className="font-bold text-gray-800 text-lg mb-1">Upload Aadhaar / ID</div>
                <div className="text-sm text-gray-500 mb-6">Front and back images required</div>
                <span className="bg-white border border-gray-300 px-6 py-2.5 rounded-xl font-bold shadow-sm">
                  Browse Files
                </span>
              </div>
              
              <div className="bg-[var(--color-success)]/10 border border-[var(--color-success)]/30 rounded-xl p-4 flex items-start gap-3 mt-4">
                <ShieldCheck className="text-[var(--color-success)] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[var(--color-success)]">Privacy Protected</h4>
                  <p className="text-sm text-gray-700 mt-1">Your documents are encrypted and only used for background verification by the Rozgo trust team. They are never shared publicly.</p>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="flex-grow space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-2xl font-bold mb-2">Availability</h2>
              <p className="text-gray-500 mb-6 border-b border-gray-100 pb-4">Set your general working hours.</p>
              
              <div className="space-y-4">
                {['Monday - Friday', 'Saturday', 'Sunday'].map(day => (
                  <div key={day} className="flex items-center justify-between p-4 border border-gray-200 rounded-xl bg-gray-50">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-[var(--color-primary)] rounded border-gray-300 focus:ring-[var(--color-primary)]" />
                      <span className="font-bold text-gray-700">{day}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <select className="border border-gray-200 rounded-lg px-2 py-1 text-sm bg-white outline-none">
                        <option>09:00 AM</option>
                        <option>10:00 AM</option>
                      </select>
                      <span className="text-gray-400">to</span>
                      <select className="border border-gray-200 rounded-lg px-2 py-1 text-sm bg-white outline-none">
                        <option>06:00 PM</option>
                        <option>07:00 PM</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {step === 6 && (
            <div className="flex-grow space-y-6 animate-in fade-in slide-in-from-right-4 duration-300 text-center">
              <div className="w-24 h-24 bg-[var(--color-success)] rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-xl border-4 border-white">
                <Check size={48} />
              </div>
              <h2 className="text-3xl font-bold mb-2">Profile Ready!</h2>
              <p className="text-gray-600 max-w-md mx-auto mb-8">
                Your profile looks great. Submit your application to join the Rozgo cooperative.
              </p>
              
              <div className="bg-gray-50 rounded-2xl p-6 max-w-sm mx-auto text-left border border-gray-200 shadow-sm">
                <div className="flex justify-between border-b border-gray-200 pb-3 mb-3">
                  <span className="text-gray-500 font-medium">Name</span>
                  <span className="font-bold">Rajesh Kumar</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3 mb-3">
                  <span className="text-gray-500 font-medium">Trade</span>
                  <span className="font-bold">Electrician</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-3 mb-3">
                  <span className="text-gray-500 font-medium">Rate</span>
                  <span className="font-bold">₹400/hr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Verification</span>
                  <span className="font-bold text-[var(--color-accent)]">Pending Review</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Navigation Controls */}
          <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
            <button 
              onClick={handlePrev}
              disabled={step === 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors ${step === 1 ? 'text-gray-300 cursor-not-allowed opacity-50' : 'text-gray-600 hover:bg-gray-100 bg-gray-50'}`}
            >
              <ArrowLeft size={18} /> Back
            </button>
            
            <div className="flex gap-3">
              {step < 6 && (
                <button className="hidden md:flex items-center justify-center px-6 py-3 rounded-xl font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                  Save & Continue Later
                </button>
              )}
              
              {step < 6 ? (
                <button 
                  onClick={handleNext}
                  className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-md"
                >
                  Continue <ArrowRight size={18} />
                </button>
              ) : (
                <button 
                  onClick={handleComplete}
                  className="flex items-center gap-2 bg-[var(--color-success)] text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg"
                >
                  Create My Rozgo Profile
                </button>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </PageContainer>
  );
}
