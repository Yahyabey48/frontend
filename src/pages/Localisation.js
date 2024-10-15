// src/pages/Localisation.js

import React, { useEffect, useState } from 'react';
import './Localisation.css';


const Localisation = () => {
    const [position, setPosition] = useState([47.3695, 0.7517]); // Coordonnées fictives
    const [address, setAddress] = useState('29 Boulevard Viala, St Pierre Des Corps, Fictifland');

    // Optionnel : si vous souhaitez afficher une adresse fictive sans appel API
    useEffect(() => {
        // Pas besoin d'API pour une adresse fictive
        // setAddress("29 Boulevard Viala, St Pierre Des Corps, Fictifland");
    }, []);

    return (
        <div className="localisation-container">
            <h1>Localisation</h1>
            <p>Voici notre emplacement fictif :</p>
            <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        <strong>Notre Adresse Fictive</strong><br />{address}
                    </Popup>
                </Marker>
            </MapContainer>
            <p style={{ marginTop: '20px' }}>N'hésitez pas à nous rendre visite !</p>
        </div>
    );
};

export default Localisation;
