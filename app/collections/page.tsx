'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Search, SlidersHorizontal, MessageCircle, Star, Sparkles, CheckCircle, Tag, Phone } from 'lucide-react';

const ALL_PRODUCTS = [
  // Men's Wear
  {
    name: "Royal Golden Wedding Sherwani",
    price: "₹8,499",
    category: "ethnic",
    sub: "Men's Wear",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1610030470200-e1ac10c26880?auto=format&fit=crop&w=500&q=80",
    fabric: "Raw Silk",
    trending: true
  },
  {
    name: "Classic Italian Custom Blue Blazer",
    price: "₹4,999",
    category: "mens",
    sub: "Men's Wear",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80",
    fabric: "Premium Wool Blend",
    trending: true
  },
  {
    name: "Breathable Slim Fit Linen Polos",
    price: "₹1,299",
    category: "casuals",
    sub: "Men's Wear",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=500&q=80",
    fabric: "100% pure linen",
    trending: false
  },
  {
    name: "Premium Denim Indigo Jeans",
    price: "₹2,199",
    category: "mens",
    sub: "Men's Wear",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80",
    fabric: "Stretchy Organic Denim",
    trending: false
  },
  {
    name: "Smart Cotton Indo-Western Set",
    price: "₹3,799",
    category: "ethnic",
    sub: "Men's Wear",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=500&q=80",
    fabric: "Handspun Cotton",
    trending: true
  },
  // Women's Wear
  {
    name: "Rich Embroidered Banarasi silk Saree",
    price: "₹6,299",
    category: "womens",
    sub: "Women's Wear",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80",
    fabric: "Varanasi Silk",
    trending: true
  },
  {
    name: "Royal Georgette Heavily Crafted Lehenga",
    price: "₹12,499",
    category: "ethnic",
    sub: "Women's Wear",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80",
    fabric: "Pure Georgette",
    trending: true
  },
  {
    name: "Casual Pastel Designer Rayon Kurti",
    price: "₹1,499",
    category: "casuals",
    sub: "Women's Wear",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=80",
    fabric: "Soft Liva Rayon",
    trending: false
  },
  {
    name: "A-Line Floral Festival Suits",
    price: "₹3,299",
    category: "womens",
    sub: "Women's Wear",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&w=500&q=80",
    fabric: "Chanderi Blend",
    trending: false
  },
  // Kids' Wear
  {
    name: "Kids Festive Silk Kurta Set",
    price: "₹1,899",
    category: "kids",
    sub: "Kids Wear",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=500&q=80",
    fabric: "Dupion Silk",
    trending: true
  },
  {
    name: "Cotton Smart Print Kids Apparel",
    price: "₹999",
    category: "kids",
    sub: "Kids Wear",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=500&q=80",
    fabric: "Hypoallergenic Cotton",
    trending: false
  },
];

const FILTER_BUTTONS = [
  { name: 'All Collection', value: 'all' },
  { name: 'Men\'s Wear', value: 'mens' },
  { name: 'Women\'s Wear', value: 'womens' },
  { name: 'Kids Wear', value: 'kids' },
  { name: 'Ethnic/Royal', value: 'ethnic' },
  { name: 'Daily Casuals', value: 'casuals' },
];

function CollectionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams ? searchParams.get('category') || 'all' : 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [prevInitialCategory, setPrevInitialCategory] = useState(initialCategory);

  if (initialCategory !== prevInitialCategory) {
    setPrevInitialCategory(initialCategory);
    setActiveCategory(initialCategory);
  }

  // Purely derived filtered products (zero useEffect setState calls!)
  const filteredProducts = ALL_PRODUCTS.filter((prod) => {
    if (activeCategory !== 'all' && prod.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      return (
        prod.name.toLowerCase().includes(query) || 
        prod.fabric.toLowerCase().includes(query) ||
        prod.sub.toLowerCase().includes(query)
      );
    }
    return true;
  });

  const handleWhatsAppInquiry = (prodName: string) => {
    const textMsg = encodeURIComponent(
      `Hello Vipin! I visited Empire Clothing Hub online and would like to check availability and sizing for the "${prodName}". Please guide me.`
    );
    window.open(`https://wa.me/919999988888?text=${textMsg}`, '_blank');
  };

  return (
    <div className="w-full">
      {/* Search & Filtering Segment */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-neutral-50 dark:bg-[#111111] border border-neutral-200 dark:border-white/10 p-6 rounded-none mb-12 shadow-none">
        {/* Search Input */}
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input
            type="text"
            placeholder="Search sherwanis, sarees, cotton jeans..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-none border border-neutral-200 dark:border-white/10 bg-white dark:bg-black text-xs uppercase tracking-wider font-bold text-neutral-800 dark:text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-[#c5a85c] dark:focus:border-[#c5a85c] transition-colors"
          />
        </div>

        {/* Category Sliders */}
        <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-4 lg:pb-0 scrollbar-none">
          <SlidersHorizontal className="w-4 h-4 text-[#c5a85c] flex-shrink-0 hidden md:block" />
          <div className="flex gap-2">
            {FILTER_BUTTONS.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setActiveCategory(btn.value)}
                className={`px-4 py-2 rounded-none text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-colors duration-200 ${
                  activeCategory === btn.value
                    ? 'bg-[#c5a85c] text-neutral-950'
                    : 'bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 hover:border-[#c5a85c]/40'
                }`}
              >
                {btn.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Dynamic Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((prod, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-[#111111] border border-neutral-200 dark:border-white/10 rounded-none overflow-hidden shadow-none group flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-cover group-hover:scale-105 duration-500 transition-transform grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Special Tags Overlay */}
                {prod.trending && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-none shadow-none">
                    Hot Trend
                  </span>
                )}
                <span className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm border border-white/5 px-3 py-1 text-[9px] rounded-none text-neutral-300 font-mono uppercase tracking-widest font-black">
                  {prod.fabric}
                </span>
              </div>

              {/* Specs & Pricing */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] text-[#c5a85c] uppercase font-mono tracking-widest font-black">
                      {prod.sub}
                    </span>
                    <div className="flex items-center gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-[#c5a85c] text-[#c5a85c]" />
                      <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                        {prod.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display font-black text-md uppercase tracking-tight text-neutral-900 dark:text-white line-clamp-2 md:h-12 leading-tight">
                    {prod.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[#c5a85c] font-display font-black text-lg font-mono tracking-tight">
                      {prod.price}
                    </span>
                    <span className="text-neutral-450 text-xs line-through font-mono">
                      {`₹${Math.round(parseInt(prod.price.replace(/[^\d]/g, '')) * 1.35).toLocaleString('en-IN')}`}
                    </span>
                    <span className="text-green-600 text-[10px] font-black py-0.5 px-1.5 bg-green-50 dark:bg-green-950/20 rounded-none uppercase tracking-tight">
                      Save 35%
                    </span>
                  </div>
                </div>

                {/* Direct Action Triggers */}
                <div className="space-y-2 pt-4 border-t border-neutral-100 dark:border-white/5">
                  <button
                    onClick={() => handleWhatsAppInquiry(prod.name)}
                    className="w-full bg-[#25D366] text-white py-3 rounded-none font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-none hover:bg-[#20ba56] transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Check Sizing on WhatsApp</span>
                  </button>

                  <a
                    href="tel:+919999988888"
                    className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 py-3 rounded-none font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:border-[#c5a85c] hover:text-[#c5a85c] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#c5a85c]" />
                    <span>Call Store To Order</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center space-y-4 bg-neutral-50 dark:bg-[#111111] rounded-none border border-dashed border-neutral-200 dark:border-white/10">
          <Tag className="w-12 h-12 text-[#c5a85c] mx-auto animate-bounce" />
          <h3 className="font-display font-black text-xl uppercase text-neutral-800 dark:text-white">No Outfits Match Your Filter</h3>
          <p className="text-neutral-500 text-xs sm:text-xs uppercase tracking-tight max-w-sm mx-auto">
            Try adjusting your search query or choosing another Category. Or contact Vipin Baisla to customize your ideal dress!
          </p>
          <button
            onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
            className="px-6 py-3 bg-[#c5a85c] text-neutral-950 rounded-none font-black text-xs uppercase tracking-widest"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <div className="w-full pt-28 pb-16 min-h-screen bg-white dark:bg-[#0a0a0a]" id="collections-showcase-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-[#c5a85c] text-[10px] font-black font-mono tracking-[0.25em] uppercase">THE LUXURIOUS WARDROBES</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tighter text-neutral-950 dark:text-white uppercase leading-none italic">
            Browse Royal Outfits
          </h1>
          <p className="text-neutral-550 dark:text-neutral-450 text-xs sm:text-sm uppercase tracking-tight leading-relaxed">
            Search under our verified catalog featuring premium readymade garments, traditional wedding ethnic collections, and gorgeous daily casual wear curated here in Dadri.
          </p>
        </div>

        <Suspense fallback={
          <div className="py-20 text-center text-[#c5a85c] font-mono text-sm animate-pulse">
            Loading Empire Outfits Catalogue...
          </div>
        }>
          <CollectionsContent />
        </Suspense>

      </div>
    </div>
  );
}
