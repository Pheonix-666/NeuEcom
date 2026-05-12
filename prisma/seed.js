const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.orderItem.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});

  // Create Categories
  const catMinimalist = await prisma.category.create({
    data: { name: 'Minimalist Woods' },
  });
  const catOrnate = await prisma.category.create({
    data: { name: 'Ornate Gilding' },
  });
  const catIndustrial = await prisma.category.create({
    data: { name: 'Industrial Metals' },
  });
  const catRustic = await prisma.category.create({
    data: { name: 'Rustic & Natural' },
  });

  // Create Products
  const products = [
    {
      name: 'Ethereal Form I',
      description: 'A study of light and shadow in motion.',
      price: 450.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBzvNO2i_6hS3abi8lv9GeQsehtZfqsK66tNExpo2_hM-Iot1kgg48S3YnhoTb-R_1QM0h-fyJixRpE7-6KrjWdGv8Yv73n76l5ftWKvjbwbDFnp5uTCvW1uefjEQjv2llgkHP6KOphu_og5NjqAx53JTOVQ575jpI33qnONLWb4ZgTmxkuvXWfnAhAKUdVdYlRhxhWM4ZSPR6LlPDSABPDRMqjGH3arTeL3viEXHZnmedniabWh1muIfoK44rhTLUrOChnyKWT958',
      type: 'Limited Edition Print',
      frameType: 'Maple Frame',
      categoryId: catMinimalist.id,
    },
    {
      name: 'Structural Study',
      description: 'Intricate architectural ink drawing.',
      price: 1200.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnTAXynGmkBygcA9jQ07iwsoB9MQAVxoGb-cUex5Kw1skArdETxjIeAnmQF_RG2lbwwAeYmyF5z-IGZeHLeOLv6LxOWaokv6Sc7zKWeUP__C2JsqFcRChtKUdKGgHlAAOw2ndeOgvwid6XAS7dbUEaUQiAFcz8T3zf3UX7dWbRu5M_3xfkmovCY2arBx_ElJiYQ_or1DW-6oGW1-KSMo_wBkSz9UPHiL_kpbFJTp28VE6nbDp1iZRaOUKE_ZgyCXUU197xHuY9WLqD',
      type: 'Original Ink on Paper',
      frameType: 'Metal Shell',
      categoryId: catIndustrial.id,
    },
    {
      name: 'Golden Hour',
      description: 'A warm abstract piece capturing the fading sun.',
      price: 980.00,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8zNU7P8w1Gijzfmn7oOAfs27AT6KbCB9AAkCToA1_7ruXNbUZ17z6pxWuAXKD5nfQL-0O1lADPdirocZUktFIBuGc9XJZ57PqiZwu5O_I1lx6uFsKN-rj4cu_5-a6CmXn9D51rhn5O64TE3SfOCZC2NwHzjNdAu7M_RXXk4E0uokhbEZpo26kyKtcWYty2RA2rApxEubBwbiufYEg4rSuTLgqrwizXi_gyr7T0GQB1pPkKGhDoir0VzUNPnLlOpjMglpz-L5GCQJ7',
      type: 'Mixed Media',
      frameType: 'Gilded Wood',
      categoryId: catOrnate.id,
    },
    {
      name: 'Vintage Gold Botanical',
      description: 'Classical botanical illustration with a touch of gold.',
      price: 450.00,
      image: '/vintage_gold.png',
      type: 'Original Print',
      frameType: 'Ornate Gold',
      categoryId: catOrnate.id,
    },
    {
      name: 'Modern Architecture',
      description: 'Sleek black and white photography.',
      price: 210.00,
      image: '/modern_black.png',
      type: 'B&W Photography',
      frameType: 'Matte Metal',
      categoryId: catIndustrial.id,
    },
    {
      name: 'Serene Landscape',
      description: 'Peaceful watercolor of the countryside.',
      price: 320.00,
      image: '/rustic_barnwood.png',
      type: 'Watercolor',
      frameType: 'Reclaimed Wood',
      categoryId: catRustic.id,
    },
  ];

  for (const p of products) {
    await prisma.product.create({
      data: p,
    });
  }

  console.log('Seed successful');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
