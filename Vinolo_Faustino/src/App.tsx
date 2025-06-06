import React from 'react';
import { MovieProvider } from './Contexts/MovieContext';
import PeliculasTable from './Components/PeliculasTable';
import Favoritos from './Components/Favoritos';

function App() {
    return (
        <MovieProvider>
            <div className="app-container">
                <PeliculasTable />
                <Favoritos />
            </div>
        </MovieProvider>
    );
}

export default App;