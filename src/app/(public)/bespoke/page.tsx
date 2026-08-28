import Link from 'next/link';

export default function BespokePage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
      <div className="max-w-3xl">
        <span className="font-label-caps text-[12px] tracking-[0.3em] text-secondary uppercase mb-4 block">Tailored Excellence</span>
        <h1 className="font-display-lg text-[40px] md:text-[64px] text-primary mb-8 leading-tight">Bespoke Framing</h1>
        <p className="font-body-lg text-[18px] md:text-[20px] text-on-surface-variant mb-12 leading-relaxed">
          Our bespoke service is a collaborative journey between collector and craftsman. We design frames that don't just protect your art, but complete it.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="bg-surface-container p-8 rounded-sm">
            <h3 className="font-headline-sm text-2xl mb-4">Consultation</h3>
            <p className="text-on-surface-variant mb-6">Meet with our head curator to discuss the history and needs of your piece.</p>
            <button className="px-6 py-3 bg-primary text-white font-label-caps text-[11px] tracking-widest uppercase">Book Session</button>
          </div>
          <div className="bg-surface-container p-8 rounded-sm">
            <h3 className="font-headline-sm text-2xl mb-4">Material Choice</h3>
            <p className="text-on-surface-variant mb-6">Access our private reserve of aged hardwoods and hand-finished metals.</p>
            <button className="px-6 py-3 border border-primary text-primary font-label-caps text-[11px] tracking-widest uppercase">View Materials</button>
          </div>
        </div>
      </div>
    </div>
  );
}
