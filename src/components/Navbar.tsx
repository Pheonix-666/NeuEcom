'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100">
      <div className="flex justify-between items-center w-full px-6 md:px-12 h-20 md:h-24 max-w-[1920px] mx-auto text-neutral-900 font-['Noto_Serif'] tracking-tight">
        <Link href="/" className="text-base md:text-lg font-bold uppercase tracking-[0.2em] text-neutral-900 leading-tight max-w-[200px] md:max-w-none">
          Good Luck Frame and Art
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          <Link href="/" className="text-[12px] font-label-caps uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">Gallery</Link>
          <Link href="/catalog" className="text-[12px] font-label-caps uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">Catalog</Link>
          <Link href="#" className="text-[12px] font-label-caps uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">Bespoke</Link>
          <Link href="#" className="text-[12px] font-label-caps uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">Services</Link>
          <Link href="#" className="text-[12px] font-label-caps uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">Atelier</Link>
        </div>

        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="hover:opacity-70 transition-opacity duration-300">
            <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
          </button>
          <button className="hidden sm:block hover:opacity-70 transition-opacity duration-300">
            <span className="material-symbols-outlined text-[22px]">person</span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 -mr-2 hover:opacity-70 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-[28px]">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 animate-fade-in">
          <div className="flex flex-col p-8 space-y-8">
            <Link 
              href="/" 
              className="text-2xl font-display-lg text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/catalog" 
              className="text-2xl font-display-lg text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Catalog
            </Link>
            <Link 
              href="#" 
              className="text-2xl font-display-lg text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Bespoke
            </Link>
            <Link 
              href="#" 
              className="text-2xl font-display-lg text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#" 
              className="text-2xl font-display-lg text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Atelier
            </Link>
            
            <div className="pt-8 border-t border-neutral-100 flex gap-6">
               <span className="material-symbols-outlined">person</span>
               <span className="font-label-caps uppercase tracking-widest text-sm">Account</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
