import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MapPin, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import Section from '../components/Section';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
  const location = useLocation();
  // PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvGjTnvaJzG5RGaOZyIUK0iPNRhrD1DMG-1rRri0N5xhkEnv1FVNOjc_-kMZRcRlnIsw/exec';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Workshop / Training',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Auto-select topic based on query parameter
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const topicParam = searchParams.get('topic');
    if (topicParam) {
      setFormData(prev => ({ ...prev, topic: topicParam }));
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('submitting');

    try {
      // We use FormData to send data as application/x-www-form-urlencoded
      // This is the format the Google Apps Script expects in 'e.parameter'
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('topic', formData.topic);
      form.append('message', formData.message);

      // mode: 'no-cors' is required to post to Google Script from a browser 
      // without CORS errors. Note: This means we won't get a readable JSON response back,
      // but the data will be submitted successfully.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors' 
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', topic: 'Workshop / Training', message: '' });
    } catch (error) {
      console.error('Error submitting form', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <SEO 
        title="Contact Naval Thakur | Book a Workshop or Consultation"
        description="Get in touch for speaking engagements, workshops, mentorship, or consulting inquiries."
      />
      <div className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-slate-100 max-w-2xl">
             Let's discuss how we can work together.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-2xl font-bold text-primary dark:text-white mb-6">Contact Information</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Interested in booking Naval for a speaking engagement, a workshop, or a consulting engagement? Fill out the form or reach out directly via social channels.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary mr-4">
                  <Mail size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-primary dark:text-white">Email</h3>
                   <p className="text-slate-600 dark:text-slate-400">contact@nthakur.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                   <h3 className="font-bold text-primary dark:text-white">Location</h3>
                   <p className="text-slate-600 dark:text-slate-400">Available for Global Remote Work & Travel</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-800 border-l-4 border-secondary rounded-r-lg">
              <h3 className="font-bold text-primary dark:text-white mb-2">Open for Collaboration</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Naval is currently accepting invitations for podcasts, panels, and guest blog posts regarding Generative AI in Operations and FinOps adoption.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
             {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 max-w-xs mx-auto">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-bold text-primary dark:text-secondary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mr-2 mt-0.5" />
                      <p className="text-sm text-red-700 dark:text-red-300">
                        Something went wrong. Please try again or email me directly at contact@nthakur.com.
                      </p>
                    </div>
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all disabled:opacity-50"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                        Phone Number <span className="text-slate-400 font-normal text-xs">(Optional)</span>
                      </label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all disabled:opacity-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="topic" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Topic</label>
                    <select 
                      id="topic" 
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all disabled:opacity-50"
                    >
                      <option>Workshop / Training</option>
                      <option>Speaking Engagement</option>
                      <option>Consulting</option>
                      <option>Mentorship</option>
                      <option>Resume Review</option>
                      <option>Interview Prep</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4} 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all disabled:opacity-50"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full py-3 bg-primary text-white font-bold rounded-md hover:bg-slate-800 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin mr-2" size={18} /> Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" /> Send Message
                      </>
                    )}
                  </button>
                </form>
             )}
          </div>

        </div>
      </Section>
    </>
  );
};

export default Contact;