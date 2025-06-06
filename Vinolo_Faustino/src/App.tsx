import React from 'react';
import { MovieProvider } from './contexts/MovieContext';
import PeliculasTable from './components/PeliculasTable';
import Favoritos from './components/Favoritos';

function App() {
    return (
        <MovieProvider>
            <div style={{
                display: 'flex',
                minHeight: '100vh',
                fontFamily: 'Arial, sans-serif',
                margin: 0,
                padding: 0
            }}>
                <PeliculasTable />
                <Favoritos />
            </div>
        </MovieProvider>
    );
}

export default App;