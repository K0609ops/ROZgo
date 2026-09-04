import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { Briefcase, MapPin, Clock, CalendarDays, IndianRupee, Info, X, BookmarkPlus, CheckCircle, Ban, AlertTriangle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function AvailableWorks() {
  const { user, acceptJob, saveJob, unsaveJob } = useAuth();
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('available');
  const [selectedJob, setSelectedJob] = useState(null);

  // Hardcode for simulation: if a job is in savedList and has ID=3, let's pretend it got taken by someone else.
  // Actually, we'll just add a "Simulate Unavailable" state to the dummy job.
  const [simulatedTakenJobs, setSimulatedTakenJobs] = useState([]);

  const dummyJobs = [
    { 
      id: 1, 
      title: 'Plumbing Repair', 
      price: '₹450', 
      distance: '2.5 km', 
      urgency: 'Needs immediate attention',
      description: 'The kitchen sink pipe is leaking heavily and needs a complete replacement. The main valve is shut off for now.',
      conditions: 'Must bring your own wrenches and sealing tape. Spare pipe will be provided by owner.',
      hours: '2 hours',
      extraTimeRate: '₹150 / hr',
      days: '1 day'
    },
    { 
      id: 2, 
      title: 'Electrical Fix', 
      price: '₹300', 
      distance: '4.1 km', 
      urgency: 'Flexible timing',
      description: 'Two plug sockets in the living room have stopped working after a short circuit.',
      conditions: 'Please bring a multimeter. Power can be shut off from main board.',
      hours: '1.5 hours',
      extraTimeRate: '₹100 / hr',
      days: '1 day'
    },
    { 
      id: 3, 
      title: 'Carpentry Work - Wardrobe', 
      price: '₹2500', 
      distance: '1.2 km', 
      urgency: 'Within this week',
      description: 'Need to fix broken hinges on a heavy wooden wardrobe and realign the sliding doors.',
      conditions: 'Heavy lifting might be required. Bring heavy-duty hinges if possible (will reimburse).',
      hours: '5 hours',
      extraTimeRate: '₹300 / hr',
      days: '1-2 days'
    },
    { 
      id: 4, 
      title: 'Deep Cleaning (2BHK)', 
      price: '₹1200', 
      distance: '5.0 km', 
      urgency: 'Tomorrow morning',
      description: 'Full deep cleaning of a 2BHK apartment including bathrooms and kitchen.',
      conditions: 'Cleaning supplies (acid, mops, brushes) will be provided. Just bring yourself.',
      hours: '6 hours',
      extraTimeRate: '₹150 / hr',
      days: '1 day'
    },
  ];

  const handleAcceptJob = () => {
    if (!user?.isVerified) {
      alert("You must complete verification before accepting jobs.");
      navigate('/verification');
    } else {
      acceptJob(selectedJob);
      setSelectedJob(null);
      alert("Job accepted! It is now visible on your dashboard.");
    }
  };

  const handleSaveJob = () => {
    saveJob(selectedJob);
    setSelectedJob(null);
    setActiveTab('saved');
  };

  const handleUnsaveJob = () => {
    unsaveJob(selectedJob.id);
    setSelectedJob(null);
  };

  const simulateUnavailable = (jobId) => {
    setSimulatedTakenJobs([...simulatedTakenJobs, jobId]);
  };

  const savedJobs = user?.profile?.savedJobs || [];
  const acceptedJobIds = user?.profile?.acceptedJobs?.map(j => j.id) || [];

  // Filter jobs based on tab
  let displayJobs = [];
  if (activeTab === 'available') {
    displayJobs = dummyJobs.filter(job => !savedJobs.find(s => s.id === job.id) && !acceptedJobIds.includes(job.id));
  } else {
    displayJobs = savedJobs;
  }

  return (
    <PageContainer className="bg-gray-50 flex flex-col min-h-[calc(100vh-80px)] py-8 relative">
      <div className="max-w-4xl mx-auto px-4 w-full">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-[var(--color-secondary)]/10 rounded-full flex items-center justify-center text-[var(--color-secondary)]">
            <Briefcase size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Job Opportunities</h1>
            <p className="text-gray-500">Find and accept jobs near you.</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-white rounded-2xl p-2 shadow-sm border border-[var(--color-border)] mb-8">
          <button 
            onClick={() => setActiveTab('available')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'available' ? 'bg-[var(--color-secondary)] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            Available Works
          </button>
          <button 
            onClick={() => setActiveTab('saved')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'saved' ? 'bg-[var(--color-secondary)] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            Saved for Later
            {savedJobs.length > 0 && (
              <span className="bg-white/20 text-current px-2 py-0.5 rounded-full text-xs">{savedJobs.length}</span>
            )}
          </button>
        </div>

        {/* Job List */}
        <div className="space-y-4">
          {displayJobs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-gray-100">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No jobs here</h3>
              <p className="text-gray-500">Check back later for new opportunities.</p>
            </div>
          ) : (
            displayJobs.map(job => {
              const isTaken = simulatedTakenJobs.includes(job.id);
              
              return (
                <div 
                  key={job.id} 
                  onClick={() => !isTaken && setSelectedJob(job)}
                  className={`p-6 rounded-2xl border flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all ${
                    isTaken 
                    ? 'bg-gray-100 border-gray-200 opacity-60 cursor-not-allowed' 
                    : 'bg-white border-gray-200 hover:border-[var(--color-secondary)]/50 hover:shadow-md cursor-pointer'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                      {isTaken && (
                        <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                          <Ban size={12} /> Not Available
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin size={14} /> {job.distance}</span>
                      <span className="flex items-center gap-1"><Clock size={14} /> {job.urgency}</span>
                      <span className="flex items-center gap-1"><IndianRupee size={14} /> {job.price} (Base)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    {isTaken ? (
                      <div className="text-gray-500 font-bold bg-gray-200 px-4 py-2 rounded-lg text-sm w-full md:w-auto text-center">
                        Taken by another worker
                      </div>
                    ) : (
                      <button 
                        className="bg-gray-50 text-[var(--color-secondary)] border border-[var(--color-secondary)]/20 px-6 py-2 rounded-lg font-semibold hover:bg-[var(--color-secondary)]/10 transition-colors w-full md:w-auto flex items-center justify-center gap-2"
                      >
                        View Details <Info size={16} />
                      </button>
                    )}
                  </div>

                  {/* Dev Helper to simulate taken jobs in Saved tab */}
                  {activeTab === 'saved' && !isTaken && (
                    <button 
                      onClick={(e) => { e.stopPropagation(); simulateUnavailable(job.id); }}
                      className="absolute right-2 top-2 text-[10px] bg-red-100 text-red-600 px-2 rounded hover:bg-red-200"
                    >
                      Dev: Simulate Taken
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* --- JOB DETAILS MODAL --- */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10 rounded-t-3xl">
              <h2 className="text-xl font-bold text-gray-800">Job Details</h2>
              <button 
                onClick={() => setSelectedJob(null)}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{selectedJob.title}</h1>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <MapPin size={14} /> {selectedJob.distance} away
                  </span>
                  <span className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Clock size={14} /> {selectedJob.urgency}
                  </span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                  <AlertTriangle size={18} /> Conditions & Requirements
                </h3>
                <p className="text-orange-700 leading-relaxed">{selectedJob.conditions}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                  <Clock size={24} className="text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 font-medium">Estimated Time</p>
                  <p className="text-lg font-bold text-gray-900">{selectedJob.hours}</p>
                </div>
                <div className="border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                  <CalendarDays size={24} className="text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 font-medium">Duration</p>
                  <p className="text-lg font-bold text-gray-900">{selectedJob.days}</p>
                </div>
              </div>

              <div className="bg-green-50 rounded-2xl p-5 border border-green-100 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-green-800 mb-1">Payment Structure</h3>
                  <p className="text-sm text-green-700">Base pay for estimated hours.</p>
                  <p className="text-xs text-green-600 mt-1">Extra time rate: <strong>{selectedJob.extraTimeRate}</strong></p>
                </div>
                <div className="text-3xl font-black text-green-700">
                  {selectedJob.price}
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6 rounded-b-3xl flex flex-col sm:flex-row gap-4">
              {activeTab === 'available' ? (
                <button 
                  onClick={handleSaveJob}
                  className="flex-1 py-4 rounded-xl font-bold border-2 border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <BookmarkPlus size={20} /> Save for Later
                </button>
              ) : (
                <button 
                  onClick={handleUnsaveJob}
                  className="flex-1 py-4 rounded-xl font-bold border-2 border-red-200 text-red-600 hover:border-red-300 hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                >
                  <X size={20} /> Remove from Saved
                </button>
              )}
              <button 
                onClick={handleAcceptJob}
                className="flex-[2] bg-[var(--color-secondary)] text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-[var(--color-secondary)]/20 flex items-center justify-center gap-2"
              >
                <CheckCircle size={20} /> Accept Job Now
              </button>
            </div>
          </div>
        </div>
      )}

    </PageContainer>
  );
}
