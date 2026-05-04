'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navbar */}
      <nav className="fixed top-0 w-full z-[140] bg-white/40 backdrop-blur-xl border-b border-white/20 h-20 md:h-24">
        <div className="flex justify-between items-center h-full w-full px-6 md:px-12 max-w-[1920px] mx-auto text-neutral-900 font-['Noto_Serif'] tracking-tight">
          <Link href="/" className="flex flex-col group relative z-[150]">
            <span className="text-[15px] md:text-[18px] font-bold uppercase tracking-[0.2em] text-neutral-900 leading-none">Good Luck</span>
            <span className="text-[10px] md:text-[11px] font-label-caps uppercase tracking-[0.3em] text-neutral-500 mt-1">Frame and Art</span>
          </Link>
          
          <div className="flex items-center space-x-3 md:space-x-8 relative z-[150]">
            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-10 mr-10">
              {pathname !== '/' && (
                <Link href="/" className="text-[11px] font-label-caps uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">Gallery</Link>
              )}
              <Link href="/catalog" className="text-[11px] font-label-caps uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">Catalog</Link>
              <Link href="/bespoke" className="text-[11px] font-label-caps uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">Bespoke</Link>
              <Link href="/services" className="text-[11px] font-label-caps uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">Services</Link>
              <Link href="/atelier" className="text-[11px] font-label-caps uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">Atelier</Link>
            </div>

            <button className="hover:opacity-70 transition-opacity duration-300 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <rect x="0.5" y="0.5" width="23" height="23" stroke="currentColor" strokeWidth="1"/>
                <text x="50%" y="65%" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" fontFamily="Noto Serif">GL</text>
              </svg>
            </button>
            
            <button className="hidden sm:block hover:opacity-70 transition-opacity duration-300">
              <span className="material-symbols-outlined text-[20px] md:text-[22px]">person</span>
            </button>
            
            <button 
              className="lg:hidden p-2 -mr-2 relative z-[160] flex flex-col justify-center items-center gap-1.5 w-10 h-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <div className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <div className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out Menu Overlay (Right Side) */}
      <div 
        className={`fixed inset-0 z-[120] transition-opacity duration-500 lg:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-neutral-900/20 backdrop-blur-sm" />
      </div>

      <aside className={`
        fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-white/70 backdrop-blur-2xl z-[130] shadow-2xl transition-transform duration-500 ease-out lg:hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-8 pt-24">
          <div className="flex flex-col space-y-6">
            {pathname !== '/' && (
              <Link href="/" className="text-3xl font-display-lg text-primary hover:italic transition-all" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            )}
            <Link href="/catalog" className="text-3xl font-display-lg text-primary hover:italic transition-all" onClick={() => setIsMenuOpen(false)}>Catalog</Link>
            <Link href="/bespoke" className="text-3xl font-display-lg text-primary hover:italic transition-all" onClick={() => setIsMenuOpen(false)}>Bespoke</Link>
            <Link href="/services" className="text-3xl font-display-lg text-primary hover:italic transition-all" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="/atelier" className="text-3xl font-display-lg text-primary hover:italic transition-all" onClick={() => setIsMenuOpen(false)}>Atelier</Link>
          </div>
          
          <div className="mt-auto space-y-10 pt-10 border-t border-neutral-100">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <p className="font-label-caps text-[10px] uppercase tracking-[0.3em] text-secondary mb-4">Our Atelier</p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Shop no 6, Trinity Housing Society,<br/>Powai, Mumbai, 400076
                </p>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-neutral-400">instagram</span>
                <span className="material-symbols-outlined text-neutral-400">mail</span>
                <span className="material-symbols-outlined text-neutral-400">call</span>
              </div>
            </div>
            
            <button className="w-full bg-primary text-white py-4 font-label-caps text-[11px] tracking-widest uppercase">
              Account Login
            </button>
          </div>
        </div>
      </aside>

    </>
  );
}
