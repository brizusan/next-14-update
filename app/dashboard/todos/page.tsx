import { prisma } from "@/src/lib/prisma-client";
import { TodoNew, TodosGrid } from "@/src/todos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Todos Page",
  description: "Contenido de todos",
  openGraph: {
    title: "Todos Page",
    description: "Contenido de todos",
  },
};

async function getTodos() {
  const todos = await prisma.todo.findMany({
    orderBy: {
      completed: "desc",
    },
  });
  return todos;
}

export default async function TodosPage() {
  const todos = await getTodos();

  if (!todos)
    return (
      <div className="text-center text-2xl text-red-400 font-semibold">
        No hay datos de Todos
      </div>
    );

  return (
    <>
      <h1 className="text-center text-2xl my-4 font-bold">Rest Api todos</h1>
      <TodoNew />
      <TodosGrid todos={todos} />
    </>
  );
}
