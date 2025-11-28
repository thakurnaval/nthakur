import React from 'react';
import SimplePage from '../../components/SimplePage';

const DesignPatterns: React.FC = () => {
  return (
    <SimplePage 
      title="Design Patterns" 
      subtitle="Reusable solutions to common problems in software design."
    >
      <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Why Design Patterns?</h3>
      <p>
        Design patterns provide a shared vocabulary for developers to discuss architectural solutions. They are not code snippets to be copied, but templates to be applied to solve specific problems in specific contexts.
      </p>

      <h3 className="text-2xl font-bold text-primary dark:text-white mt-8 mb-4">Categories</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Creational Patterns:</strong> Dealing with object creation mechanisms (e.g., Singleton, Factory, Builder).</li>
        <li><strong>Structural Patterns:</strong> Easing the design by identifying a simple way to realize relationships between entities (e.g., Adapter, Facade, Composite).</li>
        <li><strong>Behavioral Patterns:</strong> Identifying common communication patterns between objects (e.g., Observer, Strategy, Command).</li>
      </ul>
      
      <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg mt-8">
        <p className="font-semibold">Page Content Under Development</p>
        <p className="text-sm">Detailed examples and case studies coming soon.</p>
      </div>
    </SimplePage>
  );
};

export default DesignPatterns;