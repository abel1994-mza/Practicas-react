const Notes = ({ notes }) => {
  console.log("Rendering Note", notes); // 👈 Acá

  return (
    <>
      <li>{notes.content}</li>
    </>
  );
};

export default Notes;
