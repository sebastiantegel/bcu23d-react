import { useState } from "react";
import "./App.css";
import { TodoContext } from "./contexts/TodoContext";
import { Todos } from "./components/Todos";
import { Todo } from "./models/Todo";
import { AddTodo } from "./components/AddTodo";

function App() {
  const [state, setState] = useState({ todos: [new Todo("Test")] });

  state.addTodo = (text) => {
    setState({ ...state, todos: [...state.todos, new Todo(text)] });
  };

  state.toggleTodo = (id) => {
    setState({
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.id === id) return { ...todo, isDone: !todo.isDone };
        else return todo;
      }),
    });
  };

  state.removeTodo = (id) => {
    setState({ ...state, todos: state.todos.filter((todo) => todo.id !== id) });
  };

  // { todos: [], addTodo: () => {}} -> Är ok
  // state = { todos, addTodo: () => {}} -> fel

  return (
    <>
      <TodoContext.Provider value={state}>
        <AddTodo />
        <Todos />
      </TodoContext.Provider>
      {/* <p>{JSON.stringify(state)}</p> */}
    </>
  );
}

export default App;
