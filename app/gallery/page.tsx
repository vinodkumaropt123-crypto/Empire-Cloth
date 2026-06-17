'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Phone, MessageCircle, Sparkles, Filter, Grid } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Empire Showroom Front View",
    category: "store",
    desc: "Our beautiful flagship store entrance situated on Railway Road, Dadri.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Men's Luxury Suits Tier",
    category: "mens",
    desc: "Immaculate custom Italian blazers, suits, and premium tuxedos display.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Aromatic Silk Saree Counter",
    category: "womens",
    desc: "A wide spectrum of premium handcrafted Banarasi, Kanjeevaram and Chanderi sarees.",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Indian Wedding Celebration Sherwani",
    category: "celebration",
    desc: "Bespoke gold-woven wedding sherwanis displaying handcrafted floral motifs.",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Premium Fabric Roll Section",
    category: "store",
    desc: "Durable and soft textiles curated directly from raw material centers.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Royal Lehengas & Gowns",
    category: "womens",
    desc: "Dazzling hand-embroidered collection ideal for brides and family functions.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Tailoring & Fitting Cabin",
    category: "store",
    desc: "Our high-precision master tailors adjust dimensions to give a flawless silhouette.",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Smart Festive Kids Outfits",
    category: "celebration",
    desc: "Lightweight, baby-safe designer kids and toddlers ensembles.",
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=800&q=80"
  }
];

const FILTERS = [
  { name: "All Showcase", value: "all" },
  { name: "Store Exterior & Interior", value: "store" },
  { name: "Men's Garments", value: "mens" },
  { name: "Women's Royal Wear", value: "womens" },
  { name: "Celebrations / Festive", value: "celebration" }
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
    }
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <div className="w-full pt-24 pb-16 min-h-screen bg-white dark:bg-[#070707]" id="gallery-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Intro Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-[#c5a85c] text-xs font-bold font-mono tracking-widest uppercase">THE VISUAL SHOWROOM</p>
          <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-neutral-900 dark:text-white uppercase">
            Empire Photo Gallery
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
            Witness the actual visual elements from our physical boutique in Dadri. Explore design shelves, premium textures, and lookbooks of our premium collections.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12" id="gallery-filters">
          <Filter className="w-4 h-4 text-[#c5a85c] hidden sm:block" />
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-colors ${
                activeFilter === f.value
                  ? "bg-[#c5a85c] text-neutral-950"
                  : "bg-neutral-50 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800/80 hover:border-[#c5a85c]/40"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid with Layout Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          id="gallery-grid"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group bg-neutral-50 dark:bg-[#111111] rounded-xl overflow-hidden border border-neutral-200/50 dark:border-neutral-850 shadow-sm cursor-pointer hover:border-[#c5a85c]/20 transition-all"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 duration-500 transition-all"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover Mask */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="w-10 h-10 bg-[#c5a85c] text-neutral-950 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300 font-bold shadow-lg">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h3 className="font-display font-bold text-sm text-neutral-900 dark:text-neutral-200 truncate">{item.title}</h3>
                <p className="text-[11px] text-neutral-500 leading-tight line-clamp-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal frame */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-8"
              id="gallery-lightbox"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 bg-neutral-900 border border-neutral-800 text-white rounded-full hover:bg-neutral-850"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox centerbox */}
              <div 
                className="relative max-w-4xl w-full flex flex-col md:flex-row bg-[#080808] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Image panel */}
                <div className="relative h-[60vh] md:h-[70vh] md:w-3/5 lg:w-2/3 overflow-hidden">
                  <Image
                    src={filteredItems[lightboxIndex].image}
                    alt={filteredItems[lightboxIndex].title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Prev/Next keys */}
                  <button
                    onClick={showPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black font-bold border border-white/10"
                    aria-label="Previous photograph"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={showNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 text-white rounded-full flex items-center justify-center hover:bg-black font-bold border border-white/10"
                    aria-label="Next photograph"
                  >
                    &rarr;
                  </button>
                </div>

                {/* Info & CTA details */}
                <div className="p-8 md:w-2/5 lg:w-1/3 flex flex-col justify-between text-left space-y-6">
                  <div className="space-y-4">
                    <span className="text-[10px] text-[#c5a85c] font-mono font-bold uppercase tracking-widest bg-[#c5a85c]/10 px-3 py-1 rounded">
                      {filteredItems[lightboxIndex].category} collection
                    </span>
                    <h3 className="text-white font-display font-black text-xl leading-tight">
                      {filteredItems[lightboxIndex].title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {filteredItems[lightboxIndex].desc}
                    </p>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-neutral-900">
                    <a
                      href={`https://wa.me/919999988888?text=${encodeURIComponent(`Hello Vipin! I saw a picture of ${filteredItems[lightboxIndex].title} in your gallery. Can you share options or prices?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 bg-[#25D366] hover:bg-[#20ba56] text-white text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>WhatsApp Inquiry</span>
                    </a>

                    <a
                      href="tel:+919999988888"
                      className="w-full py-3 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 hover:border-[#c5a85c] hover:text-[#c5a85c] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#c5a85c]" />
                      <span>Call Showroom</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
