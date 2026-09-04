import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <PageContainer className="flex items-center justify-center py-32 bg-gray-50">
      <div className="text-center">
        <div className="w-24 h-24 rounded-3xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mx-auto mb-8">
          <span className="font-bold text-4xl">404</span>
        </div>
        <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">Page not found</h1>
        <p className="text-gray-500 mb-8 max-w-sm mx-auto">Sorry, we couldn't find the page you're looking for. It might have been removed or the link is incorrect.</p>
        <Link to="/" className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition shadow-sm">
          <Home size={20} /> Back to Home
        </Link>
      </div>
    </PageContainer>
  );
}
