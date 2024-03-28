import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const AddTodo = () => {
  const [userInput, setUserInput] = useState("");

  const { addTodo } = useContext(TodoContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(userInput);
        setUserInput("");
      }}
    >
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button>Spara</button>
    </form>
  );
};
