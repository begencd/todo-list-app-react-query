import { useTodoDelete, useTodos } from "./hooks/useTodos";
import Modal from "./modals";
import { setModal } from "./store/modal/actions";
import { useModal } from "./store/modal/hooks";
import { setTodoId } from "./store/todos/actions";

export default function App() {
  const modal = useModal();
  const { data } = useTodos();
  const deleteTodo = useTodoDelete();

  const deleteTodoItem = (id) => {
    deleteTodo.mutate(id);
  };

  const editTodoItem = (id) => {
    setTodoId(id);
    setModal("edit");
  };

  return (
    <div className="flex items-center justify-center h-full text-white bg-slate-700">
      {modal && <Modal />}

      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-center">Todo List App</h1>
        <div className="p-4 border rounded-lg bg-slate-800 border-slate-600 min-w-[600px]">
          <div className="flex justify-end">
            <button
              onClick={() => setModal("create")}
              className="p-2 my-4 text-sm bg-blue-400 border-none rounded-md outline-none w-fit"
            >
              Add Todo
            </button>
          </div>
          <ul className="flex flex-col gap-2 pr-2 max-h-[360px] overflow-y-auto">
            {data?.data?.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-2 transition-colors rounded-md bg-slate-600 hover:bg-slate-500"
              >
                <span>{todo.title}</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => deleteTodoItem(todo.id)}
                    className="float-right p-2 text-sm bg-red-400 border-none rounded-md outline-none"
                  >
                    Delete Todo
                  </button>
                  <button
                    onClick={() => editTodoItem(todo.id)}
                    className="float-right p-2 text-sm bg-green-400 border-none rounded-md outline-none"
                  >
                    Edit Todo
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
