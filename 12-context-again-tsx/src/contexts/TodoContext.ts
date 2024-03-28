import { createContext } from "react";
import { Todo } from "../models/Todo";

export interface ITodoContext {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoContext = createContext<ITodoContext>({
  todos: [],
  addTodo: () => {},
  toggleTodo: () => {},
  removeTodo: () => {},
});
