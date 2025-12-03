import React, { useState } from 'react';
import CircuitArt from '../common/CircuitArt';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-950 relative overflow-hidden transition-colors duration-300">
      <CircuitArt className="absolute bottom-0 right-0 w-full h-full opacity-30 rotate-180 z-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white dark:bg-black p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Initialize Connection</h2>
            <p className="text-gray-600 dark:text-gray-400">Have a project in mind? Let's discuss architecture.</p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Name</label>
                <input required type="text" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-3 focus:outline-none focus:border-black dark:focus:border-white text-black dark:text-white transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Email</label>
                <input required type="email" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-3 focus:outline-none focus:border-black dark:focus:border-white text-black dark:text-white transition-colors" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Message</label>
              <textarea required rows="4" className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded p-3 focus:outline-none focus:border-black dark:focus:border-white text-black dark:text-white transition-colors"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={formStatus === 'submitting' || formStatus === 'success'}
              className={`w-full py-4 rounded font-bold text-white dark:text-black transition-all flex items-center justify-center gap-2
                ${formStatus === 'success' ? 'bg-green-600 dark:bg-green-400' : 'bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200'}`}
            >
              {formStatus === 'idle' && 'Send Transmission'}
              {formStatus === 'submitting' && 'Sending...'}
              {formStatus === 'success' && 'Transmission Received'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;