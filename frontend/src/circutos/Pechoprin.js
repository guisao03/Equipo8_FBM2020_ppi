import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/pecho_prin.css'; 

class Pechoprin extends component  {
    render () {
        return(
        <div>
             <section className="ba">
                    <img src={Logo} />
                    <h1>Trabajo de pecho</h1>
                </section>
                <div className="container">
                    <p>Fragmento de un escrito con unidad temática, que queda diferenciado del resto de fragmentos por un punto y aparte y generalmente también por llevar letra mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del texto principal de la primera línea. </p>
                    <div className="salto">
                        <ReactPlayer className="sal" url= {require('../videos2/salto.mp4 ')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2><strong> Salto de Tijeras</strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                         
                    </div>
                    <div className="flexion">
                        <ReactPlayer className="flexion" url= {require('../videos2/flexion.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>flexion</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                       
                    </div>
                    <div className="fleciones abiertas">
                        <ReactPlayer className="flexion" url= {require('../videos2/flexion_abierta.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>flexion_abierta</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="flexiones con apoyo">
                        <ReactPlayer className="flexion" url= {require('../videos2/flexion_apoyo.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>flexiones con apoyo</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="triceps">
                        <ReactPlayer className="triceps" url= {require('../videos2/triceps.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="triceps">
                             <h2>triceps</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                         
                    </div>
                    <div className="VID_20201027.MP4">
                        <ReactPlayer className="video" url= {require('../videos2/VID_20201027_1836405119.MP4')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>2020</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="VID_20201102">
                        <ReactPlayer className="cob" url= {require('../videos2/VID-20201102_165010860.mp4')}
                        controls
                        muted
                        playing
                         />
                         <div className="informacion">
                         <h2>video</h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>
                        
                    </div>
                    <div className="siguien">
                        <button className="sig"><Link to="/retroalimentacion" className="si"> Siguiente</Link></button>
                    </div>
                </div>

        </div>
        )
    }


}
export default Pechoprin; 