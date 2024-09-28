import { prisma } from "@/src/lib/prisma-client";

async function main() {
  try {
    await prisma.todo.deleteMany();
    await prisma.todo.createMany({
      data: [
        {
          description: "Todo 1",
          completed: true,
        },
        {
          description: "Todo 2",
        },
        {
          description: "Todo 3",
        },
        {
          description: "Todo 4",
        },
        {
          description: "Todo 5",
        },
      ],
    });
  } catch (error) {
    console.log(error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
