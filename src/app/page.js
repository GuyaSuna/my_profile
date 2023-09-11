'use client'
import React , {useState , useEffect}from 'react';
import '../../public/Main.scss';
import  WidgetBot ,  {  API  }  from  '@widgetbot/react-embed'

const PortfolioPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  const modalInfo = () =>{

  }

  return (
    <> 
    <div className="wrapper">
      <div className="one" onClick={() => handleButtonClick()}> <div className="overlay">Presiona aqui para saber mas acerca de mi</div></div>
      <div className="two" onClick={() => handleButtonClick()}><div className="overlay">Mis Redes</div></div>
      <div className="three" onClick={() => handleButtonClick()}></div>
      <div className="four" onClick={() => handleButtonClick()}><div className="overlay">Comunicate conmigo</div></div>  
      <div className="five" onClick={() => handleButtonClick()}>  <div className="overlay">Tienda de Diseños</div></div>
      <div className="six" onClick={() => handleButtonClick()}>  <div className="overlay">Six</div></div>
      <div className="seven" onClick={() => handleButtonClick()}>  <div className="overlay">Seven</div></div>
      <div className="eight" onClick={() => handleButtonClick()}>  <div className="overlay">Eight</div></div>
      <div className="nine" onClick={() => handleButtonClick()}>  <div className="overlay">Nine</div></div>
      <div className="ten" onClick={() => handleButtonClick()}>  <div className="overlay">Proyectos</div></div>
      <div className="eleven" onClick={() => handleButtonClick()}> <div className="overlay">Curriculum</div></div>
    </div>
    {isModalOpen && (
 <div className="modal" onClick={handleModalClick}>
 <div className="modal-content">
   <WidgetBot
     className='ds'
     server="1150805905982619670"
     channel="1150805907106705482"
   />
 </div>
</div>
      )}
    </>
  );
};

export default PortfolioPage;
