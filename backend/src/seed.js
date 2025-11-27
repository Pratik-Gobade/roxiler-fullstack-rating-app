import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import fs from 'fs';

const prisma = new PrismaClient();

async function main() {
  const data = JSON.parse(fs.readFileSync('./src/transactions.json', 'utf-8'));

  for (let item of data) {
    await prisma.transaction.create({
      data: {
        title: item.title,
        description: item.description,
        price: item.price,
        category: item.category,
        sold: item.sold,
        dateOfSale: new Date(item.dateOfSale),
      }
    });
  }

  console.log("Data imported successfully!");
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());