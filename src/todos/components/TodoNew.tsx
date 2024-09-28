"use client";
import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
// import { createTodo, deleteCompletedTodos } from "../services";
// import { useRouter } from "next/navigation";
import { actionCreateTodo, actionDeleteTodos } from "../actions/todo-action";

export const TodoNew = () => {
  const [description, setDescription] = useState("");
  // const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (description.trim().length === 0) return;
    // await createTodo(description);
    await actionCreateTodo(description);
    // router.refresh();
    setDescription("");
  };

  // const deleteCompleted = async () => {
  //   const confirm = window.confirm(
  //     "¿Seguro que quieres borrar los todos completados?"
  //   );
  //   if (confirm) {
  //     await deleteCompletedTodos();
  //     router.refresh();
  //   }
  // };

  const deleteCompleted = async () => {
    const confirm = window.confirm(
      "¿Seguro que quieres borrar los todos completados?"
    );
    if (!confirm) return;
    await actionDeleteTodos();
  };

  return (
    <div className="w-5/6 mx-auto flex  my-8">
      <form onSubmit={handleSubmit} className="flex w-full">
        <input
          type="text"
          className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
          placeholder="¿Qué necesita ser hecho?"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <button
          type="submit"
          className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
        >
          Crear
        </button>

        <span className="flex flex-1"></span>

        <button
          onClick={deleteCompleted}
          type="button"
          className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
        >
          <IoTrashOutline />
          Delete Completed
        </button>
      </form>
    </div>
  );
};
