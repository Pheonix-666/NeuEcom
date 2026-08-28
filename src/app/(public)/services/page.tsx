export default function ServicesPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
      <div className="text-center mb-20">
        <span className="font-label-caps text-[12px] tracking-[0.3em] text-secondary uppercase mb-4 block">Our Expertise</span>
        <h1 className="font-display-lg text-[40px] md:text-[64px] text-primary">Atelier Services</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Conservation', desc: 'Museum-grade preservation using acid-free materials and UV-protective glass.' },
          { title: 'Restoration', desc: 'Expert cleaning and repair for vintage frames and delicate paper works.' },
          { title: 'Installation', desc: 'Professional art hanging and spatial curation for homes and galleries.' }
        ].map((service, i) => (
          <div key={i} className="p-10 border border-neutral-100 hover:border-primary transition-all group">
            <h3 className="font-headline-sm text-2xl mb-4 group-hover:italic transition-all">{service.title}</h3>
            <p className="text-on-surface-variant leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
