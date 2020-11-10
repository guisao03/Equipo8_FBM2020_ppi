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
                        <ReactPlayer className="sal" url='https://youtu.be/2AO_1J-K4Os'
                        controls
                        playing
                        muted
                         />
                         <div className="informacion">
                         <h2><strong> Salto de Tijeras</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                         
                    </div>
                    <div className="crunch">
                        <ReactPlayer className="crun" url='https://youtu.be/z8gyFoADiBQ'
                        
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>crunch</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                       
                    </div>
                    <div className="elevacion">
                        <ReactPlayer className="ele" url='https://youtu.be/ct1-Qqh9aYk'
                       
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Elevacion de piernas</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="escalada">
                        <ReactPlayer className="esca" url='https://youtu.be/I6jrtisKL8o'
                        
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Escalada</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="talon">
                        <ReactPlayer className="tal" url='https://youtu.be/uk6Qk6PzMu4'
                        
                        muted
                        playing
                         />
                         <div className="programacion">
                             <h2><strong>Toque al talon</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                         
                    </div>
                    <div className="twist">
                        <ReactPlayer className="twi" url='https://youtu.be/3PYDAMs9Ckg'
                        
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Twist</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="cobra">
                        <ReactPlayer className="cob" url='https://youtu.be/upJjiSrLR_A'
                        
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>Estiramiento de cobra</strong></h2> <br/>
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