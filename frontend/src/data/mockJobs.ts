import { JobRecommendation } from '../types';

export const MOCK_JOBS: JobRecommendation[] = [
  {
    id: "job-rec-1",
    serviceCategory: "plumber",
    subcategory: "Bathroom Plumbing & Sanitary Fitting",
    difficulty: "Intermediate",
    employerName: "Vikram Sethi",
    employerPhone: "+91 98111 22233",
    location: "Sector 62, Noida",
    distanceKm: 2.4,
    wage: 650,
    preferredTime: "Today, 11:00 AM",
    estimatedHours: "2 - 3 hours",
    description: "Need immediate assistance fixing a leaking pipe in the master bathroom.",
    postedAt: "20 mins ago",
    workersNeeded: 1
  },
  {
    id: "job-rec-2",
    serviceCategory: "mason",
    subcategory: "Apartment Wall Plastering & Brick Repair",
    difficulty: "High",
    employerName: "Sharma Constructions",
    employerPhone: "+91 98222 33344",
    location: "Indirapuram, Ghaziabad",
    distanceKm: 4.1,
    wage: 800,
    preferredTime: "Tomorrow Morning",
    estimatedHours: "6 - 8 hours",
    description: "Wall plastering for a newly built room partition.",
    postedAt: "1 hour ago",
    workersNeeded: 2
  },
  {
    id: "job-rec-3",
    serviceCategory: "electrician",
    subcategory: "Ceiling Fan & Switchboard Install",
    difficulty: "Easy",
    employerName: "Neha Gupta",
    employerPhone: "+91 98333 44455",
    location: "Vasant Kunj, Delhi",
    distanceKm: 3.5,
    wage: 450,
    preferredTime: "Today, 02:00 PM",
    estimatedHours: "1 - 2 hours",
    description: "Need to install two ceiling fans and fix one switchboard.",
    postedAt: "2 hours ago",
    workersNeeded: 1
  },
  {
    id: "job-rec-4",
    serviceCategory: "domestic help",
    subcategory: "Deep Cleaning & Utensils",
    difficulty: "Intermediate",
    employerName: "Ritu Verma",
    employerPhone: "+91 98444 55566",
    location: "Koramangala, Bengaluru",
    distanceKm: 1.2,
    wage: 350,
    preferredTime: "Tomorrow, 09:00 AM",
    estimatedHours: "2 - 3 hours",
    description: "Deep cleaning of kitchen and washing utensils.",
    postedAt: "3 hours ago",
    workersNeeded: 1
  }
];
