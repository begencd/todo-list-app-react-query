import { useEffect, useState } from "react";
import { useTodoEdit, useTodoItem } from "~/hooks/useTodos";
import { useTodos } from "~/store/todos/hooks";

export default function EditTodoModal({ close }) {
  const [todoTitle, setTodoTitle] = useState("");
  const editTodo = useTodoEdit();
  const id = useTodos();
  const { data } = useTodoItem(id);

  useEffect(() => {
    setTodoTitle(data?.data?.title);
  }, [data]);

  const editTodoItem = () => {
    editTodo.mutate({ id: id, value: todoTitle });
    close();
  };

  return (
    <div className="w-[500px] p-4">
      <h3 className="text-lg font-semibold">Edit Todo</h3>
      <div className="pt-4">
        <div>
          <input
            className="w-full p-2 border rounded-md outline-none bg-slate-800 border-slate-500"
            type="text"
            defaultValue={todoTitle}
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
            onClick={editTodoItem}
            className="p-2 my-4 text-sm bg-blue-400 border-none rounded-md outline-none w-fit"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
