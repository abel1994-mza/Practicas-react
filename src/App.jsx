import Note from "./Componentes/Note";
import { useState } from "react";
import Note2 from "./Componentes/Note2";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [newCity, setNewCity] = useState("");
  const [searchTeam, setSearchTeam] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };
  const handleChangeNum = (e) => {
    setNewNum(e.target.value);
  };

  const handleChangeCity = (e) => {
    setNewCity(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTeam(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newName === "") {
      alert("Por favor, ingrese un nombre");
      return;
    }

    const nameExists = persons.some(
      (p) => p.name.toLowerCase() === newName.toLowerCase()
    );
    if (nameExists) {
      alert("Este nombre ya está en la agenda.");
      return;
    }

    const newPerson = {
      id: persons.length + 1, // Esto es un id simple
      name: newName,
      telefono: newNum,
      city: newCity,
    };

    setPersons([...persons, newPerson]);

    setNewName("");
    setNewNum("");
    setNewCity("");
  };
  const filterPerson = (persons, search) => {
    return persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
  };
  return (
    <>
      <h1>Agenda Telefonica</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={newName}
          placeholder="Nombre"
        />
        <input
          type="number"
          onChange={handleChangeNum}
          value={newNum}
          placeholder="Numero"
        />
        <input
          type="text"
          value={newCity}
          onChange={handleChangeCity}
          placeholder="Ciudad"
        />

        <button type="submit">Agregar</button>
      </form>

      <h1>Lista de personas</h1>
      {persons.map((n, i) => {
        return <Note key={i} note={n} />;
      })}
      <h1>Buscar Nombre</h1>

      <input
        type="text"
        value={searchTeam}
        onChange={handleSearch}
        placeholder="Buscar nombre"
      />

      {searchTeam && (
        <>
          <h2>Personas buscadas</h2>
          {filterPerson(persons, searchTeam).map((n, index) => (
            <Note2 key={index} note={n} />
          ))}
        </>
      )}
    </>
  );
};

export default App;
