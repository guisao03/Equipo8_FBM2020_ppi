import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/LOGO.jpg'
import '../styles/Cuestionario.css'

class Cuestionario extends Component {
    render (){
        return(
            <div>
                  <section className="barrra">
                    <img src={Logo} />
                    <h1>Debes responder estas preguntas para continuar</h1>
                </section>
                <div className="preguntas">
                    <h2>¿En que tipo de estado fisica crees que estas?</h2>
                    <div className="respuestas">
                    <label>Flaco
                        <input type="radio"/> </label>
                        <label>Normal
                        <input type="radio"/> </label>
                        <label>Gordo
                        <input type="radio"/> </label>
                     </div>
                    </div>
                    <div className="preguntas">
                    <h2>¿En que tipo de estado fisica crees que estas?</h2>
                    <div className="respuestas">
                    <label>Flaco
                        <input type="radio"/> </label>
                        <label>Normal
                        <input type="radio"/> </label>
                        <label>Gordo
                        <input type="radio"/> </label>
                     </div>
                    </div>
                    <div className="preguntas">
                    <h2>¿En que tipo de estado fisica crees que estas?</h2>
                    <div className="respuestas">
                    <label>Flaco
                        <input type="radio"/> </label>
                        <label>Normal
                        <input type="radio"/> </label>
                        <label>Gordo
                        <input type="radio"/> </label>
                     </div>
                     <button className="estas"><Link className="listo" to="/usuario">!Estas listo¡</Link></button>
                    </div>
                    
            </div>
        );

    }
}
export default Cuestionario;