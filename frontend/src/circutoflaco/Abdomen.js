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
                    <p>Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea. </p>
                    <div className="A1">
                        <ReactPlayer className="a1" url='https://youtu.be/oqFC409hZGI'
                        playing
                        muted
                        width="50%"
                        height="auto"
                         />
                         <div className="informacion">
                         <h2><strong> Salto de Tijeras</strong></h2> <br/>
                         <p>15 repeticiones</p>
                         <p>la expliacacion </p>
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
                         <h2><strong>crunch</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
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
                         <p>la explicacion de que ejercios trabaja</p>
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
                         <h2><strong>Escalada</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
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
                             <h2><strong>Toque al talon</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
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
                         <h2><strong>Twist</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
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
                         <h2><strong>Estiramiento de cobra</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
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
                         <h2><strong>Estiramiento de cobra</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="A8">
                        <ReactPlayer className="a9" url='https://youtu.be/lBEsFIrKeZI'
                        width="50%"
                        height="auto"
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
           </div>
       );
   }
}

export default Abdomenprin;