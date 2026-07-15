import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <MyCounter />
      <MyToggle />
      <MyForm />
      <MyMountLogger />
      <MyValueWatcher />
      <MyTimer />
    </div>
  );
}

function MyCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
    </div>
  )
}

function MyToggle() {
  const [toggle, setToggle] = useState(true);

  return (
    <div
      className={toggle ? "toggle-bar" : "toggle-bar on"}
      onClick={() => setToggle(!toggle)}
    >
      <div className="toggle-circle"></div>
    </div>
  )
}

function MyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div className="form-container">
      <div>
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <p>Full name: {firstName} {lastName}</p>
      </div>
    </div>
  )
}

// 1. Logs once when the component mounts
function MyMountLogger() {
  useEffect(() => {
    alert('Component mounted');
  }, []); // empty array = runs only once, on mount

  return <p>Check the console — I logged on mount.</p>;
}

// 2. Runs every time a value changes
function MyValueWatcher() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert('Count changed');
  }, [count]); // runs whenever count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

// 3. Effect with cleanup, a simple timer
function MyTimer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      alert("Component unmounted");
      clearInterval(interval); // cleanup runs when component unmounts
    };
  }, []);

  return <p>Seconds elapsed: {seconds}</p>;
}

export default App;