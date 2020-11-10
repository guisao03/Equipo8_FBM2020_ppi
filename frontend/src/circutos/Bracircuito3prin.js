import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/Bracircuito3prin.css';


class Bracircuito3prin extends Component {
   render () {
       return(
           <div>
                <section className="braz">
                    <img src={Logo} />
                    <h1>Trabajo de brazos</h1>
                </section>


                <div className="container1">
                    <p>Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea. </p>
                    <div className="tijeras">
                        <ReactPlayer className="sal1" url= 'https://youtu.be/IweDBKU0H0Q'
                       
                        muted
                        playing
                         />
                         <div className="tij">
                         <h2><strong> Tijeras</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                         
                    </div>


                    <div className="brizquierdo">
                        <ReactPlayer className="brz" url= 'https://youtu.be/HE-YU5Aw6ws'
                        
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><stron>Estiramiento de brazo izquierdo</stron></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                       
                         </div>


                    <div className="brderecho">
                        <ReactPlayer className="brd" url= ' https://youtu.be/b7ioKqJsUfI'
                        
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>estiramiento de brazo derecho </h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                         </div>
                    <div className="Inchw">
                        <ReactPlayer className="crun" url= 'https://youtu.be/IflTXjyN-Ww '
                        
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>triceps</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>

                         </div>
                    <div className="Inchw">
                        <ReactPlayer className="crun" url= 'https://youtu.be/rOnyf-m0V84 '
                        
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>diamante</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>

                    <div className="Inchw">
                        <ReactPlayer className="crun" url= 'https://youtu.be/b7ioKqJsUfI '
                        
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>flexion inclinada</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>

                   


                    <div className="Inchw">
                        <ReactPlayer className="crun" url= ' https://youtu.be/V1piAqkFUxU'
                        
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>estiramiento de brazo izquierdo</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>

                    <div className="Inchw">
                        <ReactPlayer className="crun" url= ' https://youtu.be/HWHDT9us-7I'
                        ç
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>estiramiento de brazo derecho</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>

                   

                    <div className="siguien1">
                        <button className="sig"><Link to="/retroalimentacion" className="si"> Siguiente</Link></button>
                    </div>
                </div>
           </div>
       );
   }
}

export default Bracircuito3prin;




