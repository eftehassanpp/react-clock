import { useState } from 'react';
import './App.css';
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
    </>
  );
}

export default App;
