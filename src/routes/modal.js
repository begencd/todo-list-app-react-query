import EditTodoModal from "~/modals/todos/editTodoModal";
import CreateTodoModal from "../modals/todos/createTodoModal";

const modals = [
  {
    name: "create",
    element: CreateTodoModal,
  },
  {
    name: "edit",
    element: EditTodoModal,
  },
];

export default modals;
