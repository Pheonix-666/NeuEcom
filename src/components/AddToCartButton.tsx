'use client';

import { useCart, CartItem } from '@/lib/store';
import { useState } from 'react';

export default function AddToCartButton({ item }: { item: Omit<CartItem, 'quantity'> }) {
  const addItem = useCart((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({ ...item, quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button 
      onClick={handleAdd}
      className={`w-full py-5 font-label-caps text-[12px] uppercase tracking-widest transition-all duration-300 border border-primary ${
        added 
          ? 'bg-secondary text-on-secondary border-secondary' 
          : 'bg-primary text-surface hover:bg-transparent hover:text-primary'
      }`}
    >
      {added ? 'Added to Selection' : 'Add to Collection'}
    </button>
  );
}
