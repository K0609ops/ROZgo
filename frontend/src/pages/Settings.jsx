import React from 'react';
import { Link } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { Settings, Bell, Shield, User, CreditCard } from 'lucide-react';

export default function SettingsPage() {
  return (
    <PageContainer className="bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-2xl border border-[var(--color-border)] p-4 sticky top-28 space-y-1">
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold transition">
                <User size={18} /> Account
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition">
                <Bell size={18} /> Notifications
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition">
                <Shield size={18} /> Privacy
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-50 transition">
                <CreditCard size={18} /> Payments
              </a>
              <div className="border-t border-gray-100 my-2 pt-2">
                <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 font-medium hover:bg-red-50 transition">
                  Logout
                </Link>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="w-full md:w-3/4 space-y-6">
            <div className="bg-white rounded-3xl border border-[var(--color-border)] p-8 shadow-sm">
              <h2 className="text-xl font-bold mb-6">Account Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" defaultValue="Aditi Sharma" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="tel" defaultValue="9876543210" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)] bg-gray-50" readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                  <input type="email" placeholder="Add your email" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-primary)]" />
                </div>
                <button className="bg-[var(--color-primary)] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-opacity-90 transition mt-4">
                  Save Changes
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl border border-[var(--color-border)] p-8 shadow-sm border-red-100">
              <h2 className="text-xl font-bold mb-2 text-red-600">Danger Zone</h2>
              <p className="text-gray-500 mb-4 text-sm">Permanently delete your account and all associated data.</p>
              <button className="border border-red-200 text-red-600 px-6 py-2.5 rounded-xl font-bold hover:bg-red-50 transition">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
