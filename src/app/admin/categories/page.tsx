import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export default async function AdminCategoriesPage() {
  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: { products: true }
      }
    }
  });

  async function addCategory(formData: FormData) {
    'use server';
    const name = formData.get('name') as string;
    await prisma.category.create({
      data: { name }
    });
    revalidatePath('/admin/categories');
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <div className="bg-white p-8 border border-outline-variant sticky top-32">
          <h3 className="font-headline-sm text-xl text-primary mb-6">New Category</h3>
          <form action={addCategory} className="space-y-6">
            <div className="space-y-1.5">
              <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Category Name</label>
              <input name="name" required className="w-full bg-surface-container-lowest border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md" placeholder="e.g. Sculptures" />
            </div>
            <button type="submit" className="w-full bg-primary text-surface py-4 font-label-caps text-[11px] tracking-widest uppercase hover:bg-primary-container transition-all">
              Create Category
            </button>
          </form>
        </div>
      </div>

      <div className="lg:col-span-8">
        <div className="bg-white border border-outline-variant">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant">
                <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Name</th>
                <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant text-right">Product Count</th>
                <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-surface-container-lowest transition-colors">
                  <td className="p-4 font-body-md text-sm text-primary">{cat.name}</td>
                  <td className="p-4 text-right font-body-md text-sm text-on-surface-variant">{cat._count.products} Pieces</td>
                  <td className="p-4 text-right">
                    <button className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors text-[20px]">delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
