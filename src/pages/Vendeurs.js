// src/pages/Vendeur.js

import React, { useState } from 'react';
import './Vendeur.css';

// Fichier de données fictives pour les vendeurs
const vendeursFictifs = [
    {
        id: 1,
        nom: 'Jean Dupont',
        type: 'Particulier',
        poste: 'Vendeur de voitures de sport',
        telephone: '0123-456-789',
        image: 'https://via.placeholder.com/200?text=Jean+Dupont',
        description: 'Passionné par les voitures de luxe.',
    },
    {
        id: 2,
        nom: 'Sophie Martin',
        type: 'Concessionnaire',
        poste: 'Expert en SUV',
        telephone: '0123-456-788',
        image: 'https://via.placeholder.com/200?text=Sophie+Martin',
        description: 'Vente de véhicules pour familles.',
    },
    {
        id: 3,
        nom: 'Michel Durand',
        type: 'Particulier',
        poste: 'Vendeur de voitures anciennes',
        telephone: '0123-456-787',
        image: 'https://via.placeholder.com/200?text=Michel+Durand',
        description: 'Spécialiste des voitures vintage.',
    },
    {
        id: 4,
        nom: 'Alice Dupuis',
        type: 'Concessionnaire',
        poste: 'Vendeuse de voitures écologiques',
        telephone: '0123-456-786',
        image: 'https://via.placeholder.com/200?text=Alice+Dupuis',
        description: 'Vente de véhicules respectueux de l\'environnement.',
    },
];

const Vendeur = () => {
    const [filter, setFilter] = useState('');

    // Filtrer les vendeurs par nom
    const filteredVendeurs = vendeursFictifs.filter((vendeur) =>
        vendeur.nom.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="vendeur-container">
            <h1>Nos Vendeurs</h1>
            <input
                type="text"
                placeholder="Rechercher un vendeur..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="filter-input"
            />
            <div className="vendeur-grid">
                {filteredVendeurs.map((vendeur) => (
                    <div className="vendeur-card" key={vendeur.id}>
                        <img src={vendeur.image} alt={vendeur.nom} />
                        <h2>{vendeur.nom}</h2>
                        <p>Type: {vendeur.type}</p>
                        <p>Poste: {vendeur.poste}</p>
                        <p>Téléphone: {vendeur.telephone}</p>
                        <p>{vendeur.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Vendeur;
