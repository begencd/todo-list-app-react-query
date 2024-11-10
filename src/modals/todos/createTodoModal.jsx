import { useState } from "react";
import { useCreateTodo } from "~/hooks/useTodos";

export default function CreateTodoModal({ close }) {
  const uniqueId =
    Date.now().toString(36) + Math.random().toString(36).substring(2);
  const [todoTitle, setTodoTitle] = useState();
  const addTodo = useCreateTodo();

  const createTodo = () => {
    addTodo.mutate({ id: uniqueId, title: todoTitle });
    close();
  };

  return (
    <div className="w-[500px] p-4">
      <h3 className="text-lg font-semibold">Create Todo</h3>
      <div className="pt-4">
        <div>
          <input
            className="w-full p-2 border rounded-md outline-none bg-slate-800 border-slate-500"
            type="text"
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-end gap-2 pt-4 items-ceter">
          <button
            onClick={close}
            className="p-2 my-4 text-sm bg-gray-400 border-none rounded-md outline-none w-fit"
          >
            Close
          </button>
          <button
            onClick={createTodo}
            className="p-2 my-4 text-sm bg-blue-400 border-none rounded-md outline-none w-fit"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
