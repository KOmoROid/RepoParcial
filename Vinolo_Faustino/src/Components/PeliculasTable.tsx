import React, { useState, useEffect } from 'react';
import { Pelicula as PeliculaType } from '../Contexts/MovieContext'; // Ruta ya corregida
import Pelicula from './Pelicula';
import peliculasData from '../Data/peliculas.json'; // Importar datos del JSON

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
        <div style={{ padding: '10px', width: '70%', boxSizing: 'border-box' }}>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="filtroVentas" style={{ marginRight: '10px', fontSize: '14px' }}>
                    Filtrar por ventas superiores a:
                </label>
                <input
                    type="number"
                    id="filtroVentas"
                    min="0"
                    placeholder="0"
                    onChange={handleFiltroChange}
                    style={{
                        padding: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '3px',
                        width: '80px',
                        fontSize: '14px'
                    }}
                />
            </div>

            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                border: '1px solid #000',
                fontSize: '12px'
            }}>
                <thead>
                <tr style={{ backgroundColor: '#f0f0f0' }}>
                    <th style={{ padding: '8px', border: '1px solid #000', textAlign: 'left', fontWeight: 'bold' }}>Título</th>
                    <th style={{ padding: '8px', border: '1px solid #000', textAlign: 'left', fontWeight: 'bold' }}>Director</th>
                    <th style={{ padding: '8px', border: '1px solid #000', textAlign: 'left', fontWeight: 'bold' }}>Género</th>
                    <th style={{ padding: '8px', border: '1px solid #000', textAlign: 'left', fontWeight: 'bold' }}>Ventas</th>
                    <th style={{ padding: '8px', border: '1px solid #000', textAlign: 'left', fontWeight: 'bold' }}>Año</th>
                    <th style={{ padding: '8px', border: '1px solid #000', textAlign: 'left', fontWeight: 'bold' }}>Acción</th>
                </tr>
                </thead>
                <tbody>
                {peliculasFiltradas.map(pelicula => (
                    <Pelicula key={pelicula.id} pelicula={pelicula} />
                ))}
                </tbody>
            </table>

            {peliculasFiltradas.length === 0 && peliculas.length > 0 && (
                <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
                    No hay películas que superen los {filtroVentas} millones en ventas.
                </p>
            )}
        </div>
    );
};

export default PeliculasTable;