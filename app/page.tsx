'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  ArrowRight, Phone, MessageCircle, Star, Sparkles, CheckCircle2, 
  ChevronDown, MapPin, Award, ShieldCheck, Heart, ShoppingBag, Grid 
} from 'lucide-react';

const CATEGORIES = [
  {
    id: 'mens',
    name: "Men's Luxury Wear",
    desc: 'Premium suits, kurtas, casuals, and designer denim',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80',
    tag: 'Trending',
  },
  {
    id: 'womens',
    name: "Women's Royal Collection",
    desc: 'Designer sarees, lehengas, modern kurtis, and chic fusion wear',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    tag: 'New Launch',
  },
  {
    id: 'kids',
    name: "Kids' Smart Wear",
    desc: 'Adorable, super-soft ethnic sets and fashionable casuals',
    image: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=600&q=80',
    tag: '10% OFF',
  },
  {
    id: 'ethnic',
    name: "Royal Ethnic Collectives",
    desc: 'Authentic sherwanis, bandhgalas, and festival garments',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80',
    tag: 'Premium Selection',
  },
  {
    id: 'casuals',
    name: "Modern Casuals",
    desc: 'Breathable linens, premium soft polos, and everyday essentials',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=600&q=80',
    tag: 'Best Sellers',
  },
  {
    id: 'seasonal',
    name: "Seasonal Festive Wear",
    desc: 'Handmade, rich textured outfits perfect for upcoming celebrations',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
    tag: 'Limited Edition',
  }
];

const SHOWCASE_PRODUCTS = [
  {
    name: "Royal Golden Sherwani",
    price: "₹8,499",
    category: "Ethnic",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1610030470200-e1ac10c26880?auto=format&fit=crop&w=500&q=80",
    tag: "Exclusive"
  },
  {
    name: "Italian Cut Premium Blue Blazer",
    price: "₹4,999",
    category: "Men\'s Wear",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80",
    tag: "Staff Pick"
  },
  {
    name: "Embroidered Banarasi silk Saree",
    price: "₹6,299",
    category: "Women\'s Wear",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80",
    tag: "Best Seller"
  },
  {
    name: "Smart Cotton Indo-Western Set",
    price: "₹3,799",
    category: "Men\'s Wear",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=500&q=80",
    tag: "New Arrival"
  },
  {
    name: "Handcrafted Georgette Anarkali Suite",
    price: "₹4,599",
    category: "Women\'s Wear",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80",
    tag: "Trending"
  },
  {
    name: "Kids Designer Silk Kurta Pyjama",
    price: "₹1,899",
    category: "Kids Wear",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=500&q=80",
    tag: "Popular"
  }
];

const REVIEWS = [
  {
    name: "Rahul Baisla",
    role: "Local Guide",
    review: "This is hands-down the best clothing store in Dadri. Vipin Baisla and his family make everyone feel right at home. The collection of wedding sherwanis and casual wear is absolutely unmatched for quality and pricing.",
    rating: 5
  },
  {
    name: "Priya Gurjar",
    role: "Regular Customer",
    review: "I got my bridal suit stitched and customized from here. The fabric they use is extremely premium and feels heavy. I highly recommend Empire Clothing Hub to everyone looking for premium designer sarees and lehengas in Gautam Buddha Nagar.",
    rating: 5
  },
  {
    name: "Gautam Adhana",
    role: "Businessman",
    review: "Exceptional garment store! The fit on their Italian blazers and customized fitting is precise. They have the modern fashion catalog that you won't easily find in other local shops. Truly a luxury clothing store.",
    rating: 5
  }
];

