import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Search & Describe',
      desc: 'Tell us what you need done. Whether it\'s a quick fix or a major project, simply describe your requirement.'
    },
    {
      num: '02',
      title: 'AI Match',
      desc: 'Our system instantly connects you with the most qualified, available workers in your immediate vicinity.'
    },
    {
      num: '03',
      title: 'Book & Confirm',
      desc: 'Review profiles, ratings, and upfront pricing. Confirm your booking with a single tap.'
    },
    {
      num: '04',
      title: 'Get the Job Done',
      desc: 'Your matched professional arrives on time, completes the work to standard, and payment is processed securely.'
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4 tracking-tight">How Rozgo Works</h2>
          <p className="text-gray-600 text-lg">A simple, transparent process designed to get your job done efficiently.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Line (visible on large screens) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full border-t-2 border-dashed border-gray-200 -z-10 group-hover:border-[var(--color-primary)] transition-colors"></div>
              )}
              
              <div className="bg-[var(--color-background)] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 border border-[var(--color-border)] group-hover:border-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all shadow-sm">
                <span className="text-2xl font-bold font-[var(--font-heading)]">{step.num}</span>
              </div>
              
              <div className="text-center px-4">
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
