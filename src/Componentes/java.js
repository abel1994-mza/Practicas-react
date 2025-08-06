const persons = [{ name: "Abel" }, { name: "Eva" }, { name: "Juan" }];

const filters = (persons, buscar) => {
  return persons.filter((person) =>
    person.name.toLowerCase().includes(buscar.toLowerCase())
  );
};

const resultado = filters(persons, "Abs");

console.log(resultado);
