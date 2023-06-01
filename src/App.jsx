import { useState } from 'react';
import './App.css';
import Clock from './components/clock';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Clock locale="bn-BD" />
        </>
    );
}

export default App;
