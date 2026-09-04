import React from 'react';
import { Users, TrendingUp, HeartHandshake, CheckCircle2 } from 'lucide-react';

export default function Cooperative() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--color-background)] rounded-3xl p-8 md:p-16 border border-[var(--color-border)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>

              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
                Not just an app.<br />A workers' cooperative.
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Unlike traditional platforms that extract value, Rozgo is designed as a digital cooperative. Workers participate in governance, keep more of what they earn, and access social security benefits.
              </p>
              
              <div className="space-y-4">
                {[
                  'Fair wages with zero platform commission for basic gigs',
                  'Access to micro-insurance and healthcare benefits',
                  'Voting rights on platform policies and fee structures',
                  'Upskilling programs and community support'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-[var(--color-success)] flex-shrink-0" />
                    <span className="text-[var(--color-text)] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Data visualization / Cooperative visual */}
              <div className="bg-white rounded-3xl shadow-lg border border-[var(--color-border)] p-8 relative z-10">
                <div className="text-center mb-8">
                  <h3 className="font-bold text-xl text-[var(--color-text)] mb-2">Value Distribution</h3>
                  <p className="text-sm text-gray-500">How your payment is distributed</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span className="text-[var(--color-text)]">Worker Earnings</span>
                      <span className="text-[var(--color-success)]">95%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className="bg-[var(--color-success)] h-3 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm font-semibold mb-2">
                      <span className="text-[var(--color-text)]">Cooperative Fund (Insurance, Tech)</span>
                      <span className="text-[var(--color-accent)]">5%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div className="bg-[var(--color-accent)] h-3 rounded-full" style={{ width: '5%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-[var(--color-border)] grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">₹0</div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Hidden Fees</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">10k+</div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Worker Owners</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 bg-[var(--color-accent)] w-24 h-24 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 bg-[var(--color-primary)] w-32 h-32 rounded-full opacity-10 blur-2xl"></div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
