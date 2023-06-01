import { useState } from 'react';
import './App.css';
import Clock from './components/clock';

function App() {
    const [count, setCount] = useState(0);
    console.log('App component rendered');
    return (
        <>
            <Clock />
        </>
    );
}

export default App;
