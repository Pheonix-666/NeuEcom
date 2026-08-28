import prisma from '@/lib/db';

export default async function AdminInquiriesPage() {
  const inquiries = await prisma.bespokeInquiry.findMany({
    include: { user: true },
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="space-y-8">
      <div className="bg-white border border-outline-variant overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant">
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Inquiry Date</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Customer</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Subject</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Status</th>
              <th className="p-4 font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {inquiries.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-20 text-center text-on-surface-variant italic font-body-md opacity-50">
                  No bespoke inquiries received yet.
                </td>
              </tr>
            ) : (
              inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-surface-container-lowest transition-colors group">
                  <td className="p-4">
                    <p className="font-body-md text-sm text-primary">{new Date(inquiry.createdAt).toLocaleDateString()}</p>
                    <p className="text-[10px] text-on-surface-variant">{new Date(inquiry.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                  </td>
                  <td className="p-4">
                    <p className="font-body-md text-sm text-primary">{inquiry.user?.name || 'Anonymous'}</p>
                    <p className="text-[10px] text-on-surface-variant">{inquiry.user?.email || 'No email'}</p>
                  </td>
                  <td className="p-4">
                    <p className="font-body-md text-sm text-primary font-medium">{inquiry.artworkType}</p>
                    <p className="text-[10px] text-on-surface-variant truncate max-w-[200px]">{inquiry.notes || 'No additional notes provided'}</p>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-[9px] font-bold uppercase tracking-wider rounded-sm ${
                      inquiry.status === 'submitted' ? 'bg-secondary-container text-on-secondary-container' :
                      inquiry.status === 'reviewing' ? 'bg-primary-container text-on-primary-container' :
                      'bg-tertiary-container text-tertiary'
                    }`}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="px-3 py-1.5 border border-outline-variant text-[10px] font-label-caps tracking-widest uppercase hover:bg-primary hover:text-surface transition-all">Review</button>
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
