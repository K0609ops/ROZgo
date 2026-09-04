import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PageContainer from '../components/ui/PageContainer';
import { UserRound, Star, Briefcase, MapPin, Phone, LogOut, ShieldCheck, Award, Edit3, Plus, Trash2, Save, X, AlertTriangle, CheckCircle } from 'lucide-react';

export default function Profile() {
  const { user, logout, updateProfile } = useAuth();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  
  // Initialize form state with defaults
  const [formData, setFormData] = useState({
    name: user?.profile?.name || '',
    place: user?.profile?.place || user?.profile?.location || '',
    phoneNumber: user?.phoneNumber || user?.profile?.contactDetails || '',
    experience: user?.profile?.experience || '',
    description: user?.profile?.description || '',
    references: user?.profile?.references || [],
    domains: user?.profile?.domains || (user?.profile?.skills ? [{ name: user.profile.skills, rating: 4.5, reviewCount: 12 }] : [])
  });

  if (!user) return null;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isWorker = user.role === 'worker';

  // --- Handlers for dynamic arrays ---
  const addReference = () => {
    if (formData.references.length >= 5) return;
    setFormData(prev => ({
      ...prev,
      references: [...prev.references, { name: '', phone: '', domain: '' }]
    }));
  };

  const updateReference = (index, field, value) => {
    const newRefs = [...formData.references];
    newRefs[index][field] = value;
    setFormData(prev => ({ ...prev, references: newRefs }));
  };

  const removeReference = (index) => {
    setFormData(prev => ({
      ...prev,
      references: prev.references.filter((_, i) => i !== index)
    }));
  };

  const addDomain = () => {
    setFormData(prev => ({
      ...prev,
      domains: [...prev.domains, { name: 'Plumbing', rating: (Math.random() * (5 - 4) + 4).toFixed(1), reviewCount: Math.floor(Math.random() * 30) + 1 }]
    }));
  };

  const updateDomain = (index, value) => {
    const newDomains = [...formData.domains];
    newDomains[index].name = value;
    setFormData(prev => ({ ...prev, domains: newDomains }));
  };

  const removeDomain = (index) => {
    setFormData(prev => ({
      ...prev,
      domains: prev.domains.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    // Filter out empty entries
    const cleanReferences = formData.references.filter(r => r.name.trim() || r.phone.trim());
    const cleanDomains = formData.domains.filter(d => d.name.trim());
    
    updateProfile({
      phoneNumber: formData.phoneNumber,
      profile: {
        ...user.profile,
        name: formData.name,
        place: formData.place,
        experience: formData.experience,
        description: formData.description,
        references: cleanReferences,
        domains: cleanDomains
      }
    });
    setIsEditing(false);
  };

  const AVAILABLE_DOMAINS = [
    'Plumbing', 'Electrical', 'Carpentry', 'Painting', 
    'Deep Cleaning', 'Gardening', 'Masonry', 'Driving', 
    'Maid / Housekeeping', 'Security'
  ];

  return (
    <PageContainer className="bg-gray-50 py-12 min-h-[calc(100vh-80px)]">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Profile Header */}
        <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-xl mb-8 relative">
          
          {/* Top Actions */}
          <div className="absolute top-6 right-6 flex items-center gap-3">
            {!isEditing ? (
              <>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 text-[var(--color-primary)] font-semibold bg-[var(--color-primary)]/10 px-4 py-2 rounded-xl hover:bg-[var(--color-primary)]/20 transition-colors"
                >
                  <Edit3 size={18} />
                  Edit Profile
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-red-500 hover:text-red-700 font-semibold bg-red-50 px-4 py-2 rounded-xl transition-colors"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setIsEditing(false)}
                  className="flex items-center gap-2 text-gray-500 font-semibold bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  <X size={18} />
                  Cancel
                </button>
                <button 
                  onClick={handleSave}
                  className="flex items-center gap-2 text-white font-semibold bg-[var(--color-success)] px-6 py-2 rounded-xl hover:bg-opacity-90 transition-colors shadow-lg shadow-[var(--color-success)]/20"
                >
                  <Save size={18} />
                  Save
                </button>
              </>
            )}
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-12 md:mt-0">
            <div className="w-32 h-32 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-primary)] flex-shrink-0 relative overflow-hidden">
              {user.profile?.verificationData?.livePhoto && !isEditing ? (
                 <div className="w-full h-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">Pic</div>
              ) : (
                 isWorker ? <Briefcase size={48} /> : <UserRound size={48} />
              )}
            </div>
            
            <div className="flex-1 text-center md:text-left pt-2 w-full">
              <div className="inline-block px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                {isWorker ? 'Worker Profile' : 'Employer Profile'}
              </div>
              
              {isEditing ? (
                <div className="space-y-4 max-w-md mx-auto md:mx-0">
                  <input 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Full Name"
                    className="w-full px-4 py-2 border rounded-lg focus:border-[var(--color-primary)] outline-none text-xl font-bold"
                  />
                  <div className="flex gap-2">
                    <input 
                      value={formData.place}
                      onChange={(e) => setFormData({...formData, place: e.target.value})}
                      placeholder="Location"
                      className="flex-1 px-4 py-2 border rounded-lg focus:border-[var(--color-primary)] outline-none"
                    />
                    <input 
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                      placeholder="Phone Number"
                      className="flex-1 px-4 py-2 border rounded-lg focus:border-[var(--color-primary)] outline-none"
                    />
                  </div>
                  {isWorker && (
                    <input 
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      placeholder="Years of Experience"
                      className="w-full px-4 py-2 border rounded-lg focus:border-[var(--color-primary)] outline-none"
                    />
                  )}
                  <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="About Me..."
                    rows="3"
                    className="w-full px-4 py-2 border rounded-lg focus:border-[var(--color-primary)] outline-none"
                  />
                </div>
              ) : (
                <>
                  <h1 className="text-3xl font-bold mb-2">{user.profile.name || 'Anonymous User'}</h1>
                  
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-600 mt-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={18} className="text-gray-400" />
                      <span>{user.profile.place || user.profile.location || 'Location not set'}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone size={18} className="text-gray-400" />
                      <span>{user.phoneNumber || user.profile.contactDetails || 'No contact info'}</span>
                    </div>
                    {isWorker && user.profile.experience && (
                      <div className="flex items-center gap-1">
                        <Award size={18} className="text-gray-400" />
                        <span>{user.profile.experience} Years Exp.</span>
                      </div>
                    )}
                    {isWorker && user.profile.cancellations > 0 && (
                      <div className="flex items-center gap-1 text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded-md" title="Penalty for late cancellations">
                        <AlertTriangle size={16} />
                        <span>{user.profile.cancellations} Late Cancellations</span>
                      </div>
                    )}
                  </div>
                  
                  {isWorker && user.profile.description && (
                    <div className="mt-6 border-t border-gray-100 pt-6">
                      <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">About Me</h3>
                      <p className="text-gray-700">{user.profile.description}</p>
                    </div>
                  )}
                </>
              )}

              {/* Action Buttons for Workers (Only in View Mode) */}
              {isWorker && !isEditing && (
                <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                  <button 
                    onClick={() => navigate('/verification')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold transition-all ${user.isVerified ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700 hover:bg-amber-200'}`}
                  >
                    <ShieldCheck size={20} />
                    {user.isVerified ? 'Verified Account' : 'Pending Verification'}
                  </button>
                  
                  <button 
                    onClick={() => navigate('/certification')}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-blue-100 text-blue-700 hover:bg-blue-200 transition-all"
                  >
                    <Award size={20} />
                    My Certifications
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Sections for Workers */}
        {isWorker && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Domains & Ratings */}
            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Star size={24} className="text-[var(--color-accent)]" />
                  My Domains & Ratings
                </h2>
                {isEditing && (
                  <button onClick={addDomain} className="text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 p-2 rounded-lg transition-colors">
                    <Plus size={20} />
                  </button>
                )}
              </div>
              
              <div className="space-y-4">
                {isEditing ? (
                  formData.domains.map((domain, idx) => (
                    <div key={idx} className="flex gap-2 items-center">
                      <select 
                        value={domain.name}
                        onChange={(e) => updateDomain(idx, e.target.value)}
                        className="flex-1 px-4 py-2 border rounded-lg outline-none focus:border-[var(--color-primary)] bg-white"
                      >
                        {AVAILABLE_DOMAINS.map(d => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                      <button onClick={() => removeDomain(idx)} className="text-red-500 hover:bg-red-50 p-2 rounded-lg">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  ))
                ) : (
                  formData.domains.length > 0 ? (
                    formData.domains.map((domain, idx) => {
                      const penalty = (user.profile.cancellations || 0) * 0.5;
                      const calculatedRating = Math.max(1, (parseFloat(domain.rating) - penalty)).toFixed(1);
                      const hasPenalty = penalty > 0;
                      
                      return (
                        <div key={idx} className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col">
                          <div className="flex justify-between items-center">
                            <h4 className="font-bold text-gray-800">{domain.name}</h4>
                            <div className="text-right">
                              <div className="flex items-center gap-1 text-[var(--color-accent)] font-bold justify-end">
                                <Star size={16} fill="currentColor" /> 
                                {hasPenalty && <span className="text-red-500 line-through text-xs mr-1">{domain.rating}</span>}
                                {calculatedRating}
                              </div>
                              <p className="text-xs text-gray-500">{domain.reviewCount} reviews</p>
                            </div>
                          </div>
                          {hasPenalty && (
                            <div className="text-xs text-red-600 bg-red-50 p-2 rounded-lg border border-red-100 flex gap-2 items-start mt-3">
                              <AlertTriangle size={14} className="mt-0.5 flex-shrink-0" />
                              <p><strong>System Note:</strong> Rating reduced due to {user.profile.cancellations} late cancellation(s).</p>
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-gray-400 text-center py-4">No domains added yet.</p>
                  )
                )}
              </div>
            </div>

            {/* References */}
            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <UserRound size={24} className="text-blue-500" />
                  References
                </h2>
                {isEditing && formData.references.length < 5 && (
                  <button onClick={addReference} className="text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 p-2 rounded-lg transition-colors" title="Add up to 5 references">
                    <Plus size={20} />
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {isEditing ? (
                  <>
                    {formData.references.map((ref, idx) => (
                      <div key={idx} className="flex gap-2 items-start border p-3 rounded-lg bg-gray-50 relative">
                        <div className="flex-1 space-y-2">
                          <input 
                            value={ref.name}
                            onChange={(e) => updateReference(idx, 'name', e.target.value)}
                            placeholder="Reference Name"
                            className="w-full px-3 py-1.5 text-sm border rounded-md outline-none"
                          />
                          <input 
                            value={ref.phone}
                            onChange={(e) => updateReference(idx, 'phone', e.target.value)}
                            placeholder="Phone Number"
                            className="w-full px-3 py-1.5 text-sm border rounded-md outline-none"
                          />
                          <select
                            value={ref.domain || ''}
                            onChange={(e) => updateReference(idx, 'domain', e.target.value)}
                            className="w-full px-3 py-1.5 text-sm border rounded-md outline-none bg-white text-gray-500"
                          >
                            <option value="">Optional: Recommended for Domain...</option>
                            {AVAILABLE_DOMAINS.map(d => (
                              <option key={d} value={d} className="text-gray-900">{d}</option>
                            ))}
                          </select>
                        </div>
                        <button onClick={() => removeReference(idx)} className="text-red-500 hover:bg-red-50 p-1.5 rounded-lg absolute -right-2 -top-2 bg-white border shadow-sm">
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                    <p className="text-xs text-gray-400 text-right">{formData.references.length}/5 max</p>
                  </>
                ) : (
                  formData.references.length > 0 ? (
                    formData.references.map((ref, idx) => (
                      <div key={idx} className="border-b last:border-0 pb-3 last:pb-0">
                        <h4 className="font-bold text-gray-800 text-sm">{ref.name}</h4>
                        <div className="flex items-center gap-4 mt-1">
                          <p className="text-gray-500 text-sm flex items-center gap-1">
                            <Phone size={14} /> {ref.phone}
                          </p>
                          {ref.domain && (
                            <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md flex items-center gap-1">
                              <Star size={10} /> {ref.domain}
                            </span>
                          )}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400 text-center py-4">No references added.</p>
                  )
                )}
              </div>
            </div>

          </div>
        )}

        {/* Previous Dashboard Sections */}
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-xl mb-12">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Briefcase size={24} className="text-[var(--color-primary)]" />
              {isWorker ? 'Work History & Reviews' : 'Order History'}
            </h2>
            
            <div className="space-y-4">
              {user.profile.completedJobs && user.profile.completedJobs.length > 0 ? (
                user.profile.completedJobs.map(job => (
                  <div key={job.id} className="border border-gray-100 rounded-2xl p-6 bg-gray-50 flex flex-col md:flex-row gap-6 justify-between items-start">
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-800">{job.title}</h3>
                        <span className="font-black text-green-700 bg-green-100 px-3 py-1 rounded-lg">{job.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 mb-4">Completed on: {new Date(job.completedAt).toLocaleDateString()}</p>
                      
                      {job.employerReview && (
                        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative">
                          <div className="absolute -top-3 -left-3 w-6 h-6 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center font-serif text-2xl font-bold">"</div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-bold text-gray-700">{job.employerReview.author}</span>
                            <div className="flex items-center gap-1 text-amber-500 text-sm">
                              <Star size={14} fill="currentColor" /> {job.employerReview.rating}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm italic">{job.employerReview.text}</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="w-full md:w-auto flex flex-col gap-2">
                      <div className="bg-green-50 text-green-700 font-bold px-4 py-2 rounded-lg text-center border border-green-200 text-sm flex items-center justify-center gap-2">
                        <CheckCircle size={16} /> Job Completed
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-gray-400">
                  <Briefcase size={32} className="mx-auto mb-3 opacity-50" />
                  <p>No completed jobs yet.</p>
                  <p className="text-sm mt-1">Accept and complete jobs to build your history!</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </PageContainer>
  );
}
