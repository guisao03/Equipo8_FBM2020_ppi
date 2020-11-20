import React, { Component } from 'react';
import Logo from '../img/LOGO.jpg';
import { Link } from 'react-router-dom';
import '../styles/Usuario.css';



class Usuario extends Component  {
    render () {
        return (
            <div>
                <div className="timoo">
                <section className="principal">
                    <div className="princi">
                    <img src={Logo} />
                    <h1>Olympo Fitness</h1>
                    </div>

                 <div className="prin">
                    <Link to="/entrenamiento">
                    <button className="plan" type="submit">
                        Plan de entrenamiento
                    </button>
                    </Link>
                    <Link to="/calendario">
                    <button className="calendario" type="submit">
                        Calendario
                    </button>
                    </Link>
                 </div>
                </section>
                </div>
            </div>
        );

    }
   
}
export default Usuario;