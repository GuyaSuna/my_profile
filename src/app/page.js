'use client'
import React , {useState , useEffect}from 'react';
import '../../public/Main.scss';
import  WidgetBot ,  {  API  }  from  '@widgetbot/react-embed';
import video from '../../public/VideoParaPorfolio.gif'


import { useRouter } from 'next/navigation';

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


  const cambioInfo = (data) => {
      console.log(dataPosition)
      data ? setDataPosition(dataPosition-1) : setDataPosition(dataPosition+1) 
      console.log(dataPosition)
  }

  let fondos = [
    "",
    "VideoParaPorfolio.gif",
    "Redes.jpg",
    "",
    "https://wallpaperaccess.com/full/8351153.gif",
    "https://i.pinimg.com/564x/92/ba/af/92baafd195340f7a8d9c0c7495deda05.jpg",
    "",
    "https://w0.peakpx.com/wallpaper/701/1001/HD-wallpaper-among-us-minimalist-black-background-among-us.jpg",
    "https://i.pinimg.com/originals/8d/66/9b/8d669b63358117e3ff9fb28f1d7bb3c7.jpg",
    "",
    "https://64.media.tumblr.com/cb33ede8c01a3006989f79902e144e7d/801da6a4894a4104-ae/s640x960/291a0ae9b07a8d181c43d06cd6030b9f4e2ea662.gifv",
    "https://i.pinimg.com/564x/71/66/84/716684860515165ac058200342f3d789.jpg"
  ]

  let fondosGamer = [
    "",
    "https://img.freepik.com/premium-vector/hud-futuristic-user-interface-screen-element_303714-65.jpg",
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
         
        <div className={`SecondBody ${imagen}`}>   
       
    <div className={`wrapper${isTransitioning ? ' transitioning' : ''}`}>

      <div className={`one ${imagen}`}  onClick={() => setId(1)} > <div className="overlay">Acerca de mi</div></div>
      <div className={`two ${imagen}`} onClick={() => handleTwo()}><div className="overlay">GitHub</div></div>
      
      <div className={`six ${imagen}`} onClick={() =>handleSix()}> <div className="overlay">Linkedin</div></div>
        
      <div className={`four ${imagen}`} onClick={() =>setId(4)}><div className="overlay">Canal de Discord</div></div>  
      <div className={`five ${imagen}`} onClick={() =>setId(5)}>  <div className="overlay">Tienda de Software</div></div>
      <div className={`nine ${imagen}`} onClick={() =>setId(9)}>  <div className="overlay">Proyectos</div></div>
      <div className={`seven ${imagen}`} onClick={() =>setId(5)}>  <div className="overlay">aca</div></div>
      <div className={`eight ${imagen}`}  onClick={() =>setId(9)}>  <div className="overlay">Proyectos</div></div>
      <div className={`ten ${imagen}`} onClick={() =>cambiarImagen()}>  <div className="overlay">Modifica el estilo</div></div>
     
     </div>   </div >
  )}
    {isModalOpen && (
  <div className="modal"  onClick={handleModalClick}>
 <div className="modal-content" style={{ backgroundImage: `url(${gamer ? fondosGamer[Id] : fondos[Id]})` }}>
    {Id === 1  &&


      <div className={`container ${imagen}`}>
        <div className={`informacion ${imagen}`}>
         { dataPosition != 0 && <div className='anterior' onClick={ () =>cambioInfo(true)}/>} 
       { dataPosition == 0 && <div> <h1 className='infOne'>Hola a todos!</h1>
        <h3 className='infOne'>Mi nombre es Nahuel Pages y me considero un apasionado programador Full Stack. Durante dos años, tuve el privilegio de estudiar en la Universidad Claeh, donde profundicé mis conocimientos en diversos lenguajes de programación como JavaScript, C# y Java. 

        Estos estudios no solo me brindaron una sólida base técnica, sino que también me prepararon para enfrentar desafíos en tecnologías como React y SQL Server, así como en campos especializados como Ingeniería de Software y Ciberseguridad.
        </h3>

        <h3 className='infTwo'>
        Personalmente, mi dedicación diaria se centra en la adquisición de nuevos conocimientos y habilidades. Me entusiasma especialmente explorar tecnologías emergentes como Python y Next.js.
        Soy un ferviente creyente en el poder transformador de la programación y estoy comprometido a dar siempre lo mejor de mí para seguir creciendo y mejorando en este campo que tanto me apasiona.
        </h3>
        </div>}

        { dataPosition == 1 && <div> <h1 className='infOne'>Objetivo de esta pagina</h1>
        <h3 className='infOne'>El propósito principal de esta página web es presentar mis capacidades como programador de una manera atractiva y accesible para todos. Además, quiero ofrecer un espacio entretenido donde las personas puedan conocer más sobre mi trabajo y proyectos en curso.
        </h3>

        <h3 className='infTwo'>
        Actualmente, estoy trabajando en varios proyectos emocionantes, que incluyen juegos y páginas web innovadoras. Mi objetivo es compartir el progreso de estos proyectos aquí en este sitio, permitiendo a los visitantes seguir de cerca su desarrollo y, en algunos casos, incluso probarlos por sí mismos.
        </h3>
        </div>}
      {dataPosition == 2 && <div className='estadistica'> <div>
      <h1 className="infOne" >¡Gracias por tomarse el tiempo para conocer un poco más sobre mí y mi trabajo! Estoy emocionado de compartir más sobre mis proyectos y espero que disfruten explorando esta página web tanto como yo disfruto creándola. </h1>
    </div>  </div>}
       {dataPosition != 2 && <div className='siguiente' onClick={() => cambioInfo(false)}/>}
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
          <div className={`container2 ${imagen}`}> 
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
