import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: {
      email: 'admin@prisma.io'
    },
    update: {},
    create: {
      email: 'admin@prisma.io',
      role: {
        create: [
          {
            role: 'admin'
          }
        ]
      }
    }
  });
  console.log({ admin })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })