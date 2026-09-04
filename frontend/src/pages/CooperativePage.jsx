import React from 'react';
import PageContainer from '../components/ui/PageContainer';
import { Users, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function CooperativePage() {
  return (
    <PageContainer>
      <div className="bg-[#0e2c25] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#123B32] to-[#0a1f1a]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
            Workers don't just use Rozgo.<br />
            <span className="text-[var(--color-accent)]">They own a part of it.</span>
          </h1>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            We are replacing the extractive gig economy with a digital cooperative model. 
            By leveraging technology for efficiency, we can redirect value back to the workers who create it.
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Visual Explanation */}
        <div className="bg-white rounded-3xl border border-[var(--color-border)] p-8 md:p-16 shadow-xl mb-24 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center relative z-10">
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[var(--color-background)] rounded-full flex items-center justify-center mb-6 shadow-inner border border-gray-100">
                <Users size={40} className="text-[var(--color-primary)]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">The Worker</h3>
              <p className="text-gray-600">Provides skilled labor to the community.</p>
            </div>
            
            <div className="hidden md:flex flex-col items-center justify-center relative">
              <div className="w-full h-1 border-t-2 border-dashed border-gray-300 absolute top-1/2 -translate-y-1/2 -z-10"></div>
              <div className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-500 shadow-sm">Joins</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#123b32]/30">
                <span className="text-white font-bold text-4xl font-[var(--font-heading)]">K</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Rozgo Cooperative</h3>
              <p className="text-gray-600">A democratically governed tech platform.</p>
            </div>
            
            <div className="hidden md:flex flex-col items-center justify-center relative col-span-3 h-20">
              <div className="h-full w-1 border-l-2 border-dashed border-gray-300 absolute left-1/2 -translate-x-1/2 -z-10"></div>
              <div className="bg-white px-4 py-2 rounded-full border border-gray-200 text-sm font-bold text-gray-500 shadow-sm">Creates</div>
            </div>
            
            <div className="flex flex-col items-center col-span-1 md:col-span-3 max-w-lg mx-auto">
              <div className="w-24 h-24 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#f59e0b]/30">
                <TrendingUp size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Shared Value</h3>
              <p className="text-gray-600">Fair wages, social security, and annual dividends based on platform participation.</p>
            </div>
            
          </div>
        </div>
        
        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">How it works in practice</h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-success)]/20 flex items-center justify-center">
                    <CheckCircle2 size={18} className="text-[var(--color-success)]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Lower Commissions</h4>
                  <p className="text-gray-600">Traditional platforms take 20-30%. We take a flat 5% to maintain the technology and fund the cooperative insurance pool.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <ShieldCheck size={18} className="text-[var(--color-primary)]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Professional Identity</h4>
                  <p className="text-gray-600">Your profile, ratings, and certifications belong to you. We verify skills and provide a digital identity that workers can take anywhere.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                    <Users size={18} className="text-[var(--color-accent)]" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Democratic Governance</h4>
                  <p className="text-gray-600">Major decisions about fee structures, dispute resolution policies, and platform features are voted on by the worker community.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--color-background)] rounded-3xl p-8 border border-[var(--color-border)]">
            <h3 className="font-bold text-xl mb-6 text-center">Value Distribution</h3>
            
            <div className="space-y-6">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[var(--color-text)] bg-white border border-gray-200">
                      Worker Take-home
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-[var(--color-success)]">
                      95%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-200">
                  <div style={{ width: "95%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[var(--color-success)]"></div>
                </div>
              </div>
              
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[var(--color-text)] bg-white border border-gray-200">
                      Co-op Fund (Tech & Insurance)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-[var(--color-primary)]">
                      5%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-200">
                  <div style={{ width: "5%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[var(--color-primary)]"></div>
                </div>
              </div>
              
              <div className="relative pt-1 opacity-50">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500 bg-white border border-gray-200">
                      Corporate Profit / Hidden Fees
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-gray-500">
                      0%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-200">
                  <div style={{ width: "0%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-400"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-800">
              <strong>Note:</strong> The 5% cooperative fund is managed transparently. Annual surpluses are redistributed to workers as dividends or used to expand benefits like micro-loans.
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
