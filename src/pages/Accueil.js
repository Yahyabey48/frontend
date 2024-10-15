import React from 'react';
import './Accueil.css';

const Accueil = () => {
    return (
        <div>
            {/* Section Hero */}
            <div className="hero">
                <div className="hero-content">
                    <h1>Bienvenue sur notre site</h1>
                    <p>Trouvez votre voiture idéale parmi notre large sélection.</p>
                    <a href="#rubriques" className="cta-button">Découvrez nos rubriques</a>
                </div>
            </div>

            {/* Rubriques Section */}
            <div className="rubriques" id="rubriques">
                <div className="rubrique-card">
                    <h2>Voitures</h2>
                    <p>Découvrez notre sélection de voitures.</p>
                </div>
                <div className="rubrique-card">
                    <h2>Vendeurs</h2>
                    <p>Rencontrez nos vendeurs de confiance.</p>
                </div>
                <div className="rubrique-card">
                    <h2>Localisation</h2>
                    <p>Trouvez-nous facilement.</p>
                </div>
            </div>

            {/* Info Section */}
            <div className="info-section">
                <h2>À propos de nous</h2>
                <p>Nous sommes une entreprise dédiée à vous aider à trouver la voiture parfaite pour vos besoins.</p>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials">
                <h2>Témoignages</h2>
                <p>Voici ce que nos clients disent de nous !</p>
                {/* Ajoutez des témoignages ici */}
            </div>
        </div>
    );
};

export default Accueil;
