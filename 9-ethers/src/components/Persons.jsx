export const Persons = ({ persons, contract, populatePersons }) => {
  const personsHtml = persons.map((p) => {
    console.log(p);
    return (
      <li
        key={p.id}
        onClick={async () => {
          const result = await contract.removePerson(p.id);
          await result.wait();

          // console.log(result);
          populatePersons();
        }}
      >
        {Number(p.id)} - {p.name} - {Number(p.age)}
      </li>
    );
  });

  console.log(persons);

  return <ul>{personsHtml}</ul>;
};
