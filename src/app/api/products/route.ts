import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get('featured');

  try {
    const products = await prisma.product.findMany({
      where: featured === 'true' ? { isFeatured: true, status: 'active' } : { status: 'active' },
      include: {
        category: true,
        collection: true,
        variants: true,
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
