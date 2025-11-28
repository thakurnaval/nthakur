import React from 'react';
import Section from '../components/Section';
import { Award, Briefcase, Globe, Linkedin, MonitorPlay, Twitter, Github, Youtube } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Naval</h1>
          <p className="text-xl text-slate-100 max-w-2xl">
             18+ Years in DevSecOps, CloudOps, and FinOps Leadership.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="md:col-span-1">
             <div className="sticky top-24">
               <img 
                 src="https://picsum.photos/400/500?grayscale" 
                 srcSet="https://picsum.photos/300/375?grayscale 300w, https://picsum.photos/400/500?grayscale 400w, https://picsum.photos/600/750?grayscale 600w"
                 sizes="(max-width: 768px) 100vw, 33vw"
                 alt="Naval Thakur" 
                 className="rounded-xl shadow-lg mb-6 w-full object-cover" 
                 width="400"
                 height="500"
                 loading="eager"
               />
               <div className="flex gap-4 justify-center">
                  <a href="https://www.linkedin.com/in/navalthakur" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#0077b5] dark:hover:bg-[#0077b5] transition-colors" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://x.com/nthakur_dot_com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-white hover:bg-black dark:hover:bg-black transition-colors" aria-label="X (Twitter)">
                    <Twitter size={24} />
                  </a>
                  <a href="https://github.com/thakurnaval" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#333] dark:hover:bg-[#333] transition-colors" aria-label="GitHub">
                    <Github size={24} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCNFBR2tvSzgZr481iyNaI7A" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#FF0000] dark:hover:bg-[#FF0000] transition-colors" aria-label="YouTube">
                    <Youtube size={24} />
                  </a>
               </div>
             </div>
           </div>

           <div className="md:col-span-2 space-y-8">
             <div>
               <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Professional Bio</h2>
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                 Naval Thakur is a seasoned technologist and transformation leader with over 18 years of experience helping enterprises scale their software delivery and operations. He has successfully led large-scale DevSecOps initiatives, cloud migrations, and FinOps implementations in complex, regulated environments across Energy, Technology, and Global Delivery sectors.
               </p>
               <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                 Beyond the technical implementation, Naval focuses on the cultural shift required for true DevOps success. As a Practice Manager and Coach, he mentors engineering teams to embrace automation, accountability, and continuous improvement.
               </p>
             </div>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-100 dark:border-slate-700">
                 <Briefcase className="w-8 h-8 text-secondary mb-3" />
                 <h3 className="font-bold text-primary dark:text-white mb-2">Current Role</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400">
                   Leading DevSecOps & FinOps practices, driving operational excellence and cost efficiency for enterprise cloud ecosystems.
                 </p>
               </div>
               <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-100 dark:border-slate-700">
                 <Globe className="w-8 h-8 text-secondary mb-3" />
                 <h3 className="font-bold text-primary dark:text-white mb-2">Global Experience</h3>
                 <p className="text-sm text-slate-600 dark:text-slate-400">
                   Extensive experience managing distributed teams and delivering projects across multiple geographies and time zones.
                 </p>
               </div>
             </div>

             <div>
               <h3 className="text-2xl font-bold text-primary dark:text-white mb-4 flex items-center">
                 <Award className="mr-3 text-secondary" /> Certifications & Recognition
               </h3>
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 dark:text-slate-300">
                 {["Certified FinOps Practitioner", "AWS Certified Solutions Architect", "Certified Kubernetes Administrator (CKA)", "DevOps Institute Ambassador", "Agile Certified Practitioner", "Speaker at DevOps World"].map((cert, i) => (
                   <li key={i} className="flex items-center">
                     <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                     {cert}
                   </li>
                 ))}
               </ul>
             </div>
           </div>
        </div>
      </Section>
    </>
  );
};

export default About;