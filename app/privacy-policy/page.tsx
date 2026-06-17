'use client';

import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = "June 17, 2026";

  return (
    <div className="w-full pt-28 pb-16 min-h-screen bg-white dark:bg-[#070707] text-neutral-800 dark:text-neutral-300 font-sans" id="privacy-policy-view">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-10 pb-6 border-b border-neutral-100 dark:border-neutral-900 text-center sm:text-left">
          <span className="text-[#c5a85c] font-mono text-xs font-bold uppercase tracking-widest">LEGAL DOCUMENTATION</span>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 dark:text-white uppercase leading-tight">
            Privacy Policy
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">
            Last Updated: {lastUpdated} • Empire Clothing Hub (owned by Vipin Baisla)
          </p>
        </div>

        {/* Content body description */}
        <div className="space-y-6 text-sm leading-relaxed text-slate-700 dark:text-neutral-400">
          
          <div className="p-4 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/50 dark:border-neutral-850 rounded-xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#c5a85c] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-500">
              Your trust is our greatest asset. This document details how Vipin Baisla and Empire Clothing Hub manage, protect, and process user details gathered from our Dadri website showroom.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-neutral-900 dark:text-white uppercase tracking-wide">
              1. Information We Collect
            </h2>
            <p>
              We gather basic personal information when you volunteer to place an in-store callback request, submit styling feedback, or contact our team via WhatsApp. This details include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Contact identity elements: e.g., Full name, phone number, email address.</li>
              <li>Sizing preferences or styling requests submitted via contact boxes.</li>
              <li>In-app local storage and cached theme parameters (Light vs. Dark preferences).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-neutral-900 dark:text-white uppercase tracking-wide">
              2. How We Apply Your Data
            </h2>
            <p>
              We prioritize data integrity. Your private records are accessed purely to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Initiate requested callbacks regarding fit catalogs or stock levels.</li>
              <li>Adjust physical garments under your direct custom dimensional guidance.</li>
              <li>Provide local promotional offers if you explicitly opted to join our local mailing checklist.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-neutral-900 dark:text-white uppercase tracking-wide">
              3. Data Security & Storage
            </h2>
            <p>
              Your contact details are stored securely. We do not sell, rent, or lease local subscriber records to secondary marketing networks. All stored contacts are held purely inside cloud databases with protected access.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-neutral-150 dark:border-neutral-900">
            <h2 className="text-xl font-display font-bold text-neutral-900 dark:text-white uppercase tracking-wide">
              Contact & Inquiry Concerns
            </h2>
            <p className="text-neutral-500">
              To rectify personal records, delete stored styling parameters, or request further security statements, reach out to our Dadri administrative desk:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-450">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c5a85c]" />
                <span>Railway Road, Near Baisla Chowk, Main Market, Dadri, UP - 203207</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a85c]" />
                <span>+91 99999 88888</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a85c]" />
                <span>privacy@empireclothinghub.com</span>
              </li>
            </ul>
          </section>

        </div>

      </div>
    </div>
  );
}
