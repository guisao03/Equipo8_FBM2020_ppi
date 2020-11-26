import { Component } from 'react';
import React from 'react';
import Logo from '../img/LOGO.jpg'
import { Link } from 'react-router-dom';
import '../styles/Entrenamiento.css';

class Entrenamiento_tres extends Component {
    render () {
        return(
            <div>
            <section className="barra">
                    <img src={Logo} />
                    <h1>Plan de entrenamiento</h1>
                </section>
                <div className="fondo">
                
                <section className="plann">
                    

                    <button className="unoo" ><Link to="/abdomengordo" className="un">Circuito 1<p>Abdomen</p></Link></button>
                    <button className="doss" ><Link to="/brazosgor" className="dos">Circuito 2<p>Brazos</p></Link></button>
                    <button className="tress"><Link to="/piernasgor" className="tres">Circuito 3<p>Piernas</p></Link></button>
                    <button className="cuatroo"><Link to="/cardio" className="cuatro">Circuito 4<p>Cardio</p></Link></button>
                   
                    <button className="atras"><Link className="atra" to="/">inicio</Link></button>
                </section>

                </div>
                
            </div>
        );

    }
}
export default Entrenamiento_tres;