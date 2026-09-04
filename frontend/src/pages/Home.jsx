import React from 'react';
import EmployerDashboard from '../components/EmployerDashboard';
import WorkerHero from '../components/WorkerHero';
import PageContainer from '../components/ui/PageContainer';
import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user } = useAuth();
  const isWorker = user?.role === 'worker';

  return (
    <PageContainer>
      {isWorker ? <WorkerHero /> : <EmployerDashboard />}
    </PageContainer>
  );
}
