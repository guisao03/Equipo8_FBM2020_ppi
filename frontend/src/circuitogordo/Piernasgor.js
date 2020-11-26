import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/Piernascard.css';


class Piernasgor extends Component {

    render () {
        return(
            <div>
               <div className="tim">
                <section className="ba">
                    <img src={Logo} />
                    <h1>Trabajo de piernas</h1>
                </section>
                <div className="coontainer">
                    <p> Las piernas son una zona sensible a la acumulación de grasa, lo que da lugar a la presencia de 
                        condiciones como la celulitis y la flacidez, que comprometen la estética de la zona y nos impiden 
                        lucir las piernas tonificadas y hermosas que deseamos, Por eso te recomendamos esta rutina de ejercicios para quemar y tonificar las piernas.</p>
                    <div className="D1">
                        <ReactPlayer className="d1" url='https://youtu.be/CrIOB5qVPbA'
                        playing
                        muted
                        width="50%"
                        height="auto"
                         />
                         <div className="informacion">
                         <h3><strong> Escalonada </strong></h3> <br/>
                         <p>este ejercicio te brinda una mayor intencidad al momento de intercambiar de pierna y te brindara mejor recistencia </p>
                              <h5>durar 2-3 minutos</h5>
                         </div>
                         
                    </div>
                    <div className="D2">
                        <ReactPlayer className="d2" url='https://youtu.be/P8yZGxsUKa4'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h3><strong>Escalonada</strong></h3> <br/>
                         <p>este ejercicio te brinda una mayor intencidad al momento de intercambiar de pierna y te brindara mejor recistencia</p>
                               <h5>durar 2-3 minutos</h5>
                         </div>
                       
                    </div>
                    <div className="D3">
                        <ReactPlayer className="d3" url='https://youtu.be/2E1BI8_NQz8'
                       width="50%"
                       height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h3><strong> cardio</strong></h3> <br/>
                         <p> con estos movimientos ayudaras a que tu cuerpo queme la mayor cantidad de grasa corporal. </p>
                         <h5>durar 2-3 minutos</h5>
                         </div>
                        
                    </div>
                    <div className="D4">
                        <ReactPlayer className="d4" url='https://youtu.be/lL28PN0UWnE'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h3><strong>Trabajo muslo interior</strong></h3> <br/>
                         <p>muslo interior aparte de que te brindar tonificar y quemar grasa localizada en la pierna te ayudara a tener unos gluteos mas duros y firmes. </p>
                         <h5>durar 2-3 minutos</h5>
                         </div>
                        
                    </div>
                    <div className="D5">
                        <ReactPlayer className="d5" url='https://youtu.be/44zM56QJPcM'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="programacion">
                             <h3><strong>sentadillas</strong></h3> <br/>
                         <p>las sentadillas te brinda y ayuda a tonificar las piernas y a la ves descarar todas las calorias acomuladas.</p>
                         <h5>durar 2-3 minutos</h5>
                         </div>
                         
                    </div>
                    <div className="D6">
                        <ReactPlayer className="d6" url='https://youtu.be/-GpbK7Ur0bU'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="programacion">
                             <h3><strong>sentallidas laterales </strong></h3> <br/>
                         <p>este tipo de sentadillas las realizas con mayor intencidad ya que te brinda un mayor rendimiento al quemar y tonificar tus piernas. </p>
                         <h5>durar 2-3 minutos</h5>
                         </div>
                         
                    </div> <div className="D7">
                        <ReactPlayer className="d7" url='https://youtu.be/ERN5w8RzTWw'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="programacion">
                             <h3><strong>santadillas en pinta de pies</strong></h3> <br/>
                         <p>con un buen equilibrio tendras las piernas que tu deseaste realizando este tipo de sentadillas.</p>
                         <h5>durar 2-3 minutos</h5>
                         </div>
                         
                    </div>                   
                    <div className="siguien">
                        <button className="sig"><Link to="/retroalimentacion" className="si"> Siguiente</Link></button>
                    </div>
                </div>
                </div>
           </div>
        );
    }
}
export default Piernasgor;