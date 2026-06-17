'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/theme-provider';
import Logo from '@/components/logo';
import { Menu, X, Phone, MessageCircle, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Collections', href: '/collections' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  // Pre-filled WhatsApp message detail for local customers
  const defaultWhatsAppMsg = encodeURIComponent(
    'Hello Empire Clothing Hub! I visited your website and would like to ask about item availability.'
  );

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-[#0a0a0a] shadow-none border-b border-neutral-200 dark:border-white/10 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Brand Logo Wrapper */}
          <Link href="/" aria-label="Empire Clothing Hub Home" className="flex-shrink-0">
            <Logo showTagline={!scrolled} />
          </Link>
 
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-3 ml-6" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-none text-[10px] md:text-xs uppercase tracking-[0.2em] font-black transition-all duration-205 ${
                    isActive
                      ? 'text-[#c5a85c] border-b-2 border-[#c5a85c]'
                      : 'text-neutral-700 dark:text-zinc-400 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
 
          {/* Action Tools & CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              id="desktop-theme-toggle"
              onClick={toggleTheme}
              className="p-2 rounded-full border border-neutral-300 dark:border-white/10 hover:bg-neutral-105 dark:hover:bg-zinc-900 transition-colors text-neutral-800 dark:text-zinc-300"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
 
            {/* Calling trigger */}
            <a
              id="desktop-call-btn"
              href="tel:+919999988888"
              className="px-6 py-2 bg-[#0a0a0a] dark:bg-white text-white dark:text-black text-[10px] font-extrabold uppercase tracking-widest rounded-full hover:bg-zinc-900 dark:hover:bg-zinc-200 transition-all flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
 
            {/* WhatsApp trigger */}
            <a
              id="desktop-whatsapp-btn"
              href={`https://wa.me/919999988888?text=${defaultWhatsAppMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-2 text-[10px] font-extrabold uppercase tracking-widest rounded-full hover:bg-[#20ba56] transition-all flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Tools (Hamburger & Theme Toggle) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-theme-toggle"
              onClick={toggleTheme}
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors text-neutral-600 dark:text-neutral-300"
              aria-label={`Toggle theme`}
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Mobile menu triggers */}
            <button
              id="hamburger-trigger"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900"
              aria-expanded={isOpen}
              aria-label="Open primary menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (with AnimatePresence for transitions) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Full-height Drawer content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-[#0d0d0d] z-50 shadow-2xl p-6 flex flex-col justify-between lg:hidden border-l border-neutral-200 dark:border-neutral-800"
              id="mobile-drawer"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-neutral-800">
                  <Logo showTagline={true} />
                  <button
                    id="close-drawer-btn"
                    onClick={closeMenu}
                    className="p-2 rounded-md text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col space-y-3" aria-label="Mobile Navigation Drawer">
                  {NAV_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={closeMenu}
                        className={`px-4 py-3 rounded-lg text-base font-semibold tracking-wide transition-colors ${
                          isActive
                            ? 'bg-[#c5a85c]/10 text-[#c5a85c]'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Drawer CTAs */}
              <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
                <a
                  id="mobile-call-btn"
                  href="tel:+919999988888"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#c5a85c]" />
                  <span>Call Us Now</span>
                </a>

                <a
                  id="mobile-whatsapp-btn"
                  href={`https://wa.me/919999988888?text=${defaultWhatsAppMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-xl font-bold transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp Chat</span>
                </a>

                <p className="text-[10px] text-center text-neutral-500 font-mono mt-2">
                  LOCATED IN DADRI, UP • OPEN 10:00 AM - 9:30 PM
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
