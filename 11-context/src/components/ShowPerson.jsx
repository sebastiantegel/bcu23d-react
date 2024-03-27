import { useContext } from "react";
import { PersonContext } from "../contexts/PersonContext";

export const ShowPerson = () => {
  const users = useContext(PersonContext);

  return <>ShowPerson: {users.length} personer</>;
};
