import React from 'react';
import { Zap, Droplets, Home, Wrench, Paintbrush, Wind, Monitor, Bug, Shield, Scissors, Car, Truck, BookOpen } from 'lucide-react';

export const services = [
  {
    id: 'electrician',
    name: 'Electrician',
    icon: <Zap size={24} className="text-[var(--color-accent)]" />,
    desc: 'Wiring, appliance installation',
    count: '450+ verified'
  },
  {
    id: 'plumber',
    name: 'Plumber',
    icon: <Droplets size={24} className="text-[var(--color-primary)]" />,
    desc: 'Pipe repairs, drain cleaning',
    count: '320+ verified'
  },
  {
    id: 'domestic',
    name: 'Domestic Help',
    icon: <Home size={24} className="text-[var(--color-success)]" />,
    desc: 'Cleaning, cooking, chores',
    count: '800+ verified'
  },
  {
    id: 'carpenter',
    name: 'Carpenter',
    icon: <Wrench size={24} className="text-orange-500" />,
    desc: 'Furniture repair, woodwork',
    count: '210+ verified'
  },
  {
    id: 'painter',
    name: 'Painter',
    icon: <Paintbrush size={24} className="text-purple-500" />,
    desc: 'Wall painting, waterproofing',
    count: '150+ verified'
  }
];

export const moreServices = [
  { id: 'ac-repair', name: 'AC Repair & Service', icon: <Wind size={24} className="text-blue-500" />, desc: 'Installation & repair', count: '120+ verified' },
  { id: 'appliance', name: 'Appliance Repair', icon: <Monitor size={24} className="text-gray-500" />, desc: 'TV, Fridge, Washing Machine', count: '180+ verified' },
  { id: 'pest-control', name: 'Pest Control', icon: <Bug size={24} className="text-green-600" />, desc: 'Termite, cockroach control', count: '90+ verified' },
  { id: 'mason', name: 'Masonry Work', icon: <Shield size={24} className="text-slate-500" />, desc: 'Brickwork, plastering', count: '110+ verified' },
  { id: 'gardener', name: 'Gardener', icon: <Home size={24} className="text-green-500" />, desc: 'Lawn care, planting', count: '85+ verified' },
  { id: 'ro-service', name: 'RO Water Service', icon: <Droplets size={24} className="text-blue-400" />, desc: 'Filter change, repair', count: '140+ verified' },
  { id: 'salon', name: 'Salon at Home', icon: <Scissors size={24} className="text-pink-500" />, desc: 'Haircut, spa, grooming', count: '250+ verified' },
  { id: 'car-wash', name: 'Car & Bike Wash', icon: <Car size={24} className="text-red-500" />, desc: 'Deep cleaning, polishing', count: '160+ verified' },
  { id: 'packers', name: 'Packers & Movers', icon: <Truck size={24} className="text-yellow-600" />, desc: 'Relocation assistance', count: '75+ verified' },
  { id: 'tutor', name: 'Home Tutors', icon: <BookOpen size={24} className="text-indigo-500" />, desc: 'Math, Science, Languages', count: '300+ verified' }
];

export const allServices = [...services, ...moreServices];
