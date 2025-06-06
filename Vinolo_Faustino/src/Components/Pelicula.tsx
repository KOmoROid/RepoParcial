import React from 'react';
import { useMovies, Pelicula as PeliculaType } from '../Contexts/MovieContext';

interface PeliculaProps {
    pelicula: PeliculaType;
}

const Pelicula: React.FC<PeliculaProps> = ({ pelicula }) => {
    const { agregarFavorito, esFavorito } = useMovies();

    const handleAgregarFavorito = () => {
        agregarFavorito(pelicula);
    };

    const esAntigua = pelicula.anio < 2000;

    const cellStyle = {
        padding: '6px',
        border: '1px solid #000',
        fontSize: '12px',
        color: '#212529' // Añadir color de texto oscuro para visibilidad
    };

    return (
        <tr style={{
            backgroundColor: esAntigua ? 'yellow' : 'white',
        }}>
            <td style={cellStyle}>{pelicula.titulo}</td>
            <td style={cellStyle}>{pelicula.director}</td>
            <td style={cellStyle}>{pelicula.genero}</td>
            <td style={cellStyle}>{pelicula.ventas}</td>
            <td style={cellStyle}>{pelicula.anio}</td>
            <td style={{ ...cellStyle, textAlign: 'center' }}>
                <button
                    onClick={handleAgregarFavorito}
                    disabled={esFavorito(pelicula.id)}
                    style={{
                        padding: '4px 8px',
                        backgroundColor: esFavorito(pelicula.id) ? '#ccc' : '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: esFavorito(pelicula.id) ? 'not-allowed' : 'pointer',
                        fontSize: '11px'
                    }}
                >
                    {esFavorito(pelicula.id) ? 'Ya en favoritos' : 'Agregar a Favoritos'}
                </button>
            </td>
        </tr>
    );
};

export default Pelicula;