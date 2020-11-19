import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/brazoscard.css';

class Brazosgor extends Component {

    render () {
        return(
            <div>
               <div className="tim">
                <section className="ba">
                    <img src={Logo} />
                    <h1>trabajo de cardio para brazos</h1>
                </section>
                <div className="coontainer">
                    <p> La grasa acumulada en los brazos, conocida en el mundo anglosajón como bingo wings, puede aparecer en las mujeres debido a unos niveles demasiado bajos de testosterona. esto no quiere decir que no a los hombres no se les acumulen esta grasa, que somos menos propensos a tenerla si, ya que no se lleva una vida activa y nos descuidamos por esa parte.
                        eliminar esta grasa localizada te facilita la flexibilidad de los brazos y dejas atras el dormimiento de las manos.</p>
                    <div className="C1">
                        <ReactPlayer className="c1" url=''
                        playing
                        muted
                        width="50%"
                        height="auto"
                         />
                         <div className="informacion">
                         <h2><strong>nombre </strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                         
                    </div>
                    <div className="C2">
                        <ReactPlayer className="c2" url=''
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>nombre</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                       
                    </div>
                    <div className="C3">
                        <ReactPlayer className="c3" url=''
                       width="50%"
                       height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>nombre</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="C4">
                        <ReactPlayer className="c4" url=''
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>nombre</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="C5">
                        <ReactPlayer className="c5" url=''
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="programacion">
                             <h2><strong>nombre</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                         
                    </div>
                    <div className="C6">
                        <ReactPlayer className="c6" url=''
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>nombre</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="C7">
                        <ReactPlayer className="c7" url=''
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>nombre</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="C8">
                        <ReactPlayer className="c8" url=''
                       width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>nombre</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="C9">
                        <ReactPlayer className="c9" url=''
                        width="50%"
                        height="auto"
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong>nombre</strong></h2> <br/>
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
export default Brazosgor;