import store from "~/store";
import { _setTodoId } from "~/store/todos";

export const setTodoId = (todoid) => store.dispatch(_setTodoId(todoid));
