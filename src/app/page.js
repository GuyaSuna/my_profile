'use client'
import React , {useState , useEffect}from 'react';
import '../../public/Main.scss';

const PortfolioPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <> 
    <div className="wrapper">
      <div className="one" onClick={() => handleButtonClick()}><div className="overlay">Presiona aqui para saber mas acerca de mi</div></div>
      <div className="two" onClick={() => handleButtonClick()}><div className="overlay">Texto relacionado a Two</div></div>
      <div className="three" onClick={() => handleButtonClick()}></div>
      <div className="four" onClick={() => handleButtonClick()}>  <div className="overlay">Four</div></div>
      <div className="five" onClick={() => handleButtonClick()}>  <div className="overlay">Tienda de Diseños</div></div>
      <div className="six" onClick={() => handleButtonClick()}>  <div className="overlay">Six</div></div>
      <div className="seven" onClick={() => handleButtonClick()}>  <div className="overlay">Seven</div></div>
      <div className="eight" onClick={() => handleButtonClick()}>  <div className="overlay">Eight</div></div>
      <div className="nine" onClick={() => handleButtonClick()}>  <div className="overlay">Nine</div></div>
      <div className="ten" onClick={() => handleButtonClick()}>  <div className="overlay">Proyectos</div></div>
      <div className="eleven" onClick={() => handleButtonClick()}> <div className="overlay">Eleven</div></div>
    </div>
    {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            
            <h2>Información del botón</h2>
            <p>Este es el contenido del modal.</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioPage;
