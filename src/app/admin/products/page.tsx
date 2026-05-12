import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import Link from 'next/link';

export default async function AdminProductsPage() {
  const products = await prisma.product.findMany({
    include: { category: true },
    orderBy: { createdAt: 'desc' },
  });

  const categories = await prisma.category.findMany();

  async function addProduct(formData: FormData) {
    'use server';
    
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const price = parseFloat(formData.get('price') as string);
    const image = formData.get('image') as string;
    const type = formData.get('type') as string;
    const frameType = formData.get('frameType') as string;
    const categoryId = formData.get('categoryId') as string;

    await prisma.product.create({
      data: {
        name,
        description,
        price,
        image,
        type,
        frameType,
        categoryId,
      },
    });

    revalidatePath('/admin/products');
    revalidatePath('/catalog');
    revalidatePath('/');
  }

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="font-display-lg text-[36px] text-primary mb-2">Inventory Management</h1>
          <p className="font-body-md text-on-surface-variant">Add and curate pieces in the digital gallery.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/admin/orders" className="px-6 py-3 border border-primary text-primary font-label-caps text-[11px] tracking-widest uppercase hover:bg-surface-variant transition-all">
            Orders
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Add Product Form */}
        <div className="lg:col-span-4">
          <div className="bg-surface-container p-8 ghost-border sticky top-32">
            <h3 className="font-headline-sm text-xl mb-6">Add New Piece</h3>
            <form action={addProduct} className="space-y-4">
              <div className="space-y-1">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Name</label>
                <input name="name" required className="w-full bg-white border border-outline-variant p-3 text-sm focus:outline-primary transition-all" />
              </div>
              <div className="space-y-1">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Description</label>
                <textarea name="description" required className="w-full bg-white border border-outline-variant p-3 text-sm focus:outline-primary transition-all h-24" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Price ($)</label>
                  <input name="price" type="number" step="0.01" required className="w-full bg-white border border-outline-variant p-3 text-sm focus:outline-primary transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Category</label>
                  <select name="categoryId" required className="w-full bg-white border border-outline-variant p-3 text-sm focus:outline-primary transition-all">
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="space-y-1">
                <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Image URL</label>
                <input name="image" required className="w-full bg-white border border-outline-variant p-3 text-sm focus:outline-primary transition-all" placeholder="https://..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Art Type</label>
                  <input name="type" required className="w-full bg-white border border-outline-variant p-3 text-sm focus:outline-primary transition-all" placeholder="e.g. Original Ink" />
                </div>
                <div className="space-y-1">
                  <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Frame Type</label>
                  <input name="frameType" required className="w-full bg-white border border-outline-variant p-3 text-sm focus:outline-primary transition-all" placeholder="e.g. Maple Frame" />
                </div>
              </div>
              <button type="submit" className="w-full bg-primary text-surface py-4 font-label-caps text-[11px] tracking-widest uppercase mt-4 hover:bg-primary-container transition-all">
                Publish to Gallery
              </button>
            </form>
          </div>
        </div>

        {/* Product List */}
        <div className="lg:col-span-8">
          <div className="bg-white border border-outline-variant">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container border-b border-outline-variant">
                  <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase">Piece</th>
                  <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase">Category</th>
                  <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase">Price</th>
                  <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase">Date Added</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {products.map((p) => (
                  <tr key={p.id} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-4">
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-surface-container flex-shrink-0">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <p className="font-body-md text-sm font-medium">{p.name}</p>
                          <p className="font-body-sm text-[10px] text-on-surface-variant">{p.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-body-md text-sm">{p.category.name}</td>
                    <td className="p-4 font-label-caps text-sm">${p.price.toFixed(2)}</td>
                    <td className="p-4 font-body-sm text-xs text-on-surface-variant">{new Date(p.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
