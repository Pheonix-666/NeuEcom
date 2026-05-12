import Cart from '@/components/Cart';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">
      <div className="mb-12">
        <h1 className="font-display-lg text-[36px] md:text-[48px] text-primary mb-4">Your Selection</h1>
        <p className="font-body-lg text-on-surface-variant">Review your artisanal collection before proceeding to checkout.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-8">
          <Cart />
        </div>
        
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-surface-container p-8 ghost-border">
            <h3 className="font-headline-sm text-lg mb-6">Concierge Assistance</h3>
            <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
              Need help with dimensions or material pairings? Our master curators are available for private consultations.
            </p>
            <Link href="/contact" className="font-label-caps text-[12px] tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all">
              CONTACT CONCIERGE
            </Link>
          </div>

          <div className="bg-surface-container p-8 ghost-border">
            <h3 className="font-headline-sm text-lg mb-6">Shipping Information</h3>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Each piece is custom-packaged in museum-grade crates to ensure perfect preservation during transit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
