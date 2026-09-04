import { workers } from './workers';

export const bookings = [
  {
    id: "b-9012",
    workerId: "w-101",
    workerName: "Rajesh Kumar",
    service: "AC Installation",
    date: "2026-09-02",
    time: "10:00 AM",
    location: "Apt 4B, Sunrise Enclave, Koramangala",
    status: "Upcoming",
    price: "₹800",
    paymentStatus: "Escrowed",
    timeline: [
      { step: "Requested", time: "Sep 1, 9:00 AM", completed: true },
      { step: "Accepted", time: "Sep 1, 9:15 AM", completed: true },
      { step: "In Progress", time: "-", completed: false },
      { step: "Completed", time: "-", completed: false }
    ]
  },
  {
    id: "b-9005",
    workerId: "w-104",
    workerName: "Lakshmi Devi",
    service: "Deep House Cleaning",
    date: "2026-08-28",
    time: "09:00 AM",
    location: "Apt 4B, Sunrise Enclave, Koramangala",
    status: "Completed",
    price: "₹1200",
    paymentStatus: "Paid",
    timeline: [
      { step: "Requested", time: "Aug 27, 2:00 PM", completed: true },
      { step: "Accepted", time: "Aug 27, 2:30 PM", completed: true },
      { step: "In Progress", time: "Aug 28, 9:05 AM", completed: true },
      { step: "Completed", time: "Aug 28, 1:00 PM", completed: true }
    ]
  }
];

export const getBookingById = (id) => bookings.find(b => b.id === id);
