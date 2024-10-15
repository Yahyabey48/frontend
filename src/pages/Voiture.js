// src/pages/Voiture.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Voiture.css';

// Fichier de données fictives pour les voitures
const voituresFictives = [
    {
        id: 1,
        attributes: {
            nom: 'Toyota Corolla',
            type: 'essence',
            description: 'La Toyota Corolla est une voiture compacte et économique.',
            image: 'https://via.placeholder.com/500?text=Toyota+Corolla'
        }
    },
    {
        id: 2,
        attributes: {
            nom: 'Renault Clio',
            type: 'diesel',
            description: 'La Renault Clio est appréciée pour son confort et sa fiabilité.',
            image: 'https://via.placeholder.com/500?text=Renault+Clio'
        }
    },
    {
        id: 3,
        attributes: {
            nom: 'Tesla Model 3',
            type: 'electrique',
            description: 'La Tesla Model 3 est une voiture électrique haut de gamme.',
            image: 'https://via.placeholder.com/500?text=Tesla+Model+3'
        }
    },
    {
        id: 4,
        attributes: {
            nom: 'Ford Fiesta',
            type: 'essence',
            description: 'La Ford Fiesta est une petite voiture agile et économique.',
            image: 'https://via.placeholder.com/500?text=Ford+Fiesta'
        }
    },
    {
        id: 5,
        attributes: {
            nom: 'BMW Série 3',
            type: 'diesel',
            description: 'La BMW Série 3 est connue pour sa performance et son luxe.',
            image: 'https://via.placeholder.com/500?text=BMW+Série+3'
        }
    },
    {
        id: 6,
        attributes: {
            nom: 'Nissan Leaf',
            type: 'electrique',
            description: 'La Nissan Leaf est l\'une des voitures électriques les plus vendues.',
            image: 'https://via.placeholder.com/500?text=Nissan+Leaf'
        }
    }
];

const Voiture = () => {
    const [voitures, setVoitures] = useState(voituresFictives);
    const [filtreType, setFiltreType] = useState('');

    useEffect(() => {
        // Optionnel : ici tu pourrais charger les données depuis un API
    }, []);

    const handleFiltreChange = (event) => {
        setFiltreType(event.target.value);
    };

    const filteredVoitures = voitures.filter(voiture => 
        !filtreType || voiture.attributes.type === filtreType
    );

    return (
        <div className="voiture-container">
            <h1>Liste des Voitures</h1>
            <div>
                <label htmlFor="filtre-type">Filtrer par type:</label>
                <select id="filtre-type" value={filtreType} onChange={handleFiltreChange}>
                    <option value="">Tous</option>
                    <option value="essence">Essence</option>
                    <option value="diesel">Diesel</option>
                    <option value="electrique">Électrique</option>
                </select>
            </div>
            <div className="voiture-grid">
                {filteredVoitures.map((voiture) => (
                    <Link to={`/voiture/${voiture.id}`} key={voiture.id} className="voiture-card">
                        <img src={voiture.attributes.image} alt={voiture.attributes.nom} />
                        <h2>{voiture.attributes.nom}</h2>
                        <p>Type: {voiture.attributes.type}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Voiture;
