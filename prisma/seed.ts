// prisma/seed.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const productInfo = {
    'Camera': ['Camera fotografica', 1090.90, 50],
    'Celular': ['Smartphone', 1500.00, 40],
    'Livro': ['Livro de aventura', 44.99, 50],
  };

async function main() {
    for (const [name, [description, price, quantity]] of Object.entries(productInfo)) {
        await prisma.product.upsert({
          where: { name },
          update: { name, description, price, quantity },
          create: { name, description, price, quantity },
        });
      }

  console.log('Seed data created successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
