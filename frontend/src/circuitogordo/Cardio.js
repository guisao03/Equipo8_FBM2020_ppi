import React from 'react';
import { Component } from 'react';
import Logo from '../img/LOGO.jpg'
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../styles/cardiocard.css';


class Cardio extends Component {
    render () {
        return(
            <div>
                <div className="tim">
                <section className="ba">
                    <img src={Logo} />
                    <h1>Trabajo de cardio todo el cuerpo</h1>
                </section>
                <div className="coontainer">
                <p>Te recomendamos esta lineas de circuitos de cardio, la cual trabajas todo el cuerpo asi quemando la mayor cantidad de calorias acomulada en tu cuerpo.
                Disminuye la grasa corporal, el cardio mejora nuestro Índice de Masa Corporal y mejora y acelera nuestro metabolismo. 
                     </p>
                    <div className="E1">
                        <ReactPlayer className="e1" url='https://youtu.be/yKbaxDKPYHc'
                        playing
                        muted
                        width="50%"
                        height="auto"
                         />
                         <div className="informacion">
                         <h2><strong> Elevacion lateral </strong></h2> <br/>
                         <p>la explicacion de que ejercios trabaja</p>
                         </div>

                         </div>
                         <div className="E2">
                        <ReactPlayer className="e2" url='https://youtu.be/QXZJV-Ylugo'
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
                    <div className="E3">
                        <ReactPlayer className="e3" url='https://youtu.be/zJzovsuWcdM'
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
                    <div className="E4">
                        <ReactPlayer className="e4" url='https://youtu.be/44zM56QJPcM'
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
                    <div className="E5">
                        <ReactPlayer className="e5" url='https://youtu.be/2E1BI8_NQz8'
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
                    <div className="E6">
                        <ReactPlayer className="e6" url='https://youtu.be/-TjhM6BnG1Y'
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
                    <div className="E7">
                        <ReactPlayer className="e7" url='https://youtu.be/quTq5ec3hpY'
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
    export default Cardio;