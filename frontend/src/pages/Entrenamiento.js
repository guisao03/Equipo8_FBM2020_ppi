import { Component } from 'react';
import React from 'react';
import Logo from '../img/LOGO.jpg'
import { Link } from 'react-router-dom';
import '../styles/Entrenamiento.css';

class Entrenamiento extends Component {
    render () {
        return(
            <div>
                <div className="fondo">
                <section className="barra">
                    <img src={Logo} />
                    <h1>Plan de Entrenamiento</h1>
                </section>
                <section className="plann">
                    
                    <button className="unoo" ><Link to="/abdomen_prin" className="un">Circuito 1<br/><p>Abdomen</p></Link></button>
                    <button className="doss" ><Link className="dos">Circuito 2</Link></button>
                    <button className="tress"><Link className="tres">Circuito 3</Link></button>
                    <button className="cuatroo"><Link className="cuatro">Circuito 4</Link></button>
                    <button className="atras"><Link className="atra" to="/usario">Atras</Link></button>
                </section>

                </div>
                
            </div>
        );

    }
}
export default Entrenamiento;