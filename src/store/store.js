import { createStore } from 'vuex';
import uniqueId from "lodash.uniqueid";

export const store = createStore({
  state: {
    ToDoItems: [
      { id: uniqueId("todo-"), label: "Learn Vue", done: false },
      {
        id: uniqueId("todo-"),
        label: "Create a Vue project with the CLI",
        done: true,
      },
      { id: uniqueId("todo-"), label: "Have fun", done: true },
      { id: uniqueId("todo-"), label: "Create a to-do list", done: false },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
