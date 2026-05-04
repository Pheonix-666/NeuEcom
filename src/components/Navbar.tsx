import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="flex justify-between items-center w-full px-12 h-24 max-w-[1920px] mx-auto text-neutral-900 font-['Noto_Serif'] tracking-tight">
        <Link href="/" className="text-lg font-bold uppercase tracking-[0.2em] text-neutral-900">
          Good Luck Frame and Art
        </Link>
        <div className="hidden md:flex items-center space-x-12">
          <Link href="/" className="text-neutral-500 hover:text-neutral-900 transition-colors pb-1">Gallery</Link>
          <Link href="/catalog" className="text-neutral-500 hover:text-neutral-900 transition-colors">Catalog</Link>
          <Link href="#" className="text-neutral-500 hover:text-neutral-900 transition-colors">Bespoke</Link>
          <Link href="#" className="text-neutral-500 hover:text-neutral-900 transition-colors">Services</Link>
          <Link href="#" className="text-neutral-500 hover:text-neutral-900 transition-colors">Atelier</Link>
        </div>
        <div className="flex items-center space-x-6">
          <button className="hover:opacity-70 transition-opacity duration-300">
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <button className="hover:opacity-70 transition-opacity duration-300">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
