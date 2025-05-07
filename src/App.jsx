import React, { useState } from "react";

const App = () => {
  const frases = [
    "La práctica hace al maestro.",
    "Divide y vencerás.",
    "El código limpio es una forma de arte.",
    "Aprender React es divertido.",
    "Nunca dejes de mejorar.",
  ];

  const [indice, setIndice] = useState(0);
  const [cambio, setCambio] = useState(0);
  const [like, setLike] = useState(0);

  const siguienteFrase = () => {
    const nuevo = Math.floor(Math.random() * frases.length);
    setCambio(nuevo);
    setIndice(nuevo + 1);
  };
  const likeFrase = () => {
    setLike(like + 1);
    const likeFrase = frases[indice];
    setCambio(likeFrase);
  };

  return (
    <div>
      <h1>Frases de Programación</h1>
      <p>{frases[indice]}</p>
      <button onClick={siguienteFrase}>Siguiente Frase</button>
      <p>Frases cambiadas: {cambio}</p>
      <p>Me gusta: {like}</p>
      <button onClick={likeFrase}>Me gusta</button>
    </div>
  );
};

export default App;
