import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.newsletter.deleteMany();
  await prisma.bespokeInquiry.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();
  await prisma.collection.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // Categories
  const catMinimalist = await prisma.category.create({ data: { name: 'Minimalist Woods' } });
  const catOrnate = await prisma.category.create({ data: { name: 'Ornate Gilding' } });
  const catIndustrial = await prisma.category.create({ data: { name: 'Industrial Metals' } });
  const catRustic = await prisma.category.create({ data: { name: 'Rustic & Natural' } });

  // Collections
  const heritageCollection = await prisma.collection.create({
    data: {
      name: 'Heritage Collection',
      description: 'Timeless artisanal frames crafted from sustainable hardwoods.',
    },
  });

  const products = [
    {
      name: 'Ethereal Form I',
      slug: 'ethereal-form-i',
      description: 'A study of light and shadow in motion.',
      mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBzvNO2i_6hS3abi8lv9GeQsehtZfqsK66tNExpo2_hM-Iot1kgg48S3YnhoTb-R_1QM0h-fyJixRpE7-6KrjWdGv8Yv73n76l5ftWKvjbwbDFnp5uTCvW1uefjEQjv2llgkHP6KOphu_og5NjqAx53JTOVQ575jpI33qnONLWb4ZgTmxkuvXWfnAhAKUdVdYlRhxhWM4ZSPR6LlPDSABPDRMqjGH3arTeL3viEXHZnmedniabWh1muIfoK44rhTLUrOChnyKWT958',
      type: 'Limited Edition Print',
      categoryId: catMinimalist.id,
      collectionId: heritageCollection.id,
      isFeatured: true,
      variants: [
        { material: 'Maple', size: '11x14', pricePaise: 45000, stockQty: 20, sku: 'EF-M1114' }
      ]
    },
    {
      name: 'Structural Study',
      slug: 'structural-study',
      description: 'Intricate architectural ink drawing.',
      mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnTAXynGmkBygcA9jQ07iwsoB9MQAVxoGb-cUex5Kw1skArdETxjIeAnmQF_RG2lbwwAeYmyF5z-IGZeHLeOLv6LxOWaokv6Sc7zKWeUP__C2JsqFcRChtKUdKGgHlAAOw2ndeOgvwid6XAS7dbUEaUQiAFcz8T3zf3UX7dWbRu5M_3xfkmovCY2arBx_ElJiYQ_or1DW-6oGW1-KSMo_wBkSz9UPHiL_kpbFJTp28VE6nbDp1iZRaOUKE_ZgyCXUU197xHuY9WLqD',
      type: 'Original Ink on Paper',
      categoryId: catIndustrial.id,
      isFeatured: true,
      variants: [
        { material: 'Metal', size: '16x20', pricePaise: 120000, stockQty: 10, sku: 'SS-M1620' }
      ]
    },
    {
      name: 'Golden Hour',
      slug: 'golden-hour',
      description: 'A warm abstract piece capturing the fading sun.',
      mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8zNU7P8w1Gijzfmn7oOAfs27AT6KbCB9AAkCToA1_7ruXNbUZ17z6pxWuAXKD5nfQL-0O1lADPdirocZUktFIBuGc9XJZ57PqiZwu5O_I1lx6uFsKN-rj4cu_5-a6CmXn9D51rhn5O64TE3SfOCZC2NwHzjNdAu7M_RXXk4E0uokhbEZpo26kyKtcWYty2RA2rApxEubBwbiufYEg4rSuTLgqrwizXi_gyr7T0GQB1pPkKGhDoir0VzUNPnLlOpjMglpz-L5GCQJ7',
      type: 'Mixed Media',
      categoryId: catOrnate.id,
      isFeatured: true,
      variants: [
        { material: 'Gilded Wood', size: '20x24', pricePaise: 98000, stockQty: 15, sku: 'GH-G2024' }
      ]
    }
  ];

  for (const p of products) {
    const { variants, ...productData } = p;
    const createdProduct = await prisma.product.create({
      data: productData,
    });
    
    for (const v of variants) {
      await prisma.productVariant.create({
        data: {
          ...v,
          productId: createdProduct.id,
        },
      });
    }
  }

  console.log('Seeding complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
