'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle, Phone, MapPin } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: "Who is the owner of Empire Clothing Hub in Dadri?",
    a: "Empire Clothing Hub belongs to and is managed under the direct leadership of Vipin Baisla. He ensures premium quality products, customized sizing services, and welcoming hospitality for every customer visiting our showroom on Railway Road, Dadri.",
    category: "Store Details"
  },
  {
    q: "Where exactly is the store located in Dadri, Uttar Pradesh?",
    a: "Our prime physical address is Railway Road, Near Baisla Chowk, Main Market, Dadri, Gautam Buddha Nagar, Uttar Pradesh - 203207. We are centrally located and highly accessible via public transport or local highways of Delhi NCR.",
    category: "Store Details"
  },
  {
    q: "What are your business hours?",
    a: "We are open from 10:00 AM to 09:30 PM, Wednesday to Monday. Please note that the store remains closed on Tuesdays for weekly local holiday.",
    category: "Store Details"
  },
  {
    q: "Do you specialize in Wedding Sherwanis & Bridal Collections?",
    a: "Yes, wedding ethnic wear is our primary specialty! We provide premium royal sherwanis, bandhgalas, and wedding blazers for grooms, alongside rich embroidered Banarasi sarees, wedding lehengas, and designer Anarkali suits for brides. We also support custom master tailoring for wedding groups.",
    category: "Collections"
  },
  {
    q: "Do you offer custom tailoring and boutique styling?",
    a: "Absolutely! We support custom sizing, length adjustments, sleeve alteration, and full custom boutique styling. Our experienced master tailors will measure you in-shop and adjust everything to give a clean custom fit.",
    category: "Services"
  },
  {
    q: "How can I check if an item on your website is available in my size?",
    a: "You can check size availability instantly by clicking the 'Check Sizing on WhatsApp' on any product page, or by calling our store team directly at +91 99999 88888. Our helpful staff will quickly inspect our showroom stock and respond to you.",
    category: "Availability"
  },
  {
    q: "What payment methods are accepted at Empire Clothing Hub?",
    a: "We accept all modern payment options including cash, UPI (Google Pay, PhonePe, Paytm, BHIM), debit and credit cards (Visa, MasterCard, RuPay), and standard net-banking setups.",
    category: "Payments"
  },
  {
    q: "What is your return and exchange policy?",
    a: "We support easy exchanges within 7 days of purchase. The apparel item must have original tags attached and represent unused, unworn conditions. Please note that custom tailored or bespoke stitched products cannot be exchanged.",
    category: "Returns"
  }
];

export default function FAQPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveFAQ(activeFAQ === idx ? null : idx);
  };

  return (
    <div className="w-full pt-24 pb-16 min-h-screen bg-white dark:bg-[#070707]" id="faq-page-view">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Intro */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-[#c5a85c] text-xs font-bold font-mono tracking-widest uppercase animate-reveal">SEO HELP & REFERENCE</p>
          <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-neutral-900 dark:text-white uppercase">
            Frequently Asked Questions
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
            Uncover details about Empire Clothing Hub - the premier garment retail store option in Dadri, Gautam Buddha Nagar, Uttar Pradesh.
          </p>
        </div>

        {/* FAQs list accordion */}
        <div className="space-y-4" id="faq-accordions-container">
          {FAQ_ITEMS.map((faq, index) => {
            const active = activeFAQ === index;
            return (
              <div 
                key={index}
                className="border border-neutral-200/80 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between text-left font-display font-bold text-sm sm:text-base text-neutral-950 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900"
                  aria-expanded={active}
                >
                  <div className="flex gap-3 items-center">
                    <HelpCircle className="w-5 h-5 text-[#c5a85c] flex-shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  {active ? (
                    <ChevronUp className="w-5 h-5 text-[#c5a85c] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                  )}
                </button>

                {active && (
                  <div className="p-5 sm:p-6 bg-neutral-50/50 dark:bg-neutral-950/20 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 dark:border-neutral-800 space-y-3">
                    <p>{faq.a}</p>
                    <div className="flex gap-2">
                      <span className="text-[10px] bg-neutral-200/50 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 font-mono px-2.5 py-1 rounded">
                        Category: {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Local Map & Contact Prompt */}
        <div className="mt-16 p-8 bg-neutral-950 border border-neutral-800 text-white rounded-2xl text-center space-y-6">
          <div className="w-12 h-12 bg-[#c5a85c]/10 border border-[#c5a85c]/30 rounded-full flex items-center justify-center mx-auto text-[#c5a85c]">
            <MapPin className="w-5 h-5" />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-display font-bold text-white">Still Have Questions?</h3>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto">
              Our team under Vipin Baisla is extremely happy to help you with directions, size catalogs, custom pricing, or bridal appointment bookings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+919999988888"
              className="px-6 py-3 bg-[#c5a85c] hover:bg-[#b09348] text-neutral-950 font-bold rounded-xl text-xs uppercase duration-200 tracking-wider flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 99999 88888</span>
            </a>

            <a 
              href="https://wa.me/919999988888"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-white font-bold rounded-xl text-xs uppercase duration-200 tracking-wider flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25d366]" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
