import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const Todos = () => {
  const { todos, toggleTodo, removeTodo } = useContext(TodoContext);

  return (
    <>
      Todos: {todos.length}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isDone ? "done" : ""}>
            <span
              onClick={() => {
                toggleTodo(todo.id);
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => {
                removeTodo(todo.id);
              }}
            >
              Ta bort
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
