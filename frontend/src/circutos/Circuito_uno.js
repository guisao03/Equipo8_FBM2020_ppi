import React, { Component } from 'react';
import Logo from '../img/LOGO.jpg';
import { Link } from 'react-router-dom';
import Salto from '../img/fsalto.jpg';
import Crunch from '../img/fcrunch.jpg';
import Talon from '../img/ftalon.jpg';
import Elevacion from '../img/felevacion.jpg';
import '../styles/Circuito_uno.css';


class Circuito_uno extends Component {
    render () {
        return (
            <div>
                   <section className="bar">
                    <img src={Logo} />
                    <h1>trabajo de Abdomen</h1>
                </section>
                <div className="container">
                    <p>El párrafo es el fragmento de un texto y está formado por un conjunto de oraciones principales y secundarias, estas últimas conocidas como subordinadas, relacionadas de manera lógica y coherente entre sí a fin de desarrollar un determinado tema.</p>
                    <div className="salto">
                        <img src={Salto} />
                        <button className="button"><Link className="link">Salto de tigeras</Link></button>
                    </div>
                    <div className="crunch">
                        <img src={Crunch} />
                        <button className="button"><Link className="link">Crunch</Link></button>
                    </div>
                    <div className="twist">
                        <img src={Crunch} />
                        <button className="button"><Link className="link">twist</Link></button>
                    </div>
                    <div className="talon">
                        <img src={Talon} />
                        <button className="button"><Link className="link">Toque al Talon</Link></button>
                    </div>
                    <div className="elevacion">
                        <img src={Elevacion} />
                        <button className="button"><Link  className="link">Elevacion de Piernas</Link></button>
                    </div>
                </div>
                <button className="ir"><Link className="irr">Suiguiente</Link></button>
            </div>

        );
    }
}
export default Circuito_uno;