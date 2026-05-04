export default function AtelierPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="font-label-caps text-[12px] tracking-[0.3em] text-secondary uppercase mb-4 block">Inside the Shop</span>
          <h1 className="font-display-lg text-[40px] md:text-[64px] text-primary mb-8 leading-tight">The Powai Atelier</h1>
          <p className="font-body-lg text-[18px] text-on-surface-variant mb-6">
            Located in the heart of Mumbai, our flagship atelier is where heritage techniques meet modern precision. Every frame is hand-joined, hand-finished, and meticulously inspected.
          </p>
          <div className="space-y-4 pt-8">
            <div className="flex justify-between border-b border-neutral-100 pb-2">
              <span className="font-label-caps text-[10px] uppercase">Monday - Friday</span>
              <span className="text-sm">10:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between border-b border-neutral-100 pb-2">
              <span className="font-label-caps text-[10px] uppercase">Saturday</span>
              <span className="text-sm">11:00 AM - 5:00 PM</span>
            </div>
          </div>
        </div>
        <div className="bg-surface-container aspect-video md:aspect-[4/5] flex items-center justify-center p-12">
            <div className="text-center">
                <span className="material-symbols-outlined text-6xl text-neutral-300">camera</span>
                <p className="font-label-caps text-[10px] mt-4 opacity-40 uppercase tracking-widest">Image of Artisan Space</p>
            </div>
        </div>
      </div>
    </div>
  );
}
