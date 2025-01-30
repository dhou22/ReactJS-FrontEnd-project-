import React, { useState } from "react";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import "primeflex/primeflex.css";

const DynamicIntro: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="intro-container">
      <div
        className={`intro-box ${isHovered ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className={`intro-text ${isHovered ? "text-hovered" : ""}`}>
        Bienvenue sur le site officiel de l'Association des Jeunes Ingénieurs de Djerba ! <br />
        Depuis 2018, nous inspirons les jeunes talents vers un avenir brillant..
        </p>
      </div>
      <Button
        label="Joignez-nous !"
        icon="pi pi-user-plus"
        className="p-button-primary join-us-button pulse-button"
      />
    </div>
  );
};

const HeroSection: React.FC = () => {
  const items = [
    { label: "Acceuil", className: "custom-home-class" },
    { label: "Nos événements", className: "custom-events-class" },
    { label: "Nos comités", className: "custom-comite-class" },
  ];

  const start = (
    <img alt="logo" src="/logo.png" height="100" className="mr-2" />
  );

  const end = (
    <Button
      label="Contacter-nous"
      icon="pi pi-envelope"
      className="p-button-success"
      style={{
        fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
        fontSize: '16px',
        fontWeight: 'bold',
      }}
      
    />
  );

  const images = ["/background1.jpg", "/background2.jpg", "/background3.jpg"];

  return (
    <div className="p-m-0 p-p-0">
      {/* Navigation Bar */}
      <Menubar model={items} start={start} end={end} className="custom-menubar" />

      {/* Dynamic Intro Section */}
      <DynamicIntro />

      {/* Scrolling Image Section */}
      <div className="image-scroll">
        <div className="scroll-wrapper">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              className="scroll-image"
            />
          ))}
          {images.map((src, index) => (
            <img
              key={`duplicate-${index}`}
              src={src}
              alt={`Duplicate Slide ${index + 1}`}
              className="scroll-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
