import Link from 'next/link';

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="pt-8">
      {/* Hero Product Gallery */}
      <section className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-[120px]">
        {/* Gallery Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="aspect-[1.33] w-full bg-white p-8 ghost-border relative overflow-hidden group">
            <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR6FQejqy1jmmpYxc39n54spuBfWGgWN-htVcsC3WBnAHjetDGavVXXHHdd5cafzJcx69ovmY4AVYB3m4Pr67hXG6akGGREOO5bhJv4nngdwCsQwBdyQ1ShcPdDXxmB8XThhu9dLXkk35Wct2Kst6qw35gvKN-n1MRVFqGfxKXTA-BGDlxxYcRPcf4qzVqv65Sme8_r6OfqPrh6A3pLXCVp4di6eRjvjmTaxl1DrQYV2VPZ7b7AzEdgFglAq-2WWVRv6SrlYx1_Q5T" 
                alt="The Heritage Walnut Frame" 
                className="w-full h-full object-cover shadow-sm" 
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-white p-4 ghost-border hover:opacity-80 transition-opacity cursor-pointer">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpGDLSzx2qG6G6BvAuxRqKLVMYVcu9fb9qQNf7lLCBPOK3i4lqZ4wRRpDWZlMMAuhWNWPo-IQrzLKtfTqbbRXNODXZBfhYYLgGC6Hpca192ForjRt4MiRz8F6DkuR3NkE2ETDdqYPcZJN3VcUopA5eftsEC3DXyeJ0yfLwQQeiGRsrPZqeAujIEEl0_6SkaAW1hyup2hA1Tn7o4TKweyoY3Ups2zx7kbnYfAUNZKWrt7U7NIoPB3wXOcqmbAjUsKhKVmXVhrVCU1wc" 
                alt="Wood Grain Detail" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="aspect-square bg-white p-4 ghost-border hover:opacity-80 transition-opacity cursor-pointer">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAELCNNmlQY01nhRfD6UCvTd0yDkOhQXI6_kz_OwEp2AEzBSA4JnE4jXWHBa8gZU0MhNj3QHAiTsOmvG42cdXwFEr1bca0xRDBT6VeIL2hsM-juGYMcFYpLmND09F3UEMMFdpAzHA2ZNJQK0pOHJjcu5Ph9NSktvijajIGVfPOIKahrLijGgCTtjuHITsqnnmayH2IhRj_zkWIVuYCioi4OUu1YyZ1R3byadcm5H1cczdM-9GoRcBx_neHe8mMQDVMegtgyyrHK3hVp" 
                alt="Frame Corner Hardware" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="aspect-square bg-white p-4 ghost-border hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-outline">play_circle</span>
            </div>
          </div>
        </div>

        {/* Purchase Area Column */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
          <div>
            <span className="font-label-caps text-[12px] tracking-widest text-secondary mb-2 block uppercase">EXCLUSIVELY HANDCRAFTED</span>
            <h1 className="font-display-lg text-[48px] text-primary mb-4 leading-tight">The Heritage Walnut Frame</h1>
            <p className="font-headline-sm text-[24px] text-on-surface-variant">$240.00 — $680.00</p>
          </div>

          <div className="space-y-8">
            {/* Material Selector */}
            <div className="space-y-4">
              <label className="font-label-caps text-[12px] tracking-widest uppercase text-on-surface">Material Selection</label>
              <div className="flex gap-4">
                <button className="px-6 py-3 border-2 border-primary text-primary font-label-caps text-[12px] tracking-widest bg-transparent">WALNUT</button>
                <button className="px-6 py-3 border border-outline-variant text-on-surface-variant font-label-caps text-[12px] tracking-widest hover:border-primary transition-colors">OAK</button>
                <button className="px-6 py-3 border border-outline-variant text-on-surface-variant font-label-caps text-[12px] tracking-widest hover:border-primary transition-colors">MAPLE</button>
              </div>
            </div>

            {/* Size Selector */}
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
              <button className="w-full bg-primary text-surface py-5 font-label-caps text-[12px] uppercase tracking-widest hover:bg-transparent hover:text-primary border border-primary transition-all duration-300">
                Add to Collection
              </button>
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
      <section className="bg-surface-container-low py-[120px] overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <h2 className="font-display-lg text-[48px] max-w-md">Provenance and Craftsmanship</h2>
            <div className="space-y-6 text-on-surface-variant max-w-lg leading-relaxed">
              <p className="font-body-lg text-[18px]">Every Heritage Walnut Frame begins its journey in the sustainable forests of the American Midwest. We select only the heartwood of trees that have reached full maturity, ensuring a density and grain complexity that is unparalleled in commercial framing.</p>
              <p className="font-body-lg text-[18px]">Master artisan Elias Thorne hand-finishes each piece in our Vermont atelier. Using a proprietary blend of natural oils and waxes, he builds the finish layer by layer over seven days. The result is a deep, luminous glow that protects the wood while allowing its natural soul to breathe.</p>
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdf4xlUPZjnjJY11gIFCwtI6rPmxDZS0GGIyULpxq3zzrXGk7KdHZMGSS8rAIHHs3GYl41BHlc8XGPn-Jkgmzws1KyLo99cZRPnqBrSXXqHbc_1V4J2mZRGqNbvWrhdR0AwwL_nTxpUG137Ey4muNlsWglPRadBzeG8pK15RtQBHYuObOI9_Q2sPjWP2TUR0fR2HGLbasTcnuiamxWo9PY_goSYD-a054KwGBfwB8ob2j5z8CbW6LcITDe-k4hE6JggCIOh0z2PTa0" 
                alt="Artisan Elias Thorne" 
                className="w-full h-[600px] object-cover ghost-border" 
            />
          </div>
        </div>
      </section>

      {/* Specifications & Pairings */}
      <section className="max-w-[1440px] mx-auto px-12 py-[120px] grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Accordion Section */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="font-headline-md text-[32px] mb-8">Technical Details</h3>
          
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
              Solid American Black Walnut. Acid-free conservation backing. Optically clear UV-protective acrylic or Museum Glass.
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
          <div className="bg-surface-container p-12 ghost-border">
            <h3 className="font-headline-md text-[32px] mb-8">Curated Pairings</h3>
            <p className="font-body-md text-[16px] text-on-surface-variant mb-10">Our curators recommend these fine art pieces to complement the deep tones of the Heritage Walnut Frame.</p>
            <div className="grid grid-cols-2 gap-8">
              
              <Link href="/product/4" className="group cursor-pointer block">
                <div className="aspect-[0.8] bg-white p-4 mb-4 ghost-border overflow-hidden transition-all group-hover:scale-[1.02]">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAw5zabkQB8ajIypD54F1cFG-dNg8bt_3zUhOHCtucPM70zbNYrtidfcO2OBtdoXfyo7Di0wv8h6oVDy_UlBmIQFVizyjN5oUqyX460MvxLdUoJewv-yQNePw8vxFN77F3JmThWcmknYIz3GuTeSvwCWhaPiBjQhhyMuF6jq3C-MrhLUtpE5RwvoBHIfsu1rkZ1S1zIL74pTE90nn83go1CzggH7_S0nde4C0D2-VrbE4JkaJuk6119Gf4JeW0H3zHwQlg7-jSK5kvQ" 
                    alt="Midnight Drift" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="font-label-caps text-[10px] text-secondary">MODERN ABSTRACT</p>
                <h4 className="font-headline-sm text-lg">Midnight Drift</h4>
              </Link>
              
              <Link href="/product/5" className="group cursor-pointer block">
                <div className="aspect-[0.8] bg-white p-4 mb-4 ghost-border overflow-hidden transition-all group-hover:scale-[1.02]">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ-e6nc0ploS672H0DW4pwkHtfQVrXFI5EcKoaTowa1sX3QsN-nc2qu5rRlu9DYtg7rI0HkExOy7dcEnE8KwpMIrR9JV2WW819nZLpBcWP-viujyMzLOjdojIBGXohrv-Ds-ZSy_ssHWKuPNNilzDvodwNdxcejbT6QlKGfir4AY6UjWM-pLDfW2eCmOJMAZLN7zMvmjV3mEh0Ngk4tY89DLkOQV9XoJMqGhKf2FQtKKJS2oOhX_mIWVIjK5OPIFRZ6Qcgq_TptoJT" 
                    alt="Sleeping Pines" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <p className="font-label-caps text-[10px] text-secondary">PHOTOGRAPHY</p>
                <h4 className="font-headline-sm text-lg">Sleeping Pines</h4>
              </Link>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
