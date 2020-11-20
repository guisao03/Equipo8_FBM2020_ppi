import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/Abdomenprin.css';


class Abdomenprin extends Component {
   render () {
       return(
           <div>
               <div className="tim">
                <section className="ba">
                    <img src={Logo} />
                    <h1>Trabajo de Abdomen</h1>
                </section>
                <div className="coontainer">
                    <p>Los abdominales son músculos del abdomen, sirven de apoyo al tronco superior y  además te ayudan a  mantener resguardados los órganos internos dentro de la zona abdominal Este tipo de ejercicios son muy importantes y relevantes en cualquier tipo de entrenamiento o rutina, además de que si se ejecutan correctamente, nos darán beneficios importantes tanto a nivel funcional como una mejora en la columna vertebral. Por otra parte tener unos músculos abdominales fuertes, sirven de escudo protector a los órganos que se encuentran en la cavidad abdominal.  </p>
                    <div className="A1">
                        <ReactPlayer className="a1" url='https://youtu.be/oqFC409hZGI'
                        playing
                        muted
                        width="50%"
                        height="auto"
                         />
                         <div className="informacion">
                         <h2><strong> crunch con empuje</strong></h2> <br/>
                         <p>        15 repeticones       </p>
                         <p> músculos abdominales superiores---Con los brazos extendidos,  contrae los abdominales elevando tu cuerpo ayudándote con un ligero empuje de las manos y vuelve a la posición inicial. </p>
                         </div>
                         
                    </div>
                    <div className="A2">
                        <ReactPlayer className="a2" url='https://youtu.be/6pUiP5pOkpk'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>crunch elevadas </strong></h2> <br/>
                         <p>           2 minutos    </p>
                         <p>trabajamos el core, y abdominales inferiores---acostarse y estirar las piernas en una posición elevada</p>
                         </div>
                       
                    </div>
                    <div className="A3">
                        <ReactPlayer className="a3" url='https://youtu.be/RWNjsb5qKhc'
                       width="50%"
                       height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Elevacion de piernas</strong></h2> <br/>
                         <p>     15 repeticiones     </p>
                         <p> abdominales oblicuos, abductores del muslo--elevamos las dos piernas sin que los talones toquen el suelo</p>
                         </div>
                        
                    </div>
                    <div className="A4">
                        <ReactPlayer className="a4" url='https://youtu.be/tD24TlTHa74'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Crunch de bicicleta</strong></h2> <br/>
                         <p>     20 repeticiones      </p>
                         <p>músculos  oblicuos el interno y el externo---con las manos detrás de la cabeza. Paso 2 Levanta los omoplatos del suelo, eleva las piernas y flexiona las rodillas hasta formar un ángulo de 90 grados.</p>
                         </div>
                        
                    </div>
                    <div className="A5">
                        <ReactPlayer className="a5" url='https://youtu.be/Dj5dloZJ0qQ'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="programacion">
                             <h2><strong> Escaladas</strong></h2> <br/>
                             <p>     1 minuto      </p>
                         <p>abdominales oblicuos, glúteos, tríceps---el cuerpo en línea recta y las manos ligeramente más anchas que los hombros Suba una rodilla hacia el centro del estómago y luego alternar rápidamente entre las piernas </p>
                         </div>
                         
                    </div>
                    <div className="A6">
                        <ReactPlayer className="a6" url='https://youtu.be/ubCEYz90xHQ'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Plancha</strong></h2> <br/>
                         <p>   2 minutos        </p>
                         <p> rector de la columna, recto mayor  abdomen--se apoyan los codos y los antebrazos en el suelo  Las piernas deben quedar igualmente extendidas </p>
                         </div>
                        
                    </div>
                    <div className="A7">
                        <ReactPlayer className="a7" url='https://youtu.be/w876IrbIJEY'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>hip thrust</strong></h2> <br/>
                         <p>        10 repeticiones  </p>
                         <p>    glúteo mayor y medio---Empuja con los talones Logra una extensión completa de cadera</p>
                         </div>
                        
                    </div>
                    <div className="A8">
                        <ReactPlayer className="a8" url='https://youtu.be/sMxwk-gHdXI'
                       width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Postura bebe</strong></h2> <br/>
                         <p>     1 minuto     </p>
                         <p>musculatura de tu espalda, zona lumbar--Flexiona las rodillas hacia el pecho y estira los brazos</p>
                         </div>
                        
                    </div>
                    <div className="A8">
                        <ReactPlayer className="a9" url='https://youtu.be/SkhXAcAlfTk'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Estiramiento de cobra</strong></h2> <br/>
                         <p>     1 minuto     </p>
                         <p>dorsales,  brazos, hombros, glúteos.---tumbado boca abajo con las piernas estiradas y los pies juntos Coloca las manos a ambos lados del cuerpo</p>
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

export default Abdomenprin;