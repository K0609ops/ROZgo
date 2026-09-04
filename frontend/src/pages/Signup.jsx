import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { User, Phone, MapPin, Lock, ArrowRight } from 'lucide-react';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <PageContainer className="bg-gray-50 flex items-center justify-center min-h-[calc(100vh-80px)] py-12">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-gray-500 mt-2">Join India's first cooperative gig platform.</p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-xl">
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User size={18} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="e.g. Aditi Sharma" 
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone size={18} className="text-gray-400" />
                </div>
                <input 
                  type="tel" 
                  placeholder="10-digit mobile number" 
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City / Neighborhood</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin size={18} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="e.g. Koramangala, Bangalore" 
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input 
                  type="password" 
                  placeholder="Create a strong password" 
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors"
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="w-full bg-[var(--color-primary)] text-white font-bold py-3.5 rounded-xl hover:bg-opacity-90 transition flex items-center justify-center gap-2 mt-2">
              Create Account <ArrowRight size={18} />
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            Already have an account? <Link to="/login" className="text-[var(--color-primary)] font-bold hover:underline">Log in</Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
