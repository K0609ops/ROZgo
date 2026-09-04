import React from 'react';
import PageContainer from '../components/ui/PageContainer';
import { Star } from 'lucide-react';

export default function Reviews() {
  return (
    <PageContainer className="bg-gray-50 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] py-12">
      <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-6">
        <Star size={40} />
      </div>
      <h1 className="text-3xl font-bold mb-4">Your Reviews</h1>
      <p className="text-gray-500 text-center max-w-md">
        See what households are saying about your work. Higher ratings lead to more job offers!
      </p>
    </PageContainer>
  );
}
