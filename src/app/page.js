'use client'
import React from 'react';
import '../../public/Main.scss';

const PortfolioPage = () => {

  const handleButtonClick = (buttonNumber) => {

    alert(`Clic en el botón ${buttonNumber}`);
  };
  return (
    <> 
    <div className='Presentacion'>
      <h1 className='bienvenida'>Bienvenido a mi portafolio Online</h1>
    </div>
    <div className="wrapper">
      <div className="one" onClick={() => handleButtonClick(1)}>One</div>
      <div className="two" onClick={() => handleButtonClick(2)}>Two</div>
      <div className="three" onClick={() => handleButtonClick(3)}>Three</div>
      <div className="four" onClick={() => handleButtonClick(4)}>Four</div>
      <div className="five" onClick={() => handleButtonClick(5)}>Five</div>
      <div className="six" onClick={() => handleButtonClick(6)}>Six</div>
      <div className="seven" onClick={() => handleButtonClick(7)}>Seven</div>
      <div className="eight" onClick={() => handleButtonClick(8)}>Eight</div>
      <div className="nine" onClick={() => handleButtonClick(9)}>Nine</div>
      <div className="ten" onClick={() => handleButtonClick(10)}>Ten</div>
      <div className="eleven" onClick={() => handleButtonClick(11)}>Eleven</div>
    </div>
    </>
  );
};

export default PortfolioPage;
