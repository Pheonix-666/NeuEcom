import Link from 'next/link';
import prisma from '@/lib/db';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/components/AddToCartButton';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });

  if (!product) {
    notFound();
  }

  // Fetch some related products
  const relatedProducts = await prisma.product.findMany({
    where: {
      categoryId: product.categoryId,
      NOT: { id: product.id },
    },
    take: 2,
  });

  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    frameType: product.frameType,
  };

  return (
    <div className="pt-8">
      {/* Hero Product Gallery */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 md:mb-[120px]">
        {/* Gallery Column ... */}
        <div className="lg:col-span-7 space-y-4 md:space-y-6">
          <div className="aspect-[1.33] w-full bg-white p-4 md:p-8 ghost-border relative overflow-hidden group">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover shadow-sm" 
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-white p-4 ghost-border hover:opacity-80 transition-opacity cursor-pointer">
              <img 
                src={product.image} 
                alt="Detail 1" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="aspect-square bg-white p-4 ghost-border hover:opacity-80 transition-opacity cursor-pointer">
              <img 
                src={product.image} 
                alt="Detail 2" 
                className="w-full h-full object-cover opacity-50 grayscale" 
              />
            </div>
            <div className="aspect-square bg-white p-4 ghost-border hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-outline">play_circle</span>
            </div>
          </div>
        </div>

        {/* Purchase Area Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8 md:space-y-10">
          <div>
            <span className="font-label-caps text-[10px] md:text-[12px] tracking-widest text-secondary mb-2 block uppercase">EXCLUSIVELY HANDCRAFTED</span>
            <h1 className="font-display-lg text-[32px] md:text-[48px] text-primary mb-4 leading-tight">{product.name}</h1>
            <p className="font-headline-sm text-[20px] md:text-[24px] text-on-surface-variant">${product.price.toFixed(2)}</p>
          </div>

          <div className="space-y-8">
            {/* Material Selector ... */}
            <div className="space-y-4">
              <label className="font-label-caps text-[12px] tracking-widest uppercase text-on-surface">Material Selection</label>
              <div className="flex gap-4">
                <button className="px-6 py-3 border-2 border-primary text-primary font-label-caps text-[12px] tracking-widest bg-transparent">{product.frameType.split(' ')[0].toUpperCase()}</button>
                <button className="px-6 py-3 border border-outline-variant text-on-surface-variant font-label-caps text-[12px] tracking-widest hover:border-primary transition-colors">OAK</button>
                <button className="px-6 py-3 border border-outline-variant text-on-surface-variant font-label-caps text-[12px] tracking-widest hover:border-primary transition-colors">MAPLE</button>
              </div>
            </div>

            {/* Size Selector ... */}
            <div className="space-y-4">
              <label className="font-label-caps text-[12px] tracking-widest uppercase text-on-surface">Dimensions (Inches)</label>
              <select className="w-full border-none border-b border-primary bg-transparent py-4 font-body-md focus:ring-0 focus:border-b-2 transition-all outline-none appearance-none">
                <option>8" x 10"</option>
                <option>11" x 14"</option>
                <option>16" x 20"</option>
                <option>24" x 36"</option>
                <option>Custom Size...</option>
              </select>
            </div>

            {/* Actions */}
            <div className="space-y-4 pt-4">
              <AddToCartButton item={cartItem} />
              <button className="w-full border border-primary text-primary py-5 font-label-caps text-[12px] uppercase tracking-widest hover:bg-surface-container-high transition-all duration-300 flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">edit_note</span>
                Custom Inquiry
              </button>
            </div>
          </div>


          {/* Artisanal Badges */}
          <div className="flex gap-8 pt-6 border-t border-outline-variant">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">verified</span>
              </div>
              <span className="font-label-caps text-[10px] leading-tight">MUSEUM QUALITY<br/>CONSERVATION</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-tertiary flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">precision_manufacturing</span>
              </div>
              <span className="font-label-caps text-[10px] leading-tight">ARTISAN<br/>HAND-FINISHED</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section className="bg-surface-container-low py-16 md:py-[120px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-8">
            <h2 className="font-display-lg text-[32px] md:text-[48px] max-w-md leading-tight">Provenance and Craftsmanship</h2>
            <div className="space-y-6 text-on-surface-variant max-w-lg leading-relaxed">
              <p className="font-body-lg text-[18px]">{product.description}</p>
              <p className="font-body-lg text-[18px]">Every {product.name} begins its journey in our dedicated atelier. We select only the finest materials, ensuring a density and grain complexity that is unparalleled in commercial framing.</p>
              <p className="font-body-lg text-[18px]">Using a proprietary blend of natural oils and waxes, our master artisans build the finish layer by layer. The result is a deep, luminous glow that protects the piece while allowing its natural soul to breathe.</p>
            </div>
            <div className="pt-4">
              <Link href="#" className="font-label-caps text-[12px] tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-all inline-flex items-center gap-2">
                MEET THE ARTISANS <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 border-[24px] border-white translate-x-6 translate-y-6 -z-10"></div>
            <img 
                src={product.image} 
                alt="Artisan Craftsmanship" 
                className="w-full h-[600px] object-cover ghost-border" 
            />
          </div>
        </div>
      </section>

      {/* Specifications & Pairings */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-[120px] grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Accordion Section */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="font-headline-md text-[28px] md:text-[32px] mb-8">Technical Details</h3>
          
          <div className="border-b border-outline-variant py-6">
            <div className="w-full flex justify-between items-center text-left group cursor-pointer">
              <span className="font-label-caps text-[12px] tracking-widest">DIMENSIONS</span>
              <span className="material-symbols-outlined transition-transform">expand_more</span>
            </div>
            <div className="mt-4 text-on-surface-variant font-body-md text-[16px]">
              Standard widths: 0.75", 1.25", 2". Depth: 1.5" (Rabbet depth 1.125"). Custom dimensions available upon request through our concierge framing service.
            </div>
          </div>
          
          <div className="border-b border-outline-variant py-6">
            <div className="w-full flex justify-between items-center text-left group cursor-pointer">
              <span className="font-label-caps text-[12px] tracking-widest">MATERIALS</span>
              <span className="material-symbols-outlined transition-transform">expand_more</span>
            </div>
            <div className="mt-4 text-on-surface-variant font-body-md text-[16px]">
              Solid {product.frameType}. Acid-free conservation backing. Optically clear UV-protective acrylic or Museum Glass.
            </div>
          </div>
          
          <div className="border-b border-outline-variant py-6">
            <div className="w-full flex justify-between items-center text-left group cursor-pointer">
              <span className="font-label-caps text-[12px] tracking-widest">SHIPPING & RETURNS</span>
              <span className="material-symbols-outlined transition-transform">expand_more</span>
            </div>
            <div className="mt-4 text-on-surface-variant font-body-md text-[16px]">
              Ships in custom-built wooden crates. Guaranteed arrival in 14-21 business days. Due to the bespoke nature of our frames, returns are subject to a 15% restocking fee.
            </div>
          </div>
        </div>

        {/* Curated Pairings Section */}
        <div className="lg:col-span-6">
          <div className="bg-surface-container p-8 md:p-12 ghost-border">
            <h3 className="font-headline-md text-[28px] md:text-[32px] mb-8">Curated Pairings</h3>
            <p className="font-body-md text-[16px] text-on-surface-variant mb-10">Our curators recommend these fine art pieces to complement the deep tones of the {product.name}.</p>
            <div className="grid grid-cols-2 gap-8">
              
              {relatedProducts.map((related) => (
                <Link key={related.id} href={`/product/${related.id}`} className="group cursor-pointer block">
                  <div className="aspect-[0.8] bg-white p-4 mb-4 ghost-border overflow-hidden transition-all group-hover:scale-[1.02]">
                    <img 
                      src={related.image} 
                      alt={related.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <p className="font-label-caps text-[10px] text-secondary">{related.type.toUpperCase()}</p>
                  <h4 className="font-headline-sm text-lg">{related.name}</h4>
                </Link>
              ))}

            </div>
          </div>
        </div>
      </section>
      {/* Boutique Newsletter Section (Inspired by Pic) */}
      <section className="bg-secondary/5 py-20 px-6 text-center border-t border-secondary/10">
        <div className="max-w-xl mx-auto">
            <span className="material-symbols-outlined text-4xl text-secondary opacity-30 mb-6">mail</span>
            <h2 className="font-display-lg text-[32px] md:text-[40px] mb-4">Stay in the Loop</h2>
            <p className="text-on-surface-variant mb-8 font-body-md">Join our inner circle for exhibition previews and rare collection drops.</p>
            <form className="flex max-w-md mx-auto border-b border-primary pb-2">
                <input type="email" placeholder="Email Address" className="bg-transparent w-full focus:outline-none text-sm placeholder:text-neutral-400" />
                <button type="submit" className="material-symbols-outlined text-primary">arrow_right_alt</button>
            </form>
        </div>
      </section>
    </div>
  );
}

