import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
    <>
        <h1>Criptomonedas Favoritas</h1>
        {favorites.length === 0 ? (
            <p>No hay criptomonedas favoritas.</p>
        ) : (
        <ul>
            {favorites.map(crypto => (
                <li key={crypto.id}>
                    <Link to={`/coin/${crypto.id}`}>{crypto.name}</Link>
                </li>
            ))}
        </ul>
        )}
    </>
    );
};

export default Favorites;