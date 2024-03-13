import { useState } from "react";

export const AddPerson = ({ writeContract, populatePersons }) => {
  const [person, setPerson] = useState({ name: "", age: 0, isMarried: false });

  const createPerson = async () => {
    try {
      const result = await writeContract.createPerson(
        person.name,
        person.age,
        person.isMarried
      );
      await result.wait();

      console.log(result);

      populatePersons();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createPerson();
      }}
    >
      <input
        type="text"
        name="name"
        value={person.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        value={person.age}
        onChange={handleChange}
      />
      <button>Lägg till</button>
    </form>
  );
};
