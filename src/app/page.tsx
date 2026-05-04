import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative min-h-[calc(100vh-6rem)] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover grayscale-[20%] opacity-90" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDB0AfIaRMFPB9Mq8A1oOz2LisCvgNE03FvGc8cONqn27pBlKBWkDllgJ-U8lEvBNWiNN_KZs1XPVzA7G7c0u51m2tD9mhXlmmJA7Wrd0w6LzVm-_dmcwNmHfjDD66ZG_mPspeEfzt4EQZToDlIyPAl6Hr7nvF8tyu56m3v1r1hCLaImY1EjDBMLX_6woKRnpeRI52m_zTLVyts1veCe-1nZbga7AOI0iega3p5QsQWyBvcgfpJcZIoNIAVg8BHuyyFmgofTCLL5ZK"
            alt="Hero Image"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-12 w-full">
          <div className="max-w-2xl bg-white/40 backdrop-blur-md p-16 border border-white/20">
            <span className="font-label-caps text-[12px] uppercase text-secondary mb-6 block tracking-widest">The Atelier Standard</span>
            <h1 className="font-display-lg text-[48px] mb-8 text-primary leading-[1.1] tracking-[-0.02em]">The Art of the Frame</h1>
            <p className="font-body-lg text-[18px] text-on-surface-variant mb-12 max-w-lg leading-[1.6]">
              Discover artisanal preservation and bespoke craftsmanship designed to elevate your collection. We believe the frame is the final brushstroke.
            </p>
            <Link href="/catalog" className="inline-block px-10 py-4 bg-primary text-on-primary font-label-caps text-[12px] tracking-widest uppercase border border-primary hover:bg-transparent hover:text-primary transition-all duration-300">
              Explore Collections
            </Link>
          </div>
        </div>
      </header>

      {/* Curated Collections - Bento Grid Style */}
      <section className="mt-[120px] max-w-[1440px] mx-auto px-12">
        <div className="mb-16 text-center">
          <h2 className="font-headline-md text-[32px] text-primary italic">Curated Collections</h2>
          <div className="w-12 h-px bg-primary mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Minimalist Woods */}
          <div className="md:col-span-8 group relative overflow-hidden h-[500px] frame-ghost-border">
            <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSj2UWZBSH19cY8HNS-oiNhI0u1BS6OJf-oxaElDlzD8jrYGFHn9NRtMSZtq6WjNYdXt8SjcMnrSM1qSP8Qyr7IC_qjVW2ZNVKMV9_ahCzG_cY9-R4aMorFoIL_5sBJyjyrJe_zYA71LnjP5ZPAPRW7xctF4lB7doz6Po-wbo0kvTFdMfv5BbbUcb7XyqkfEAu1Q-mvD-1C_AuGcNV0GhP1j1O0uGisH5rja-cekpAuVqKK_tGw5_ZnOuwj6sRao2prct7m8kDkSIm"
                alt="Minimalist Woods"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-12 left-12 bg-white p-8 border border-outline-variant shadow-sm max-w-xs">
              <h3 className="font-headline-sm text-[24px] mb-2">Minimalist Woods</h3>
              <p className="font-body-md text-[16px] text-on-surface-variant mb-4">Honoring nature through raw textures and clean profiles.</p>
              <Link href="/catalog" className="font-label-caps text-[12px] uppercase tracking-widest underline underline-offset-4">Shop Minimalist</Link>
            </div>
          </div>

          {/* Ornate Gilding */}
          <div className="md:col-span-4 group relative overflow-hidden h-[500px] frame-ghost-border">
            <div className="absolute inset-0 bg-[#f0ede8] flex items-center justify-center p-8">
              <div className="text-center">
                <span className="material-symbols-outlined text-4xl mb-4 text-on-secondary-container">auto_awesome</span>
                <h3 className="font-headline-sm text-[24px] mb-4">Ornate Gilding</h3>
                <p className="font-body-md text-[16px] text-on-surface-variant">Hand-applied gold leaf for timeless masterpieces.</p>
                <Link href="/catalog" className="mt-8 px-6 py-3 border border-primary font-label-caps text-[12px] tracking-widest uppercase inline-block">View Selection</Link>
              </div>
            </div>
          </div>

          {/* Industrial Metals */}
          <div className="md:col-span-12 group relative overflow-hidden h-[400px] frame-ghost-border">
            <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJR66nB6meWS7EI0xapinus4hQcMkDNWIAkag6_GH5Z_n33uA0QCS1gsdVnF_kjByGHV2TS85pHaP9JeoRXN2FtKz_o_jCo6NKblNmtAy4aIpduILKpJA-jgRIyVTTgk-RPADU9nrFLysYmKLYBgkJ2ZmaSADAMqQVJdXOMQqV8-nHpmBpcJYaDNg7Lu3svQkZFgL2MJWdtiL6utjWJhm5fFmioFUo_hnKjcE5GzlV5Dt_yE8F8TnXpaFhe8B6EOvDRu9eYEMIQkM-"
                alt="Industrial Metals"
            />
            <div className="absolute inset-0 flex items-center px-24 bg-primary/20 backdrop-blur-[2px]">
              <div className="max-w-md bg-white p-12">
                <h3 className="font-headline-sm text-[24px] mb-4">Industrial Metals</h3>
                <p className="font-body-md text-[16px] text-on-surface-variant">Architectural precision for the modern collector.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* The Atelier Section */}
      <section className="mt-[120px] bg-surface-container py-24">
        <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <span className="font-label-caps text-[12px] tracking-widest uppercase text-secondary mb-4 block">The Craft</span>
            <h2 className="font-display-lg text-[48px] mb-8 text-primary">The Atelier Process</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-label-caps tracking-widest">01</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-[24px] mb-2">Curation</h4>
                  <p className="text-on-surface-variant font-body-md">We select materials that complement the era, color palette, and medium of your artwork.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-label-caps tracking-widest">02</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-[24px] mb-2">Preservation</h4>
                  <p className="text-on-surface-variant font-body-md">Utilizing acid-free matting and UV-protective museum glass to ensure longevity.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center flex-shrink-0">
                  <span className="font-label-caps tracking-widest">03</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-[24px] mb-2">Precision</h4>
                  <p className="text-on-surface-variant font-body-md">Each joint is hand-joined and finished by our master craftsmen in our local atelier.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 p-12 bg-white frame-ghost-border">
            <img 
                className="w-full aspect-[4/5] object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpVK96R10lv-I3BBfmORoAkTEqns6pVCojRISarh_ftDINvH-3SiS_j-JMe5BGy8PWNXcNgWagLO16qzfg-7xYHPcJtJeu9fVmd47PuhFX_zuFs5N6qeFkgFVu3f5qTtcPEWD7-6NKLkAc6XABEjknx4MGmp8zVVPBaSmoFESAijtVG8fp-UVR3Y7hpxXFS_NvZpzBkO_RiCAgGEzpno82V71cH6lXanL98Nj-GGMXUdrDQDiB8yGbJ9--tcmSP0w7pqc5Wg_f7s2Y"
                alt="Craftsmanship"
            />
          </div>
        </div>
      </section>

      {/* Featured Artworks */}
      <section className="mt-[120px] mb-24">
        <div className="max-w-[1440px] mx-auto px-12 mb-12 flex justify-between items-end">
          <div>
            <span className="font-label-caps text-[12px] tracking-widest uppercase text-secondary mb-2 block">Available Work</span>
            <h2 className="font-headline-md text-[32px]">Featured Artworks</h2>
          </div>
        </div>
        <div className="flex overflow-x-auto gap-8 px-12 pb-12 no-scrollbar max-w-[1440px] mx-auto">
          {/* Card 1 */}
          <Link href="/product/1" className="flex-shrink-0 w-80 bg-white p-6 frame-ghost-border group block">
            <div className="overflow-hidden mb-6 aspect-square bg-surface-container flex items-center justify-center">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBzvNO2i_6hS3abi8lv9GeQsehtZfqsK66tNExpo2_hM-Iot1kgg48S3YnhoTb-R_1QM0h-fyJixRpE7-6KrjWdGv8Yv73n76l5ftWKvjbwbDFnp5uTCvW1uefjEQjv2llgkHP6KOphu_og5NjqAx53JTOVQ575jpI33qnONLWb4ZgTmxkuvXWfnAhAKUdVdYlRhxhWM4ZSPR6LlPDSABPDRMqjGH3arTeL3viEXHZnmedniabWh1muIfoK44rhTLUrOChnyKWT958" alt="Ethereal Form I" />
            </div>
            <h5 className="font-headline-sm text-lg mb-1">Ethereal Form I</h5>
            <p className="font-body-md text-xs text-on-surface-variant mb-4">Limited Edition Print / Maple Frame</p>
            <span className="font-label-caps text-[12px] tracking-widest">$450.00</span>
          </Link>
          
          {/* Card 2 */}
          <Link href="/product/2" className="flex-shrink-0 w-80 bg-white p-6 frame-ghost-border group block">
            <div className="overflow-hidden mb-6 aspect-square bg-surface-container flex items-center justify-center">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnTAXynGmkBygcA9jQ07iwsoB9MQAVxoGb-cUex5Kw1skArdETxjIeAnmQF_RG2lbwwAeYmyF5z-IGZeHLeOLv6LxOWaokv6Sc7zKWeUP__C2JsqFcRChtKUdKGgHlAAOw2ndeOgvwid6XAS7dbUEaUQiAFcz8T3zf3UX7dWbRu5M_3xfkmovCY2arBx_ElJiYQ_or1DW-6oGW1-KSMo_wBkSz9UPHiL_kpbFJTp28VE6nbDp1iZRaOUKE_ZgyCXUU197xHuY9WLqD" alt="Structural Study" />
            </div>
            <h5 className="font-headline-sm text-lg mb-1">Structural Study</h5>
            <p className="font-body-md text-xs text-on-surface-variant mb-4">Original Ink on Paper / Metal Shell</p>
            <span className="font-label-caps text-[12px] tracking-widest">$1,200.00</span>
          </Link>

          {/* Card 3 */}
          <Link href="/product/3" className="flex-shrink-0 w-80 bg-white p-6 frame-ghost-border group block">
            <div className="overflow-hidden mb-6 aspect-square bg-surface-container flex items-center justify-center">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8zNU7P8w1Gijzfmn7oOAfs27AT6KbCB9AAkCToA1_7ruXNbUZ17z6pxWuAXKD5nfQL-0O1lADPdirocZUktFIBuGc9XJZ57PqiZwu5O_I1lx6uFsKN-rj4cu_5-a6CmXn9D51rhn5O64TE3SfOCZC2NwHzjNdAu7M_RXXk4E0uokhbEZpo26kyKtcWYty2RA2rApxEubBwbiufYEg4rSuTLgqrwizXi_gyr7T0GQB1pPkKGhDoir0VzUNPnLlOpjMglpz-L5GCQJ7" alt="Golden Hour" />
            </div>
            <h5 className="font-headline-sm text-lg mb-1">Golden Hour</h5>
            <p className="font-body-md text-xs text-on-surface-variant mb-4">Mixed Media / Gilded Wood</p>
            <span className="font-label-caps text-[12px] tracking-widest">$980.00</span>
          </Link>
        </div>
      </section>

      <div className="fine-line opacity-20"></div>

    </>
  );
}
