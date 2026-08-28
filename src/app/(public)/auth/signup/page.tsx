import Link from 'next/link';
import { signUp } from '@/lib/actions/auth';

export default function SignupPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-12 md:py-24">
      <div className="w-full max-w-md bg-white border border-outline-variant p-8 md:p-12 animate-fade-in-up">
        <div className="text-center mb-10">
          <h1 className="font-display-lg text-3xl text-primary mb-3">Join the Atelier</h1>
          <p className="font-body-md text-on-surface-variant text-sm tracking-wide">
            Join our community of art lovers and bespoke framing enthusiasts.
          </p>
        </div>

        <form action={signUp} className="space-y-6">
          <div className="space-y-1.5">
            <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Full Name</label>
            <input 
              name="name" 
              type="text" 
              required 
              className="w-full bg-surface-container-low border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md"
              placeholder="Julianne Moore"
            />
          </div>

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
            <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Choose Password</label>
            <input 
              name="password" 
              type="password" 
              required 
              className="w-full bg-surface-container-low border border-outline-variant p-3 text-sm focus:outline-primary transition-all font-body-md"
              placeholder="••••••••"
            />
          </div>

          <p className="text-[10px] text-on-surface-variant font-body-md leading-relaxed">
            By creating an account, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>

          <button 
            type="submit" 
            className="w-full bg-primary text-surface py-4 font-label-caps text-[11px] tracking-widest uppercase mt-4 hover:bg-primary-container transition-all"
          >
            Create Account
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-outline-variant text-center">
          <p className="text-xs text-on-surface-variant font-body-md mb-4">Already have an account?</p>
          <Link 
            href="/auth/login" 
            className="inline-block px-8 py-3 border border-primary text-primary font-label-caps text-[10px] tracking-widest uppercase hover:bg-surface-container transition-all"
          >
            Sign In Instead
          </Link>
        </div>
      </div>
    </div>
  );
}
