import React from 'react';
import SimplePage from '../../components/SimplePage';

const DevSecOpsPractices: React.FC = () => {
  return (
    <SimplePage 
      title="DevSecOps Practices" 
      subtitle="Integrating security into the software development lifecycle."
    >
      <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Shift Left</h3>
      <p className="mb-6">
        The fundamental principle of DevSecOps is moving security checks earlier in the process—from the "deploy" phase to the "design" and "build" phases.
      </p>

      <div className="space-y-6">
        {[
          { title: "Pre-Commit Hooks", desc: "Scan for secrets (API keys, passwords) before code even leaves the developer's machine." },
          { title: "IDE Integration", desc: "Real-time feedback on vulnerabilities within the code editor." },
          { title: "Dependency Scanning", desc: "Automated checks for known vulnerabilities in open-source libraries (SCA)." },
          { title: "Security Champions", desc: "Embedding security-savvy developers within product teams to scale knowledge." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col border-l-4 border-secondary pl-4">
            <h4 className="font-bold text-primary dark:text-white">{item.title}</h4>
            <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </SimplePage>
  );
};

export default DevSecOpsPractices;