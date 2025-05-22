// mport { useState } from 'react';

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   // Calcular estadísticas
//   const total = good + neutral + bad;
//   const average = (good - bad) / total;
//   const positivePercentage = (good / total) * 100;

//   return (
//     <div>
//       <h1>Unicafe</h1>
//       <button onClick={() => setGood(good + 1)}>Good</button>
//       <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
//       <button onClick={() => setBad(bad + 1)}>Bad</button>

//       <h2>Statistics</h2>
//       {total === 0 ? (
//         <p>No feedback given</p>
//       ) : (
//         <>
//           <p>Good: {good}</p>
//           <p>Neutral: {neutral}</p>
//           <p>Bad: {bad}</p>
//           <p>Total: {total}</p>
//           <p>Average: {average}</p>
//           <p>Positive percentage: {positivePercentage} %</p>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
