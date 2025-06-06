import React from 'react';
import { useMovies, Pelicula as PeliculaType } from '../contexts/MovieContext';

interface PeliculaProps {
    pelicula: PeliculaType;
}

const Pelicula: React.FC<PeliculaProps> = ({ pelicula }) => {
    const { agregarFavorito, esFavorito } = useMovies();

    const handleAgregarFavorito = () => {
        agregarFavorito(pelicula);
    };

    const esAntigua = pelicula.anio < 2000;

    return (
        <tr style={{
            backgroundColor: esAntigua ? 'yellow' : 'white',
        }}>
            <td style={{ padding: '6px', border: '1px solid #000', fontSize: '12px' }}>{pelicula.titulo}</td>
            <td style={{ padding: '6px', border: '1px solid #000', fontSize: '12px' }}>{pelicula.director}</td>
            <td style={{ padding: '6px', border: '1px solid #000', fontSize: '12px' }}>{pelicula.genero}</td>
            <td style={{ padding: '6px', border: '1px solid #000', fontSize: '12px' }}>{pelicula.ventas}</td>
            <td style={{ padding: '6px', border: '1px solid #000', fontSize: '12px' }}>{pelicula.anio}</td>
            <td style={{ padding: '6px', border: '1px solid #000', fontSize: '12px' }}>
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