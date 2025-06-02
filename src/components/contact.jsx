import React, { useState } from 'react';
import ConnectSection from './social';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Name is required');
      return false;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setError('Message is required');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setShowSuccess(false);
    setError('');

    setTimeout(() => {
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-20 relative overflow-hidden text-white font-sans">

       <div className="fixed inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-5">
          <h1
            className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-black tracking-wider whitespace-nowrap  opacity-50"
            style={{ fontFamily: "Space Mono" }}
          >
            Contact Me
          </h1>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 container mx-auto px-6 pt-16">
        <div className="inline-block">
  <div className="inline-block">
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-1 tracking-tight">
      <span className="inline-block relative">
        Contact
        <div className="h-1 mt-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse" />
      </span>
      <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-4">
        ME
      </span>
    </h1>
  </div>
</div>

        <p className="text-lg md:text-xl text-gray-300 mt-8 max-w-4xl leading-relaxed">
          Get in touch or shoot me an email directly on{' '}
          <a href="mailto:venkatb12127@gmail.com" className="text-white font-semibold">
            venkatb12127@gmail.com
          </a>
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="w-full px-4 py-16 flex flex-col items-center justify-center relative z-10">
        <div className="max-w-2xl w-full space-y-6">

          {/* Success Message */}
          {showSuccess && (
            <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-md">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-green-400 font-medium">Message sent successfully!</p>
              </div>
              <p className="text-green-300/80 text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-md">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <p className="text-red-400 font-medium">{error}</p>
              </div>
            </div>
          )}

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-transparent focus:bg-black/60 border border-white/20 text-white px-4 py-3 rounded-md focus:outline-none focus:border-white/40 transition-colors"
              autoComplete="name"
              disabled={isSubmitting}
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-transparent focus:bg-black/60 border border-white/20 text-white px-4 py-3 rounded-md focus:outline-none focus:border-white/40 transition-colors"
              autoComplete="email"
              disabled={isSubmitting}
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-transparent focus:bg-black/60 border border-white/20 text-white px-4 py-3 rounded-md focus:outline-none focus:border-white/40 transition-colors resize-vertical"
              disabled={isSubmitting}
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black font-medium px-6 py-3 rounded-md hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                    <path fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
             <a href="/" className="inline-flex items-center gap-2 text-white/80 text-sm hover:text-white transition">
              Go Back Home <span className="text-xl">→</span>
            </a>
          </form>

          {/* Navigation and Socials */}
        
        </div>
      </div>

       <div className="mt-10">
              <ConnectSection />
          </div>
    </div>
  );
};

export default ContactComponent;
