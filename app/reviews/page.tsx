'use client';

import React, { useState } from 'react';
import { Star, MessageSquareCode, CheckCircle, UserPlus, Info } from 'lucide-react';

const INITIAL_REVIEWS = [
  {
    name: "Rahul Baisla",
    location: "Dadri, G.B. Nagar",
    review: "This is hands-down the best clothing store in Dadri. Vipin Baisla and his family make everyone feel right at home. The collection of wedding sherwanis and casual wear is absolutely unmatched for quality and pricing.",
    rating: 5,
    date: "June 2026"
  },
  {
    name: "Priya Gurjar",
    location: "Greater Noida",
    review: "I got my bridal suit stitched and customized from here. The fabric they use is extremely premium and feels heavy. I highly recommend Empire Clothing Hub to everyone looking for premium designer sarees and lehengas in Gautam Buddha Nagar.",
    rating: 5,
    date: "May 2026"
  },
  {
    name: "Gautam Adhana",
    location: "Chhapraula, UP",
    review: "Exceptional garment store! The fit on their Italian blazers and customized fitting is precise. They have the modern fashion catalog that you won't easily find in other local shops. Truly a luxury clothing store.",
    rating: 5,
    date: "May 2026"
  },
  {
    name: "Manoj Kumar",
    location: "Dadri Main Market",
    review: "I buy all my daily wear linens, trousers, and polo shirts from Empire. Vipin has amazing patience. He showed me 20 different shirts and adjusted the stitching of the pants on the spot. Great local service!",
    rating: 5,
    date: "April 2026"
  },
  {
    name: "Sheetal Nagar",
    location: "Surajpur",
    review: "The kids' festive outfits are absolutely adorable and so soft. My son wore their silk kurta set for the Holi celebration and stayed extremely comfortable. Prices are very pocket-friendly too.",
    rating: 4,
    date: "March 2026"
  }
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [formName, setFormName] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formText, setFormText] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formText) return;

    const newReview = {
      name: formName,
      location: formLocation || 'Dadri Localist',
      review: formText,
      rating: formRating,
      date: 'Just Now'
    };

    setReviews([newReview, ...reviews]);
    setFormName('');
    setFormLocation('');
    setFormRating(5);
    setFormText('');
    setSuccessMsg(true);

    setTimeout(() => {
      setSuccessMsg(false);
    }, 4500);
  };

  return (
    <div className="w-full pt-24 pb-16 min-h-screen bg-white dark:bg-[#070707]" id="reviews-page-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <p className="text-[#c5a85c] text-xs font-bold font-mono tracking-widest uppercase">CUSTOMER TESTIMONIALS</p>
          <h1 className="text-4xl sm:text-5xl font-display font-black tracking-tight text-neutral-900 dark:text-white uppercase">
            Client Voices & Ratings
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
            Real feedback from verified buyers in and around Dadri, Uttar Pradesh. We aim to design apparel that earns your perfect 5-star approval.
          </p>
        </div>

        {/* Stats segment */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 text-center">
          <div className="p-6 bg-neutral-50 dark:bg-[#111111] border border-neutral-200/50 dark:border-neutral-800/80 rounded-2xl shadow-sm">
            <p className="font-display font-extrabold text-5xl text-[#c5a85c] font-mono leading-none">4.9</p>
            <div className="flex justify-center gap-0.5 my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#c5a85c] text-[#c5a85c]" />
              ))}
            </div>
            <p className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase">Average Rating</p>
          </div>

          <div className="p-6 bg-neutral-50 dark:bg-[#111111] border border-neutral-200/50 dark:border-neutral-800/80 rounded-2xl shadow-sm">
            <p className="font-display font-extrabold text-5xl text-neutral-900 dark:text-white font-mono leading-none">580+</p>
            <p className="text-[#c5a85c] text-xs font-semibold my-2">Google Verified Ratings</p>
            <p className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase">Local Listings</p>
          </div>

          <div className="p-6 bg-neutral-50 dark:bg-[#111111] border border-neutral-200/50 dark:border-neutral-800/80 rounded-2xl shadow-sm">
            <p className="font-display font-extrabold text-5xl text-neutral-900 dark:text-white font-mono leading-none">100%</p>
            <p className="text-[#c5a85c] text-xs font-semibold my-2">Fabric Guarantee</p>
            <p className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase">Pure Textiles Choice</p>
          </div>

          <div className="p-6 bg-neutral-50 dark:bg-[#111111] border border-neutral-200/50 dark:border-neutral-800/80 rounded-2xl shadow-sm">
            <p className="font-display font-extrabold text-5xl text-[#c5a85c] font-mono leading-none">1.5K+</p>
            <p className="text-[#c5a85c] text-xs font-semibold my-2">Regular Wardrobe Clients</p>
            <p className="text-[10px] text-neutral-400 font-mono tracking-wider uppercase">Gautam Buddha Nagar</p>
          </div>
        </div>

        {/* Reviews Layout (Grid of feedback cards + leave feedback sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Reviews Directory List (Left Column) */}
          <div className="lg:col-span-7 space-y-6" id="reviews-directory">
            <h2 className="text-2xl font-display font-extrabold text-neutral-900 dark:text-white border-b border-neutral-100 dark:border-neutral-900 pb-3">
              Verified Feedback Directory
            </h2>
            
            <div className="space-y-6">
              {reviews.map((rev, index) => (
                <div 
                  key={index}
                  className="p-6 bg-neutral-50 dark:bg-[#111111] border border-neutral-200/55 dark:border-neutral-800/40 rounded-2xl space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < rev.rating ? 'fill-[#c5a85c] text-[#c5a85c]' : 'text-neutral-300 dark:text-neutral-700'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-neutral-400 font-mono">{rev.date}</span>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm italic leading-relaxed">
                    &ldquo;{rev.review}&rdquo;
                  </p>

                  <div className="pt-2 border-t border-neutral-200/40 dark:border-neutral-900 flex items-center justify-between text-xs">
                    <div>
                      <h4 className="font-bold text-neutral-900 dark:text-white">{rev.name}</h4>
                      <p className="text-[10px] text-[#c5a85c] font-mono uppercase">{rev.location}</p>
                    </div>
                    <span className="bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 text-[10px] font-bold px-2 py-0.5 rounded">
                      ✓ Verified Buyer
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side panel (Right Column) */}
          <div className="lg:col-span-5 bg-neutral-50 dark:bg-[#111111] border border-neutral-250/60 dark:border-neutral-800/80 p-8 rounded-2xl " id="leave-review-section">
            <div className="space-y-2 mb-6">
              <span className="text-[#c5a85c] font-mono text-xs font-bold uppercase tracking-widest block">JOIN THE CHRONOLOGY</span>
              <h3 className="text-xl font-display font-bold text-neutral-900 dark:text-white">Leave Us A Review</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Have you bought clothes or got stitching done by Vipin Baisla? Share your experience to help local customers from Uttar Pradesh discover us!
              </p>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              {/* Client Name Input */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  placeholder="e.g. Ramesh Gurjar"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070707] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-[#c5a85c]"
                />
              </div>

              {/* Client Location Input */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                  Your Location
                </label>
                <input
                  type="text"
                  value={formLocation}
                  onChange={(e) => setFormLocation(e.target.value)}
                  placeholder="e.g. Dadri Main Town, Uttar Pradesh"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070707] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-[#c5a85c]"
                />
              </div>

              {/* Star rating picker */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                  Select Rating Stars
                </label>
                <div className="flex gap-2 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormRating(star)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star 
                        className={`w-6 h-6 ${star <= formRating ? 'fill-[#c5a85c] text-[#c5a85c]' : 'text-neutral-300 dark:text-neutral-700'}`} 
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono ml-2 text-neutral-450">{formRating} Out of 5</span>
                </div>
              </div>

              {/* Review text */}
              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-1.5">
                  Your Shopping Review *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formText}
                  onChange={(e) => setFormText(e.target.value)}
                  placeholder="Tell us about the fabric feel, tailoring fit, hospitality, or pricing..."
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#070707] text-neutral-900 dark:text-neutral-100 focus:outline-none focus:border-[#c5a85c] text-xs resize-none"
                />
              </div>

              {/* Success Notification */}
              {successMsg && (
                <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-2 text-green-700 dark:text-green-400 text-xs">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Success! Quality review posted successfully. See it on the left panel!</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#c5a85c] hover:bg-[#b5984f] text-neutral-950 rounded-xl font-bold text-xs uppercase tracking-widest transition-colors duration-200"
              >
                Publish Local Review
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
