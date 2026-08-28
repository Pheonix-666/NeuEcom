import prisma from '@/lib/db';

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    include: {
      user: true,
      items: {
        include: {
          variant: {
            include: {
              product: true
            }
          },
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 border border-outline-variant">
        <div className="flex gap-8">
          <div>
            <p className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant mb-1">Total Sales</p>
            <p className="font-headline-sm text-xl text-primary">₹{(orders.reduce((acc, o) => acc + o.totalPaise, 0) / 100).toLocaleString()}</p>
          </div>
          <div className="w-px h-10 bg-outline-variant"></div>
          <div>
            <p className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant mb-1">Total Orders</p>
            <p className="font-headline-sm text-xl text-primary">{orders.length}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-outline-variant text-[10px] font-label-caps tracking-widest uppercase hover:bg-surface-container transition-all">Export CSV</button>
          <button className="px-4 py-2 bg-primary text-surface text-[10px] font-label-caps tracking-widest uppercase hover:bg-primary-container transition-all">Filter</button>
        </div>
      </div>

      <div className="bg-white border border-outline-variant overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Order Detail</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Customer</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Purchase</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Status</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {orders.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-20 text-center text-on-surface-variant italic font-body-md opacity-50">
                  No orders found in the archive.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id} className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="p-4">
                    <p className="font-mono text-[11px] text-primary font-bold">#{order.id.slice(-8).toUpperCase()}</p>
                    <p className="text-[10px] text-on-surface-variant">{new Date(order.createdAt).toLocaleDateString(undefined, { dateStyle: 'medium' })}</p>
                  </td>
                  <td className="p-4">
                    <p className="font-body-md text-sm text-primary">{order.user?.name || 'Guest Checkout'}</p>
                    <p className="text-[10px] text-on-surface-variant truncate max-w-[150px]">{order.user?.email || 'No email provided'}</p>
                  </td>
                  <td className="p-4">
                    <div className="flex -space-x-2 overflow-hidden">
                      {order.items.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-surface-container overflow-hidden border border-outline-variant">
                          {item.variant.product.mainImage && (
                            <img src={item.variant.product.mainImage} alt="" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                          )}
                        </div>
                      ))}
                      {order.items.length > 3 && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white bg-surface-container-high text-[9px] font-bold text-primary border border-outline-variant">
                          +{order.items.length - 3}
                        </div>
                      )}
                    </div>
                    <p className="text-[9px] font-label-caps tracking-widest uppercase text-on-surface-variant mt-2">
                      {order.items.reduce((acc, item) => acc + item.quantity, 0)} Items
                    </p>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                      order.status === 'delivered' ? 'bg-tertiary-container text-tertiary' :
                      order.status === 'pending' ? 'bg-secondary-container text-on-secondary-container' :
                      order.status === 'shipped' ? 'bg-primary-container text-on-primary-container' :
                      'bg-surface-variant text-on-surface-variant'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        order.status === 'delivered' ? 'bg-tertiary' :
                        order.status === 'pending' ? 'bg-secondary' :
                        order.status === 'shipped' ? 'bg-primary' :
                        'bg-on-surface-variant'
                      }`}></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <p className="font-body-md text-sm text-primary font-bold tabular-nums">₹{(order.totalPaise / 100).toLocaleString()}</p>
                    <p className="text-[9px] text-on-surface-variant italic uppercase tracking-tighter">Paid via Razorpay</p>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

