import { useState, useEffect } from "react";
import Note from "./Componentes/Note";
import notesServices from "./services/notesServices";
import "./css/index.css";
import Notification from "./Componentes/notification";
import Footer from "./Componentes/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  // const [show, setShow] = useState(true);
  const [Message, setMessage] = useState("Soy un error");

  // Funcion para GET
  useEffect(() => {
    notesServices.getAll().then((initialNote) => setNotes(initialNote));
  }, []);

  //Funcion para enviar notas a mi servidor
  const addNote = (e) => {
    e.preventDefault(); //No deja que se vuelva a cargar la pagina

    if (newNote.trim() === "") {
      alert("Necesito que escribas una tarea");
      return;
    }
    const generateId = () => Math.floor(Math.random() * 1000000);
    const newObject = {
      id: generateId(),
      // creamos un nuevo objeto
      content: newNote,
      important: Math.random() < 0.5,
      // asigna aleatoriamente si es importante o no
    };
    notesServices.create(newObject).then((retunedNote) => {
      // Manda al servidor el nuevo objeto
      setNotes(notes.concat(retunedNote));
      // agrega la nota nueva al estado local
      setMessage("Persona Agregada exitosamente");
      setTimeout(() => {
        setMessage(null); // Borrar mensaje luego de 5 segundos
      }, 5000);
      setNewNote("");
      // limpia el campo de entrada
    });
  };
  const handhleNote = (e) => {
    setNewNote(e.target.value);
  };
  //Funcion para modificar notas en mi servidor
  const toggleImportance = (id) => {
    const note = notes.find((n) => n.id === id);
    // const note = notes.find((n) => n.id === id);
    if (!note) return;
    // si no la encuentra, sale

    const updatedNote = { ...note, important: !note.important };
    // invierte "important"

    notesServices
      .update(id, updatedNote)
      // actualiza la nota en el servidor
      .then((seteNote) => {
        setNotes(notes.map((n) => (n.id !== id ? n : seteNote)));
        // actualiza la nota localmente con la respuesta
      })
      .catch((error) => {
        setMessage(`Note '${note.content}' was already removed from server`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setNotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <>
      <h1>Tareas </h1>
      <Notification message={Message} />
      <Footer />
      <ul>
        {notes.map((note) => {
          return (
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => toggleImportance(note.id)}
            />
          );
        })}
      </ul>

      <form onSubmit={addNote}>
        <input
          type="text"
          value={newNote}
          onChange={handhleNote}
          placeholder="Nota nueva"
        />
        <button type="submit">Guardar</button>
      </form>
    </>
  );
};

export default App;
