// src/pages/VoitureDetail.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './VoitureDetail.css';

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

const VoitureDetail = () => {
    const { id } = useParams();
    const [voiture, setVoiture] = useState(null);

    useEffect(() => {
        // Simuler la recherche de la voiture par ID
        const voitureTrouvee = voituresFictives.find(v => v.id === parseInt(id));
        setVoiture(voitureTrouvee);
    }, [id]);

    if (!voiture) {
        return <div>Voiture non trouvée.</div>;
    }

    return (
        <div className="voiture-detail">
            <h1>{voiture.attributes.nom}</h1>
            <img src={voiture.attributes.image} alt={voiture.attributes.nom} />
            <p>{voiture.attributes.description}</p>
            <Link to="/voiture" className="back-button">Retour à la liste</Link>
        </div>
    );
};

export default VoitureDetail;
