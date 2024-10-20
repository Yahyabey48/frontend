import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Voiture.css';

const STRAPI_URL = 'http://localhost:1337'; // Your Strapi URL

const CarPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Use populate=* to include media like photos
        const response = await axios.get(`${STRAPI_URL}/api/cars?populate=*`);
        console.log('Full API response with media:', response.data); // Debugging: check for media
        setCars(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error("Erreur lors de la récupération des voitures:", err);
        setError("Impossible de charger les voitures. Veuillez réessayer plus tard.");
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <div className="loading">Chargement des voitures...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="voiture-container">
      <h1>Nos Véhicules</h1>
      <div className="voiture-grid">
        {cars.length === 0 ? (
          <p>Aucune voiture trouvée.</p>
        ) : (
          cars.map((car) => (
            <div key={car.id} className="voiture-card">
              <h2>{car.voiture || 'Nom inconnu'}</h2>
              <p>Prix: {car.prix ? `${car.prix} €` : 'Non spécifié'}</p>

              {/* Check if there is an image */}
              {car.photos && car.photos.length > 0 && car.photos[0]?.url ? (
                <img 
                  src={`${STRAPI_URL}${car.photos[0].url}`} 
                  alt={car.voiture} 
                  className="voiture-photo"
                />
              ) : (
                <p>Aucune photo disponible</p>
              )}
              
              <p>ID: {car.id}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CarPage;
