import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { z } from 'zod';

const checkoutSchema = z.object({
  email: z.string().email(),
  items: z.array(z.object({
    variantId: z.string(),
    productId: z.string(),
    quantity: z.number().min(1),
    pricePaise: z.number(),
  })),
  totalPaise: z.number(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = checkoutSchema.parse(body);

    const order = await prisma.order.create({
      data: {
        subtotalPaise: validatedData.totalPaise,
        gstPaise: Math.round(validatedData.totalPaise * 0.18), // 18% GST example
        totalPaise: Math.round(validatedData.totalPaise * 1.18),
        status: 'pending',
        items: {
          create: validatedData.items.map((item) => ({
            productVariantId: item.variantId,
            quantity: item.quantity,
            pricePaise: item.pricePaise,
          })),
        },
      },
    });

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (error) {
    console.error('Checkout error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid data', details: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to process checkout' }, { status: 500 });
  }
}
