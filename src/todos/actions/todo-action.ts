"use server";
import { prisma } from "@/src/lib/prisma-client";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function actionToggleTodo(
  id: Todo["id"],
  completed: Todo["completed"]
): Promise<Todo> {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });

  if (!todo) {
    throw new Error("Todo not found");
  }
  const update = await prisma.todo.update({
    where: { id },
    data: { completed },
  });
  revalidatePath("/dashboard/actions");
  return update;
}

export async function actionCreateTodo(description: Todo["description"]): Promise<Todo | { message: string }> {
  try {
    const newTodo = await prisma.todo.create({
      data: {
        description,
      },
    });
    revalidatePath("/dashboard/actions");
    return newTodo;
  } catch (error) {
    console.error(error);
    return {
      message: "Something went wrong",
    }
  }
}

export async function actionDeleteTodos() {
  try {
    await prisma.todo.deleteMany({
      where: {
        completed: true,
      },
    });
    revalidatePath("/dashboard/actions");
  } catch (error) {
    console.error(error);
  }
}
