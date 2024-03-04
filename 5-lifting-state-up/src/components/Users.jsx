export const Users = ({ users, deleteUser }) => {
  return (
    <ul>
      {users.map((user) => {
        return (
          <li
            key={user.name}
            onClick={() => {
              deleteUser(user.name);
            }}
          >
            {user.name} - {user.age}
          </li>
        );
      })}
    </ul>
  );
};
