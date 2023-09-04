'use client'
import React from 'react';
import '../../public/Main.scss'; 


export default function Home() {
  return (
    <main className="main">
      <div style={{ position: 'relative' }}>
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src="/Video/FondoApp.mp4" type="video/mp4" />
        </video>

        <div className="hero-container">
          <div className="hero-image-container">
            <img className="hero-image" src="/ImagenLinkedIn.jpg" alt="" width="150" height="150" />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">Nahuel Pages</h1>
            <p className="hero-description">Soy un estudiante de programacion con 2 años de estudios y conocimiento en varios lenguajes, librerias y frameworks. Estoy muy emocionado por comenzar mi vida laboral y dar lo mejor de mi para superar los obstaculos que afronte</p>

          </div>
        </div>
      </div>
    </main>
  );
}
