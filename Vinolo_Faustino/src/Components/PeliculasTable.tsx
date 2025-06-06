import React, { useState, useEffect } from 'react';
import { Pelicula as PeliculaType } from '../Contexts/MovieContext';
import Pelicula from './Pelicula';
import peliculasData from '../Data/peliculas.json';

const PeliculasTable: React.FC = () => {
    const [peliculas] = useState<PeliculaType[]>(peliculasData);
    const [filtroVentas, setFiltroVentas] = useState<number>(0);
    const [peliculasFiltradas, setPeliculasFiltradas] = useState<PeliculaType[]>(peliculasData);

    useEffect(() => {
        const filtradas = peliculas.filter(pelicula => pelicula.ventas > filtroVentas);
        setPeliculasFiltradas(filtradas);
    }, [peliculas, filtroVentas]);

    const handleFiltroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = parseInt(e.target.value) || 0;
        setFiltroVentas(valor);
    };

    return (
        <div className="peliculas-section">
            <h2>Películas</h2>

            <div className="filtro-container">
                <label htmlFor="filtroVentas">
                    Filtrar por ventas superiores a:
                </label>
                <input
                    type="number"
                    id="filtroVentas"
                    min="0"
                    placeholder="0"
                    onChange={handleFiltroChange}
                />
                <span> millones</span>
            </div>

            <table className="peliculas-table">
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Director</th>
                    <th>Género</th>
                    <th>Ventas</th>
                    <th>Año</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {peliculasFiltradas.map(pelicula => (
                    <Pelicula key={pelicula.id} pelicula={pelicula} />
                ))}
                </tbody>
            </table>

            {peliculasFiltradas.length === 0 && peliculas.length > 0 && (
                <p style={{ marginTop: '20px', fontStyle: 'italic', color: '#666' }}>
                    No hay películas que superen los {filtroVentas} millones en ventas.
                </p>
            )}
        </div>
    );
};

export default PeliculasTable;