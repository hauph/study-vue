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
  mutations: {
    addToDo(state, toDoLabel) {
      state.ToDoItems.push({
        id: uniqueId("todo-"),
        label: toDoLabel,
        done: false,
      });
    },
    deleteToDo(state, index) {
      state.ToDoItems.splice(index, 1);
    },
    editToDo(state, payload) {
      const toDoToEdit = state.ToDoItems.find(item => item.id === payload.toDoId);
      toDoToEdit.label = payload.newLabel;
    }
  },
  actions: {},
  modules: {},
});
