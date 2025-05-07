export default function Login({ handleLogin }) {
  return (
    <>
      <h1>El usuario es logeado o no</h1>
      <p>{handleLogin ? "Esta logeado " : "No esta logeado"}</p>
    </>
  );
}
