import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { CheckCircle, Calendar, Clock, ArrowRight, Shield } from 'lucide-react';

export default function BookingSuccess() {
  return (
    <PageContainer className="bg-gray-50 flex items-center justify-center py-24">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-xl text-center relative overflow-hidden">
          {/* Confetti / background effect */}
          <div className="absolute top-0 left-0 w-full h-32 bg-[var(--color-success)] opacity-10"></div>
          
          <div className="w-20 h-20 bg-[var(--color-success)] rounded-full flex items-center justify-center text-white mx-auto relative z-10 -mt-12 mb-6 shadow-lg border-4 border-white">
            <CheckCircle size={40} />
          </div>
          
          <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
          <p className="text-gray-500 mb-8">Your job has been successfully matched and scheduled.</p>
          
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left border border-gray-100">
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-200">
              <span className="text-sm font-bold text-gray-400 uppercase">Booking ID</span>
              <span className="font-mono font-semibold">KS-9012-A</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Worker</span>
                <span className="font-bold text-[var(--color-text)]">Rajesh Kumar</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Service</span>
                <span className="font-medium">Electrical Repair</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 flex items-center gap-1"><Calendar size={14} /> Date</span>
                <span className="font-medium">Tomorrow</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 flex items-center gap-1"><Clock size={14} /> Time</span>
                <span className="font-medium">10:00 AM</span>
              </div>
              <div className="flex justify-between pt-3 mt-3 border-t border-gray-200">
                <span className="text-gray-500 flex items-center gap-1"><Shield size={14} className="text-[var(--color-success)]" /> Escrow</span>
                <span className="font-bold text-[var(--color-primary)]">₹800</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <Link to="/bookings/b-9012" className="block w-full bg-[var(--color-primary)] text-white text-center font-bold py-3.5 rounded-xl hover:bg-opacity-90 transition">
              View Booking Details
            </Link>
            <Link to="/" className="block w-full bg-white border border-[var(--color-border)] text-gray-700 text-center font-bold py-3.5 rounded-xl hover:bg-gray-50 transition">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
