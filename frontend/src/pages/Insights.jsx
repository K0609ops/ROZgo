import React from 'react';
import PageContainer from '../components/ui/PageContainer';
import { BarChart, TrendingUp, Cpu, Users, ShieldCheck, Activity } from 'lucide-react';

export default function Insights() {
  return (
    <PageContainer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Rozgo Insights</h1>
            <p className="text-gray-500">Platform intelligence and AI matching metrics.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-sm font-semibold flex items-center gap-2">
            <Activity size={16} className="text-[var(--color-success)]" /> Live Data (Simulated)
          </div>
        </div>
        
        {/* KPI Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Workers Onboarded", value: "12,450", trend: "+15% this month", color: "text-[var(--color-primary)]" },
            { label: "Jobs Completed", value: "145.2K", trend: "98% success rate", color: "text-[var(--color-success)]" },
            { label: "Avg Match Time", value: "1.4 min", trend: "Powered by SIH AI", color: "text-[var(--color-accent)]" },
            { label: "Value to Workers", value: "₹4.2 Cr", trend: "0% commission extraction", color: "text-blue-600" },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
              <div className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</div>
              <div className={`text-3xl font-extrabold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-xs font-medium text-gray-500 flex items-center gap-1">
                <TrendingUp size={12} /> {stat.trend}
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI Matching Architecture */}
          <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                <Cpu size={20} className="text-[var(--color-accent)]" />
              </div>
              <h2 className="text-xl font-bold">AI Matching Overview</h2>
            </div>
            
            <p className="text-gray-600 mb-8">
              Our proprietary matching algorithm considers multiple dimensions to find the optimal professional for every household task.
            </p>
            
            <div className="space-y-6">
              {[
                { name: "Proximity & Travel Time (Geospatial)", weight: "35%" },
                { name: "Skill & Task Semantic Match (NLP)", weight: "30%" },
                { name: "Historical Reliability & Ratings", weight: "20%" },
                { name: "Schedule Availability Optimization", weight: "15%" },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>{item.name}</span>
                    <span>{item.weight}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-[var(--color-primary)] h-2 rounded-full" style={{ width: item.weight }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Trust & Safety */}
          <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-success)]/10 flex items-center justify-center">
                <ShieldCheck size={20} className="text-[var(--color-success)]" />
              </div>
              <h2 className="text-xl font-bold">Trust & Verification Funnel</h2>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-gray-100 rounded-full"></div>
              
              <div className="space-y-8 relative">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-gray-50 border-4 border-white shadow-sm flex items-center justify-center font-bold text-gray-500 z-10">100k</div>
                  <div>
                    <h4 className="font-bold">Initial Registrations</h4>
                    <p className="text-sm text-gray-500">Workers who downloaded the app</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-blue-50 border-4 border-white shadow-sm flex items-center justify-center font-bold text-blue-600 z-10">45k</div>
                  <div>
                    <h4 className="font-bold">Aadhaar & KYC Passed</h4>
                    <p className="text-sm text-gray-500">Identity verification complete</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/10 border-4 border-white shadow-sm flex items-center justify-center font-bold text-[var(--color-primary)] z-10">28k</div>
                  <div>
                    <h4 className="font-bold">Skill Validation</h4>
                    <p className="text-sm text-gray-500">Peer-reviewed or assessed skills</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-success)] border-4 border-white shadow-lg flex items-center justify-center font-bold text-white z-10 text-xl">12k</div>
                  <div>
                    <h4 className="font-bold text-[var(--color-success)]">Active Cooperative Members</h4>
                    <p className="text-sm text-gray-500">Maintaining &gt;90% reliability scores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
