import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Footer() {
  const { user } = useAuth();
  const isWorker = user?.role === 'worker';

  return (
    <footer className="bg-[#0e2c25] text-white pt-24 pb-12 border-t border-[#1a4b41]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Strong Final CTA */}
        {!isWorker && (
          <div className="bg-[var(--color-primary)] rounded-3xl p-8 md:p-12 mb-20 border border-[#1a4b41] text-center flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#123B32] to-[#0e2c25] opacity-50"></div>
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Ready to build stronger communities?</h2>
              <p className="text-[#a4b5b0] text-lg mb-8">Join thousands of households and verified professionals on India's first cooperative gig platform.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/find-workers" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-sm flex items-center justify-center">
                  Book a Service
                </Link>
                <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  Join Cooperative <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="flex items-center mb-6">
              <img src="/rozgo-logo.png" alt="Rozgo Logo" className="h-32 sm:h-40 w-auto object-contain invert opacity-90 scale-125 origin-left" />
            </a>
            <p className="text-[#a4b5b0] text-sm leading-relaxed mb-6">
              AI-powered cooperative gig services platform connecting households with verified local workers.
            </p>
          </div>
          
          {!isWorker && (
            <div>
              <h4 className="font-bold mb-6 text-white tracking-wide uppercase text-sm">Services</h4>
              <ul className="space-y-4 text-[#a4b5b0] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Electricians</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Plumbers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Domestic Help</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carpenters</a></li>
                <li><a href="#" className="hover:text-white transition-colors">View All</a></li>
              </ul>
            </div>
          )}
          
          <div>
            <h4 className="font-bold mb-6 text-white tracking-wide uppercase text-sm">Cooperative</h4>
            <ul className="space-y-4 text-[#a4b5b0] text-sm">
              <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Worker Benefits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Governance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Transparency Report</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white tracking-wide uppercase text-sm">Legal & Support</h4>
            <ul className="space-y-4 text-[#a4b5b0] text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#1a4b41] pt-8 flex justify-center text-[#a4b5b0] text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Rozgo Cooperative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
