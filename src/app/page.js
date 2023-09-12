'use client'
import React , {useState , useEffect, use}from 'react';
import '../../public/Main.scss';
import  WidgetBot ,  {  API  }  from  '@widgetbot/react-embed'
import Artista1 from "../../public/Artistas.jpg"
import Artista2 from "../../public/Artistas2.jpg"

const PortfolioPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Id , setId] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % Artistas.length);
    }, 5000); 
  
    return () => clearInterval(interval);
  }, []);

  let Artistas = [
    "Artistas.jpg",
    "Artistas2.jpg",
    "Artistas3.jpg",
    "Artistas4.jpg"
  ]
  let fondos = [
    "o_esta_perfil.png",
    "Redes.jpg",
    "",
    "https://wallpaperaccess.com/full/8351153.gif",
    "https://i.pinimg.com/originals/ae/1a/32/ae1a3228917786b1c62c8f4ee9a827fe.gif",
    "https://i.pinimg.com/736x/2b/3c/3d/2b3c3d5f7633f8c76c55141efb5b43d7.jpg",
    "https://w0.peakpx.com/wallpaper/701/1001/HD-wallpaper-among-us-minimalist-black-background-among-us.jpg",
    "https://i.pinimg.com/originals/8d/66/9b/8d669b63358117e3ff9fb28f1d7bb3c7.jpg",
    "",
    "https://64.media.tumblr.com/cb33ede8c01a3006989f79902e144e7d/801da6a4894a4104-ae/s640x960/291a0ae9b07a8d181c43d06cd6030b9f4e2ea662.gifv",
    "https://cdn.dribbble.com/users/439871/screenshots/4269563/cv.jpg"
  ]

  useEffect(() => {
    if(Id != 0){
    setIsModalOpen(true);
    }
  },[Id])

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
      setId(0);
    }
  };

  const modalInfo = () =>{

  }

  return (
    <> 
    <div className="wrapper">
      <div className="one" onClick={() => setId(1)}> <div className="overlay">Presiona aqui para saber mas acerca de mi</div></div>
      <div className="two" onClick={() =>setId(2)}><div className="overlay">Mis Redes</div></div>
  
      <div className="four" onClick={() =>setId(4)}><div className="overlay">Comunicate conmigo</div></div>  
      <div className="five" onClick={() =>setId(5)}>  <div className="overlay">Tienda de Diseños</div></div>
      <div className="six" onClick={() =>setId(6)}>  <div className="overlay">Six</div></div>
      <div className="seven" onClick={() =>setId(7)}>  <div className="overlay">Seven</div></div>
      <div className="eight" onClick={() => setId(8)} style={{ backgroundImage: `url(${Artistas[backgroundIndex]})` }}><div className="overlay">Amigos artistas</div></div>
    
      <div className="nine" onClick={() =>setId(9)}>  <div className="overlay">Proyectos</div></div>
      <div className="three" onClick={() =>setId(11)}> <div className="overlay">Curriculum</div></div>
     
    </div>
    {isModalOpen && (
  <div className="modal"  onClick={handleModalClick}>
    <div className="modal-content" style={{ backgroundImage: `url(${fondos[Id - 1]})` }}>
      {Id === 4 ? (
        <WidgetBot
          className="ds"
          server="1150805905982619670"
          channel="1150805907106705482"
        />
      ) : (
        <p>holasa</p>
      )}
    </div>
  </div>
)}
    </>
  );
};

export default PortfolioPage;
