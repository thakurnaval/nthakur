import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Sparkles, Database, Lock } from 'lucide-react';
import Section from '../components/Section';
import SEO from '../components/SEO';

const GenAI: React.FC = () => {
  return (
    <>
      <SEO 
        title="GenAI Operations (LLMOps) & Strategy | AI Governance"
        description="Operationalize Generative AI. LLM security, cost governance, RAG architecture, and AI Agents for enterprise adoption."
      />
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GenAI & Ops</h1>
          <p className="text-xl text-slate-100 max-w-2xl">
            Operationalizing Artificial Intelligence for the modern enterprise.
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">The Intersection of AI and Ops</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Generative AI is transforming how we write code, manage incidents, and optimize costs. But implementing LLMs introduces new challenges in security (LLM Security), cost governance (Tokenomics), and operations (LLMOps).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: Bot, 
                title: 'AI Copilots for SRE', 
                desc: 'Using GenAI to analyze logs, summarize incidents, and suggest remediation steps in real-time.' 
              },
              { 
                icon: Sparkles, 
                title: 'CI/CD Insights', 
                desc: 'Predictive analytics for build failures and intelligent test case generation.' 
              },
              { 
                icon: Database, 
                title: 'Token & Cost Governance', 
                desc: 'Applying FinOps principles to AI consumption. Managing API costs and model inference spend.' 
              },
              { 
                icon: Lock, 
                title: 'Security for GenAI', 
                desc: 'Protecting against prompt injection, data leakage, and ensuring compliance in AI outputs.' 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:border-secondary dark:hover:border-secondary transition-colors">
                <item.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-bold text-primary dark:text-white mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl text-center border border-transparent dark:border-slate-700">
            <h3 className="text-2xl font-bold text-primary dark:text-white mb-4">Ready to adopt GenAI safely?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Naval helps organizations build the "Ops" around their AI initiatives, ensuring they are scalable, secure, and cost-efficient.
            </p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary-hover shadow-lg transition-all">
              Discuss GenAIOps Strategy
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default GenAI;