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
  function handleStepUp() {
    setStep(step + 1);
  }

  function handleStepDown() {
    setStep(step - 1);
  }

  return (
    <div>
      <button onClick={handleStepDown}>-</button>
      <span>Step: {step} </span>
      <button onClick={handleStepUp}>+</button>
      <CounterDate step={step} />
    </div>
  );
}

function CounterDate({ step }) {
  const [count, setCount] = useState(step);

  function handleCountUp() {
    setCount(count + step);
  }

  function handleCountDown() {
    setCount(count - step);
  }
  return (
    <div>
      <button onClick={handleCountDown}>-</button>
      <span>Count: {count} </span>
      <button onClick={handleCountUp}>+</button>
      <Calculator count={count} />
    </div>
  );
}

function Calculator({ count }) {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + count);
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];

  // const days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];

  // const month = months[futureDate.getMonth()];
  // const day = days[futureDate.getDay()];

  // const newDate = `${day}, ${month} ${futureDate.getDate()} ${futureDate.getFullYear()}`;

  return (
    <div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
      </span>
      <span> {futureDate.toDateString()} </span>
    </div>
  );
}
