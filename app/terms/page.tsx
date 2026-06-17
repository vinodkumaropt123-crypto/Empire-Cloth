'use client';

import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsAndConditionsPage() {
  const lastUpdated = "June 17, 2026";

  return (
    <div className="w-full pt-28 pb-16 min-h-screen bg-white dark:bg-[#070707] text-neutral-800 dark:text-neutral-300 font-sans" id="terms-view">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="space-y-3 mb-10 pb-6 border-b border-neutral-100 dark:border-neutral-900 text-center sm:text-left">
          <span className="text-[#c5a85c] font-mono text-xs font-bold uppercase tracking-widest">LEGAL DOCUMENTATION</span>
          <h1 className="text-3xl sm:text-4xl font-display font-black text-neutral-900 dark:text-white uppercase leading-tight">
            Terms & Conditions
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
              Welcome to Empire Clothing Hub. By accessing our platform or purchasing readymade garments from our Dadri physical showroom, you agree to comply with the terms specified below.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-neutral-900 dark:text-white uppercase tracking-wide">
              1. Store Availability & Pricing
            </h2>
            <p>
              We strive to display accurate pricing, textile specifications, and stock updates on our catalog portal. However, physical store availability near Railway Road, Dadri is volatile—especially for limited edition festive silk kurtas or wedding banarasi lehengas. We reserve the right to revise lists or notify you of alternative design options during stock checkups or WhatsApp calls.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-neutral-900 dark:text-white uppercase tracking-wide">
              2. Custom Stitching & Customizations
            </h2>
            <p>
              Any order carrying specialized boutique fitting or material stitching under your command requires half of the payment paid upfront. Once a designer gown, sherwani, or trouser has undergone custom physical alterations relative to your custom dimensions, the item becomes strictly non-returnable and non-refundable.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-display font-bold text-neutral-900 dark:text-white uppercase tracking-wide">
              3. Limitation of Liability
            </h2>
            <p>
              Empire Clothing Hub is curated to support regional buyers. While we provide reliable services, we cannot guarantee constant uninterrupted uptime of our digital catalog server or perfect accuracy of the Google Maps directional tools.
            </p>
          </section>

          <section className="space-y-4 pt-6 border-t border-neutral-150 dark:border-neutral-900">
            <h2 className="text-xl font-display font-bold text-neutral-900 dark:text-white uppercase tracking-wide">
              Legal Dispute Inquiries
            </h2>
            <p className="text-neutral-500">
              These terms are governed under statutory regulations of Gautam Buddha Nagar District Courts, Gautam Buddha Nagar, Uttar Pradesh, India:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-450 font-sans">
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
                <span>legal@empireclothinghub.com</span>
              </li>
            </ul>
          </section>

        </div>

      </div>
    </div>
  );
}
