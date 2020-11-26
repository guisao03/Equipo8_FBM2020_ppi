import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/brazoscard.css';

class Brazosgor extends Component {

    render () {
        return(
            <div>
               <div className="tim">
                <section className="ba">
                    <img src={Logo} />
                    <h1>trabajo de cardio para brazos</h1>
                </section>
                <div className="coontainer">
                    <p> La grasa acumulada en los brazos, conocida en el mundo anglosajón como bingo wings, puede aparecer en las mujeres debido a unos niveles demasiado bajos de testosterona. esto no quiere decir que no a los hombres no se les acumulen esta grasa, que somos menos propensos a tenerla si, ya que no se lleva una vida activa y nos descuidamos por esa parte.
                        eliminar esta grasa localizada te facilita la flexibilidad de los brazos y dejas atras el dormimiento de las manos.</p>
                    <div className="C1">
                        <ReactPlayer className="c1" url='https://youtu.be/rP02CTOzSh8'
                        playing
                        muted
                        width="50%"
                        height="auto"
                         />
                         <div className="informacion">
                         <h2><strong>Circulares con brazos </strong></h2> <br/>
                         <p>Este tipo de actividad fisica te ayudara a mejorar la circulacion y quemar
                              la grasa localizada en la parte del sector de los hombres. </p>
                              <h5> duran 1 minuto </h5>
                         </div>
                         
                    </div>
                    <div className="C2">
                        <ReactPlayer className="c2" url='https://youtu.be/yKbaxDKPYHc'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Cardio</strong></h2> <br/>
                         <p>Esta actividad fisica se realisa con el fin de mejorar la movilidad y flexibilidad de los brazos y piernas, 
                             ayuda que la sangre circule mas facilmente.</p>
                         <h5> duran 1 minuto </h5>
                         </div>
                       
                    </div>
                    <div className="C3">
                        <ReactPlayer className="c3" url='https://youtu.be/-TjhM6BnG1Y'
                       width="50%"
                       height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>flexiones con apoyo</strong></h2> <br/>
                         <p>Esto te ayuda a quemar la grasa localizada en las partes los brazos y piernas,
                              te ayuda a tonificar los musculos biceps y triceps y de las piernas tonificar los cuadriceps </p>
                         <h5> duran 1 minuto </h5>
                        
                         </div>
                        
                    </div>
                    <div className="C4">
                        <ReactPlayer className="c4" url='https://youtu.be/zJzovsuWcdM'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Cardio</strong></h2> <br/>
                         <p>Este cardio te ayuda a quemar la grasa localizadas en tu cuerpo y se realiza con una
                             velocidad constante </p>
                         <h5> duran 2 minuto </h5>
                         

                         </div>
                        
                    </div>
                    <div className="C5">
                        <ReactPlayer className="c5" url='https://youtu.be/HAammZ5RM_E'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="programacion">
                             <h2><strong>Plancha con brazos estirados </strong></h2> <br/>
                         <p>este te ayuda a quemar con intencidad las calorias localizadas en los brazos y abdomen.</p>
                         <h5> duran 1 minuto </h5>
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
export default Brazosgor;