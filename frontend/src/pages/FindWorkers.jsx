import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../components/ui/PageContainer';
import { MapPin, ShieldCheck, Star, Cpu, Lock } from 'lucide-react';
import { locationData } from '../data/locations';
import { allServices } from '../data/servicesData';

export default function FindWorkers() {
  const navigate = useNavigate();
  
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');
  
  const states = Object.keys(locationData);
  const districts = selectedState ? Object.keys(locationData[selectedState]) : [];
  const places = selectedDistrict ? locationData[selectedState][selectedDistrict] : [];

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedDistrict('');
    setSelectedPlace('');
  };

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
    setSelectedPlace('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/find-workers/matches');
  };

  return (
    <PageContainer>
      {/* Hero Search Section */}
      <div className="bg-[var(--color-primary)] text-white pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Find the right person for the job.</h1>
          <p className="text-xl text-white/80 mb-12">
            Tell us what you need. Rozgo will find trusted workers near you.
          </p>
          
          <form onSubmit={handleSearch} className="bg-white p-3 rounded-2xl flex flex-col md:flex-row flex-wrap gap-3 shadow-2xl text-[var(--color-text)] items-end">
            <div className="flex-1 flex flex-col items-start bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus-within:border-[var(--color-primary)] transition-colors relative min-w-[200px]">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">What service do you need?</span>
              <div className="flex items-center w-full">
                <select className="bg-transparent w-full outline-none font-medium cursor-pointer appearance-none" required defaultValue="">
                  <option value="" disabled>Select a service...</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Plumber">Plumber</option>
                  <option value="Domestic Help">Domestic Help</option>
                  <option value="Carpenter">Carpenter</option>
                  <option value="Painter">Painter</option>
                  <option value="AC Repair & Service">AC Repair & Service</option>
                  <option value="Appliance Repair">Appliance Repair</option>
                  <option value="Pest Control">Pest Control</option>
                  <option value="Masonry Work">Masonry Work</option>
                  <option value="Gardener">Gardener</option>
                  <option value="RO Water Service">RO Water Service</option>
                  <option value="Salon at Home">Salon at Home</option>
                  <option value="Car & Bike Wash">Car & Bike Wash</option>
                  <option value="Packers & Movers">Packers & Movers</option>
                  <option value="Home Tutors">Home Tutors</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pt-5">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col items-start bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus-within:border-[var(--color-primary)] transition-colors relative min-w-[200px]">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">State</span>
              <div className="flex items-center w-full">
                <MapPin size={18} className="text-[var(--color-accent)] mr-2 absolute left-4 top-1/2 -translate-y-1/2" />
                <select 
                  value={selectedState} 
                  onChange={handleStateChange} 
                  className="bg-transparent w-full outline-none font-medium cursor-pointer appearance-none pl-6" 
                  required
                >
                  <option value="" disabled>Select state...</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pt-5">
                  <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            {selectedState && (
              <div className="flex-1 flex flex-col items-start bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus-within:border-[var(--color-primary)] transition-colors relative min-w-[200px] animate-in fade-in slide-in-from-left-4 duration-300">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">District</span>
                <div className="flex items-center w-full">
                  <select 
                    value={selectedDistrict} 
                    onChange={handleDistrictChange} 
                    className="bg-transparent w-full outline-none font-medium cursor-pointer appearance-none" 
                    required
                  >
                    <option value="" disabled>Select district...</option>
                    {districts.map(district => (
                      <option key={district} value={district}>{district}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pt-5">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            )}

            {selectedDistrict && (
              <div className="flex-1 flex flex-col items-start bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus-within:border-[var(--color-primary)] transition-colors relative min-w-[200px] animate-in fade-in slide-in-from-left-4 duration-300">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Place</span>
                <div className="flex items-center w-full">
                  <select 
                    value={selectedPlace} 
                    onChange={(e) => setSelectedPlace(e.target.value)} 
                    className="bg-transparent w-full outline-none font-medium cursor-pointer appearance-none" 
                    required
                  >
                    <option value="" disabled>Select place...</option>
                    {places.map(place => (
                      <option key={place} value={place}>{place}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center pt-5">
                    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            )}
            
            <button type="submit" className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-colors md:w-auto w-full text-lg shadow-sm h-full max-h-[64px]">
              Find Workers
            </button>
          </form>
        </div>
      </div>

      {/* Popular Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 mb-24">
        <h2 className="text-lg font-bold text-white md:text-gray-900 mb-6 px-2 drop-shadow-md md:drop-shadow-none">Popular Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allServices.map(service => (
            <div key={service.id} onClick={handleSearch} className="bg-white rounded-2xl p-6 border border-[var(--color-border)] shadow-md hover:shadow-xl hover:border-[var(--color-primary)] transition-all cursor-pointer group flex items-center gap-4">
              <div className="w-14 h-14 bg-[var(--color-background)] rounded-xl flex items-center justify-center group-hover:bg-[var(--color-primary)]/10 transition-colors flex-shrink-0 [&>svg]:w-7 [&>svg]:h-7">
                {service.icon}
              </div>
              <div className="overflow-hidden">
                <h3 className="font-bold text-lg truncate">{service.name}</h3>
                <p className="text-sm text-gray-500 truncate">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How Rozgo finds the right worker */}
      <div className="bg-[var(--color-background)] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">How Rozgo finds the right worker</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 border-t-2 border-dashed border-gray-300 -z-10"></div>
            
            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm relative">
              <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto -mt-16 mb-6 shadow-lg border-4 border-white">
                01
              </div>
              <h3 className="font-bold text-xl mb-3">Tell us what you need</h3>
              <p className="text-gray-600">Enter your service request and location to start the search.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm relative">
              <div className="w-16 h-16 bg-[var(--color-accent)] text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto -mt-16 mb-6 shadow-lg border-4 border-white">
                02
              </div>
              <h3 className="font-bold text-xl mb-3">AI finds best matches</h3>
              <p className="text-gray-600">Our Smart Match system evaluates skill, distance, and reliability.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-[var(--color-border)] shadow-sm relative">
              <div className="w-16 h-16 bg-[var(--color-success)] text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto -mt-16 mb-6 shadow-lg border-4 border-white">
                03
              </div>
              <h3 className="font-bold text-xl mb-3">Choose and book</h3>
              <p className="text-gray-600">Review detailed profiles, select your worker, and securely book.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <ShieldCheck size={24} className="text-[var(--color-success)]" />
              <span className="font-bold text-lg">Verified workers</span>
            </div>
            <div className="flex items-center gap-3">
              <Star size={24} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />
              <span className="font-bold text-lg">Real ratings</span>
            </div>
            <div className="flex items-center gap-3">
              <Cpu size={24} className="text-[var(--color-primary)]" />
              <span className="font-bold text-lg">Hyperlocal matching</span>
            </div>
            <div className="flex items-center gap-3">
              <Lock size={24} className="text-gray-700" />
              <span className="font-bold text-lg">Secure booking</span>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
