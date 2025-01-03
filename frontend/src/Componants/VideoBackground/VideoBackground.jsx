import React from "react";
import "./VideoBackground.css"; // External CSS file
import videoFile from "../../assets/VideoBackground.mp4"; // Renamed video variable

const VideoBackground = () => {
  return (
    <div>
      {/* Video Background Section */}
      <div className="video-container">
        {/* Background Video */}
        <video autoPlay muted loop id="background-video">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="overlay"></div>

        {/* Text Content */}
        <div className="text-content">
          <h1>
            Unis pour <span>Vivre</span>, <span>Rêver</span> &{" "}
            <span>Réussir Ensemble</span>
          </h1>
          <p>
            "Nous sommes une équipe de visionnaires, créateurs, et bâtisseurs.
            Ensemble, nous croyons que le véritable progrès naît du courage
            d'explorer l'inconnu et de repousser les limites."
          </p>
          <button>Explore more →</button>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
