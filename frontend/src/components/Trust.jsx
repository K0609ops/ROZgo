import React from 'react';
import { Shield, Star, Cpu, Lock } from 'lucide-react';

export default function Trust() {
  const features = [
    {
      title: 'Verified workers',
      desc: 'Extensive background checks, Aadhaar verification, and skill assessments for every worker.',
      icon: <Shield size={24} className="text-white" />
    },
    {
      title: 'Trusted ratings',
      desc: 'Transparent, community-driven rating system that rewards excellence and reliability.',
      icon: <Star size={24} className="text-white" />
    },
    {
      title: 'Hyperlocal AI matching',
      desc: 'Our Smart India Hackathon AI technology matches you with the right worker in minutes.',
      icon: <Cpu size={24} className="text-white" />
    },
    {
      title: 'Secure payments',
      desc: 'Cashless, escrow-based transactions ensure fair compensation and user security.',
      icon: <Lock size={24} className="text-white" />
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-primary)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Trust built at the community level</h2>
          <p className="text-[#a4b5b0] text-lg">We combine advanced AI matching with local cooperative principles to ensure safety and quality for every job.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#1a4b41] p-8 rounded-3xl border border-[#235e52]">
              <div className="w-12 h-12 bg-[var(--color-success)] rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-[#a4b5b0] leading-relaxed text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
