import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/LOGO.jpg'
import '../styles/Cuestionario.css'

class Cuestionario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: null,
            form: {
               tipocuerpo: ""

            },
        };
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        console.log(value);
        const name = target.name;


        this.setState ({
            ...this.state,
            form: {
                ...this.state.form,
                [name]: value,
            },
        });
    };


    
    render() { 
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
                    <label htmlFor="state">
                        Seleccione uno de ellos
                    </label><br/>

                        <select
                        id="tipocuerpo"
                        required=""
                        name="tipocuerpo"
                        onChange={this.handleChange}
                        >
                            
                            <option value="flaco">Flaco</option>
                            <option value="normal">Normal</option>
                            <option value="gordo">Gordo</option>
                        
                        </select>
                    </div>
                    </div>
                    <div className="preguntas">
                    <h2>¿En que rango de edad estas?</h2>
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
                    <h2>¿En que rango de peso crees que estas?</h2>
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
                         <Link className="listo" to="/usuario">!Estas listo¡</Link>
                         </button>
                     </div>
                    </div>
                    
                 </div>
            </div>
        );

    }
}


export default Cuestionario;