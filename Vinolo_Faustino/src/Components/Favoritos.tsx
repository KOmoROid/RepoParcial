import React from 'react';
import { useMovies } from '../contexts/MovieContext';

const Favoritos: React.FC = () => {
    const { favoritos, quitarFavorito } = useMovies();

    const handleQuitarFavorito = (id: number) => {
        quitarFavorito(id);
    };

    return (
        <div style={{
            padding: '10px',
            width: '30%',
            borderLeft: '2px solid #000',
            minHeight: '100vh',
            boxSizing: 'border-box'
        }}>
            <h3 style={{ margin: '0 0 15px 0', fontSize: '16px' }}>Favoritos</h3>

            {favoritos.length === 0 ? (
                <p style={{ fontSize: '14px', color: '#666' }}>No hay favoritos</p>
            ) : (
                <div>
                    {favoritos.map(pelicula => (
                        <div key={pelicula.id} style={{
                            border: '1px solid #000',
                            padding: '8px',
                            marginBottom: '8px',
                            borderRadius: '3px',
                            backgroundColor: '#f9f9f9',
                            fontSize: '12px'
                        }}>
                            <h4 style={{ margin: '0 0 4px 0', fontSize: '13px' }}>{pelicula.titulo}</h4>
                            <p style={{ margin: '0 0 3px 0', fontSize: '11px' }}>
                                <strong>Director:</strong> {pelicula.director}
                            </p>
                            <p style={{ margin: '0 0 3px 0', fontSize: '11px' }}>
                                <strong>Género:</strong> {pelicula.genero}
                            </p>
                            <p style={{ margin: '0 0 3px 0', fontSize: '11px' }}>
                                <strong>Ventas:</strong> {pelicula.ventas}
                            </p>
                            <p style={{ margin: '0 0 6px 0', fontSize: '11px' }}>
                                <strong>Año:</strong> {pelicula.anio}
                            </p>
                            <button
                                onClick={() => handleQuitarFavorito(pelicula.id)}
                                style={{
                                    padding: '4px 8px',
                                    backgroundColor: '#dc3545',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '3px',
                                    cursor: 'pointer',
                                    fontSize: '11px'
                                }}
                            >
                                Quitar
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favoritos;