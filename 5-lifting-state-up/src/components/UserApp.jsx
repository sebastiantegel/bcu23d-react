import { useState } from "react";
import { Person } from "../models/Person";
import { Users } from "./Users";
import { AddUser } from "./AddUser";

export const UserApp = () => {
  const [users, setUsers] = useState([
    new Person("Sebastian", 44, true),
    new Person("Hanna", 43, true),
  ]);

  const createUser = (name, age) => {
    setUsers([...users, new Person(name, age, false)]);
  };

  const removeUser = (name) => {
    setUsers(users.filter((user) => user.name !== name));
  };

  return (
    <>
      <AddUser createNewUser={createUser} />

      {/* props: { users: [{..}, {..}, {..}, {..}]} */}
      <Users users={users} deleteUser={removeUser} />
    </>
  );
};
