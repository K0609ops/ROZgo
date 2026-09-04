import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight, UserRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center w-32 sm:w-56">
              <img src="/rozgo-logo.png" alt="Rozgo Logo" className="h-20 w-auto object-contain scale-[1.8] sm:scale-[2.5] origin-left relative z-[60]" />
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {user?.role === 'worker' ? (
                <>{/* Links removed for workers. Everything is in the Hero page. */}</>
              ) : (
                <>
                  <Link to="/find-workers" className="text-[var(--color-text)] hover:text-[var(--color-primary)] px-3 py-2 text-sm font-medium transition-colors">Find Workers</Link>
                  {!user && (
                    <>
                      <Link to="/join-as-worker" className="text-[var(--color-text)] hover:text-[var(--color-primary)] px-3 py-2 text-sm font-medium transition-colors">Become a Worker</Link>
                      <Link to="/how-it-works" className="text-[var(--color-text)] hover:text-[var(--color-primary)] px-3 py-2 text-sm font-medium transition-colors">How It Works</Link>
                    </>
                  )}
                  <Link to="/cooperative" className="text-[var(--color-success)] hover:text-[var(--color-primary)] px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1">
                    Cooperative
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/home" className="text-gray-500 hover:text-[var(--color-primary)] px-3 py-2 text-sm font-bold transition-colors">
                  Dashboard
                </Link>
                <Link to="/about" className="text-gray-500 hover:text-[var(--color-primary)] px-3 py-2 text-sm font-bold transition-colors">
                  About ROZGO
                </Link>
                <Link to="/profile" className="flex items-center gap-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all group overflow-hidden shadow-sm">
                  {user.profile?.verificationData?.livePhoto ? (
                    <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden border border-current flex items-center justify-center text-[10px] font-bold">
                      Pic
                    </div>
                  ) : (
                    <UserRound size={18} />
                  )}
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="text-[var(--color-text)] hover:text-[var(--color-primary)] px-3 py-2 text-sm font-medium transition-colors">Login</Link>
                <Link to="/signup" className="bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all flex items-center gap-2">
                  Get Started <ArrowRight size={16} />
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background)] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-[var(--color-border)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {user?.role === 'worker' ? (
              <>{/* Links removed for workers. Everything is in the Hero page. */}</>
            ) : (
              <>
                <Link to="/find-workers" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background)] rounded-md">Find Workers</Link>
                <Link to="/join-as-worker" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background)] rounded-md">Become a Worker</Link>
                <Link to="/how-it-works" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background)] rounded-md">How It Works</Link>
                <Link to="/cooperative" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[var(--color-success)] hover:bg-[var(--color-background)] rounded-md">Cooperative</Link>
              </>
            )}
            <div className="mt-4 border-t border-[var(--color-border)] pt-4 flex flex-col gap-2 px-3">
              {user ? (
                <div className="space-y-1">
                  <Link to="/home" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-[var(--color-primary)] hover:bg-[var(--color-background)] rounded-md">Dashboard</Link>
                  <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-[var(--color-primary)] hover:bg-[var(--color-background)] rounded-md">About ROZGO</Link>
                  <Link to="/profile" onClick={() => setIsOpen(false)} className="block py-3 text-base font-bold bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-center rounded-lg flex items-center justify-center gap-2">
                    <UserRound size={20} />
                    Profile
                  </Link>
                </div>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)} className="block py-2 text-base font-medium text-[var(--color-text)]">Login</Link>
                  <Link to="/signup" onClick={() => setIsOpen(false)} className="block py-3 text-base font-medium bg-[var(--color-primary)] text-white text-center rounded-lg">Get Started</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
