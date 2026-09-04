import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { getWorkerById } from '../data/workers';
import { Calendar, Clock, MapPin, Shield, CreditCard, ChevronLeft } from 'lucide-react';

export default function Booking() {
  const { workerId } = useParams();
  const worker = getWorkerById(workerId) || getWorkerById("w-101");
  const navigate = useNavigate();

  const handleConfirm = (e) => {
    e.preventDefault();
    navigate('/booking/success');
  };

  return (
    <PageContainer className="bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to={`/worker/${workerId}`} className="inline-flex items-center text-gray-500 hover:text-[var(--color-primary)] mb-6 font-medium">
          <ChevronLeft size={20} /> Back to Profile
        </Link>
        
        <h1 className="text-3xl font-bold mb-8">Confirm Booking</h1>
        
        <form onSubmit={handleConfirm} className="space-y-8">
          
          {/* Selected Worker */}
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Selected Professional</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
                <img src={worker.avatar} alt={worker.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="text-lg font-bold">{worker.name}</h4>
                <p className="text-gray-600">{worker.trade}</p>
              </div>
              <div className="ml-auto text-right">
                <div className="font-bold text-[var(--color-primary)]">{worker.rate}</div>
              </div>
            </div>
          </div>
          
          {/* Service Details */}
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Job Details</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <input type="text" defaultValue={worker.trade + " Services"} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea rows="3" placeholder="Describe what you need done..." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"></textarea>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><Calendar size={14} /> Date</label>
                <input type="date" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><Clock size={14} /> Time</label>
                <input type="time" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]" />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1"><MapPin size={14} /> Location</label>
              <input type="text" defaultValue="Koramangala, Bangalore" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]" />
            </div>
          </div>
          
          {/* Payment Info */}
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Shield size={16} /> Secure Payment (Escrow)
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Your payment will be held securely in escrow by Rozgo. The worker only gets paid once you approve the completed job. No hidden fees.
            </p>
            
            <div className="bg-[var(--color-background)] rounded-xl p-4 border border-[var(--color-border)]">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Estimated duration</span>
                <span>2 hours</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Hourly rate</span>
                <span>{worker.rate}</span>
              </div>
              <div className="border-t border-[var(--color-border)] mt-2 pt-2 flex justify-between items-center font-bold text-lg">
                <span>Estimated Total</span>
                <span className="text-[var(--color-primary)]">₹{(parseInt(worker.rate.replace(/\D/g, '')) * 2)}</span>
              </div>
            </div>
          </div>
          
          <button type="submit" className="w-full bg-[var(--color-primary)] text-white text-lg font-bold py-4 rounded-xl hover:bg-opacity-90 transition shadow-md flex justify-center items-center gap-2">
            <CreditCard size={20} /> Confirm & Pay Deposit
          </button>
        </form>
      </div>
    </PageContainer>
  );
}
