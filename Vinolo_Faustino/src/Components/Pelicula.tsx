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

    return (
        <tr className={esAntigua ? 'pelicula-antigua' : ''}>
            <td>{pelicula.titulo}</td>
            <td>{pelicula.director}</td>
            <td>{pelicula.genero}</td>
            <td>{pelicula.ventas}</td>
            <td>{pelicula.anio}</td>
            <td>
                <button
                    onClick={handleAgregarFavorito}
                    disabled={esFavorito(pelicula.id)}
                    className="btn-favorito"
                >
                    {esFavorito(pelicula.id) ? 'Ya en favoritos' : 'Agregar a Favoritos'}
                </button>
            </td>
        </tr>
    );
};

export default Pelicula;