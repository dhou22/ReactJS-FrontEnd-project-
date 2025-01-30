import React from "react";
// Import CSS styles

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-container">
      {/* Title Section */}
      <div className="about-us-title-container">
        <h1 className="about-us-main-title">À propos de nous</h1>
        <div className="about-us-underline"></div>
      </div>

      {/* Content Sections */}
      <div className="about-us-row">
        <img
          src="/mission.jpg" // Replace with your actual image path
          alt="Mission"
          className="about-us-image"
        />
        <div className="about-us-section">
          <h2 className="about-us-title"> 1 Notre mission</h2>
          <p>
          L'association Jid a pour mission de promouvoir le développement 
          économique et éducatif à travers des formations, des ressources et des initiatives qui favorisent 
          l'entrepreneuriat et l'autonomie des individus au sein de la communauté.
          </p>
        </div>
      </div>

      <div className="about-us-row">
        <img
          src="/vision.jpg" // Replace with your actual image path
          alt="Vision"
          className="about-us-image"
        />
        <div className="about-us-section">
          <h2 className="about-us-title"> 2 Notre vision</h2>
          <p>
          La vision de l'association Jid est de créer une communauté dynamique et autonome, où chacun a accès aux ressources et aux opportunités nécessaires pour
           développer ses compétences, réussir sur le plan économique et contribuer au bien-être collectif.

          </p>
        </div>
      </div>

      <div className="about-us-row">
        <img
          src="/historique .jpg" // Replace with your actual image path
          alt="History"
          className="about-us-image"
        />
        <div className="about-us-section">
          <h2 className="about-us-title"> 3 Notre historique</h2>
          <p>
          Fondée en 2018, l'association Jid est une structure à but non lucratif dédiée au développement économique et éducatif. 
          Elle propose des initiatives et des formations pour renforcer les compétences professionnelles et favoriser l'entrepreneuriat, 
          s'affirmant ainsi comme un acteur clé de l'autonomie économique au sein de sa communauté.

          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
