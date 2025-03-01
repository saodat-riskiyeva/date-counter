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
    <p>
      <button onClick={handleStepDown}>-</button>
      <h2>Step: {step} </h2>
      <button onClick={handleStepUp}>+</button>
      <CounterDate step={step} />
    </p>
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
    <p>
      <button onClick={handleCountDown}>-</button>
      <h2>Count: {count} </h2>
      <button onClick={handleCountUp}>+</button>
      <Calculator count={count} />
    </p>
  );
}

function Calculator({ count }) {
  return <div>{count} days from today is </div>;
}
