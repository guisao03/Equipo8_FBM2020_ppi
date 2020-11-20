import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/LOGO.jpg'
import '../styles/Cuestionario.css'

class Cuestionario extends Component {
    state = { esflaco: "", esgordo: "", esnormal: ""};
    valueToState = ( {name, value, checked, type} ) => {
        const  checkBoxValue = checked
        this.setState({ checkBoxValue, })
      console.log(value,name,checked, type )
    };

    
    render() { 
        const { checkBoxValue } = this.state
        return(
           
            <div>
                <div className="todito">
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
                        value={true}
                        onChange={event => this.valueToState(event.target)}
                        /> 
                        </label><br/>
                        <label>Normal
                        <input
                         type="checkbox"
                         name="esnormal"
                         value={true}
                         onChange={event => this.valueToState(event.target)}
                         /> 
                         </label><br/>
                        <label>Gordo
                        <input 
                        type="checkbox"
                        name="esgordo"
                        value={true}
                        onChange={event => this.valueToState(event.target)}
                        /> 
                        </label><br/>
                     </div>
                    </div>
                    <div className="preguntas">
                    <h2>¿En que rango de edad estás?</h2>
                    <div className="respuestas">
                    <label>15 - 17
                        <input type="checkbox"/> </label><br/>
                        <label>18 - 29
                        <input type="checkbox"/> </label><br/>
                        <label>30 - 40 o mas
                        <input type="checkbox"/> </label><br/>
                     </div>
                    </div>
                    <div className="preguntas">
                    <h2>¿En que rango de peso crees que estás?</h2>
                    <div className="respuestas">
                    <label>40 - 60
                        <input type="checkbox"/> </label><br/>
                        <label>60 - 80
                        <input type="checkbox"/> </label><br/>
                        <label>80 -120 o mas
                        <input type="checkbox"/> </label><br/>
                     </div>
                     <div className="litoo">

                     <button className="estas">
                         <Link className="listo" to="/usuario">Siguiente</Link>
                         </button>
                     </div>
                    </div>
                    
            </div>
            </div>
        );

    }
}
export default Cuestionario;