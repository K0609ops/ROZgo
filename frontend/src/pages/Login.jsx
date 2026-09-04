import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { Phone, Briefcase, UserRound, UserPlus, Lock } from 'lucide-react';

import { useAuth } from '../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { login, fastLogin } = useAuth();
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length !== 10) return alert("Please enter a valid 10-digit mobile number");
    login(phoneNumber);
    navigate('/setup');
  };

  const handleExistingWorker = (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length !== 10) return alert("Please enter a valid 10-digit mobile number");
    fastLogin(phoneNumber, 'worker');
    navigate('/home');
  };

  const handleExistingEmployer = (e) => {
    e.preventDefault();
    if (!phoneNumber || phoneNumber.length !== 10) return alert("Please enter a valid 10-digit mobile number");
    fastLogin(phoneNumber, 'employer');
    navigate('/home');
  };

  return (
    <PageContainer className="bg-gray-50 flex items-center justify-center min-h-[calc(100vh-80px)] py-12">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-center mb-8">
          <img src="/rozgo-logo-full.png" alt="Rozgo Logo" className="w-full h-auto object-contain mx-auto mb-10 scale-[1.3] drop-shadow-sm" />
          <h1 className="text-2xl font-bold">Welcome to Rozgo</h1>
          <p className="text-gray-500 mt-2">Enter your phone number to continue</p>
        </div>
        
        <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone size={18} className="text-gray-400" />
                </div>
                <input 
                  type="tel" 
                  value={phoneNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    if (val.length <= 10) setPhoneNumber(val);
                  }}
                  placeholder="10-digit mobile number" 
                  pattern="[0-9]{10}"
                  maxLength="10"
                  minLength="10"
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">Password / OTP</label>
                <a href="#" className="text-xs text-[var(--color-primary)] font-semibold hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock size={18} className="text-gray-400" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password or OTP" 
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] bg-gray-50 focus:bg-white transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-100">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Existing Users</h3>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={handleExistingWorker}
                  className="flex flex-col items-center justify-center gap-2 bg-blue-50 text-blue-700 p-4 rounded-xl hover:bg-blue-100 transition-colors border border-blue-200"
                >
                  <Briefcase size={20} />
                  <span className="text-sm font-bold">Login as Worker</span>
                </button>
                <button 
                  onClick={handleExistingEmployer}
                  className="flex flex-col items-center justify-center gap-2 bg-purple-50 text-purple-700 p-4 rounded-xl hover:bg-purple-100 transition-colors border border-purple-200"
                >
                  <UserRound size={20} />
                  <span className="text-sm font-bold">Login as Employer</span>
                </button>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-100">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">New to Rozgo?</h3>
              <button 
                onClick={handleCreateAccount}
                className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white p-4 rounded-xl hover:bg-opacity-90 transition-all font-bold shadow-lg shadow-[var(--color-primary)]/20"
              >
                <UserPlus size={20} />
                Create New Account
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
