import React from 'react';
import { MovieProvider } from './Contexts/MovieContext';
import PeliculasTable from './Components/PeliculasTable';
import Favoritos from './Components/Favoritos';

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