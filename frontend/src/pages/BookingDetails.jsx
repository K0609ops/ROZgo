import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { getBookingById } from '../data/bookings';
import { ChevronLeft, MapPin, Calendar, Clock, CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function BookingDetails() {
  const { bookingId } = useParams();
  const booking = getBookingById(bookingId) || getBookingById("b-9012"); // fallback

  return (
    <PageContainer className="bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <Link to="/bookings" className="inline-flex items-center gap-1 text-gray-500 hover:text-[var(--color-primary)] font-medium">
            <ChevronLeft size={20} /> Back to My Bookings
          </Link>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold flex items-center gap-3">
              {booking.service}
              <span className={`text-xs font-bold px-3 py-1 rounded-full ${booking.status === 'Completed' ? 'bg-[var(--color-success)]/10 text-[var(--color-success)]' : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'}`}>
                {booking.status}
              </span>
            </h1>
            <div className="text-sm text-gray-500 mt-1 font-mono">Booking ID: {booking.id}</div>
          </div>
          {booking.status === 'Upcoming' && (
            <button className="bg-white border border-red-200 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-red-50 transition text-sm">
              Cancel Booking
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Professional Details */}
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Professional</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                <img src="https://i.pravatar.cc/150?img=68" alt={booking.workerName} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-lg flex items-center gap-1">
                  {booking.workerName} <ShieldCheck size={16} className="text-[var(--color-success)]" />
                </div>
                <Link to={`/worker/${booking.workerId}`} className="text-sm text-[var(--color-primary)] font-semibold hover:underline">View Profile</Link>
              </div>
            </div>
            {booking.status === 'Upcoming' && (
              <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                <button className="flex-1 bg-[var(--color-primary)] text-white text-sm font-bold py-2 rounded-lg hover:bg-opacity-90 transition">
                  Message
                </button>
                <button className="flex-1 bg-white border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-bold py-2 rounded-lg hover:bg-gray-50 transition">
                  Call
                </button>
              </div>
            )}
          </div>
          
          {/* Job Details */}
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Details</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <Calendar size={16} className="text-gray-400 mt-0.5" />
                <div>
                  <span className="text-gray-500 block mb-0.5">Date</span>
                  <span className="font-medium text-gray-900">{booking.date}</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <Clock size={16} className="text-gray-400 mt-0.5" />
                <div>
                  <span className="text-gray-500 block mb-0.5">Time</span>
                  <span className="font-medium text-gray-900">{booking.time}</span>
                </div>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="text-gray-400 mt-0.5" />
                <div>
                  <span className="text-gray-500 block mb-0.5">Location</span>
                  <span className="font-medium text-gray-900">{booking.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm mb-6">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Timeline</h3>
          <div className="relative border-l-2 border-gray-100 ml-3 md:ml-4 space-y-8 pb-4">
            {booking.timeline.map((item, idx) => (
              <div key={idx} className="relative pl-6">
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-white ${item.completed ? 'border-[var(--color-success)]' : 'border-gray-300'}`}>
                  {item.completed && <div className="w-2 h-2 bg-[var(--color-success)] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>}
                </div>
                <div className="flex justify-between items-start -mt-1.5">
                  <div>
                    <h4 className={`font-bold ${item.completed ? 'text-gray-900' : 'text-gray-400'}`}>{item.step}</h4>
                  </div>
                  <div className="text-xs text-gray-500">{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Payment Summary */}
        <div className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-sm">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center justify-between">
            Payment Summary
            <span className={`text-xs font-bold px-2 py-1 rounded ${booking.paymentStatus === 'Paid' ? 'bg-[var(--color-success)]/10 text-[var(--color-success)]' : 'bg-gray-100 text-gray-600'}`}>{booking.paymentStatus}</span>
          </h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Service Fee</span>
              <span className="font-medium">{booking.price}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600 flex items-center gap-1">Rozgo Platform Fee <span className="text-xs bg-gray-100 px-1 rounded">(0% for consumers)</span></span>
              <span className="font-medium">₹0</span>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
            <span className="font-bold">Total Paid (Escrow)</span>
            <span className="font-bold text-xl text-[var(--color-primary)]">{booking.price}</span>
          </div>
          
          {booking.status === 'Completed' && (
            <div className="mt-6 bg-[var(--color-success)]/5 border border-[var(--color-success)]/20 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="text-[var(--color-success)] mt-0.5" />
              <div>
                <h4 className="font-bold text-[var(--color-success)]">Job Approved & Worker Paid</h4>
                <p className="text-sm text-gray-600 mt-1">Thank you for supporting the cooperative. Your payment has been securely transferred to the worker minus a 5% cooperative fund contribution.</p>
                <button className="mt-3 bg-white border border-[var(--color-success)] text-[var(--color-success)] text-sm font-bold px-4 py-2 rounded-lg hover:bg-green-50 transition">
                  Leave a Review
                </button>
              </div>
            </div>
          )}
        </div>
        
      </div>
    </PageContainer>
  );
}
