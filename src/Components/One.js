import React, { useState } from 'react';
import '../../public/Main.scss';

const One = ({ imagen, closeModal }) => {

  const [dataPosition, setDataPosition] = useState(0);

  const cambioInfo = (data) => {
    console.log(dataPosition)
    data ? setDataPosition(dataPosition - 1) : setDataPosition(dataPosition + 1)
    console.log(dataPosition)
  }

  return (
    <div className={`container ${imagen}`}>
      <div className="close-button-one" onClick={() => closeModal()}></div>
      <div className={`informacion ${imagen}`}>
        {dataPosition !== 0 && <div className='anterior' onClick={() => cambioInfo(true)} />}
        {dataPosition === 0 && <div>
          <h1 className='infTitle'>Hola a todos!</h1>
          <h2 className='infOne'>Mi nombre es Nahuel Pages y me considero un apasionado programador Full Stack. Durante dos años, tuve el privilegio de estudiar en la Universidad Claeh, donde profundicé mis conocimientos en diversos lenguajes de programación como JavaScript, C# y Java.
          Estos estudios no solo me brindaron una sólida base técnica, sino que también me prepararon para enfrentar desafíos en tecnologías como React y SQL Server, así como en campos especializados como Ingeniería de Software y Ciberseguridad.
          </h2>
          <h2 className='infTwo'>
            Personalmente, mi dedicación diaria se centra en la adquisición de nuevos conocimientos y habilidades. Me entusiasma especialmente explorar tecnologías emergentes como Python y Next.js.
            Soy un ferviente creyente en el poder transformador de la programación y estoy comprometido a dar siempre lo mejor de mí para seguir creciendo y mejorando en este campo que tanto me apasiona.
          </h2>
        </div>}
        {dataPosition === 1 && <div>
          <h1>Objetivo de esta pagina</h1>
          <h2 className='infOne'>El propósito principal de esta página web es presentar mis capacidades como programador de una manera atractiva y accesible para todos. Además, quiero ofrecer un espacio entretenido donde las personas puedan conocer más sobre mi trabajo y proyectos en curso.
          </h2>
          <h2 className='infTwo'>
            Actualmente, estoy trabajando en varios proyectos emocionantes, que incluyen juegos y páginas web innovadoras. Mi objetivo es compartir el progreso de estos proyectos aquí en este sitio, permitiendo a los visitantes seguir de cerca su desarrollo y, en algunos casos, incluso probarlos por sí mismos.
          </h2>
        </div>}
        {dataPosition === 2 && <div className='estadistica'>
          <div>
            <h1 className="infOne">¡Gracias por tomarse el tiempo para conocer un poco más sobre mí y mi trabajo! Estoy emocionado de compartir más sobre mis proyectos y espero que disfruten explorando esta página web tanto como yo disfruto creándola. </h1>
          </div>
        </div>}
        {dataPosition !== 2 && <div className='siguiente' onClick={() => cambioInfo(false)} />}
      </div>
    </div>
  )
};

export default One;