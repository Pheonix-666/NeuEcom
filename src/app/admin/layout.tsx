import Link from 'next/link';
import { headers } from 'next/headers';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const user = session?.user;

  if (!user || user.role !== 'admin') {
    redirect('/auth/login');
  }

  const headerList = await headers();
  const pathname = headerList.get('x-invoke-path') || '';

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: 'dashboard' },
    { name: 'Products', href: '/admin/products', icon: 'inventory_2' },
    { name: 'Orders', href: '/admin/orders', icon: 'shopping_cart' },
    { name: 'Categories', href: '/admin/categories', icon: 'category' },
    { name: 'Inquiries', href: '/admin/inquiries', icon: 'mail' },
    { name: 'Users', href: '/admin/users', icon: 'group' },
    { name: 'Newsletters', href: '/admin/newsletters', icon: 'mark_email_read' },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-surface border-r border-outline-variant flex flex-col sticky top-0 h-screen">
        <div className="p-8 border-b border-primary-container">
          <Link href="/" className="font-display-lg text-xl tracking-tight text-surface">
            GLFA <span className="text-[10px] uppercase tracking-widest block opacity-60">Admin Portal</span>
          </Link>
        </div>
        
        <nav className="flex-grow p-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? 'bg-surface text-primary' 
                    : 'text-surface-variant hover:bg-primary-container hover:text-surface'
                }`}
              >
                <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-primary' : 'opacity-70 group-hover:opacity-100'}`}>
                  {item.icon}
                </span>
                <span className="font-label-caps text-[11px] tracking-widest uppercase">
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-primary-container">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary text-[10px] font-bold">
              AD
            </div>
            <div>
              <p className="text-[10px] font-label-caps tracking-wider uppercase text-surface">Administrator</p>
              <p className="text-[9px] text-surface-variant opacity-60">admin@glfa.art</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-outline-variant flex items-center justify-between px-12 sticky top-0 z-10">
          <h2 className="font-headline-sm text-lg text-primary">
            {navItems.find(item => pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href)))?.name || 'Dashboard'}
          </h2>
          
          <div className="flex items-center gap-6">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">
              notifications
            </button>
            <div className="h-8 w-px bg-outline-variant"></div>
            <Link href="/" className="text-[10px] font-label-caps tracking-widest uppercase text-on-surface-variant hover:text-primary transition-colors">
              View Site
            </Link>
          </div>
        </header>

        <div className="p-12 animate-fade-in">
          {children}
        </div>
      </main>
    </div>
  );
}
