import React , {useState}from 'react';

const Nine = (imagen , closeModal) => {

    const [proyectPosition , setproyectPosition] = useState(0);

    const cambioInfoImage = (data) => {
        console.log(proyectPosition)
          data ? setproyectPosition(proyectPosition-1) : setproyectPosition(proyectPosition+1) 
          console.log(proyectPosition)
      }

    return(
        <div className={`container-9 ${imagen}`}>
        <div className="close-button-one" onClick={() => closeModal()}></div>
        <div className={`informacion ${imagen}`}>
          {proyectPosition !== 0 && <div className='anterior' onClick={() => cambioInfoImage(true)}></div>}
          {proyectPosition === 0 && (
            <div>
              <h1 className='infOne'>Bienvenidos a algunos de mis Proyectos</h1> 
              <div className="explicacion-proyecto">
                  <h2 className='infTwo'>Aqui puedes encontrar algunos de los distintos proyectos que he creado en este tiempo como programador. No he colocado todos los proyectos en los que he trabajado, para eso puedes entrar a mi github si tienes conocimiento al respecto o contactar conmigo para preguntar al respecto </h2>
                </div>
              
            </div>
          )}
          {proyectPosition === 1 && (
            <div>
              <h1 className='infOne'>Pagina web de ventas</h1> 
              <div className="explicacion-proyecto">
                  <h3 className='infTwo'>Este es un proyecto conectado a una base de datos creada con Spring desde el cual se podian registrar productos, ventas y clientes para una mejor gestion dentro de la empresa</h3>
                </div>
              <div className="image-description-container">
              <picture>
                  <source srcSet="ProyectoDDA2Movil.jpg" media="(max-width: 768px)" />
                  <source srcSet="Proyectos2DDA.png" />
                  <img src="Proyectos2DDA.png" alt="Imagen de una web de ventas" className="imagen-proyecto" />
                </picture>
                <picture>
                <source srcSet="SpringMovil.png" media="(max-width: 768px)" />
                  <source srcSet="ProyectoSpring.png" />
                  <img src="ProyectoSpring.png" alt="Imagen de codigo de una api" className="imagen-proyecto" />
                </picture>
              </div>
            </div>
          )}
          {proyectPosition === 2 && (
            <div>
              <h1 className='infOne'>Pagina web para Cine</h1> 
              <div className="explicacion-proyecto">
                  <h3 className='infTwo'>Este es un proyecto creado con Entity framework creado para simular la compra y/o administracion de peliculas de manera sencilla y eficaz</h3>
                </div>
              <div className="image-description-container">
              <picture>
                  <source srcSet="CinepicoMovil.jpg" media="(max-width: 768px)" />
                  <source srcSet="Cinepico.jpg" />
                  <img src="Cinepico.jpg" alt="Imagen de web de cine" className="imagen-proyecto" />
                </picture>
               
              </div>
            </div>
          )}
          {proyectPosition === 3 && (
            <div>
              <h1 className='infOne'>Aplicacion Movil para farmacia</h1> 
              <div className="explicacion-proyecto">
                  <h3 className='infTwo'>Este proyecto es una aplicacion movil creada con react native para la organizacion de una farmacia natural</h3>
                </div>
              <div className="image-description-container">
              <picture>
                  <source srcSet="FruitFarm.jpg" />
                  <img src="FruitFarm.jpg" alt="Imagen de app movil" className="imagen-proyecto-Fruit" />
                </picture>
               
              </div>
            </div>
          )}
          {proyectPosition === 4 && (
            <div>
              <h1 className='infOne'>Arbol binario de datos</h1> 
              <div className="explicacion-proyecto">
                  <h3 className='infTwo'>Este proyecto creado en java maneja el uso de arboles binarios de datos para mantener un control automatizado y sencillo sobre los tabajadores de empresas</h3>
                </div>
              <div className="image-description-container">
              <picture>
                  <source srcSet="AEDObg.png" media="(max-width: 768px)" />
                  <source srcSet="ABBJava.jpg" />
                  <img src="ABBJava.jpg" alt="Imagen de codigo en java" className="imagen-proyecto" />
                </picture>
               
              </div>
            </div>
          )}
           {proyectPosition != 4 && <div className='siguiente' onClick={() => cambioInfoImage(false)}/>}
        </div>
      </div>
    )
}
export default Nine