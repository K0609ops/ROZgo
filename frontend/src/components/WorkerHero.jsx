import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, ArrowRight, Star, ShieldCheck, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function WorkerHero() {
  const { user, acceptJob, rejectJob, workerCompleteJob, employerCompleteJob } = useAuth();
  const navigate = useNavigate();

  const handleAcceptJob = (e, job) => {
    if (!user?.isVerified) {
      e.preventDefault();
      alert("You must complete verification before accepting jobs.");
      navigate('/verification');
    } else {
      acceptJob(job);
      alert("Job accepted! It is now tracked in your dashboard.");
    }
  };
  return (
    <div className="relative bg-[var(--color-background)] overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Worker Focused */}
          <div className="max-w-2xl">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] leading-[1.1] mb-6">
              Earn with <span className="text-[var(--color-secondary)]">Dignity</span> <br className="hidden md:block" />
              and Build Your Career
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Connect directly with households that need your skills. Get certified, manage your schedule, and grow your reputation through verified reviews.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/available-works" className="bg-[var(--color-secondary)] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-secondary)]/20">
                <Briefcase size={20} />
                View Available Works
              </Link>
              {!user?.isVerified && (
                <Link to="/verification" className="bg-white text-[var(--color-text)] border-2 border-[var(--color-border)] px-8 py-4 rounded-xl text-lg font-bold hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-all flex items-center justify-center gap-2">
                  Get Verified <ArrowRight size={20} />
                </Link>
              )}
            </div>
            
            <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-[var(--color-secondary)]" />
                <span>Secure Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={20} className="text-[var(--color-accent)]" />
                <span>Fair Ratings</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Worker Stats/Trust Card */}
          <div className="relative hidden lg:block">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-[var(--color-border)]/50 relative z-10 max-w-md ml-auto">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-xl text-[var(--color-text)]">Your Next Job</h3>
                  <p className="text-sm text-gray-500">Nearby requests matching your skills</p>
                </div>
                <div className="bg-green-100 px-3 py-1 rounded-full text-xs font-semibold text-green-700">
                  New
                </div>
              </div>
              
              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                {user?.profile?.acceptedJobs?.length > 0 ? (
                  user.profile.acceptedJobs.map(job => (
                    <div key={job.id} className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm relative -ml-2 mr-2">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-semibold text-sm text-[var(--color-text)]">{job.title}</h4>
                        <span className="font-bold text-[var(--color-secondary)]">{job.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">{job.distance} away • {job.urgency}</p>
                      
                      <div className="flex flex-col gap-2">
                        {!job.workerCompleted ? (
                          <div className="flex gap-2">
                            <button 
                              onClick={() => workerCompleteJob(job.id)}
                              className="flex-[2] bg-green-100 text-green-700 hover:bg-green-200 py-2 rounded-lg text-sm font-bold text-center transition-colors shadow-sm"
                            >
                              Mark as Complete ✓
                            </button>
                            <button 
                              onClick={() => {
                                if (window.confirm("Are you sure you want to cancel this job? This will be recorded on your profile and lower your rating.")) {
                                  rejectJob(job.id);
                                }
                              }}
                              className="flex-1 bg-red-50 text-red-600 hover:bg-red-100 py-2 rounded-lg text-xs font-bold transition-colors shadow-sm"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col gap-2">
                            <div className="w-full bg-blue-50 text-blue-700 py-2 rounded-lg text-sm font-semibold text-center border border-blue-100 animate-pulse">
                              ⏳ Waiting for Employer Approval...
                            </div>
                            <button 
                              onClick={() => employerCompleteJob(job.id)}
                              className="text-[10px] bg-purple-100 text-purple-700 py-1 px-2 rounded hover:bg-purple-200 w-max mx-auto"
                            >
                              Dev: Simulate Employer Completion
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-6">
                    <p className="text-sm text-gray-500">No upcoming jobs. Visit 'Available Works' to find opportunities.</p>
                  </div>
                )}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                {user?.isVerified ? (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <CheckCircle size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Account Verified ✓</p>
                      <p className="text-xs text-gray-500">You are ready to accept jobs!</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                      <AlertCircle size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">Verification Pending</p>
                      <p className="text-xs text-gray-500">Complete verification to unlock jobs.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Decorative background accent block */}
            <div className="absolute top-10 right-10 w-full h-full bg-[var(--color-secondary)] rounded-3xl -z-10 opacity-5 transform rotate-3"></div>
            <div className="absolute -bottom-5 -left-5 w-full h-full bg-[var(--color-accent)] rounded-3xl -z-20 opacity-5 transform -rotate-2"></div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
