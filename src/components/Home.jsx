import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const response = await fetch('https://api.coincap.io/v2/assets');
                const data = await response.json();
                setCryptos(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchCryptos();
    }, []);

    return (
        <>
            <h1>Lista de Criptomonedas</h1>
            {cryptos.length === 0 ? (
                <p>Cargando criptomonedas...</p>
            ) : (
                <ul>
                    {cryptos.map(crypto => (
                        <li key={crypto.id}>
                            <Link to={`/coin/${crypto.id}`}>{crypto.name}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

export default Home;