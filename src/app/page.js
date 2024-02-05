'use client'
import React , {useState , useEffect}from 'react';
import '../../public/Main.scss';
import  WidgetBot ,  {  API  }  from  '@widgetbot/react-embed'
import Foto from '../../public/o_esta_perfil.png'
import FotoPrueba from '../../public/GitHubProfile.png'
import Image from 'next/image';
import { useRouter } from 'next/navigation'

const PortfolioPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagen, setImagen] = useState('Basic');
  const [Id , setId] = useState(0);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [dataPosition , setDataPosition] = useState(0);
  const [gamer , setGamer] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const router = useRouter();



  let fondos = [
    "",
    "Redes.jpg",
    "",
    "https://wallpaperaccess.com/full/8351153.gif",
    "",
    "https://i.pinimg.com/736x/2b/3c/3d/2b3c3d5f7633f8c76c55141efb5b43d7.jpg",
    "https://w0.peakpx.com/wallpaper/701/1001/HD-wallpaper-among-us-minimalist-black-background-among-us.jpg",
    "https://i.pinimg.com/originals/8d/66/9b/8d669b63358117e3ff9fb28f1d7bb3c7.jpg",
    "",
    "https://64.media.tumblr.com/cb33ede8c01a3006989f79902e144e7d/801da6a4894a4104-ae/s640x960/291a0ae9b07a8d181c43d06cd6030b9f4e2ea662.gifv",
    "https://cdn.dribbble.com/users/439871/screenshots/4269563/cv.jpg"
  ]

  const cambiarImagen = () => {
    setIsTransitioning(true);
    setShowDiv(true);
    setTimeout(() => {

      gamer ? setGamer(false) : setGamer(true);
      gamer ? setImagen('Basic') : setImagen('Gamer');
      setIsTransitioning(false);
        setShowDiv(false); 
    }, 2000); 
  };

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

  const handleSix = () => {
    router.push("https://www.linkedin.com/in/nahuel-pages-96915724b/")
  }
  const handleTwo = () => {
    router.push("https://github.com/GuyaSuna")
  }

  return (
    <>     
     {showDiv && (
        <div className={`transitioning-div${isTransitioning ? ' transitioning' : ''}`}>

        </div>
      )}
      {!showDiv && (
    <div className={`wrapper${isTransitioning ? ' transitioning' : ''}`}>

      <div className={`one ${imagen}`}  onClick={() => setId(1)} > <div className="overlay">Acerca de mi</div></div>
      <div className={`two ${imagen}`} onClick={() => handleTwo()}><div className="overlay">GitHub</div></div>
      
      <div className="six" onClick={() =>handleSix()}> <div className="overlay">Linkedin</div></div>
        
      <div className={`four ${imagen}`} onClick={() =>setId(4)}><div className="overlay">Canal de Discord</div></div>  
      <div className={`five ${imagen}`} onClick={() =>setId(5)}>  <div className="overlay">Tienda de Software</div></div>
      <div className={`nine ${imagen}`} onClick={() =>setId(9)}>  <div className="overlay">Proyectos</div></div>
      <div className={`seven ${imagen}`} onClick={() =>setId(5)}>  <div className="overlay">Contacta conmigo</div></div>
      <div className={`eight ${imagen}`}  onClick={() =>setId(9)}>  <div className="overlay">Proyectos</div></div>
      <div className={`ten ${imagen}`} onClick={() =>cambiarImagen()}>  <div className="overlay">Modifica el estilo</div></div>
     
     </div>
  )}
    {isModalOpen && (
  <div className="modal"  onClick={handleModalClick}>
    <div className="modal-content" style={{ backgroundImage: `url(${fondos[Id - 1]})` }}>
    {Id === 1  &&


      <div className="container">
        <div className='informacion'>
         { dataPosition != 0 && <div className='anterior' onClick={()=>setDataPosition(dataPosition-1)}/>} 
       { dataPosition == 0 && <div> <h1 className='infOne'>informacion sobre mi y mis habilidades personales</h1>
        <h3 className='infOne'>Mi nombre es Nahuel Pages y soy un programador full Stack con dos años de estudios en la Universidad Claeh
        donde mis estudios abarcaron Lenguajes como JavaScript , C# y Java. 

        A su vez me prepararon para afrontar desafios con React y sqlServer y me dote con conocimientos sobre Ingenieria en Software asi como en ciber seguridad
        </h3>

        <h3 className='infTwo'>
         Personalmente me dedico a diario a adquirir nuevos conocimientos como Python o NextJs, soy un apasionado de la programacion
         y estoy dispuesto a dar el 100% de mi para seguir avanzando y mejorando
        </h3>
        </div>}

        { dataPosition == 1 && <div> <h1 className='infOne'>Objetivo de esta pagina</h1>
        <h3 className='infOne'>El objetivo de esta pagina web es presentar mis capacidades como programador y brindar un espacio
        entretenido a las personas. 
        </h3>

        <h3 className='infTwo'>
          Tengo varios proyectos en progreso como juegos y paginas web. Una vez terminados o avanzados mi ides es mostrarlos en esta pagina
          para que puedan ver los avances o probarlos.
        </h3>
        </div>}
      {dataPosition == 2 && <div className='estadistica'> <div>
      <div className="IconosEst" />
    </div>  </div>}
       {dataPosition != 2 && <div className='siguiente' onClick={()=>setDataPosition(dataPosition+1)}/>}
        </div>
      </div>
      }
            {Id === 2  &&
              <p> two </p>
      }
            {Id === 3  &&
              <p> three</p>
      }
      {Id === 4  &&
        <WidgetBot
          className="ds"
          server="1150805905982619670"
          channel="1150805907106705482"
        />
      }
          {Id === 5  &&
          <div className='container2'> 
          <div className='chat-burbuja'> 
             Bienvenido a mi mercado, selecciona el estilo de tu interes. O habla directamente conmigo
          </div>
                  <div className='fondo-comercio'>

                  </div>
          </div>        
      }
          {Id === 6  &&
              <p> six</p>
      }
          {Id === 7  &&
              <p> seven</p>
      }
          {Id === 8  &&
              <p> eight</p>
      }
          {Id === 9  &&
              <p> nine</p>
      }
    </div>
  </div>
)}

    </>
  );
};

export default PortfolioPage;
