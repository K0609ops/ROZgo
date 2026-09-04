import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { IndianRupee, Briefcase, Star, Clock, CheckCircle2, ChevronRight, Bell } from 'lucide-react';

export default function WorkerDashboard() {
  return (
    <PageContainer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 border-2 border-white shadow-sm">
              <img src="https://i.pravatar.cc/150?img=68" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-text)]">Hi, Rajesh</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="flex items-center gap-1 text-[var(--color-success)] font-semibold">
                  <CheckCircle2 size={14} /> Verified Member
                </span>
                • Electrician
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Link to="/worker/profile/edit" className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition text-sm">
              Edit Profile
            </Link>
            <button className="bg-white border border-gray-200 text-gray-700 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-50 transition relative">
              <Bell size={18} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-4">
              <IndianRupee size={20} className="text-[var(--color-success)]" />
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">₹14,500</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Earnings (This Mo)</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-4">
              <Briefcase size={20} className="text-blue-500" />
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">24</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Jobs Completed</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm flex flex-col justify-between">
            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mb-4">
              <Star size={20} className="text-[var(--color-accent)]" />
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">4.9</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">Current Rating</div>
            </div>
          </div>
          
          <div className="bg-[var(--color-primary)] text-white rounded-2xl p-6 border border-[#1a4b41] shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-accent)] opacity-20 rounded-full blur-xl translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10">
              <div className="text-3xl font-extrabold mb-1">98%</div>
              <div className="text-xs text-white/70 font-medium uppercase tracking-wider mb-2">Reliability Score</div>
              <div className="text-xs text-[var(--color-accent)] font-semibold">Top 5% in Bangalore</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Requests */}
            <div className="bg-white rounded-3xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center justify-between">
                New Job Requests
                <span className="bg-[var(--color-accent)] text-white text-xs px-2 py-1 rounded-full">2 New</span>
              </h2>
              
              <div className="space-y-4">
                {/* Request 1 */}
                <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50 hover:border-[var(--color-primary)] transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-bold text-lg">Wiring Fix</h4>
                      <div className="text-sm text-gray-500">2.1 km away • Koramangala</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[var(--color-primary)]">Est. ₹600</div>
                      <div className="text-xs text-gray-500">Today, 4:00 PM</div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-4 pt-4 border-t border-gray-200">
                    <button className="flex-1 bg-[var(--color-primary)] text-white font-bold py-2 rounded-lg hover:bg-opacity-90 transition text-sm">
                      Accept
                    </button>
                    <button className="flex-1 bg-white border border-gray-200 text-gray-700 font-bold py-2 rounded-lg hover:bg-gray-100 transition text-sm">
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Upcoming Schedule */}
            <div className="bg-white rounded-3xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Upcoming Schedule</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex flex-col items-center justify-center text-blue-600 flex-shrink-0">
                    <span className="text-xs font-bold uppercase">Sep</span>
                    <span className="font-bold leading-none">02</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold">AC Installation</div>
                    <div className="text-sm text-gray-500">10:00 AM • Sunrise Enclave</div>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
                    <ChevronRight size={18} className="text-gray-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-[var(--color-border)] p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Availability</h3>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[var(--color-success)] rounded-full shadow-[0_0_8px_rgba(32,138,96,0.6)]"></div>
                  <span className="font-semibold text-gray-700">Available Now</span>
                </div>
                <button className="text-sm font-semibold text-[var(--color-primary)] hover:underline">Change</button>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl border border-[var(--color-border)] p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-4">Co-op Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Health Insurance</span>
                  <span className="text-xs bg-[var(--color-success)]/10 text-[var(--color-success)] px-2 py-1 rounded font-bold">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">Platform Fee</span>
                  <span className="text-sm font-bold text-[var(--color-primary)]">5% (Fixed)</span>
                </div>
                <Link to="/cooperative" className="text-xs font-bold text-[var(--color-primary)] hover:underline flex items-center mt-2">
                  View full benefits <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </PageContainer>
  );
}
