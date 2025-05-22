const Note = ({ note }) => {
  return (
    <>
      <li>
        Nombre: {note.name}/ Telefono: {note.telefono}/ Ciudad: {note.city}
      </li>
    </>
  );
};

export default Note;
