import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";
import { ShowPerson } from "./ShowPerson";

export const Persons = () => {
  const users = useContext(PersonContext);

  return (
    <>
      <h2>Persons:</h2>
      {users.map((user, i) => (
        <div key={i}>
          {user.name} - {user.age}
        </div>
      ))}
      <ShowPerson />
    </>
  );
};
