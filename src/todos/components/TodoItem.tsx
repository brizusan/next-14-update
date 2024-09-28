import { startTransition, useOptimistic } from "react";
import { Todo } from "@prisma/client";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";
import styles from "./Todos.module.css";

type TodoItemProps = {
  todo: Todo;
  toogleTodo: (id: Todo["id"], completed: Todo["completed"]) => void;
};

export const TodoItem = ({ todo, toogleTodo }: TodoItemProps) => {
  const [todoOptimistic, toogleTodoOptimistic] = useOptimistic(
    todo,
    (state, newValue: boolean) => ({ ...state, completed: newValue })
  );

  const onToogleTodo = async () => {
    try {
      startTransition(() =>  toogleTodoOptimistic(!todoOptimistic.completed));
      await toogleTodo(todoOptimistic.id, !todoOptimistic.completed);
    } catch (error) {
      console.log(error);
      toogleTodoOptimistic(!todoOptimistic.completed);
    }
  };

  return (
    <div className={todo.completed ? styles.todoDone : styles.todoPending}>
      <div
        // onClick={() => toogleTodo(todoOptimistic.id , !todoOptimistic.completed)}
        onClick={() => onToogleTodo}
        className="flex justify-between items-center w-full cursor-pointer "
      >
        <div>
          {todoOptimistic.completed ? (
            <IoCheckboxOutline size={26} />
          ) : (
            <IoSquareOutline size={26} />
          )}
        </div>
        <p className="text-right">{todoOptimistic.description}</p>
      </div>
    </div>
  );
};
