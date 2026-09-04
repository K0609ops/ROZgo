import React from 'react';
import PageContainer from '../components/ui/PageContainer';
import Services from '../components/Services';
import Trust from '../components/Trust';
import Cooperative from '../components/Cooperative';
import HowItWorks from '../components/HowItWorks';
import { Info } from 'lucide-react';

export default function AboutRozgo() {
  return (
    <PageContainer>
      <div className="bg-gray-50 py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
            <Info size={32} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About ROZGO</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we are building a trusted, community-driven cooperative for everyday services.
          </p>
        </div>
      </div>
      
      <Services />
      <Trust />
      <Cooperative />
      <HowItWorks />
    </PageContainer>
  );
}
