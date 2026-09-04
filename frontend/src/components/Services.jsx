import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, moreServices } from '../data/servicesData';

export default function Services() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4 tracking-tight">Essential services, trusted hands</h2>
            <p className="text-gray-600 text-lg">Book skilled professionals from your local community cooperative.</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button 
              onClick={() => setShowDropdown(!showDropdown)}
              className="text-[var(--color-primary)] font-semibold flex items-center gap-2 hover:bg-[var(--color-background)] px-4 py-2 rounded-lg transition-colors border border-transparent hover:border-[var(--color-primary)]/20"
            >
              {showDropdown ? 'Show less services' : 'See more services'} <ChevronDown size={16} className={`transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
        
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <AnimatePresence>
            {(showDropdown ? [...services, ...moreServices] : services).map((service, idx) => (
              <motion.div 
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3, delay: showDropdown && idx >= services.length ? (idx - services.length) * 0.04 : 0 }}
                key={service.id} 
                className="group p-5 rounded-3xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl transition-colors cursor-pointer bg-[var(--color-background)] flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">{service.name}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-grow">{service.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100/50">
                  <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-100">{service.count}</span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center border border-gray-100 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:border-[var(--color-primary)] transition-colors text-gray-400">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
