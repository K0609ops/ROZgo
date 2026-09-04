import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { Save, ChevronLeft, UploadCloud } from 'lucide-react';

export default function WorkerProfileEdit() {
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    navigate('/worker/dashboard');
  };

  return (
    <PageContainer className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center mb-6">
          <Link to="/worker/dashboard" className="inline-flex items-center gap-1 text-gray-500 hover:text-[var(--color-primary)] font-medium">
            <ChevronLeft size={20} /> Back to Dashboard
          </Link>
          <button onClick={handleSave} className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-lg font-bold hover:bg-opacity-90 transition flex items-center gap-2">
            <Save size={16} /> Save Changes
          </button>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>
        
        <form onSubmit={handleSave} className="space-y-6">
          
          {/* Photo */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm">
            <h2 className="text-xl font-bold mb-6">Profile Photo</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border border-gray-200">
                <img src="https://i.pravatar.cc/150?img=68" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:bg-gray-50 transition cursor-pointer">
                <UploadCloud size={24} className="text-gray-400 mx-auto mb-2" />
                <div className="font-semibold text-gray-700 text-sm mb-1">Click to upload new photo</div>
                <div className="text-xs text-gray-500">JPG, PNG up to 5MB</div>
              </div>
            </div>
          </div>
          
          {/* Basic Info */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm">
            <h2 className="text-xl font-bold mb-6">Basic Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" defaultValue="Rajesh Kumar" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] bg-gray-50" readOnly />
                <p className="text-xs text-gray-500 mt-1">Name cannot be changed after Aadhaar verification.</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" defaultValue="9876543210" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)]" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Short Bio</label>
                <textarea rows="4" defaultValue="Certified master electrician with over 8 years of residential and commercial experience. I take pride in safe, clean, and efficient work." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)]"></textarea>
              </div>
            </div>
          </div>
          
          {/* Professional Details */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[var(--color-border)] shadow-sm">
            <h2 className="text-xl font-bold mb-6">Professional Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Primary Trade</label>
                <select defaultValue="Electrician" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)]">
                  <option>Electrician</option>
                  <option>Plumber</option>
                  <option>Carpenter</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                <input type="number" defaultValue="8" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)]" />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
              <div className="flex flex-wrap gap-2 mb-3">
                {['Wiring', 'Appliance Repair', 'Circuit Breakers', 'Lighting Installation'].map(skill => (
                  <div key={skill} className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] border border-[var(--color-primary)]/20 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-2">
                    {skill} <button type="button" className="text-[var(--color-primary)] hover:text-red-500">&times;</button>
                  </div>
                ))}
              </div>
              <input type="text" placeholder="Add a new skill and press Enter..." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] text-sm" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate (₹)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <input type="number" defaultValue="400" className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-3 focus:outline-none focus:border-[var(--color-primary)]" />
              </div>
            </div>
          </div>
          
        </form>
      </div>
    </PageContainer>
  );
}
