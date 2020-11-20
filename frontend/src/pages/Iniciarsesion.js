import React, { Component } from 'react';
import Logo from '../img/LOGO.jpg';
import '../styles/Iniciarsesion.css';
import { Link } from 'react-router-dom';



class Iniciarsesion extends Component {
    render () {
        return (
            <div>
                
                <main>
                    <section className="conten">
                        <div className="columna-uno">
                            <div className="COLUMNA">
                                <img className="Avatar" src={Logo} alt=""/>
                                <h2>
                                    Iniciar sesión
                                </h2>
                                <from>
                                    <input type="text" placeholder="Correo"/>
                                    <input type="text" placeholder="Contraseña"/>
                                    <Link to="/usuario">
                                    <input type="submit" value="Ingresar"/>
                                    </Link>
                                    <div className="pregunta">
                                        <a ><Link to="/registro">¿No te has registrado?</Link></a>
                                    </div>
                                </from>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );

    }
   
}
export default Iniciarsesion;