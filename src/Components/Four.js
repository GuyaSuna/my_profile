import React from "react";
import  WidgetBot ,  {  API  }  from  '@widgetbot/react-embed';



const Four = ({ imagen, closeModal }) => {





    return( 
    <div className={`container ${imagen}`}><div className="close-button-one" onClick={() => closeModal()}></div>
    <WidgetBot
      className="ds"
      server="1150805905982619670"
      channel="1150805907106705481"
    />
    </div>)


}
export default Four