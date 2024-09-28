import { Metadata } from "next";
import { TodoNew, TodosGrid } from "@/src/todos";
import { prisma } from "@/src/lib/prisma-client";

export const dynamic = 'foce-dynamic'
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Server Actions Page",
  description: "Contenido de Server Actions",
  openGraph: {
    title: "Server Actions Page",
    description: "Contenido de Server Actions",
  },
};

async function getTodos() {
  return await prisma.todo.findMany({
    orderBy: {
      completed: "desc",
    },
  });
}

export default async function ServerActionsPage() {
  const todos = await getTodos();
  return (
    <>
      <h1 className="text-center text-2xl my-4 font-bold">
        Server Actions todos
      </h1>
      <TodoNew />
      <TodosGrid todos={todos} />
    </>
  );
}
