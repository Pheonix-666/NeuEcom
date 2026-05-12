import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { z } from 'zod';

const checkoutSchema = z.object({
  email: z.string().email(),
  items: z.array(z.object({
    id: z.string(),
    quantity: z.number().min(1),
    price: z.number(),
  })),
  total: z.number(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = checkoutSchema.parse(body);

    const order = await prisma.order.create({
      data: {
        email: validatedData.email,
        total: validatedData.total,
        status: 'PENDING',
        items: {
          create: validatedData.items.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (error) {
    console.error('Checkout error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to process checkout' }, { status: 500 });
  }
}
