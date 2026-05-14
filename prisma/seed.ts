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

  const abstractHorizons = await prisma.collection.create({
    data: {
      name: 'Abstract Horizons',
      description: 'Bold expressive works that push the boundaries of perception.',
    },
  });

  const modernClassics = await prisma.collection.create({
    data: {
      name: 'Modern Classics',
      description: 'Elegant, timeless designs for the contemporary home.',
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
    },
    {
      name: 'Midnight Forest',
      slug: 'midnight-forest',
      description: 'A moody, minimalist study of deep forest greens at night.',
      mainImage: '/products/midnight-forest.png',
      type: 'Limited Edition Canvas',
      categoryId: catRustic.id,
      collectionId: abstractHorizons.id,
      isFeatured: false,
      variants: [
        { material: 'Dark Walnut', size: '24x36', pricePaise: 185000, stockQty: 5, sku: 'MF-W2436' }
      ]
    },
    {
      name: 'Urban Reflection',
      slug: 'urban-reflection',
      description: 'Architectural precision meets fluid urban lighting.',
      mainImage: '/products/urban-reflection.png',
      type: 'Architectural Sketch',
      categoryId: catIndustrial.id,
      collectionId: modernClassics.id,
      isFeatured: false,
      variants: [
        { material: 'Brushed Steel', size: '18x24', pricePaise: 110000, stockQty: 8, sku: 'UR-S1824' }
      ]
    },
    {
      name: 'Velvet Whisper',
      slug: 'velvet-whisper',
      description: 'Soft textures and gold leaf accents in an elegant abstract composition.',
      mainImage: '/products/velvet-whisper.png',
      type: 'Gold Leaf Abstract',
      categoryId: catOrnate.id,
      collectionId: modernClassics.id,
      isFeatured: true,
      variants: [
        { material: 'Antique Gold', size: '20x20', pricePaise: 145000, stockQty: 12, sku: 'VW-G2020' }
      ]
    },
    {
      name: 'Nordic Silence',
      slug: 'nordic-silence',
      description: 'A peaceful, minimalist landscape of the high North.',
      mainImage: '/products/nordic-silence.png',
      type: 'Fine Art Print',
      categoryId: catMinimalist.id,
      collectionId: heritageCollection.id,
      isFeatured: false,
      variants: [
        { material: 'Light Oak', size: '30x40', pricePaise: 220000, stockQty: 7, sku: 'NS-O3040' }
      ]
    },
    {
      name: 'Crimson Tide',
      slug: 'crimson-tide',
      description: 'An energetic burst of deep reds and charcoal sweeps.',
      mainImage: '/products/crimson-tide.png',
      type: 'Modern Abstract',
      categoryId: catRustic.id,
      collectionId: abstractHorizons.id,
      isFeatured: true,
      variants: [
        { material: 'Natural Ash', size: '24x24', pricePaise: 135000, stockQty: 10, sku: 'CT-A2424' }
      ]
    },
    {
      name: 'Celestial Path',
      slug: 'celestial-path',
      description: 'A mystical exploration of cosmic nebulae and stardust.',
      mainImage: '/products/celestial-path.png',
      type: 'Mixed Media on Wood',
      categoryId: catOrnate.id,
      collectionId: abstractHorizons.id,
      isFeatured: false,
      variants: [
        { material: 'Gilded Maple', size: '16x20', pricePaise: 95000, stockQty: 15, sku: 'CP-M1620' }
      ]
    },
    {
      name: 'Sienna Sands',
      slug: 'sienna-sands',
      description: 'Warm desert dunes captured in rich ochre and sienna tones.',
      mainImage: 'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?q=80&w=1000&auto=format&fit=crop',
      type: 'Textured Landscape',
      categoryId: catRustic.id,
      collectionId: heritageCollection.id,
      isFeatured: false,
      variants: [
        { material: 'Rustic Pine', size: '20x30', pricePaise: 88000, stockQty: 20, sku: 'SS-P2030' }
      ]
    },
    {
      name: 'Iron & Ivory',
      slug: 'iron-ivory',
      description: 'Geometric minimalism in a stark architectural contrast.',
      mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
      type: 'Geometric Abstract',
      categoryId: catIndustrial.id,
      collectionId: modernClassics.id,
      isFeatured: false,
      variants: [
        { material: 'Blackened Iron', size: '24x24', pricePaise: 125000, stockQty: 9, sku: 'II-I2424' }
      ]
    },
    {
      name: 'Royal Glimmer',
      slug: 'royal-glimmer',
      description: 'A regal composition of gold leaf and deep navy textures.',
      mainImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1000&auto=format&fit=crop',
      type: 'Luxury Abstract',
      categoryId: catOrnate.id,
      collectionId: modernClassics.id,
      isFeatured: true,
      variants: [
        { material: 'Polished Brass', size: '12x12', pricePaise: 75000, stockQty: 25, sku: 'RG-B1212' }
      ]
    },
    {
      name: 'Zen Garden',
      slug: 'zen-garden',
      description: 'Minimalist ink wash capturing the essence of tranquility.',
      mainImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop',
      type: 'Ink on Silk',
      categoryId: catMinimalist.id,
      collectionId: heritageCollection.id,
      isFeatured: false,
      variants: [
        { material: 'Bamboo', size: '18x36', pricePaise: 115000, stockQty: 6, sku: 'ZG-B1836' }
      ]
    },
    {
      name: 'Oceanic Depth',
      slug: 'oceanic-depth',
      description: 'Immersive teal and navy flows representing the deep sea.',
      mainImage: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1000&auto=format&fit=crop',
      type: 'Fluid Acrylic',
      categoryId: catRustic.id,
      collectionId: abstractHorizons.id,
      isFeatured: false,
      variants: [
        { material: 'Driftwood', size: '36x48', pricePaise: 275000, stockQty: 3, sku: 'OD-D3648' }
      ]
    },
    {
      name: 'Marble Echo',
      slug: 'marble-echo',
      description: 'The timeless elegance of marble veins in a modern layout.',
      mainImage: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=1000&auto=format&fit=crop',
      type: 'Digital Print on Metal',
      categoryId: catIndustrial.id,
      collectionId: modernClassics.id,
      isFeatured: false,
      variants: [
        { material: 'White Aluminum', size: '20x20', pricePaise: 92000, stockQty: 18, sku: 'ME-A2020' }
      ]
    },
    {
      name: 'Amber Glow',
      slug: 'amber-glow',
      description: 'Warm lighting and wooden textures for a cozy atmosphere.',
      mainImage: 'https://images.unsplash.com/photo-1502481851512-e9e2529bbbf9?q=80&w=1000&auto=format&fit=crop',
      type: 'Atmospheric Photography',
      categoryId: catRustic.id,
      collectionId: heritageCollection.id,
      isFeatured: false,
      variants: [
        { material: 'Cherry Wood', size: '16x24', pricePaise: 105000, stockQty: 11, sku: 'AG-C1624' }
      ]
    },
    {
      name: 'Copper Rhythm',
      slug: 'copper-rhythm',
      description: 'Rhythmic patterns hammered into warm industrial copper.',
      mainImage: 'https://images.unsplash.com/photo-1558444479-c86e10556b8c?q=80&w=1000&auto=format&fit=crop',
      type: 'Metal Relief Art',
      categoryId: catIndustrial.id,
      collectionId: abstractHorizons.id,
      isFeatured: false,
      variants: [
        { material: 'Hammered Copper', size: '24x30', pricePaise: 165000, stockQty: 4, sku: 'CR-C2430' }
      ]
    },
    {
      name: 'Platinum Lace',
      slug: 'platinum-lace',
      description: 'Delicate lace patterns rendered in a shimmering platinum finish.',
      mainImage: 'https://images.unsplash.com/photo-1515155075601-23009d0cb6d4?q=80&w=1000&auto=format&fit=crop',
      type: 'Fine Ornate Pattern',
      categoryId: catOrnate.id,
      collectionId: modernClassics.id,
      isFeatured: false,
      variants: [
        { material: 'Silver Leaf', size: '14x14', pricePaise: 82000, stockQty: 14, sku: 'PL-S1414' }
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

