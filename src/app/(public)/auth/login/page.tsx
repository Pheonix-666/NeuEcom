import Link from 'next/link';
import { login } from '@/lib/actions/auth';

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 md:py-24">
      <div className="w-full max-w-md bg-white border border-outline-variant p-8 md:p-12 animate-fade-in-up">
        <div className="text-center mb-10">
          <h1 className="font-display-lg text-3xl text-primary mb-3">Welcome Back</h1>
          <p className="font-body-md text-on-surface-variant text-sm tracking-wide">
            Enter the gallery to manage your artisanal collections.
          </p>
        </div>

        <form action={login} className="space-y-6">
          <div className="space-y-1.5">
            <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Email Address</label>
            <input 
              name="email" 
              type="email" 
              required 
              className="w-full bg-surface-container-low border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md"
              placeholder="art.collector@example.com"
            />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Password</label>
              <Link href="#" className="text-[9px] font-label-caps tracking-widest uppercase text-secondary hover:underline">Forgot?</Link>
            </div>
            <input 
              name="password" 
              type="password" 
              required 
              className="w-full bg-surface-container-low border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary text-surface py-4 font-label-caps text-[11px] tracking-widest uppercase mt-4 hover:bg-primary-container transition-all"
          >
            Sign In
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-outline-variant text-center">
          <p className="text-xs text-on-surface-variant font-body-md mb-4">New to Good Luck Frame and Art?</p>
          <Link 
            href="/auth/signup" 
            className="inline-block px-8 py-3 border border-primary text-primary font-label-caps text-[10px] tracking-widest uppercase hover:bg-surface-container transition-all"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
