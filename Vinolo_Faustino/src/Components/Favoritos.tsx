import React from 'react';
import { useMovies } from '../Contexts/MovieContext';

const Favoritos: React.FC = () => {
    const { favoritos, quitarFavorito } = useMovies();

    const handleQuitarFavorito = (id: number) => {
        quitarFavorito(id);
    };

    return (
        <div className="favoritos-section">
            <h3 className="favoritos-title">Películas Favoritas</h3>

            {favoritos.length === 0 ? (
                <p className="no-favoritos">No hay películas favoritas</p>
            ) : (
                <div>
                    {favoritos.map(pelicula => (
                        <div key={pelicula.id} className="favorito-card">
                            <h4 className="favorito-title">{pelicula.titulo}</h4>
                            <p className="favorito-info">
                                <strong>Director:</strong> {pelicula.director}
                            </p>
                            <p className="favorito-info">
                                <strong>Género:</strong> {pelicula.genero}
                            </p>
                            <p className="favorito-info">
                                <strong>Ventas:</strong> {pelicula.ventas} millones
                            </p>
                            <p className="favorito-info">
                                <strong>Año:</strong> {pelicula.anio}
                            </p>
                            <button
                                onClick={() => handleQuitarFavorito(pelicula.id)}
                                className="btn-quitar"
                            >
                                Quitar de Favoritos
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favoritos;