import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Coin() {
    const { id } = useParams();
    const [crypto, setCrypto] = useState(null);

    useEffect(() => {
        fetch(`https://api.coincap.io/v2/assets/${id}`)
            .then(response => response.json())
            .then(data => setCrypto(data.data))
            .catch(error => console.error('Error fetching data:', error));
        }, [id]);
    

    if (!crypto) return <p>Cargando...</p>

    return (
        <>
            <h1>{crypto.name}</h1>
            <p>Precio: ${crypto.priceUsd}</p>
        </>
    );
}

export default Coin;