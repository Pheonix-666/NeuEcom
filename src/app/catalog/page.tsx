
import Link from 'next/link';

export default function Catalog() {
  return (
    <div className="flex flex-col w-full bg-[#FCF9F4]">
      {/* Curved Boutique Hero */}
      <section className="relative overflow-hidden bg-[#F0EDE8] py-12 md:py-24 px-6 md:px-12 mb-12 md:mb-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <span className="font-label-caps text-[12px] tracking-[0.4em] text-secondary uppercase mb-4 block">New Season</span>
            <h1 className="font-display-lg text-[42px] md:text-[64px] text-primary mb-6 leading-[1.1]">The Spring<br/><span className="italic">Collection</span></h1>
            <p className="font-body-lg text-[16px] md:text-[18px] text-on-surface-variant mb-10 max-w-md">
              Discover artisanal frames crafted with rare hardwoods and hand-applied finishes, designed for the modern collector.
            </p>
            <button className="bg-primary text-white px-10 py-4 font-label-caps text-[11px] tracking-widest uppercase hover:bg-secondary transition-all shadow-lg">Shop Now</button>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[340px] md:w-[400px] md:h-[500px]">
                <div className="absolute inset-0 bg-secondary/10 rounded-t-full -translate-x-4 -translate-y-4" />
                <div className="absolute inset-0 border border-secondary/20 rounded-t-full translate-x-4 translate-y-4" />
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSj2UWZBSH19cY8HNS-oiNhI0u1BS6OJf-oxaElDlzD8jrYGFHn9NRtMSZtq6WjNYdXt8SjcMnrSM1qSP8Qyr7IC_qjVW2ZNVKMV9_ahCzG_cY9-R4aMorFoIL_5sBJyjyrJe_zYA71LnjP5ZPAPRW7xctF4lB7doz6Po-wbo0kvTFdMfv5BbbUcb7XyqkfEAu1Q-mvD-1C_AuGcNV0GhP1j1O0uGisH5rja-cekpAuVqKK_tGw5_ZnOuwj6sRao2prct7m8kDkSIm" 
                    className="w-full h-full object-cover rounded-t-full shadow-2xl relative z-10"
                    alt="Featured Collection"
                />
            </div>
          </div>
        </div>
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg className="relative block w-full h-[40px] text-[#FCF9F4]" fill="currentColor" viewBox="0 0 1200 120">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto w-full px-6 md:px-12">
        {/* Category Tiles (Inspired by Pic) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
            {['New Arrivals', 'Shop Sale', 'Best Sellers'].map((cat, i) => (
                <div key={i} className="aspect-square border border-secondary/20 relative overflow-hidden flex items-center justify-center p-8 text-center group cursor-pointer hover:border-secondary transition-all">
                    {/* Arch Background Detail */}
                    <div className="absolute inset-x-8 bottom-0 top-12 bg-secondary/5 rounded-t-full transition-transform duration-500 group-hover:scale-110" />
                    
                    <div className="relative z-10 space-y-4">
                        <span className="material-symbols-outlined text-secondary opacity-40 group-hover:opacity-100 transition-all text-3xl">
                            {i === 0 ? 'new_releases' : i === 1 ? 'sell' : 'star'}
                        </span>
                        <h3 className="font-label-caps text-[14px] tracking-[0.2em] uppercase text-primary font-bold">{cat}</h3>
                        <div className="w-8 h-px bg-secondary mx-auto scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </div>
                </div>
            ))}
        </div>

        {/* Catalog Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar - Desktop Only */}
          <aside className="hidden lg:block w-64 space-y-10 sticky top-32 h-fit">
            <div>
                <h4 className="font-label-caps text-[11px] tracking-widest uppercase text-secondary mb-6">Filter By</h4>
                <div className="space-y-4">
                    <div>
                        <p className="text-[10px] font-label-caps uppercase mb-3 opacity-60">Material</p>
                        <div className="flex flex-wrap gap-2">
                            {['Walnut', 'Oak', 'Maple', 'Metal'].map(m => (
                                <button key={m} className="px-3 py-1 border border-neutral-200 text-[10px] font-label-caps uppercase hover:border-primary transition-all">{m}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1 pb-24">
            <div className="flex justify-between items-end mb-10">
                <h2 className="font-display-lg text-[28px] md:text-[32px]">All Artifacts</h2>
                <span className="font-label-caps text-[10px] uppercase opacity-40">128 Results</span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-12 md:gap-x-8 md:gap-y-16">
              {[1, 2, 3, 4, 5, 6].map((id) => (
                <Link key={id} href={`/product/${id}`} className="group block">
                  <div className="relative aspect-[4/5] bg-white overflow-hidden mb-4 border border-neutral-100 p-4 md:p-8 flex items-center justify-center">
                    <img 
                        src={id === 1 ? "/hero_lux.png" : `https://picsum.photos/seed/${id + 20}/600/800`} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 shadow-sm"
                        alt="Product"
                    />
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                         <span className="bg-white/90 backdrop-blur-sm px-4 py-2 border border-primary text-[9px] font-label-caps tracking-widest uppercase">View Detail</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-center md:text-left">
                    <h3 className="font-headline-sm text-sm md:text-lg">Fine Art Artifact {id}</h3>
                    <p className="font-label-caps text-[9px] md:text-[10px] text-secondary tracking-widest uppercase">From $240.00</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-20 text-center">
                <button className="px-12 py-4 border border-neutral-200 font-label-caps text-[11px] tracking-widest uppercase hover:border-primary transition-all">Load More</button>
            </div>
          </main>
        </div>

        {/* Featured Boutique Selection (Inspired by Pic) */}
        <section className="py-20 border-t border-neutral-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                <div className="relative aspect-[4/5] md:aspect-square bg-white p-6 md:p-12 overflow-hidden group shadow-sm">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-e6nc0ploS672H0DW4pwkHtfQVrXFI5EcKoaTowa1sX3QsN-nc2qu5rRlu9DYtg7rI0HkExOy7dcEnE8KwpMIrR9JV2WW819nZLpBcWP-viujyMzLOjdojIBGXohrv-Ds-ZSy_ssHWKuPNNilzDvodwNdxcejbT6QlKGfir4AY6UjWM-pLDfW2eCmOJMAZLN7zMvmjV3mEh0Ngk4tY89DLkOQV9XoJMqGhKf2FQtKKJS2oOhX_mIWVIjK5OPIFRZ6Qcgq_TptoJT" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        alt="Featured Artwork"
                    />
                </div>
                <div className="space-y-8">
                    <div>
                        <span className="font-label-caps text-[12px] tracking-[0.3em] text-secondary uppercase mb-4 block">Curator's Choice</span>
                        <h2 className="font-display-lg text-[36px] md:text-[54px] text-primary leading-tight">Gold Boho<br/>Artifact</h2>
                        <p className="font-headline-sm text-[20px] md:text-[24px] text-on-surface-variant mt-2">$640.00</p>
                    </div>
                    <div className="space-y-6 text-on-surface-variant max-w-md">
                        <p className="font-body-md">This piece features a hand-gilded 24k gold leaf finish over sustainably sourced black walnut. A true centerpiece for the modern atelier.</p>
                        <ul className="space-y-2 font-label-caps text-[10px] tracking-widest">
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"/> LIMITED EDITION</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"/> MUSEUM GRADE ACRYLIC</li>
                            <li className="flex items-center gap-2"><span className="w-1 h-1 bg-secondary rounded-full"/> SIGNED BY ARTISAN</li>
                        </ul>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="flex-1 bg-primary text-white py-4 font-label-caps text-[11px] tracking-widest uppercase hover:bg-secondary transition-all">Add to Cart</button>
                        <button className="flex-1 border border-primary text-primary py-4 font-label-caps text-[11px] tracking-widest uppercase hover:bg-surface-variant transition-all">Quick View</button>
                    </div>
                </div>
            </div>
        </section>
      </div>

      {/* Boutique Newsletter Section (Inspired by Pic) */}
      <section className="bg-secondary/5 py-20 px-6 text-center border-t border-secondary/10 mt-12">
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

