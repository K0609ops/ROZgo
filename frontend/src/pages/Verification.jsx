import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Camera, Upload, CheckCircle2 } from 'lucide-react';

export default function Verification() {
  const { user, completeVerification } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    idType: 'aadhaar',
    idNumber: '',
    experience: '',
    referenceName: '',
    referencePhone: '',
    skills: '',
    expectedSalary: '',
    salaryType: 'per_day',
    preferences: ''
  });

  const [files, setFiles] = useState({
    idProof: null,
    livePhoto: null
  });

  // Since we don't have a real backend, we'll just track if a file was selected
  const handleFileChange = (e, field) => {
    if (e.target.files && e.target.files[0]) {
      setFiles(prev => ({
        ...prev,
        [field]: e.target.files[0]
      }));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!files.idProof || !files.livePhoto) {
      alert("Please upload both your ID proof and a live photo.");
      return;
    }
    
    // Pass the data to context (ignoring actual file objects for demo purposes)
    completeVerification(formData);
    navigate('/available-works');
  };

  if (user?.isVerified) {
    return (
      <PageContainer className="bg-gray-50 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h1 className="text-3xl font-bold mb-4">Verification Complete!</h1>
        <p className="text-gray-500 text-center max-w-md mb-8">
          You are fully verified. You can now accept jobs and connect with households.
        </p>
        <button onClick={() => navigate('/available-works')} className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-xl font-bold hover:bg-opacity-90 transition-colors">
          View Available Works
        </button>
      </PageContainer>
    );
  }

  return (
    <PageContainer className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Worker Verification</h1>
          <p className="text-gray-500">Complete this one-time process to unlock all jobs.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* 1. Identity & Live Photo */}
          <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm">
            <h2 className="text-xl font-bold mb-6 border-b pb-4">1. Identity Verification</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ID Type</label>
                <select name="idType" value={formData.idType} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[var(--color-primary)] bg-gray-50">
                  <option value="aadhaar">Aadhaar Card</option>
                  <option value="pan">PAN Card</option>
                  <option value="voter">Voter ID</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ID Number</label>
                <input required name="idNumber" value={formData.idNumber} onChange={handleChange} placeholder="Enter ID Number" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[var(--color-primary)] bg-gray-50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ID Proof Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload ID Photo</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:bg-gray-50 transition-colors relative cursor-pointer">
                  <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'idProof')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                  <span className="text-sm text-gray-600 font-medium">
                    {files.idProof ? files.idProof.name : "Tap to upload front of ID"}
                  </span>
                </div>
              </div>

              {/* Live Camera Photo */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Live Photo (Take now)</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center hover:bg-gray-50 transition-colors relative cursor-pointer bg-blue-50/50">
                  {/* The 'capture="user"' attribute natively opens the front camera on mobile devices */}
                  <input type="file" accept="image/*" capture="user" onChange={(e) => handleFileChange(e, 'livePhoto')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <Camera size={24} className="mx-auto text-blue-500 mb-2" />
                  <span className="text-sm text-blue-700 font-medium">
                    {files.livePhoto ? "Photo Captured ✓" : "Tap to open camera"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Professional Details */}
          <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm">
            <h2 className="text-xl font-bold mb-6 border-b pb-4">2. Professional Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                <input required type="number" name="experience" value={formData.experience} onChange={handleChange} min="0" placeholder="e.g. 5" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[var(--color-primary)] bg-gray-50" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Specific Skills / Specializations</label>
                <input required name="skills" value={formData.skills} onChange={handleChange} placeholder="e.g. Copper wiring, AC repair" className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[var(--color-primary)] bg-gray-50" />
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
              <h3 className="text-sm font-bold text-gray-700 mb-3">Reference (Optional but recommended)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="referenceName" value={formData.referenceName} onChange={handleChange} placeholder="Reference Name (e.g. Past Employer)" className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-[var(--color-primary)] bg-white text-sm" />
                <input type="tel" name="referencePhone" value={formData.referencePhone} onChange={handleChange} placeholder="Reference Phone Number" className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-[var(--color-primary)] bg-white text-sm" />
              </div>
            </div>
          </div>

          {/* 3. Preferences & Salary */}
          <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm">
            <h2 className="text-xl font-bold mb-6 border-b pb-4">3. Expectations & Terms</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expected Salary / Wage</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">₹</span>
                  <input required type="number" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} placeholder="500" className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[var(--color-primary)] bg-gray-50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Wage Type</label>
                <select name="salaryType" value={formData.salaryType} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[var(--color-primary)] bg-gray-50">
                  <option value="per_day">Per Day</option>
                  <option value="per_job">Per Job / Contract</option>
                  <option value="per_month">Per Month</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Any Conditions or Preferences?</label>
              <textarea name="preferences" value={formData.preferences} onChange={handleChange} rows="3" placeholder="e.g. Only available morning shifts, strictly within 5km radius..." className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[var(--color-primary)] bg-gray-50" />
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button type="submit" className="flex-1 bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl hover:bg-[var(--color-primary)]/90 transition-all text-lg shadow-lg shadow-[var(--color-primary)]/20">
              Submit & Complete Verification
            </button>
            <button type="button" onClick={() => navigate('/home')} className="sm:w-auto bg-gray-100 text-gray-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition-colors text-lg">
              Skip for now
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            By submitting, you agree to background verification checks.
          </p>

        </form>
      </div>
    </PageContainer>
  );
}
