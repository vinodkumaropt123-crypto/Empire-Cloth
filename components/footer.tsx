'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/logo';
import { Phone, Mail, MapPin, Clock, ArrowRight, Instagram, Facebook, Share2 } from 'lucide-react';

const QUICK_LINKS = [
  { name: 'Home Store', href: '/' },
  { name: 'About Store Story', href: '/about' },
  { name: 'Browse Collections', href: '/collections' },
  { name: 'Photo Gallery', href: '/gallery' },
  { name: 'Client Testimonials', href: '/reviews' },
  { name: 'SEO Help / FAQs', href: '/faq' },
  { name: 'Contact & Support', href: '/contact' },
];

const LEGAL_LINKS = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms' },
];

const LOCAL_SEO_KEYWORDS = [
  { name: 'Clothing Store in Dadri', href: '/' },
  { name: 'Best Clothing Store in Dadri', href: '/about' },
  { name: 'Men\'s Clothing Store in Dadri', href: '/collections?category=mens' },
  { name: 'Women\'s Clothing Store in Dadri', href: '/collections?category=womens' },
  { name: 'Kids Clothing Store in Dadri', href: '/collections?category=kids' },
  { name: 'Readymade Garments Store in Dadri', href: '/collections' },
  { name: 'Fashion Store in Dadri', href: '/' },
  { name: 'Best Fashion Shop Near Me', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-footer" 
      className="bg-neutral-950 text-neutral-400 border-t border-neutral-800 pt-16 pb-8 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Segment: Brand & Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: About Brand */}
          <div className="space-y-4">
            <Link href="/">
              <Logo className="mb-2" showTagline={true} />
            </Link>
            <p className="text-sm line-clamp-4 text-neutral-400 mt-4 leading-relaxed">
              Empire Clothing Hub is Dadri&apos;s leading premium fashion retailer, curated by Vipin Baisla. We offer high-quality, modern, and traditional apparel for Men, Women, and Kids.
            </p>
            {/* Social Icon Row */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://instagram.com/empire_clothing_hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#c5a85c] hover:bg-neutral-850 flex items-center justify-center text-neutral-400 hover:text-white transition-all transition-colors duration-200"
                aria-label="Empire Instagram Page"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com/empireclothinghub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#c5a85c] hover:bg-neutral-850 flex items-center justify-center text-neutral-400 hover:text-white transition-all transition-colors duration-200"
                aria-label="Empire Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="t.me/empireclothinghub" 
                target="_blank" 
                className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 hover:border-[#c5a85c] hover:bg-neutral-850 flex items-center justify-center text-neutral-400 hover:text-white transition-all transition-colors duration-200"
                aria-label="Share Empire Store Link"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm tracking-widest uppercase mb-5 border-l-2 border-[#c5a85c] pl-3">
              Explore Store
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors duration-200 flex items-center group gap-1"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-700 group-hover:text-[#c5a85c] group-hover:translate-x-1 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm tracking-widest uppercase mb-5 border-l-2 border-[#c5a85c] pl-3">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#c5a85c] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Railway Road, Near Baisla Chowk,<br />
                  Main Market, Dadri,<br />
                  Gautam Buddha Nagar,<br />
                  Uttar Pradesh - 203207
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c5a85c] flex-shrink-0" />
                <a href="tel:+919999988888" className="hover:text-white transition-colors">
                  +91 99999 88888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c5a85c] flex-shrink-0" />
                <a href="mailto:contact@empireclothinghub.com" className="hover:text-white transition-colors">
                  contact@empireclothinghub.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c5a85c] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">10:00 AM - 9:30 PM</p>
                  <p className="text-xs text-neutral-500">Wednesday to Monday (Tuesday Closed)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Dadri Search Keywords (SEO Boost) */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm tracking-widest uppercase mb-5 border-l-2 border-[#c5a85c] pl-3">
              Dadri Fashion Searches
            </h3>
            <div className="flex flex-wrap gap-2 pt-1">
              {LOCAL_SEO_KEYWORDS.map((keyword) => (
                <Link
                  key={keyword.name}
                  href={keyword.href}
                  className="bg-neutral-900 hover:bg-neutral-850 hover:text-white border border-neutral-800 hover:border-neutral-700 px-2.5 py-1.5 rounded text-xs transition-colors duration-200"
                >
                  {keyword.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-900 my-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Leftside copyrights */}
          <div>
            <p>&copy; {currentYear} Empire Clothing Hub. All Rights Reserved. Unit owned and conceptualized by <span className="text-[#c5a85c] font-medium">Vipin Baisla</span>.</p>
            <p className="text-neutral-600 mt-1">First-class designer boutique & garments retailer in Dadri, UP, India.</p>
          </div>

          {/* Rightside legal links & Map direct pin */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://maps.google.com/?q=Empire+Clothing+Hub+Dadri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#c5a85c] hover:underline flex items-center gap-1 font-semibold"
            >
              <MapPin className="w-3 h-3" />
              <span>Google Maps Direction</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
