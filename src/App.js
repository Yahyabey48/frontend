// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Vérifie que le chemin est correct
import Accueil from './pages/Accueil';
import Voiture from './pages/Voiture';
import Vendeurs from './pages/Vendeurs';
import Localisation from './pages/Localisation';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/voiture" element={<Voiture />} />
                <Route path="/vendeurs" element={<Vendeurs />} />
                <Route path="/localisation" element={<Localisation />} />
            </Routes>
        </div>
    );
};

export default App;
