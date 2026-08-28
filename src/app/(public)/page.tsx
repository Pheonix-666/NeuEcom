import Link from 'next/link';
import prisma from '@/lib/db';

export default async function Home() {
  const products = await prisma.product.findMany({
    where: { isFeatured: true, status: 'active' },
    take: 6,
    include: {
      category: true,
      variants: true,
    },
  });

  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-[90vh] md:min-h-[calc(100vh-6rem)] flex items-center overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale-[10%] opacity-95 transition-transform duration-[10000ms] hover:scale-105" 
            src="/hero_lux.png"
            alt="Hero Image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60 md:bg-gradient-to-r md:from-background/70 md:via-background/40 md:to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full animate-fade-in-up flex justify-center md:justify-start">
          <div className="max-w-2xl bg-white/80 backdrop-blur-2xl p-8 md:p-16 border border-white/40 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] rounded-sm text-center md:text-left">
            <span className="font-label-caps text-[10px] md:text-[12px] uppercase text-secondary mb-4 md:mb-6 block tracking-[0.25em]">The Atelier Standard</span>
            <h1 className="font-display-lg text-[36px] md:text-[64px] mb-6 md:mb-8 text-primary leading-[1.1] md:leading-[1.05] tracking-[-0.03em]">The Art of the Frame</h1>
            <p className="font-body-lg text-[16px] md:text-[20px] text-on-surface-variant mb-10 md:mb-12 max-w-lg mx-auto md:mx-0 leading-[1.6]">
              Discover artisanal preservation and bespoke craftsmanship designed to elevate your collection. We believe the frame is the final brushstroke.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/catalog" className="inline-flex items-center justify-center px-10 py-5 bg-primary text-on-primary font-label-caps text-[11px] tracking-widest uppercase hover:bg-primary-container hover:text-white transition-all duration-300 shadow-lg">
                Explore Collections
                </Link>
                <Link href="#" className="inline-flex items-center justify-center px-10 py-5 border border-primary text-primary font-label-caps text-[11px] tracking-widest uppercase hover:bg-surface-variant transition-all duration-300">
                Our Story
                </Link>
            </div>
          </div>
        </div>
      </header>


      {/* Curated Collections - Bento Grid Style */}
      <section className="mt-20 md:mt-[120px] max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="font-headline-md text-[28px] md:text-[32px] text-primary italic">Curated Collections</h2>
          <div className="w-12 h-px bg-primary mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Minimalist Woods */}
          <div className="md:col-span-8 group relative overflow-hidden h-[400px] md:h-[500px] frame-ghost-border">
            <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSj2UWZBSH19cY8HNS-oiNhI0u1BS6OJf-oxaElDlzD8jrYGFHn9NRtMSZtq6WjNYdXt8SjcMnrSM1qSP8Qyr7IC_qjVW2ZNVKMV9_ahCzG_cY9-R4aMorFoIL_5sBJyjyrJe_zYA71LnjP5ZPAPRW7xctF4lB7doz6Po-wbo0kvTFdMfv5BbbUcb7XyqkfEAu1Q-mvD-1C_AuGcNV0GhP1j1O0uGisH5rja-cekpAuVqKK_tGw5_ZnOuwj6sRao2prct7m8kDkSIm"
                alt="Minimalist Woods"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-white p-6 md:p-8 border border-outline-variant shadow-sm max-w-[280px] md:max-w-xs">
              <h3 className="font-headline-sm text-[20px] md:text-[24px] mb-2">Minimalist Woods</h3>
              <p className="font-body-md text-[14px] md:text-[16px] text-on-surface-variant mb-4">Honoring nature through raw textures and clean profiles.</p>
              <Link href="/catalog" className="font-label-caps text-[11px] md:text-[12px] uppercase tracking-widest underline underline-offset-4">Shop Minimalist</Link>
            </div>
          </div>

          {/* Ornate Gilding */}
          <div className="md:col-span-4 group relative overflow-hidden h-[300px] md:h-[500px] frame-ghost-border">
            <div className="absolute inset-0 bg-[#f0ede8] flex items-center justify-center p-6 md:p-8 text-center">
              <div>
                <span className="material-symbols-outlined text-4xl mb-4 text-on-secondary-container">auto_awesome</span>
                <h3 className="font-headline-sm text-[20px] md:text-[24px] mb-4">Ornate Gilding</h3>
                <p className="font-body-md text-[14px] md:text-[16px] text-on-surface-variant">Hand-applied gold leaf for timeless masterpieces.</p>
                <Link href="/catalog" className="mt-6 md:mt-8 px-6 py-3 border border-primary font-label-caps text-[11px] md:text-[12px] tracking-widest uppercase inline-block">View Selection</Link>
              </div>
            </div>
          </div>

          {/* Industrial Metals */}
          <div className="md:col-span-12 group relative overflow-hidden h-[350px] md:h-[400px] frame-ghost-border">
            <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJR66nB6meWS7EI0xapinus4hQcMkDNWIAkag6_GH5Z_n33uA0QCS1gsdVnF_kjByGHV2TS85pHaP9JeoRXN2FtKz_o_jCo6NKblNmtAy4aIpduILKpJA-jgRIyVTTgk-RPADU9nrFLysYmKLYBgkJ2ZmaSADAMqQVJdXOMQqV8-nHpmBpcJYaDNg7Lu3svQkZFgL2MJWdtiL6utjWJhm5fFmioFUo_hnKjcE5GzlV5Dt_yE8F8TnXpaFhe8B6EOvDRu9eYEMIQkM-"
                alt="Industrial Metals"
            />
            <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-24 bg-primary/20 backdrop-blur-[2px]">
              <div className="max-w-md bg-white p-8 md:p-12 text-center md:text-left">
                <h3 className="font-headline-sm text-[20px] md:text-[24px] mb-4">Industrial Metals</h3>
                <p className="font-body-md text-[14px] md:text-[16px] text-on-surface-variant">Architectural precision for the modern collector.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Atelier Section */}
      <section className="mt-20 md:mt-[120px] bg-surface-container py-16 md:py-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="font-label-caps text-[11px] md:text-[12px] tracking-widest uppercase text-secondary mb-4 block">The Craft</span>
            <h2 className="font-display-lg text-[32px] md:text-[48px] mb-8 text-primary">The Atelier Process</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-label-caps tracking-widest text-[10px] md:text-[12px]">01</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-[20px] md:text-[24px] mb-2">Curation</h4>
                  <p className="text-on-surface-variant font-body-md text-[14px] md:text-[16px]">We select materials that complement the era, color palette, and medium of your artwork.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-label-caps tracking-widest text-[10px] md:text-[12px]">02</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-[20px] md:text-[24px] mb-2">Preservation</h4>
                  <p className="text-on-surface-variant font-body-md text-[14px] md:text-[16px]">Utilizing acid-free matting and UV-protective museum glass to ensure longevity.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-label-caps tracking-widest text-[10px] md:text-[12px]">03</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-[20px] md:text-[24px] mb-2">Precision</h4>
                  <p className="text-on-surface-variant font-body-md text-[14px] md:text-[16px]">Each joint is hand-joined and finished by our master craftsmen in our local atelier.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 p-6 md:p-12 bg-white frame-ghost-border">
            <img 
                className="w-full aspect-[4/5] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpVK96R10lv-I3BBfmORoAkTEqns6pVCojRISarh_ftDINvH-3SiS_j-JMe5BGy8PWNXcNgWagLO16qzfg-7xYHPcJtJeu9fVmd47PuhFX_zuFs5N6qeFkgFVu3f5qTtcPEWD7-6NKLkAc6XABEjknx4MGmp8zVVPBaSmoFESAijtVG8fp-UVR3Y7hpxXFS_NvZpzBkO_RiCAgGEzpno82V71cH6lXanL98Nj-GGMXUdrDQDiB8yGbJ9--tcmSP0w7pqc5Wg_f7s2Y"
                alt="Craftsmanship"
            />
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="mt-20 md:mt-[120px] mb-12 md:mb-24">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-8 md:mb-12 flex justify-between items-end">
          <div>
            <span className="font-label-caps text-[11px] md:text-[12px] tracking-widest uppercase text-secondary mb-2 block">Available Work</span>
            <h2 className="font-headline-md text-[28px] md:text-[32px]">Featured Artworks</h2>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-6 md:gap-8 px-6 md:px-12 pb-12 no-scrollbar max-w-[1440px] mx-auto">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`} className="flex-shrink-0 w-80 bg-white p-6 frame-ghost-border group block">
              <div className="overflow-hidden mb-6 aspect-square bg-surface-container flex items-center justify-center">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src={product.mainImage || ''} 
                  alt={product.name} 
                />
              </div>
              <h5 className="font-headline-sm text-lg mb-1">{product.name}</h5>
              <p className="font-body-md text-xs text-on-surface-variant mb-4">{product.type} / {product.variants[0]?.material}</p>
              <span className="font-label-caps text-[12px] tracking-widest">₹{( (product.variants[0]?.pricePaise || 0) / 100).toLocaleString()}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="fine-line opacity-20"></div>

    </>
  );
}

