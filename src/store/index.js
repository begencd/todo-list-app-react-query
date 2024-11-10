import { configureStore } from "@reduxjs/toolkit";
import modal from "./modal";
import todos from "./todos";

const store = configureStore({
  reducer: {
    modal,
    todos,
  },
});

export default store;
