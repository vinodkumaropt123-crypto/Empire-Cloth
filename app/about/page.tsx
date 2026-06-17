'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Sparkles, Award, ShieldCheck, ShoppingBag, Eye, Target, Heart } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full pt-28 pb-16 min-h-screen bg-white dark:bg-[#0a0a0a]" id="about-us-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-[#c5a85c] text-[10px] font-black font-mono tracking-[0.25em] uppercase">THE BRAND LEGACY</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tighter text-neutral-950 dark:text-white uppercase leading-none italic">
            EMPIRE CLOTHING HUB
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm uppercase tracking-tight leading-relaxed">
            Founded in Dadri, Uttar Pradesh, Empire Clothing Hub was conceptualized by **Vipin Baisla** with a burning vision: providing monarchic fabric quality alongside contemporary styles.
          </p>
        </div>

        {/* Visual Showcase Block */}
        <div className="relative h-[450px] w-full rounded-none overflow-hidden mb-16 border border-neutral-200 dark:border-white/10 shadow-none">
          <Image
            src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1500&q=80"
            alt="Empire Clothing Premium Weaving"
            fill
            className="object-cover grayscale hover:grayscale-0 duration-500 transition-all brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-white">
            <div className="space-y-2">
              <span className="text-[#c5a85c] font-mono text-[10px] font-bold tracking-[0.2em] uppercase">MADE IN INDIA</span>
              <h2 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight">Unrivaled Fabric Elegance</h2>
              <p className="text-xs text-neutral-300 max-w-xl">
                Every hand-selected roll of silk, breathable premium linen, and certified pure cotton goes through our extreme quality audit before entering our showroom in Railway Road, Dadri.
              </p>
            </div>
            <div className="bg-black/55 backdrop-blur-md border border-white/10 px-6 py-4 rounded-none">
              <p className="text-2xl font-black font-display text-[#c5a85c] italic tracking-tighter">100%</p>
              <p className="text-[9px] text-neutral-200 uppercase font-mono tracking-widest font-bold">Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 animate-reveal">
          <div className="lg:col-span-12 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tighter text-neutral-950 dark:text-white border-b border-neutral-200 dark:border-white/10 pb-4">
              Our Journey & Dedication to Quality
            </h2>
            <div className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed space-y-4 uppercase tracking-tight">
              <p>
                Empire Clothing Hub represents the finest readymade garments, boutique wear, and premium textiles in Uttar Pradesh. Guided actively by our founder **Vipin Baisla**, our physical retail store has served hundreds of local families, wedding couples, business leaders, and fashion forward youth since opening on Dadri&apos;s popular Railway Road channel.
              </p>
              <p className="normal-case text-neutral-550 dark:text-neutral-400">
                Our core strength lies in our relationships across handloom capitals—from Varanasi to Kanchipuram and Ludhiana—meaning that we are uniquely equipped to curate royal Banarasi silk sarees, premium Italian cut wedding sherwanis, breathable, highly resilient daily daily polos, and designer jeans at wholesale-adjusted pricing.
              </p>
              <p className="normal-case text-neutral-550 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Additionally, we strive to build a community-centric ecosystem. We prioritize your comfort above absolute transaction size. At our physical storefront in Dadri, Gautam Buddha Nagar, customers enjoy custom tailoring adjustments, master fitting services, and dedicated guidance to ensure that your style perfectly compliments your true inner confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Mission and Vision Bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Mission */}
          <div className="p-8 rounded-none bg-neutral-50 dark:bg-[#111111] border border-neutral-200 dark:border-white/10 space-y-4 shadow-none hover:border-neutral-950 dark:hover:border-white/40 transition-colors">
            <div className="w-12 h-12 bg-[#c5a85c]/10 rounded-none flex items-center justify-center text-[#c5a85c]">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-xl uppercase tracking-tight text-neutral-950 dark:text-white">Our Mission</h3>
            <p className="text-neutral-550 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
              To elevate the attire and confidence of our regional community by delivering premium fabrics, bespoke styling, and elegant garments in a reliable local environment.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-none bg-neutral-50 dark:bg-[#111111] border border-neutral-200 dark:border-white/10 space-y-4 shadow-none hover:border-neutral-950 dark:hover:border-white/40 transition-colors">
            <div className="w-12 h-12 bg-[#c5a85c]/10 rounded-none flex items-center justify-center text-[#c5a85c]">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-xl uppercase tracking-tight text-neutral-950 dark:text-white">Our Vision</h3>
            <p className="text-neutral-550 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
              To be recognized as Gautam Buddha Nagar&apos;s absolute gold-standard fashion benchmark—establishing the ideal harmony between luxury products and highly affordable prices.
            </p>
          </div>

          {/* Values */}
          <div className="p-8 rounded-none bg-neutral-50 dark:bg-[#111111] border border-neutral-200 dark:border-white/10 space-y-4 shadow-none hover:border-neutral-950 dark:hover:border-white/40 transition-colors">
            <div className="w-12 h-12 bg-[#c5a85c]/10 rounded-none flex items-center justify-center text-[#c5a85c]">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-xl uppercase tracking-tight text-neutral-950 dark:text-white">Core Values</h3>
            <p className="text-neutral-550 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Honesty, pure materials, regional employment, customized hospitality, and absolute customer satisfaction. We don&apos;t just sell products; we construct styles that endure.
            </p>
          </div>
        </div>

        {/* Meet the Founder section */}
        <div className="p-8 sm:p-12 rounded-none bg-neutral-950 text-white border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-950 to-zinc-950 opacity-90 z-0" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative w-44 h-44 rounded-none border-2 border-[#c5a85c] overflow-hidden bg-neutral-905 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
                  alt="Vipin Baisla, Owner of Empire Clothing Hub"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-9 space-y-4 text-center lg:text-left">
              <span className="text-[#c5a85c] font-mono text-[10px] font-black tracking-[0.2em] uppercase">FOUNDER & VISIONARY</span>
              <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-white tracking-tight">Vipin Baisla</h3>
              <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                &ldquo;At Empire Clothing Hub, we treat fashion as an art. We want every individual stepping out of our Dadri showroom to feel like a sovereign ruler of their world. We source from the highest authority textile capitals so you look extremely striking on festive occasions, corporate meetings, or everyday life. Come visit us near Railway Road and allow our specialized tailors to customize your premium wardrobe.&rdquo;
              </p>
              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="text-[10px] bg-neutral-900 border border-white/5 px-3.5 py-1.5 rounded-none text-neutral-400 font-mono uppercase tracking-widest font-bold">
                  📍 Located in Railway Road, Dadri, UP
                </span>
                <span className="text-[10px] bg-neutral-900 border border-white/5 px-3.5 py-1.5 rounded-none text-neutral-400 font-mono uppercase tracking-widest font-bold">
                  📞 Phone Support: +91 99999 88888
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
