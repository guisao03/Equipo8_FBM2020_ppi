import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';



class Gluteospiernas extends Component {
   render () {
       return(
           <div>
               <div className="tim">
                <section className="ba">
                    <img src={Logo} />
                    <h1>Trabajo de Gluteos/piernas</h1>
                </section>
                <div className="coontainer">
                    <p>Mejora la potencia y la velocidad. El trabajo de glúteos y piernas provoca un gran consumo calórico al tratarse de un grupo muscular grande. Activa grupos musculares del tren superior y mejora el entrenamiento del mismo. Fortalece y protege las articulaciones. </p>
                    <div className="A1">
                        <ReactPlayer className="a1" url='https://youtu.be/gCyL5zaHsy0'
                        playing
                        muted
                        width="50%"
                        height="auto"
                         />
                         <div className="informacion">
                         <h2><strong>    sentadillas    </strong></h2> <br/>
                         <p>     15 repeticiones    </p>
                         <p>tren inferior,glúteos,cuádriceps, aductores--Debes mantener la cabeza horizontal. - Los pies deben colocarse al ancho de los hombros. - La rodilla, durante la flexión, no debe sobrepasar la punta de los pies.</p>
                         </div>
                         
                    </div>
                    <div className="A2">
                        <ReactPlayer className="a2" url='https://youtu.be/w876IrbIJEY'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>    hip thrust    </strong></h2> <br/>
                         <p>    10 repeticiones      </p>
                         <p>glúteo mayor y medio-- Empuja con los talones asi Mantén las rodillas hacia afuera Logra una extensión completa de cadera.</p>
                         </div>
                       
                    </div>
                    <div className="A3">
                        <ReactPlayer className="a3" url='https://youtu.be/aamaBdRI-I8'
                       width="50%"
                       height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>    zancada    </strong></h2> <br/>
                         <p>      10 repeticiones        </p>
                         <p>tren inferior,muslo,isquiotibiales--Evita inclinar el torso hacia delante. Concéntrate en mantenerte erguido y recto durante todo el ejercicio..</p>
                         </div>
                        
                    </div>
                    <div className="A4">
                        <ReactPlayer className="a4" url='https://youtu.be/bQfxe6gBT4g'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>       elevacion de gemelos      </strong></h2> <br/>
                         <p>       10 repeticiones       </p>
                         <p>piernas posterior e inferior, tríceps sural---Apoyaremos la punta del pie sobre el tronco y presionaremos con la punta sobre la superficie para elevar la pantorrilla</p>
                         </div>
                        
                    </div>
                    <div className="A5">
                        <ReactPlayer className="a5" url='https://youtu.be/gsme_y9pyw4'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="programacion">
                             <h2><strong>    sentadillas con salto    </strong></h2> <br/>
                             <p>        10 repeticiones      </p>
                         <p>cuádriceps, los de la pantorrilla y los glúteos.---Flexiona las rodillas, salta y separa los pies en pleno salto.</p>
                         </div>
                         
                    </div>
                    <div className="A6">
                        <ReactPlayer className="a6" url='https://youtu.be/GtGIfD6cZ58'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>    sentadillas con salto   90*       </strong></h2> <br/>
                         <p>      10 repeticiones        </p>
                         <p>cuádriceps, los de la pantorrilla y los glúteos.---flexiona las rodillas, salta y no separes los pies en pleno salto.</p>
                         </div>
                        
                    </div>
                    <div className="A7">
                        <ReactPlayer className="a7" url='https://youtu.be/SkhXAcAlfTk'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>       estiramiento de cobra   </strong></h2> <br/>
                         <p>   15-20 segundos      </p>
                         <p>dorsales, brazos, hombros, glúteos.--tumbado boca abajo con las piernas estiradas y los pies juntos,Coloca las manos a ambos lados del cuerpo</p>
                         </div>
                        
                    </div>
                    <div className="A8">
                        <ReactPlayer className="a8" url='https://youtu.be/qMrvF7n1ClA'
                       width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>       estiramiento Cuádriceps     </strong></h2> <br/>
                         <p>     15-20 segundos     </p>
                         <p>Cuádriceps --de pie erguido con los pies al ancho de los hombros y las manos a los lados. Flexione una rodilla y acerque el pie hacia los glúteos, </p>
                         </div>
                        
                    </div>
                    <div className="A8">
                        <ReactPlayer className="a9" url='https://youtu.be/VXrUAxizNiU'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>          estiramiento   </strong></h2> <br/>
                         <p>   15-20 segundos       </p>
                         <p>--sentado, con las piernas estiradas, realizaremos flexión de tronco buscando tocar los pies con la punta de los dedos de las manos.</p>
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

export default  Gluteospiernas;