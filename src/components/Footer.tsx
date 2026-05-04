import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full mt-20 md:mt-32 bg-white border-t border-neutral-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        
        {/* Brand & Branches */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-primary font-display-lg mb-4">Good Luck Frame and Art</div>
            <p className="font-body-md text-sm leading-relaxed text-on-surface-variant">© 2024 Good Luck Frame and Art. Artisanal framing for fine art collections.</p>
          </div>
          
          <div className="space-y-6 pt-6 border-t border-neutral-100">
            <h6 className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Our Branches</h6>
            
            <div className="space-y-2">
              <p className="font-label-caps text-[9px] text-secondary uppercase tracking-widest opacity-80">Powai Branch</p>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Shop no 6, Trinity Housing Society, opp. Daimand society, near Hira Nandani, BSNL Colony, Powai, Mumbai, Maharashtra 400076
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="font-label-caps text-[9px] text-secondary uppercase tracking-widest opacity-80">Saki Naka Branch</p>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                Shop no 2 D A D'souza compound near comani oil mill natal estate, Chandivali Farm Rd, Saki Naka, Mumbai, Maharashtra 400072
              </p>
            </div>
          </div>
        </div>

        {/* The Atelier */}
        <div className="space-y-6">
          <h6 className="font-label-caps text-[10px] text-primary uppercase tracking-widest">The Atelier</h6>
          <ul className="space-y-4 font-body-md text-sm">
            <li><Link href="/catalog" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Collections</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Our Story</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Custom Framing</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Exhibitions</Link></li>
          </ul>
        </div>

        {/* Support & Connect */}
        <div className="space-y-6">
          <h6 className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Support & Connect</h6>
          <ul className="space-y-4 font-body-md text-sm">
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Shipping & Returns</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Contact Us</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors duration-200">Privacy Policy</Link></li>
            <li>
                <a href="https://www.justdial.com/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors duration-200 flex items-center gap-1">
                    Find us on Justdial
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h6 className="font-label-caps text-[10px] text-primary uppercase tracking-widest">Newsletter</h6>
          <p className="font-body-md text-sm text-on-surface-variant">Join the atelier for updates on new collections and exhibitions.</p>
          <form className="flex border-b border-primary pb-2">
            <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm font-body-md w-full placeholder:text-outline-variant"
            />
            <button type="submit" className="text-primary hover:opacity-70 transition-opacity">
                <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
        </div>

      </div>
    </footer>
  );
}
