import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { bookings } from '../data/bookings';
import { Calendar, Clock, MapPin, ChevronRight, Search, ShieldCheck } from 'lucide-react';

export default function CustomerDashboard() {
  const upcomingBookings = bookings.filter(b => b.status === "Upcoming");
  const pastBookings = bookings.filter(b => b.status === "Completed");

  return (
    <PageContainer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">My Dashboard</h1>
          <Link to="/find-workers" className="bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-opacity-90 transition flex items-center gap-2">
            <Search size={18} /> Book a Service
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Upcoming Booking */}
            <div className="bg-white rounded-3xl border border-[var(--color-border)] p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6 flex items-center justify-between">
                Upcoming Booking
                <Link to="/bookings" className="text-sm font-semibold text-[var(--color-primary)] hover:underline">View All</Link>
              </h2>
              
              {upcomingBookings.length > 0 ? (
                <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50 flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex justify-between mb-4 pb-4 border-b border-gray-200">
                      <span className="font-bold text-lg">{upcomingBookings[0].service}</span>
                      <span className="font-mono text-sm text-gray-500">{upcomingBookings[0].id}</span>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Calendar size={14} className="text-[var(--color-primary)]" />
                        </div>
                        <span className="font-medium">{upcomingBookings[0].date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Clock size={14} className="text-[var(--color-primary)]" />
                        </div>
                        <span className="font-medium">{upcomingBookings[0].time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-700">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <MapPin size={14} className="text-[var(--color-primary)]" />
                        </div>
                        <span className="font-medium">{upcomingBookings[0].location}</span>
                      </div>
                    </div>
                    <Link to={`/bookings/${upcomingBookings[0].id}`} className="inline-flex items-center gap-2 text-[var(--color-primary)] font-bold hover:underline">
                      Manage Booking <ChevronRight size={16} />
                    </Link>
                  </div>
                  
                  <div className="w-full md:w-48 bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 mb-2">
                      <img src="https://i.pravatar.cc/150?img=68" alt={upcomingBookings[0].workerName} className="w-full h-full object-cover" />
                    </div>
                    <div className="font-bold text-sm mb-1">{upcomingBookings[0].workerName}</div>
                    <div className="text-xs text-gray-500 mb-3 flex items-center justify-center gap-1">
                      <ShieldCheck size={12} className="text-[var(--color-success)]" /> Verified
                    </div>
                    <Link to={`/worker/${upcomingBookings[0].workerId}`} className="text-xs font-semibold border border-gray-200 rounded-lg px-3 py-1.5 hover:bg-gray-50">
                      View Profile
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">No upcoming bookings.</div>
              )}
            </div>
            
            {/* Recent Bookings */}
            <div className="bg-white rounded-3xl border border-[var(--color-border)] p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Recent History</h2>
              <div className="space-y-4">
                {pastBookings.map(booking => (
                  <Link key={booking.id} to={`/bookings/${booking.id}`} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border border-gray-100 rounded-xl hover:border-[var(--color-primary)] hover:bg-gray-50 transition-colors">
                    <div className="mb-2 sm:mb-0">
                      <div className="font-bold text-[var(--color-text)] mb-1">{booking.service}</div>
                      <div className="text-sm text-gray-500">with {booking.workerName} on {booking.date}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="font-bold text-[var(--color-text)]">{booking.price}</div>
                      <div className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                        {booking.status}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[var(--color-primary)] text-white rounded-3xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)] opacity-20 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <h3 className="font-bold text-lg mb-2">Rozgo Cooperative</h3>
              <p className="text-white/80 text-sm mb-6">You've supported 4 cooperative workers this year.</p>
              <div className="flex justify-between items-end border-t border-white/20 pt-4">
                <div>
                  <div className="text-xs text-white/60 uppercase tracking-wider mb-1">Value Created</div>
                  <div className="text-2xl font-bold">₹4,200</div>
                </div>
                <Link to="/cooperative" className="text-sm font-semibold hover:underline">Learn more</Link>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl border border-[var(--color-border)] p-8 shadow-sm">
              <h3 className="font-bold text-lg mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/settings" className="block w-full text-left px-4 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 font-medium text-gray-700 transition-colors">
                  Account Settings
                </Link>
                <Link to="/notifications" className="block w-full text-left px-4 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 font-medium text-gray-700 transition-colors">
                  Notifications
                  <span className="ml-2 inline-block bg-[var(--color-accent)] text-white text-xs px-2 py-0.5 rounded-full">2</span>
                </Link>
                <Link to="/how-it-works" className="block w-full text-left px-4 py-3 border border-gray-100 rounded-xl hover:bg-gray-50 font-medium text-gray-700 transition-colors">
                  Help Center
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </PageContainer>
  );
}
