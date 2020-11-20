import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';



class Pecho extends Component {
   render () {
       return(
           <div>
               <div className="tim">
                <section className="ba">
                    <img src={Logo} />
                    <h1>Trabajo de Pecho</h1>
                </section>
                <div className="coontainer">
                    <p>Fortalecer los brazos es un objetivo muy perseguido por las personas que quieren mejorar su aspecto y conseguir un cuerpo más firme y tonificado. Entrenar los brazos es importante para evitar la flacidez y que luzcan bonitos y tonificados. </p>
                    <div className="A1">
                        <ReactPlayer className="a1" url='https://youtu.be/nY-TBDDaEng'
                        playing
                        muted
                        width="50%"
                        height="auto"
                         />
                         <div className="informacion">
                         <h2><strong>   flexion  </strong></h2> <br/>
                         <p>     10 repeticiones    </p>
                         <p>pectorales, deltoides y tríceps-----
                         Levante el cuerpo hacia arriba e ir enderezando los brazos, procura mantener una postura erguida.
                         </p>
                         </div>
                       
                    </div>
                    <div className="A2">
                        <ReactPlayer className="a2" url='https://youtu.be/XxpfGE0GU2I'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>  flexion inclinada      </strong></h2> <br/>
                         <p>       10 repeticiones      </p>
                         <p>pectoral, hombro y el tríceps---- Colócate en la posición estándar de flexión de brazos con las manos en una superficie elevada .</p>
                         </div>
                       
                    </div>
                    <div className="A3">
                        <ReactPlayer className="a3" url='https://youtu.be/moDrV5kKOHM'
                       width="50%"
                       height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>    flexion desclinada  </strong></h2> <br/>
                         <p>    10 repeticiones         </p>
                         <p>pectoral, hombro y el tríceps---Colócate en la posición estándar de flexión de brazos con las manos abajo y piernas en una superficie .</p>
                         </div>
                        
                    </div>
                    <div className="A4">
                        <ReactPlayer className="a4" url='https://youtu.be/3tMfraE20gk'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>      flexion diamante       </strong></h2> <br/>
                         <p>    10 repeticiones         </p>
                         <p>Deltoides, Nucleo abdominal,Pectorales--- posición estándar de flexión con las manos juntas baja lentamente el cuerpo hasta el suelo.</p>
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
                             <h2><strong>    escalador   </strong></h2> <br/>
                             <p>    5 repeticiones         </p>
                         <p>abdominales oblicuos, glúteos, tríceps--Comience con el cuerpo en línea recta y las manos ligeramente más anchas que los hombros Suba una rodilla hacia el centro del estómago y luego alternar rápidamente entre las piernas. </p>
                         </div>
                         
                    </div>
                    <div className="A6">
                        <ReactPlayer className="a6" url='https://youtu.be/iVuZ8H4-h3c'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>    pike push       </strong></h2> <br/>
                         <p>       5 repeticiones      </p>
                         <p>Deltoides anterior,Pectoral mayor,Tríceps braquial----Desde esa posición doblas los brazos para que la cabeza toque brevemente el suelo</p>
                         </div>
                        
                    </div>
                    <div className="A7">
                        <ReactPlayer className="a7" url='https://youtu.be/xd2hRCZRgqo'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>     estiramiento de cobra      </strong></h2> <br/>
                         <p>    15-20segundos     </p>
                         <p>dorsales, brazos, hombros, glúteos---tumbado boca abajo con las piernas estiradas y los pies juntos Coloca las manos a ambos lados del cuerpo</p>
                         </div>
                        
                    </div>
                    <div className="A8">
                        <ReactPlayer className="a8" url='https://youtu.be/fcDcDQyP-Es'
                       width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>         postura bebe    </strong></h2> <br/>
                         <p>    15-20segundos      </p>
                         <p>musculatura de tu espalda, zona lumbar---Inicia acostado boca arriba Flexiona las rodillas hacia el pecho.</p>
                         </div>
                        
                    </div>
                    <div className="A8">
                        <ReactPlayer className="a9" url='https://youtu.be/rRFrRPy56Ag'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>         brazos atras    </strong></h2> <br/>
                         <p>10-15 segundos</p>
                         <p>columna dorsal</p>
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

export default  Pecho;