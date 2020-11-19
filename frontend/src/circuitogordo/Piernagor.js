import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/piernacard.css';

class Piernagor extends Component {

    render () {
        return(
            <div>
               <div className="tim">
                <section className="ba">
                    <img src={Logo} />
                    <h1>trabajo de cardio para pienas</h1>
                </section>
                <div className="coontainer">
                    <p> lo cierto es que a veces no tenemos en cuenta que para adelgazar las piernas lo esencial es realizar ejercicios que tonifiquen esa zona específicamente y complementarlos con actividades
                         cardiovasculares que nos ayuden a quemar la grasa sobrante concentrada en ciertas partes del cuerpo. </p>
                    <div className="D1">
                        <ReactPlayer className="d1" url=''
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
                    <div className="D2">
                        <ReactPlayer className="d2" url=''
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
                    <div className="D3">
                        <ReactPlayer className="d3" url=''
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
                    <div className="D4">
                        <ReactPlayer className="d4" url=''
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
                    <div className="D5">
                        <ReactPlayer className="d5" url=''
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
                    <div className="D6">
                        <ReactPlayer className="d6" url=''
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
                    <div className="D7">
                        <ReactPlayer className="d7" url=''
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
                    <div className="D8">
                        <ReactPlayer className="d8" url=''
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
                    <div className="D9">
                        <ReactPlayer className="d9" url=''
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
export default Piernagor;