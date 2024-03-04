import { useState } from "react";

export const AddUser = ({ createNewUser }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewUser(name, age);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => {
          // + omvandlar en text till ett tal (string -> number)
          setAge(+e.target.value);
        }}
      />
      <button>Spara</button>
    </form>
  );
};
