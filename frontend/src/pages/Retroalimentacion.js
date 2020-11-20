import React, { Component } from 'react';
import Logo from '../img/LOGO.jpg';
import Medalla from '../img/medallaaa.jpg';
import { Link } from 'react-router-dom';
import '../styles/Retroalimentacion.css'

class Retroalimentacion extends Component {
    render(){
        return (
            <div className="feliz">
                 <div className="barritaa">
                    <img src={Logo} />
                    <h1>Buen trabajo</h1>
                    </div>
                <div className="felizz">
                    <h1>¡Felicidades has terminado el circuito!</h1>
                    <img className="medalla" src={Medalla} />
                    <h1>Ya puedes continuar con el siguiente circuito...</h1>
                </div>
                <div >
                <button className="siguiente"><Link className="letra" to="/entrenamiento">Siguiente</Link></button>
                </div>
            </div>
        );
    }
}
export default Retroalimentacion;