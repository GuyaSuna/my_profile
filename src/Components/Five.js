import React , {useState , useEffect}from 'react';

const Five = (imagen , closeModal) => {

    const [selectorValue, setSelectorValue] = useState('opcion1'); 
    const [inputValue, setInputValue] = useState(''); 
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [isNormal, setIsNormal] = useState(true);
    const [displayText, setDisplayText] = useState('');

   
    useEffect(() => {
        let text = 'Bienvenido a mi mercado, esto todavia esta en desarrollo. Vuelve mas tarde y tal vez esté listo ;).'
        let currentIndex = 0;
        const intervalId = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayText(text.substring(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(intervalId);
          }
        }, 25); 
    
        return () => clearInterval(intervalId);
      }, []);


    function toggleAnimation() {
        setIsNormal(!isNormal);
    }

    const handleClick = () => {
     alert('Esto todavia no esta funcionando')
     }
    return(
        <div className= {`container2 ${imagen}`}> 
    <div className={`close-button ${isNormal ? 'normal' : 'ampliado'}`} onClick={() => closeModal()}></div>
    <div className={`chat-burbuja ${imagen}`}> 
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
    )
}

export default  Five