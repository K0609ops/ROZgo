import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PageContainer from '../components/ui/PageContainer';
import { UserRound } from 'lucide-react';

export default function EmployerSetup() {
  const navigate = useNavigate();
  const { updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    contactDetails: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({
      profile: formData,
      isSetupComplete: true
    });
    navigate('/home');
  };

  return (
    <PageContainer className="bg-gray-50 py-12 min-h-[calc(100vh-80px)]">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center text-[var(--color-primary)]">
              <UserRound size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Employer Profile Setup</h1>
              <p className="text-gray-500 text-sm">Tell us about yourself so workers can reach you</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input required name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none bg-gray-50 focus:bg-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Details (Phone/Email)</label>
              <input required name="contactDetails" value={formData.contactDetails} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none bg-gray-50 focus:bg-white" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location / Address</label>
              <textarea required name="location" value={formData.location} onChange={handleChange} rows="3" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] outline-none bg-gray-50 focus:bg-white" />
            </div>

            <button type="submit" className="w-full bg-[var(--color-primary)] text-white font-bold py-4 rounded-xl hover:bg-[var(--color-primary)]/90 transition-colors">
              Complete Setup
            </button>
          </form>
        </div>
      </div>
    </PageContainer>
  );
}
