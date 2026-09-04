import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PageContainer({ children, className = "" }) {
  const prefersReducedMotion = useReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();

  const variants = {
    initial: { 
      opacity: 0, 
      x: prefersReducedMotion ? 0 : 15 
    },
    enter: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      x: prefersReducedMotion ? 0 : -15,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const noBackButtonPaths = ['/', '/login', '/home'];
  const showBackButton = !noBackButtonPaths.includes(location.pathname);

  return (
    <motion.div
      key={location.pathname}
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className={`w-full min-h-screen relative ${className}`}
    >
      {showBackButton && (
        <button 
          onClick={() => navigate(-1)}
          className="absolute top-6 left-4 md:left-8 z-40 bg-white/80 backdrop-blur-sm shadow-sm border border-gray-200 text-gray-600 hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]/30 hover:shadow-md p-2 rounded-full transition-all flex items-center gap-2 group"
          title="Go Back"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        </button>
      )}
      {children}
    </motion.div>
  );
}
