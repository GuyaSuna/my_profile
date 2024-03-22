'use client'
import React , {useState , useEffect}from 'react';
import '../../public/Main.scss';
import { useRouter } from 'next/navigation';
import One from '@/Components/One';
import Four from '@/Components/Four';
import Five from '@/Components/Five';
import Nine from '@/Components/Nine';
const PortfolioPage = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imagen, setImagen] = useState('Basic');
  const [Id , setId] = useState(0);
  const [gamer , setGamer] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

 



  let fondos = [
    "",
    "https://i.pinimg.com/originals/74/5c/c9/745cc90fcc688569610f84bc5d2b2fd6.gif",
    "Redes.jpg",
    "",
    "https://wallpaperaccess.com/full/8351153.gif",
    "",
    "",
    "https://w0.peakpx.com/wallpaper/701/1001/HD-wallpaper-among-us-minimalist-black-background-among-us.jpg",
    "https://i.pinimg.com/564x/ec/44/64/ec44647bcbe23e5f13cc605bc2e57d79.jpg",
    "https://i.pinimg.com/originals/c4/0d/b6/c40db678aa354ba91257f6258a1521e1.gif",
   
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
    "https://i.pinimg.com/564x/86/58/71/8658718f5f289e3b0d06c8fdb233ceb9.jpg",
  
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

    <div className={`one ${imagen}`} tabIndex={0} onClick={() => setId(1)}> <div className="overlay">Acerca de mi</div></div>
            <div className={`two ${imagen}`} tabIndex={0} onClick={() => handleTwo()}><div className="overlay">GitHub</div></div>
            <div className={`six ${imagen}`} tabIndex={0} onClick={() =>handleSix()}> <div className="overlay">Linkedin</div></div>
            <div className={`four ${imagen}`} tabIndex={0} onClick={() =>setId(4)}><div className="overlay">Canal de Discord</div></div>  
            <div className={`five ${imagen}`} tabIndex={0} onClick={() =>setId(5)}>  <div className="overlay">Tienda de Software</div></div>
            <div className={`nine ${imagen}`} tabIndex={0} onClick={() =>setId(9)}>  <div className="overlay">Proyectos</div></div>
            <div className={`seven ${imagen}`} tabIndex={0} onClick={() =>descargarCurriculum()}>  <div className="overlay">Curriculum</div></div>
            <div className={`eight ${imagen}`} tabIndex={0} onClick={() =>setId(8)}>  <div className='video'>
      <iframe 
        width="100%" 
        height="100%" 
        src={`${imagen == 'Basic' ? "https://www.youtube.com/embed/-KH6ZSavJ6Y" : "https://www.youtube.com/embed/y2ECgOhoDGs"}`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>
    </div> </div>
      <div className={`ten ${imagen}`} onClick={() =>cambiarImagen()}>  <div className="overlay">Modificar estilo</div></div>
     
     </div>   </div >
  )}
    {isModalOpen && (
  <div className="modal"  onClick={handleModalClick}>
 <div className="modal-content" style={{ backgroundImage: `url(${gamer ? fondosGamer[Id] : fondos[Id]})` }}>

     {Id === 1  &&
     <>
   <One imagen={imagen} closeModal={() => closeModal()}/>
     </>
      }
      {Id === 4  &&
      <Four imagen={imagen} closeModal={() => closeModal()}/>
      }
     {Id === 5 &&          
     <Five imagen={imagen} closeModal={() => closeModal()} />
    }
    {Id === 9  &&
      <Nine imagen={imagen} closeModal={() => closeModal()} />
    }
    </div>
   </div>   

)}

</>
  );
};

export default PortfolioPage;




//porfolio-415712