'use client';

import { useCart } from '@/lib/store';
import Link from 'next/link';
import { useState } from 'react';

export default function Cart() {
  const { items, removeItem, total, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (!email) {
      alert('Please enter your email address.');
      return;
    }

    setIsCheckingOut(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          items: items.map(item => ({ variantId: item.id, productId: item.productId, quantity: item.quantity, pricePaise: item.pricePaise })),
          totalPaise: total(),
        }),
      });

      const data = await response.json();
      if (data.success) {
        setOrderComplete(data.orderId);
        clearCart();
      } else {
        alert('Checkout failed: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred during checkout.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="p-12 text-center bg-surface-container-low border border-outline-variant animate-fade-in">
        <span className="material-symbols-outlined text-5xl text-secondary mb-6">verified</span>
        <h3 className="font-display-lg text-2xl mb-4 text-primary">Order Confirmed</h3>
        <p className="font-body-md text-on-surface-variant mb-8">
          Thank you for your selection. We have sent a confirmation email to <strong>{email}</strong>.<br/>
          Order ID: {orderComplete}
        </p>
        <Link href="/" className="inline-block bg-primary text-surface px-8 py-4 font-label-caps text-[11px] tracking-widest uppercase">
          RETURN TO GALLERY
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="p-8 text-center bg-surface-container-low border border-outline-variant">
        <p className="font-body-md text-on-surface-variant mb-4">Your collection is empty.</p>
        <Link href="/catalog" className="text-primary font-label-caps text-[12px] tracking-widest underline underline-offset-4">
          EXPLORE CATALOG
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border border-outline-variant p-6 shadow-sm">
      <h3 className="font-headline-sm text-lg mb-6 border-b border-outline-variant pb-4">Your Selection</h3>
      <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {items.map((item) => (
          <div key={item.id} className="flex gap-4 items-start">
            <div className="w-20 h-20 bg-surface-container flex-shrink-0">
              <img src={item.mainImage} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <h4 className="font-body-md text-sm font-medium">{item.name}</h4>
              <p className="font-body-sm text-xs text-on-surface-variant mb-2">{item.material} {item.size ? `| ${item.size}` : ''}</p>
              <div className="flex justify-between items-center">
                <span className="font-label-caps text-xs">₹{(item.pricePaise / 100).toLocaleString()} x {item.quantity}</span>
                <button 
                  onClick={() => removeItem(item.id)}
                  className="text-[10px] uppercase tracking-widest text-error hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-outline-variant pt-6 space-y-6">
        <div className="space-y-2">
          <label className="font-label-caps text-[10px] tracking-widest uppercase text-on-surface-variant">Order Confirmation Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="curator@example.com" 
            className="w-full border-b border-outline-variant bg-transparent py-2 focus:outline-none focus:border-primary transition-colors text-sm"
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-label-caps text-xs tracking-widest uppercase">Subtotal</span>
          <span className="font-headline-sm text-lg">₹{(total() / 100).toLocaleString()}</span>
        </div>
        <button 
          onClick={handleCheckout}
          disabled={isCheckingOut}
          className={`w-full py-4 font-label-caps text-[11px] tracking-widest uppercase transition-colors ${
            isCheckingOut ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed' : 'bg-primary text-surface hover:bg-primary-container'
          }`}
        >
          {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
        </button>
      </div>
    </div>
  );
}

