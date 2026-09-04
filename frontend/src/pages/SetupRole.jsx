import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PageContainer from '../components/ui/PageContainer';
import { Briefcase, UserRound } from 'lucide-react';

export default function SetupRole() {
  const navigate = useNavigate();
  const { updateProfile } = useAuth();

  const handleRoleSelection = (role) => {
    updateProfile({ role });
    if (role === 'worker') {
      navigate('/setup/worker');
    } else {
      navigate('/setup/employer');
    }
  };

  return (
    <PageContainer className="bg-gray-50 flex items-center justify-center min-h-[calc(100vh-80px)] py-12">
      <div className="max-w-2xl w-full mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-4">Welcome to Rozgo</h1>
          <p className="text-gray-500">To get started, tell us how you'd like to use our platform.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            onClick={() => handleRoleSelection('employer')}
            className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-[var(--color-primary)] hover:shadow-xl transition-all flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors">
              <UserRound size={32} className="text-[var(--color-primary)] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2">I need a service</h3>
            <p className="text-gray-500 text-sm">I want to hire verified local workers for my household needs.</p>
          </button>
          
          <button 
            onClick={() => handleRoleSelection('worker')}
            className="bg-white p-8 rounded-3xl border-2 border-transparent hover:border-[var(--color-secondary)] hover:shadow-xl transition-all flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--color-secondary)] transition-colors">
              <Briefcase size={32} className="text-[var(--color-secondary)] group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2">I want to work</h3>
            <p className="text-gray-500 text-sm">I want to offer my services and earn money with dignity.</p>
          </button>
        </div>
      </div>
    </PageContainer>
  );
}
