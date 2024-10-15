import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assure-toi d'importer le fichier CSS

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/voiture">Voiture</Link></li>
                <li><Link to="/vendeurs">Vendeurs</Link></li>
                <li><Link to="/localisation">Localisation</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
