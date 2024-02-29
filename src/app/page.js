'use client'
import React , {useState , useEffect}from 'react';
import '../../public/Main.scss';
import  WidgetBot ,  {  API  }  from  '@widgetbot/react-embed';




import { useRouter } from 'next/navigation';

const PortfolioPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagen, setImagen] = useState('Basic');
  const [Id , setId] = useState(0);
  const [dataPosition , setDataPosition] = useState(0);
  const [gamer , setGamer] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showDiv, setShowDiv] = useState(false);
  const [selectorValue, setSelectorValue] = useState('opcion1'); 
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const [isNormal, setIsNormal] = useState(true);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [displayText, setDisplayText] = useState('');

  function toggleAnimation() {
    setIsNormal(!isNormal);
  }

  let text = 'Bienvenido a mi mercado, abre la pestaña a tu derecha y rellena la informacion necesaria para que pueda saber que es lo que buscas'
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50); 

    return () => clearInterval(intervalId);
  }, [Id==5]);


  const cambioInfo = (data) => {
      console.log(dataPosition)
      data ? setDataPosition(dataPosition-1) : setDataPosition(dataPosition+1) 
      console.log(dataPosition)
  }

  let fondos = [
    "",
    "https://i.pinimg.com/originals/66/19/80/661980c1f6ed5448d6825d5920048bbb.gif",
    "Redes.jpg",
    "",
    "https://wallpaperaccess.com/full/8351153.gif",
    "",
    "",
    "https://w0.peakpx.com/wallpaper/701/1001/HD-wallpaper-among-us-minimalist-black-background-among-us.jpg",
    "https://i.pinimg.com/564x/ec/44/64/ec44647bcbe23e5f13cc605bc2e57d79.jpg",
    "https://i.pinimg.com/564x/9d/e6/cd/9de6cddc05ea745de25b1d77b476efb2.jpg",
   
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
    "fondo_div.png",
    "https://i.pinimg.com/564x/9d/e6/cd/9de6cddc05ea745de25b1d77b476efb2.jpg",
  
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
    setId(0);
  };
  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };

  const handleSix = () => {
    router.push("https://www.linkedin.com/in/nahuel-pages-96915724b/")
  }
  const handleTwo = () => {
    router.push("https://github.com/GuyaSuna")
  }

  const descargarCurriculum = () => {
    const url = '/curriculum.pdf'; 


    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'curriculum.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      <div className={`seven ${imagen}`} onClick={() =>descargarCurriculum()}>  <div className="overlay">Curriculum</div></div>
      <div className={`eight ${imagen}`}  onClick={() =>setId(8)}>  <div className="overlay">Conocimientos</div></div>
      <div className={`ten ${imagen}`} onClick={() =>cambiarImagen()}>  <div className="overlay">Modificar estilo</div></div>
     
     </div>   </div >
  )}
    {isModalOpen && (
  <div className="modal"  onClick={handleModalClick}>
 <div className="modal-content" style={{ backgroundImage: `url(${gamer ? fondosGamer[Id] : fondos[Id]})` }}>

    {Id === 1  &&
    <>
  
      <div className={`container ${imagen}`}> 
        <div className="close-button-one" onClick={() => closeModal()}></div>
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
      </div></>
      }
            {Id === 2  &&
            <div>
                <div className={`container ${imagen}`}> <div className="close-button" onClick={() => closeModal()}></div> </div>
              <p> two </p>
              </div>
      }
            {Id === 3  &&
              <div>
              <div className={`container ${imagen}`}> <div className="close-button" onClick={() => closeModal()}></div> </div>
              <p> ESTO ESTA EN CREACION Y TODAVIA NO FUNCIONA</p>
              </div>
      }
      {Id === 4  &&

       <div className={`container ${imagen}`}>       <div className="close-button-one" onClick={() => closeModal()}></div>
        <WidgetBot
          className="ds"
          server="1150805905982619670"
          channel="1150805907106705482"
        />
        </div>
      }
     {Id === 5 &&          
  <div className= 'container2'> 
    <div className={`close-button ${isNormal ? 'normal' : 'ampliado'}`} onClick={() => closeModal()}></div>
    <div className='chat-burbuja'> 
     {displayText}
    </div> 
    <div className={`fondo-comercio ${isNormal ? 'normal' : 'ampliado'}`}>
      <button  className={`left-arrow-button ${isNormal ? '' : 'rotate'}`} onClick={toggleAnimation}/>
      <div className={`form-container ${isNormal ? 'normal' : 'ampliado'}`}>
      <div>
        <label htmlFor="selector" className={`input-label ${isNormal ? 'normal' : 'ampliado'}`}>Selecciona un tipo de servicio:</label>
        <select id="selector" className={`select-input ${isNormal ? 'normal' : 'ampliado'}`} value={selectorValue} onChange={(e) => setSelectorValue(e.target.value)}>
          <option value="" disabled hidden>Selecciona una opción</option>
          <option value="Codigo De Notificaciones">Código De Notificaciones</option>
          <option value="Pagina Web">Página Web</option>
          <option value="Comercio Web">Comercio Web</option>
          <option value="Red Social">Red Social</option>
          <option value="Juego">Juego</option>
          <option value="Otro">Otro</option>
          <option value="Codigo De Automatizaciones">Código De Automatizaciones</option>
        </select>
      </div>
      <div>
        <label htmlFor="texto" className={`input-label ${isNormal ? 'normal' : 'ampliado'}`}>Dame una descripción de lo que buscas:</label>
        <textarea id="texto" className={`text-input-description ${isNormal ? 'normal' : 'ampliado'}`} value={inputValue} onChange={(e) => setInputValue(e.target.value)}></textarea>
      </div>
      <div>
        <label htmlFor="nombre" className={`input-label ${isNormal ? 'normal' : 'ampliado'}`}>Nombre:</label>
        <input type="text" id="nombre" className={`text-input ${isNormal ? 'normal' : 'ampliado'}`} value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email" className={`input-label ${isNormal ? 'normal' : 'ampliado'}`}>Email:</label>
        <input type="email" id="email" className={`text-input ${isNormal ? 'normal' : 'ampliado'}`} value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="telefono" className={`input-label ${isNormal ? 'normal' : 'ampliado'}`}>Teléfono:</label>
        <input type="tel" id="telefono" className={`text-input ${isNormal ? 'normal' : 'ampliado'}`} value={telefono} onChange={(e) => setTelefono(e.target.value)} />
      </div>
      <button className={`button ${isNormal ? 'normal' : 'ampliado'}`} onClick={ () => handleClick()}>Enviar</button>
    </div>
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
              <div>
              <div className={`container ${imagen}`}> <div className="close-button" onClick={() => closeModal()}></div> </div>
              <p> ESTO ESTA EN CREACION Y TODAVIA NO FUNCIONA</p>
              </div>
      }
          {Id === 9  &&
              <div>
              <div className={`container ${imagen}`}> <div className="close-button" onClick={() => closeModal()}></div> </div>
              <p> ESTO ESTA EN CREACION Y TODAVIA NO FUNCIONA</p>
              </div>
      }
    </div>
   </div>   

)}

</>
  );
};

export default PortfolioPage;




//porfolio-415712