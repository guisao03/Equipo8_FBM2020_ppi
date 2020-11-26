import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/Abdomencard.css';

class Abdomengor extends Component {

    render () {
        return(
            <div>
               <div className="tim">
                <section className="ba">
                    <img src={Logo} />
                    <h1>Trabajo de Abdomen</h1>
                </section>
                <div className="coontainer">
                    <p>Las personas con un aumento de grasa abdominal tienen un mayor riesgo de tener enfermedades cardiovasculares tales como, enfermedades del corazón, diabetes, hígado graso, y muchas otras..
                    La acumulación de grasa está relacionada principalmente con el cortisol, conocido como la hormona del estrés, Si tu objetivo es disminuir grasa corporal realiza entrenamientos tipo HIIT o hacer circuitos alternando ejercicios de fuerza con otros metabólicos con cortos periodos de descanso entre ellos </p>
                    <div className="B1">
                        <ReactPlayer className="b1" url='https://youtu.be/QXZJV-Ylugo'
                        playing
                        muted
                        width="50%"
                        height="auto"
                         />
                         <div className="informacion">
                         <h3><strong> Abdominales estirando las piernas </strong></h3> <br/>
                         <p>Te ayudara a quemar y tonificar los musculos del abdomen y los cuadriceps,
                              tumbado en el suelo con una velocidad intensa.</p>
                              <h5>durar 2-3 minutos</h5>
                         </div>
                         
                    </div>
                    <div className="B2">
                        <ReactPlayer className="b2" url='https://youtu.be/yKbaxDKPYHc'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h3><strong>Cardio</strong></h3> <br/>
                         <p>se realiza con el fin de mejorar
                              la movilidad y la flexibilidad de los brazos y piernas,
                               ayuda que la sangre circule mas facilmente.</p>
                               <h5>durar 2-3 minutos</h5>
                         </div>
                       
                    </div>
                    <div className="B3">
                        <ReactPlayer className="b3" url='https://youtu.be/SujCzpdRlaA'
                       width="50%"
                       height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h3><strong>Abdominales con piernas estiradas</strong></h3> <br/>
                         <p>tendras como beneficios un abdomen mas firme y con una capa baja de grasa </p>
                         <h5>durar 2-3 minutos</h5>
                         </div>
                        
                    </div>
                    <div className="B4">
                        <ReactPlayer className="b4" url='https://youtu.be/ES3awLD052o'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h3><strong>abdominales cortos</strong></h3> <br/>
                         <p>quemaras todas las calorias de la parte del abdomen superior y lo tendras mas firme.</p>
                         <h5>durar 2-3 minutos</h5>
                         </div>
                        
                    </div>
                    <div className="B5">
                        <ReactPlayer className="b5" url='https://youtu.be/zJzovsuWcdM'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="programacion">
                             <h3><strong>Cardio</strong></h3> <br/>
                         <p>Te ayudara a quemar mas facilmente la grasa localizadas en el abdomen y piernas</p>
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
export default Abdomengor;