import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(step);

  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(0);
  }
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> {step} </span>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span> {futureDate.toDateString()} </span>
      </p>

      {step > 0 || count > 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

// function Calculator({ count }) {
//   // const months = [
//   //   "January",
//   //   "February",
//   //   "March",
//   //   "April",
//   //   "May",
//   //   "June",
//   //   "July",
//   //   "August",
//   //   "September",
//   //   "October",
//   //   "November",
//   //   "December",
//   // ];

//   // const days = [
//   //   "Sunday",
//   //   "Monday",
//   //   "Tuesday",
//   //   "Wednesday",
//   //   "Thursday",
//   //   "Friday",
//   //   "Saturday",
//   // ];

//   // const month = months[futureDate.getMonth()];
//   // const day = days[futureDate.getDay()];

//   // const newDate = `${day}, ${month} ${futureDate.getDate()} ${futureDate.getFullYear()}`;
// }
