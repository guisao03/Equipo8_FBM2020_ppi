import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/cardiocard.css';


class Cardio extends Component {
    render () {
        return(
            <div>
                <div className="tim">
                <section className="ba">
                    <img src={Logo} />
                    <h1>Trabajo de cardio todo el cuerpo</h1>
                </section>
                <div className="coontainer">
                <p>Te recomendamos esta lineas de circuitos de cardio, la cual trabajas todo el cuerpo asi quemando la mayor cantidad de calorias acomulada en tu cuerpo.
                Disminuye la grasa corporal, el cardio mejora nuestro Índice de Masa Corporal y mejora y acelera nuestro metabolismo. 
                     </p>
                    <div className="E1">
                        <ReactPlayer className="e1" url='https://youtu.be/yKbaxDKPYHc'
                        playing
                        muted
                        width="50%"
                        height="auto"
                         />
                         <div className="informacion">
                         <h3><strong> Cardio  </strong></h3> <br/>
                         <p>Esta actividad fisica se realiza con el fin de mejorar la movilidad y flexibilidad de los brazos y piernas, ayuda que la sangre circule mas facilmente.</p>
                         <h4> duran 2 minuto </h4>
                         </div>

                         </div>
                         <div className="E2">
                        <ReactPlayer className="e2" url='https://youtu.be/QXZJV-Ylugo'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h3><strong>Abdominales estirando las piernas</strong></h3> <br/>
                         <p>Te ayudara a quemar y tonificar los musculos del abdomen y los cuadriceps,
                              tumbado en el suelo con una velocidad intensa.</p>
                         <h4> duran 2 minuto </h4>
                         </div>
                        
                    </div>
                    <div className="E3">
                        <ReactPlayer className="e3" url='https://youtu.be/zJzovsuWcdM'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Cardio</strong></h2> <br/>
                         <p>Te ayudara a quemar mas facilmente la grasa localizadas en el abdomen y piernas </p>
                         <h4> duran 2 minuto </h4>
                         </div>
                        
                    </div>
                    <div className="E4">
                        <ReactPlayer className="e4" url='https://youtu.be/44zM56QJPcM'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Santadillas </strong></h2> <br/>
                         <p>Esto te ayuda a tonificar rapidamente los cuadriceps y quemar las calorias de las piernas </p>
                         <h4> duran 3 minuto </h4>
                         </div>
                        
                    </div>
                    <div className="E5">
                        <ReactPlayer className="e5" url='https://youtu.be/2E1BI8_NQz8'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Cardio</strong></h2> <br/>
                         <p>Este activara rapidamente los musculo llevando a quemar las calorias corporales </p>
                         <h4> duran 3 minuto</h4>
                         </div>
                        
                    </div>
                    <div className="E6">
                        <ReactPlayer className="e6" url='https://youtu.be/-TjhM6BnG1Y'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Flexiones con apoyo </strong></h2> <br/>
                         <p>Te ayuda a quemar la grasa localizada en los brazos y piernas,
                              te tonificara los biceps y triceps y de las piernas tonificar los cuadriceps</p>
                         <h4> duran 1 minuto </h4>
                         </div>
                        
                    </div>
                    <div className="E7">
                        <ReactPlayer className="e7" url='https://youtu.be/quTq5ec3hpY'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Cardio</strong></h2> <br/>
                         <p>Este activara rapidamente los musculo llevando a quemar las calorias corporales</p>
                         <h4>duran 3 minuto </h4>
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
    export default Cardio;