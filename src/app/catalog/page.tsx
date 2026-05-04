
import Link from 'next/link';

export default function Catalog() {
  return (
    <div className="flex flex-1 max-w-[1920px] mx-auto w-full">
      {/* SideNavBar */}
      <aside className="hidden lg:flex w-72 border-r border-outline-variant flex-col p-8 overflow-y-auto min-h-[calc(100vh-6rem)] bg-surface-bright">
        <div className="mb-10">
          <h2 className="font-headline-sm text-[24px] text-on-surface mb-1">Collections</h2>
          <p className="text-on-surface-variant font-label-caps text-[10px] uppercase tracking-widest">Curated Selection</p>
        </div>

        <nav className="flex flex-col gap-8">
          <div>
            <h3 className="font-label-caps text-[12px] tracking-widest text-on-surface mb-4">Material</h3>
            <ul className="space-y-3">
              <li><button className="bg-surface-variant text-on-surface font-semibold px-4 py-2 w-full text-left font-label-caps text-[11px] tracking-wide uppercase">All Frames</button></li>
              <li><button className="text-on-surface-variant hover:bg-surface px-4 py-2 w-full text-left font-label-caps text-[11px] tracking-wide uppercase">Walnut</button></li>
              <li><button className="text-on-surface-variant hover:bg-surface px-4 py-2 w-full text-left font-label-caps text-[11px] tracking-wide uppercase">Oak</button></li>
              <li><button className="text-on-surface-variant hover:bg-surface px-4 py-2 w-full text-left font-label-caps text-[11px] tracking-wide uppercase">Maple</button></li>
              <li><button className="text-on-surface-variant hover:bg-surface px-4 py-2 w-full text-left font-label-caps text-[11px] tracking-wide uppercase text-secondary">Gilded Series</button></li>
              <li><button className="text-on-surface-variant hover:bg-surface px-4 py-2 w-full text-left font-label-caps text-[11px] tracking-wide uppercase">Metal</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-label-caps text-[12px] tracking-widest text-on-surface mb-4">Style</h3>
            <ul className="space-y-3">
              <li><button className="text-on-surface-variant hover:bg-surface px-4 py-2 w-full text-left font-label-caps text-[11px] tracking-wide uppercase">Minimalist</button></li>
              <li><button className="text-on-surface-variant hover:bg-surface px-4 py-2 w-full text-left font-label-caps text-[11px] tracking-wide uppercase">Ornate</button></li>
              <li><button className="text-on-surface-variant hover:bg-surface px-4 py-2 w-full text-left font-label-caps text-[11px] tracking-wide uppercase">Industrial</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-label-caps text-[12px] tracking-widest text-on-surface mb-4">Price Range</h3>
            <div className="px-4">
              <input type="range" className="w-full accent-primary" />
              <div className="flex justify-between mt-2 text-[10px] font-label-caps text-on-surface-variant">
                <span>$100</span>
                <span>$5000+</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="mt-auto pt-8">
          <button className="w-full bg-primary text-on-primary py-4 px-6 text-[12px] font-label-caps tracking-widest uppercase hover:bg-transparent hover:text-primary border border-primary transition-all">
            Book an Appointment
          </button>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 px-12 pb-24 max-w-[1100px]">
        <header className="py-20 max-w-4xl">
          <h1 className="font-display-lg text-[48px] text-primary mb-4">Collections</h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant max-w-xl">
            A curated selection of artisanal frames and fine art prints, meticulously handcrafted in our local atelier to elevate your spatial experience.
          </p>
        </header>

        {/* Product Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">

          {/* Product 1 */}
          <Link href="/product/1" className="group cursor-pointer block">
            <div className="relative bg-white ghost-border p-8 mb-6 overflow-hidden card-hover">
              <div className="aspect-[4/5] bg-surface-container flex items-center justify-center p-10 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/ADBb0uiTd93pQp-57zIhvvuL_fneDWAhZVbJ92YvsRZ7eqvIeCpPzfGw2nPlX_XK28Ceitl2wmOaaKC35jOarmmJ7Z3ilYcYzPlyAM17QqniFmFA5__lED7iEDYbqikVXx4eNkeAt-CDPXkME1LhNnqXHEpn8wg4Olrog5nFgERKiEjN15CkKbdfQ2jG9Ewutz1HK3-gv9qRyJzlEFjIqj3DSAOhjqHDyXYpADrJu1Bg2h8QwRq3TvIqwtXfWAjVnIaSjOskspqc3LzMH6c"
                  alt="The Heritage Walnut"
                  className="w-full h-full object-cover shadow-sm transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="view-details absolute inset-0 bg-primary/5 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-3 font-label-caps text-[12px] tracking-widest text-primary border border-outline-variant">View Details</span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-caps text-[10px] rounded-full">Artisanal</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-sm text-[18px] text-primary">The Heritage Walnut</h3>
                <p className="font-label-caps text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest text-secondary">Hardwood Collection</p>
              </div>
              <p className="font-label-caps text-[12px] tracking-widest text-primary">$240.00</p>
            </div>
          </Link>

          {/* Product 2 */}
          <Link href="/product/2" className="group cursor-pointer block">
            <div className="relative bg-white ghost-border p-8 mb-6 overflow-hidden card-hover">
              <div className="aspect-[4/5] bg-surface-container flex items-center justify-center p-10 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/ADBb0uhIh2WPankOB-jjor2IAG71Im6VMWBGIzCQV_tISLYvGugWs5TEpRy92kpNNT9v3Gq_b7z-t9gi-O4dofin4C4aog9nxyKyDtCnDFJXUxDfsbXGjjqLT12rL5OURb7z0BKBYQtpawzwYYkAa4YWvzHHYCLYvwsKFgXKlHniDpIZ4tpuJEbZyYeGdNmhRpVfM3VMVoKZtuqNWKUxb5J13CbfM4avsfxX8AvmEiy6xl-C88PkGeW1UGDR0y2vBZj5mD882miBUmknqw"
                  alt="Gilded Rococo"
                  className="w-full h-full object-cover shadow-sm transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="view-details absolute inset-0 bg-primary/5 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-3 font-label-caps text-[12px] tracking-widest text-primary border border-outline-variant">View Details</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-sm text-[18px] text-primary">Gilded Rococo</h3>
                <p className="font-label-caps text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest">Ornate Series</p>
              </div>
              <p className="font-label-caps text-[12px] tracking-widest text-primary">$890.00</p>
            </div>
          </Link>

          {/* Product 3 */}
          <Link href="/product/3" className="group cursor-pointer block">
            <div className="relative bg-white ghost-border p-8 mb-6 overflow-hidden card-hover">
              <div className="aspect-[4/5] bg-surface-container flex items-center justify-center p-10 overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida/ADBb0ugOJ1i3Rw9iI0FDK3EE2vxmqUxj6lWO26pZAEZ2tKYA5WTpCoL1kxm6vK8yV6f81D39jSwSgEfEsFD0A3qpwuDClDxd1w0DvWzvvwooVaHWyFHuniWTmccO3m7Xqq2goyNRNvfrBipjVzFSqhbLupHXF-b-Hz3PCC6kcjt0xr_aH2GWKL9Scd0Fu8JK-acWqoD6ew4jjHc5OWf_K_cXOS7BxDhGmb2h9VWq098OqPRNXm-tHQIOVAI9WAsTMbEd-32dxCDcv7M9-zw"
                  alt="Brushed Aluminum"
                  className="w-full h-full object-cover shadow-sm transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="view-details absolute inset-0 bg-primary/5 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-3 font-label-caps text-[12px] tracking-widest text-primary border border-outline-variant">View Details</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-sm text-[18px] text-primary">Brushed Aluminum</h3>
                <p className="font-label-caps text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest">Minimalist Series</p>
              </div>
              <p className="font-label-caps text-[12px] tracking-widest text-primary">$185.00</p>
            </div>
          </Link>

          {/* Product 4 */}
          <Link href="/product/4" className="group cursor-pointer block">
            <div className="relative bg-white ghost-border p-8 mb-6 overflow-hidden card-hover">
              <div className="aspect-[4/5] bg-surface-container flex items-center justify-center p-10 overflow-hidden">
                <img
                  src="/vintage_gold.png"
                  alt="Vintage Gold"
                  className="w-full h-full object-cover shadow-sm transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="view-details absolute inset-0 bg-primary/5 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-3 font-label-caps text-[12px] tracking-widest text-primary border border-outline-variant">View Details</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-sm text-[18px] text-primary">Vintage Gold</h3>
                <p className="font-label-caps text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest text-secondary">Gilded Series</p>
              </div>
              <p className="font-label-caps text-[12px] tracking-widest text-primary">$450.00</p>
            </div>
          </Link>

          {/* Product 5 */}
          <Link href="/product/5" className="group cursor-pointer block">
            <div className="relative bg-white ghost-border p-8 mb-6 overflow-hidden card-hover">
              <div className="aspect-[4/5] bg-surface-container flex items-center justify-center p-10 overflow-hidden">
                <img
                  src="/modern_black.png"
                  alt="Modern Matte Black"
                  className="w-full h-full object-cover shadow-sm transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="view-details absolute inset-0 bg-primary/5 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-3 font-label-caps text-[12px] tracking-widest text-primary border border-outline-variant">View Details</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-sm text-[18px] text-primary">Modern Matte Black</h3>
                <p className="font-label-caps text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest">Industrial Series</p>
              </div>
              <p className="font-label-caps text-[12px] tracking-widest text-primary">$210.00</p>
            </div>
          </Link>

          {/* Product 6 */}
          <Link href="/product/6" className="group cursor-pointer block">
            <div className="relative bg-white ghost-border p-8 mb-6 overflow-hidden card-hover">
              <div className="aspect-[4/5] bg-surface-container flex items-center justify-center p-10 overflow-hidden">
                <img
                  src="/rustic_barnwood.png"
                  alt="Rustic Barnwood"
                  className="w-full h-full object-cover shadow-sm transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="view-details absolute inset-0 bg-primary/5 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-white px-6 py-3 font-label-caps text-[12px] tracking-widest text-primary border border-outline-variant">View Details</span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-secondary-container text-on-secondary-container px-3 py-1 font-label-caps text-[10px] rounded-full">Artisanal</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-headline-sm text-[18px] text-primary">Rustic Barnwood</h3>
                <p className="font-label-caps text-[10px] text-on-surface-variant mt-1 uppercase tracking-widest">Reclaimed Series</p>
              </div>
              <p className="font-label-caps text-[12px] tracking-widest text-primary">$320.00</p>
            </div>
          </Link>

        </section>

        {/* Pagination/Loader */}
        <div className="mt-20 flex justify-center">
          <button className="px-12 py-4 border border-outline-variant font-label-caps text-[12px] tracking-widest text-on-surface-variant hover:text-primary hover:border-primary transition-all">
            Load More Artifacts
          </button>
        </div>
      </main>
    </div>
  );
}
