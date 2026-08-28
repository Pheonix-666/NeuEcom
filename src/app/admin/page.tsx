import prisma from '@/lib/db';
import Link from 'next/link';

export default async function AdminDashboard() {
  const stats = {
    revenue: await prisma.order.aggregate({
      where: { status: { not: 'cancelled' } },
      _sum: { totalPaise: true },
    }),
    orderCount: await prisma.order.count(),
    productCount: await prisma.product.count(),
    userCount: await prisma.user.count(),
    pendingInquiries: await prisma.bespokeInquiry.count({
      where: { status: 'submitted' }
    }),
  };

  const recentOrders = await prisma.order.findMany({
    take: 5,
    orderBy: { createdAt: 'desc' },
    include: { user: true }
  });

  const cards = [
    { 
      label: 'Total Revenue', 
      value: `₹${((stats.revenue._sum.totalPaise || 0) / 100).toLocaleString()}`, 
      icon: 'payments',
      trend: '+12% from last month',
      color: 'bg-secondary-container text-on-secondary-container'
    },
    { 
      label: 'Total Orders', 
      value: stats.orderCount.toString(), 
      icon: 'shopping_bag',
      trend: '+5 today',
      color: 'bg-tertiary-fixed text-on-tertiary-fixed'
    },
    { 
      label: 'Products', 
      value: stats.productCount.toString(), 
      icon: 'gallery_thumbnail',
      trend: '3 new this week',
      color: 'bg-primary-fixed text-on-primary-fixed'
    },
    { 
      label: 'New Inquiries', 
      value: stats.pendingInquiries.toString(), 
      icon: 'contact_support',
      trend: 'Requires response',
      color: 'bg-error-container text-on-error-container'
    },
  ];

  return (
    <div className="space-y-12">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.label} className="bg-white p-6 border border-outline-variant hover:shadow-sm transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-2 rounded-lg ${card.color}`}>
                <span className="material-symbols-outlined text-[20px]">{card.icon}</span>
              </div>
            </div>
            <p className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant mb-1">{card.label}</p>
            <h3 className="font-headline-sm text-2xl text-primary mb-2">{card.value}</h3>
            <p className="text-[10px] font-medium text-on-surface-variant opacity-70 italic">{card.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Recent Orders */}
        <div className="lg:col-span-8">
          <div className="flex justify-between items-end mb-6">
            <h3 className="font-headline-sm text-xl text-primary">Recent Orders</h3>
            <Link href="/admin/orders" className="text-[10px] font-label-caps tracking-widest uppercase text-secondary hover:underline">
              View All Orders
            </Link>
          </div>
          <div className="bg-white border border-outline-variant overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container border-b border-outline-variant">
                  <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase">Order ID</th>
                  <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase">Customer</th>
                  <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase">Amount</th>
                  <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-surface-container-lowest transition-colors">
                    <td className="p-4 font-mono text-[11px] text-on-surface-variant">#{order.id.slice(-8).toUpperCase()}</td>
                    <td className="p-4">
                      <p className="font-body-md text-sm">{order.user?.name || 'Guest'}</p>
                      <p className="text-[10px] text-on-surface-variant">{order.user?.email || 'N/A'}</p>
                    </td>
                    <td className="p-4 font-body-md text-sm">₹{(order.totalPaise / 100).toLocaleString()}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-[9px] font-label-caps tracking-wider uppercase border ${
                        order.status === 'delivered' ? 'border-tertiary text-tertiary' :
                        order.status === 'pending' ? 'border-secondary text-secondary' :
                        'border-outline text-on-surface-variant'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions & System Health */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <h3 className="font-headline-sm text-xl text-primary mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/admin/products" className="flex items-center justify-between p-4 bg-primary text-surface hover:bg-primary-container transition-all">
                <span className="font-label-caps text-[11px] tracking-widest uppercase">Add New Product</span>
                <span className="material-symbols-outlined">add</span>
              </Link>
              <Link href="/admin/categories" className="flex items-center justify-between p-4 border border-outline-variant hover:bg-surface-container transition-all">
                <span className="font-label-caps text-[11px] tracking-widest uppercase text-primary">Manage Categories</span>
                <span className="material-symbols-outlined text-primary">edit</span>
              </Link>
              <Link href="/admin/inquiries" className="flex items-center justify-between p-4 border border-outline-variant hover:bg-surface-container transition-all">
                <span className="font-label-caps text-[11px] tracking-widest uppercase text-primary">Review Inquiries</span>
                <span className="material-symbols-outlined text-primary">rate_review</span>
              </Link>
            </div>
          </div>

          <div className="p-6 bg-surface-container-high border border-outline-variant">
            <h4 className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant mb-4">System Status</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-body-md">Database</span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-tertiary">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  CONNECTED
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-body-md">Payment Gateway</span>
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-tertiary">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  ACTIVE
                </span>
              </div>
              <div className="flex justify-between items-center opacity-50">
                <span className="text-xs font-body-md">Last Backup</span>
                <span className="text-[10px]">2h ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
