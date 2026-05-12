import prisma from '@/lib/db';
import Link from 'next/link';

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="font-display-lg text-[36px] text-primary mb-2">Order Management</h1>
          <p className="font-body-md text-on-surface-variant">Oversee and fulfill artisanal selections.</p>
        </div>
        <div className="flex gap-4">
          <Link href="/admin/products" className="px-6 py-3 border border-primary text-primary font-label-caps text-[11px] tracking-widest uppercase hover:bg-surface-variant transition-all">
            Products
          </Link>
          <Link href="/" className="px-6 py-3 bg-primary text-surface font-label-caps text-[11px] tracking-widest uppercase hover:bg-primary-container transition-all">
            Storefront
          </Link>
        </div>
      </div>

      <div className="space-y-8">
        {orders.map((order) => (
          <div key={order.id} className="bg-white border border-outline-variant shadow-sm overflow-hidden">
            <div className="bg-surface-container p-6 flex flex-wrap justify-between items-center gap-6 border-b border-outline-variant">
              <div>
                <p className="font-label-caps text-[10px] text-secondary tracking-widest uppercase mb-1">Order ID</p>
                <p className="font-headline-sm text-sm">{order.id}</p>
              </div>
              <div>
                <p className="font-label-caps text-[10px] text-secondary tracking-widest uppercase mb-1">Customer</p>
                <p className="font-body-md text-sm">{order.email}</p>
              </div>
              <div>
                <p className="font-label-caps text-[10px] text-secondary tracking-widest uppercase mb-1">Date</p>
                <p className="font-body-md text-sm">{new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="font-label-caps text-[10px] text-secondary tracking-widest uppercase mb-1">Status</p>
                <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {order.status}
                </span>
              </div>
              <div>
                <p className="font-label-caps text-[10px] text-secondary tracking-widest uppercase mb-1">Total</p>
                <p className="font-headline-sm text-lg">${order.total.toFixed(2)}</p>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant mb-4">Items</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-16 h-16 bg-surface-container flex-shrink-0">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-body-md text-sm font-medium">{item.product.name}</p>
                      <p className="font-body-sm text-xs text-on-surface-variant">Qty: {item.quantity} × ${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {orders.length === 0 && (
          <div className="py-20 text-center bg-surface-container-low border border-dashed border-outline-variant">
            <p className="font-body-lg text-on-surface-variant italic">No orders have been placed yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
