import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/Brazos.css';


class brazos extends Component {
   render () {
       return(
           <div>
               <div className="tam">
                <section className="bo">
                    <img src={Logo} />
                    <h1>Trabajo de brazo</h1>
                </section>
                <div className="contenedor1">
                    <p>Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea. </p>
                    <div className="A1">
                        <ReactPlayer className="a1" url='https://youtu.be/LA-dSxqR5AU'
                        playing
                        muted
                        width="50%"
                        height="auto"
                         />
                         <div className="informacion">
                         <h2><strong>    fondos    </strong></h2> <br/>
                         <p>     15 repeticiones   </p>
                         <p>pectoral y el tríceps--Empieza el movimiento inspirando y flexionando los codos para descender la parte superior del cuerpo hacia el suelo, intentando llegar con los brazos a un ángulo recto de 90º.</p>
                         </div>
                    
                    </div>
                    <div className="A2">
                        <ReactPlayer className="a2" url='https://youtu.be/XwQXCtmhbOE'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>     flexiones brazos abiertos  </strong></h2> <br/>
                         <p>     8 repeticiones     </p>
                         <p>pectorales, deltoides y tríceps-- deberemos colocar las piernas del mismo modo que si fuésemos a realizar una flexión normal y abrir los brazos.</p>
                         </div>
                       
                    </div>
                    <div className="A3">
                        <ReactPlayer className="a3" url='https://youtu.be/3tMfraE20gk'
                       width="50%"
                       height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>    diamante    </strong></h2> <br/>
                         <p>      8 repeticiones    </p>
                         <p>Deltoides, Nucleo abdominal,Pectorales--Colócate en la misma posición que  las flexiones clásicas Coloca las manos formando un triángulo.</p>
                         </div>
                        
                    </div>
                    <div className="A4">
                        <ReactPlayer className="a4" url='https://youtu.be/h1LO4bVe5Ek'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>         flexion escalonada    </strong></h2> <br/>
                         <p>      5 repeticiones    </p>
                         <p>pectoral, el brazo y el hombro---posición que  las flexiones clásicas ligeramente flexionados Cambiamos las manos de posición </p>
                         </div>
                        
                    </div>
                    <div className="A5">
                        <ReactPlayer className="a5" url='https://youtu.be/VgrnSTP3IJc'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="programacion">
                             <h2><strong>     flexion con rotacion   </strong></h2> <br/>
                             <p>     5 repeticiones     </p>
                         <p>Abdominal,Bíceps,Tríceps,Deltoides-- al realizar una flexion sube un brazo y vuelve a realizar la flexion </p>
                         </div>
                         
                    </div>
                    <div className="A6">
                        <ReactPlayer className="a6" url='https://youtu.be/h1LO4bVe5Ek'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>       flexion escalonada    </strong></h2> <br/>
                         <p>       6 repeticiones   </p>
                         <p>pectoral, el brazo y el hombro---posición que  las flexiones clásicas ligeramente flexionados Cambiamos las manos de posición </p>
                         </div>
                        
                    </div>
                    <div className="A7">
                        <ReactPlayer className="a7" url='https://youtu.be/XwQXCtmhbOEk'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>      flexion brazos abiertos     </strong></h2> <br/>
                         <p>    5 repeticiones      </p>
                         <p>pectorales, deltoides y tríceps-- deberemos colocar las piernas del mismo modo que si fuésemos a realizar una flexión normal y abrir los brazos.</p>
                         </div>
                        
                    </div>
                    <div className="A8">
                        <ReactPlayer className="a8" url='https://youtu.be/abcQKI2RNfU'
                       width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>       hombro      </strong></h2> <br/>
                         <p>10-15 segundos. </p>
                         <p> tríceps sural, deltoides posterior, supraespinoso,--cruza el brazo derecho por delante, a la altura del hombro. Coge el codo con la mano izquierda y cambia de brazo</p>
                         </div>
                        
                    </div>
                    <div className="A8">
                        <ReactPlayer className="a9" url='https://youtu.be/Hydtk9ICYfU'
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>           rotacion de brazos  </strong></h2> <br/>
                         <p>10-15 segundos. </p>
                         <p>Bíceps, Deltoides--- levante los brazos y haga círculos hacia adelante y hacia atrás con los dos brazos a la vez </p>
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

export default brazos;

