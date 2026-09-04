import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { Award, Upload, FileText, X, CheckCircle, Clock, BookOpen, ChevronRight, FileBadge } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AVAILABLE_DOMAINS = [
  'Plumbing', 'Electrical', 'Carpentry', 'Painting', 
  'Deep Cleaning', 'Gardening', 'Masonry', 'Driving', 
  'Maid / Housekeeping', 'Security'
];

export default function Certification() {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  
  const [activeTab, setActiveTab] = useState('rpl'); // 'rpl' or 'upload'
  
  // File Upload State
  const [isUploading, setIsUploading] = useState(false);
  const [certifications, setCertifications] = useState(user?.profile?.certifications || []);
  const fileInputRef = useRef(null);

  // RPL State
  const rplData = user?.profile?.rplApplication || null;
  const [rplForm, setRplForm] = useState({
    domain: '',
    experience: ''
  });

  if (!user) return null;

  // --- File Upload Handlers ---
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    
    setTimeout(() => {
      const newCert = {
        id: Date.now(),
        name: file.name,
        date: new Date().toLocaleDateString(),
        status: 'Pending Verification'
      };
      
      const updatedCerts = [...certifications, newCert];
      setCertifications(updatedCerts);
      
      updateProfile({
        profile: {
          ...user.profile,
          certifications: updatedCerts
        }
      });
      
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }, 1500);
  };

  const removeCertification = (id) => {
    const updatedCerts = certifications.filter(c => c.id !== id);
    setCertifications(updatedCerts);
    updateProfile({
      profile: {
        ...user.profile,
        certifications: updatedCerts
      }
    });
  };

  // --- RPL Handlers ---
  const submitRplApplication = (e) => {
    e.preventDefault();
    if (!rplForm.domain || !rplForm.experience) {
      alert("Please fill out all fields.");
      return;
    }

    const newRplData = {
      domain: rplForm.domain,
      experience: rplForm.experience,
      appliedOn: new Date().toLocaleDateString(),
      status: 'registered' // statuses: 'registered', 'screening', 'assessment', 'certified'
    };

    updateProfile({
      profile: {
        ...user.profile,
        rplApplication: newRplData
      }
    });

    // Open official PMKVY website in new tab
    window.open('https://stag.nsdcindia.org/products/pradhan-mantri-kaushal-vikas-yojana', '_blank');
  };

  return (
    <PageContainer className="bg-gray-50 min-h-[calc(100vh-80px)] py-12">
      <div className="max-w-3xl mx-auto px-4 mt-8">
        
        {/* Header Tabs */}
        <div className="flex bg-white rounded-2xl p-2 shadow-sm border border-[var(--color-border)] mb-8">
          <button 
            onClick={() => setActiveTab('rpl')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'rpl' ? 'bg-[var(--color-primary)] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            <BookOpen size={18} />
            PMKVY RPL Certification
          </button>
          <button 
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-3 text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'upload' ? 'bg-[var(--color-primary)] text-white shadow-md' : 'text-gray-500 hover:bg-gray-50'
            }`}
          >
            <FileBadge size={18} />
            Upload Existing
          </button>
        </div>

        {/* --- RPL TAB --- */}
        {activeTab === 'rpl' && (
          <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-xl mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8 text-center md:text-left border-b border-gray-100 pb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Skill_India.png/320px-Skill_India.png" alt="Skill India" className="w-12 object-contain grayscale opacity-50" />
              </div>
              <div>
                <h1 className="text-2xl font-bold mb-2">Recognition of Prior Learning (RPL)</h1>
                <p className="text-gray-600">
                  Already have experience but no formal certificate? Get your skills assessed and officially certified by Skill India (PMKVY) to earn more trust and better pay.
                </p>
              </div>
            </div>

            {rplData ? (
              // RPL Status Tracker
              <div>
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <Clock size={20} className="text-[var(--color-primary)]" />
                  Application Status: {rplData.domain}
                </h3>
                
                <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 space-y-8 pb-4">
                  {/* Step 1: Registered */}
                  <div className="relative pl-8">
                    <div className="absolute -left-[11px] top-0.5 w-5 h-5 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <CheckCircle size={12} className="text-white" />
                    </div>
                    <h4 className="font-bold text-gray-800">Application Submitted</h4>
                    <p className="text-sm text-gray-500">You applied on {rplData.appliedOn}</p>
                  </div>
                  
                  {/* Step 2: Screening */}
                  <div className="relative pl-8">
                    <div className="absolute -left-[11px] top-0.5 w-5 h-5 bg-[var(--color-primary)] rounded-full border-4 border-white animate-pulse"></div>
                    <h4 className="font-bold text-[var(--color-primary)]">Pending Pre-Screening & Orientation</h4>
                    <p className="text-sm text-gray-500">A local coordinator will contact you shortly to verify your {rplData.experience} years of experience.</p>
                  </div>

                  {/* Step 3: Assessment */}
                  <div className="relative pl-8">
                    <div className="absolute -left-[11px] top-0.5 w-5 h-5 bg-gray-200 rounded-full border-4 border-white"></div>
                    <h4 className="font-bold text-gray-400">Skills Assessment</h4>
                    <p className="text-sm text-gray-400">Practical demonstration of your skills.</p>
                  </div>

                  {/* Step 4: Certified */}
                  <div className="relative pl-8">
                    <div className="absolute -left-[11px] top-0.5 w-5 h-5 bg-gray-200 rounded-full border-4 border-white"></div>
                    <h4 className="font-bold text-gray-400">Certificate Issuance</h4>
                    <p className="text-sm text-gray-400">Receive your official Skill India certificate.</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <a 
                    href="https://stag.nsdcindia.org/products/pradhan-mantri-kaushal-vikas-yojana" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] font-bold hover:underline text-sm"
                  >
                    Visit Official PMKVY Portal for more details
                  </a>
                </div>
              </div>
            ) : (
              // RPL Application Form
              <form onSubmit={submitRplApplication} className="space-y-6 max-w-md mx-auto">
                <div className="bg-blue-50 text-blue-800 p-4 rounded-xl text-sm mb-6">
                  <p className="font-bold flex items-center gap-2 mb-1"><BookOpen size={16} /> Fast-track Certification</p>
                  <p>You do not need to attend full training courses. You will only be assessed on what you already know.</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Which job role do you want to be certified in?</label>
                  <select 
                    required
                    value={rplForm.domain}
                    onChange={(e) => setRplForm({...rplForm, domain: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50"
                  >
                    <option value="">Select Domain...</option>
                    {AVAILABLE_DOMAINS.map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Years of Experience</label>
                  <input 
                    type="number"
                    required
                    min="1"
                    max="50"
                    value={rplForm.experience}
                    onChange={(e) => setRplForm({...rplForm, experience: e.target.value})}
                    placeholder="e.g. 5"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[var(--color-primary)] text-white font-bold py-3.5 rounded-xl hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[var(--color-primary)]/20"
                >
                  Apply for Assessment
                  <ChevronRight size={18} />
                </button>
              </form>
            )}
          </div>
        )}

        {/* --- UPLOAD TAB --- */}
        {activeTab === 'upload' && (
          <>
            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-xl mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Award size={32} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Upload Certificates</h1>
                  <p className="text-gray-500 text-sm">Upload your existing trade certificates, diplomas, or degrees.</p>
                </div>
              </div>

              {/* Upload Area */}
              <div 
                onClick={() => !isUploading && fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-all ${
                  isUploading ? 'bg-gray-50 border-gray-300' : 'border-[var(--color-primary)]/40 hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)]/5'
                }`}
              >
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileUpload}
                />
                {isUploading ? (
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-8 h-8 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-[var(--color-primary)] font-bold">Uploading File...</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3 text-gray-500">
                    <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-primary)] mb-2">
                      <Upload size={28} />
                    </div>
                    <p className="font-bold text-gray-700 text-lg">Click to Upload Certificate</p>
                    <p className="text-sm">Supported formats: PDF, JPG, PNG (Max 5MB)</p>
                  </div>
                )}
              </div>
            </div>

            {/* Uploaded Certificates List */}
            {certifications.length > 0 && (
              <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-xl">
                <h2 className="text-xl font-bold mb-6">Uploaded Files</h2>
                <div className="space-y-4">
                  {certifications.map(cert => (
                    <div key={cert.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl bg-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[var(--color-primary)] border border-gray-100 flex-shrink-0">
                          <FileText size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 break-all">{cert.name}</h4>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
                            <span>Uploaded on {cert.date}</span>
                            <span className="flex items-center gap-1 text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md font-semibold">
                              Pending Verification
                            </span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeCertification(cert.id)}
                        className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors flex-shrink-0"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </PageContainer>
  );
}
