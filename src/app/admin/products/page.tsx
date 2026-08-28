import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    include: { 
      category: true,
      variants: true
    },
    orderBy: { createdAt: 'desc' },
  });

  const categories = await prisma.category.findMany();

  async function addProduct(formData: FormData) {
    'use server';
    
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const price = parseFloat(formData.get('price') as string);
    const mainImage = formData.get('image') as string;
    const type = formData.get('type') as string;
    const material = formData.get('material') as string;
    const categoryId = formData.get('categoryId') as string;
    const size = formData.get('size') as string;
    const stockQty = parseInt(formData.get('stockQty') as string) || 0;

    const slug = name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '');

    await prisma.product.create({
      data: {
        name,
        slug,
        description,
        mainImage,
        type,
        categoryId,
        variants: {
          create: {
            material,
            size,
            pricePaise: Math.round(price * 100),
            stockQty,
            sku: `${slug.substring(0, 5)}-${material.substring(0, 3)}-${size}`.toUpperCase(),
          }
        }
      },
    });

    revalidatePath('/admin/products');
    revalidatePath('/catalog');
    revalidatePath('/');
    redirect('/admin/products');
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Add Product Form */}
      <div className="lg:col-span-4">
        <div className="bg-white p-8 border border-outline-variant sticky top-32">
          <h3 className="font-headline-sm text-xl text-primary mb-6">Register New Piece</h3>
          <form action={addProduct} className="space-y-6">
            <div className="space-y-1.5">
              <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Product Name</label>
              <input name="name" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md" placeholder="e.g. Autumnal Whisper" />
            </div>
            
            <div className="space-y-1.5">
              <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Narrative / Description</label>
              <textarea name="description" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-sm focus:outline-primary transition-all h-32 font-body-md leading-relaxed" placeholder="Describe the soul of this piece..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Price (₹)</label>
                <input name="price" type="number" step="0.01" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md" placeholder="0.00" />
              </div>
              <div className="space-y-1.5">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Curated Category</label>
                <select name="categoryId" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md">
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Exhibition Image URL</label>
              <input name="image" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md" placeholder="https://source.unsplash.com/..." />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Artistic Medium</label>
                <input name="type" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md" placeholder="e.g. Giclée Print" />
              </div>
              <div className="space-y-1.5">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Frame Material</label>
                <input name="material" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md" placeholder="e.g. Walnut" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Dimensions</label>
                <input name="size" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md" placeholder="e.g. 18x24 in" />
              </div>
              <div className="space-y-1.5">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Stock Count</label>
                <input name="stockQty" type="number" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md" defaultValue="1" />
              </div>
            </div>

            <button type="submit" className="w-full bg-primary text-surface py-4 font-label-caps text-[11px] tracking-widest uppercase mt-4 hover:bg-primary-container transition-all group flex items-center justify-center gap-2">
              Add to Collection
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </button>
          </form>
        </div>
      </div>

      {/* Product List */}
      <div className="lg:col-span-8">
        <div className="bg-white border border-outline-variant">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
            <h3 className="font-label-caps text-[11px] tracking-widest uppercase text-primary">Active Inventory ({products.length})</h3>
            <div className="flex gap-2">
              <span className="material-symbols-outlined text-on-surface-variant text-[18px]">filter_list</span>
              <span className="material-symbols-outlined text-on-surface-variant text-[18px]">search</span>
            </div>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-lowest border-b border-outline-variant">
                <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Artwork</th>
                <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Category</th>
                <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant text-right">Price</th>
                <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant text-right">Stock</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {products.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-12 text-center text-on-surface-variant opacity-50 italic font-body-md">
                    The gallery is currently empty.
                  </td>
                </tr>
              ) : (
                products.map((p) => {
                  const firstVariant = p.variants[0];
                  return (
                    <tr key={p.id} className="hover:bg-surface-container-low transition-colors group">
                      <td className="p-4">
                        <div className="flex gap-4 items-center">
                          <div className="w-14 h-14 bg-surface-container border border-outline-variant flex-shrink-0 overflow-hidden">
                            {p.mainImage && <img src={p.mainImage} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />}
                          </div>
                          <div>
                            <p className="font-body-md text-sm font-semibold text-primary">{p.name}</p>
                            <p className="font-body-sm text-[10px] text-on-surface-variant tracking-wide uppercase">{p.type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 font-body-md text-sm text-on-surface-variant">{p.category.name}</td>
                      <td className="p-4 font-body-md text-sm text-primary text-right tabular-nums">
                        {firstVariant ? `₹${(firstVariant.pricePaise / 100).toLocaleString()}` : '—'}
                      </td>
                      <td className="p-4 text-right">
                        <span className={`px-2 py-1 text-[10px] font-medium tabular-nums ${
                          (firstVariant?.stockQty || 0) < 5 ? 'text-error bg-error-container' : 'text-tertiary bg-tertiary-container'
                        } rounded-sm`}>
                          {firstVariant ? `${firstVariant.stockQty}` : '0'}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

