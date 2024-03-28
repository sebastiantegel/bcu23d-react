import { useState } from "react";
import "./App.css";
import { ITodoContext, TodoContext } from "./contexts/TodoContext";
import { Todo } from "./models/Todo";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";

function App() {
  const [state, setState] = useState<ITodoContext>({
    todos: [new Todo("Test")],
    addTodo: () => {},
    toggleTodo: () => {},
    removeTodo: () => {},
  });

  state.addTodo = (text: string) => {
    setState({ ...state, todos: [...state.todos, new Todo(text)] });
  };
  state.toggleTodo = (id: number) => {
    setState({
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.id === id) return { ...todo, isDone: !todo.isDone };
        else return todo;
      }),
    });
  };
  state.removeTodo = (id: number) => {
    setState({ ...state, todos: state.todos.filter((todo) => todo.id !== id) });
  };

  return (
    <>
      <TodoContext.Provider value={state}>
        <AddTodo />
        <Todos />
      </TodoContext.Provider>
    </>
  );
}

export default App;
