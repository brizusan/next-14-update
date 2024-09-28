import { Todo } from "@prisma/client";

export async function updateTodo(
  id: Todo["id"],
  completed: Todo["completed"]
): Promise<Todo> {
  
  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({ completed }),
    headers: {
      "Content-Type": "application/json",
    }
  }).then((res) => res.json());
  return todo;
}


export async function createTodo(description: Todo["description"]):Promise<Todo> {

  const newTodo = await fetch("/api/todos", {
    method: "POST",
    body: JSON.stringify({ description }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return newTodo
}


export async function deleteCompletedTodos() {
  const res = await fetch("/api/todos", {
    method: "DELETE",
  }).then((res) => res.json());
  return res
}
