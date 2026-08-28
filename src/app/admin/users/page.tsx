import prisma from '@/lib/db';

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    include: {
      _count: {
        select: { orders: true, inquiries: true }
      }
    },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-8">
      <div className="bg-white border border-outline-variant overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">User</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Role</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Activity</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Joined</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-surface-container-lowest transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary-fixed flex items-center justify-center text-primary text-xs font-bold border border-outline-variant">
                      {(user.name || user.email).substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-body-md text-sm text-primary font-medium">{user.name || 'Unnamed User'}</p>
                      <p className="text-[10px] text-on-surface-variant">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest border ${
                    user.role === 'admin' ? 'border-primary text-primary' : 'border-outline text-on-surface-variant opacity-60'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-4">
                    <div>
                      <p className="text-[9px] font-label-caps text-on-surface-variant opacity-60 uppercase">Orders</p>
                      <p className="text-xs font-bold">{user._count.orders}</p>
                    </div>
                    <div>
                      <p className="text-[9px] font-label-caps text-on-surface-variant opacity-60 uppercase">Inquiries</p>
                      <p className="text-xs font-bold">{user._count.inquiries}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-[11px] text-on-surface-variant">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4 text-right">
                  <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors text-[20px]">manage_accounts</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
