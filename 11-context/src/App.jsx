import { useState } from "react";
import "./App.css";
import { Persons } from "./components/Persons";
import { PersonContext } from "./contexts/PersonContext";
import { User } from "./models/User";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      {/* <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: +e.target.value })}
      /> */}

      <button
        onClick={() => {
          setUsers([...users, new User("Sebastian", 44)]);
        }}
      >
        Add user
      </button>

      <PersonContext.Provider value={users}>
        <Persons />
      </PersonContext.Provider>
    </>
  );
}

export default App;
