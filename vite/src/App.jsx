import { useState, useEffect } from 'react';
import ReactLogo from './assets/react.svg?react';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Logo from './logo.svg?react';

function App() {
    const greeting = import.meta.env.VITE_GREETING;
    const [count, setCount] = useState(0);
    const [ipAddress, setIpAddress] = useState();

    useEffect(() => {
        const fetchIpAddress = async () => {
            const apiUrl = import.meta.env.VITE_API_URL;

            try {
                const response = await fetch(`${apiUrl}?format=json`);

                if (!response.ok) {
                    throw new Error(`API error: ${response.status}`);
                }

                const data = await response.json();
                setIpAddress(data.ip);
            } catch (err) {
                setIpAddress('NOT AVAILABLE');
                console.log(err.message);
            }
        };

        fetchIpAddress();
    }, []);

    return (
        <>
            <Header />
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <ReactLogo className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <h2>{greeting}</h2>
            <h3>Your IP address is {ipAddress}</h3>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
            <Footer />
        </>
    );
}

export default App;
