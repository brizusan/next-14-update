"use client";
import { Todo } from "@prisma/client";
import { TodoItem } from "./TodoItem";
import * as todoService from "../services";
import { usePathname, useRouter } from "next/navigation";
import { actionToggleTodo } from "../actions/todo-action";


type TodosGridProps = {
  todos: Todo[];
};

export const TodosGrid = ({ todos }: TodosGridProps) => {
  const router = useRouter()
  const pathName = usePathname();
  const isServerAction = pathName === "/dashboard/actions";

  const toogleTodo = (id: Todo["id"], completed: Todo["completed"]) => {

    if(isServerAction) {
      // server actions
      actionToggleTodo(id, completed);
    }else{
      // client actions
      todoService.updateTodo(id, completed);
      router.refresh();
    }
  }

  if(todos.length === 0) return <div className="text-center text-2xl font-semibold text-red-500">No hay datos de todos</div>

  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem 
          toogleTodo={toogleTodo}
          key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
