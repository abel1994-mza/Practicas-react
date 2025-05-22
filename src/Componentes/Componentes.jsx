const Headers = () => {
  return (
    <div className="header">
      <h2>Lista de Gastos</h2>
    </div>
  );
};

const Gastos = ({ gastos }) => {
  return (
    <div className="gastos">
      {gastos.map((gasto) => (
        <div key={gasto.id} className="gasto">
          <h3>{gasto.nombre}</h3>
          <p>${gasto.monto}</p>
        </div>
      ))}
    </div>
  );
};

const TotalGastos = ({ total }) => {
  return (
    <div className="total-gastos">
      <h3>Total Gastos</h3>
      <p>${total}</p>
    </div>
  );
};

const Componentes = ({ gastos }) => {
  const total = gastos.reduce((acc, gasto) => acc + gasto.monto, 0);

  return (
    <div className="componentes">
      <Headers />
      <Gastos gastos={gastos} />
      <TotalGastos total={total} />
    </div>
  );
};

export default Componentes;
