'use client';

import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !message) return;

    // Simulate sending progress with simple client state
    setSubmitted(true);
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div className="w-full pt-24 pb-16 min-h-screen bg-white dark:bg-[#070707]" id="contact-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-[#c5a85c] text-xs font-bold font-mono tracking-widest uppercase animate-reveal">MEET OUR STAFF</p>
          <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-neutral-900 dark:text-white uppercase">
            Let&apos;s Connect In Person
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
            Interested in booking a bridal/wedding fitting session? Or seeking directions to our physical showroom in Dadri? Feel free to call us, chat on WhatsApp, or send us an inquiry!
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Form Box (Left side) */}
          <div className="lg:col-span-7 bg-neutral-50 dark:bg-[#111111] border border-neutral-200/60 dark:border-neutral-800 p-8 rounded-2xl shadow-sm" id="contact-form-section">
            <h2 className="text-xl font-display font-extrabold text-neutral-900 dark:text-white mb-6 border-b border-neutral-100 dark:border-neutral-900 pb-3">
              Drop Us An Inquiry
            </h2>

            <form onSubmit={handleSendMessage} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full name */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vipin Singh"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070707] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-[#c5a85c] text-xs"
                  />
                </div>

                {/* Telephone */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 99999 88888"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070707] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-[#c5a85c] text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. name@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070707] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-[#c5a85c] text-xs"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                    Topic of Inquiry
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Wedding outfit customized tailoring"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070707] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-[#c5a85c] text-xs"
                  />
                </div>
              </div>

              {/* Message text */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                  How can Vipin and our staff help you? *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Specify sizes, fabric expectations, required timings, or fitting appointments details..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070707] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-[#c5a85c] text-xs resize-none"
                />
              </div>

              {/* Success Notification Alert */}
              {submitted && (
                <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-2 text-green-700 dark:text-green-400 text-xs">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>Your message has been captured! Vipin Baisla or our showroom manager will call you shortly. Thank you.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#c5a85c] hover:bg-[#b09348] text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors duration-200"
              >
                Submit Inquiry to Showroom
              </button>
            </form>
          </div>

          {/* Location & Quick Contact links (Right side) */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6" id="quick-contact-links">
            <div className="p-8 bg-neutral-50 dark:bg-[#111111] border border-neutral-200/60 dark:border-neutral-800 rounded-2xl shadow-sm space-y-6">
              <h2 className="text-xl font-display font-extrabold text-neutral-900 dark:text-white border-b border-neutral-100 dark:border-neutral-900 pb-3">
                Contact Directory
              </h2>

              <ul className="space-y-4 text-xs sm:text-sm">
                
                {/* Physical Location Pin */}
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-[#c5a85c]/15 text-[#c5a85c] rounded-lg flex-shrink-0 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white">Store Address</h4>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed mt-1">
                      Railway Road, Near Baisla Chowk, Main Market, Dadri, Gautam Buddha Nagar, Uttar Pradesh - 203207
                    </p>
                  </div>
                </li>

                {/* Telephone */}
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-[#c5a85c]/15 text-[#c5a85c] rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white">Phone Support Links</h4>
                    <p className="text-neutral-550 dark:text-neutral-400 text-xs mt-1">
                      Showroom Hot Desk: <a href="tel:+919999988888" className="text-[#c5a85c] hover:underline">+91 99999 88888</a>
                    </p>
                  </div>
                </li>

                {/* WhatsApp */}
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white">WhatsApp Hotline</h4>
                    <p className="text-neutral-550 dark:text-neutral-400 text-xs mt-1">
                      WhatsApp Chat Link: <a href="https://wa.me/919999988888" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline font-semibold">Message Store Online</a>
                    </p>
                  </div>
                </li>

                {/* Email address */}
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-[#c5a85c]/15 text-[#c5a85c] rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white">Email Addresses</h4>
                    <p className="text-neutral-550 dark:text-neutral-400 text-xs mt-1">
                      Enquiries: <a href="mailto:contact@empireclothinghub.com" className="text-[#c5a85c] hover:underline">contact@empireclothinghub.com</a>
                    </p>
                  </div>
                </li>

                {/* Timings */}
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-[#c5a85c]/15 text-[#c5a85c] rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white">Store Availability Hours</h4>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed mt-1">
                      10:00 AM to 09:30 PM (Wednesday to Monday)<br />
                      <span className="text-red-500 font-semibold uppercase text-[10px]">Note: Tuesday is weekly store holiday</span>
                    </p>
                  </div>
                </li>

              </ul>
            </div>
            
          </div>
        </div>

        {/* Mock/Stylised Interactive Google Maps integration */}
        <div className="space-y-4" id="google-maps-integration-frame">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-display font-extrabold text-xl text-neutral-900 dark:text-white">Physical Location In Dadri</h3>
              <p className="text-neutral-500 text-xs leading-tight">Located elegantly on the primary shopping lane on Railway Road, Gautam Buddha Nagar.</p>
            </div>
            <a 
              href="https://maps.google.com/?q=Railway+Road+Dadri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-neutral-950 border border-neutral-800 text-white dark:bg-neutral-900 hover:border-[#c5a85c] hover:text-[#c5a85c] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5"
            >
              <MapPin className="w-3.5 h-3.5 text-[#c5a85c]" />
              <span>Google Maps Link</span>
            </a>
          </div>

          <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-lg">
            {/* Interactive styled Vector representation resembling Leaflet styled maps container */}
            <div className="absolute inset-0 bg-[#f4ebd0] dark:bg-[#1a1a1a] flex flex-col justify-center items-center p-8 text-center space-y-4">
              
              <div className="absolute top-4 left-4 bg-white/95 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-4 rounded-xl shadow-lg text-left max-w-xs space-y-1 z-10 text-neutral-950 dark:text-neutral-100">
                <p className="font-display font-black text-sm text-[#c5a85c] tracking-wide uppercase">Empire Clothing Hub</p>
                <p className="text-[10px] text-neutral-500 dark:text-neutral-400">Railway Road, Dadri, Uttar Pradesh 203207</p>
                <p className="text-[9px] text-[#25d366] font-bold">✓ Open 10:00 AM - 9:30 PM (Except Tuesday)</p>
              </div>

              {/* Stylized vector map visuals */}
              <div className="w-16 h-16 bg-[#c5a85c]/10 border border-[#c5a85c]/30 rounded-full flex items-center justify-center animate-ping absolute" />
              <div className="w-12 h-12 bg-[#c5a85c] text-neutral-950 rounded-full flex items-center justify-center shadow-2xl relative z-10">
                <MapPin className="w-6 h-6 text-black-900" />
              </div>

              <div className="max-w-md space-y-2 relative z-10">
                <h4 className="font-display font-bold text-neutral-900 dark:text-white">Active Google Maps Integration Map Placeholder</h4>
                <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed max-w-sm mx-auto">
                  Our showroom is situated near the center of the thriving Dadri Railway Market line. Walk past Baisla Chowk, and look for our gold lion king banner on your right!
                </p>
                <a 
                  href="https://maps.google.com/?q=Empire+Clothing+Hub+Dadri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex py-2 px-5 bg-[#c5a85c] text-neutral-950 rounded-full text-xs font-bold uppercase tracking-wider duration-200 mt-2"
                >
                  Generate Navigation Directions
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
