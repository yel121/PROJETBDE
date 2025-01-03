import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>
          <span className="text-decoration-lines">Unis pour Vivre, Rêver</span><br />
        </h1>
        <h2>
          <span className="text-decoration-line-third">&</span>
          <span className="highlight highlight-pink">Réussir</span>
          <span className="highlight highlight-green">Ensemble</span> !
        </h2>
        <p>
          "Nous sommes une équipe de visionnaires, créateurs, et bâtisseurs. 
          Ensemble, nous croyons que le véritable progrès naît du courage d’explorer l’inconnu et de repousser les limites."
        </p>
        <button className='btn'>
          Explore more <img src={dark_arrow} alt="Dark arrow icon" />
        </button>
      </div>

    </div>
  );
}

export default Hero;
