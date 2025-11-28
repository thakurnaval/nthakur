import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle, Loader2, AlertCircle } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE (Same one used in Contact.tsx)
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwvGjTnvaJzG5RGaOZyIUK0iPNRhrD1DMG-1rRri0N5xhkEnv1FVNOjc_-kMZRcRlnIsw/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus('submitting');

    try {
      const form = new FormData();
      form.append('email', email);
      // We add default values for the other columns in your spreadsheet
      form.append('name', 'Newsletter Subscriber'); 
      form.append('topic', 'Newsletter'); 
      form.append('message', 'User subscribed via homepage footer/section');

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: form,
        mode: 'no-cors'
      });

      setStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error submitting newsletter', error);
      setStatus('error');
    }
  };

  return (
    <div className="bg-primary relative overflow-hidden rounded-2xl p-8 md:p-12 text-center border border-slate-700 shadow-2xl">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
          <Mail className="w-6 h-6 text-secondary" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Join the DevOpsism Newsletter</h2>
        <p className="text-slate-100 mb-8 text-lg">
          Get weekly insights on System Architecture, Cloud Cost Optimization, and Engineering Leadership delivered straight to your inbox. No spam, just value.
        </p>

        {status === 'success' ? (
          <div className="bg-green-500/20 border border-green-500/50 text-green-200 p-4 rounded-lg flex items-center justify-center animate-in fade-in">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Thanks for subscribing! Check your inbox soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
             <div className="flex-grow">
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'submitting'}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all disabled:opacity-50"
                />
                {status === 'error' && (
                  <div className="text-red-400 text-xs text-left mt-2 flex items-center">
                    <AlertCircle size={12} className="mr-1"/> Error signing up. Please try again.
                  </div>
                )}
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="px-6 py-3 bg-secondary hover:bg-secondary-hover text-primary font-bold rounded-lg transition-colors flex items-center justify-center whitespace-nowrap disabled:opacity-70 h-[50px]"
            >
              {status === 'submitting' ? (
                 <Loader2 className="animate-spin" size={20} />
              ) : (
                 <>Subscribe <ArrowRight size={18} className="ml-2" /></>
              )}
            </button>
          </form>
        )}
        <p className="text-xs text-slate-400 mt-4">
          Join 5,000+ engineers. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;