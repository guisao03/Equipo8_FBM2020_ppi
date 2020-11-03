import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/Abdomen_prin.css';


class Abdomen_prin extends Component {
   render () {
       return(
           <div>
                <section className="ba">
                    <img src={Logo} />
                    <h1>Trabajo de Abdomen</h1>
                </section>
                <div className="container">
                    <p>Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea. </p>
                    <div className="salto">
                        <ReactPlayer className="sal" url= {require('../videos/abdomen-prin/salto.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong> Salto de Tijeras</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                         
                    </div>
                    <div className="crunch">
                        <ReactPlayer className="crun" url= {require('../videos/abdomen-prin/crunch.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>crunch</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                       
                    </div>
                    <div className="elevacion">
                        <ReactPlayer className="ele" url= {require('../videos/abdomen-prin/elevacion.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>Elevacion de piernas</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="escalada">
                        <ReactPlayer className="esca" url= {require('../videos/abdomen-prin/escalada.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>Escalada</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="talon">
                        <ReactPlayer className="tal" url= {require('../videos/abdomen-prin/talon.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="programacion">
                             <h2>Toque al talon</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                         
                    </div>
                    <div className="twist">
                        <ReactPlayer className="twi" url= {require('../videos/abdomen-prin/Twist.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>Twist</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="cobra">
                        <ReactPlayer className="cob" url= {require('../videos/abdomen-prin/cobra.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>Estiramiento de cobra</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="siguien">
                        <button className="sig"><Link to="/retroalimentacion" className="si"> Siguiente</Link></button>
                    </div>
                </div>
           </div>
       );
   }
}

export default Abdomen_prin;