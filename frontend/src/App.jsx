import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import FindWorkers from './pages/FindWorkers';
import AIMatchResults from './pages/AIMatchResults';
import AboutRozgo from './pages/AboutRozgo';
import WorkerProfile from './pages/WorkerProfile';
import Booking from './pages/Booking';
import BookingSuccess from './pages/BookingSuccess';
import BecomeWorker from './pages/BecomeWorker';
import WorkerRegistration from './pages/WorkerRegistration';
import WorkerDashboard from './pages/WorkerDashboard';
import WorkerProfileEdit from './pages/WorkerProfileEdit';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CustomerDashboard from './pages/CustomerDashboard';
import MyBookings from './pages/MyBookings';
import BookingDetails from './pages/BookingDetails';
import HowItWorksPage from './pages/HowItWorksPage';
import CooperativePage from './pages/CooperativePage';
import Insights from './pages/Insights';
import SettingsPage from './pages/Settings';
import NotFound from './pages/NotFound';

import ProtectedRoute from './components/ProtectedRoute';
import SetupRole from './pages/SetupRole';
import WorkerSetup from './pages/WorkerSetup';
import EmployerSetup from './pages/EmployerSetup';
import Profile from './pages/Profile';
import Verification from './pages/Verification';
import Certification from './pages/Certification';
import Reviews from './pages/Reviews';
import AvailableWorks from './pages/AvailableWorks';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--color-background)] font-[var(--font-body)] text-[var(--color-text)] flex flex-col">
      {location.pathname !== '/login' && <Navbar />}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Public / General */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/cooperative" element={<CooperativePage />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/about" element={<AboutRozgo />} />
            
            {/* Protected Core */}
            <Route path="/" element={<AboutRozgo />} />
            <Route path="/home" element={<ProtectedRoute requireSetup={true}><Home /></ProtectedRoute>} />
            <Route path="/setup" element={<ProtectedRoute><SetupRole /></ProtectedRoute>} />
            <Route path="/setup/worker" element={<ProtectedRoute><WorkerSetup /></ProtectedRoute>} />
            <Route path="/setup/employer" element={<ProtectedRoute><EmployerSetup /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/verification" element={<ProtectedRoute><Verification /></ProtectedRoute>} />
            <Route path="/certification" element={<ProtectedRoute><Certification /></ProtectedRoute>} />
            <Route path="/reviews" element={<ProtectedRoute><Reviews /></ProtectedRoute>} />
            <Route path="/available-works" element={<ProtectedRoute><AvailableWorks /></ProtectedRoute>} />
            
            {/* Customer Journey */}
            <Route path="/find-workers" element={<FindWorkers />} />
            <Route path="/find-workers/matches" element={<AIMatchResults />} />
            <Route path="/worker/:workerId" element={<WorkerProfile />} />
            <Route path="/booking/:workerId" element={<Booking />} />
            <Route path="/booking/success" element={<BookingSuccess />} />
            <Route path="/dashboard" element={<CustomerDashboard />} />
            <Route path="/bookings" element={<MyBookings />} />
            <Route path="/bookings/:bookingId" element={<BookingDetails />} />
            
            {/* Worker Journey */}
            <Route path="/join-as-worker" element={<BecomeWorker />} />
            <Route path="/worker/register" element={<WorkerRegistration />} />
            <Route path="/worker/dashboard" element={<WorkerDashboard />} />
            <Route path="/worker/profile/edit" element={<WorkerProfileEdit />} />
            
            {/* Utility */}
            <Route path="/settings" element={<SettingsPage />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      {!['/login', '/setup', '/setup/worker', '/setup/employer', '/verification'].includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
