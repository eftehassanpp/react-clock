import { useState } from 'react';
import './App.css';
import TempCalculator from './components/calculator';
import Clock from './components/clock';
import Form from './components/form';
function App() {
  const [count, setCount] = useState(0);
  console.log('App component rendered');
  return (
    <>
      <Clock />
      <br />
      <Form />
      <br />
      <TempCalculator />
    </>
  );
}

export default App;
