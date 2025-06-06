import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Pelicula {
    id: number;
    titulo: string;
    director: string;
    genero: string;
    ventas: number;
    anio: number;
}

interface MovieContextType {
    favoritos: Pelicula[];
    agregarFavorito: (pelicula: Pelicula) => void;
    quitarFavorito: (id: number) => void;
    esFavorito: (id: number) => boolean;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favoritos, setFavoritos] = useState<Pelicula[]>([]);

    const agregarFavorito = (pelicula: Pelicula) => {
        if (!favoritos.find(fav => fav.id === pelicula.id)) {
            setFavoritos(prev => [...prev, pelicula]);
        }
    };

    const quitarFavorito = (id: number) => {
        setFavoritos(prev => prev.filter(fav => fav.id !== id));
    };

    const esFavorito = (id: number) => {
        return favoritos.some(fav => fav.id === id);
    };

    return (
        <MovieContext.Provider value={{
            favoritos,
            agregarFavorito,
            quitarFavorito,
            esFavorito
        }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovies = () => {
    const context = useContext(MovieContext);
    if (context === undefined) {
        throw new Error('useMovies debe ser usado dentro de un MovieProvider');
    }
    return context;
};