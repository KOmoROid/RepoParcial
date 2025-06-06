import React, { useState, useEffect } from 'react';
import { Pelicula as PeliculaType } from '../contexts/MovieContext';
import Pelicula from './Pelicula';

const PeliculasTable: React.FC = () => {
    const [peliculas, setPeliculas] = useState<PeliculaType[]>([]);
    const [filtroVentas, setFiltroVentas] = useState<number>(0);
    const [peliculasFiltradas, setPeliculasFiltradas] = useState<PeliculaType[]>([]);

    // Datos de películas incluidos directamente
    const peliculasData: PeliculaType[] = [
        { "id": 1, "titulo": "Titanic", "director": "James Cameron", "genero": "Romance", "ventas": 2200, "anio": 1997 },
        { "id": 2, "titulo": "Avatar", "director": "James Cameron", "genero": "Ciencia ficción", "ventas": 2840, "anio": 2009 },
        { "id": 3, "titulo": "Avengers: Endgame", "director": "Anthony y Joe Russo", "genero": "Acción", "ventas": 2798, "anio": 2019 },
        { "id": 4, "titulo": "El Rey León", "director": "Roger Allers y Rob Minkoff", "genero": "Animación", "ventas": 968, "anio": 1994 },
        { "id": 5, "titulo": "Jurassic Park", "director": "Steven Spielberg", "genero": "Aventura", "ventas": 1045, "anio": 1993 },
        { "id": 6, "titulo": "Forrest Gump", "director": "Robert Zemeckis", "genero": "Drama", "ventas": 678, "anio": 1994 },
        { "id": 7, "titulo": "The Dark Knight", "director": "Christopher Nolan", "genero": "Acción", "ventas": 1005, "anio": 2008 },
        { "id": 8, "titulo": "Frozen", "director": "Chris Buck y Jennifer Lee", "genero": "Animación", "ventas": 1280, "anio": 2013 },
        { "id": 9, "titulo": "Harry Potter y la piedra filosofal", "director": "Chris Columbus", "genero": "Fantasía", "ventas": 974, "anio": 2001 },
        { "id": 10, "titulo": "El Señor de los Anillos: El Retorno del Rey", "director": "Peter Jackson", "genero": "Fantasía", "ventas": 1142, "anio": 2003 },
        { "id": 11, "titulo": "Buscando a Nemo", "director": "Andrew Stanton", "genero": "Animación", "ventas": 940, "anio": 2003 },
        { "id": 12, "titulo": "Star Wars: Episodio IV - Una nueva esperanza", "director": "George Lucas", "genero": "Ciencia ficción", "ventas": 775, "anio": 1977 },
        { "id": 13, "titulo": "Inception", "director": "Christopher Nolan", "genero": "Ciencia ficción", "ventas": 836, "anio": 2010 },
        { "id": 14, "titulo": "La Bella y la Bestia", "director": "Bill Condon", "genero": "Romance", "ventas": 1263, "anio": 2017 },
        { "id": 15, "titulo": "Bohemian Rhapsody", "director": "Bryan Singer", "genero": "Biográfica", "ventas": 911, "anio": 2018 },
        { "id": 16, "titulo": "Black Panther", "director": "Ryan Coogler", "genero": "Acción", "ventas": 1346, "anio": 2018 },
        { "id": 17, "titulo": "Toy Story 3", "director": "Lee Unkrich", "genero": "Animación", "ventas": 1067, "anio": 2010 },
        { "id": 18, "titulo": "Minions", "director": "Pierre Coffin y Kyle Balda", "genero": "Comedia", "ventas": 1159, "anio": 2015 },
        { "id": 19, "titulo": "La La Land", "director": "Damien Chazelle", "genero": "Musical", "ventas": 447, "anio": 2016 },
        { "id": 20, "titulo": "Gladiador", "director": "Ridley Scott", "genero": "Épica", "ventas": 460, "anio": 2000 }
    ];

    useEffect(() => {
        // Cargar películas al montar el componente
        setPeliculas(peliculasData);
        setPeliculasFiltradas(peliculasData);
    }, []);

    useEffect(() => {
        // Filtrar películas por ventas
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
                    No hay películas que superen {filtroVentas} ventas.
                </p>
            )}
        </div>
    );
};

export default PeliculasTable;