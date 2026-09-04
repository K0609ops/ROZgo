import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage on load
    const storedUser = localStorage.getItem('rozgo_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (phoneNumber) => {
    const newUser = {
      id: Date.now().toString(),
      phoneNumber,
      isSetupComplete: false,
      isVerified: false,
      role: null, // 'worker' or 'employer'
      profile: {}
    };
    setUser(newUser);
    localStorage.setItem('rozgo_user', JSON.stringify(newUser));
  };

  const fastLogin = (phoneNumber, role) => {
    const newUser = {
      id: Date.now().toString(),
      phoneNumber,
      isSetupComplete: true,
      isVerified: role === 'worker', // Assume existing workers are verified for demo
      role: role,
      profile: {
        name: role === 'worker' ? 'Existing Worker' : 'Existing Employer',
        place: 'Kochi',
      }
    };
    setUser(newUser);
    localStorage.setItem('rozgo_user', JSON.stringify(newUser));
  };

  const updateProfile = (data) => {
    setUser(prev => {
      const updatedUser = {
        ...prev,
        ...data
      };
      localStorage.setItem('rozgo_user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const acceptJob = (job) => {
    setUser(prev => {
      const accepted = prev.profile.acceptedJobs || [];
      const saved = prev.profile.savedJobs || [];
      if (accepted.find(j => j.id === job.id)) return prev; // already accepted
      const updatedUser = {
        ...prev,
        profile: {
          ...prev.profile,
          acceptedJobs: [...accepted, { ...job, status: 'accepted', acceptedAt: new Date().toISOString() }],
          savedJobs: saved.filter(j => j.id !== job.id) // remove from saved if it was there
        }
      };
      localStorage.setItem('rozgo_user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const saveJob = (job) => {
    setUser(prev => {
      const saved = prev.profile.savedJobs || [];
      if (saved.find(j => j.id === job.id)) return prev; // already saved
      const updatedUser = {
        ...prev,
        profile: {
          ...prev.profile,
          savedJobs: [...saved, job]
        }
      };
      localStorage.setItem('rozgo_user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const rejectJob = (jobId) => {
    setUser(prev => {
      const accepted = prev.profile.acceptedJobs || [];
      const cancellations = prev.profile.cancellations || 0;
      
      const updatedUser = {
        ...prev,
        profile: {
          ...prev.profile,
          acceptedJobs: accepted.filter(j => j.id !== jobId),
          cancellations: cancellations + 1
        }
      };
      localStorage.setItem('rozgo_user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const completeVerification = (verificationData) => {
    setUser(prev => {
      const updatedUser = {
        ...prev,
        isVerified: true,
        profile: {
          ...prev.profile,
          verificationData
        }
      };
      localStorage.setItem('rozgo_user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const unsaveJob = (jobId) => {
    setUser(prev => {
      const saved = prev.profile.savedJobs || [];
      const updatedUser = {
        ...prev,
        profile: {
          ...prev.profile,
          savedJobs: saved.filter(j => j.id !== jobId)
        }
      };
      localStorage.setItem('rozgo_user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const workerCompleteJob = (jobId) => {
    setUser(prev => {
      const accepted = prev.profile.acceptedJobs || [];
      const updatedUser = {
        ...prev,
        profile: {
          ...prev.profile,
          acceptedJobs: accepted.map(j => j.id === jobId ? { ...j, workerCompleted: true } : j)
        }
      };
      localStorage.setItem('rozgo_user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const employerCompleteJob = (jobId) => {
    setUser(prev => {
      const accepted = prev.profile.acceptedJobs || [];
      const completed = prev.profile.completedJobs || [];
      
      const jobToComplete = accepted.find(j => j.id === jobId);
      if (!jobToComplete) return prev;
      
      // Generate a dummy review for simulation
      const reviews = [
        "Excellent work, very professional!",
        "Completed the job on time. Highly recommended.",
        "Great service, knew exactly what to do.",
        "Very polite and left the place clean."
      ];
      
      const completedJob = {
        ...jobToComplete,
        workerCompleted: true,
        employerCompleted: true,
        completedAt: new Date().toISOString(),
        employerReview: {
          rating: (Math.random() * (5 - 4) + 4).toFixed(1), // Random rating between 4.0 and 5.0
          text: reviews[Math.floor(Math.random() * reviews.length)],
          author: "Verified Employer"
        }
      };

      const updatedUser = {
        ...prev,
        profile: {
          ...prev.profile,
          acceptedJobs: accepted.filter(j => j.id !== jobId),
          completedJobs: [...completed, completedJob]
        }
      };
      localStorage.setItem('rozgo_user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('rozgo_user');
  };

  const value = {
    user,
    login,
    fastLogin,
    updateProfile,
    acceptJob,
    saveJob,
    unsaveJob,
    rejectJob,
    workerCompleteJob,
    employerCompleteJob,
    completeVerification,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
