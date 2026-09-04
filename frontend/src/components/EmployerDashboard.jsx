import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Search, Plus, MapPin, Star, UserRound } from 'lucide-react';

export default function EmployerDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 py-12 min-h-[calc(100vh-80px)]">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.profile?.name || 'Employer'}</h1>
            <p className="text-gray-500">Manage your household tasks and find verified professionals.</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => navigate('/find-workers')}
              className="bg-white text-[var(--color-primary)] border border-gray-200 px-5 py-2.5 rounded-xl font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-sm"
            >
              <Search size={18} /> Find Workers
            </button>
            <button 
              className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-xl font-bold hover:bg-opacity-90 transition-colors flex items-center gap-2 shadow-md shadow-[var(--color-primary)]/20"
            >
              <Plus size={18} /> Post a Job
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Active Jobs Section */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Your Active Job Posts</h2>
              
              <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-gray-400">
                <Plus size={32} className="mx-auto mb-3 opacity-50" />
                <p>No active jobs posted.</p>
                <p className="text-sm mt-1">Post a job to start receiving applications from verified workers.</p>
              </div>
            </div>

            {/* Recommended Workers */}
            <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Recommended Workers Near You</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Dummy Worker Card 1 */}
                <div className="border border-gray-100 p-4 rounded-2xl flex flex-col justify-between hover:border-[var(--color-primary)]/30 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-primary)]">
                        <UserRound size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">Rajesh Kumar</h4>
                        <span className="text-xs text-gray-500 flex items-center gap-1"><MapPin size={12} /> 1.2 km away</span>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md text-xs font-bold">Verified</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4 line-clamp-2">
                    Expert plumber with 8 years of experience. Fixed rates for basic repairs.
                  </div>
                  <div className="flex justify-between items-center mt-auto border-t border-gray-50 pt-3">
                    <div className="flex items-center gap-1 text-[var(--color-accent)] font-bold text-sm">
                      <Star size={14} fill="currentColor" /> 4.8
                    </div>
                    <button className="text-[var(--color-primary)] font-bold text-sm hover:underline">View Profile</button>
                  </div>
                </div>

                {/* Dummy Worker Card 2 */}
                <div className="border border-gray-100 p-4 rounded-2xl flex flex-col justify-between hover:border-[var(--color-primary)]/30 transition-colors cursor-pointer">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-primary)]">
                        <UserRound size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">Anitha Sharma</h4>
                        <span className="text-xs text-gray-500 flex items-center gap-1"><MapPin size={12} /> 2.5 km away</span>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md text-xs font-bold">Verified</span>
                  </div>
                  <div className="text-sm text-gray-600 mb-4 line-clamp-2">
                    Deep cleaning and housekeeping specialist. Available for weekly schedules.
                  </div>
                  <div className="flex justify-between items-center mt-auto border-t border-gray-50 pt-3">
                    <div className="flex items-center gap-1 text-[var(--color-accent)] font-bold text-sm">
                      <Star size={14} fill="currentColor" /> 4.9
                    </div>
                    <button className="text-[var(--color-primary)] font-bold text-sm hover:underline">View Profile</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[var(--color-primary)] text-white rounded-3xl p-6 shadow-lg shadow-[var(--color-primary)]/20 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
              <h3 className="font-bold text-lg mb-2 relative z-10">Need urgent help?</h3>
              <p className="text-[var(--color-background)] text-sm mb-4 relative z-10">Browse available workers who can arrive within 2 hours.</p>
              <button 
                onClick={() => navigate('/find-workers')}
                className="w-full bg-white text-[var(--color-primary)] py-2 rounded-xl font-bold relative z-10"
              >
                Find Urgent Workers
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
