import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/LOGO.jpg'
import '../styles/Cuestionario.css'

class Cuestionario extends Component {
    state = { esflaco: "", esgordo: "", esnormal: ""};
    valueToState = ( {name, value, checked, type} ) => {
        const checkBoxValue = checked
        
        this.setState({ checkBoxValue})
      console.log(value,name,checked, type )

    };

    
    render() { 
        const { checkBoxValue } = this.state
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
                        <input 
                        type="checkbox" 
                        name="esflaco"
                        checked={checkBoxValue}
                        onChange={event => this.valueToState(event.target)}
                        /> 
                        </label><br/>
                        <label>Normal
                        <input
                         type="checkbox"
                         name="esnormal"
                         checked={checkBoxValue}
                         onChange={event => this.valueToState(event.target)}
                         /> 
                         </label><br/>
                        <label>Gordo
                        <input 
                        type="checkbox"
                        name="esgordo"
                        checked={checkBoxValue}
                        onChange={event => this.valueToState(event.target)}
                        /> 
                        </label><br/>
                     </div>
                    </div>
                    <div className="preguntas">
                    <h2>¿En que tipo de estado fisica crees que estas?</h2>
                    <div className="respuestas">
                    <label>Flaco
                        <input type="checkbox"/> </label><br/>
                        <label>Normal
                        <input type="checkbox"/> </label><br/>
                        <label>Gordo
                        <input type="checkbox"/> </label><br/>
                     </div>
                    </div>
                    <div className="preguntas">
                    <h2>¿En que tipo de estado fisica crees que estas?</h2>
                    <div className="respuestas">
                    <label>Flaco
                        <input type="checkbox"/> </label><br/>
                        <label>Normal
                        <input type="checkbox"/> </label><br/>
                        <label>Gordo
                        <input type="checkbox"/> </label><br/>
                     </div>
                     <button className="estas"><Link className="listo" to="/usuario">!Estas listo¡</Link></button>
                    </div>
                    
            </div>
        );

    }
}
export default Cuestionario;