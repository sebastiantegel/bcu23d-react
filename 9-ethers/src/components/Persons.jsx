export const Persons = ({ persons, contract, populatePersons }) => {
  return (
    <ul>
      {persons.map((p) => (
        <li
          key={p.id}
          onClick={async () => {
            const result = await contract.removePerson(p.id);
            await result.wait();

            // console.log(result);
            populatePersons();
          }}
        >
          {p.name}
        </li>
      ))}
    </ul>
  );
};
