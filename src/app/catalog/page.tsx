import Link from 'next/link';
import prisma from '@/lib/db';

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: categoryId } = await searchParams;

  const categories = await prisma.category.findMany();
  
  const products = await prisma.product.findMany({
    where: {
      AND: [
        { status: 'active' },
        categoryId ? { categoryId } : {},
      ],
    },
    include: {
      category: true,
      variants: true,
    },
  });

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">
      <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h1 className="font-display-lg text-[40px] md:text-[56px] text-primary mb-4">The Collections</h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl">
            From minimalist natural woods to ornate hand-gilded masterpieces, discover the perfect frame for your collection.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          <Link 
            href="/catalog"
            className={`px-6 py-2 rounded-full font-label-caps text-[10px] tracking-widest uppercase transition-all ${
              !categoryId ? 'bg-primary text-surface' : 'border border-outline-variant text-on-surface-variant hover:border-primary'
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link 
              key={cat.id}
              href={`/catalog?category=${cat.id}`}
              className={`px-6 py-2 rounded-full font-label-caps text-[10px] tracking-widest uppercase transition-all ${
                categoryId === cat.id ? 'bg-primary text-surface' : 'border border-outline-variant text-on-surface-variant hover:border-primary'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.slug}`} className="group block">
            <div className="aspect-square bg-white p-6 ghost-border mb-6 overflow-hidden relative">
              <img 
                src={product.mainImage || ''} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="space-y-1">
              <p className="font-label-caps text-[10px] text-secondary tracking-widest uppercase">{product.category.name}</p>
              <h3 className="font-headline-sm text-xl text-primary">{product.name}</h3>
              <p className="font-body-sm text-on-surface-variant mb-4">{product.type} / {product.variants[0]?.material}</p>
              <div className="pt-2 flex justify-between items-center border-t border-outline-variant/30">
                <span className="font-label-caps text-sm tracking-widest">₹{((product.variants[0]?.pricePaise || 0) / 100).toLocaleString()}</span>
                <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {products.length === 0 && (
        <div className="py-20 text-center">
          <p className="font-body-lg text-on-surface-variant">No pieces found in this collection.</p>
        </div>
      )}
    </div>
  );
}
