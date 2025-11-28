import React from 'react';
import Section from './Section';

interface SimplePageProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const SimplePage: React.FC<SimplePageProps> = ({ title, subtitle, children }) => {
  return (
    <>
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-slate-100 max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto text-slate-600 dark:text-slate-300 space-y-6 leading-relaxed">
          {children}
        </div>
      </Section>
    </>
  );
};

export default SimplePage;