import prisma from '@/lib/db';

export default async function AdminNewslettersPage() {
  const subscribers = await prisma.newsletter.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center bg-white p-6 border border-outline-variant">
        <div>
          <p className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant mb-1">Total Subscribers</p>
          <p className="font-headline-sm text-xl text-primary">{subscribers.length}</p>
        </div>
        <button className="px-6 py-3 bg-primary text-surface font-label-caps text-[11px] tracking-widest uppercase hover:bg-primary-container transition-all">
          Export Email List
        </button>
      </div>

      <div className="bg-white border border-outline-variant overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Email Address</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Subscription Date</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Status</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {subscribers.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-20 text-center text-on-surface-variant italic font-body-md opacity-50">
                  No subscribers in the list.
                </td>
              </tr>
            ) : (
              subscribers.map((sub) => (
                <tr key={sub.id} className="hover:bg-surface-container-lowest transition-colors">
                  <td className="p-4 font-body-md text-sm text-primary font-medium">{sub.email}</td>
                  <td className="p-4 font-body-md text-sm text-on-surface-variant">{new Date(sub.createdAt).toLocaleDateString()}</td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 bg-tertiary-container text-tertiary text-[9px] font-bold uppercase tracking-widest rounded-sm">
                      {sub.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="material-symbols-outlined text-on-surface-variant hover:text-error transition-colors text-[20px]">person_remove</button>
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
