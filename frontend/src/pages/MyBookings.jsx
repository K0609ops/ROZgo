import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { bookings } from '../data/bookings';
import { ChevronRight } from 'lucide-react';

export default function MyBookings() {
  return (
    <PageContainer className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">My Bookings</h1>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar">
          <button className="px-6 py-3 border-b-2 border-[var(--color-primary)] font-bold text-[var(--color-primary)] whitespace-nowrap">
            Upcoming (1)
          </button>
          <button className="px-6 py-3 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap">
            Completed (12)
          </button>
          <button className="px-6 py-3 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap">
            Cancelled (0)
          </button>
        </div>
        
        <div className="space-y-4">
          {bookings.map(booking => (
            <Link key={booking.id} to={`/bookings/${booking.id}`} className="block bg-white rounded-2xl border border-[var(--color-border)] p-6 shadow-sm hover:border-[var(--color-primary)] hover:shadow-md transition-all group">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-200 flex-shrink-0">
                    <img src="https://i.pravatar.cc/150?img=68" alt={booking.workerName} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{booking.service}</h3>
                    <div className="text-sm text-gray-500">with <span className="font-medium text-gray-700">{booking.workerName}</span></div>
                  </div>
                </div>
                
                <div className="flex flex-row md:flex-col justify-between w-full md:w-auto items-center md:items-end gap-2 md:gap-1 pl-16 md:pl-0">
                  <div className="text-sm font-medium">{booking.date} • {booking.time}</div>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${booking.status === 'Completed' ? 'bg-[var(--color-success)]/10 text-[var(--color-success)]' : 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'}`}>
                    {booking.status}
                  </span>
                </div>
                
                <div className="hidden md:flex items-center text-gray-400 group-hover:text-[var(--color-primary)] transition-colors">
                  <ChevronRight size={24} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