const FAQS = [
  {
    q: "Where is Empire Clothing Hub located in Dadri?",
    a: "We are situated in the main market of Dadri near Railway Road and Baisla Chowk, Gautam Buddha Nagar, Uttar Pradesh. Our store is highly accessible, and you'll find ample local parking spaces nearby.",
  },
  {
    q: "What types of apparel collections do you offer?",
    a: "We offer an extensive selection of garments including Men's wear (Sovereign Sherwanis, Blazers, Premium Linens, Shirts, and Trousers), Women's wear (Rich Banarasi Sarees, Lehengas, Designer Anarkali Suits, and Kurtis), and a charming selection of smart kids clothing for festivals and daily life.",
  },
  {
    q: "Are the prices affordable compared to Greater Noida/Delhi?",
    a: "Yes, absolutely! Our motto is 'Luxury Quality, Local Prices'. By sourcing our fabrics directly from manufacturing centers, we provide boutique-grade fashion in Dadri at almost half the cost of premium malls in Delhi or Noida.",
  },
  {
    q: "What are your business hours?",
    a: "We are open from 10:00 AM to 09:30 PM, Wednesday to Monday. Please note that our store remains closed on Tuesdays for local weekly holiday.",
  }
];

export default function Home() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveFAQ(activeFAQ === idx ? null : idx);
  };

  const getWhatsAppMessage = (prodName: string) => {
    return encodeURIComponent(`Hi Vipin! I saw your ${prodName} on the Empire Clothing Hub website. Is it available in stock?`);
  };

  return (
    <div className="w-full relative pt-12 md:pt-14 overflow-hidden" id="home-view">
      
      {/* 1. HERO BANNER SECTION */}
      <section className="relative min-h-[95vh] flex items-center justify-center bg-[#0a0a0a] text-white px-4">
        {/* Background visual banner with premium gradient mask overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80"
            alt="Empire Clothing Hub Premium Fashion Banner"
            fill
            className="object-cover opacity-25"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/20" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fdfdfd] dark:from-[#0a0a0a] to-transparent z-10" />
        </div>

        {/* Watermark Bold Text */}
        <div className="absolute -right-12 bottom-0 opacity-15 text-[150px] sm:text-[200px] lg:text-[280px] font-black leading-none pointer-events-none select-none tracking-tighter text-zinc-500 font-display uppercase z-0">
          DADRI
        </div>

        {/* Content Panel */}
        <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-col gap-1 text-[10px] sm:text-xs text-zinc-500 uppercase tracking-[0.25em] font-bold">
              <span>Established 2012</span>
              <span>Dadri, Uttar Pradesh</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.85] font-black italic tracking-tighter uppercase text-white"
            >
              EMPIRE<br />
              <span className="outline-text block">FASHION</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-lg font-sans leading-relaxed uppercase tracking-tight"
            >
              The Best Clothing Store in Dadri. Premium collections for Men, Women & Kids. Elevating Dadri&apos;s style since 2012 with luxury ready-made garments. Owned by **Vipin Baisla**.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
            >
              <Link
                href="/collections"
                className="bg-white text-black hover:bg-zinc-200 px-8 py-3.5 text-xs font-black uppercase tracking-widest transition-all rounded-none flex items-center justify-center gap-2 group border border-transparent"
                id="hero-shop-now-btn"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <Link
                href="/contact"
                className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-3.5 text-xs font-black uppercase tracking-widest transition-all rounded-none flex items-center justify-center gap-2"
                id="hero-contact-btn"
              >
                <Phone className="w-4 h-4 text-[#c5a85c]" />
                <span>Visit Store</span>
              </Link>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-md text-center sm:text-left"
            >
              <div>
                <p className="text-xl sm:text-2xl font-black text-white italic tracking-tighter">500+</p>
                <p className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">Verified Reviews</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-[#c5a85c] italic tracking-tighter">100%</p>
                <p className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">Pure Fabrics</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-white italic tracking-tighter">DADRI</p>
                <p className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">Railway Road</p>
              </div>
            </motion.div>
          </div>

          {/* Golden Badge Accent on Right */}
          <div className="hidden lg:flex lg:col-span-5 justify-center relative">
            <div className="w-72 h-72 border border-white/10 rounded-full flex items-center justify-center relative animate-pulse">
              <div className="w-56 h-56 border border-[#c5a85c]/30 rounded-full flex items-center justify-center bg-black/40">
                <div className="text-center p-6 bg-zinc-950 border border-white/10 rounded-full w-48 h-48 flex flex-col justify-center items-center shadow-2xl">
                  <Award className="w-10 h-10 text-[#c5a85c] mb-2" />
                  <p className="font-mono font-bold text-[9px] uppercase tracking-[0.2em] text-[#c5a85c]">The Pride of</p>
                  <p className="font-display font-black text-base text-white tracking-tight uppercase">UTTAR PRADESH</p>
                  <p className="text-[8px] text-zinc-500 font-mono tracking-widest uppercase mt-1">EMPIRE CLOTHING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT EMPIRE CLOTHING SECTION */}
      <section className="py-20 bg-neutral-50 dark:bg-[#0c0c0c] border-b border-neutral-200 dark:border-white/5 relative" id="about-intro">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full rounded-none overflow-hidden border border-[#c5a85c]/35 shadow-none">
                <Image
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
                  alt="Vipin Baisla's showroom interior"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Overlay local badge */}
              <div className="absolute -bottom-6 -right-6 bg-black dark:bg-zinc-950 border border-white/10 text-white p-5 rounded-none shadow-2xl max-w-xs">
                <p className="text-[#c5a85c] font-mono text-[10px] font-bold tracking-[0.2em] uppercase mb-1">VISIT TODAY</p>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed uppercase tracking-tight">
                  Located near Baisla Chowk, close to primary public transport of Dadri.
                </p>
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="w-10 h-[1.5px] bg-[#c5a85c]" />
                <span className="text-[#c5a85c] text-[10px] font-black font-mono uppercase tracking-[0.25em]">ABOUT EMPIRE CLOTHING</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-neutral-950 dark:text-white uppercase leading-none tracking-tighter">
                Crafting Legacies & Sovereign Apparel Since Inception
              </h2>

              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed uppercase tracking-tight">
                At **Empire Clothing Hub**, we believe in transforming traditional styles into timeless royal attire. Owned and designed under the expert leadership of **Vipin Baisla**, our store has become synonymous with high-grade garments and outstanding hospitality.
              </p>

              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Our mission is to empower everyone in Dadri, Greater Noida, and surrounding Uttar Pradesh with clothes that represent royalty, luxury, and unmatched confidence, without breaking the bank. From the perfect linen shirts for a hot summer day to stunning Banarasi silk sarees for wedding nights, we meticulously curate every thread.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a85c] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-neutral-950 dark:text-white text-xs uppercase tracking-wider">Genuine Handloom</h4>
                    <p className="text-xs text-neutral-500">Sourced directly from authentic Indian weavers.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#c5a85c] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-neutral-950 dark:text-white text-xs uppercase tracking-wider">Custom Tailoring</h4>
                    <p className="text-xs text-neutral-500">Boutique master tailoring to fit you flawlessly.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex">
                <Link
                  href="/about"
                  className="inline-flex items-center font-black text-[10px] tracking-widest text-[#c5a85c] hover:text-[#a98d43] uppercase gap-2 group border-b-2 border-[#c5a85c] pb-1 transition-all"
                >
                  <span>Experience our full story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED CATEGORIES SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="categories">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-[#c5a85c] text-[10px] font-black font-mono tracking-[0.25em] uppercase">THE IMPERIAL SELECTIONS</p>
          <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tighter text-neutral-950 dark:text-white uppercase leading-none">
            Signature Wear Categories
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-tight">
            Carefully curated wardrobes styled specifically for the citizens of Dadri, ready to elevate every celebration, meeting, and casual outing.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category) => (
            <div 
              key={category.id}
              className="group bg-white dark:bg-[#111111] rounded-none border border-neutral-200 dark:border-white/10 overflow-hidden shadow-none flex flex-col justify-between hover:border-neutral-800 dark:hover:border-white/40 transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 bg-white text-black text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-none">
                  {category.tag}
                </span>
              </div>
              <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-neutral-950 dark:text-white">
                    {category.name}
                  </h3>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                    {category.desc}
                  </p>
                </div>
                <div className="pt-4 mt-auto border-t border-neutral-100 dark:border-white/5">
                  <Link
                    href={`/collections?category=${category.id}`}
                    className="text-[10px] font-bold text-[#c5a85c] hover:text-[#9e833e] uppercase flex items-center gap-1 group/btn tracking-widest"
                  >
                    <span>Browse Collection</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS & COLLECTION SHOWCASE */}
      <section className="py-20 bg-neutral-900 text-white relative" id="collection-showcase">
        {/* Visual background details */}
        <div className="absolute inset-0 z-0 bg-radial-gradient from-neutral-900 via-black to-black opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-4">
            <div className="space-y-4">
              <p className="text-[#c5a85c] text-xs font-bold font-mono tracking-widest uppercase">ROYAL PIECES</p>
              <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight uppercase text-white">
                Featured Showroom Highlights
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm max-w-xl">
                Take an exclusive virtual glance at some of our premium, top-selling designs in the heart of Dadri. Visit our store to find your perfect fit.
              </p>
            </div>
            
            <Link
              href="/collections"
              className="bg-[#c5a85c] hover:bg-[#b09348] text-neutral-950 px-6 py-3 rounded-none font-black text-xs tracking-widest uppercase duration-200 transition-colors flex items-center gap-2"
              id="view-all-collections"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Full Outfit Portal</span>
            </Link>
          </div>

          {/* Product showcase list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHOWCASE_PRODUCTS.map((prod, index) => (
              <div 
                key={index}
                className="bg-zinc-950 border border-white/10 rounded-none overflow-hidden shadow-none group flex flex-col justify-between"
              >
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-white text-black text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-none">
                    {prod.tag}
                  </span>
                </div>
                
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono font-bold">
                        {prod.category}
                      </span>
                      <div className="flex items-center gap-0.5">
                        <Star className="w-3 h-3 fill-[#c5a85c] text-[#c5a85c]" />
                        <span className="text-xs text-neutral-300 font-semibold">{prod.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <h3 className="text-white font-display font-black text-lg uppercase tracking-tight line-clamp-1">{prod.name}</h3>
                    <p className="text-[#c5a85c] text-lg font-black font-mono tracking-tight">{prod.price}</p>
                  </div>

                  <a
                    href={`https://wa.me/919999988888?text=${getWhatsAppMessage(prod.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-zinc-900 border border-white/10 hover:border-white hover:bg-zinc-800 text-[10px] text-zinc-200 hover:text-white font-black uppercase tracking-widest rounded-none text-center flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#25d366] text-[#25d366]" />
                    <span>WhatsApp Stock</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a] border-b border-neutral-200 dark:border-white/5 relative" id="why-choose-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="text-[#c5a85c] text-[10px] font-black font-mono tracking-[0.25em] uppercase">THE EMPIRE ADVANTAGE</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tighter text-neutral-950 dark:text-white uppercase leading-none">
              Why Dadri Shops at Empire
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm uppercase tracking-tight">
              We stand apart through exceptional core values that define our customer commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-none bg-neutral-50 dark:bg-[#111111] border border-neutral-250 dark:border-white/10 space-y-4 hover:border-neutral-950 dark:hover:border-white/40 transition-colors">
              <div className="w-10 h-10 bg-[#c5a85c]/10 rounded-none flex items-center justify-center text-[#c5a85c]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-lg uppercase tracking-tight text-neutral-950 dark:text-white">Boutique Quality</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                We select each bundle of cloth with supreme care. Our threads are tested for color fading, structural durability, and high luxury texture.
              </p>
            </div>

            <div className="p-8 rounded-none bg-neutral-50 dark:bg-[#111111] border border-neutral-250 dark:border-white/10 space-y-4 hover:border-neutral-950 dark:hover:border-white/40 transition-colors">
              <div className="w-10 h-10 bg-[#c5a85c]/10 rounded-none flex items-center justify-center text-[#c5a85c]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-lg uppercase tracking-tight text-neutral-950 dark:text-white">Latest Fashion Trends</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                We refresh our showroom styles twice every month to ensure that you are staying ahead of the current fashion curve.
              </p>
            </div>

            <div className="p-8 rounded-none bg-neutral-50 dark:bg-[#111111] border border-neutral-250 dark:border-white/10 space-y-4 hover:border-neutral-950 dark:hover:border-white/40 transition-colors">
              <div className="w-10 h-10 bg-[#c5a85c]/10 rounded-none flex items-center justify-center text-[#c5a85c]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-lg uppercase tracking-tight text-neutral-950 dark:text-white">Affordable Local Pricing</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                By purchasing in massive wholesale volumes from textiles capitals, we skip standard agency markups to pass down profits directory to Dadri.
              </p>
            </div>

            <div className="p-8 rounded-none bg-neutral-50 dark:bg-[#111111] border border-neutral-250 dark:border-white/10 space-y-4 hover:border-neutral-950 dark:hover:border-white/40 transition-colors">
              <div className="w-10 h-10 bg-[#c5a85c]/10 rounded-none flex items-center justify-center text-[#c5a85c]">
                <Grid className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-lg uppercase tracking-tight text-neutral-950 dark:text-white">Unbounded Variety</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                Whether you prefer heavy classic Sherwanis or featherlight premium linen shirts, we catalog over 1,500 distinct designer styles.
              </p>
            </div>

            <div className="p-8 rounded-none bg-neutral-50 dark:bg-[#111111] border border-neutral-250 dark:border-white/10 space-y-4 hover:border-neutral-950 dark:hover:border-white/40 transition-colors">
              <div className="w-10 h-10 bg-[#c5a85c]/10 rounded-none flex items-center justify-center text-[#c5a85c]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-lg uppercase tracking-tight text-neutral-950 dark:text-white">Trusted Local Store</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                Managed in-house by Vipin Baisla, supporting community gatherings, local employment, and traditional service values in Gautam Buddha Nagar.
              </p>
            </div>

            <div className="p-8 rounded-none bg-neutral-50 dark:bg-[#111111] border border-neutral-250 dark:border-white/10 space-y-4 hover:border-neutral-950 dark:hover:border-white/40 transition-colors">
              <div className="w-10 h-10 bg-[#c5a85c]/10 rounded-none flex items-center justify-center text-[#c5a85c]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-display font-black text-lg uppercase tracking-tight text-neutral-950 dark:text-white">Customer Satisfaction</h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
                Our staff will patiently help you search, customize, try on, and alter clothes. Enjoy traditional tea or chai while shopping!
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS */}
      <section className="py-20 bg-neutral-50 dark:bg-[#0c0c0c] relative" id="reviews-segment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="text-[#c5a85c] text-[10px] font-black font-mono tracking-[0.25em] uppercase">TESTIMONIALS</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tighter text-neutral-950 dark:text-white uppercase leading-none animate-reveal">
              Voices of our Community
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-tight">
              We take great pride in our local reputation. Read reviews from real buyers in Dadri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev, index) => (
              <div 
                key={index}
                className="p-8 rounded-none bg-white dark:bg-[#111111] border border-neutral-200 dark:border-white/10 shadow-none space-y-4 hover:border-neutral-800 dark:hover:border-white/40 transition-colors"
              >
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c5a85c] text-[#c5a85c]" />
                  ))}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm italic leading-relaxed">
                  &ldquo;{rev.review}&rdquo;
                </p>
                <div className="pt-2 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-neutral-900 dark:text-white text-sm">{rev.name}</h4>
                    <p className="text-[10px] text-neutral-400 font-mono tracking-widest uppercase">{rev.role}</p>
                  </div>
                  <span className="text-[10px] bg-neutral-100 dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 font-mono px-2 py-1 rounded">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-[#c5a85c] hover:text-[#a5883a] uppercase border-b-2 border-[#c5a85c] pb-1 transition-all"
            >
              <span>View all 500+ client reviews</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 7. HIGH CONVERSION SEO LOCAL FAQ SECTION */}
      <section className="py-20 bg-white dark:bg-[#0a0a0a]" id="faq-preview">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 space-y-4">
            <p className="text-[#c5a85c] text-[10px] font-black font-mono tracking-[0.25em] uppercase">FAQ REFERENCE</p>
            <h2 className="text-4xl sm:text-5xl font-display font-black tracking-tighter text-neutral-950 dark:text-white uppercase leading-none">
              Shopping Questions Answered
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-xs uppercase tracking-tight">
              Essential answers regarding product customization, collections, store timings, and our Dadri, Uttar Pradesh boutique location.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => {
              const active = activeFAQ === i;
              return (
                <div 
                  key={i}
                  className="border border-neutral-200 dark:border-white/10 rounded-none overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(i)}
                    className="w-full p-5 flex items-center justify-between text-left font-display font-black text-xs uppercase tracking-wider text-neutral-950 dark:text-neutral-150 hover:bg-neutral-50 dark:hover:bg-zinc-900"
                    aria-expanded={active}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#c5a85c] transition-transform duration-300 ${active ? 'rotate-180' : ''}`} />
                  </button>
                  {active && (
                    <div className="p-5 bg-neutral-50/60 dark:bg-neutral-950/40 text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed border-t border-neutral-100 dark:border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-[#c5a85c] hover:text-[#9c7f35] uppercase border-b-2 border-[#c5a85c] pb-1 transition-all"
            >
              <span>Examine full FAQ directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. HIGH ENERGY CALL-TO-ACTION SECTION */}
      <section className="bg-[#0a0a0a] border-t border-white/10 relative py-20 text-center" id="cta-action">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
            alt="Royal fabrics high rendering banner"
            fill
            className="object-cover opacity-15 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/85 to-[#0a0a0a]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="w-16 h-16 bg-[#c5a85c]/10 border border-[#c5a85c]/30 rounded-full flex items-center justify-center mx-auto mb-4 text-[#c5a85c]">
            <ShoppingBag className="w-6 h-6 animate-bounce" />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black uppercase text-white tracking-tighter leading-none italic">
            EMPIRE<br />
            <span className="outline-text block">CLOTHING HUB</span>
          </h2>

          <p className="text-neutral-300 text-xs uppercase tracking-wider leading-relaxed max-w-2xl mx-auto">
            Visit **Empire Clothing Hub** at Railway Road, Dadri, Uttar Pradesh. Our boutique showcases the trendiest casuals, designer handloom ethnic wearables, and customizable fits for the entire family under the premium vision of Vipin Baisla.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              id="cta-whatsapp-btn"
              href="https://wa.me/919999988888"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 text-xs font-black uppercase tracking-widest rounded-none transition-all hover:bg-[#20ba56] w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 fill-white inline mr-2" />
              <span>WhatsApp Query</span>
            </a>

            <a
              id="cta-call-btn"
              href="tel:+919999988888"
              className="bg-transparent border border-white/20 hover:border-white text-white px-8 py-4 text-xs font-black uppercase tracking-widest rounded-none transition-all w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 inline mr-2 text-[#c5a85c]" />
              <span>Call +91 99999 88888</span>
            </a>
          </div>

          <div className="pt-6 font-mono text-[9px] text-neutral-500 tracking-widest uppercase">
            ESTABLISHED IN INDIA • SHIPPED DIRECTLY TO YOUR DOORSTEP ON INQUIRY
          </div>
        </div>
      </section>

    </div>
  );
}
